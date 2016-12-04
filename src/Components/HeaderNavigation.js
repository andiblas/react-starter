import React from 'react';
import { Button, Navbar, Nav, NavItem, Input, NavDropdown, MenuItem } from 'react-bootstrap';

class HeaderNavigation extends React.Component {
  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">Mauricio Pujadas</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav pullRight>
          <NavItem eventKey={1} href="#">Home</NavItem>
          <NavItem eventKey={2} href="#">Contacto</NavItem>
        </Nav>
      </Navbar>
    );
  }
}
export default HeaderNavigation;
