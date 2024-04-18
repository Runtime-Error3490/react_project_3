import React, { useState } from 'react'
import styled from "styled-components"
import Start from './Component/Start';
const Button=styled.button`
  background-color:black;
  color:white;
  padding:10px;
`;
export default function App() {
  const [isGameStarted,setIsGameStarted]=useState(false);
  const toggleGamePlay=()=>{
    setIsGameStarted(!isGameStarted);
  }
  return (
    <>
    isGameStarted?<Start/>:<Gamepad/>
    </>
  )
}
