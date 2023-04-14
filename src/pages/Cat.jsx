import "./pages.css";
import { useLoaderData, useNavigation } from "react-router-dom";
import { useState } from "react";

export const Cat = () => {
  const [catUrl, setCatUrl] = useState(
    useLoaderData() 
    ? useLoaderData()
    : "/cat/cute"
  );

  const navigation = useNavigation();

  const handleNewCatClick = async () => {
    const res = await fetch("https://cataas.com/cat?json=true");
    const cat = await res.json();
    setCatUrl(cat.url);
  };

  if (navigation.state === "loading") {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="container">
      <button onClick={handleNewCatClick}>New 😺 Cat</button>      
      <img src={`https://cataas.com${catUrl}`} alt="Cat" />      
    </div>
  );
};

export const dataLoader = async () => {
  const res = await fetch("https://cataas.com/cat?json=true");
  const cat = await res.json();

  return cat.url;
};


/*





import "./style.css";
import { useLoaderData, useNavigation } from "react-router-dom";
import { useState } from "react";

export const Dog = () => {
  const [dogUrl, setDogUrl] = useState(useLoaderData());
  const navigation = useNavigation();

  const handleNewDogClick = async () => {

    const res = await fetch("https://random.dog/woof.json");
    const dog = await res.json();
    setDogUrl(dog.url);
  };

  if (navigation.state === "loading") {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="container">
      <button onClick={handleNewDogClick}>New 🐶 Dog</button>
      <img src={dogUrl} alt="Dog" />
    </div>
  );
};

export const dataLoader = async () => {
  const res = await fetch("https://random.dog/woof.json");
  const dog = await res.json();

  return dog.url;
};












*************************************************

import './style.css'

export const Dog = () => {
  return (
    <div className="page_container">
      <h1>🐶</h1>
    </div>
  );
};
*/