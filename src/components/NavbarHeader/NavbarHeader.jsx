import React                      from 'react';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';

import "./NavbarHeader.scss";

const NavbarHeader = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="/">Nhentai Generator</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="#/about">About</Nav.Link>
          <Nav.Link href="#/faq">FAQ</Nav.Link>
          <Nav.Link href="#/surprise">Surprise</Nav.Link>
        </Nav>
        <Nav>
          <NavDropdown title="Miruku Sheki" id="basic-nav-dropdown">
            <NavDropdown.Item href="https://github.com/mirukusheki" target="_blank">Github</NavDropdown.Item>
            <NavDropdown.Item href="https://paypal.me/RJKuker?locale.x=id_ID"
                              target="_blank">Donation</NavDropdown.Item>
            <NavDropdown.Item href="https://github.com/mirukusheki/your-num-generator"
                              target="_blank">Repositories</NavDropdown.Item>
            <NavDropdown.Divider/>
            <NavDropdown.Item href="https://mirukusheki.github.io/ashiyaap/"
                              target="_blank">Ashiyaap.exe</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarHeader;
