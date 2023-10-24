import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";

export default function ChessGUIRouter() {
    return <BrowserRouter>
        <Routes>
            <Route index element={<Login/>}/>
            <Route path="/signup" element={<SignUp/>}/>
            <Route path="/*" element={<Login/>}/>
        </Routes>
    
    </BrowserRouter>
}