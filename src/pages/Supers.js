import React from 'react';
import styled from 'styled-components'
import Dance from '../madeline_dance.webp'

const Content = styled.div`
    font-size: 30px;
`;

const Supers = () => {
  return (
    <Content>
        <br/>
        Supers aren't really that useful, but it is one of the easier techniques.
        It is done by dashing on the ground, and then jumping.
        While you are launched forward a fair amount more, the high vertical height makes it rather useless in a casual playthrough.
        For spammable movement, I would recommend <a href="/wavedashing">wavedashing</a> more.
        <br/>
        <img src={Dance} alt="Madeline from Celeste doing the default dance from fortnite."/>
    </Content>
  );
};
  
export default Supers;
