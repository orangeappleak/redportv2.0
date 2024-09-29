import React from 'react'
import Link from 'next/link';

export default function Header() {
  return (
    <div className='flex gap-5 w-full items-center justify-center fixed top-0 left-0 p-5 z-10 text-white'>
      <div id="link-wrapper" className='w-auto rounded-full py-4 bg-black/40 backdrop-blur-xl'>
        <Link className='m-10' scroll={true} href="/">Home</Link>
        <Link className='m-10' scroll={true} href="/about_page">About</Link>
        <Link className='m-10' scroll={true} href="/projects_page">Projects</Link>
      </div>
    </div>
  )
}