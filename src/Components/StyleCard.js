import styled from "styled-components";

export const MainContainer=styled.section` 
  display:flex;
  text-align: center;
  flex-wrap: wrap;
  gap:10px;
  .container{
    background:yellow;
  }
  img{
    width:250px;
    height:350px;
  }

`

export const Card=styled.div` 
  box-shadow:0 5px 5px 1px;
  text-align: center;
  margin:0 auto;
  overflow:hidden;
  border-radius:30px;
  ul{
    list-style:none;
  }
`