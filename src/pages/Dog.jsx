import "./pages.css";
import { 
  useLoaderData, 
  useNavigation,
} from "react-router-dom"
import { useState } from "react";

export const Dog = () => {  
  const [ dogUrl, setDogUrl ] = useState(useLoaderData());
  const navigation = useNavigation();

  const handleNewDog = async () => {
    const res = await fetch("https://dog.ceo/api/breeds/image/random");
    const dog = await res.json();
    setDogUrl(dog.message);
  };
    
  if ( navigation.state === "loading") { return <h1>Loading...</h1> }
  
  return (
    <div className="container">
      <button onClick={handleNewDog}>New 🐶 Dog</button> 
      <img src={dogUrl} alt="dog"/>      
    </div>
  ) 
}

export const dataLoader = async () => {
  const res = await fetch("https://dog.ceo/api/breeds/image/random");
  const dog = await res.json();

  return dog.message;
}











/*
⬆️ 4/14/2023
import "./style.css";
import { useLoaderData, useNavigation } from "react-router-dom";
import { useState } from "react";

export const Dog = () => {
  const [dogUrl, setDogUrl] = useState(
    useLoaderData()

    );
  const navigation = useNavigation();

  const handleNewDogClick = async () => {

    const res = await fetch("https://dog.ceo/api/breeds/image/random");
    const dog = await res.json();
    setDogUrl(dog.message);
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
  const res = await fetch("https://dog.ceo/api/breeds/image/random");
  const dog = await res.json();

  return dog.message;
};




⬆️ 
**************************************************************
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














import './style.css'

export const Dog = () => {
  return (
    <div className="page_container">
      <h1>🐶</h1>
    </div>
  );
};
*/