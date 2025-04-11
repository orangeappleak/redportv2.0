"use client"

import React, { useRef, useContext, useEffect, useState } from 'react';
import { TransitionContext } from '@/context/TransitionContext';
import gsap from 'gsap';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import { AnimatedElement } from '@/components/Utilities';
import { ScrollTrigger } from 'gsap/all';

export default function Index() {
  const { timeline } = useContext(TransitionContext);
  const container = useRef(null);
  const pinElement1 = useRef(null);

  const superPowerData1 = [
    "Full Stack Development",
    "Java Full Stack",
    "Game Development",
    "UI/UX Development",
    "Amazon Cloud Services"
  ]

  const whyConsiderData = [
    {
      title: "💘 User's Valentine",
      description: "Design that flirts with users and romances your KPIs. I make things people love—and love to click."
    },
    {
      title: "🧠 Pixel-Perfect with a Purpose",
      description: "Looks good. Works better. I blend beauty with brains to create designs that actually perform."
    },
    {
      title: "🧱 Built From Front to Back (End)",
      description: "I don't just design what users see—I engineer what makes it work. End-to-end. Pixel to database."
    },
    {
      title: "🛰️ Full Stack. Full Power.",
      description: "From responsive UIs to robust APIs, I build systems that work hard under the hood and look good doing it."
    },
    {
      title: "🧰 Tech-Stacked and Impact-Backed",
      description: "React, Node, Python, SQL—you name it. I use the right tools to solve the right problems."
    },
    {
      title: "📦 Modular, Maintainable, Made to Scale",
      description: "Code should grow with your product. I architect systems ready to scale without the chaos."
    }

  ]

  const skillSet = [
    ['React', 'React Native', 'Redux', 'React State Management', 'React Spring', 'Angular', 'Vue js', 'Tailwind CSS', 'Ecmascript', 'Typescript', 'JSON', 'GSAP', 'Next JS', 'Sass', 'HTML/CSS'],
    ['Java Spring', 'Java MVC', 'Hibernate', 'POGO', 'Java Springboot', 'JDBC', 'Microservices architecture', 'Restful API design', 'JUnit', 'Microservices Architechture'],
    ['Unreal Engine', 'Blender', 'PhotoShop', 'Unity', 'Unity Web', 'Unreal Environments', 'C#', 'Visual Studio', 'Unity Lighting', 'Animation Rigs'],
    ['Figma', 'Adobe XD', 'Wordpress', 'Wix', 'Photoshop', 'Prototyping', 'Wireframing', 'Design'],
    ['CloudFront', 'EC2', 'Beanstalk', 'Lambda', 'RDS', 'S3', 'IAM', 'Cloudwatch', 'Elasticache', 'Sagemaker']
  ]

  const superImageContent = [
    {
      bgColor: 'bg-[#90e0ef]',
      textColor: 'text-[#0077b6]',
      headingColor: 'text-[#03045e]',
      heading: ['Build', 'Optimize', 'Deploy'],
      imageSrc: "https://videos.openai.com/vg-assets/assets%2Ftask_01jrk2xjrhe7aawzkncgye6sqt%2Fimg_0.webp?st=2025-04-11T17%3A32%3A56Z&se=2025-04-17T18%3A32%3A56Z&sks=b&skt=2025-04-11T17%3A32%3A56Z&ske=2025-04-17T18%3A32%3A56Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=aa5ddad1-c91a-4f0a-9aca-e20682cc8969&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=pdp7%2FpXyT4R8k9vVLY1Ky7ZVM%2BvnFQrqXxC5LFWYvAw%3D&az=oaivgprodscus"
    },
    {
      bgColor: 'bg-[#e0c3fc]',
      textColor: 'text-[#8187dc]',
      headingColor: 'text-[#757bc8]',
      heading: ['Code', 'Integrate', 'Scale'],
      imageSrc: "https://videos.openai.com/vg-assets/assets%2Ftask_01jrk35bv8e12sp31mjnkkej9e%2Fimg_0.webp?st=2025-04-11T17%3A44%3A36Z&se=2025-04-17T18%3A44%3A36Z&sks=b&skt=2025-04-11T17%3A44%3A36Z&ske=2025-04-17T18%3A44%3A36Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=aa5ddad1-c91a-4f0a-9aca-e20682cc8969&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=BGNyiJWn8MvekBFZWeO73KdTCvMCrmUN4MNb0Tm0OZQ%3D&az=oaivgprodscus"
    },
    {
      bgColor: 'bg-[#e1ecf7]',
      textColor: 'text-[#83b0e1]',
      headingColor: 'text-[#71a5de]',
      heading: ['Inspire', 'Design', 'Elevate'],
      imageSrc: "https://videos.openai.com/vg-assets/assets%2Ftask_01jrjwwjvtfhgs5pdq2rb4810h%2Fimg_0.webp?st=2025-04-11T15%3A30%3A02Z&se=2025-04-17T16%3A30%3A02Z&sks=b&skt=2025-04-11T15%3A30%3A02Z&ske=2025-04-17T16%3A30%3A02Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=aa5ddad1-c91a-4f0a-9aca-e20682cc8969&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=K6eginhHuL%2BkvvNuJli4UxCQ4xFhYPnxiI7h%2BFIDEg8%3D&az=oaivgprodscus"

    },
    {
      bgColor: 'bg-[#cad2c5]',
      textColor: 'text-[#52796f]',
      headingColor: 'text-[#2f3e46]',
      heading: ['Deploy', 'Scale', 'Secure'],
      imageSrc: "https://videos.openai.com/vg-assets/assets%2Ftask_01jrjwwjvtfhgs5pdq2rb4810h%2Fimg_0.webp?st=2025-04-11T15%3A30%3A02Z&se=2025-04-17T16%3A30%3A02Z&sks=b&skt=2025-04-11T15%3A30%3A02Z&ske=2025-04-17T16%3A30%3A02Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=aa5ddad1-c91a-4f0a-9aca-e20682cc8969&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=K6eginhHuL%2BkvvNuJli4UxCQ4xFhYPnxiI7h%2BFIDEg8%3D&az=oaivgprodscus"
    }
  ]



  useEffect(() => {

    gsap.to(pinElement1.current, {
      ease: 'sine.inOut',
      scrollTrigger: {
        scrub: 2,
        trigger: container.current.querySelector('#third-wrapper'),
        pin: pinElement1.current,
        anticipatePin: 1,
        start: 'top top',
        end: 'bottom bottom',
        pinSpacing: false,
        pinReparent: false,
      }
    });

    gsap.to("#super-power-card", {
      scrollTrigger: {
        trigger: "#third-inner-wrapper",       // The section where the pinning happens
        start: "top top",                // Start pinning when the top of the wrapper reaches the top of the viewport
        end: "top bottom",
        endTrigger: "#why-consider",           // Adjust based on how long you want the card to stay pinned
        pin: "#super-power-card",
        anticipatePin: 1,      // Pin the card
        scrub: 2,
        pinReparent: false,
        pinSpacing: false, // Smooth scrubbing as you scroll,
      }
    });



    gsap.fromTo(container.current.querySelector('#super-powers-heading'), { scale: 1, opacity: 1, y: 0 },
      {
        opacity: 0.3, scale: 0.95, y: 50, ease: 'power2.inOut', duration: 2, scrollTrigger: {
          scrub: 2,
          trigger: container.current.querySelector('#third-inner-wrapper'),
          start: 'top bottom',
          end: 'top top'
        }
      },);

    const targets = gsap.utils.toArray([".super-image"]);
    const containers = gsap.utils.toArray(['#container-content']);
    const content1 = gsap.utils.toArray(['#content-1']);
    const content2 = gsap.utils.toArray(['#content-2 #content-2-image']);
    // setConts(containers);

    containers.forEach((target) => {
      gsap.fromTo(target, {
        opacity: 0,
      }, {
        opacity: 1,
        scrollTrigger: {
          trigger: target,
          start: 'top bottom',
          end: 'bottom center',
          pinSpacing: false,
          pinReparent: false,
          scrub: 1,
        }
      })
    })

    content1.forEach((target, index) => {
      gsap.fromTo(target, {
        y: -300,
        opacity: 0
      }, {
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: target,
          start: 'top center',
          end: 'bottom center',
          scrub: 1
        }
      })
    })

    content2.forEach((target, index) => {
      gsap.fromTo(target, {
        y: 300,
        opacity: 0
      }, {
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: target,
          start: 'top bottom',
          end: 'center bottom',
          scrub: 1
        }
      })
    })


    targets.forEach((target, index) => {

      console.log(target, index);

      gsap.to(target, {
        transform: index > 0 ? `translate(0%, -${index * 100}%)` : 'translate(0%, 0%)', z: 10, stagger: 1, duration: 1, scrollTrigger: {
          // trigger: index > 0 ? containers[index] : containers[0],
          trigger: target,
          start: "top bottom",
          end: "bottom bottom",
          pinSpacing: false,
          pinReparent: false,
          scrub: 1,
          markers: true,
        }
      });
    });


  }, []);

  useGSAP(() => {
    const targets = gsap.utils.toArray(["#image"]);
    gsap.fromTo(targets, { yPercent: 10, opacity: 0 }, { yPercent: 0, opacity: 1, stagger: 0.2, duration: 1.2, ease: 'power4.inOut' });
    gsap.fromTo('#image-content', { opacity: 0 }, { opacity: 1, duration: 1 })
    timeline.add(gsap.to(container.current, { opacity: 0 }));

  }, { scope: container });

  useEffect(() => {
    gsap.to("#why-consider-heading", {
      scrollTrigger: {
        trigger: "#why-consider",
        start: "top top",
        end: "bottom bottom",
        pin: "#why-consider-heading",
        anticipatePin: 1,
        pinSpacing: false,
        pinReparent: false
      }
    });
  }, []);

  return (
    <div id="main-container" ref={container} className='h-auto overflow-hidden'>

      <section id="start-page" className="relative h-[100vh] max-[500px]:h-[100svh] overflow-hidden">
        <div id="image" className='absolute top-0 left-0 h-screen w-screen max-[500px]:h-screen'>
          <Image quality={100} src={'/goku.jpg'} alt="" fill style={{ objectFit: "cover" }} priority />
        </div>
        <AnimatedElement config={{
          to: {
            y: '-=100%',
            ease: 'none',
          },
          scrollTrigger: {
            scrub: 0.2,
            start: 'top top',
            end: 'bottom top',
          }
        }}>
          <div id="image-content" className='p-32 max-[500px]:p-5 box-border h-screen max-[500px]:h-svh flex items-end relative z-10'>
            <h1 className='text-7xl max-[500px]:text-3xl 3xl:text-5xl font-medium w-[50%] max-[500px]:w-full text-black 2k:text-8xl'>Creating pixel perfect implementations from design to development</h1>
          </div>
        </AnimatedElement>
      </section>

      <FourthWrapper />

      <div id='next-sections' className='p-5 z-10 relative rounded-b-3xl max-[500px]:p-2 h-auto w-full bg-white'>
        <section className='bg-white relative overflow-hidden h-auto w-full max-[500px]:p-0 flex flex-col'>
          <div id="first-wrapper" className='w-full flex flex-col items-end max-[500px]:items-start'>
            <div id="inner-wrapper" className='w-3/4 max-[500px]:w-full flex flex-col'>
              {/* <div id="main-heading" className='mb-20'>
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
                    <p words={true} splitStyle="text-left max-[500px]:text-left inline-block" className={`text-stone-700 leading-snug text-7xl max-[500px]:text-3xl font-medium inline-block p-1 max-[500px]:py-0 max-[500px]:px-1`}>The developer's role is like an architect, designing efficient, scalable, and intuitive experiences that bring ideas to life with precision and creativity.
                    </p>
                  </WordSplit>
                </AnimatedElement>
              </div> */}
              <div id="some-words" className='flex flex-row max-[500px]:flex-col'>
                <div id="heading" className='flex-1 max-[500px]:flex-[0.5]'><h1 className='text-3xl mb-7'>Some words</h1></div>
                <div id="some-words-content" className='z-10 flex-[2] text-2xl max-[500px]:text-xl'>

                  <p className="text-left max-[500px]:text-left font-light inline-block">
                    Hey there! I'm a 24-year-old developer with a passion for creating intuitive and engaging digital experiences. My journey in tech has equipped me with a diverse skill set in front-end development, primarily using React and JavaScript, but I also love exploring the depths of design and user experience. <br /><br />

                    When I'm not coding, you can find me immersed in competitive games, sketching out my next creative project, or delving into the fascinating stories of history. Badminton is my go-to sport on the weekends, where I enjoy the thrill of a good match, and music is a big part of my life—I'm a professional Veena player, blending traditional artistry with my tech-savvy nature.<br /><br />

                    I believe in the power of collaboration and creativity, and I'm always eager to take on new challenges that push my boundaries. Welcome to my portfolio, where I share my projects and passion for innovation!
                  </p>

                </div>
              </div>
            </div>

          </div>
          <div id="second-wrapper" className='w-full mt-52 max-[500px]:mt-10 h-screen max-[500px]:h-auto'>
            <div id="facts-figures" className='flex flex-col'>
              <div id="heading" className='relative'>
                <AnimatedElement trigger='#image-content' config={{
                  from: {
                    x: '10%',
                  },
                  to: {
                    x: "-500%",
                    ease: 'power4.inOut',
                    duration: 2,
                  },
                  scrollTrigger: {
                    endTrigger: "#third-wrapper",
                    scrub: 1,
                    start: 'center center',
                    end: 'center center'
                  }
                }}>
                  <h1 className='relative w-auto whitespace-nowrap leading-tight inline-block text-[15vw] max-[500px]:text-9xl font-semibold text-stone-700'>Facts & Figures . Facts & Figures . Facts & Figures . Facts & Figures</h1>
                </AnimatedElement>
              </div>
              <div id="fact-cards" className='mt-20 grid grid-cols-3 max-[500px]:grid-cols-1'>
                <AnimatedElement trigger="#second-wrapper" config={{
                  from: {
                    y: '0%',
                  },
                  to: {
                    y: "-5%",
                    ease: 'power4.inOut',
                    duration: 4,
                  },
                  scrollTrigger: {
                    scrub: 2,
                    start: 'top bottom',
                    end: 'bottom top',
                  }
                }}>
                  <div id="fact-cards-1" className='flex flex-col'>
                    <FactCards colorG={'bg-gradient-to-b from-orange-300 to-orange-800'} number={'3+'} title={"Professional Experience"} />
                    <FactCards colorG={'bg-gradient-to-br from-purple-500 to-red-600'} number={'2000+'} title={"Hours Spent Debugging"} />
                  </div>
                </AnimatedElement>
                <div id="fact-cards-2" className='flex flex-col'>
                  <FactCards colorG={'bg-gradient-to-b from-cyan-300 to-stone-800'} number={'12+'} title={"Project Completions"} />
                  <FactCards colorG={'bg-gradient-to-b from-slate-300 to-stone-800'} number={'20+'} title={"Website Built"} />
                </div>
                <AnimatedElement trigger="#second-wrapper" config={{
                  from: {
                    y: '0%',
                  },
                  to: {
                    y: "5%",
                    ease: 'power4.inOut',
                    duration: 4,
                  },
                  scrollTrigger: {
                    scrub: 1,
                    start: 'top bottom',
                    end: 'bottom top',
                  }
                }}>
                  <div id="fact-cards-3" className='flex flex-col'>
                    <FactCards colorG={'bg-gradient-to-b from-pink-400 to-blue-600'} number={'10000+'} title={"lines of code"} />
                    <FactCards colorG={'bg-gradient-to-b from-red-300 to-purple-800'} number={'500+'} title={"Cups of Coffee"} />
                  </div>
                </AnimatedElement>
              </div>
            </div>
          </div>

          <div id="third-wrapper" className={`relative h-[600lvh] max-[500px]:h-[800vh] w-full box-border overflow-hidden`}>
            <div ref={pinElement1} id="super-powers-heading" className='relative top-0 w-full left-0 h-screen max-[500px]:h-screen flex flex-col justify-center items-center'>
              <h1 className='text-[8vw] text-stone-700 font-bold max-[500px]:font-light max-[500px]:text-4xl text-center leading-tight'>What are my</h1>
              <h1 className='text-[8vw] max-[500px]:text-[20vw] text-stone-700 font-bold text-center leading-none'>Super Powers?</h1>
            </div>
            <div id="third-inner-wrapper" className='absolute max-[500px]:top-[500px] h-auto max-[500px]:h-lvh box-border flex flex-row w-full'>
              {/* <div id="super-power-card-data1" className='h-auto max-[500px]:absolute z-10 top-full box-border p-10 flex-1 flex flex-col justify-center items-center relative w-full'>
                {superPowerData1.map((data, index) => {
                  return <SuperCardBox key={index} cardInfo={{ data, index }} />
                })}
              </div> */}
              <div id='super-power-card-wrapper' className='flex max-[500px]:pt-24 box-border w-full h-screen max-[500px]:h-[100vh] justify-center items-center top-0 flex-[2]'>
                <div id="super-power-card" className='h-screen max-[500px]:h-[70%] w-full overflow-hidden justify-center items-center relative'>
                  {superImageContent.map((data, index) => {
                    return <SuperImageContent key={index} data={data} index={index} />
                  })}
                </div>
              </div>
              {/* <div id="super-power-card-data2" className='h-screen max-[500px]:hidden flex-1 p-10 relative top-0 w-full'>
                {skillSet.map((data, index) => {
                  return <SuperCardBoxSkills key={index} data={data} />
                })}
              </div> */}

            </div>
          </div>



        </section>
        <section id="why-consider" className='h-full w-full'>
          <div id="why-consider-heading" className='h-[50vh] flex flex-col items-center justify-center w-full'>
            <h1 className='text-9xl max-[500px]:text-7xl font-black text-center'>Why Consider Me?</h1>
          </div>
          <div id="why-consider-content" className='h-auto p-40 max-[500px]:p-10 flex flex-col items-center justify-center w-full'>
            {whyConsiderData.map((data, index) => {
              return <WhyConsiderCards key={index} data={data} index={index} />
            })}
          </div>
        </section>
      </div>

      {/* Prevent extra space at the end */}
      <div className="h-0"></div>
    </div >
  );
}

