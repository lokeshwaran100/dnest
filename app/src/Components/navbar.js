import React,{useState, useEffect} from 'react'
import {Link, Redirect} from 'react-router-dom'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import firebase from 'firebase'
import { Container } from 'react-bootstrap';
import { useWeb3React } from '@web3-react/core';

export default function NavigationBar({companyName="D-Nest"}) {

    //Authstate
    // const [authState, setAuthState ] = useState(null);
    const { active, deactivate } = useWeb3React();
    //Transparent scroll navbar state
    const [pos, setPos] = useState("top")

    useEffect (()=>{     
      var path = window.location.pathname;

      if(path == "/home"){
      document.addEventListener("scroll", e => {
          let scrolled = document.scrollingElement.scrollTop;
  
          if (scrolled >= 5){
             setPos("moved")
          } else {
             setPos("top")
          }
      })
    }else{
      setPos("moved")
    }
  },[])
    

    // useEffect(() => {
    //     firebase.auth().onAuthStateChanged(function (user) {
    //       if (!user) {
    //         setAuthState(false)
    //       }else{
    //         setAuthState(true)
    //       }
    //     });
    //   }, [])

//signout function
// const Logout = () => {
//   firebase.auth().signOut().then(()=>{
//     <Redirect to="/" />
//   })
//   .catch((error)=>{
//    toast(error, {type:"error"})
//   })
// }



  return (
  <Navbar expand="lg" className="navbar" 
    style={{backgroundColor: pos === "top" ? "" : "#fff", boxShadow: pos === "top" ? "" : "0.8px 0.8px 0.8px #000"}}
  >
  <Link to="/"><Navbar.Brand  className={pos === "top" ? "text-light brand-name": "text-dark brand-name"}>{companyName}</Navbar.Brand></Link>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  {active&&  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link as={Link} to="/"
      className={pos === "top" ? "text-light": "text-dark"}
      >Home</Nav.Link>
      {/* {authState ? ( */}
       <React.Fragment>
      <Nav.Link as={Link} to="/rentings" className={pos === "top" ? "text-light": "text-dark"}>Rentings</Nav.Link>
      {/* <Nav.Link as={Link} to="/family-apartments" className={pos === "top" ? "text-light": "text-dark"}>Family Apartments</Nav.Link>
      <Nav.Link as={Link} to="/vacation-villas" className={pos === "top" ? "text-light": "text-dark"}>Villas for Vacation</Nav.Link> */}
      </React.Fragment>
      {/* ):""} */}
    </Nav>
    <Navbar.Collapse className="justify-content-end">
    <NavDropdown title={<FontAwesomeIcon icon={faUserCircle} size="lg"
    className={pos === "top" ? "text-light dropdown-menu-bar": "text-dark dropdown-menu-bar"}
    />}>
      {/* {authState ? ( */}
        <>
        <Container>
        <Nav.Link as={Link} to="/my-bookings" className="text-dark">My Bookings</Nav.Link>
        <Nav.Link as={Link} to="/my-home-bookings" className="text-dark">My Rentals</Nav.Link>
        <Nav.Link onClick={()=>deactivate()} className="text-dark">Disconnect</Nav.Link>
        </Container>
        </>
        {/* ) : (
          <>
        <NavDropdown.Item><Nav.Link as={Link} to="/">Login</Nav.Link></NavDropdown.Item>
        <NavDropdown.Item><Nav.Link as={Link} to="/">Signup</Nav.Link></NavDropdown.Item>
        <NavDropdown.Divider />
        </>
        )} */}
        {/* {authState ? (
        <>
        <NavDropdown.Item><Button className="btn btn-danger" onClick={Logout}>Logout</Button></NavDropdown.Item>
        </>
        ) :""} */}
      </NavDropdown>

    {/* {authState ? ( */}
    <>
    <Navbar.Text>
      <Link to="/become-host"><Button className="host-btn" variant="outline-primary">Post for rent</Button></Link>
    </Navbar.Text>
    </>
      {/* ):""} */}

  </Navbar.Collapse>
  </Navbar.Collapse>}
  {/* Error toast */}
  <ToastContainer/>
</Navbar>

    )
}
