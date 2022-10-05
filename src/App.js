import logo from './logo.svg';
import './styles.css';
import { animals } from './animals';
import React from 'react';
import ReactDOM from 'react-dom';

function App() {

  const img =[];
  const title = '';
  const background = <img  className= 'background' alt ='ocean' src= '/images/ocean.jpg'/>
  
  const animalFacts = 
  <div>
  
  <h1>{title==='' ? 'Click an animal for a fun fact' : title} </h1> 
  {background}
   <div className = 'animals'> {img} </div>
   <p id='fact'> </p>
  </div>;
  
  for(const animal in animals){
  img.push(<img 
  key = {animal}
  className = 'animal'
  alt = {animal}
  src = {animals[animal].image}
  aria-label = {animal}
  role = 'button'
  onClick = {displayFact}
  />)
  };
  
  
  function displayFact(e){
    const fact = animals[e.target.alt].facts;
  const randomNum = Math.floor(Math.random() * fact.length);
  
  //gets the name of the animal clicked
  
  
  const funfact = fact[randomNum];
  document.getElementById('fact').innerHTML = funfact;
  }
  
  
  ReactDOM.render(animalFacts, document.getElementById('root'));
  
  
}

export default App;