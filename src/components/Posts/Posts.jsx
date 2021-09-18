import React, { useState } from 'react';
import "./Posts.css";
import RoomIcon from '@mui/icons-material/Room';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';


const Posts = ({ posts }) => {
    const [post, setPost] = useState(posts);


    return (
        <div className="posts">
            {post.map((pos) => {
                return <Post key={pos.id} pos={pos}></Post>
            })}
        </div>
    );
}
const Post = ({ pos }) => {
    const [singlePost, setSinglePost] = useState(pos);
    const [open, setOpen] = useState(false);
    const handleOpen = (e) => {
        e.preventDefault();
        setOpen(true);
    }
    const handleClose = () => setOpen(false);
    return (
        <div className="sinPost">
            <form className="post-container">
                <label className="pos-title">{singlePost.title}</label>
                <p>{singlePost.description}</p>
                <div className="post-bottom">
                    <div className="location">
                        <RoomIcon></RoomIcon>
                        <span className="loc"> {pos.location}</span>

                    </div>
                    <button onClick={handleOpen} className="btn btn-info">view application</button>
                </div>
            </form>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Application for this job"}
                </DialogTitle>
                <DialogContent>
                    {"total 0 application"}
                </DialogContent>
                <DialogActions>
                    
                </DialogActions>
            </Dialog>
        </div>
    );
}


export default Posts;