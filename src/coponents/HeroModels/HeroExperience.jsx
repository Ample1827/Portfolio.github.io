import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useMediaQuery } from "react-responsive";

import { Model } from './Duck';

const HeroExperience = () => {
    const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
    const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });
  
    return (
      <Canvas camera={{ position: [-10, -35, -25], fov: 45 }}>
        <ambientLight intensity={0.4} color="##0000FF" />
        <directionalLight
          position={[5,5,5]} // Light position
          intensity={5} // Light intensity
        />
        <OrbitControls
          enablePan={false} // Prevents panning of the scene
          enableZoom={!isTablet} // Disables zoom on tablets
          maxDistance={20} // Maximum distance for zooming out
          minDistance={5} // Minimum distance for zooming in
          minPolarAngle={Math.PI / 5} // Minimum angle for vertical rotation
          maxPolarAngle={Math.PI / 2} // Maximum angle for vertical rotation
        />
        <group
          scale={isMobile ? 0.7 : 1}
          position={[0, -3.5, 0]}
          rotation={[0, -Math.PI / 4, 0]}
        >
          <Model />
        </group>
    </Canvas>
  )
}

export default HeroExperience
