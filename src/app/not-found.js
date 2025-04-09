"use client"
import './globals.css';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function NotFound() {

  const container = useRef(null);

  useGSAP(() => {
    const targets = gsap.utils.toArray(["h1"])

    gsap.fromTo(targets, { opacity: 0, y: 50 }, { opacity: 1, y: 0, ease: 'power4.inOut', duration: 2 })

  }, { scope: container });

  return (
    <section ref={container} className='h-screen w-screen flex opacity-1 justify-center bg-black z-50 items-center p-10'>
      <h1 className='text-white text-5xl opcaity-0 max-[500px]:text-3xl w-1/2 max-[500px]:w-full text-center'>The page you visited is either <span className='text-red-500'>under development</span> or you wandered into a different dimension</h1>
    </section>
  )

}