import React from 'react'
import MissionCoin from '../../assets/Mission/MissionCoin.png'
import '../../styles/Mission.css'

function Mission() {
  return (
    <div className='mission_section'>
        <div className='whatisuranus '>
            <h1 className='goldman_regular'>Our Mission</h1>
            <div className="text_coin">
                <img src={MissionCoin} loading='lazy' className='memecoin' alt="MemeCoin" />
                <p>
                
                    At Uranus, our mission is to revolutionize the cryptocurrency space by infusing it with humor, community, and financial empowerment. We strive to create a vibrant ecosystem where laughter is the currency of choice and where every member has the opportunity to participate, contribute, and thrive. With a commitment to transparency, innovation, and inclusivity, we aim to challenge the status quo and inspire positive change in the world of finance. Join us as we embark on a cosmic journey to redefine the future of cryptocurrency, one meme at a time."
                </p>
            </div>
        </div>

    </div>
  )
}

export default Mission