import './hero.scss';
import hero from '../../../public/images/hero.png';
import scroll from '../../../public/images/scroll.png';
import { motion } from 'framer-motion';

const textvarients = {
    initial: {
        x: -500,
        opacity: 0
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        }
    },
    scrollButton: {
        opacity: 0,
        y: 10,
        transition: {
            duration: 2,
            repeat: Infinity
        }
    }
}

const sliderVarient = {
    initial: {
        x: 0
    },
    animate: {
        x: "-220%",
        transition: {
            duration: 20,
            repeatType: 'mirror',
            repeat: Infinity
        }
    },
}


const Hero = () => {
    return (
        <div className="hero">
            <div className="wrapper">
                <motion.div className="textContainer" variants={textvarients} initial="initial" whileInView='animate'>
                    <motion.h2 variants={textvarients}>Arko Mazumder</motion.h2>
                    <motion.h1 variants={textvarients}>Web Developer and UI Designer</motion.h1>
                    <motion.div className="buttons" variants={textvarients}>
                        <motion.button variants={textvarients}>See The Latest Works</motion.button>
                        <motion.button variants={textvarients}>Contact Me</motion.button>
                    </motion.div>
                    <motion.img variants={textvarients} animate="scrollButton" src={scroll} alt="" />
                </motion.div>
            </div>
            <motion.div className="slidingTextContainer" variants={sliderVarient} initial="initial" animate="animate">
                Developer programmer Content Creator
            </motion.div>
            <div className="imageContainer">
                <img src={hero} alt="hero" />
            </div>
        </div>
    )
}

export default Hero
