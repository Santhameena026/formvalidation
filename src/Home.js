import React from 'react'
import './App.css'
import { FaFaceSmile } from "react-icons/fa6";

const Home = () => {
  return (
    <main className='d-flex  justify-content-center bgimghome'>
    
      <p className='text-center text-white my-5 fs-1'>Thank you for joining us! <span className='text-warning'><FaFaceSmile/></span></p>
    </main>
  )
}

export default Home