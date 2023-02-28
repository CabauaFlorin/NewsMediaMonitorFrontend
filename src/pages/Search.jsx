import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { FaSearch } from 'react-icons/fa';

const Container = styled.div`
  background-image: url(https://www.romaniatv.net/wp-content/uploads/2017/12/media_institutii_84044900.jpg);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
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

const InputContainer = styled.div`
  position: relative;
`;

const Input = styled.input`
  margin: 0.5rem 0;
  padding: 1rem;
  border: none;
  border-radius: 10px;
  width: 300px;
  font-size: 18px;
  color: #fff;
  background-color: rgba(255, 255, 255, 0.2);

  &:focus {
    outline: none;
    background-color: rgba(255, 255, 255, 0.5);
  }
`;

const SearchIcon = styled(FaSearch)`
  position: absolute;
  top: 50%;
  left: -25px;
  transform: translateY(-50%);
  color: #fff;
`;

const animateSearchBar = keyframes`
  0% {
    width: 300px;
  }
  100% {
    width: 500px;
  }
`;

const AnimatedInput = styled(Input)`
  animation: ${animateSearchBar} 0.3s forwards;
`;

export const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);

  const handleInputClick = () => {
    setIsExpanded(true);
  };

  const handleInputBlur = () => {
    setIsExpanded(false);
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <Container>
      <InputContainer>
        {isExpanded ? (
          <AnimatedInput
            placeholder="Cauta..."
            value={searchTerm}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            autoFocus
          />
        ) : (
          <Input
            placeholder="Cauta..."
            value={searchTerm}
            onClick={handleInputClick}
          />
        )}
        <SearchIcon />
      </InputContainer>
      <Button>Cauta</Button>
    </Container>
  );
};
