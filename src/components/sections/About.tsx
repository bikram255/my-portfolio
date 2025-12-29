"use client";

import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
};

export default function About() {
    return (
        <section id="about" className="scroll-mt-32">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                <div className="lg:col-span-5">
                    <span className="section-subtitle">Biography</span>
                    <h2 className="section-title mt-4">Architecting <br /> Efficiency.</h2>
                </div>
                <div className="lg:col-span-7 space-y-8 text-base md:text-xl text-slate-400 font-medium leading-relaxed">
                    <motion.p {...fadeInUp}>
                        As a <span className="text-white">DevOps Engineer</span>, I focus on the intersection of code and infrastructure. My mission is to transform manual friction into seamless, automated delivery pipelines.
                    </motion.p>
                    <motion.p {...fadeInUp}>
                        Currently exploring the depth of <span className="text-primary italic">Cloud Native Ecosystems</span>, I specialize in building high-availability systems that evolve alongside the business.
                    </motion.p>

                    <div className="pt-8 grid grid-cols-2 gap-8 border-t border-white/5">
                        <div>
                            <h4 className="text-4xl font-black text-white italic tracking-tighter">4.3K+</h4>
                            <p className="text-xs font-bold text-slate-600 uppercase tracking-widest mt-1">LinkedIn Network</p>
                        </div>
                        <div>
                            <h4 className="text-4xl font-black text-white italic tracking-tighter">500+</h4>
                            <p className="text-xs font-bold text-slate-600 uppercase tracking-widest mt-1">Followers on X.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
