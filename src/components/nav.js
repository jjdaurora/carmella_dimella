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

import logo from "../../public/static/img/carmella_dimella.png";

const navBrandingCentered = {
    width: "300px",
    height: "100px",
}

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
                    <NavbarBrand><Link to="/"> <img
                        src={pathPrefix + 'static/img/carmella_dimella.png'}
                        alt="Carmella Dimella Logo" style={navBrandingCentered}/></Link>
                    </NavbarBrand>
                        {/* <NavbarToggler onClick={this.toggle} /> */}
                            {/* <Collapse isOpen={this.state.isOpen} navbar> */}
                                <Nav className="ml-auto" navbar>
                                    <NavItem>
                                        <NavLink>New website coming soon!</NavLink>
                                    </NavItem>
                                
                                </Nav>
                            {/* </Collapse> */}
                </Navbar>
            </div>
        );
    }
}

export default Navi