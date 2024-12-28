import './paralax.scss';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const Paralax = ({ type }) => {

    const targetRef = useRef();

    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end start"]
    })

    const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
    const yText = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);

    return (
        <div className='paralax'
            ref={targetRef}
            style={{ background: type === 'services' ? "linear-gradient(180deg,#111132,#0c0c1d)" : "linear-gradient(180deg,#111132,#505064)" }}>
            <motion.h1 style={{ y: yText }}>{type === 'services' ? "What I Do?" : "What I Did?"}</motion.h1>
            <motion.div className="mountains"></motion.div>
            <motion.div style={{ y: yBg, backgroundImage: `url(${type === 'services' ? '../../../public/images/planets.png' : '../../../public/images/sun.png'})` }} className="planets"></motion.div>
            <motion.div style={{ x: yBg }} className="stars"></motion.div>
        </div>
    )
}

export default Paralax
