import React from 'react';
import styled from 'styled-components'

const Bar = styled.div`
    position: absolute;
    bottom: -85px;
    background: #c7f3ff;
    height: 85px;
    text-align:center;
    width:100%;
`;

const Text = styled.p`
  line-height: 4;
  display: inline-block;
  vertical-align: middle; 
`;

const Footer = () => {
  return (
    <>
      <Bar><Text>What are you supposed to put inside a footer again?</Text></Bar>
    </>
  );
};
  
export default Footer;
