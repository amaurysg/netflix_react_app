import React, {useState} from 'react'
import './Login.css'
import SignInScreen from './SignInScreen'

const Login = () => {
  const [signIn, setSignIn] = useState(false)

  return (
    <div className="loginScreen">
      <div className="loginScreen_background">
         <img className="loginScreen__logo"
         src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt=""/>
          <button 
            onClick={()=> setSignIn(true)}
            className="loginScreen__button">
            Sign In
          </button>
          <div className="loginScreen__gradient"></div>
      </div>

      <div className="loginScreen__body">
       { signIn ?
          (<SignInScreen/>) 
          : 
          (
          <>
            <h1>Unlimited films, TV programmes and more.</h1>
            <h2>Watch anywhere. Cancel at any time.</h2>
            <h3>Ready to watch? Enter your email to create or restar your membership.</h3>
            <div className="loginScreen__input">
              <form>
                  <input type="email" placeholder="Email Address"/>
                  <button 
                  onClick={()=> setSignIn(true) }
                  className="loginScreen_getStarted">GET STARTED</button>
              </form>
            </div>
          </>
          )
       }
      </div>

    </div>
  )
}

export default Login

/* 
 <img src="https://www.logitheque.com/es/wp-content/uploads/sites/7/2019/07/netflix-image.jpg" alt=""/> */