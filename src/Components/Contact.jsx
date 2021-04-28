import React from "react";

const Contact = () => {
  return (
    <>
      <div className='container-fluid'>
        <div className='my-5 text-center'>
          <h2>Contact US</h2>
        </div>
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6 col-10 mx-auto'>
            <form>
              <div className='mb-3'>
                <label for='formGroupExampleInput' className='form-label'>
                  Full Name
                </label>
                <input
                  type='text'
                  className='form-control'
                  id='formGroupExampleInput'
                  placeholder='Enter Your Name'
                />
              </div>
              <div className='mb-3'>
                <label for='formGroupExampleInput2' className='form-label'>
                  Phone
                </label>
                <input
                  type='number'
                  className='form-control'
                  id='formGroupExampleInput2'
                  placeholder='Enter Your Mobile Number'
                />
              </div>
              <div className='mb-3'>
                <label for='formGroupExampleInput2' className='form-label'>
                  Email
                </label>
                <input
                  type='email'
                  className='form-control'
                  id='formGroupExampleInput2'
                  placeholder='Enter Your Email'
                />
              </div>
              <div class='form-floating'>
                <textarea
                  class='form-control'
                  placeholder='Leave a comment here'
                  id='floatingTextarea2'></textarea>
                <label for='floatingTextarea2'>Comments</label>
              </div>
              <div className='col-12 mt-3 d-flex justify-content-end'>
                <button type='submit' className='btn btn-outline-primary'>
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
