import React from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap'
import { Paths } from '../../routes'

const CustomNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href={Paths.home}>Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href={Paths.latest}>Latest</Nav.Link>
            {/* <Nav.Link href={Paths.longest}>Longest</Nav.Link> */}
            <Nav.Link href={Paths.bestRated}>Best Rated</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default CustomNavbar
