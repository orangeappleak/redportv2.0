"use client"

import { useGSAP } from '@gsap/react';
import projectsData from './projectsData';
import Image from 'next/image';

import { useBodyRef, useScrollTriggger } from "@/context/BodyRefContext";
import { AnimatedElement, WordSplit, getRandomNumber } from '@/components/Utilities';

import gsap from "gsap";
import { useRef, useEffect } from 'react';

export default function Home() {
  // const { timeline } = useContext(TransitionContext);
  const container = useRef(null);
  const homeRef = useRef();
  // const { bodyRef } = useBodyRef();

  useEffect(() => {

    gsap.to(homeRef.current, {
      ease: 'bounce.inOut',
      scrollTrigger: {
        trigger: homeRef.current,
        pin: homeRef.current.parentElement,
        anticipatePin: 1,
        pinSpacing: false,
      }
    })

  }, [])

  useGSAP(() => {
    const targets = gsap.utils.toArray(["h1", "p", "div"])

    gsap.fromTo(targets, { opacity: 0.1 }, { opacity: 1, ease: 'power4.inOut', duration: 1 })

  }, { scope: homeRef });

  return (
    <div ref={container} className='overflow-hidden'>
      <AnimatedElement trigger="#home-page-wrapper" config={{
        from: {
          scale: 1,
        },
        to: {
          scale: 1.3,
          ease: 'sine.inOut'
        },
        scrollTrigger: { scrub: 1, start: 'center top', end: 'bottom top' }
      }}>
        <div ref={homeRef} className='overlap-wrapper relative h-[150vh]'>
          <section id='home-page-wrapper' className="h-[150vh] absolute inset-0 z-10 w-screen">
            <div id="home-page" className="relative top-0 m-0 p-0 overflow-hidden h-screen w-screen">
              <div id="home-page-content" className="h-full bg-stone-950 flex flex-col p-[5em] max-[500px]:p-[2em]">
                <div id="home-page-heading" className="flex-[2] max-[500px]:flex-[8] w-full h-auto flex flex-row max-[500px]:flex-col justify-center items-center">
                  <h1 className="flex-1 text-stone-400 text-3xl max-[500px]:text-2xl 2k:text-4xl 3xl:text-xl font-light flex items-center">Software</h1>
                  <div id="middle-content-wrapper" className="flex-1 h-full flex flex-col justify-center items-center">
                    <p className="text-stone-300 leading-none 2k:text-2xl">Meet</p>
                    <AnimatedElement staggerEl="span" config={{
                      from: {
                        transform: 'translate(0%, 0%)',

                      },
                      to: {
                        transform: 'translate(0%, -150%)',
                        stagger: 0.01,
                        ease: 'power4.inOut'
                      },
                      scrollTrigger: {
                        scrub: 4,
                        start: 'top top',
                        end: 'bottom top'
                      }
                    }}>
                      <WordSplit>
                        <h1 splitStyle="flex overflow-hidden leading-none" className="leading-none my-5 text-white font-normal text-[10vw] max-[500px]:text-[20vw] tracking-normal">Karthik</h1>
                      </WordSplit>
                    </AnimatedElement>
                    <p className="text-white text-center text-xl max-[500px]:text-sm 2k:text-3xl 3xl:text-xl">Seasoned software developer crafting innovative digital solutions, from web pages to complex applications, all while embracing the journey of code magic.</p>
                  </div>
                  <h1 className="flex-1 text-white/50 text-3xl max-[500px]:text-2xl 2k:text-4xl font-light flex items-center justify-end 3xl:text-xl">Developer</h1>
                </div>
                <AnimatedElement staggerEl="#graphic" className="relative left-0 top-0 h-auto w-full flex-[1.5] max-[500px]:flex-[4] flex items-end" config={{
                  from: {
                    transform: 'translate(0%,0%)',
                  },
                  to: {
                    transform: 'translate(0%,-120vh)',
                    stagger: 0.5,
                    ease: 'sine.inOut',
                    duration: 5,
                  },
                  scrollTrigger: {
                    scrub: 3,
                    start: 'top top',
                  }
                }}>
                  <div id="graphic-wrapper" className="flex h-full w-full">
                    <div id="graphic" className="origin-center relative rounded-full w-full full bg-white mx-2"></div>
                    <div id="graphic" className="origin-center relative rounded-full w-full h-full bg-white mx-2 "></div>
                    <div id="graphic" className="origin-center relative rounded-full w-full h-full bg-white mx-2 "></div>
                    <div id="graphic" className="origin center relative rounded-full w-full h-full bg-white mx-2 "></div>
                    <div id="graphic" className="origin-center relative max-[500px]:hidden rounded-full w-full h-full bg-white mx-2"></div>
                  </div>
                </AnimatedElement>
              </div>
            </div>
          </section>
        </div>

      </AnimatedElement>
      <div id="pages-wrapper" className='border-2 border-red relative z-[2] h-auto w-screen box-border rounded-3xl max-[500px]:rounded-[30px] px-[2em] pb-[5em] max-[500px]:px-[1.5em] pt-[6em] max-[500px]:pt-0 bg-[#e3e6e4]'>
        <IntroPage />
        <Manifesto />
        <About />
        <Projects />
      </div>
    </div>
  );
}

