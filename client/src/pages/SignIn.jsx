import axios from "axios";
 import React, { useState } from "react";
import { useDispatch  } from "react-redux";
 import styled from "styled-components";
import { loginFailure, loginStart, loginSuccess } from "../redux/userSlice";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
 
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
 
  padding: 20px 50px;
  gap: 10px;
`;

const Title = styled.h1`
  font-size: 40px;
  color:purple
`;

const SubTitle = styled.h2`
  font-size: 25px;
  font-weight: 300;
`;

const Input = styled.input`
  border-radius: 5px;
  padding: 15px;
  background-color: transparent;
  width: 120%;
  font-size: 20px;
`;

const Button = styled.button`
  border-radius: 3px;
  border: 1px solid purple;
  padding: 10px 20px;
  font-weight: 500;
  cursor: pointer;
  font-size: 20px;
  color: purple;
  background-color: transparent;
 
`;

const SignIn = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
   const dispatch = useDispatch();
   const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch(loginStart());
    try {
      const res = await axios.post("/auth/signin", { name, password });
       dispatch(loginSuccess(res.data));
       alert('User login Successful')
       navigate("/")
    } catch (err) {
      dispatch(loginFailure());
      alert('User login Failed')
    }
  };

  const handleSign = async (e) => {
    e.preventDefault();
    dispatch(loginStart());
    try {
      const res = await axios.post("/auth/signup", { name,email, password });
       dispatch(loginSuccess(res.data));
       alert('User SignUp Successful, Now please Login')
      
    } catch (err) {
      dispatch(loginFailure());
      alert('User SignUp Failed')
    }
  };

  return (

    <Container>
      <Wrapper>
        <Title>Sign in</Title>
        <SubTitle>to continue to Zudemy</SubTitle>
        <Input
          placeholder="username"
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={handleLogin}>Sign in</Button>
        <Title>or</Title>
        
        <Input
          placeholder="username"
          onChange={(e) => setName(e.target.value)}
        />
        <Input value={email} placeholder="email" onChange={(e) => setEmail(e.target.value)} />
        <Input
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick = {handleSign}>Sign up</Button>
      </Wrapper>
     
    </Container>
  );
};

export default SignIn;