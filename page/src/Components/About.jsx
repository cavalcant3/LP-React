import React from 'react';

function About(props) {
  return (
    <div id='about'>
      <div className='about-Image'>
          <img src={props.image} alt=''/>
      </div>  
        <div className='about-text'>
          <h2> {props.title} </h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur 
            adipisicing elit. Voluptatem odit vitae dolor neque
             asperiores natus distinctio autem, aliquam iure quos
              deleniti in possimus doloremque impedit fuga vel
            Veniam quisquam cumque unde facilis odit inventore eos?
          </p>
          <button> {props.button} </button>
        </div>
    </div>
  )
}

export default About;