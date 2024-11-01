"use client"

import { useState, useContext, useRef } from "react"
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { TransitionContext } from "@/context/TransitionContext";
gsap.registerPlugin(useGSAP);

export default function TransitionLayout({ children }) {
    const [displayChildren, setDisplayChildren] = useState(children)
    const { timeline } = useContext(TransitionContext);
    const { contextSafe } = useGSAP();
    const transitionRef = useRef(null);

    const exit = contextSafe(() => {
        window.scrollTo(0, 0);
        timeline.play().then(() => {
            window.scrollTo(0, 0);
            setDisplayChildren(children);
            timeline.pause().clear();
        })
    })

    useGSAP(() => {
        //if page is not the current page
        if (children.key !== displayChildren.key) {
            exit();
        }
    }, [children])

    return (
        <div>
            {/* <div ref={transitionRef} id="transition-page" className="fixed -top-full z-20 left-0 w-1/2 h-screen border-2 bg-red-200 border-blue-700">
                <h1>THis is transition</h1>
            </div> */}
            {displayChildren}
        </div>
    )
}