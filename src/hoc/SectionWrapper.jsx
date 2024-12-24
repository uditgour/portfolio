import React from 'react'
import { motion } from 'framer-motion'

const staggerContainer = (staggerChildren, delayChildren) => {
    return {
        hidden: {},
        show: {
            transition: {
                staggerChildren: staggerChildren,
                delayChildren: delayChildren || 0,
            },
        },
    };
};

const SectionWrapper = (Component, routeName) =>
    function hoc() {
        return (
            <motion.section variants={staggerContainer()}
                initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }}
                className='sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0'>
                <Component />
            </motion.section>
        )
    }



export default SectionWrapper
