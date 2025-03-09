import styled from 'styled-components';
import Element from '../assets/Element.png';

export const Container = styled.header`
    background: #043873 url(${Element}) no-repeat center;
    background-position-x: -8vw;
    /* background-size: cover; */
    color: #fff;
    display: flex;
    align-items: center;
    padding: 1rem;
    width: 100vw;
    height: 85vh;
    box-sizing: border-box;
`;

export const Img = styled.img`
    width: 50vw;
    height: 60vh;
    margin-right: 5vw;
`;

export const Text = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    width: 50vw;
    height: 60vh;
    margin-left: 5vw;
    margin-bottom: 5vh;
`;

export const H1 = styled.h1`
    margin-bottom: 3vh;
`;

export const H5 = styled.h5`
    margin-top: 0;
    font-weight: normal;
`;