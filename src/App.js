import React,{Component} from 'react';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import Main from './components/Main';

import { BrowserRouter } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
        
          <Main />
         
      </div>
      </BrowserRouter>
    );
  }
}
export default App;
