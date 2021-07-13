import React from 'react';
import Navbar from './Navbar';

function Header() {
  return(
    <div id="main">
      <Navbar />
      <div className='name'>
          <h1><span>Crie seu aplicativo</span> <br />Com segurança e escalabilidade</h1>
          <p className='details'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
          Qui laboriosam sunt iste eum at natus obcaecati similique exercitationem. Minima
           voluptas debitis animi id! Sequi eum amet quam? Voluptatem, sequi beatae.</p>
           <a href='#' className='cv-btn'>Saber mais</a>
      </div>
    </div>
  )
}

export default Header;