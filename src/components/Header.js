import React, { Component } from 'react';
import {Nav, Navbar, NavbarBrand,NavbarToggler,Collapse,NavItem, Jumbotron,Card, Button, CardImg, CardTitle, CardText, CardDeck,
    CardSubtitle, CardBody } from 'reactstrap';
import {NavLink} from 'react-router-dom';
import Logo from '../assets/logo.svg';
import Profile from '../assets/profile.svg';
import Destination from '../assets/destination.svg';

import Cards from './Cards'
class Header extends Component {
    constructor(props) {
        super(props);
    
        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
          isNavOpen: false
        };
      }

      toggleNav() {
        this.setState({
          isNavOpen: !this.state.isNavOpen
        });
      }

    render() {
        
        return(
            <React.Fragment>
                <Navbar dark expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr-auto" href="/"><img src={Logo} height="30" width="41" alt='' /></NavbarBrand>
                        <NavbarBrand className="mr-auto" href="/">Intugine</NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav className='rightNav ml-auto' navbar>
                            <NavItem>
                            <NavLink className="nav-link"  to='/home'><span className="fa fa-home fa-lg"></span> Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/brands'><span className="fa fa-info fa-lg"></span> Brands</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link"  to='/transporters'><span className="fa fa-truck fa-lg"></span> Transporters</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/profile'><img src={Profile} height="30" width="41" alt='' /></NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/drop'><span className="fa fa-angle-down fa-2x"></span></NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/destination'><img src={Destination} height="30" width="41" alt='' /></NavLink>
                            </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
              
              <Jumbotron>  
                <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">

                              <Cards/>
                         
                          
                            </div>
                        </div>
                    </div>
                    
                
                </Jumbotron>
            </React.Fragment>
        );
    }
}
export default Header;