const IntroPage = () => {

  const introRef = useRef(null)

  return <section ref={introRef} className="relative h-lvh max-[500px]:h-[60vh] w-full box-border flex items-center justify-center" id="intro-page">
    <div id="intro-page-heading" className="relative text-[7vw] text-center max-[500px]:text-[10vw] w-full leading-none flex flex-col items-center justify-center">
      <AnimatedElement trigger="#intro-page" className="relative z-[4] origin-center" config={{
        from: {
          transform: 'translate(-20%, 0%)',
        },
        to: {
          transform: 'translate(20%, 0%)',
          ease: 'sine.inOut'
        },
        scrollTrigger: {
          scrub: 1,
          start: 'top bottom',
          end: 'bottom top',
        }
      }}>
        <h1 className="relative w-auto text-nowrap font-semibold z-[4] text-stone-800">Pioneering change</h1>
      </AnimatedElement>
      <div id="middle" className="w-full flex flex-nowrap justify-center items-center z-[0] relative my-[0.5em]">
        {/* <h1 className="relative text-[5vw] font-semibold z-3">creative</h1>
              <h1 className="relative text-[5vw] font-semibold z-3">magician</h1> */}
        <h1 className="text-[12vw] relative text-nowrap w-auto font-semibold text-slate-700 p-10">Pioneering change</h1>
      </div>
      <AnimatedElement trigger="#intro-page" className="relative z-[4] origin-center" config={{
        from: {
          transform: 'translate(20%, 0%)',
        },
        to: {
          transform: 'translate(-20%, 0%)',
          ease: 'sine.inOut',
        },
        scrollTrigger: {
          scrub: 1,
          start: 'top bottom',
          end: 'bottom top',
        }
      }}>
        <h1 className="relative text-nowrap font-semibold z-[4] text-stone-800">Pioneering change</h1>
      </AnimatedElement>
    </div>
    <div id="intro-page-image" className="absolute w-full z-0 h-screen flex justify-center items-end max-[500px]:items-center max-[500px]:top-0 left-0">
      <AnimatedElement className="relative z-[2] flex w-full items-center justify-center" config={{
        to: {
          y: '-=80%',
        },
        scrollTrigger: {
          scrub: 0.2,
        }
      }}>
        <Image src={'/me1.jpg'} width={1000} height={1000} className="rounded-3xl w-1/2 max-[500px]:w-full rotate-[0deg]" alt="me-image" loading="lazy" />
      </AnimatedElement>
    </div>
  </section >
}

