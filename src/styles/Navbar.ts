import styled from 'styled-components';
import Link from 'react-router-dom';

export const Nav = styled.nav`
    background-color: #043873;
    color: #fff;
    display: flex;
    justify-content: space-around;
    padding: 1rem;
    width: 100vw;
    box-sizing: border-box;
`;

export const Img = styled.img`
    /* color: #333; */
    /* font-size: 1.5rem; */
    margin: 0;
    padding: 0;
    padding-right: 20vw;
`;

export const Ul = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    font-size: 0.8rem;
    margin: 0;
    padding: 0;
`;

export const Li = styled.li`
    margin-left: 1vw;
`;

export const Button_login = styled.div`
    background-color: #FFE492;
    margin-left: 2vw;
    border-radius: 5px;
    color: #333;
    cursor: pointer;
    padding: 0.5rem 1rem;
    transition: background-color 0.3s;
    &:hover {
        background-color:rgb(216, 193, 123);
    }
`;

export const Button_try = styled.div`
    background-color: #4F9CF9;
    border-radius: 5px;
    color: #fff;
    cursor: pointer;
    padding: 0.5rem 1rem;
    transition: background-color 0.3s;
    &:hover {
        background-color:rgb(57, 116, 188);
    }
    a{
        color: #fff;
        text-decoration: none;
    }
`;

export const A = styled.a`
    color: #fff;
    text-decoration: none;
    &:hover {
        color: #fff;
    }
`;

export const Select = styled.select`
    background-color: #333;
    border: none;
    color: #fff;
    background-color: transparent;
    cursor: pointer;
    font-size: 0.8rem;
    padding: 0.5rem;
    &:hover {
        color: #fff;
    }
    &:focus {
        outline: none;
    }
`;

export const Option = styled.option`
    background-color: #333;
    color: #fff;
`;