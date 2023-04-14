import "./App.css";
import { Navbar } from './components/Navbar';
import React from "react";
import { 
  createHashRouter,
  createRoutesFromElements,
  Route,
  Outlet,
  RouterProvider,
} from 'react-router-dom';
import { Home } from "./pages/Home.jsx";
import { Dog, dataLoader } from "./pages/Dog.jsx";
import { Fox } from "./pages/Fox.jsx";
import { Cat } from "./pages/Cat.jsx"
import { CatFact } from "./pages/CatFact.jsx";

export default function App(props) {
  const router = createHashRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="/dog" element={<Dog />} loader={dataLoader}/>
        <Route path="/fox" element={<Fox />} />     
        <Route path="/cat" element={<Cat />} />     
        <Route path="/cat_fact" element={<CatFact />} />
      </Route>
    )
  )
  
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )

}

const Root = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}














/*
import "./App.css";
import Navbar from './components/Navbar'

function App() {
  return (
    <>
      <Navbar />
    </>
  );
}

export default App;
*/