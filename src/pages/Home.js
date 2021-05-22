import React from 'react';
import styled from 'styled-components'
import Dance from '../madeline_dance.webp'

const Content = styled.div`
    font-size: 30px;
`;

const Home = () => {
  return (
    <Content>
        <br/>
        Celeste is a video game made by Maddy Thorson which is known for its complex movement.
        This website was made to cover many of these complex techniques, and their usage in game.
        However, please remember that this is written by a person who only has 150 hours on Celeste, making many of these explanations far more complex than needed.
        <br/>
        <img src={Dance} alt="Madeline from Celeste doing the default dance from fortnite."/>
    </Content>
  );
};
  
export default Home;