const Manifesto = () => {


  return <section id="manifesto-page" className="relative h-screen max-[500px]:h-auto items-center max-[500px]:items-end flex justify-start">
    <div id="manifesto-content" className="max-[500px]:mr-0 relative flex flex-col items-center justify-center max-[500px]:w-full py-[2em] z-2">
      <h1 className="text-slate-700 text-center text-xl 2k:text-2xl font-bold my-4">Manifesto</h1>
      <AnimatedElement staggerEl="#alpha" className="w-3/4 max-[500px]:w-full flex justify-center border-box" config={{
        from: {
          top: 200,
        },
        to: {
          top: 0,
          stagger: 0.06,
          ease: 'power4.inOut',
          duration: 3,
        },
        scrollTrigger: {
          scrub: 5,
          start: 'top bottom',
          end: 'center 70%',
        }
      }}>

        <WordSplit>
          <p words={true} splitStyle="text-center max-[500px]:text-left inline-block" className={`text-black text-6xl 2k:text-7xl 3xl:text-5xl leading-snug inline-block p-1 max-[500px]:text-4xl max-[500px]:pl-0`}>In the realm of technology, I wield code as my tool, crafting digital experiences that inspire and empower. Fueled by curiosity, I constantly explore new frontiers, embracing challenges as opportunities for innovation. My mission is to push creative boundaries and shape a limitless future.
          </p>
        </WordSplit>
      </AnimatedElement>
    </div>
    <AnimatedElement trigger="#manifest-bg" staggerEl="#circles" config={{
      to: {
        scale: 1,
        stagger: 0.09,
        ease: 'power4.inOut',
        top: 0,
        left: 0,

      },
      scrollTrigger: {
        scrub: 2,
        start: 'top bottom',
        end: 'center center',
      }
    }} id="manifest-bg" className="max-[500px]:hidden absolute flex flex-1 justify-center items-center py-20 w-full h-full max-[500px]:gap-40 max-[500px]:absolute max-[500px]:w-full">
      <div id='circles-wrapper' className="grid grid-cols-2 w-1/2 h-full">
        <div id="circle-wrapper" className="relative w-full h-full">
          <div id="circles" className={`origin-center absolute scale-50 top-[50%] left-[50%] w-full h-full max-[500px]:bg-transparent bg-black/20 rounded-full`}>
          </div>
        </div>
        <div id="circle-wrapper" className=" relative w-full h-full">
          <div id="circles" className="origin-center absolute scale-50 top-[50%] right-[50%] w-full h-full max-[500px]:bg-transparent border-[4px] border-black/20 rounded-full">
          </div>
        </div>

        <div id="circle-wrapper" className=" relative w-full h-full">
          <div id="circles" className="origin-center absolute scale-50 bottom-[50%] left-[50%] w-full h-full max-[500px]:bg-transparent border-[4px] border-black/20 rounded-full">
          </div>
        </div>
        <div id="circle-wrapper" className=" relative w-full h-full ">
          <div id="circles" className="origin-center absolute scale-50 bottom-[50%] right-[50%] w-full h-full max-[500px]:bg-transparent bg-black/20 rounded-full">
          </div>
        </div>
      </div>

    </AnimatedElement>

  </section >
}

