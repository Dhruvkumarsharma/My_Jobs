import React, { useEffect, useState } from 'react';
import "./Feeds.css";
import Posts from '../Posts/Posts';
import axios from 'axios';
import { base_url } from '../../config/data';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { useHistory } from 'react-router';
import { connect } from 'react-redux';

const Feeds = ({token}) => {
    const [ posts, setPost ] = useState();
    let history = useHistory();
    const handleonclick = ()=>{
        history.push("/postjobs");
    }
    useEffect( () =>{
        async function fetchData() {
            try{
                let jobs = await axios.get(`${base_url}/jobs`, {
                    header: {
                        "key": "Authorization", 
                        "value" : token, 
                        "type" : "text"
                    }
                });
                console.log(jobs);
                setPost(jobs.data.data);

            }catch(err){
                console.log(err.message);
            }

        }
        fetchData();
    }, [])
    return ( 
        <div className="feeds">
            <h4 className="feed-title">Jobs posted by you</h4>
            <div className="feed-posts">
                {posts?
                (<Posts posts={posts}></Posts>):(
                    <div className="empty">
                        <AssignmentIcon style={{ color:"lightgray", height:"100px", width:"40px", fontSize:"large" }} />
                        <button onClick={ handleonclick }  className="sign-btn">Post a Job</button>
                    </div>
                )}
            </div>
        </div>
     );
}
const mapStateToProps = ( Store ) => {
    return {
        token : Store.token,
    }
}
 
export default connect(mapStateToProps, )(Feeds);