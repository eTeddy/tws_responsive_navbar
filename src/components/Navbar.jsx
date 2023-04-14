import './Navbar.css'
import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

//export default function Navbar() {
export const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  const toggleNav = () => { setToggleMenu(!toggleMenu) }

  useEffect(() => {
    const changeWidth = () => { setScreenWidth(window.innerWidth); }
    window.addEventListener('resize', changeWidth)
    return () => { window.removeEventListener('resize', changeWidth) }
  }, [])

  return (
    <nav>
      {(toggleMenu || screenWidth > 600) && (
        <div className="list">
          <Link to="/" onClick={toggleNav}>Home</Link>
          <Link to="/dog" onClick={toggleNav}>Dog</Link>    
          <Link to="/fox" onClick={toggleNav}>Fox</Link>  
          <Link to="/cat" onClick={toggleNav}>Cat</Link>  
          <Link to="/cat_fact" onClick={toggleNav}>😺</Link>                         
        </div>
      )}
      <span className="nav_btn" onClick={toggleNav}> 🍔 </span>
    </nav>
  )
}








/*
import React, {useState, useEffect} from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  const toggleNav = () => { setToggleMenu(!toggleMenu) }

  useEffect(() => {
    const changeWidth = () => { setScreenWidth(window.innerWidth); }
    window.addEventListener('resize', changeWidth)
    return () => { window.removeEventListener('resize', changeWidth) }
  }, [])

  return (
    <nav>
      {(toggleMenu || screenWidth > 600) && (
      <ul className="list">
      <li className="items">
        <Link to="/">Home</Link>
        </li>
      <li className="items">
        <Link to="/cat">Cat</Link>
      </li>
      <li className="items">
        <Link to="/dog">Dog</Link>
      </li>
      <li className="items">
        <Link to="/fox">Fox</Link>
      </li>
    </ul>
      )}

      <button onClick={toggleNav} className="btn">BTN</button>
    </nav>
  )
}
*/
