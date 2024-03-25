import React from 'react'
import '../../styles/Roadmap.css'

import TimeLine from './TimeLine'
function Rodmap() {
  return (
    <div className='roadmap_section' id='roadmap'>
        <h1 className=" goldman_regular">Roadmap</h1>

        <div>
        <div style={{zIndex:"-20", top:"5px"}} className='gradient_boll_cyan'></div>



            <div className="timeline_container" style={{display:"flex", alignItems:"center",justifyContent:"center", flexWrap:"wrap", gap:"2rem", marginTop: "4rem"}}>
                <TimeLine no={1} para={"Successfully launch Uranus meme coin on decentralized exchanges (DEXs) and establish an engaged online community through social media."} heading={"Launch and Community Building"}/>
                <TimeLine no={2} para={"Fine-tune Uranus tokenomics for sustainable growth, including deflationary mechanisms like token burning to increase scarcity."} heading={"Tokenomics Optimization"}/>
                <TimeLine no={3} para={"Forge strategic partnerships with meme coin projects, influencers, and meme pages to expand Uranus's reach and visibility."} heading={"Partnerships and Collaborations"}/>
                <TimeLine no={4} para={"Explore opportunities to enhance Uranus token utility beyond meme culture, such as integrating with NFT platforms or developing meme-themed DApps."} heading={"Development of Utility"}/>
                <TimeLine no={5} para={"Introduce community governance mechanisms for Uranus token holders to participate in decision-making processes and shape the project's future direction."} heading={"Decentralized Governance"}/>
                <div style={{zIndex:"-20", top:"400px"}} className='gradient_boll_orange' ></div>
            </div>




        </div>
    </div>
  )
}

export default Rodmap