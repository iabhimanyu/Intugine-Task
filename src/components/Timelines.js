import React from 'react';
import { Table } from 'reactstrap';
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';
import destination from '../assets/destination.svg';
import warehouse from '../assets/warehouse.svg';
import {Link} from 'react-router-dom'
import axios from 'axios';
export default class Timelines extends React.Component {
   constructor(props) {
    super(props);
       
}

fetchDetails = (order) => {
 
  console.log('We need to get the details for ', order);
  console.log(order.scan)
  const scan_rev = order.scan.reverse();
  this.setState({scan_rev})

}



   state = {
        orders: [],
        scan_rev: []
      }


      componentDidMount() {
        axios({ method: 'POST', url: 'https://93870v1pgk.execute-api.ap-south-1.amazonaws.com/latest/shipments/mayank', headers: {Authorization: 'Bearer tTU3gFVUdP'}, data: { email: 'mayankmittal@intugine.com' } })
        .then(res=>{
                const orders = res.data.data;
                const scans = res.data.data[0].scan;
               const scan_rev = scans.reverse();
               
                this.setState({orders})
                this.setState({scan_rev})
                
                
               
      })
    }

  renderTableData() {
    return this.state.orders.map((order, index) => {
     
       const {_id, awbno, carrier, from, to ,pickup_date , extra_fields,current_status} = order
      
     
      
       return (
       
          <tr key={index}  onClick={() => this.fetchDetails(order)} >
            
         <Link to="/">    <td className="td">{awbno}</td></Link>
             <td className="td">{carrier}</td>
             <td className="td">{from}</td>
             <td className="td">{to}</td>
             <td className="td">{carrier}</td>
             <td className="td">{pickup_date}</td>
             <td className="td">{extra_fields? extra_fields.expected_delivery_date: ''}</td>
             <td className="td" style = {current_status==='Delivered'?{color:'blue'}:null}>{current_status}</td>
            
          </tr>
       )
    })
 }



 renderTimeLineData(){
  return this.state.scan_rev.map((scan, index) => {
    const {time, location, status_detail} = scan
    return(
      <TimelineItem>
      <p className="timeline_content">
        <span className="timeline_status">
          {status_detail}
      </span>
        <span className="timeline_date">
          {time}
      </span>
        <span className="timeline_time">
          {location}
      </span>
      </p>
    </TimelineItem>
    )

  }
    
  )}

 

 

  render() {

    const TimelineList = () => {
      return(
        
       <div>
        <Timeline lineColor={'red'}>
          <div className="timeline_image1">
            <img src={destination} alt="" />
          </div>
           {this.renderTimeLineData()}

         
         
          
          <div className="timeline_image2">
            <img src={warehouse} alt="" />
          </div>
        </Timeline> 
        </div>
      
      );
    }

    
    return (

 <div class="row row-content ">
       
    <div class="col-12 col-sm-6">
        <TimelineList/>
    </div>
    <div class="col-12 col-sm-4 order-sm-last col-md-6">
    <Table className="table table-fixed scrollbar">
 <thead  >
 
  

   <tr>
     <th className="th">AWB NUMBER</th>
     <th className="th">TRANSPORTER</th>
     <th className="th">SOURCE</th>
     <th className="th">DESTINATION</th>
     <th className="th">BRAND</th>
     <th className="th">START DATE</th>
     <th className="th">ETD</th>
     <th className="th">STATUS</th>
   </tr>
 </thead>
 <tbody >
 {this.renderTableData()}
 </tbody>
</Table>

    </div>

    </div>
   
       
    )
  }
}