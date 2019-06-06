import React from 'react';
import './MyPosts.scss';
import Post from './Post/Post';


const MyPosts = (props) => {

  let newPostElement = React.createRef();

  let onAddPost = () => {
      props.addPost()
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text)
  }

    return (
        <div className="PostsWrapper">
          <h4>My posts</h4>
          
          <div>
            <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
          </div>

          <div>
            <button onClick={onAddPost}>Add post</button>
          </div>


          <div className="PostBlocks">

           {props.posts.map(post => {
             return (
               <Post key={post.id} message={post.message} likeCount = {post.likes}/>
             )
           })}
          </div>
      </div>
    )
}

export default MyPosts;