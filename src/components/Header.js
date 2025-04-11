"use client"

import React from 'react'
import Link from 'next/link';

export default function Header() {
  return (
    <div className='flex gap-5 w-full items-center justify-center fixed top-0 left-0 p-5 2k:p-10 z-20 text-white'>
      <div id="link-wrapper" className='w-auto max-[500px]:w-4/5 2k:px-5 2k:py-3 flex align-center justify-center rounded-full  max-[500px]:p-0 bg-black/40 backdrop-blur-xl'>
        <Link className='m-5 mx-12 2k:text-2xl text-lg max-[500px]:text-sm max-[500px]:m-5' scroll={true} href="/">Home</Link>
        <Link className='m-5 mx-12 2k:text-2xl text-lg max-[500px]:text-sm max-[500px]:m-5' scroll={true} href="/about_page">About</Link>
        <Link className='m-5 mx-12 2k:text-2xl text-lg max-[500px]:text-sm max-[500px]:m-5' scroll={true} href="/projects_page">Projects</Link>
      </div>
    </div>
  )
}