const About = () => {
  const bodyRef = useBodyRef()
  const st = useScrollTriggger();
  const headingRef = useRef(null);

  useEffect(() => {
    if (!bodyRef?.current || !st) return;

    // Pin the heading section
    st.create({
      trigger: headingRef.current,
      pin: true,
      endTrigger: bodyRef.current.querySelector('#about-cards-wrapper'),
      start: 'top 10%',
      end: 'bottom bottom',
      anticipatePin: 1,
      pinSpacing: false,
    });
  }, [bodyRef, st]);

  const aboutData = [
    {
      title: "Innovate & Craft",
      src: 'https://images.unsplash.com/photo-1699865574995-eb61e12d97bd?q=80&w=3432&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      content: "I craft novel, user-centered solutions that captivate and inspire, transforming ideas into impactful experiences that leave a lasting mark.",
    },
    {
      title: "Prototype & Perfect",
      src: 'https://images.unsplash.com/photo-1698825810716-d3f126a50385?q=80&w=3432&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      content: "I refine user experiences with precision, turning concepts into polished, intuitive prototypes that resonate with users through thoughtful iteration.",
    },
    {
      title: "Code & Create",
      src: 'https://images.unsplash.com/photo-1698825810702-10bb885eec26?q=80&w=3432&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      content: "I craft elegant, efficient code that blends functionality with creativity, transforming complex concepts into intuitive, inspiring software experiences.",
    },
    {
      title: "Develop & Deliver",
      src: 'https://images.unsplash.com/photo-1697898783543-18651b0db28f?q=80&w=3432&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      content: "I navigate development with precision, delivering high-quality software from concept to deployment. Agile and focused, I create timely, innovative solutions that enrich users' lives.",
    },
  ]

  return <section id='about-page' className="relative h-full w-full my-20 box-border flex items-center flex-col max-[500px]:flex-col">
    <div ref={headingRef} id="curly-heading" className="h-lvh w-1/2 flex py-[5em] max-[500px]:py-[2em] flex-col justify-center flex-1 max-[500px]:w-full">
      <h1 className="text-xl 2k:text-2xl text-slate-700 font-bold text-left">Why Consider</h1>
      <p className="text-3xl 2k:text-5xl text-left mt-5">Innovating solutions, perfecting user experiences, and delivering high-quality software with precision and agility.</p>
    </div>
    <div id="about-cards-wrapper" className="w-full pb-[50em] box-border flex-1 justify-center items-center flex flex-col max-[500px]:w-full">
      {aboutData.map((el, index) => {
        return <div key={index} id={"about-cards" + index} className={`w-full ${index !== (aboutData.length - 1) ? "mb-[20em]" : "mb-0"} flex items-center justify-center px-[0em] relative h-[50vh] 2k:h-[100vh] max-[500px]:px-0`}>
          <AboutCard content={el.content} heading={el.title} index={index} id={'page' + index} src={el.src}></AboutCard>
        </div>
      })}
    </div>
  </section>
}

const AboutCard = ({ id, index, heading, content }) => {
  const bodyRef = useBodyRef();
  const st = useScrollTriggger();
  const cardRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!bodyRef?.current || !st) return;

    const startPos = bodyRef.current.querySelector('#curly-heading').offsetHeight;
    const card = cardRef.current;
    const container = containerRef.current;

    if (card && container) {
      // Set fixed container dimensions
      gsap.set(container, {
        position: 'relative',
        height: '50vh', // Fixed height
        width: '100%',
        overflow: 'hidden'
      });

      // Set fixed card dimensions
      gsap.set(card, {
        position: 'absolute',
        top: '50%',
        left: '50%',
        x: '-50%',
        y: '-50%',
        width: '66.666667%',
        height: '100%',
        zIndex: 1000 - index
      });
    }

    st.create({
      trigger: bodyRef.current.querySelector(`#about-page #${id}`),
      pin: true,
      ease: 'power4.inOut',
      endTrigger: bodyRef.current.querySelector('#about-cards-wrapper'),
      start: `top ${startPos + (index * 15) + 90}`,
      end: 'bottom bottom',
      pinSpacing: false,
      anticipatePin: 1,
      onEnter: () => {
        gsap.set(card, { clearProps: "all" });
      }
    });
  }, [id, index, st, bodyRef]);

  return (
    <div ref={containerRef} className="relative w-full 2k:h-[70vh] flex items-center justify-center">
      <AnimatedElement config={{
        from: {
          scale: 1,
        },
        to: {
          scale: 1,
          duration: 4
        },
        scrollTrigger: {
          scrub: 1,
          start: 'top center',
          end: 'center top',
          ease: 'power4.inOut'
        }
      }} id={id} ref={cardRef} className="overflow-hidden max-[500px]:w-full w-2/3 2k:h-1/2 py-10 2k:py-20 bg-stone-900 rounded-3xl box-border shadow-2xl">
        <div className="relative flex h-full px-10 max-[500px]:px-10 flex-row max-[500px]:flex-col max-[500px]:align-center max-[500px]:justify-center overflow-hidden">
          <div className="flex-col w-full max-[500px]:w-full flex items-start p-10 max-[500px]:p-0 justify-center">
            <AnimatedElement className="mb-5 max-[500px]:mb-0" staggerEl="span" config={{
              to: {
                transform: 'translate(0%, 0%)',
                opacity: 1,
                stagger: 0.05,
              },
              scrollTrigger: {
                scrub: 2,
                start: 'top 80%',
                end: '+=50px',
              }
            }}>
              <WordSplit>
                <h1 words={false} splitStyle='overflow-hidden flex items-center justify-center relative' className="relative opacity-1 translate-y-[100%] tracking-normal leading-none font-semibold text-white text-8xl max-[500px]:text-white/30 max-[500px]:text-center max-[500px]:text-lg 3xl:text-6xl">{heading}</h1>
              </WordSplit>
            </AnimatedElement>
            <p className="z-2 text-stone-400 text-4xl 2k:text-5xl 3xl:text-2xl max-[500px]:text-lg max-[500px]:text-white">{content}</p>
          </div>
        </div>
      </AnimatedElement>
    </div>
  );
}

