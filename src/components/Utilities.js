import React, { useEffect, useRef } from "react";
import { useBodyRef } from "@/context/BodyRefContext";
import { gsap } from "gsap/gsap-core";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// const { default: gsap } = require("gsap");
// const { ScrollTrigger } = require("gsap/ScrollTrigger");
// const { useRef } = require("react")

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

    });


    return eleRef;
}


export const WordSplit = ({ children }) => {
    const arr = Array.isArray(children) ? children : [children];
    const splitRef = useRef(null);

    return (
        arr.map((child, index) => {
            const { splitStyle, className, words, children: content } = child.props;
            return <div ref={splitRef} className={splitStyle} key={`split-${index}-${content.slice(0,5)}`} id="split">
                {content.split(words ? ' ' : '').map((split, index) => {
                    return <span key={`char-${index}-${split}`} id="cover" className={className + ' origin-center overflow-y-hidden'}> {split === ' ' ? '\u00A0' : <span className="relative" id="alpha">{split}</span>}</span>
                })}
            </div>
        })
    )
};

export const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
}


export default WordSplit;
