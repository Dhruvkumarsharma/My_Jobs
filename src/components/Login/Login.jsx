import React, { useState } from 'react';
import "./Login.css"
import { NavLink } from "react-router-dom";
import axios from 'axios';
import { base_url } from '../../config/data';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import {addUser} from "../../config/reducer";


const Login = ( { addUser }) => {
    let history = useHistory();

    const [ email, setEmail ] = useState("");
    const [password, setPassword] = useState("");
    const handleLogin = async (e) =>{
        e.preventDefault();
        try{
            let res = await axios.post(`${base_url}auth/login`, {email, password});
            addUser(res.data);
            history.push("/feeds");
        }catch(err) {
            console.log(err.message);
        }
    }
    return (
        <div className="login">
            <form className="container">
                <h3>Login</h3>
                <div className="email">
                    <label>Email</label>
                    <input type="email" onChange={(e)=>setEmail(e.target.value)} className="form-control" value={email} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your Email" />
                </div>
                <div className="password">
                    <div>
                        <label>Password</label>
                        <NavLink to="/forgot"><small id="emailHelp" className="form-text text-muted">Forgot your Password ?</small></NavLink>
                    </div>
                    <input type="password" onChange={(e)=>setPassword(e.target.value)} value={password} className="form-control" id="exampleInputPassword1" placeholder="Enter your Password" />
                </div>
                <div className="Login-btn">
                    <input type="submit" onClick={ handleLogin } value="Login" />
                </div>
                <div className="log-signup">
                    <span className="signup-text">New to MyJobs?</span><NavLink to="/signup"><span className="signup-link">  Create an account</span></NavLink>
                </div>
            </form>
        </div>
    );
}
const mapDispatchToProp =( dispatch ) => {
    return {
        addUser : (user) => dispatch(addUser(user)),
    };
};


export default connect(null , mapDispatchToProp)(Login);