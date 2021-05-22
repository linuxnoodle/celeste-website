import React from 'react';
import styled from 'styled-components'
import Dance from '../madeline_dance.webp'

const Content = styled.div`
    font-size: 30px;
`;

const Ultras = () => {
  return (
    <Content>
        <br/>
        Ultras were originally a bug in the game, but they are now recognized as a "feature".
        You perform an ultra by either <a href="wavedashing">wavedashing</a> or <a href="hypers">hypering</a>, landing and jumping, then dashing down-right or down-left (depends on your direction).
        This will boost your speed by even more, launching you even further than normal.
        However, if you were to chain ultras, you can gain a potentially infinite speed (with a prerequisite of infinite drops in height).
        <br/>
        <img src={Dance} alt="Madeline from Celeste doing the default dance from fortnite."/>
    </Content>
  );
};
  
export default Ultras;
