import React,{useState,useEffect} from 'react';
import axios from 'axios';
import Card from './Components/Card';
import { GlobalStyle } from './Components/GlobalStyle';


export default function App(){
  
  const[api,setApi]=useState([])

  const getApi=() => {
    axios.get('https://hp-api.herokuapp.com/api/characters').then(response => {
      console.log(response.data)
      setApi(response.data.slice(0,25))
    })
  }
  
  useEffect(() => {
    getApi()
  },[])

  return(
    <>
    <GlobalStyle/>
    <Card array={api}/>
    </>
  )
}