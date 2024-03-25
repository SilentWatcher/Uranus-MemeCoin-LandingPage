
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar'
import Elipse from './assets/Hero_section/orbit_elipse.png'
import About from './components/About/About'
import Roadmap from './components/Roadmap/Rodmap'
import Footer from './components/Footer/Footer'
import Mission from './components/Mission/Mission'



function App() {

    
  

  return (
    <div style={{position:"relative", overflow:"hidden"}}>
      {/* BACKGROUND ASSETS START */}
      <div  style={{position:"absolute", zIndex:"-2"}}>
        <img src={Elipse} alt="Elipse" width="auto" height="auto" />
        <div className='gradient_boll_orange'></div>
        <div className='gradient_boll_cyan'></div>
        
      </div>
      {/* BACKGROUND ASSETS END */}


      <Navbar/>
      <Home/>
      <About/>
      <Mission/>
      <Roadmap/>
      <Footer/>
      



    </div>
  )
}

export default App
