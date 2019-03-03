import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
    width: 100vw;
    height: 60px;
    background-color: #E7E7E7;
    color: white;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-weight: lighter;
    font-size: 1.5em;
`;

export default function Navigation(props) {
    return (
       <Nav>
           HMPAIS?
       </Nav> 
    )
}