const WhyConsiderCards = ({ data, index }) => {

  const getAlignment = (index) => {
    const alignments = ['center', 'flex-start', 'center', 'flex-end'];
    return alignments[index % alignments.length];
  };

  return (
    <div
      id="why-consider-cards"
      className='h-[40vh] m-2 flex flex-col items-center justify-center max-[500px]:w-full w-[20vw]'
      style={{ alignSelf: getAlignment(index) }}
    >
      <AnimatedElement id="why-consider-card-wrapper" className='h-full flex bg-slate-400/20 rounded-xl backdrop-blur-sm flex-col justify-between p-16 3xl:p-10' config={{
        from: {
          rotateY: 180,
        },
        to: {
          rotateY: 0,
          ease: "slow(0.7,0.7,false)"
        },
        scrollTrigger: {
          scrub: 1,
          duration: 100,
          start: 'top bottom',
          end: 'bottom center'
        }
      }}>
        <h1 className='text-4xl 2k:text-5xl 3xl:text-3xl max-[500px]:text-3xl font-bold'>{data.title}</h1>
        <p className='text-2xl 2k:text-3xl 3xl:text-xl max-[500px]:text-xl opacity-75 font-light'>{data.description}</p>
      </AnimatedElement>
    </div>
  )
}

const FourthWrapper = () => {

  const fourthWrapperRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  //choose the screen size 
  // const handleResize = () => {
  //   if (window.innerWidth < 500) {
  //     setIsMobile(true)
  //     console.log("isMobile-true");
  //   } else {
  //     setIsMobile(false)
  //     console.log("isMobile-false");
  //   }
  // }

  useEffect(() => {
    if (window.innerWidth < 500) {
      setIsMobile(true)
      console.log("isMobile-true");
    } else {
      setIsMobile(false)
      console.log("isMobile-false");
    }
  }, []);

  useEffect(() => {

    const fourthWrapper = fourthWrapperRef.current.querySelector("#fourth-heading-wrapper");
    const contentHeight = fourthWrapperRef.current.querySelector("#fourth-wrapper-content")?.getBoundingClientRect().height;

    console.log(contentHeight);
    console.log(window.innerHeight);

    if (fourthWrapper && contentHeight) {
      fourthWrapper.style.height = `${contentHeight + window.innerHeight}px`;
      console.log("Height set to:", fourthWrapper.style.height);
    }

    const imageAnim = gsap.fromTo("#fourth-image-img",
      {
        y: 400,
        x: isMobile ? 0 : 400,
        transform: 'rotate(-30deg)'
      },
      {
        y: isMobile ? -300 : -600,
        x: 0,
        transform: 'rotate(-10deg)',
        scrollTrigger: {
          trigger: '#fourth-image',
          scrub: 0.4,
          duration: 2,
          ease: 'ease.power4',
          start: 'top bottom',
          end: 'center top',
        }
      },
    );

    const headingWrapperAnim = gsap.to("#fourth-heading-wrapper", {
      scrollTrigger: {
        start: 'top top',
        end: 'bottom bottom',
        endTrigger: '#fourth-wrapper-content ',
        pin: '#fourth-heading-wrapper',
        anticipatePin: 1,
        pinSpacer: false,
        pinSpacing: false
      }
    });

    return () => {
      imageAnim.scrollTrigger?.kill();
      headingWrapperAnim.scrollTrigger?.kill();
      ScrollTrigger.refresh();
    };


  }, [isMobile])

  return (
    <div id="fourth-wrapper" ref={fourthWrapperRef} className='relative w-full h-auto box-border flex flex-col overflow-hidden'>
      <div id="fourth-heading-wrapper" className={`relative`}>
        <div id="fourth-heading" className='relative max-[500px]:p-2 h-auto max-[500px]:h-screen max-[500px]:flex flex-col justify-center'>
          <h1 className="text-[10vw] max-[500px]:text-7xl text-white font-semibold leading-[0.8]">Of everything I've shared, this one means the most</h1>
          <div id="fourth-image" className='flex flex-col items-center justify-end'>
            <Image id="fourth-image-img" alt="" className='w-[70vw] rounded-3xl max-[500px]:w-auto max-[500px]:h-auto' src={'/luffy2.jpg'} style={{ objectFit: 'cover' }} height={10000} width={10000} />
          </div>
        </div>
      </div>
      <div id="fourth-wrapper-content" className='absolute p-5 flex-1 bg-white w-full h-auto max-[500px]:h-auto translate-y-[100vh] box-border max-[500px]:p-2 top-0'>
        <div id="the-story" className="flex-1 z-10 w-full">
          <p className='text-7xl max-[500px]:text-4xl font-normal'>
            The journey for my all-blue began back in 2015, when the first lines of my code came to life. Since then, it has been a path of learning and carving myself with every tool I can fully understand and use to my advantage. This self-learning journey has taught me a lot, and the wonders it offers will never cease. I want to keep pushing further, grasping even more from this vast sea of technological advancements, which is beautiful in itself
          </p>
        </div>
        <AnimatedElement id="fourth-wrapper-images" staggerEl='#fourth-me-image-wrapper' className='flex-1 my-10 h-[65vh] max-h-[65vh] max-[500px]:h-[150vh] max-[500px]:max-h-[150vh] box-border w-full overflow-hidden flex max-[500px]:flex-col flex-row' config={{
          from: {
            y: '100%',
          },
          to: {
            y: 0,
            x: 0,
            stagger: 0.5,
            ease: "slow(0.7,0.7,false)"
          },
          scrollTrigger: {
            scrub: 2,
            duration: 4,
            start: 'top bottom',
            end: 'bottom bottom'
          }
        }}>
          <MeImages img={'/me4.jpg'} title={'The Creative Mastermind'} number={'1'} color={'bg-green-500'} />
          <MeImages img={'/me5.JPG'} title={'The One Piece Enthusiast'} number={'2'} color={'bg-red-500'} />
          <MeImages img={'/me6.jpg'} title={'The Crazy Funny Guy'} number={'3'} color={'bg-purple-500'} />
        </AnimatedElement>
      </div>
    </div>)
}

