import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { logout } from '../redux/userSlice'
import { useDispatch } from "react-redux";
import profile from '../assests/profile.png'


const Navbar = () => {
  const { currentUser } = useSelector(state => state.user)
  const dispatch = useDispatch();


  return (
    <Nav>
      <Link to={'/'} style={{ textDecoration: "none" }}><NavHead>Zudemy</NavHead></Link>
      {currentUser ? (
        <User>
          <Link to={'/enrolled'} style={{ textDecoration: 'none' }}>
            <Name>
              <img style={{ width: "40px", height: '40px' }} src={profile} alt='profile' />
              <h2> Account</h2></Name>
          </Link>
          <Login onClick={() => dispatch(logout())}>Logout</Login>
        </User>
      ) : (
        <Link to='/signin'>
          <Login>Login</Login>
        </Link>
      )}


    </Nav>

  )
}

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center; 
 padding:0 30px;
`
const NavHead = styled.h1`
  color:purple;
  font-size:35px
`
const Login = styled.button`
color:purple;
border:1px solid;
border-color: purple;
background-color: transparent;
width:180px;
height: 50px;
font-size: 20px;
`
const User = styled.div`
  display: flex;
  align-items: center;
  gap:20px;
`
const Name = styled.div`
  
display: flex;
align-items:center;
`



export default Navbar