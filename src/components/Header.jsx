import React from 'react';
import { Container, H1, H5, Img, Text } from '../styles/Header';
import logo from '../assets/Logo.png';
import imageContainer from '../assets/ImageContainer.png';
import { Button_try } from '../styles/Navbar';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <Container>
            {/* Block with text and button with link to register */}
            <Text>
                <H1>Get More Done with whitepace</H1>
                <H5>Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks</H5>
                <Button_try><Link to="/register">Try Whitespace free</Link></Button_try>
            </Text>
            <div className="photo">
                <Img src={imageContainer} alt="ImageContainer" />
            </div>
        </Container>
    );
}

export default Header;
