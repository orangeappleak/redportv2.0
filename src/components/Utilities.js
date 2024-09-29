import React, { useEffect } from "react";
import { useBodyRef } from "@/context/BodyRefContext";

const { default: gsap } = require("gsap");
const { ScrollTrigger } = require("gsap/ScrollTrigger");
const { useRef } = require("react")

export const AnimatedElement = ({ id = "", children, config, className = "", staggerEl = "", trigger = "" }) => {
    const animation = useGsap(config, staggerEl, trigger);
    return <div id={id} className={className} ref={animation}>{children}</div>
}

const useGsap = (config, staggerEl, trigger) => {
    const eleRef = useRef(null);
    const bodyRef = useBodyRef();

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const el = staggerEl != "" ? eleRef.current.querySelectorAll(staggerEl) : eleRef.current;
        const tr = trigger === "" ? eleRef.current : bodyRef.current.querySelector(trigger);

        if (config.from != null) {
            gsap.fromTo(el, {
                ...config.from,
            }, {
                ...config.to,
                scrollTrigger: {
                    trigger: tr,
                    ...config.scrollTrigger
                }
            });
        }

        gsap.to(el, {
            ...config.to,
            scrollTrigger: {
                trigger: tr,
                ...config.scrollTrigger
            }
        });

    }, [])

    return eleRef;
}


export const WordSplit = ({ children }) => {

    const arr = Array.isArray(children) ? children : [children];
    const splitRef = useRef(null);

    console.log(arr);

    return (
        arr.map((child, index) => {
            //console.log(arr);
            return <div ref={splitRef} className={child.props.splitStyle} key={index} id="split">
                {child.props.children.split(child.props.words ? ' ' : '').map((split, index) => {
                    return <span key={index} id="cover" className={child.props.className + ' origin-center overflow-y-hidden'}> {split === ' ' ? '\u00A0' : <span className="relative" id="alpha">{split}</span>}</span>
                })}
            </div>
        })
    )
};

export const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
}


export default WordSplit;
