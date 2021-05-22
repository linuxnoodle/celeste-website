import React from 'react';
import styled from 'styled-components'
import Dance from '../madeline_dance.webp'

const Content = styled.div`
    font-size: 30px;
`;

const Dashing = () => {
  return (
    <Content>
        <br/>
        You gain the ability to dash in the first chapter of Celeste.
        It gives you a high velocity in a direction, takes your control away, and is recharged when you hit the ground.
        As the dash goes on, your control is gradually returned, allowing you to slightly move your character in a direction.
        Dashes also give you the ability to do every other technique on this website.
        <br/>
        <img src={Dance} alt="Madeline from Celeste doing the default dance from fortnite."/>
    </Content>
  );
};
  
export default Dashing;
