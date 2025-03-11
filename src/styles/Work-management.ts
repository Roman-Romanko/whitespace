import styled from 'styled-components';
import Element from '../assets/Group.png';

export const Container = styled.div`
    background: #fff url(${Element}) no-repeat left;
    /* background-position-x: -5vw; */
    /* background-color: #fff; */
    color: #fff;
    display: flex;
    align-items: center;
    padding: 1rem;
    width: 100vw;
    height: 85vh;
    box-sizing: border-box;
`;

export const H1 = styled.h1`
    margin-bottom: 3vh;
    color: #333;
    width: 10vw;
    margin-bottom: -5vh;
`;

export const P = styled.p`
    color: black;
    width: 37.5vw;
`;

export const Started = styled.div`
    background-color: #4F9CF9;
    border-radius: 5px;
    color: #fff;
    cursor: pointer;
    padding: 0.5rem 1rem;
    transition: background-color 0.3s;
    margin-top: 5vh;
    &:hover {
        background-color:rgb(57, 116, 188);
    }
    a{
        color: #fff;
        text-decoration: none;
    }
`;

export const Text = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    width: 50vw;
    height: 60vh;
    margin-left: 5vw;
    margin-right: -5vw;
    margin-bottom: 5vh;
`;

export const Img = styled.img`
    width: 45vw;
    height: 60vh;
    margin-right: 5vw;
    /* padding-right: 5vw; */
`;

export const Container1 = styled.div`
background: #fff no-repeat left;
    /* background-position-x: -5vw; */
    /* background-color: #fff; */
    color: #fff;
    display: flex;
    align-items: center;
    padding: 1rem;
    width: 100vw;
    height: 85vh;
    box-sizing: border-box;
`;

export const Img1 = styled.img`
    width: 45vw;
    height: 60vh;
    margin-left: 5vw;
    /* padding-right: 5vw; */
`;