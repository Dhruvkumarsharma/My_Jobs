import React from 'react';
import "./Home.css";


const Home = () => {

    return (
        <div className="home">
            <div className="mid">
                <div className="text">
                    <span className="wel">Welcome to</span>
                    <div className="myjobs">
                        <span className="my">My<span className="jobs">Jobs</span></span>
                    </div>
                    <div className="gettings">
                        <button className="button">Get Started</button>
                    </div>
                </div>
                <div className="pic">
                    <img src="img1.PNG" alt="" className="img" />
                </div>
            </div>
        </div>
    );
}

export default Home;