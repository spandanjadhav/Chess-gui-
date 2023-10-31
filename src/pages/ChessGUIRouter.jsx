import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";
import ChooseGame from "./ChooseGame"
import PlayGame from "./PlayGame"

export default function ChessGUIRouter() {
    return <BrowserRouter>
        <Routes>
            <Route index element={<Login/>}/>
            <Route path="/signup" element={<SignUp/>}/>
            <Route path="/choosegame" element={<ChooseGame/>}/> 
            <Route path="/playgame" element={<PlayGame/>}/> 
            <Route path="/*" element={<Login/>}/>
        </Routes>
    </BrowserRouter>
}

