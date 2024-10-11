"use client"

import localFont from "next/font/local";


// src/app/layout.tsx

import { TransitionProvider } from "@/context/TransitionContext";
import { BodyRefProvider, ScrollTriggerProvider } from "@/context/BodyRefContext";
import Transition from "@/components/Transition";
import Header from "@/components/Header";
import { LenisScroller } from "@/components/LenisScroller";
import React, { useRef } from 'react';

import './globals.css';
import { ScrollTrigger } from "gsap/all";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const bodyRef = useRef<HTMLDivElement>(null);

  return (
    <html lang="en">
      <body className="overflow-x-hidden bg-black">
        <script src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs" type="module"></script>
        <div ref={bodyRef}>
          <BodyRefProvider mainRef={bodyRef}>
            <ScrollTriggerProvider scrollTrigger={ScrollTrigger}>
              <TransitionProvider>
                <Transition>
                  <Header></Header>
                  <LenisScroller>
                    {children}
                  </LenisScroller>
                </Transition>
              </TransitionProvider>
            </ScrollTriggerProvider>
          </BodyRefProvider>
        </div>
      </body>
    </html>
  );
}
