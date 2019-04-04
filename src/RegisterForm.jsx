import React, { Component } from 'react'
import RegisterMainForm from './RegisterMainForm';
import Loader from './Loader';

export default class RegisterForm extends Component {
  render() {
    return (
      <div>
          <div className="register-main">
            <div className="register-left">
            </div>
            <div className="register-center">
                <Loader/>
                <RegisterMainForm/>
            </div>
            <div className="register-right">
            </div>
          </div>
      </div>
    )
  }
}
