"use client"

import React, { useRef, useContext, useEffect } from 'react';
import { TransitionContext } from '@/context/TransitionContext';
import gsap from 'gsap';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import WordSplit, { AnimatedElement } from '@/components/Utilities';

export default function Index() {
  const { timeline } = useContext(TransitionContext);
  const container = useRef(null);

  useGSAP(() => {
    const targets = gsap.utils.toArray(["#image"]);
    gsap.fromTo(targets, { yPercent: 10, opacity: 0 }, { yPercent: 0, opacity: 1, stagger: 0.2, duration: 1.2, ease: 'power4.inOut' });
    gsap.fromTo('#image-content', { opacity: 0 }, { opacity: 1, duration: 1 })
    timeline.add(gsap.to(container.current, { opacity: 0 }));
  }, { scope: container });

  return (
    <div ref={container} className='h-auto w-screen flex flex-col'>
      <section id="start-page" className="relative w-full h-[130vh] overflow-hidden">
        <div id="image" className='absolute w-full top-0 left-0 h-full overflow-hidden'>
          <Image src={'/me2.jpg'} width={1000} height={1000} className='w-screen contrast-125 brightness-75 -translate-y-1/4' alt="me-image" loading="lazy" />
        </div>
        <AnimatedElement config={{
          to: {
            y: '-=100%',
            ease: 'none',
          },
          scrollTrigger: {
            scrub: 0.2,
            trigger: container.current,
            start: 'top top',
            end: 'bottom top',
          }
        }}>
          <div id="image-content" className='p-32 box-border h-screen flex items-end relative z-10'>
            <h1 className='text-7xl w-1/2 text-white'>Creating pixel perfect implementations from design to development</h1>
          </div>
        </AnimatedElement>
      </section>

      <div id='next-sections' className='h-screen w-full bg-[#e3e6e4]'>
        <AnimatedElement config={{
          to: {
            y: '-=70%',
            ease: 'none',
          },
          scrollTrigger: {
            scrub: 0.2,
            trigger: container.current,
            start: 'top top',
            end: 'bottom top',
          }
        }}>
          <section className='bg-[#e3e6e4] h-auto w-full p-32 flex justify-end'>
            <div id="wrapper" className='w-3/4 flex flex-col'>
              <div id="main-heading" className='mb-20'>
                <AnimatedElement staggerEl='#alpha' config={{
                  from: {
                    top: 200
                  },
                  to: {
                    top: 0,
                    stagger: 0.06,
                    ease: 'power4.inOut',
                    duration: 5,
                  },
                  scrollTrigger: {
                    scrub: 4,
                    start: 'top 80%',
                    end: 'top 80%',
                  }
                }}>
                  <WordSplit>
                    <p words={true} splitStyle="text-left max-[500px]:text-left inline-block" className={`text-black text-7xl font-extralight inline-block p-1`}>The developer's role is like an architect, designing efficient, scalable, and intuitive experiences that bring ideas to life with precision and creativity.
                    </p>
                  </WordSplit>
                </AnimatedElement>
              </div>
              <div id="some-words" className='flex flex-row'>
                <div id="heading" className='flex-1'><h1 className='text-3xl'>Some words</h1></div>
                <div id="some-words-content" className='flex-[2] text-2xl'>

                  <p splitStyle="text-left max-[500px]:text-left inline-block">
                    Hey there! I’m a 24-year-old developer with a passion for creating intuitive and engaging digital experiences. My journey in tech has equipped me with a diverse skill set in front-end development, primarily using React and JavaScript, but I also love exploring the depths of design and user experience. <br /><br />

                    When I’m not coding, you can find me immersed in competitive games, sketching out my next creative project, or delving into the fascinating stories of history. Badminton is my go-to sport on the weekends, where I enjoy the thrill of a good match, and music is a big part of my life—I’m a professional Veena player, blending traditional artistry with my tech-savvy nature.<br /><br />

                    I believe in the power of collaboration and creativity, and I’m always eager to take on new challenges that push my boundaries. Welcome to my portfolio, where I share my projects and passion for innovation!
                  </p>

                </div>
              </div>
            </div>
          </section>
        </AnimatedElement>
      </div>


      {/* Prevent extra space at the end */}
      <div className="h-0"></div>
    </div >
  );
}
