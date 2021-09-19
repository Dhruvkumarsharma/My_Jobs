import React, { useState } from 'react';
import "./SetPass.css";
import axios from"axios";
import { base_url } from '../../config/data';
import { connect } from 'react-redux';
import { useHistory } from "react-router-dom";
import { addUser } from '../../config/reducer';

const SetPass = (props) => {
    let history = useHistory();
    const [ password, setPassword ] = useState("");
    const [ confirmPassword, setConfirmPassword ] = useState("");
    const handleOnClick = async (e) =>{
        e.preventDefault();
        let token = props.token;
        try {
            let res = await axios.post(`${base_url}auth/resetpassword`, { password, confirmPassword, token });
            props.addUser(res.data);
            history.push("/feeds");
        }catch(err) {
            console.log(err.message);
        }
    }

    return ( 
        <div className="setpass">
            <form className="setpass-container">
                <h2>Reset Your Password</h2>
                <p style={{ fontSize:"0.8rem" }}>Enter your password below.</p>
                <div className="email">
                    <label>New Password</label>
                    <input type="text" onChange={(e) => setPassword(e.target.value)} value={password} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Password" required />
                </div>
                <div className="Confirm-password">
                    <label>Confirm Password</label>
                    <input type="text" onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Password" required />
                </div>
                <div className="Login-btn">
                    <input type="submit" onClick={handleOnClick} value="Submit"  />
                </div>
            </form>
        </div>
     );
}

const mapStateToprops = (Store) => {
    return {
        token : Store.token,
    }
}
const mapPropsToState = (dispatch) => {
    return {
        addUser : (user) => dispatch(addUser(user))
    }
}
 
export default connect(mapStateToprops, mapPropsToState)(SetPass);