import { Alert } from 'react-bootstrap'

export default function ErrorMessage() {
    return (
        <div>
            <Alert variant="danger" className="alert-msg">
                Username and password must be specified!
            </Alert>
        </div>
    )
}