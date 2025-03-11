import styled from "styled-components";

// Container for the entire component
export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50vh;
  width: 50vw;
  position: relative;
`;

// Central element
export const Center = styled.div`
  width: 6vw;
  height: 6vw;
  background: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 0px 1vw rgba(0, 0, 0, 0.1);
  margin-left: 2vw;
`;

export const Icon = styled.img`
  width: 60%;
  height: auto;
`;

// Orbit container
export const OrbitContainer = styled.div`
  position: absolute;
  width: 42vw;
  height: 42vh;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 2vw;
`;

// Styles for each orbital circle
export const Orbit = styled.div`
  position: absolute;
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  border-radius: 50%;
  border: 0.2vw dashed lightblue;
  display: flex;
  align-items: center;
  justify-content: center;
`;

// Points (planets)
export const Dot = styled.div`
  position: absolute;
  width: 3vw;
  height: 3vw;
  background: ${(props) => props.color || "gray"};
  border-radius: 50%;
`;