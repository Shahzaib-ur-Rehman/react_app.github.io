import React from "react";
import Card from "./Card";
import Sdata from "../Sdata";
const Services = () => {
  return (
    <>
      <div className='container-fluid'>
        <div className='my-5 text-center'>
          <h2>Our Services</h2>
        </div>
      </div>
      <div className='container'>
        <div className='row gy-3'>
          {Sdata.map((val, indx) => {
            return (
              <Card key={indx} soucreimg={val.imgsrc} cardTitle={val.cardTitle} />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Services;
