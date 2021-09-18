import axios from 'axios';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import { base_url } from '../../config/data';
import "./Forgot.css";
import { addToken } from '../../config/reducer';

const Forgot = ( { addToken } ) => {
    const history = useHistory();
    const [ email, setEmail ] = useState("");
    const handleReset = async (e)=>{
        e.preventDefault();
        try{
            let res = await axios.get(`${base_url}auth/resetpassword?email=${email}`);
            let token = res.data.data.token;
            addToken(token);
            let res2 = await axios.get(`${base_url}auth/resetpassword/${token}`);
            let msg = res2.data.success;
            console.log(msg);
            if(msg === true) {
                history.push("/setpass");
            }
        }catch(err){
            console.log(err);
        }
    }
    return (
        <div className="Forgot">
            <form className="forgot-container">
                <h2>Forgot your password?</h2>
                <p style={{ fontSize:"0.8rem" }}>Enter the email associated with your account and we'll send you instruction to reset your password.</p>
                <div className="email">
                    <label>Email</label>
                    <input type="email" onChange={ (e) => setEmail(e.target.value) } value={email} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your Email" required />
                </div>
                <div className="Login-btn">
                    <input type="submit" onClick={ handleReset } value="Submit"  />
                </div>
            </form>
        </div>
    );
}

const mappropsToStates = (dispatch) =>{
    return {
        addToken : (token) => dispatch(addToken(token)), 
    }
}

export default connect(null, mappropsToStates)(Forgot);