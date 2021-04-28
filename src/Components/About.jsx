import React from 'react';
import aboutpic from '../images/about.png'
import Common from './Common';
const  Home =  () => {
  return (
   <>
    <Common
      imgsrc={aboutpic}
      btntext='Contact US'
      navLink='/contact'
    />
   </>
  );
}

export default Home;
