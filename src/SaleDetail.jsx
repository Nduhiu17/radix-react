import React, { Component } from 'react'

export default class SaleDetail extends Component {
  render() {
    return (
      <div>
        <div class="sale-detail_wrapper">
            <div class="sale-detail">
                <p>Buyer name</p>
                <p>created by</p>
                <p>Date created</p>

            </div>
            <div class="sale-detail total-billing">
                <p>Total Billing</p>
                <p>amount</p>

            </div>
        </div>
      </div>
    )
  }
}
