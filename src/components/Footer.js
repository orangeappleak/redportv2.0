import gsap from "gsap";
import { useEffect } from "react";
import { AnimatedElement } from "./Utilities";
import Image from "next/image";


const Footer = () => {


    useEffect(() => {
        gsap.to("#pin-element", {
            scrollTrigger: {
                pin: "#pin-element",
                endTrigger: "#footer",
                start: "bottom bottom",
                end: "bottom bottom",
                pinSpacing: false,
                pinReparent: false
            }
        })
    }, [])


    return <section id="footer" className="bg-transparent box-border relative h-[70vh] top-0 overflow-hidden">
        <section id="pin-element" className="absolute bottom-0 w-full h-full -translate-y-full">
            <div id="footer-content-wrapper" className="h-full w-full box-border">
                <div id="lets-connect" className="absolute top-0 pointer-events-none flex flex-row w-full items-center justify-center">
                    <AnimatedElement trigger="#footer" id="lets" config={{
                        from: {
                            x: "-100%"
                        },
                        to: {
                            x: 0
                        },
                        scrollTrigger: {
                            scrub: 2,
                            ease: 'power4.inOut',
                            start: 'center bottom',
                            endTrigger: '#footer',
                            end: 'bottom bottom',
                        }
                    }}>
                        <h1 className="bg-gradient-to-b mx-5 from-white/40 from-10% to-white/0 leading-none inline-block text-transparent bg-clip-text text-[15vw] font-extralight">Let's</h1>
                    </AnimatedElement>
                    <AnimatedElement id="connect" config={{
                        from: {
                            x: 1000
                        },
                        to: {
                            x: 0
                        },
                        scrollTrigger: {
                            scrub: 2,
                            ease: 'power4.inOut',
                            start: 'center bottom',
                            endTrigger: '#footer',
                            end: 'bottom bottom',
                        }
                    }}>
                        <h1 className="bg-gradient-to-b mx-5 from-white/40 from-10% to-white/0 leading-none inline-block text-transparent bg-clip-text text-[15vw] font-extralight">Connect</h1>
                    </AnimatedElement>
                </div>
                <div id="footer-content-inner-wrapper" className="absolute bottom-0 px-5 my-10 h-[70%] w-full box-border">

                    <AnimatedElement config={{
                        from: {
                            y: 500,
                            scale: 1.5,
                        },
                        to: {
                            y: 0,
                            scale: 1
                        },
                        scrollTrigger: {
                            scrub: 2,
                            ease: 'power4.inOut',
                            start: 'center bottom',
                            endTrigger: '#footer',
                            end: 'bottom bottom',
                        }
                    }} id="footer-content" className="z-30 p-10 box-border flex flex-col items-stretch w-full h-[100%] backdrop-blur-xl rounded-3xl bg-white/10 shadow-2xl shadow-white/10">
                        <div id="footer-cotent-upper" className="flex-[1] items-start justify-center flex flex-row">
                            <div id="footer-cotent-upper-left" className="flex-1 h-full items-start flex flex-col justify-center">
                                <h1 className="text-white text-lg">🌊 Chasing My All Blue Across Tech and Creativity</h1>
                                <p className="text-white text-3xl">Like the mythical All Blue, I seek the perfect fusion of innovation, creativity, and purpose in everything I do—whether it’s developing intuitive web applications, designing immersive experiences, or creating impactful solutions. Every project is a step closer to my ultimate dream.
                                </p>
                            </div>
                            <div id="footer-cotent-upper-right" className="flex-[2] h-[100%] box-border">
                                <div id="upper-content-right-wrapper" className="box-border w-full h-[100%] flex justify-end">
                                    <div id="inner-content-wrapper" className="w-[50%] h-full box-border flex flex-col">
                                        <div id="inner-content-upper" className="relative flex items-center justify-center flex-[1]">
                                            <div id="socials-grid" className="grid mr-5 flex-[1] h-[100%] gap-5 grid-cols-2 grid-rows-2">
                                                <div id="box" className="h-full transition-all hover:p-5 hover:bg-white/50 bg-white/5 relative rounded-3xl w-full flex items-center cursor-pointer justify-center border-[0px] border-white"><Image className="pointer-events-none h-[50%] w-auto" src={'https://img.icons8.com/?size=100&id=85154&format=png&color=FFFFFF'} height={1000} width={1000} objectFit="cover" /></div>
                                                <div id="box" className="h-full transition-all hover:p-5 hover:bg-white/50 bg-white/5 relative rounded-3xl w-full flex items-center cursor-pointer justify-center border-[0px] border-white"><Image className="h-[50%] w-auto" src={'https://img.icons8.com/?size=100&id=85044&format=png&color=FFFFFF'} height={1000} width={1000} objectFit="cover" /></div>
                                                <div id="box" className="h-full transition-all hover:p-5 hover:bg-white/50 bg-white/5 relative rounded-3xl w-full flex items-center cursor-pointer justify-center border-[0px] border-white"><Image className="h-[50%] w-auto" src={'https://img.icons8.com/?size=100&id=106562&format=png&color=FFFFFF'} height={1000} width={1000} objectFit="cover" /></div>
                                                <div id="box" className="h-full transition-all hover:p-5 hover:bg-white/50 bg-white/5 relative rounded-3xl w-full flex items-center cursor-pointer justify-center border-[0px] border-white"><Image className="h-[50%] w-auto" src={'https://img.icons8.com/?size=100&id=85467&format=png&color=FFFFFF'} height={1000} width={1000} objectFit="cover" /></div>
                                            </div>
                                            <div id="location-map" className="relative flex-[0.75] h-[100%] overflow-hidden w-full rounded-2xl">
                                                <div id="location-image-wraper" className="relative h-full w-full" >
                                                    <Image src='/location.png' className="relative h-[100%]" quality={100} fill={true} objectFit="cover" />
                                                </div>
                                            </div>
                                        </div>
                                        <div id="inner-content-lower" className="flex-[0.25] my-5 rounded-3xl border-2 border-red-500">
                                            <h1 className="p-5">This is it</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="footer-content-lower" className="flex-[0.3] border-2 box-border border-orange-500/50">
                            <h1>This is footer lower</h1>
                        </div>
                    </AnimatedElement>

                </div>
            </div>
        </section>
    </section>
}

export default Footer;