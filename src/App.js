import React from 'react';
import 'semantic-ui-css/semantic.min.css'
import NavBar from './components/NavBar'
import './App.css'
import Experiences from './components/Experiences';
import Portofolio from './components/Portofolio';
import Formation from './components/Formation'
import Nuage from './components/Nuage'
import Contact from './components/Contact'
import Car from './components/Carousel';
import Footer from './components/Footer';
import {Icon} from 'semantic-ui-react'


function App() {
  return (
    <>
    <a className='retourHaut' href='#'><Icon name='arrow alternate circle up outline'></Icon></a>
    <div className="fond">
     <NavBar />
    </div>
    <div className='homePage'>
    <Experiences />
    <Formation />
    <Nuage />
    <Portofolio />
    <Car/>
    <Contact />
    
  </div>
  <Footer />
    
   
    
    </>
  );
}

export default App;
