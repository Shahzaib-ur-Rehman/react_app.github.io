import React from 'react';

const  Home =  (props) => {
  return (
   <>
    <div className='container-fluid Home_Div'>
      <div className='row'>
        <div className='col-10 mx-auto'>
          <div className='row Home_Div'>
            <div className='col-md-6 col-10 mx-auto order-1 d-flex flex-column justify-content-center'>
              <h1>Wellcome To The MERN Stack Development</h1>
              <h2>By  <strong className='text-primary'>STUDIO 007</strong></h2>
              <div className='mt-3'>
                <button className='btn btn-outline-primary btn_home'>{props.btntext}</button>
              </div>
            </div>
            <div className='col-md-6 col-10 mx-auto order-lg-1'>
              <img src={props.imgsrc} style={{width:'500px'}} className='img-fluid' alt='Home Img'></img>
            </div>
          </div>
        </div>
      </div>
    </div>
   </>
  );
}

export default Home;
