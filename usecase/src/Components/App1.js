
import React from 'react';
import NavBar from "../Components/NavBar";
import Home from "../Components/Home";





import Logout from "../Components/Logout"
import {BrowserRouter, Route, Switch } from 'react-router-dom';


function App1() {
  return (
 <BrowserRouter> 
  <NavBar/>
  <Switch>
  <Route exact path ="/" component={Home}/>
  <Route exact path ="/transaction" component={Transaction}/>
  <Route exact path ="/statement" component={Statement}/>
  <Route exact path ="/logout" component={Logout}/>
  </Switch>
  </BrowserRouter>
  );
}

export default App1;
