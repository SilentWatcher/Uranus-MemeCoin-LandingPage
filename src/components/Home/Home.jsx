import React from 'react'
import '../../styles/Home.css'
import AstroImg from '../../assets/Hero_section/hero_astranaut.png'
// import AstroImg from '../../assets/Hero_section/hero_astranaut_.png'
// import Elipse from '../../assets/Hero_section/orbit_elipse.png'
function Home() {
  // {{height:"100vh",background:"blue", backgroundImage:`url(${uranusPath})`, backgroundRepeat:"no-repeat", backgroundSize:"cover"}}
  return (
    <section className='hero_section' id='home' >
        <div className="heading">
          <h1 className='goldman_regular'>
          Discover the Galactic Potential of Uranus Meme Coin
          </h1>
          <p>Uniting laughter, community, and financial empowerment in the crypto universe. With innovative tokenomics and a dedicated team, we're more than a meme – we're your ticket to the stars.</p>
          <div className='btn'><span>Buy Now</span></div>
        </div>
        <div className="astro">
          <img src={AstroImg} loading='lazy' className="rocket" alt="AstroImg" />
          
          
        </div>
        

        
    </section>
  )
}

export default Home