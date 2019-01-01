import React, { Component } from 'react'
import FormDialog from './FormDialog';

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <div class="header_wrapper">
            <div class="accounts-nav">
                <div>Login</div>
                <div>Logout</div>
                <div>Accounts</div>
            </div>

            <div class="main-dashboard">
                <div>all sales</div>
                <div>my sales</div>
                <div>products</div>
                <div><FormDialog/></div>
            </div>
        </div>
    </div>
    )
  }
}
