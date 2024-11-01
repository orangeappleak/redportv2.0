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
  const pinElement1 = useRef(null);

  const superPowerData1 = [
    "Full Stack Development",
    "Java Full Stack",
    "Game Development",
    "UI/UX Development",
    "Amazon Cloud Services"
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
      headings: ['Build', 'Optimize', 'Deploy'],
      content: [
        { subHeading: '1. Front-end Development', text: 'Developed responsive, user-centric web applications using modern frameworks like React and Angular, ensuring seamless cross-browser functionality and smooth UI/UX.' },
        { subHeading: '2. Back-End & Cloud Integration', text: 'Designed and deployed scalable APIs with Spring Boot, integrated AWS services like EC2, S3, and Lambda to enhance performance and maintainability.' },
        { subHeading: '3. Full-Stack Solutions', text: 'Delivered end-to-end web solutions by combining front-end and back-end expertise, utilizing cloud technologies for secure, scalable, and efficient platforms.' },
      ],
    },
    {
      bgColor: 'bg-[#f6fff8]',
      textColor: 'text-[#a4c3b2]',
      headingColor: 'text-[#6b9080]',
      headings: ['Code', 'Integrate', 'Scale'],
      content: [
        { subHeading: '1. Front-End Development & User Experience', text: 'I design intuitive, responsive interfaces using Angular and React, focusing on visually appealing and accessible layouts for a smooth user experience.' },
        { subHeading: '2. Back-End Architecture & API Implementation', text: 'I develop robust back-end systems with Java and Spring Boot, creating scalable RESTful APIs to manage secure data flow between client and server.' },
        { subHeading: '3. End-to-End Integration & Deployment', text: 'I integrate the front and back ends into a cohesive full-stack solution, utilizing microservices and AWS for scalability, maintainability, and efficient deployment.' },
      ],
    },
    {
      bgColor: 'bg-[#e0c3fc]',
      textColor: 'text-[#8187dc]',
      headingColor: 'text-[#757bc8]',
      headings: ['Play', 'Create', 'Conquer'],
      content: [
        { subHeading: '1. Game Concept & Design', text: 'I brainstorm and design engaging mechanics and immersive environments in Unity and C#, ensuring each feature enhances player interaction.' },
        { subHeading: '2. Development & Optimization', text: 'I develop game logic and interactions, optimizing performance through effective asset management and code refinement for smooth gameplay.' },
        { subHeading: '3. Multiplayer Systems & Deployment', text: 'I build scalable back-end systems with Java, Spring Boot, and AWS, integrating real-time multiplayer features and deploying to AWS ECS for global access' },
      ],
    },
    {
      bgColor: 'bg-[#e1ecf7]',
      textColor: 'text-[#83b0e1]',
      headingColor: 'text-[#71a5de]',
      headings: ['Inspire', 'Design', 'Elevate'],
      content: [
        { subHeading: '1. User Research', text: 'I start by conducting user research to understand target audience needs, utilizing surveys and interviews to create user personas.' },
        { subHeading: '2. Wireframing & Prototyping', text: 'Next, I develop wireframes and interactive prototypes in tools like Figma, focusing on layout and navigation for early feedback.' },
        { subHeading: '3. Visual Design & Testing', text: 'Finally, I create visually appealing interfaces and conduct usability testing to refine the design, ensuring a smooth user experience.' },
      ],
    },
    {
      bgColor: 'bg-[#cad2c5]',
      textColor: 'text-[#52796f]',
      headingColor: 'text-[#2f3e46]',
      headings: ['Deploy', 'Scale', 'Secure'],
      content: [
        { subHeading: '1. Infrastructure Setup', text: 'I configure and deploy scalable cloud infrastructures using AWS services like EC2, S3, and RDS, ensuring optimal performance and resource management.' },
        { subHeading: '2. Security & Compliance', text: 'I implement security best practices, including IAM policies and encryption, to safeguard data and ensure compliance with industry standards.' },
        { subHeading: '3. Monitoring & Optimization', text: 'I monitor application performance using AWS CloudWatch, optimizing resources and costs while maintaining high availability and reliability for seamless user experiences.' },
      ],
    }
  ]



  useEffect(() => {
    gsap.to(pinElement1.current, {
      ease: 'sine.inOut',
      scrollTrigger: {
        scrub: 2,
        trigger: container.current.querySelector('#third-wrapper'),
        pin: container.current.querySelector('#super-powers-heading'),
        anticipatePin: 1,
        start: 'top top',
        end: 'bottom bottom',
        pinSpacing: true,
      }
    });

    gsap.to("#super-power-card", {
      scrollTrigger: {
        trigger: "#third-inner-wrapper",       // The section where the pinning happens
        start: "top top",                // Start pinning when the top of the wrapper reaches the top of the viewport
        end: "bottom bottom",
        endTrigger: "#third-wrapper",           // Adjust based on how long you want the card to stay pinned
        pin: "#super-power-card",
        anticipatePin: 1,      // Pin the card
        scrub: 2,
        pinReparent: false,
        pinSpacing: false, // Smooth scrubbing as you scroll
      }
    });

    gsap.fromTo(container.current.querySelector('#super-powers-heading'), { scale: 1, opacity: 1 },
      {
        opacity: 0, scale: 0.8, ease: 'power2.inOut', duration: 2, scrollTrigger: {
          scrub: 2,
          trigger: container.current.querySelector('#third-inner-wrapper'),
          start: 'top center',
          end: 'top top'
        }
      },);

    const targets = gsap.utils.toArray([".super-image"]);
    const containers = gsap.utils.toArray(['#container-content']);
    // setConts(containers);

    containers.forEach((target) => {
      gsap.fromTo(target, {
        opacity: 0,
        scale: 0.95,
      }, {
        opacity: 1,
        scale: 1,
        scrollTrigger: {
          trigger: target,
          start: 'top bottom',
          end: 'bottom center',
          scrub: 1,
        }
      })
    })

    targets.forEach((target, index) => {
      gsap.to(target, {
        transform: index > 0 ? `translate(0%, -${index * 100}%)` : 'translate(0%, 0%)', z: 10, stagger: 2, duration: 2, scrollTrigger: {
          trigger: index > 0 ? containers[index] : containers[0],
          start: "top bottom",
          end: "bottom center",
          pinSpacing: false,
          pinReparent: false,
          scrub: 1,
        }
      });
    });

    const skills = gsap.utils.toArray(['#skill-wrapper']);

    skills.forEach(skillSet => {
      console.log(skillSet.querySelectorAll("#skill"));

      gsap.to(skillSet.querySelectorAll("#skill"), {
        x: 100,
        opacity: 0,
        stagger: 0.2,
        ease: 'power4.inOut',
        duration: 1,
        scrollTrigger: {
          scrub: 2,
          trigger: skillSet,
          start: 'top 20%',
          end: 'top top',
          fastScrollEnd: true,
        }
      })

      gsap.fromTo(skillSet.querySelectorAll("#skill"), {
        x: -100,
        opacity: 0,
      }, {
        x: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 1,
        ease: 'power4.inOut',
        scrollTrigger: {
          scrub: 2,
          trigger: skillSet,
          start: 'top bottom',
          end: 'bottom bottom',
          fastScrollEnd: true,
        }
      })

    });

  }, []);

  useGSAP(() => {
    const targets = gsap.utils.toArray(["#image"]);
    gsap.fromTo(targets, { yPercent: 10, opacity: 0 }, { yPercent: 0, opacity: 1, stagger: 0.2, duration: 1.2, ease: 'power4.inOut' });
    gsap.fromTo('#image-content', { opacity: 0 }, { opacity: 1, duration: 1 })
    timeline.add(gsap.to(container.current, { opacity: 0 }));




  }, { scope: container });

  return (
    <div id="main-container" ref={container} className='h-auto w-screen flex flex-col'>
      <section id="start-page" className="relative w-full h-[130vh] max-[500px]:h-screen overflow-hidden">
        <div id="image" className='absolute w-full top-0 left-0 h-full overflow-hidden'>
          <Image src={'/me2.jpg'} width={1000} height={1000} className='max-[500px]:scale-x-150 max-[500px]:w-auto w-screen absolute max-[500px]:h-screen contrast-125 brightness-75 -translate-y-1/4 max-[500px]:translate-y-0' alt="me-image" priority />
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
          <div id="image-content" className='p-32 max-[500px]:p-10 box-border h-screen flex items-end relative z-10'>
            <h1 className='text-7xl max-[500px]:text-3xl font-medium w-1/2 max-[500px]:w-full text-white'>Creating pixel perfect implementations from design to development</h1>
          </div>
        </AnimatedElement>
      </section>

      <div id='next-sections' className='h-auto w-full bg-[#e3e6e4]'>
        <section className='bg-[#e3e6e4] relative overflow-hidden h-auto w-full p-32 max-[500px]:p-10 flex flex-col'>
          <div id="first-wrapper" className='w-full flex flex-col items-end max-[500px]:items-start'>
            <div id="inner-wrapper" className='w-3/4 max-[500px]:w-full flex flex-col'>
              <div id="main-heading" className='mb-20'>
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
                    <p words={true} splitStyle="text-left max-[500px]:text-left inline-block" className={`text-stone-700 text-7xl max-[500px]:text-3xl font-medium inline-block p-1 max-[500px]:py-0 max-[500px]:px-1`}>The developer's role is like an architect, designing efficient, scalable, and intuitive experiences that bring ideas to life with precision and creativity.
                    </p>
                  </WordSplit>
                </AnimatedElement>
              </div>
              <div id="some-words" className='flex flex-row max-[500px]:flex-col'>
                <div id="heading" className='flex-1 max-[500px]:flex-[0.5]'><h1 className='text-3xl mb-7'>Some words</h1></div>
                <div id="some-words-content" className='z-10 flex-[2] text-2xl max-[500px]:text-xl'>

                  <p className="text-left max-[500px]:text-left font-light inline-block">
                    Hey there! I’m a 24-year-old developer with a passion for creating intuitive and engaging digital experiences. My journey in tech has equipped me with a diverse skill set in front-end development, primarily using React and JavaScript, but I also love exploring the depths of design and user experience. <br /><br />

                    When I’m not coding, you can find me immersed in competitive games, sketching out my next creative project, or delving into the fascinating stories of history. Badminton is my go-to sport on the weekends, where I enjoy the thrill of a good match, and music is a big part of my life—I’m a professional Veena player, blending traditional artistry with my tech-savvy nature.<br /><br />

                    I believe in the power of collaboration and creativity, and I’m always eager to take on new challenges that push my boundaries. Welcome to my portfolio, where I share my projects and passion for innovation!
                  </p>

                </div>
              </div>
            </div>

          </div>
          <div id="second-wrapper" className='w-full mt-52 h-screen max-[500px]:h-auto'>
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
                  <h1 className='relative w-auto whitespace-nowrap leading-tight inline-block text-[15vw] font-semibold text-stone-700'>Facts & Figures . Facts & Figures . Facts & Figures</h1>
                </AnimatedElement>
              </div>
              <div id="fact-cards" className='mt-20 grid grid-cols-3 max-[500px]:grid-cols-1 gap-10'>
                <AnimatedElement trigger="#second-wrapper" config={{
                  from: {
                    y: '0%',
                  },
                  to: {
                    y: "-15%",
                    ease: 'power4.inOut',
                    duration: 4,
                  },
                  scrollTrigger: {
                    scrub: 2,
                    start: 'top bottom',
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
                <AnimatedElement trigger="#second-wrapper" config={{
                  from: {
                    y: '0%',
                  },
                  to: {
                    y: "15%",
                    ease: 'power4.inOut',
                    duration: 4,
                  },
                  scrollTrigger: {
                    scrub: 1,
                    start: 'top bottom',
                    end: 'bottom top',
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

          <div id="third-wrapper" className='relative h-[800vh] w-full box-border overflow-hidden'>
            <div ref={pinElement1} id="super-powers-heading" className='relative top-0 w-full left-0 h-screen flex flex-col justify-center items-center'>
              <h1 className='text-[8vw] text-stone-700 font-bold max-[500px]:font-light max-[500px]:text-4xl text-center leading-tight'>What are my</h1>
              <h1 className='text-[8vw] max-[500px]:text-[20vw] text-stone-700 font-bold text-center  leading-none'>Super Powers?</h1>
            </div>
            <div id="third-inner-wrapper" className='absolute top-[70vh] h-auto box-border flex flex-row w-full'>
              <div id="super-power-card-data1" className='h-auto max-[500px]:absolute z-10 top-full box-border p-10 flex-1 flex flex-col justify-center items-center relative w-full'>
                {superPowerData1.map((data, index) => {
                  return <SuperCardBox key={index} cardInfo={{ data, index }} />
                })}
              </div>
              <div id='super-power-card-wrapper' className='flex  box-border w-full h-screen justify-center items-center top-0 flex-1'>
                <div id="super-power-card" className='h-[80vh] border-4 border-orange-500 w-full overflow-hidden justify-center items-center border-black/50 rounded-3xl relative'>
                  {superImageContent.map((data, index) => {
                    return <SuperImageContent key={index} data={data} />
                  })}
                </div>
              </div>
              <div id="super-power-card-data2" className='h-screen max-[500px]:hidden flex-1 p-10 relative top-0 w-full'>
                {skillSet.map((data, index) => {
                  return <SuperCardBoxSkills key={index} data={data} />
                })}
              </div>

            </div>
          </div>

        </section>
      </div>


      {/* Prevent extra space at the end */}
      <div className="h-0"></div>
    </div >
  );
}


const SuperImageContent = ({ data }) => {

  // const [col, updateCol] = useState(null);

  // useEffect(() => {
  //   updateCol(data.bgColor);
  // }, [data])

  return <div id="image-wrapper" className={`flex p-10 max-[500px]:p-5 super-image top-0 relative w-full h-full overflow-visible ${data.bgColor}`} >
    <div id="content-wrapper" className='w-full flex flex-col justify-around'>
      <div id="content-2">
        {data.content.map((datam, index) => {
          return <div key={index} className='mb-5' id="text-content">
            <h2 className={`${data.headingColor} text-xl font-semibold`}>{datam.subHeading}</h2>
            <p className={`${data.textColor} text-sm`}>{datam.text}</p>
          </div>
        })}
      </div>
      <div id="content-1" className='flex flex-col items-start'>
        {data.headings.map((heading, index) => {
          return <h1 key={index} className={`${data.headingColor} font-bold text-8xl max-[500px]:text-6xl`}>{heading}</h1>
        })}
      </div>
    </div>

  </div >
}


const SuperCardBox = ({ cardInfo }) => {
  const container = useRef(null);
  const box = useRef(null);
  const contContent = useRef(null);

  useEffect(() => {
    gsap.to(container.current, {
      opacity: 1,
      scale: 1,
      scrollTrigger: {
        pin: container.current,
        trigger: box.current,
        start: `top ${cardInfo.index * 1}%`,
        endTrigger: '#third-inner-wrapper',
        end: 'bottom bottom',
        anticipatePin: 1,
        toggleActions: 'play reverse play none'
      }
    });


  })


  return (
    <div id='box-wrapper' className='h-auto w-full flex-1 flex'>
      <div
        ref={box}// Store the ref for each boxs
        className='h-screen w-full justify-center items-center flex-1'
      >
        <div ref={container} id="container" className='h-full flex justify-center py-10 items-center'>
          <div ref={contContent} id="container-content" className='translate-x-0 w-full flex justify-center backdrop-blur-sm items-center h-1/5 max-[500px]:h-auto bg-black/60 border-2 border-orange-500 rounded-xl'>
            <h1 className='text-5xl max-[500px]:text-xl text-white font-bold max-[500px]:p-5 px-10 py-20'>{cardInfo.data}</h1>
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
    <div id="factCard" className='border-4 border-stone-600  rounded-3xl flex justify-between flex-col'>
      <h1 className={`bg-clip-text ${colorG} py-10 px-5 max-[500px]:py-5 text-8xl max-[500px]:text-center max-[500px]:text-6xl text-transparent font-bold`}>{number}</h1>
      <h1 className='text-2xl max-[500px]:text-lg py-2 px-5 text-slate-600 max-[500px]:text-center border-t-slate-600 border-t-[1px]'>{title}</h1>
    </div>
  )
}
