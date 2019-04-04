import React, { Component } from 'react'
import LoginMainForm from './LoginMainForm';
import Loader from './Loader';

export default class LoginForm extends Component {
  render() {
    return (
      <div>
        <div className="login-main">
          <div className="login-left">
          </div>
          <div className="login-center">
             <Loader/>
             <LoginMainForm/>
          </div>
          <div className="login-right">
          </div>
        </div>
      </div>
    )
  }
}
