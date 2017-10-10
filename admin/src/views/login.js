import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userLogin } from 'admin-on-rest';
import FacebookAuth from 'react-facebook-auth';

const FacebookButton = ({ onClick }) => (
  <button onClick={onClick}>
    Login with facebook
  </button>
);

class LoginPage extends Component {
  authenticate = (response) => {
    console.log(response);
    const credentials = {
      username: response.name,
      userId: response.userID,
      accessToken: response.accessToken,
      expiresIn: response.expiresIn
    };

    // Api call to server so we can validate the token

    // Dispatch the userLogin action (injected by connect)
    this.props.userLogin(credentials);
  };
  render() {
    return (
      <div>
        <h1>Facebook Auth</h1>
        <FacebookAuth
          appId={process.env.REACT_APP_FACEBOOK_APP_ID}
          callback={this.authenticate}
          component={FacebookButton}
        />
      </div>
    );
  }
};

export default connect(undefined, { userLogin })(LoginPage);
