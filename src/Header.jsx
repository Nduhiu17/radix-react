import React, { Component } from 'react'
import Navbar from './Navbar';
import SaleDetail from './SaleDetail';

export default class Header extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <SaleDetail/>
      </div>
    )
  }
}
