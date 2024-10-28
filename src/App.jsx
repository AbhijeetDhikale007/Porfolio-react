// import { lazy } from 'react'

import Lenis from 'lenis'
import EarthModel from './Models/Earth/EarthModel'
import BMW from './Models/BMW/BMW'

// import { Stats } from '@react-three/drei'
// import { Leva } from 'leva'
// import Lambo from './Models/Lambo/Lambo.jsx'
import { Background, Header, Hero, Navbar, Introduction, Education, Skills, Projects, Contact, Footer } from './components/Components'
import './App.css'
import 'virtual:uno.css'

function App() {
  const lenis = new Lenis();

  lenis.on('scroll', (e) => {
    console.log(e);
  });

  const raf = (time) => {
    lenis.raf(time);
    requestAnimationFrame(raf);
  };

  requestAnimationFrame(raf);

  return (
    <>
      <Header />
      <Background />
      <div className='SectionWrapper z-1 pointer-events-none'>
        <Hero />
      </div>
      {/* <Suspense fallback={null}>
        <Lambo />
        <Stats />
        <Leva collapsed />
      </Suspense> */}
      <Navbar />
      <div className='SectionWrapper block lg:flex'>
        <Introduction />
        <BMW />
      </div>
      <div className='SectionWrapper'>
        <Education />
      </div>
      <div className='SectionWrapper'>
        <Skills />
      </div>
      {/* <div className='SectionWrapper'>
        <Projects />
      </div> */}
      <div className='SectionWrapper block lg:flex justify-between mb-0'>
        <EarthModel />
        <Contact />
      </div>
      <Footer />
    </>
  )
}

export default App