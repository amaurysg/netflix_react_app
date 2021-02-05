import React, {useState , useEffect} from 'react'
import './Nav.css'

const Nav = () => {

  //I make one const of useState with initial value of false
  const [show, setShow] = useState(false)

  const transitionNavBar = () =>{
    if(window.scrollY > 100){
      setShow(true)
    }else{
      setShow(false)
    }
  }
useEffect(() => {
    window.addEventListener("scroll", transitionNavBar)
  return () => {
   window.removeEventListener("scroll", transitionNavBar)
  }
}, [])


  return (
    <div className={`nav ${show && "nav__black"}`} >
      <div className="nav__contents">
        <img 
        className="nav__logo"
        src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" 
        alt="netflix"
        />
        <img 
        className="nav__avatar"
        src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" 
        alt="user"
        />
      </div>

    </div>
  
  )
}

export default Nav
