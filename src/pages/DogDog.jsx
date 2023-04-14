import "./Dog.css";
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
    <div>
        <button className="dog_btn" onClick={handleNewDogClick}>New Dog</button>
        <br />
        <img src={dogUrl} alt="Dog" />
      
    </div>
  );
};

export const dataLoader = async () => {
  const res = await fetch("https://random.dog/woof.json");
  const dog = await res.json();

  return dog.url;
};