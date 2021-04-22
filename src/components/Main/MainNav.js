import React from 'react';
import {Navbar} from 'react-bootstrap';
import logo from './hlogo.png';

const MainNav = ()=>{
    return(
        <Navbar bg="primary" variant='dark'>
    <Navbar.Brand href="#home">
      <img
        src={logo}
        width="40"
        height="40"
        className="d-inline-block align-top"
        alt="Assiniboine logo"
      />
    </Navbar.Brand>
    <h4 style={{color:'white'}}>HYDRO STAFF CONTRIBUTION</h4>
  </Navbar>
    )
}
export default MainNav;