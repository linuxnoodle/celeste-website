import React from 'react';
import styled from 'styled-components'
import Dance from '../madeline_dance.webp'

const Content = styled.div`
    font-size: 30px;
`;

const Demodashing = () => {
  return (
    <Content>
        <br/>
        Demodashing used to widely be regarded as the most difficult technique in Celeste.
        A demodash is performed by <a href="jumping">jumping</a>, crouching in air to reduce your hitbox size (4 frame window), and then <a href="dashing">dashing</a>.
        It is used to pass through certain spikes that have large enough gaps.
        It is also notable for a skip which saves ~1 minute in Celeste RTA speedruns.
        However, it has gotten quite a lot easer, as demodash bind is now built into the most revent version of Celeste (recommend binding of h), meaning that all you have to do is line up your hitbox with the spike gap. 
        <br/>
        <img src={Dance} alt="Madeline from Celeste doing the default dance from fortnite."/>
    </Content>
  );
};
  
export default Demodashing;
