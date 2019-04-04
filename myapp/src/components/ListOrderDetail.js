import React, { Component } from 'react';
import '../assets/W3.css';
import '../assets/style.css';



class ListOrderDetail extends Component {
    render() {
        var { order } = this.props;
        return (
            <div class="w3-rest w3-card-8" style={{ marginLeft: 23 + '%' }}>
                <h2 class="w3-center w3-text-indigo"><strong>DETAILED ORDERS</strong></h2>
                <div class="w3-container w3-half ">
                    <h5>Order form ID: <strong>DH001</strong><br></br>Customer name: <strong>{order.name}</strong></h5>
                </div>
                <div class="w3-container w3-half w3-right-align">
                    <h5>Date order: <strong>22/02/2016</strong><br></br>Status: <strong style={{ color: 'green' }}><i>Delivered</i></strong></h5>
                </div>

                <div class="w3-container">
                    <table class="w3-table-all">
                        <thead>
                            <tr class="w3-red">
                                <th>Ordinal numbers</th>
                                <th>Product ID</th>
                                <th>Product name</th>
                                <th>Sale Price</th>
                                <th>Sale</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.children}
                        </tbody>
                    </table>
                    <h3 class="w3-right-align"><strong>TOTAL:</strong> <span class="w3-text-red">$1019</span></h3>
                </div>
                <br></br>
            </div>
        );
    }

}

export default ListOrderDetail;
