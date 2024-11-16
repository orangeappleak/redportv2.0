import gsap from "gsap";
import { useEffect } from "react";
import { AnimatedElement } from "./Utilities";


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


    return <section id="footer" className="bg-transparent box-border -z-10 relative h-[70vh] top-0 overflow-hidden">
        <section id="pin-element" className="absolute bottom-0 w-full h-full -translate-y-full">
            <div id="footer-content-wrapper" className="h-full w-full box-border">
                <div id="lets-connect" className="absolute top-0 flex flex-row w-full items-center justify-center">
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
                <div id="footer-content-inner-wrapper" className="absolute bottom-0 p-10  h-[70%] w-full box-border">
                    <div id="footer-content" className="h-full w-full backdrop-blur-xl rounded-3xl bg-white/10 shadow-2xl shadow-white/10">

                    </div>
                </div>
            </div>
        </section>
    </section>
}

export default Footer;