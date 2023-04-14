import './style.css'
import { useState } from "react";

export const Fox = () => {
	const [ num, setNum ] = useState(Math.floor(Math.random() * 123) + 1);

	const newnum = () => {
		setNum(Math.floor(Math.random() * 123) + 1)
	}

	return (
    <div className="container">
			<img src={`https://randomfox.ca/images/${num}.jpg`} alt="fox" />        
			<button onClick={newnum}>New 🦊 Fox</button>			
		</div>
	)
}

/*
import './style.css'

export const Fox = () => {
  return (
    <div className="page_container">
      <h1>🦊</h1>
    </div>
  );
};
*/