import gsap from "gsap";
import { useEffect } from "react";

const Footer = () => {


    useEffect(() => {



        gsap.to("#pin-element", {
            scrollTrigger: {
                pin: "#pin-element",
                endTrigger: "#footer",
                start: "bottom bottom",
                end: "bottom bottom",
                markers: true,
                pinSpacing: false,
                pinReparent: false
            }
        })
    }, [])


    return <section id="footer" className="bg-transparent -z-10 relative h-[90vh] top-0">
        <section id="pin-element" className="absolute top-0 bottom-0 w-full h-full -translate-y-full overflow-hidden">
            <div id="footer-content" className="h-full w-full border-2 border-blue-500">
                <div id="lets-connect" className="flex flex-col leading-[0.5] w-full h-full items-center justify-center absolute top-0">
                    {Array.from({ length: 10 }, (_, index) => (
                        <div id="heading" key={index} className={`opacity-${index * 10}`}>
                            <h1
                                className={`text-[10vw]  text-white`}
                            >
                                Let's Connect
                            </h1>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    </section>
}

export default Footer;