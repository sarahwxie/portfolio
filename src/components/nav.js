import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn
} from 'mdb-react-ui-kit';


class NavBar extends Component {
    render() {
        return(
          <Navbar>
            <Container className="navSelf">
              <Navbar.Brand style={{ fontFamily: "Poppins, sans-serif", fontWeight: "900" }} href="/">SARAH XIE</Navbar.Brand>
              <Navbar.Toggle />
              <Navbar.Collapse>
                <Nav>
                  <Nav.Link style={{ fontFamily: "work-sans, sans-serif", color: "#00008b" }} class="navSelf" href="/#/experience">experience</Nav.Link>
                  <Nav.Link style={{ fontFamily: "work-sans, sans-serif", color: "#00008b" }} class="navSelf" href="/#/projects">projects</Nav.Link>
                  <Nav.Link style={{ fontFamily: "work-sans, sans-serif", color: "#00008b" }} class="navSelf" href="/#/resume">resume</Nav.Link>
                </Nav>

                <div className="mediaIcons">
                  <MDBBtn outline color="dark" floating className='m-1' href='https://www.instagram.com/sarah.xiee/' role='button'>
                    <MDBIcon fab icon='instagram' />
                  </MDBBtn>

                  <MDBBtn outline color="dark" floating className='m-1' href='https://www.linkedin.com/in/sarahwxie/' role='button'>
                    <MDBIcon fab icon='linkedin-in' />
                  </MDBBtn>

                  <MDBBtn outline color="dark" floating className='m-1' href='https://github.com/sarahwxie' role='button'>
                    <MDBIcon fab icon='github' />
                  </MDBBtn>
                  <p className="email">sarahwxie@gmail.com</p>
                </div>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        )
    }
}

export default NavBar;
