import React, {useState} from 'react';
import "./login.css"
import {useDispatch} from 'react-redux';
import { login } from '../../redux/apiCalls';

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch= useDispatch()
    
    const handleClick= (e)=>{
        e.preventDefault()
        //handle login with Redux Toolkit
        login(dispatch, {username, password})
        
    }
    return (
        <div className="login">
            <input className="input" type="text" placeholder="username" onChange={(e)=>setUsername(e.target.value)}/>
            <input className="input" type="password" placeholder="password" onChange={(e)=>setPassword(e.target.value)} />
            <button className="button" onClick={handleClick}>Login</button>
        </div>
    )
}

export default Login
