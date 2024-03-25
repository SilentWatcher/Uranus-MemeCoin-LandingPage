import React from 'react'
import '../../styles/About.css'
import Binance from '../../assets/About/binance.png'
import Coinbase from '../../assets/About/coinbase.png'
import Gate from '../../assets/About/gate.png'
import Hotbit from '../../assets/About/hotbit.png'
import Gecko from '../../assets/About/gecko.png'
import MemeCoin from '../../assets/About/meme_coin.png'
import Loopers from '../../assets/About/Loopers.png';

function About() {
  return (
    <div className='aboutus_section' id='about'>
        <h1 className='goldman_regular'>Our Trusted Partners</h1>
        <div className='partners'>
            {/* <div className="inner"> */}
                <img loading='lazy' style={{scale:"1.4"}}   src={Binance} alt="okok" />
                <img loading='lazy' style={{padding:"1rem", marginBottom:"2px", marginLeft:"10px"}}  src={Coinbase} alt="okok" />
                <img loading='lazy'  src={Gate} alt="okok" />
                <img loading='lazy'  src={Hotbit} alt="okok" />
                <img loading='lazy'  src={Gecko} alt="okok" />
            {/* </div> */}

        </div>

        <div className='gradient_blue'></div>
        <div className='whatisuranus '>
            <h1 className='goldman_regular'>What is Uranus?</h1>
            <div className="text_coin">
                <p>
                Unveiling the Legit Meme Coin Cosmos! <br />
                    Uranus isn't just another run-of-the-mill cryptocurrency; it's a bona fide meme coin that injects humor and joy into the digital asset space. 
                    Step into our cosmic community, where laughter is the driving force and exploration knows no bounds. 
                    Whether you're a crypto connoisseur or just dipping your toes, Uranus welcomes all to join the journey. 
                    Embrace the whimsical side of finance and embark on an intergalactic adventure with us!
                </p>
                <img src={MemeCoin} loading='lazy' className='memecoin' alt="MemeCoin" />
                <img src={Loopers} loading='lazy' alt="" className="loopers" />
            </div>
        </div>

        

        
        
    </div>
  )
}

export default About