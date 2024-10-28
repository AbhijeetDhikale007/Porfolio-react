import Earth from '../../../public/Earth/Earth'
import CanvasLoader from '../../../public/Earth/CanvasLoader'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { Environment, OrbitControls } from '@react-three/drei'
import './Earth.scss'

const EarthModel = () => {
  return (
    <div className='Earth'>
      <Canvas
        style={{ width: '100%', height: '100%' }}
        shadows
        frameloop='demand'
        dpr={[1, 2]}
        gl={{ preserveDrawingBuffer: true }}
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [-4, 3, 6],
        }}
      >
        <Environment preset='sunset' />
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            autoRotate
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Earth />

          {/* <Preload all /> */}
        </Suspense>
      </Canvas>
    </div>
  )
}

export default EarthModel