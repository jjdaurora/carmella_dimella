import React from 'react';
import Link from 'gatsby-link'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';

import logo from "../../public/static/img/carmella_dimella.png"

class Navi extends React.Component {
    
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

        const pathPrefix =
        process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__

        return (
            <div>
                <Navbar color="white" light expand="md">
                    <NavbarBrand href="/" > <img
                        src={pathPrefix + 'static/img/carmella_dimella.png'}
                        alt="Carmella Dimella Logo"
                        width="250px"
                        height="80px"/>
                        </NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                            <Collapse isOpen={this.state.isOpen} navbar>
                                <Nav className="ml-auto" navbar>
                                    <NavItem>
                                        <NavLink href="/about">About</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="/shop">Shop</NavLink>
                                    </NavItem>  
                                    <NavItem>
                                        <NavLink href="/blog">Blog</NavLink>
                                    </NavItem> 
                                    <NavItem>
                                        <NavLink href="/contact">Contact</NavLink>
                                    </NavItem>                
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

export default Navi