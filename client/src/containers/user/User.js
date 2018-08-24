import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { userRequest } from '../../utils/utils';

import { endpoints, background_images, tmp } from '../../config/config';

import * as userActions from '../../actions/user';

import './User.css';

class UserBlock extends Component {

  state = {
    user: {}
  }

  fetchUserData = () => {
    return new Promise(resolve => {
      userRequest(endpoints.USER_DATA_URL)

      .then(userData => {
        this.props.setUserData(userData);
        resolve(userData);
      })
    })
  }

  renderUserProfileImage = () => {
    const userImg = this.state.user.Usuario_Imagem ?
                    this.state.user.Usuario_Imagem :
                    tmp.USER_IMG

    return (
      <div>
        <img
          alt="userImage"
          className="UserProfileImage"
          src={ userImg } />
      </div>
    )

  }

  renderTags = () => {
    const { user } = this.state;
    const colors = [ '#F74D4D', '#4D994D', '#4D4DF7' ]
    let tags = [];


    for(var x in user) {
      const s = user[x];

      if(s !== "") {
        if(typeof s !== 'number') {
          if(x.includes('Cenario') && !x.includes('Non')) {
            tags.push(s);
          }
        }
      }
    }

    return (
      <div className="Tags">
        {tags.map((tag, i) =>
          <div
            style={{
              backgroundColor: colors[Math.floor(Math.random() * colors.length)]
            }}
            key={i}
            className="Tag">
            { tag }
          </div>)}
      </div>
    )
  }

  renderUserBlock = () => {

    const { username } = this.state.user;

    const self = this;

    const bgImage = {
      background: `url(${background_images.snow})`,
      backgroundAttachment: 'fixed',
      backgroundSize: '100% 100%',
      backgroundRepeat: 'no-repeat'
    }

    return (
      <div className="UserProfileBlock" style={bgImage}>
        <div className="UserProfileWrapper">
          <div className="UserProfileFlex">

            <div className="UserBlockImage">
              { self.renderUserProfileImage() }
            </div>

            <div className="UserBlockName">
              <h3>{ username }</h3>
              { self.renderTags() }
            </div>

          </div>
        </div>
      </div>
    )
  }

  updateUserState = user => this.setState({ user });

  componentDidMount() {
    if(this.props.user.length <= 0) {
      this.fetchUserData()
      .then(data => {
        this.updateUserState(data);
      })
    } else {
      this.updateUserState(this.props.user[0].profile);
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="UserBlock">
          { this.renderUserBlock() }
        </div>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(userActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(UserBlock);
