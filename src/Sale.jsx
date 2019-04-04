import React, { Component } from 'react'
// import Addproductbutton from './Addproductbutton';
import SaleProducts from './SaleProducts';
import ProductDialog from './ProductDialog';
import SearchSaleProducts from './SearchSaleProducts';

export default class Sale extends Component {
  render() {
    return (
      <div>
          <div className="main-sale-body">
                <div className="addproduct">
                    <SearchSaleProducts/>
                    <ProductDialog/>
                </div>
                <SaleProducts/>
          </div>
      </div>
    )
  }
}
