import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import {Link} from "react-router-dom";
import "./css/Navbar.scss"
function NavigationBar() {
return (
<Navbar className="navbar">
<Navbar.Collapse id="basic-navbar-nav">
<Nav >
<a className="button" href="/homepage">Home</a>
<a className="button" href="/projects">Projects</a>
<a className="button" href="/about">About</a>

</Nav>
</Navbar.Collapse>
</Navbar>
);
}
export default NavigationBar;