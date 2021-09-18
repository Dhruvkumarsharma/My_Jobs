import React from 'react';
import "./Header.css"
import { useHistory } from "react-router-dom";
import { connect } from 'react-redux';
import { Avatar, Button } from '@mui/material';
import { addUser } from '../../config/reducer';


const Header = (props) => {
    console.log(props);
    let history = useHistory();
    const handleLogin = () => {
        history.push("/login");
    }
    const handlePostJob = (e) => {
        e.preventDefault();
        history.push("/postjobs");
    }
    const handleSignout = () =>{
        props.addUser(null);
    } 
    return (
        <div className="header">
            <div className="header-title">
                <span className="my">My</span><span className="jobs">Jobs</span>
            </div>
            {props.user ? (
                <div className="header-signin">
                    <Button onClick={handlePostJob} variant="text" >Post a Job</Button>
                    <Avatar className="signout" onClick={ handleSignout } variant="text" ></Avatar>
                </div>
            ) : (
                <div className="header-button">
                    <button className="butn" onClick={handleLogin}>Login/Signup</button>
                </div>

            )}
        </div>
    );
}
const mapStatetoProps = (Store) => {
    return {
        user: Store.user,
    }
}
const mapDispatchToProp =( dispatch ) => {
    return {
        addUser : (user) => dispatch(addUser(user)),
    };
};

export default connect(mapStatetoProps, mapDispatchToProp)(Header);