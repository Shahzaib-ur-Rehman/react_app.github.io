import React from 'react';
import homepic from '../images/home.jpg'
import Common from './Common';
const  Home =  () => {
  return (
   <>
    <Common
      imgsrc={homepic}
      btntext='Our Services'
      navLink='/service'
    />
   </>
  );
}

export default Home;
