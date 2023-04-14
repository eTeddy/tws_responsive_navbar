import "./Cat.css"

import { useEffect, useState } from 'react';

export const Cat = () => {
  const [fact, setFact] = useState('');

  useEffect(() => {
    fetch('https://catfact.ninja/fact')
      .then(response => response.json())
      .then(data => {
        setFact(data.fact);
      })
      .catch(error => console.log(error));
  }, []);

  const getNewFact = () => {
    fetch('https://catfact.ninja/fact')
      .then(response => response.json())
      .then(data => {
        setFact(data.fact);
      })
      .catch(error => console.log(error));
  };

  return (
    <center>      
      <button className="cat_btn" onClick={getNewFact}>New Cat Fact</button>
      <h1>Did you know?</h1>    
      <div className="cat_fact">
        {fact}
      </div>  
    </center>
  )
}