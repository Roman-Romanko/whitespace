import styled from "styled-components";
import { ArrowRight as ArrowRightIcon } from "lucide-react"; 

export const Container = styled.div`
    display: flex;
    align-items: center;
    background-color: #fff;
    height: 80vh;
    width: 100vw;
`;

export const Image = styled.img`
    width: 40vw;
    height: 60vh;
    margin-left: 10vw;
`;

export const H1 = styled.h1`
    margin-bottom: 3vh;
    color: #333;
    width: 40vw;
    margin-bottom: -8vh;
    color: black;
    z-index: 2;
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

export const P = styled.p`
    color: black;
    width: 42vw;
`;

export const Started = styled.div`
    background-color: #4F9CF9;
    border-radius: 5px;
    color: #fff;
    cursor: pointer;
    padding: 0.5rem 1rem;
    transition: background-color 0.3s;
    display: flex;
    align-items: center;
    gap: 5px;
    margin-top: 5vh;

    &:hover {
        background-color: rgb(57, 116, 188);
    }

    a {
        color: #fff;
        text-decoration: none;
    }
`;

export const ArrowRight = styled(ArrowRightIcon)`
    width: 20px;
    height: 20px;
    color: #fff;
    margin-top: 2px;
`;
