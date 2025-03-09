import React from 'react';
import { Nav, Ul, Li, Button_login, Button_try, Select, Option, Img } from '../styles/Navbar';
import logo from '../assets/Logo.png';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <Nav>
            <Link to="/"><Img src={logo} alt="Logo" /></Link>
            <Ul>
                <Li>
                    <Select>
                        <Option>Products</Option>
                        <Option>1</Option>
                        <Option>1</Option>
                    </Select>
                </Li>
                <Li>
                    <Select>
                        <Option>Solutions</Option>
                        <Option>1</Option>
                        <Option>1</Option>
                    </Select>
                </Li>
                <Li>
                    <Select>
                        <Option>Resources</Option>
                        <Option>1</Option>
                        <Option>1</Option>
                    </Select>
                </Li>
                <Li>
                    <Select>
                        <Option>Pricing</Option>
                        <Option>1</Option>
                        <Option>1</Option>
                    </Select>
                </Li>
                <Li>
                    <Button_login>
                        <Link to="/login">Login</Link>
                    </Button_login>
                </Li>
                <Li>
                    <Button_try>
                        <Link to="/register">Try Whitespace Free</Link>
                    </Button_try>
                </Li>
            </Ul>
        </Nav>
    )
}

export default Navbar;
