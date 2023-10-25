import './App.css'

import moon from './assets/moon.png'
import land from './assets/land.png'
import cat from './assets/cat.gif'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { useRef } from 'react'


function App() {
  const ref= useRef();

  return (
    <>
      <Parallax pages={4} ref={ref}>       

        <ParallaxLayer sticky={{ start: 0.8, end: 2.5}}>
          <img src={cat} alt="Cat" />
        </ParallaxLayer>

        <ParallaxLayer
          offset={0}
          speed={1}
          factor={2}
          style={{
            backgroundImage: `url(${moon})`,
            backgroundSize: 'cover'
          }}
        />

        <ParallaxLayer 
          offset={2}
          speed={1}
          factor={4}
          style={{
            backgroundImage: `url(${land})`,
            backgroundSize: 'cover'
          }}
        ></ParallaxLayer>

        <ParallaxLayer offset={0.1} speed={0.05} onClick={()=> ref.current.scrollTo(3)}>
           <h2>Welcome to my websites</h2>
        </ParallaxLayer>
        
        <ParallaxLayer offset={3.3} speed={2} onClick={()=> ref.current.scrollTo(0)}>
          <h2>Web development is fun!</h2>
        </ParallaxLayer>

      </Parallax>      
    </>
  )
}

export default App
