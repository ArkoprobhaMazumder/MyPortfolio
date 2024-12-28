import { motion, transform } from "framer-motion";



const varients = {
    open: {
        transition: {
            staggerChildren: 0.1
        }
    },
    closed: {
        transition: {
            staggerChildren: 0.05,
            staggerDirection: -1
        }
    }
}

const innerVarients = {
    open: {
        y: 0,
        opacity: 1
    },
    closed: {
        y: 50,
        opacity: 0
    }
}


const ToggleLinks = () => {

    const links = ["Homepage", "Services", "Portfolio", "Contact", "Experience"];
    return (
        <motion.div className='links' variants={varients}>
            {
                links.map((ele, i) => {
                    return <motion.a href={`#${ele}`} key={i} variants={innerVarients}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >{ele}</motion.a>
                })
            }
        </motion.div>
    )
}

export default ToggleLinks
