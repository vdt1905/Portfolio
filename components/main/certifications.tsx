"use client";

import { CERTIFICATIONS } from "@/constants";
import { useEffect, useRef } from "react";
import anime from "animejs";
import { useInView } from "react-intersection-observer";
import { CheckBadgeIcon, SparklesIcon } from "@heroicons/react/24/outline";

export const Certifications = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (inView && sectionRef.current) {
            anime({
                targets: '.cert-title',
                translateY: [40, 0],
                opacity: [0, 1],
                easing: 'easeOutExpo',
                duration: 1500,
            });

            anime({
                targets: '.cert-container',
                scaleX: [0.8, 1],
                opacity: [0, 1],
                easing: 'easeOutElastic(1, 1)',
                duration: 2000,
                delay: 200,
            });

            anime({
                targets: '.cert-item',
                translateX: [-50, 0],
                opacity: [0, 1],
                easing: 'easeOutExpo',
                duration: 1200,
                delay: anime.stagger(150, { start: 600 }),
            });

            anime({
                targets: '.cert-icon',
                rotate: [180, 0],
                opacity: [0, 1],
                easing: 'easeOutBack',
                duration: 1000,
                delay: anime.stagger(150, { start: 800 }),
            });
        }
    }, [inView]);

    return (
        <section
            id="certifications"
            ref={ref}
            className="flex flex-col items-center justify-center py-20 mb-20 z-[20] overflow-hidden"
        >
            <div ref={sectionRef} className="w-full flex flex-col items-center">
                <h1 className="cert-title text-[40px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 py-10 opacity-0 uppercase tracking-widest drop-shadow-xl text-center">
                    Certifications
                </h1>

                <div className="h-full w-full max-w-[800px] flex flex-col gap-4 px-6 relative mt-6">
                    <div className="cert-container opacity-0 relative p-[1px] rounded-3xl bg-gradient-to-b from-purple-500/80 via-transparent to-cyan-500/80">
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 to-cyan-900/10 rounded-3xl pointer-events-none blur-[40px]" />
                        <div className="relative bg-[#030014]/90 p-10 rounded-3xl border border-[#2A0E61]/40 shadow-[0_0_30px_rgba(112,66,248,0.2)] backdrop-blur-2xl">

                            <ul className="text-gray-300 space-y-8 relative z-10 w-full">
                                {CERTIFICATIONS.map((item, idx) => (
                                    <li
                                        key={idx}
                                        className="cert-item opacity-0 flex items-start gap-5 group"
                                    >
                                        <div className="mt-1 flex-shrink-0">
                                            <div className="cert-icon opacity-0 w-8 h-8 rounded-full bg-purple-500/10 flex items-center justify-center border border-purple-400/30 group-hover:bg-cyan-500/20 group-hover:border-cyan-400/50 transition-colors duration-300">
                                                <CheckBadgeIcon className="w-5 h-5 text-purple-400 group-hover:text-cyan-300" />
                                            </div>
                                        </div>
                                        <div className="flex-grow">
                                            <p className="text-[17px] leading-relaxed font-light text-gray-300 group-hover:text-white transition-colors duration-300 drop-shadow-sm">
                                                {item}
                                            </p>

                                            <div className="mt-4 h-[1px] w-full bg-gradient-to-r from-purple-500/30 via-transparent to-transparent scale-x-50 group-hover:scale-x-100 origin-left transition-transform duration-500" />
                                        </div>

                                        <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:flex items-center">
                                            <SparklesIcon className="w-6 h-6 text-yellow-400/60" />
                                        </div>
                                    </li>
                                ))}
                            </ul>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