const MeImages = ({ title, img, number, color }) => {
  return <div id="fourth-me-image-wrapper" className='group rounded-t-3xl mx-2 max-[500px]:mx-0 max-[500px]:my-2 h-full flex items-center justify-center w-full relative overflow-hidden '>
    <Image alt="" quality={75} className='-translate-y-[0%] scale w-full h-auto' src={img} height={10000} width={10000} loading='lazy' />
    <div id="image-hover-div" className={`absolute mix-blend-multiply ${color} w-full transition-transform rounded-2xl -translate-x-[100%] group-hover:-translate-x-[10%] rotate-45 group-hover:rotate-6 translate-y-[100%] duration-500 ease-[cubic-bezier(0.445, 0.05, 0.55, 0.95)] group-hover:translate-y-[50%] max-[500px]:group-hover:translate-y-[30%] top-0 h-full`}>


    </div>
    <div id="fourth-content-wrapper" className='flex p-5 flex-col box-border justify-start items-end absolute text-white w-full transition-transform -translate-x-[100%] group-hover:-translate-x-[10%] rotate-45 group-hover:rotate-6 translate-y-[100%] duration-500 ease-[cubic-bezier(0.445, 0.05, 0.55, 0.95)] group-hover:translate-y-[50%] max-[500px]:group-hover:translate-y-[30%] top-0 h-full'>
      <h1 className='font-semibold text-white text-2xl'>{title}</h1>
      <h1 className='font-bold text-9xl'>{number}</h1>
    </div>
  </div>
}


