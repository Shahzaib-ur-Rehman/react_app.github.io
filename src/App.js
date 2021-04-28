import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Services from './Components/Services';
import './index.css';

const  App =  () => {
  return (
   <>
   <Navbar/>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/service' component={Services} />
      <Route exact path='/about' component={About} />
      <Route exact path='/contact' component={Contact} />
      <Route exact path='/project' component={Contact} />
      <Redirect to='/' />
    </Switch>
    <Footer/>
   </>
  );
}

export default App;
