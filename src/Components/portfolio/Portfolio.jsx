import './portfolio.scss';
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from 'react';
import project1 from '../../../public/images/project1.png';
import project2 from '../../../public/images/project2.png';
import project3 from '../../../public/images/project3.png';
import project4 from '../../../public/images/project4.png';

const items = [
    {
        id: 1,
        title: "Ecommerce Application",
        image: project1,
        link: 'https://shopping-app-ruby-five.vercel.app/',
        desc: "Developed a fullstack for an ecommerce platform using React.js, Nodejs. Creating a responsive UI that worked seamlessly across desktop and mobile devices.Built features like product listing, sorting, filtering, shopping cart, and checkout processes."
    },
    {
        id: 2,
        title: "Food Delivary Application",
        image: project2,
        link: 'https://resturent-landing-page.vercel.app/',
        desc: "Developed a responsive and interactive food delivery platform using React.js and Material-UI (MUI) creating a visually appealing and user-friendly experience.Customized MUI components to maintain consistent branding and optimized performance with efficient API calls and state management."
    },
    {
        id: 3,
        title: "Admin Dashboard",
        image: project3,
        link: 'https://arkoprobhamazumder.github.io/Admin_Dashbord/',
        desc: "Customised a responsive admin dashboard using HTML5, CSS3, and JavaScript,with a focus on dynamic data visualization. Applied CSS3 animations,and JavaScript for enhanced user engagement through hover effects."
    },
    {
        id: 4,
        title: "Tic Tac Toe",
        image: project4,
        link: 'https://arkoprobhamazumder.github.io/TicTacToe/',
        desc: "Developed an interactive web-based Tic Tac Toe game, allowing two players to compete in real-time on a 3x3 grid.Designed a responsive and visually appealing game board using HTML and CSS to enhance user experience.Emphasized usability and performance, ensuring compatibility across modern web browsers."
    },
]

const Single = ({ item }) => {

    const ref = useRef();

    const { scrollYProgress } = useScroll({
        target: ref,
        // offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [200, -200])

    return <section>
        <div className="container">
            <div className="wrapper">
                <div className="imageContainer" ref={ref}>
                    <img src={item.image} alt="" />
                </div>
                <motion.div className="textContainer" style={{ y }}>
                    <h2>{item.title}</h2>
                    <p>{item.desc}</p>
                    <a href={item.link} target='__blank'>See Demo</a>
                </motion.div>
            </div>
        </div>
    </section>
}

const Portfolio = () => {

    const ref = useRef();

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "start start"]
    });

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 40
    })

    return (
        <div className='portfolio' ref={ref}>
            <div className="progress">
                <h1>Featured Works</h1>
                <motion.div style={{ scaleX: scaleX }} className="progressBar"></motion.div>
            </div>
            {
                items.map((item) => {
                    return <Single key={item.id} item={item} />
                })
            }
        </div>
    )
}

export default Portfolio
