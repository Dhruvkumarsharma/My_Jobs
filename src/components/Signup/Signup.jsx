import React, { useState } from 'react';
import "./Signup.css";
import { NavLink, useHistory } from 'react-router-dom';
import axios from 'axios';
import { base_url } from '../../config/data';
import { connect } from 'react-redux';
import { addUser } from '../../config/reducer';

const Signup = ( { addUser }) => {
    let history = useHistory();
    const [ userRole, setUserRole ] = useState(0);
    const [ name, setName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ confirmPassword, setConfPass ] = useState("");
    const [ skills, setSkills ] = useState("");

    const handleSignup = async (e) =>{
        e.preventDefault();
        try{
            let res = await axios.post(`${base_url}auth/register`, { "email":email, "userRole":userRole, "password":password, "confirmPassword":confirmPassword, "name":name, "skills":skills  });
            addUser(res.data);
            console.log(res.data);
            history.push("/feeds");
        }catch( err ) {
            console.log(err.message);
        }
    }

    return (
        <div className="signup">
            <form className="signup-container">
                <h3>Signup</h3>
                <div className="buttn">
                    <label>I'm a</label>
                    <div className="btn-options">
                        <button onClick={(e)=>{e.preventDefault(); setUserRole(0)}} className="rec">
                            Recuiter
                        </button>
                        <button onClick={(e)=>{e.preventDefault(); setUserRole(1)}} className="primary">candidate</button>
                    </div>
                </div>
                <div className="Name">
                    <label>Full Name</label>
                    <input type="text" onChange={(e)=>setName(e.target.value)}  value={name} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your Name" />
                </div>
                <div className="email">
                    <label>Email</label>
                    <input type="email" onChange={(e)=>setEmail(e.target.value)} value={email} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your Email" />
                </div>
                <div className="password-container">
                    <div className="pass">
                        <label>Password</label>
                        <input type="password" onChange={ (e) => setPassword(e.target.value) } value={password} className="form-control" id="exampleInputPassword1" placeholder="Password" />
                    </div>
                    <div className="conpass">
                        <label>Confirm Password</label>
                        <input type="password" onChange={ (e) => setConfPass(e.target.value) } value = { confirmPassword } className="form-control" id="exampleInputPassword1" placeholder="Password" />
                    </div>
                </div>
                <div className="skills">
                    <label>Skills</label>
                    <input type="text" onChange={(e)=>setSkills(e.target.value)} value={skills} className="form-control" id="exampleInputPassword1" placeholder="Skills" />
                </div>
                <div className="signup-btn">
                    <input className="sign-btn" onClick={ handleSignup } type="submit" value="Signup" />
                </div>
                <div className="sign-signup">
                    <span className="signup-text">Have an account?</span><NavLink to="/login"><span className="signup-link">Login</span></NavLink>
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

export default connect(null , mapDispatchToProp)(Signup);