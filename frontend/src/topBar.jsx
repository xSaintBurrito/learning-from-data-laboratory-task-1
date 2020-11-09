import React, { Component } from 'react';
import {Navbar,Nav,NavDropdown,Form,FormControl,Button} from 'react-bootstrap'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import RateMovie from './rateMovie'
import ShowUsers from './showUsers'
class TopBar extends Component {
    state = {  }
    render() { 
        return <Router>
        <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/rate">Learning from Data</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/rate">Rate movie</Nav.Link>
            <Nav.Link href="/users">Check other users ratings</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Route path="/rate" component={RateMovie} />
      <Route path="/users" component={ShowUsers} />
      </Router>
    }
}
 
export default TopBar;