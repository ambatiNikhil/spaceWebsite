import React from 'react'
import './contactStyles.css'

const Form = () => {
  return (
    <div>
        <h1>Contact Us</h1> 
        <section className='container'>
        <form>
            <div className='field'> 
                <p>Name</p>
                <input type='text'/>
            </div>
            <div className='field'> 
                <p>Email</p>
                <input type='email'/>
            </div>
            <div className='field'> 
                <p>Cell</p>
                <input type='tel'/>
            </div>

            <div className='form-button'>
              <button>Submit</button>
            </div>
        </form>
        </section>
        </div>
  )
}

export default Form