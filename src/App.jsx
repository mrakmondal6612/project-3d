import { useState, Suspense } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls, ContactShadows } from '@react-three/drei'
import ASSET from '../public/ASSET'
import Footer from './Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Canvas>
        <ambientLight intensity={0.5}/>
        <OrbitControls enableZoom={100}/>
        <Suspense fallback={null}>
          <ASSET/>
        </Suspense>
        <Environment preset='sunset'/>
        <ContactShadows position={[0, -1, 0]} opacity={0.5} scale={20} blur={1} far={10} resolution={256} color="#000000" />
       </Canvas>
       <div className='container'>
        <h1 plumbing>
          Plumbing
        </h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia debitis autem animi facere suscipit assumenda impedit, sint magnam quis repellendus error dolore, maiores neque qui blanditiis quaerat, aliquid excepturi libero?
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia debitis autem animi facere suscipit assumenda impedit, sint magnam quis repellendus error dolore, maiores neque qui blanditiis quaerat, aliquid excepturi libero?
        </p>
       </div>
       <Footer />
    </>
  )
}

export default App
