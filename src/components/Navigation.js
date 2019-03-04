import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
    width: 100vw;
    height: 60px;
    background-color: #272727;
    color: white;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-weight: lighter;
    font-size: 1.5em;
`;

const Name = styled.span`
    padding-left: 20px;
`;

export default function Navigation(props) {
    return (
       <Nav>
           <Name>wiis</Name>
       </Nav> 
    )
}