import "./services.scss";
import people from '../../../public/images/people.webp';
import { motion } from 'framer-motion';


const variants = {
    initial: {
        x: -500,
        y: 100,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        y: 0,
        transition: {
            duration: 1
        }
    }
}


const Services = () => {
    return (
        <motion.div className="services" variants={variants} initial="initial" whileInView='animate'>
            <motion.div className="textContainer" variants={variants}>
                <p>I Focus on helping Your Brand Grow
                    <br />and move forward</p>
                <hr />
            </motion.div>
            <motion.div className="titleContainer" variants={variants}>
                <div className="title">
                    <img src={people} alt="" />
                    <h1><motion.b whileHover={{ color: "orange" }}>Unique</motion.b> IdeaS</h1>
                </div>
                <div className="title">
                    <h1><motion.b whileHover={{ color: "orange" }}>For Your</motion.b> Business.</h1>
                    <button>WHAT I DO?</button>
                </div>
            </motion.div>
            <motion.div className="listContainer" variants={variants}>
                <motion.div className="box" whileHover={{ backgroundColor: "lightgray", color: 'black' }}>
                    <h2>Frontend Development</h2>
                    <p>Creative and detail-oriented Frontend Developer, hands on experience building responsive and accessible websites using React, JavaScript, HTML5, and CSS3. Proficient in optimizing UI performance and collaborating with cross-functional teams to deliver exceptional user experiences. Passionate about clean code and innovative web solutions.
                    </p>
                    <a href="https://github.com/ArkoprobhaMazumder" target="__blank">Go</a>
                </motion.div>
                <motion.div className="box" whileHover={{ backgroundColor: "lightgray", color: 'black' }}>
                    <h2>Backend Development</h2>
                    <p>Dedicated Backend Developer, hands on experience designing and implementing robust, scalable, and secure server-side solutions. Proficient in Python, Node.js, and Java with expertise in RESTful API design, database optimization, and cloud integrations. Passionate about delivering high-performance systems and collaborating with cross-functional teams.
                    </p>
                    <a href="https://github.com/ArkoprobhaMazumder" target="__blank">Go</a>
                </motion.div>
                <motion.div className="box" whileHover={{ backgroundColor: "lightgray", color: 'black' }}>
                    <h2>Cloud Management</h2>
                    <p>Certified Cloud Manager, hands on experience designing and managing cloud infrastructures across AWS and Firebase. Skilled in cloud architecture, cost optimization. Proven ability to enhance system scalability and security, reducing costs by up to 30% while maintaining 99.99% uptime
                    </p>
                    <a href="https://github.com/ArkoprobhaMazumder" target="__blank">Go</a>
                </motion.div>
                <motion.div className="box" whileHover={{ backgroundColor: "lightgray", color: 'black' }}>
                    <h2>Web Design</h2>
                    <p>Creative Web Designer, Hands on experience in crafting visually stunning and user-centric websites. Proficient in Adobe Creative Suite, Figma, and HTML/CSS, with a strong focus on responsive design and accessibility. Adept at collaborating with cross-functional teams to deliver impactful digital solutions that enhance user engagement and brand identity.
                    </p>
                    <a href="https://github.com/ArkoprobhaMazumder" target="__blank">Go</a>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default Services
