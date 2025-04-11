import styled from "styled-components";
import { BlockProps } from "../interfaces/interface";
import Element from '../assets/Element1.png';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    justify-content: space-around;
    background-color: #fff;
    width: 100vw;
    height: 100vh;
`

export const Blocked = styled.div`
    display: flex;
    justify-content: center; 
    gap: 1vw;
    flex-wrap: wrap; 
`;

export const H1 = styled.h1`
    display: flex;
    justify-content: center;
    color: black;
    margin-bottom: -10vh;
    z-index: 1;
`;

export const Img = styled.img`
    width: 350px;
    height: 70px;
    position: absolute;
    top: 12%;  
    left: 50%;  
    transform: translateX(-5%) translateY(-12%);  
    display: block;
    z-index: 0;
`;


export const Block = styled.div<BlockProps>`
    border: 2px solid #e0e0e0;
    border-radius: 8px;
    padding: 20px;
    width: 20vw;
    height: auto;
    text-align: center;
    background-color: ${({ isSelected }) => (isSelected ? '#043873' : '#fff')}; 
    color: ${({ isSelected }) => (isSelected ? '#fff' : '#000')};
    box-shadow: ${({ special }) => (special ? '0 4px 15px rgba(0, 0, 0, 0.1)' : 'none')};
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out; 
    border-color: ${({ isSelected }) => (isSelected ? 'transparent' : '#f39c12')};

    &:hover {
        transform: scale(1.05);
    }

    ${({ isSelected }) => isSelected && `
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2); 
    `}

    h2 {
      font-size: 1.5em;
      margin: 0.5em 0;
    }

    h3 {
      color: '#00796b';
    }

    h5 {
      width: 30vw;
      font-weight: normal;
      text-align: left;
      font-size: 1em;
    }

    &:last-child {
      margin-right: 0;
    }
    
    ul {
        list-style-type: none; 
        padding: 0; 
        width: 20vw;
        /* color: ${({ isSelected }) => (isSelected ? '#fff' : '#000')}; // Heading color changes based on selection */
    }

    li {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: left;
      height: 7vh;
    }
`;

// Styled button component
export const Button = styled.button<{ isActive: boolean }>`
    background-color: ${({ isActive }) => (isActive ? 'blue' : '#00796b')}; // Blue if active, otherwise default color
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: ${({ isActive }) => (isActive ? 'darkblue' : '#005f52')};
    }
`;
