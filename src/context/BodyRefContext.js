import React, { createContext, useContext, useLayoutEffect } from 'react';

// Step 1: Create a context to hold the mainRef
const BodyRefContext = createContext(null);
const ScrollTriggerContext = createContext(null);

// Step 2: Create a custom hook to access the mainRef from the context
export const useBodyRef = () => useContext(BodyRefContext);
export const useScrollTriggger = () => useContext(ScrollTriggerContext);

// Step 3: Wrap your entire application with the context provider
export const BodyRefProvider = ({ children, mainRef }) => {
  return (
    <BodyRefContext.Provider value={mainRef}>
      {children}
    </BodyRefContext.Provider>
  );
};

export const ScrollTriggerProvider = ({ children, scrollTrigger }) => {
  const scrollTriggerVal = scrollTrigger;

  useLayoutEffect(() => {
    // Initialize scrollTriggerRef when the gsap library is loaded
    // scrollTriggerVal.current = ScrollTrigger;
    // gsap.registerPlugin(scrollTriggerVal.current); // Register ScrollTrigger with gsap
    // console.log(scrollTriggerVal.current);
  }, [scrollTriggerVal]);

  return (
    <ScrollTriggerContext.Provider value={scrollTriggerVal}>
      {children}
    </ScrollTriggerContext.Provider>
  )
}
