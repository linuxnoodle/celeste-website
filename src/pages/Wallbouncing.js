import React from 'react';
import styled from 'styled-components'
import Dance from '../madeline_dance.webp'

const Content = styled.div`
    font-size: 30px;
`;

const Wallbouncing = () => {
  return (
    <Content>
        <br/>
        Wallbounces are the first of the more complex movement used in game.
        It is executed by <a href="/dashing">dashing</a> beside a wall, then <a href="jumping">jumping</a>.
        You then are launched further upwards, making it useful for when you need to vertically scale a wall.
        You can preform an extended wallbounces by delaying the time before you jump off of the wall, reducing horizontal movement, and increasing vertical movement.
        Extended wallbounces are primarily used in Chapter 9 of Celeste.
        <br/>
        <img src={Dance} alt="Madeline from Celeste doing the default dance from fortnite."/>
    </Content>
  );
};
  
export default Wallbouncing;
