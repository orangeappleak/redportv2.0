import gsap from "gsap";
import { useEffect } from "react";
import { AnimatedElement } from "./Utilities";
import Image from "next/image";
import Link from "next/link";
import useDownloader from "react-use-downloader";


const Footer = () => {

    const {download} = useDownloader();


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
                <div id="footer-content-inner-wrapper" className="absolute bottom-0 px-5 my-10 h-[70%] max-[500px]:h-[80%] w-full box-border">

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
                    }} id="footer-content" className="z-30 p-10 max-[500px]:p-5 box-border flex flex-col items-stretch w-full h-[100%] backdrop-blur-xl rounded-3xl bg-white/10 shadow-2xl shadow-white/10">
                        <div id="footer-cotent-upper" className="flex-[1] items-start justify-center flex flex-row max-[500px]:flex-col">
                            <div id="footer-cotent-upper-left" className="flex-1 max-[500px]:mb-5 h-full items-start flex flex-col justify-start">
                                <h1 className="text-white text-lg">🌊 Chasing My All Blue Across Tech and Creativity</h1>
                                <p className="text-white text-2xl max-[500px]:text-sm">Like the mythical All Blue, I seek the perfect fusion of innovation, creativity, and purpose in everything I do—whether it’s developing intuitive web applications, designing immersive experiences, or creating impactful solutions. Every project is a step closer to my ultimate dream.
                                </p>
                            </div>
                            <div id="footer-cotent-upper-right" className="flex-[3] max-[500px]:w-full h-[100%] box-border">
                                <div id="upper-content-right-wrapper" className="box-border w-full h-[100%] flex justify-end">
                                    <div id="inner-content-wrapper" className="w-[50%] max-[500px]:w-full h-full box-border flex flex-col">
                                        <div id="inner-content-upper" className="relative flex items-center justify-center flex-[5]">
                                            <div id="socials-grid" className="grid mr-5 max-[500px]:mr-1 flex-[1] h-[100%] gap-5 max-[500px]:gap-1 grid-cols-2 grid-rows-2">
                                                <Link href="https://www.instagram.com/lama_momo_man/" passHref legacyBehavior><a target="_blank"><div id="box" className="p-0 h-full transition-all hover:bg-white/50 bg-white/5 relative rounded-3xl max-[500px]:rounded-lg w-full flex items-center cursor-pointer justify-center border-[0px] border-white group"><Image className="pointer-events-none duration-200 ease-[cubic-bezier(.52,.07,0,1.32)] transition-all  group-hover:scale-150 h-[30%] w-auto" src={'https://img.icons8.com/?size=100&id=85154&format=png&color=FFFFFF'} height={1000} width={1000} objectFit="cover" /></div></a></Link>
                                                <Link href="https://www.linkedin.com/in/appannagari-karthik-212143147/" passHref legacyBehavior><a target="_blank"><div id="box" className="p-0 h-full transition-all hover:bg-white/50 bg-white/5 relative rounded-3xl max-[500px]:rounded-lg w-full flex items-center cursor-pointer justify-center border-[0px] border-white group"><Image className="pointer-events-none duration-200 ease-[cubic-bezier(.52,.07,0,1.32)] transition-all  group-hover:scale-150 h-[30%] w-auto" src={'https://img.icons8.com/?size=100&id=85044&format=png&color=FFFFFF'} height={1000} width={1000} objectFit="cover" /></div></a></Link>
                                                <Link href="https://github.com/orangeappleak" passHref legacyBehavior><a target="_blank"><div id="box" className="p-0 h-full transition-all hover:bg-white/50 bg-white/5 relative rounded-3xl max-[500px]:rounded-lg w-full flex items-center cursor-pointer justify-center border-[0px] border-white group"><Image className="pointer-events-none duration-200 ease-[cubic-bezier(.52,.07,0,1.32)] transition-all  group-hover:scale-150 h-[30%] w-auto" src={'https://img.icons8.com/?size=100&id=106562&format=png&color=FFFFFF'} height={1000} width={1000} objectFit="cover" /></div></a></Link>
                                                <Link href="mailto:redmango.karthik@gmail.com" passHref legacyBehavior><a target="_blank"><div id="box" className="p-0 h-full transition-all hover:bg-white/50 bg-white/5 relative rounded-3xl max-[500px]:rounded-lg w-full flex items-center cursor-pointer justify-center border-[0px] border-white group"><Image className="pointer-events-none duration-200 ease-[cubic-bezier(.52,.07,0,1.32)] transition-all  group-hover:scale-150 h-[30%] w-auto" src={'https://img.icons8.com/?size=100&id=85467&format=png&color=FFFFFF'} height={1000} width={1000} objectFit="cover" /></div></a></Link>
                                            </div>
                                            <div id="location-map" className="relative flex-[0.75] h-[100%] overflow-hidden w-full rounded-2xl max-[500px]:rounded-lg">
                                                <div id="location-image-wraper" className="relative h-full w-full" >
                                                    <Image src='/location.png' className="relative max-[500px]:scale-150 h-[100%]" quality={100} fill={true} objectFit="cover" />
                                                </div>
                                            </div>
                                        </div>
                                        {/* <div id="inner-content-lower" className="flex-[1.25] bg-white/5 px-10 max-[500px]:px-5 box-border my-5 max-[500px]:my-1 rounded-3xl max-[500px]:rounded-lg">
                                            <div id="resume-box-wrapper" className="w-full h-full flex flex-row justify-between">
                                                <div id="resume-heading" className="flex-1 flex justify-start items-center">
                                                    <h1 className="text-white text-2xl max-[500px]:text-sm font-bold">Resume</h1>
                                                </div>
                                                <div id="resume-download-wrapper" className="flex box-border h-full flex-row flex-[0.5]">
                                                    <div id="box" onClick={() => {
                                                        download('/Karthik A_F.pdf', 'Karthik_A_Resume')
                                                    }} className="m-2 max-[500px]:m-1 flex items-center shadow-inner shadow-white/50 box-border justify-center relative flex-1 w-full transition-all duration-300 h-auto rounded-2xl max-[500px]:rounded-lg hover:bg-white/50 group"><Image src={'https://img.icons8.com/?size=100&id=83159&format=png&color=FFFFFF'} className="group-hover:scale-75 transition-all duration-300 h-1/2 w-auto" quality={100} objectFit="contain" height={50} width={50} /></div>
                                                    <div id="box" onClick={() => {
                                                        window.open("/Karthik A_F.pdf", '_blank')
                                                    }} className="m-2 max-[500px]:m-1 flex items-center shadow-inner shadow-white/50 box-border justify-center relative flex-1 w-full transition-all duration-300 h-auto rounded-2xl max-[500px]:rounded-lg hover:bg-white/50 group"><Image src={'https://img.icons8.com/?size=100&id=85329&format=png&color=FFFFFF'} className="group-hover:scale-75 transition-all duration-300 h-1/2 w-auto" quality={100} objectFit="contain" height={50} width={50} /></div>
                                                </div>
                                            </div>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="footer-content-lower" className="flex text-center items-center justify-between box-border">
                            <h1 className="text-white/10 max-[500px]:text-[8px]">Copyright © 2024 redport Limited</h1>
                            <h1 className="text-white/10 max-[500px]:text-[8px]">Designed and developed by Karthik.A</h1>
                            <h1 className="text-white/10 max-[500px]:text-[8px]"> Made with ❤️ with nextJS GSAP.</h1>
                        </div>
                    </AnimatedElement>

                </div>
            </div>
        </section>
    </section>
}

export default Footer;