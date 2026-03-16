"use client";

import { ACHIEVEMENTS } from "@/constants";
import { useEffect, useRef } from "react";
import anime from "animejs";
import { useInView } from "react-intersection-observer";
import { TrophyIcon, StarIcon, RocketLaunchIcon } from "@heroicons/react/24/outline";
import StarBorder from "@/components/sub/StarBorder";

export const Achievements = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (inView && sectionRef.current) {
            anime({
                targets: '.achieve-title',
                scale: [0.8, 1],
                opacity: [0, 1],
                easing: 'easeOutElastic(1, .8)',
                duration: 1500,
            });

            anime({
                targets: '.achieve-card',
                translateY: [80, 0],
                opacity: [0, 1],
                rotateZ: [-5, 0],
                easing: 'easeOutBack',
                duration: 1500,
                delay: anime.stagger(200, { start: 300 }),
            });

            anime({
                targets: '.achieve-icon',
                scale: [0, 1],
                translateY: [-20, 0],
                easing: 'easeOutElastic(1, .6)',
                duration: 2000,
                delay: anime.stagger(200, { start: 600 }),
            });

            const tl = anime.timeline({
                loop: true,
                direction: 'alternate',
            });

            tl.add({
                targets: '.achieve-glow',
                opacity: [0, 0.4],
                scale: [0.8, 1.1],
                easing: 'easeInOutSine',
                duration: 2500,
                delay: anime.stagger(300),
            });
        }
    }, [inView]);

    return (
        <section
            id="achievements"
            ref={ref}
            className="flex flex-col items-center justify-center py-20 z-[20]"
        >
            <div ref={sectionRef} className="w-full flex flex-col items-center">
                <h1 className="achieve-title text-[40px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 py-10 tracking-[0.1em] opacity-0 text-center uppercase drop-shadow-lg">
                    Achievements
                </h1>

                <div className="h-full w-full max-w-[900px] grid grid-cols-1 md:grid-cols-2 gap-8 px-6 relative mt-10">
                    {ACHIEVEMENTS.map((item, idx) => (
                        <div
                            key={idx}
                            className="achieve-card opacity-0 relative group transform-gpu"
                        >
                            <StarBorder
                                as="div"
                                color="#22d3ee"
                                speed="4s"
                                thickness={2}
                                className="w-full h-full shadow-[0_0_30px_rgba(34,211,238,0.1)] group-hover:shadow-[0_0_40px_rgba(34,211,238,0.3)] transition-shadow duration-700"
                            >
                                <div className="relative h-full w-full bg-[#05001a]/95 backdrop-blur-3xl rounded-[24px] p-8 flex flex-col justify-start">
                                    {/* Dynamic Glow Effects inside the card content */}
                                    <div className="achieve-glow absolute -top-10 -right-10 w-32 h-32 bg-cyan-500 rounded-full mix-blend-screen filter blur-[50px] opacity-0 pointer-events-none" />
                                    <div className="achieve-glow absolute -bottom-10 -left-10 w-32 h-32 bg-purple-500 rounded-full mix-blend-screen filter blur-[50px] opacity-0 animation-delay-1000 pointer-events-none" />

                                    <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none">
                                        <RocketLaunchIcon className="w-24 h-24 text-white" />
                                    </div>

                                    <div className="flex items-center gap-4 mb-6 relative z-10 w-full">
                                        <div className="achieve-icon opacity-0 w-12 h-12 rounded-full border border-cyan-400/50 flex items-center justify-center bg-cyan-500/10 shadow-[0_0_15px_rgba(34,211,238,0.3)] shrink-0">
                                            <TrophyIcon className="w-6 h-6 text-cyan-300" />
                                        </div>
                                        <h1 className="text-xl font-semibold text-white tracking-widest leading-tight w-[80%] uppercase drop-shadow-sm">{item.title}</h1>
                                    </div>

                                    <p className="mt-2 text-gray-400 font-light leading-relaxed relative z-10 text-justify">
                                        {item.description}
                                    </p>

                                    {/* Decorative lines at the bottom */}
                                    <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
                                </div>
                            </StarBorder>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
