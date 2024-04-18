import React, { useState } from 'react'
import styled from 'styled-components'
export default function NumberSelector({setError,error,selectedNumber,SetSelectedNumber}) {
    const arr=Array.from({length:6},(v,i)=>i+1)
    console.log(selectedNumber) 
    const numberSelectorHandler=(item)=>{
        SetSelectedNumber(item)
        setError("")
    }
    return (
        <NumberSelectorContainer>
        <p className='error'>{error}</p>
        <div className='flex'>
          {arr.map((item) => (
            <Box isSelected={ item===selectedNumber}
                key={item} onClick={()=>numberSelectorHandler(item)}>{item}</Box> 
          ))}
        </div>
        <p>Select Number</p>
        </NumberSelectorContainer>
      );
    }
const NumberSelectorContainer=styled.div`
display: flex;
flex-direction: column;
align-items: end;
.flex{
    display: flex;
    gap:24px;
}
p{
    font-size: 24px;
    font-weight:500;
}
.error{
    color:red;
    font-size: 16px;
    font-weight: 500;
}
`
const Box=styled.div`
width: 72px;
height: 72px;
border: 1px solid black;
border-radius: 5px;
display: flex;
align-items: center;
justify-content: center;
font-size: 24px;
font-weight: 700;
background-color: ${(props)=>(props.isSelected?'black':'white')};
color: ${(props)=>(props.isSelected?'white':'black')};
`