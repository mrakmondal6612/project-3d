import { useState, Suspense } from 'react'
import './App.css'

import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls, ContactShadows } from '@react-three/drei'
import ASSET from '../public/ASSET.jsx'
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
      <div className="model-container">
       <Canvas>
        <ambientLight intensity={0.5}/>
        {/* <OrbitControls enableZoom={true} enableRotate enablePan={false} maxPolarAngle={Math.PI}/> */}
        <OrbitControls 
            enablePan={false} 
            enableRotate={true} 
            enableZoom={false} 
            minPolarAngle={Math.PI / 2} 
            maxPolarAngle={Math.PI / 2} 
            minAzimuthAngle={-Math.PI } 
            maxAzimuthAngle={Math.PI} 
/>
        <Suspense fallback={<mesh><boxGeometry /><meshStandardMaterial color="gray" /></mesh>}>
          <ASSET/>
        </Suspense>
        <Environment preset='sunset'/>
        <ContactShadows position={[0, -1, 0]} opacity={0.5} scale={20} blur={1} far={15} resolution={256} color="#000000" />
       </Canvas>
      </div>
    </section>
      <div className='products '>
        <h1>
          Plumbing
        </h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia debitis autem animi facere suscipit assumenda impedit, sint magnam quis repellendus error dolore, maiores neque qui blanditiis quaerat, aliquid excepturi libero?
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia debitis autem animi facere suscipit assumenda impedit, sint magnam quis repellendus error dolore, maiores neque qui blanditiis quaerat, aliquid excepturi libero?
        </p>
      </div>
      <section className="products ">
        <h2>Our Top Products</h2>
        <ProductList />
      </section>
       <Footer />
    </>
  )
}

export default App
