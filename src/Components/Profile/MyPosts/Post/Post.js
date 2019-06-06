import React from 'react';
import './Post.scss'

const Post = (props) => {
    return (
        <div className="Post">
            <img src="https://www.freeiconspng.com/uploads/person-icon-8.png"/>

            <p>{props.message}</p>

            <span className="Likes">{props.likeCount}</span>

            <a className="PostLike">Like</a>
        </div>
    )
}

export default Post;