import React from 'react';
import Logo from '../celeste_logo.png'
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
} from './NavigationBarElements';
import styled from 'styled-components'

const CelesteLogo = styled.img`
   max-height:85px; 
`;

const NavigationBar = () => {
  return (
    <>
      <Nav>
        <Bars/>
        <NavMenu>
          <NavLink to='/' activeStyle>
            <CelesteLogo src={Logo}/>
          </NavLink>
          <NavLink to='/jumping' activeStyle>
            Jumping
          </NavLink>
          <NavLink to='/climbing' activeStyle>
            Climbing
          </NavLink>
          <NavLink to='/dashing' activeStyle>
            Dashing
          </NavLink>
          <NavLink to='/wallbouncing' activeStyle>
            Wallbouncing
          </NavLink>
          <NavLink to='/wavedashing' activeStyle>
            Wavedashing
          </NavLink>
          <NavLink to='/supers' activeStyle>
            Supers
          </NavLink>
          <NavLink to='/hypers' activeStyle>
            Hypers
          </NavLink>
          <NavLink to='/ultras' activeStyle>
            Ultras
          </NavLink>
          <NavLink to='/demodashing' activeStyle>
            Demodashing
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default NavigationBar;
