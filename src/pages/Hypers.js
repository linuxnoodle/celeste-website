import React from 'react';
import styled from 'styled-components'
import Dance from '../madeline_dance.webp'

const Content = styled.div`
    font-size: 30px;
`;

const Hypers = () => {
  return (
    <Content>
        <br/>
        A hyper is quite similar to the <a href="/wavedashing">wavedash</a>, in that you are propelled through the air with an extra dash.
        You are propelled the same distance as the wavedash, but it is less spammable.
        You perform a hyper by crouching on the ground (down), dashing to the left or the right, and jumping.
        It can also be used to start an <a href="ultras">ultra</a>.
        <br/>
        <img src={Dance} alt="Madeline from Celeste doing the default dance from fortnite."/>
    </Content>
  );
};
  
export default Hypers;
