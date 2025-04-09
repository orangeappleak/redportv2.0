"use client"

// src/app/layout.tsx

import { TransitionProvider } from "@/context/TransitionContext";
import { BodyRefProvider, ScrollTriggerProvider } from "@/context/BodyRefContext";
import Transition from "@/components/Transition";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { LenisScroller } from "@/components/LenisScroller";
import React, { useRef } from 'react';

import './globals.css';
import { ScrollTrigger } from "gsap/all";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from '@vercel/analytics/next';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const bodyRef = useRef<HTMLDivElement>(null);

  return (
    <html lang="en">
       <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      <body className="overflow-x-hidden bg-black">
        <div ref={bodyRef}>
          <BodyRefProvider mainRef={bodyRef}>
            <ScrollTriggerProvider scrollTrigger={ScrollTrigger}>
              <TransitionProvider>
                <Transition>
                 <Header />
                  <LenisScroller>
                    {children}
                    <SpeedInsights />
                    <Analytics />
                  </LenisScroller>
                  <Footer />
                </Transition>
              </TransitionProvider>
            </ScrollTriggerProvider>
          </BodyRefProvider>
        </div>
      </body>
    </html>
  );
}
