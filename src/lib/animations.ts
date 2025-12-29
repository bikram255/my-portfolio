export const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
};

export const staggerContainer = {
    initial: { opacity: 0 },
    whileInView: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    },
    viewport: { once: true }
};

export const scaleIn = {
    initial: { opacity: 0, scale: 0.8 },
    whileInView: { opacity: 1, scale: 1 },
    viewport: { once: true },
    transition: { duration: 0.5 }
};
