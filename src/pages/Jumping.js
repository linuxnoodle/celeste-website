import React from 'react';
import styled from 'styled-components'
import Dance from '../madeline_dance.webp'

const Content = styled.div`
    font-size: 30px;
`;

const Jumping = () => {
  return (
    <Content>
        <br/>
        Jumping is one of the two most basic movements in Celeste (recommended to rebind to j key). 
        <br/>
        Jumping seems like it would be trivial, but there are two elements which I will elaborate on. Coyote time, and jump buffering. Coyote time allows you to still jump even when you go off of the edge of a platform, and jump buffering allows you to jump even if you are slightly early.
        Jumping also ties into the many other techniques, and walljumping is also quite important, as it doesn't take stamina, and can be exploited in order to neutral climb (explained in <a href="/climbing">Climbing</a> section).
        <br/>
        <img src={Dance} alt="Madeline from Celeste doing the default dance from fortnite."/>
    </Content>
  );
};
  
export default Jumping;
