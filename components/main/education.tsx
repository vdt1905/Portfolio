"use client";

import { EDUCATION } from "@/constants";
import { useEffect, useRef } from "react";
import anime from "animejs";
import { useInView } from "react-intersection-observer";
import { AcademicCapIcon, GlobeAltIcon } from "@heroicons/react/24/outline";

export const Education = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (inView && sectionRef.current) {
            anime({
                targets: '.edu-title',
                translateY: [30, 0],
                opacity: [0, 1],
                easing: 'easeOutExpo',
                duration: 1500,
            });

            anime({
                targets: '.edu-card',
                translateY: [50, 0],
                opacity: [0, 1],
                rotateX: [15, 0],
                easing: 'easeOutExpo',
                duration: 1200,
                delay: anime.stagger(250, { start: 200 }),
            });

            anime({
                targets: '.edu-icon',
                scale: [0, 1],
                rotate: [-45, 0],
                opacity: [0, 1],
                easing: 'easeOutElastic(1, .6)',
                duration: 1500,
                delay: anime.stagger(250, { start: 500 }),
            });

            anime({
                targets: '.edu-glow',
                opacity: [0, 0.5, 0.2],
                scale: [0.8, 1.2, 1],
                easing: 'easeInOutSine',
                duration: 3000,
                loop: true,
                direction: 'alternate',
                delay: anime.stagger(200),
            });
        }
    }, [inView]);

    return (
        <section
            id="education"
            ref={ref}
            className="flex flex-col items-center justify-center py-20 z-[20] perspective-1000"
        >
            <div ref={sectionRef} className="w-full flex flex-col items-center">
                <h1 className="edu-title text-[40px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 py-10 tracking-wider">
                    Education Matrix
                </h1>
                <div className="h-full w-full max-w-[800px] flex flex-col gap-10 px-10 relative">
                    {EDUCATION.map((item, idx) => (
                        <div
                            key={idx}
                            className="edu-card relative group rounded-2xl p-[1px] bg-gradient-to-b from-purple-600/50 to-cyan-600/50 opacity-0 overflow-hidden transform-gpu"
                        >
                            {/* Animated Glow Backdrop */}
                            <div className="edu-glow absolute -top-20 -left-20 w-40 h-40 bg-purple-500 rounded-full mix-blend-screen filter blur-[60px] opacity-0" />
                            <div className="edu-glow absolute -bottom-20 -right-20 w-40 h-40 bg-cyan-500 rounded-full mix-blend-screen filter blur-[60px] opacity-0 animation-delay-500" />

                            <div className="relative h-full w-full bg-[#030014]/80 backdrop-blur-xl rounded-2xl p-8 flex flex-col md:flex-row gap-6 shadow-[0_0_20px_rgba(112,66,248,0.15)] group-hover:shadow-[0_0_40px_rgba(112,66,248,0.3)] transition-all duration-500 border border-white/5">

                                <div className="flex-shrink-0 flex items-start justify-center pt-2">
                                    <div className="edu-icon w-16 h-16 rounded-full bg-gradient-to-br from-purple-500/20 to-cyan-500/20 flex items-center justify-center border border-purple-500/30 opacity-0">
                                        <AcademicCapIcon className="w-8 h-8 text-cyan-400" />
                                    </div>
                                </div>

                                <div className="flex-grow">
                                    <h1 className="text-3xl font-bold tracking-tight text-white group-hover:text-purple-300 transition-colors duration-300">{item.institution}</h1>
                                    <h2 className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-300 mt-2 font-medium">{item.degree}</h2>

                                    <div className="flex flex-col md:flex-row justify-between text-gray-400 mt-4 font-light text-sm gap-2">
                                        <span className="flex items-center gap-2">
                                            <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></span>
                                            {item.duration}
                                        </span>
                                        <span className="flex items-center gap-2">
                                            <GlobeAltIcon className="w-4 h-4" />
                                            {item.location}
                                        </span>
                                    </div>

                                    <div className="mt-6 p-4 rounded-xl bg-white/5 border border-white/10 font-light text-gray-300">
                                        {item.description}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