const SuperImageContent = ({ data, index }) => {

  return (
    <div id="image-wrapper" className={`super-image flex p-10 bg-white/30 backdrop-blur-sm max-[500px]:p-5 border-black-600/50 border-t-[10px] super-image top-0 translate-y-[${index * 200}%] relative box-border w-full h-screen overflow-hidden`}>
      <div id="content-wrapper" className='w-full flex flex-row justify-around'>
        <div id="content-1" className='flex-1 flex flex-col items-start justify-start'>
          {data.heading.map((heading) => {
            return <h1 key={index} className={`text-8xl w-1/2 text-${data.headingColor}-500`}>{heading}</h1>
          })}
        </div>
        <div id="content-2" className='flex-[1.5] w-full h-full overflow-hidden'>
          <div id="image-wrapper" className='w-auto flex items-center justify-center h-full'>
            <Image
              id="content-2-image"
              className='w-auto h-full object-cover rounded-3xl'
              quality={100}
              src={data.imageSrc}
              width={10000}
              height={10000}
              alt=""
              priority
            />
          </div>
        </div>
        <div id="content-3" className='flex-1'>
        </div>
      </div>
    </div>
  );
};


const SuperCardBox = ({ cardInfo }) => {
  const container = useRef(null);
  const box = useRef(null);
  const contContent = useRef(null);


  return (
    <div id='box-wrapper' className='h-auto w-full flex-1 flex'>
      <div
        ref={box}// Store the ref for each boxs
        className='h-screen w-full justify-center items-center flex-1'
      >
        <div ref={container} id="container" className='h-full flex justify-center py-10 items-center'>
          <div ref={contContent} id="container-content" className='translate-x-0 w-full flex justify-center backdrop-blur-sm items-center h-1/5 max-[500px]:h-auto bg-slate-300/50 shadow-slate-400 rounded-xl'>
            <h1 className='text-5xl max-[500px]:text-3xl text-black max-[500px]:text-center font-medium max-[500px]:p-5 px-10 py-20'>{cardInfo.data}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

const SuperCardBoxSkills = ({ data }) => {
  const container = useRef(null);
  const box = useRef(null);
  const contContent = useRef(null);


  return (
    <div id='box-wrapper' className='h-auto w-full flex-1 flex'>
      <div
        ref={box}// Store the ref for each boxs
        className='h-screen w-full py-10 flex-1 flex flex-col justify-end items-end'
      >
        <div ref={container} id="container" className='h-1/2 w-full flex justify-center items-center'>
          <div ref={contContent} id="container-content" className='translate-x-0 w-full inline-block justify-center items-center h-full rounded-xl'>

            <div id="skill-wrapper" className='flex flex-wrap justify-start items-start p-4'> {/* Added flex and wrap here */}
              {data.map((skill, index) => (
                <p id="skill" key={index} className='text-xl m-1 p-3 rounded-lg border-[1px] border-black whitespace-nowrap'>
                  {skill}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


const FactCards = ({ number, title, colorG }) => {
  return (
    <div id="factCard" className='shadow-slate-400 shadow-inner rounded-3xl p-2 m-5 flex justify-between flex-col-reverse'>
      <h1 className={`bg-clip-text ${colorG} py-5 px-10 max-[500px]:py-5 text-[6vw] text-left max-[500px]:text-6xl text-transparent font-bold`}>{number}</h1>
      <h1 className='text-sm font-semibold max-[500px]:text-sm py-2 px-10 text-black/50 text-left'>{title}</h1>
    </div>
  )
}
