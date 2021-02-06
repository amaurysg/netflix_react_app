import React, {useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import './App.css';
import HomeScreen from './screens/HomeScreen'
import Login from './screens/Login';
import ProfileScreen from './screens/ProfileScreen';
import { auth } from './firebase';
import {useDispatch , useSelector } from 'react-redux'
import {login, logout, selectUser} from '../src/features/userSlice'



function App() {
  const user =  useSelector(selectUser)
  const dispatch = useDispatch()

  //Check if user is auth
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth =>{
      if (userAuth){
        //Yes 
        console.log(userAuth)
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email
        }))
      }else{
        //no
        dispatch(logout())
      }
    })
    return unsubscribe
  }, [dispatch])


  return (
    <div className="app">    
    <Router>
      {!user ? 
      (<Login/>)
       :
       (
        <Switch>
            <Route  exact path="/" component={HomeScreen} />
            <Route path="/profile" component={ProfileScreen} />
        </Switch>
       ) 
       }
    </Router> 
    </div>
  );
}

export default App;
