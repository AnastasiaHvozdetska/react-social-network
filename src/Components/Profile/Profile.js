import React from 'react';
import './Profile.scss';

import ProfileHeaderImg from './ProfileHeaderImg/ProfileHeaderImg';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';


const Profile = (props) => {
    return (
        <div className="Profile">
          <ProfileHeaderImg />
          <ProfileInfo />

          <MyPostsContainer store={props.store}
          />
        </div>
    )
}

export default Profile;