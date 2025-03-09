import React from 'react';
import { Nav, H3, Ul, Li, Button_login, Button_try, A, Select, Option } from './Navbar.style';
function Navbar() {
    return (
        <Nav>
            <H3>Navbar</H3>
            <Ul>
                <Li><Select>
                    <Option>Products</Option>
                    <Option>1</Option>
                    <Option>1</Option>
                </Select></Li>
                <Li><Select>
                    <Option>Solutions</Option>
                    <Option>1</Option>
                    <Option>1</Option>
                </Select></Li>
                <Li><Select>
                    <Option>Resources</Option>
                    <Option>1</Option>
                    <Option>1</Option>
                </Select></Li>
                <Li><Select>
                    <Option>Pricing</Option>
                    <Option>1</Option>
                    <Option>1</Option>
                </Select></Li>
                <Li><Button_login><a href="/">Login</a></Button_login></Li>
                <Li><Button_try><A href="/about">Try Whitespace free</A></Button_try></Li>
            </Ul>
        </Nav>
    )
}

export default Navbar;