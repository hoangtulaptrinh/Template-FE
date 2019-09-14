import React from 'react';
import './SecondNavbar.css'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink, } from 'reactstrap';
import logoNavbar from './imgNavbar/logoNavbar.png'

export default class SecondNavbar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div className='SecondNavbar'>
        <div className='InsideSecondNavbar'>
        <Navbar light expand="md" className='Navbar'>
          <NavbarBrand className='NavbarBrand' href="/"><img src={logoNavbar} alt='logoNavbar'/></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="">Pages</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="">Multilevel</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="">Portfolio</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="">Blog</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="">Mega Menu</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="">Admin theme</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        </div>
      </div>
    );
  }
}