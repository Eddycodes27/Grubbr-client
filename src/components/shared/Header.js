import './navBar.css'
import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'
import grubberLogo from '../images/logo.png'

const linkStyle = {
    color: 'white',
    textDecoration: 'none',
	fontSize: '15px',
	margin: '25px'
}

const logoStyle = {
	color: 'white',
	height: '40px',
	fontWeight: 'bold',
	textDecoration: 'none',
}
const buttonStyle = {
	color: 'black',
	textDecoration: 'none',
    backgroundColor: '#E7D9EA',
    fontSize: 'large',
    fontWeight: '600',
    padding: '5px 40px',
}
const navBarStyle = {
	backgroundColor: '#3E215D'
}

const imageStyle = {
	height: '40px'
}

const authenticatedOptions = (

    <>
        <Nav.Link>
            <Link to='search-zipcode' style={linkStyle}>
                Search Resturants
            </Link>
        </Nav.Link>
        <Nav.Link>
            <Link to='' style={linkStyle}>
                Favorited Resturants
            </Link>
        </Nav.Link>
        <Nav.Link>
            <Link to='' style={linkStyle}>
                Matches
            </Link>
        </Nav.Link>
        <Nav.Link>
            <Link to='change-password' style={linkStyle}>
                Change Password
            </Link>
        </Nav.Link>
        <Nav.Link>
            <Link to='sign-out' style={linkStyle}>
                Sign Out
            </Link>
        </Nav.Link>
    </>
)

const unauthenticatedOptions = (
	<>
        {/* <Nav.Link>
		    <Link to='sign-up' style={linkStyle}>Sign Up</Link>
        </Nav.Link> */}
        <Nav.Link align='right'>
		    <Link to='sign-in' style={buttonStyle}>Log In</Link>
        </Nav.Link>
	</>
)

const alwaysOptionsNotUser = (
	<>
		{/* <Nav.Link>
			<Link to='/' style={linkStyle}>
				Home
			</Link>
		</Nav.Link> */}
		<Navbar.Brand>
            <Link to='/' style={logoStyle}>
                <img src={grubberLogo} alt="Grubbr Logo" style={imageStyle} /> Grubbr
            </Link>
        </Navbar.Brand>
	</>
)

const alwaysOptionIsUser = (
	<div>
		<Navbar.Brand>
            <Link to='/user-profile' style={logoStyle}>
                <img src={grubberLogo} alt="Grubbr Logo" style={imageStyle} /> Grubbr
            </Link>
        </Navbar.Brand>
	</div>
)

const Header = ({ user }) => (
	<Navbar style={navBarStyle} variant='dark' expand='md'>
		<Navbar.Toggle aria-controls='basic-navbar-nav' />
				{user ? alwaysOptionIsUser : alwaysOptionsNotUser}
		<Navbar.Collapse id='basic-navbar-nav'>
			<Nav className='ml-auto'>
				{user && (
					<span className='navbar-text mr-2'>Welcome, {user.email}</span>
				)}
				{user ? authenticatedOptions : unauthenticatedOptions}
			</Nav>
		</Navbar.Collapse>
	</Navbar>
)
// below, goes after Link for Logo of "Grubbr"
// to='/'
export default Header
