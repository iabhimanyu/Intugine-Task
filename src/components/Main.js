import React, { Component } from 'react';
import Header from './Header';
import Timelines from './Timelines';
import { Switch, Route, Redirect} from 'react-router-dom';

class Main extends Component {

  constructor(props) {
    super(props);
    
  }

  render() {
    
    return (
      <div>
        <Header />

       
        <Timelines/>
       
       
      </div>
    );
  }
}

export default Main;