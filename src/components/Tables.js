import React,{Component} from 'react';
import {Table} from 'reactstrap';
import axios from 'axios';

export default class Tables extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      orders: []
    }
  }

  componentWillMount() {
    axios({ method: 'POST', url: 'https://93870v1pgk.execute-api.ap-south-1.amazonaws.com/latest/shipments/mayank', headers: { Authorization: 'Bearer tTU3gFVUdP' }, data: { email: 'mayankmittal@intugine.com' } })
      .then(res => {
        const orders = res.data;
       
        this.setState({
          orders: res.data,
        })
    
      })

  }

  render() {
    const a = this.state.orders.data;
    console.log('1: ', a)

    return (
     
        <div className="row row-content">
       <div className="col-4 col-sm-4 col-md-4 ">
            <h1>Hello</h1>
       </div>
        <div className="col-8 col-sm-8 col-md-8 ">           
      <Table responsive>
        <thead>
          <tr>
            <th>AWB NUMBER</th>
            <th>TRANSPORTER</th>
            <th>SOURCE</th>
            <th>DESTINATION</th>
            <th>BRAND</th>
            <th>START DATE</th>
            <th>ETD</th>
            <th>STATUS</th>

          </tr>
        </thead>
        <tbody>
            {this.state.orders.data && this.state.orders.data.map((detail, index) => {
              return (
              <tr key={index}>
                <td>{detail.awbno}</td>
                <td>{detail.carrier}</td>
                <td>{detail.from}</td>
                <td>{detail.to}</td>
                <td>{detail.carrier}</td>
                <td>{detail.pickup_date}</td>
                <td>ETD</td>
                <td>{detail.current_status}</td>

              </tr>
              );
            })}
        </tbody>
      </Table>
      </div>
      </div>
      
      
    );
  }
}

  

