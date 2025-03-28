import { useState, Suspense } from 'react'
import './App.css'

import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls, ContactShadows } from '@react-three/drei'
import ASSET from './ASSET'
import Footer from './Footer'
import Navbar from './Navbar'
import ProductList from './ProductList'

function App() {

  return (
    <>
    <Navbar/>
    <header className="hero">
    <h1>Premium Plumbing Solutions</h1>
    <p>High-quality plumbing products for all your needs</p>
    </header>
    <section className="model-section">
       <Canvas>
        <ambientLight intensity={0.5}/>
        {/* <OrbitControls enableZoom={true} enableRotate enablePan={false} maxPolarAngle={Math.PI}/> */}
        <OrbitControls 
            enablePan={false} 
            enableRotate={true} 
            enableZoom={true} 
            minPolarAngle={0} 
            maxPolarAngle={Math.PI} 
            minAzimuthAngle={-Math.PI / 2} 
            // maxAzimuthAngle={Math.PI / 2} 
/>
        <Suspense fallback={<div>Loading Model...</div>}>
          <ASSET/>
        </Suspense>
        <Environment preset='sunset'/>
        <ContactShadows position={[0, -1, 0]} opacity={0.5} scale={20} blur={1} far={10} resolution={256} color="#000000" />
       </Canvas>
    </section>
       <div className='products'>
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
       <section className="products">
        <h2>Our Top Products</h2>
        <ProductList />
      </section>
       <Footer />
    </>
  )
}

export default App
