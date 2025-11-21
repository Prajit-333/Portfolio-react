import React from 'react';
import styled from 'styled-components';

const Button = () => {
  return (
    <StyledWrapper>
      <button className="button">Download CV</button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .button {
    padding: 0.8em 1.3em;
    border: none;
    border-radius: 5px;
    font-weight: bold;
    letter-spacing: 5px;
    text-transform: uppercase;
    cursor: pointer;
    color: #fffff;
    transition: all 1000ms;
    font-size: 12px;
    position: relative;
    overflow: hidden;
    outline: 2px solid #ffffff;
  }

  button:hover {
    color: #ffffff;
    transform: scale(1.1);
    outline: 2px solid #ffffff;
    box-shadow: 4px 5px 17px -4px #fffff;
  }

  button::before {
    content: "";
    position: absolute;
    left: -50px;
    top: 0;
    width: 0;
    height: 100%;
    background-color: #0D47A1;
    transform: skewX(45deg);
    z-index: -1;
    transition: width 1000ms;
  }

  button:hover::before {
    width: 250%;
  }`;
    
export default Button;
