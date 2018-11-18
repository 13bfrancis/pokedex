import React from 'react';

import styled, { keyframes } from 'styled-components';

const Up = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-100%);
    visibility: hidden;
  }
`;
const Down = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(100%);
    visibility: hidden;
  }
`;

const Top = styled.div`
  width: 100%;
  height: 50%;
  position: absolute;
  top: 0;
  background: red;
  border: 1px solid black;
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
  animation: ${Up} linear 1s forwards;
`;
const Bottom = styled.div`
  width: 100%;
  height: 50%;
  position: absolute;
  top: 50%;
  background: white;
  border: 1px solid black;
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  animation: ${Down} linear 1s forwards;
`;
const Pokeball = () => (
  <>
    <Top />
    <Bottom />
  </>
);

export default Pokeball;
