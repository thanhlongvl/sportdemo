import React, { Component } from 'react';
import '../assets/W3.css'
import '../assets/style.css'
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button'

class OrderDetailItem extends Component {
    render() {
        var { orderitem, index } = this.props;
        return (
            <tr>
                <td>{index+1}</td>
                <td>{orderitem.id}</td>
                <td>NIKE AIR ZOOM PEGASUS 33 iD</td>
                <td>{orderitem.amount}</td>
                <td>asdf</td>
                <td>adsfasdf</td>
            </tr>
        );
    }

}

export default OrderDetailItem;
