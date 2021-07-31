
import React from 'react';
 

import './App.css';

import Home from './Components/Home';
import SignInOutContainer from './Containers';

import {BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './Components/Login';

import Logout from './Components/Logout';

{/*import SignupForm from './Components/SignUpForm';
import Validate from './Components/Validate';*/}
{/*import Services from './Components/pages/Services';
import Products from './Components/pages/Products';
import ContactUs from './Components/pages/ContactUs';
import SignUp from './Components/pages/SignUp';
import Marketing from './Components/pages/Marketing';
import Consulting from './Components/pages/Consulting';*/}


function App() {
  return (
    <div className="App">
      <SignInOutContainer/>
      <BrowserRouter> 
     <Switch>

  <Route exact path ="/" component={Login}/>
  <Route exact path ="/home" component={Home}/>
  {/*<Route exact path ="/Sign up" component={Sign up}/>*/}
  {/*<Route path='/services' component={Services} />
        <Route path='/products' component={Products} />
        <Route path='/contact-us' component={ContactUs} />
        <Route path='/sign-up' component={SignUp} />
        <Route path='/marketing' component={Marketing} />
  <Route path='/consulting' component={Consulting} />*/}
  <Route exact path ="/logout" component={Logout}/>
  </Switch> 
  </BrowserRouter>
   {/* <Login/>*/}
    </div>
  );
}

export default App;
 