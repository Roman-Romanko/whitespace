import React from "react";
import { Container, Center, Icon, OrbitContainer, Orbit, Dot } from "../styles/Orbit";
import logo from "../assets/Logo Icon.png";
// Coordinates of points in two circles
const outerPositions = [
    { top: "50%", left: "-4%", color: "#FF5758" },
    { top: "15%", left: "85%", color: "#37A3FF" },
    { top: "70%", left: "90%", color: "#00CA75" },
    { top: "7%", left: "15%", color: "#FFDC4D" },
    { top: "85%", left: "15%", color: "#37A3FF" },
  ];
  
  const innerPositions = [
    { top: "50%", left: "-5%", color: "#37A3FF" },
    { top: "50%", left: "95%", color: "#37A3FF" },
    { top: "95%", left: "45%", color: "#FFBF60" },
    { top: "-5%", left: "45%", color: "#00CA75" },
  ];
  
  const OrbitLayout = () => {
    return (
      <Container>
        <Center>
          <Icon src={logo} alt="Logo" />
        </Center>
        <OrbitContainer>
          <Orbit size="40vw">
            {outerPositions.map((pos, index) => (
              <Dot key={index} style={{ top: pos.top, left: pos.left }} color={pos.color} />
            ))}
          </Orbit>
          <Orbit size="28vw">
            {innerPositions.map((pos, index) => (
              <Dot key={index} style={{ top: pos.top, left: pos.left }} color={pos.color} />
            ))}
          </Orbit>
        </OrbitContainer>
      </Container>
    );
  };
  
  export default OrbitLayout;