const Projects = () => {
  const st = useScrollTriggger();
  const bodyRef = useBodyRef();

  useEffect(() => {
    st.create({
      trigger: bodyRef.current.querySelector("#projects-content-wrapper"),
      pin: true,
      endTrigger: bodyRef.current.querySelector("#project3"),
      start: 'top top',
      end: 'bottom bottom',
      pinSpacing: false,
    })
  }, [st, bodyRef])



  return <section id="projects-wrapper" className="relative h-auto w-full">
    <div id="projects-content-wrapper" className="relative w-full top-0 left-0 flex flex-col h-auto items-center justify-start">
      <div id="project-bg" className="absolute w-full h-lvh rounded-full top-0 left-0">

      </div>
      <AnimatedElement trigger="#project-cards" config={{
        to: {
          opacity: 0.1,
          scale: 0.95
        },
        scrollTrigger: {
          scrub: 1,
          start: 'top bottom',
          end: 'top top',
        }
      }}>
        <div id="projects-content" className="flex h-lvh items-center pt-[10em] justify-center max-[500px]:justify-start flex-col">
          <div id="project-sub-heading" className="w-1/2 max-[500px]:w-full flex flex-row items-center justify-center">
            <div id="line" className="border-[1px] flex-1 border-black"></div>
            <p className="text-sm px-10 max-[500px]:px-5">Some of my featured works and art</p>
            <div id="line" className="border-[1px] flex-1 border-black"></div>
          </div>
          <div id="project-headings" className="font-semibold flex flex-col items-center justify-center">
            <AnimatedElement trigger="#projects-content-wrapper" staggerEl="span" config={{
              from: {
                transform: 'translate(0%, 5%) rotateX(90deg)',
              },
              to: {
                transform: 'translate(0%, 0%) rotateX(0deg)',
                stagger: 0.02,
                ease: 'power1.inOut'
              },
              scrollTrigger: {
                scrub: 1,
                start: 'top bottom',
                end: 'bottom center'
              }
            }}>
              <WordSplit>
                <h1 splitStyle="flex items-center justify-center overflow-hidden" className="origin-top text-black leading-none font-normal text-[15vw] max-[500px]:text-[20vw]">Featured</h1>
                <h1 splitStyle="flex items-center justify-center overflow-hidden" className="origin-top text-black leading-none font-normal text-[15vw] max-[500px]:text-[20vw]">Artistry</h1>
              </WordSplit>
            </AnimatedElement>
          </div>


        </div>
      </AnimatedElement>

    </div>
    <div id="project-cards" className="flex flex-col items-center justify-center">
      {projectsData.projects.map((project, index) => {
        return <Project id={"project" + index} st={st} bodyRef={bodyRef} data={project} index={index} key={index} />
      })}
    </div>
  </section >
}

