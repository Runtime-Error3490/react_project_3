import styled from "styled-components"
export const Button=styled.button`
display: flex;
justify-content:center;
align-items: center;
padding: 10px 18px;
width: 220px;
height: 44px;
background: black;
color: white;
border:none;
border-radius:5px;
border:1px solid transparent;
transition: 0.4s background ease-out;
&:hover{
    background:white;
    border:1px solid black;
    color:black;
    transition: 0.2s background ease-in;
    cursor: pointer;
}
`
export const OutlineButton=styled(Button)`
background-color: white;
border: 1px solid black;
color:black;
&:hover{
    background:black;
    border:1px solid transparent;
    color:white;
}
`