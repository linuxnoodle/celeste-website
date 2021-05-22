import React from 'react';
import styled from 'styled-components'
import Dance from '../madeline_dance.webp'

const Content = styled.div`
    font-size: 30px;
`;

const Wavedashing = () => {
  return (
    <Content>
        <br/>
        Wavedashing is my personal favorite technique, due to its large amounts of usecases. 
        It propels you in a direction, but is very easily chained, making it good for gaining speed. 
        It also preserves a dash, allowing you to dash once more in the air. 
        You preform a wavedash by <a href="/dashing">dashing</a> either down-right or down-left into the ground, then jumping. 
        <a href="/ultras">Ultras</a> are just an extention of the wavedash.
        <br/>
        <img src={Dance} alt="Madeline from Celeste doing the default dance from fortnite."/>
    </Content>
  );
};
  
export default Wavedashing;
