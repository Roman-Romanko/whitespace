import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;
    width: 100vw;
    height: 80vh;
    background-color: #043873;
`

export const H1 = styled.h1`
    margin-bottom: 3vh;
    color: #333;
    width: 40vw;
    margin-bottom: -5vh;
    color: white;
`;

export const P = styled.p`
    color: black;
    width: 42vw;
    color: white;
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
    width: 44vw;
    height: 60vh;
    /* margin-right: 5vw; */
    /* padding-right: 5vw; */
`;