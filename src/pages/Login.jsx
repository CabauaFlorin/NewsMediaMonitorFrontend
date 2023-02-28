import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-image: url(https://www.romaniatv.net/wp-content/uploads/2017/12/media_institutii_84044900.jpg);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 100vh;
`;

const InnerContainer = styled.div`
  padding-top: 10%;
`;

const AuthFormContainer = styled.div`
  flex-direction: column;
  color: white;
  padding: 2rem;
  text-align: center;
  border: 1px solid white;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  margin-left: 35%;
  margin-right: 35%;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  color: white;
`;

const Label = styled.label`
  text-align: left;
  padding: 0.25rem 0;
  color: white;
`;

const Input = styled.input`
  margin: 0.5rem 0;
  padding: 1rem;
  border: none;
  border-radius: 10px;

  @media screen and (max-width: 768px) {
    padding: 0.5rem;
  }
`;

const Button = styled.button`
  border: none;
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  cursor: pointer;
  color: #7439db;
  margin-left: 150px;
  margin-right: 150px;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: lightblue;
    color: black;
    transform: translateY(-2px);
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  }

  @media screen and (max-width: 768px) {
    padding: 10px;
  }
`;

const LinkButton = styled.button`
  background: none;
  color: white;
  text-decoration: underline;
  border: none;
  cursor: pointer;
  padding-top: 15px;
`;

export function Login(props) {
  const [username, setUsername] = useState('');
  const [password, setPass] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username);
  };

  return (
    <Container>
      <InnerContainer>
        <AuthFormContainer>
          <h2>Autentificare</h2>
          <LoginForm onSubmit={handleSubmit}>
            <Label>Utilizator:</Label>
            <Input 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="username"
              placeholder="Utilizator"
              id="username"
              name="username"/>
            <Label>Parola:</Label>
            <Input
              value={password}
              onChange={(e) => setPass(e.target.value)}
              type="password"
              placeholder="********"
              id="password"
              name="password"/>
              <Button type="submit">Conectare</Button>
          </LoginForm>
          <LinkButton>Nu sunteti inregistrat? Inregistrati-va acum!</LinkButton>
        </AuthFormContainer>
      </InnerContainer>
    </Container>
  );
};