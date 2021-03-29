import React from 'react';
import ReactDOM from 'react-dom';
import Baslik from './components/Baslik';
import Liste from './components/Liste';
import {topla,carp,bol,cikar} from './components/Matemetik';
import './index.css';





var saat= new Date().getHours;


console.log(saat);




ReactDOM.render(
  <React.StrictMode>    
    {
        saat<12?<h1 style={{color:"blue"}}>Günaydin</h1>:saat<18?<h1 style={{color:"green"}}>Iyi günler</h1>:<h1 style={{color:"red"}}>Iyi Aksamlar</h1>
    }  

    <Baslik></Baslik> 
    <Liste></Liste>

    <h1>Sayilar</h1>

    <ul>
    <li>{topla(20,5)}</li>
    <li>{cikar(20,5)}</li>
    <li>{carp(20,5)}</li>
    <li>{bol(20,5)}</li>
    </ul>

    
  </React.StrictMode>,
  document.getElementById('root')
);


