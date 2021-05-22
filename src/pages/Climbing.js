import React from 'react';
import styled from 'styled-components'
import Dance from '../madeline_dance.webp'

const Content = styled.div`
    font-size: 30px;
`;

const Climbing = () => {
  return (
    <Content>
        <br/>
        Climbing is the other basic movement technique (recommended to rebind to l). 
        It allows you to climb up walls and other blocks when holding the button down. 
        You climb at a rate of 5.625 tiles per second, consuming 45.45 stamina per second (starting with 110 stamina).
        Holding still on a wall will use 10 stamina per second. When you reach 20 stamina, you begin to fall down.
        However, with enough horizontal space, you can entirely circumvent the stamina system. 
        When you neutral jump on a wall (<a href="/jumping">jump</a> without any direction), you go up, and then if you go toward the wall, you can neutral jump again. 
        As walljumps take no stamina, this allows you to climb infinitely.
        <br/>
        <img src={Dance} alt="Madeline from Celeste doing the default dance from fortnite."/>
    </Content>
  );
};
  
export default Climbing;