const Project = ({ data, id }) => {

  // let [mobile, updateMobile] = useState(false)

  // useEffect(() => {
  //   mobile = window.matchMedia("(max-width: 600px)").matches;
  //   console.log('mobile = ', mobile);
  //   updateMobile(mobile);
  //   // st.create({
  //   //     trigger: bodyRef.current.querySelector("#" + id),
  //   //     pin: true,
  //   //     endTrigger: bodyRef.current.querySelector("#projects-wrapper"),
  //   //     start: 'top top',
  //   //     end: 'bottom bottom',
  //   //     anticipatePin: 1, 
  //   //     pinSpacing: false,
  //   // })
  // }, [mobile])

  return <div id={id} className="relative h-auto my-20 max-[500px]:h-[35vh] w-full max-[500px]:w-screen max-[500px]:my-10 flex flex-col items-center justify-center">
    <div id="project-heading" className="relative z-[4] w-full h-auto top-0 left-0 font-normal flex items-center justify-center">
      <AnimatedElement className="z-10 translate-y-[50px] relative max-[500px]:translate-y-0 flex flex-col items-center justify-center" config={{
        to: {
          yPercent: "-=65"
        },
        scrollTrigger: {
          scrub: 1
        }
      }}>
        <h1 className="text-black leading-none relative text-[7vw] max-[500px]:text-[10vw] text-center">{data.title}</h1>
      </AnimatedElement>
    </div>
    {/* <AnimatedElement className="max-[500px]:collapse origin-center rounded-3xl absolute h-1/3 w-1/4 bg-black text-white" trigger={`#${id}`} config={{
            to: {
                transform: 'translate(-150%,0%) rotate(-10deg)',
                ease: 'power.inOut'
            },
            scrollTrigger: {
                scrub: 0.2,
                start: 'top center',
                end: 'center center'
            }

        }}>
            <div id="skill-card" className="origin-center p-10 h-full flex flex-col justify-center">
                <h1 className="font-bold text-xl my-2">Tools Utilized</h1>
                <p>{data.skills}</p>
            </div>
        </AnimatedElement>

        <AnimatedElement className="max-[500px]:collapse absolute rounded-3xl origin-center h-1/3 w-1/4 bg-black text-white" trigger={`#${id}`} config={{
            to: {
                transform: 'translate(150%,0%) rotate(10deg)',
                ease: 'power.inOut'
            },
            scrollTrigger: {
                scrub: 0.2,
                start: 'top center',
                end: 'center center'
            }
        }}>
            <div id="desc-card" className="origin-center p-10 h-full flex flex-col justify-center">
                <h1 className="font-bold text-xl my-2">Project Brief</h1>
                <p>{data.shortDesc}</p>
            </div>
        </AnimatedElement> */}
    <AnimatedElement className="shadow-xl overflow-hidden h-auto w-[60vw] max-[500px]:h-auto max-[500px]:mx-[1em] max-[500px]:w-full rounded-3xl bg-white" config={{
      from: {
        transform: `roate(0deg)`,
      },
      to: {
        transform: `rotate(${getRandomNumber(-2, 2)}deg)`,
      },
      scrollTrigger: {
        scrub: 0.5,
        start: 'top center',
        end: 'top top',
      }
    }}>
      <div id="image-wrapper" className="h-full w-full flex items-center justify-center" style={{ aspectRatio: "16/9" }}>
        <Image className="w-full border-2 border-red max-[500px]:h-auto max-[500px]:w-full" src={data.image} layout='responsive' fetchPriority='high' quality={100} width={800} height={450} alt="project-image" />
      </div>
    </AnimatedElement>
  </div>
}