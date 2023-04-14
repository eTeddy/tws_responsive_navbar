import './style.css'
import { useEffect, useState } from 'react';

export const CatFact = () => {
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
    <div className="container">
      <h2>Did you know?</h2>    
      <div className="cat_fact">{fact}</div>   
      <button onClick={getNewFact}>New 😺 Fact</button>           
    </div>
  )
}


/*

import './style.css'

export const Cat = () => {
  return (
    <div className="page_container">
      <h1>😺</h1>
    </div>
  );
};
*/