import React from 'react';

import './ProfilePage.css';

import Navbar from '../../components/loggedInNavbar/Navbar';
import UserBlock from '../../containers/user/User';

const ProfilePage = props => (
  <div className="ProfilePage">
    <Navbar />
    <UserBlock />
    {/*<Route path="/user/feed" component={ userGrid }/>*/}
    <div className="UserStuffWrapper">

      <div className="UserMenuDisplay"></div>
      <div className="UserFeedWrapper"></div>
      <div className="UserRecommendations"></div>

    </div>
  </div>
)

export default ProfilePage;
