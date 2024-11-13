"use client"
import './globals.css';

export default function NotFound() {

  return (
    <section className='h-screen w-screen flex justify-center items-center p-10'>
      <span className='text-white text-5xl max-[500px]:text-3xl w-1/2 max-[500px]:w-full text-center'>The page you visited is either <span className='text-red-500'>under development</span> or you wandered into a different dimension</span>
    </section>
  )

}