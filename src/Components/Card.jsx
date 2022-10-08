import React,{useState} from 'react';
import * as S from './StyleCard'

export default function Card(props){
  
  
  return(
    <>
    <S.MainContainer>{props.array.map(item => (
      <S.Card>
      <img src={item.image} alt =""/>
      <h2>{item.name}</h2>
      <ul>
        <li>Gender: {item.gender}</li>
        <li>House: {item.house}</li>
      </ul>
      </S.Card>
    ))}</S.MainContainer>
    </>
  )
}