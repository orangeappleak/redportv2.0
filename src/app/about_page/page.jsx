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
          <section className='bg-[#e3e6e4] relative overflow-hidden h-auto w-full p-32 flex flex-col'>
            <div id="first-wrapper" className='w-full flex flex-col items-end'>
              <div id="inner-wrapper" className='w-3/4 flex flex-col'>
                <div id="main-heading" className='mb-20'>
                  <Image src={'/about_bg.svg'} className='z-0 absolute opacity-30 w-full border-2 top-0 left-0' width={1000} height={1000} alt="bg_image" />
                  <AnimatedElement staggerEl='#alpha' config={{
                    from: {
                      top: 200
                    },
                    to: {
                      top: 0,
                      stagger: 0.06,
                      ease: 'power4.inOut',
                      duration: 3,
                    },
                    scrollTrigger: {
                      scrub: 2,
                      start: 'top bottom',
                      end: 'top 70%',
                    }
                  }}>
                    <WordSplit>
                      <p words={true} splitStyle="text-left max-[500px]:text-left inline-block" className={`text-stone-700 text-7xl font-extralight inline-block p-1`}>The developer's role is like an architect, designing efficient, scalable, and intuitive experiences that bring ideas to life with precision and creativity.
                      </p>
                    </WordSplit>
                  </AnimatedElement>
                </div>
                <div id="some-words" className='flex flex-row'>
                  <div id="heading" className='flex-1'><h1 className='text-3xl'>Some words</h1></div>
                  <div id="some-words-content" className='z-10 flex-[2] text-2xl'>

                    <p splitStyle="text-left max-[500px]:text-left inline-block">
                      Hey there! I’m a 24-year-old developer with a passion for creating intuitive and engaging digital experiences. My journey in tech has equipped me with a diverse skill set in front-end development, primarily using React and JavaScript, but I also love exploring the depths of design and user experience. <br /><br />

                      When I’m not coding, you can find me immersed in competitive games, sketching out my next creative project, or delving into the fascinating stories of history. Badminton is my go-to sport on the weekends, where I enjoy the thrill of a good match, and music is a big part of my life—I’m a professional Veena player, blending traditional artistry with my tech-savvy nature.<br /><br />

                      I believe in the power of collaboration and creativity, and I’m always eager to take on new challenges that push my boundaries. Welcome to my portfolio, where I share my projects and passion for innovation!
                    </p>

                  </div>
                </div>
              </div>

            </div>
            <div id="second-wrapper" className='w-full mt-52 h-screen'>
              <div id="facts-figures" className='flex flex-col'>
                <div id="heading" className='relative'>
                  <AnimatedElement config={{
                    from: {
                      x: '-20%',
                    },
                    to: {
                      x: "-200%",
                      ease: 'power4.inOut',
                      duration: 4,
                    },
                    scrollTrigger: {
                      scrub: 2,
                      trigger: container.current,
                      start: 'top top',
                      end: 'bottom top',
                    }
                  }}>
                    <h1 className='relative w-auto whitespace-nowrap leading-tight inline-block text-[15vw] font-semibold text-stone-700'>Facts & Figures . Facts & Figures . Facts & Figures</h1>
                  </AnimatedElement>
                </div>
                <div id="fact-cards" className='mt-20 grid grid-cols-3 gap-10'>
                  <AnimatedElement config={{
                    from: {
                      y: '0%',
                    },
                    to: {
                      y: "-20%",
                      ease: 'power4.inOut',
                      duration: 4,
                    },
                    scrollTrigger: {
                      scrub: 2,
                      trigger: container.current,
                      start: 'top top',
                      end: 'bottom top',
                    }
                  }}>
                    <div id="fact-cards-1" className='flex gap-10 flex-col'>
                      <FactCards colorG={'bg-gradient-to-b from-orange-300 to-orange-800'} number={'3+'} title={"Professional Experience"} />
                      <FactCards colorG={'bg-gradient-to-b from-red-300 to-purple-800'} number={'12+'} title={"lines of code"} />
                    </div>
                  </AnimatedElement>
                  <div id="fact-cards-2" className='flex gap-10 flex-col'>
                    <FactCards colorG={'bg-gradient-to-b from-cyan-300 to-stone-800'} number={'12+'} title={"Project Completions"} />
                    <FactCards colorG={'bg-gradient-to-b from-slate-300 to-stone-800'} number={'20+'} title={"Website Built"} />
                  </div>
                  <AnimatedElement config={{
                    from: {
                      y: '0%',
                    },
                    to: {
                      y: "20%",
                      ease: 'power4.inOut',
                      duration: 4,
                    },
                    scrollTrigger: {
                      scrub: 2,
                      trigger: container.current,
                      start: 'top top',
                      end: 'bottom top',
                      markers: true,
                    }
                  }}>
                    <div id="fact-cards-3" className='flex gap-10 flex-col'>
                      <FactCards colorG={'bg-gradient-to-b from-pink-400 to-blue-600'} number={'10000+'} title={"lines of code"} />
                      <FactCards colorG={'bg-gradient-to-b from-red-300 to-purple-800'} number={'500+'} title={"Cups of Coffee"} />
                    </div>
                  </AnimatedElement>
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

const FactCards = ({ number, title, colorG }) => {
  return (
    <div id="factCard" className='border-4 border-stone-600  rounded-3xl flex justify-between flex-col'>
      <h1 className={`bg-clip-text ${colorG} py-10 px-5 text-8xl text-transparent font-bold`}>{number}</h1>
      <h1 className='text-2xl py-2 px-5 text-slate-600 border-t-slate-600 border-t-[1px]'>{title}</h1>
    </div>
  )
}
