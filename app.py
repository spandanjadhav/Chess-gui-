from flask import Flask, render_template, url_for, redirect
from flask_sqlalchemy import SQLAlchemy
from flask_login import UserMixin, login_user, LoginManager, login_required, logout_user, current_user
from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, SubmitField
from wtforms.validators import InputRequired, Length, ValidationError
from flask_bcrypt import Bcrypt
import datetime

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:''@localhost/chess'
app.config['SECRET_KEY'] = 'secretkey'
db = SQLAlchemy(app)
bcrypt = Bcrypt(app)
app.app_context().push()

login_manager = LoginManager()
login_manager.init_app(app)
login_manager.login_view = "login"

@login_manager.user_loader
def load_user(user_id):
    return User.query.get(int(user_id))

class User(db.Model, UserMixin):
    id = db.Column(db.Integer, primary_key = True, nullable = False)
    username = db.Column(db.String(100), nullable = False, unique = True)
    password = db.Column(db.String(100), nullable = False)
    games = db.relationship('Game', backref = 'user', cascade = "all, delete")

    def __init__(self, username, password):
        self.username = username
        self.password = password

class Game(db.Model):
    id = db.Column(db.Integer, primary_key = True, nullable = False)
    date = db.Column(db.DateTime, default = datetime.datetime.now, nullable = False)
    difficulty = db.Column(db.String(100))
    mode = db.Column(db.String(100), nullable = False)
    result = db.Column(db.String(100), nullable = False)
    user_id = db.Column(db.String(100), db.ForeignKey('user.username'), nullable = False)
    states = db.relationship('State', backref = 'game', cascade = "all, delete")

    def __init__(self, difficulty, mode, result, user_id):
        self.difficulty = difficulty
        self.mode = mode
        self.result = result
        self.user_id = user_id

class State(db.Model):
    turn = db.Column(db.Integer, primary_key = True, nullable = False)
    fen = db.Column(db.String(100), nullable = False)
    game_id = db.Column(db.Integer, db.ForeignKey('game.id'), nullable = False)

    def __init__(self, fen, game_id):
        self.fen = fen
        self.game_id = game_id

class RegisterForm(FlaskForm):
    username = StringField(validators={InputRequired(), Length(
        min=6, max=20)}, render_kw={"placeholder": "Username"})
    password = PasswordField(validators={InputRequired(), Length(
        min=8, max=20)}, render_kw={"placeholder": "Password"})
    submit = SubmitField("Register")

    def validate_username(self, username):
        existing_user_username = User.query.filter_by(
            username=username.data).first()
        if existing_user_username:
            raise ValidationError(
                "That username already exits. Please choose a different one.")

class LoginForm(FlaskForm):
    username = StringField(validators={InputRequired(), Length(
        min=6, max=20)}, render_kw={"placeholder": "Username"})
    password = PasswordField(validators={InputRequired(), Length(
        min=8, max=20)}, render_kw={"placeholder": "Password"})
    submit = SubmitField("Login")

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/login', methods=['GET', 'POST'])
def login():
    form = LoginForm()
    if form.validate_on_submit():
        user = User.query.filter_by(username=form.username.data).first()
        if user:
            if bcrypt.check_password_hash(user.password, form.password.data):
                login_user(user)
                return redirect(url_for('dashboard'))
    return render_template('login.html', form=form)

@app.route('/dashboard', methods=['GET', 'POST'])
@login_required
def dashboard():
    return render_template('dashboard.html')

@app.route('/logout', methods=['GET', 'POST'])
@login_required
def logout():
    logout_user()
    return redirect(url_for('login'))

@app.route('/register', methods=['GET', 'POST'])
def register():
    form = RegisterForm()
    if form.validate_on_submit():
        hashed_password = bcrypt.generate_password_hash(form.password.data)
        new_user = User(username=form.username.data, password=hashed_password)
        db.session.add(new_user)
        db.session.commit()
        return redirect(url_for('login'))
    return render_template('register.html', form=form)

if __name__ == '__main__':
    app.run(debug=True)