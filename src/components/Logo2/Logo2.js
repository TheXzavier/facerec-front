import React from 'react';
import Tilt from 'react-parallax-tilt';
import eye3edit from './eye3edit.png'
import './ParallaxEffectGlareScale.scss';


const ParallaxEffectGlareScale = () => (
    <div className= 'ma3 mt0'>
    <Tilt
      className="parallax-effect-glare-scale br3 shadow-2"
      perspective={500}
      glareEnable={true}
      glareMaxOpacity={0.45}
      scale={1.02}
    >
      <div className="inner-element">
      <img alt ='eye3edit' src={eye3edit}></img> 
      </div>
    </Tilt>
    </div>
  );
  
  export default ParallaxEffectGlareScale;


