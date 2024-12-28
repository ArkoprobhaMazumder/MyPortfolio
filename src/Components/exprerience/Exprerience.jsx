import './exprerience.scss';
import { motion } from 'framer-motion';


const varients = {
    initial: {
        opacity: 0
    },
    animate: {
        opacity: 1,
        transition: {
            staggerChildren: 1
        }
    }
}

const listItem = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 1 } }
};

const Exprerience = () => {
    return (
        <motion.div className='experience'
            initial={{ x: -500, y: 200, opacity: 0 }}
            whileInView={{ x: 0, y: 0, opacity: 1, transition: { duration: 1 } }}
        >
            <div className="experienceContainer">
                <motion.h2 whileHover={{ color: "orange" }}>Experiences</motion.h2>
                <div className="wrapper">
                    <div className="box">
                        <div className="title">
                            <p><b>Web Designer Intern</b></p>
                            <p>Mar 2024 - Apr 2024</p>
                        </div>
                        <div className="company">
                            <a href=""><b>Webhibe Technologies Pvt. Ltd.</b></a>
                            <p>Sector 5, Salt Lake , Kolkata</p>
                        </div>
                        <motion.ul variants={varients} className='workDetails' initial='initial' whileInView='animate'>
                            <motion.li variants={listItem}>Developed React components based on design wireframes and prototypes using Figma or Adobe XD.</motion.li>
                            <motion.li variants={listItem}>Assisted in connecting front-end components with RESTful APIs to display dynamic data in the UI, reducing server
                                response time by 40%.</motion.li>
                        </motion.ul>
                    </div>
                </div>
            </div>
            <div className="educationContainer">
                <motion.h2 whileHover={{ color: "orange" }}>Education</motion.h2>
                <motion.div className="wrapper" variants={varients} initial='initial' whileInView='animate'>
                    <motion.div className="box" variants={listItem}>
                        <div className="institute">
                            <p>Academy of Technology</p>
                            <p>2019 - 2023</p>
                        </div>
                        <p>B.Tech, Mechanical Engineering</p>
                    </motion.div>
                    <motion.div className="box" variants={listItem}>
                        <div className="institute">
                            <p>Kandi Raj High School</p>
                            <p>2017 - 2018</p>
                        </div>
                        <p>Higher-Secondary, Science</p>
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
    )
}

export default Exprerience
