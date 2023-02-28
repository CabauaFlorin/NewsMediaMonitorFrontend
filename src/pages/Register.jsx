import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  background-image: url(https://www.romaniatv.net/wp-content/uploads/2017/12/media_institutii_84044900.jpg);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 100vh;
`;

const InnerContainer = styled.div`
  padding-top: 5%;
`;

const FormContainer = styled.div`
  flex-direction: column;
  padding: 2rem;
  border: 1px solid white;
  border-radius: 10px;
  color: white;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  margin-left: 35%;
  margin-right: 35%;

  @media (min-width: 768px) {
    margin-left: 25%;
    margin-right: 25%;
  }

  @media (min-width: 1024px) {
    margin-left: 35%;
    margin-right: 35%;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  text-align: left;
  padding: 0.25rem 0;
`;

const Input = styled.input`
  margin: 0.5rem 0;
  padding: 1rem;
  border: none;
  border-radius: 10px;
`;

const Button = styled.button`
  border: none;
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  cursor: pointer;
  color: #7439db;
  margin-left: 100px;
  margin-right: 100px;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: lightblue;
    color: black;
    transform: translateY(-2px);
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  }
`;

const LinkButton = styled.button`
  background: none;
  color: white;
  text-decoration: underline;
  cursor: pointer;
  border: none;
  padding-top: 15px;
`;

export function Register(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <Container>
      <InnerContainer>
        <FormContainer>
          <h2>Inregistrare</h2>
          <Form onSubmit={handleSubmit}>
            <Label htmlFor="username">Utilizator:</Label>
            <Input
              value={username}
              name="username"
              onChange={(e) => setUsername(e.target.value)}
              id="username"
              placeholder="Utilizator"
            />
            <Label htmlFor="email">E-mail:</Label>
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="email@gmail.com"
              id="email"
              name="email"
            />
            <Label htmlFor="password">Parola:</Label>
            <Input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="********"
              id="password"
            name="password"
            />
            <Button type="submit">Inregistrare</Button>
          </Form>
          <LinkButton>Ai deja un cont? Autentificati-va acum!</LinkButton>
        </FormContainer>
      </InnerContainer>
    </Container>
  );
};