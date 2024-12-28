import React, { useState } from 'react';
import ToggleLinks from './toggleLinks/ToggleLinks';
import ToggleButton from './toggleButton/ToggleButton';
import './sidebar.scss';


import { motion } from 'framer-motion';

const Sidebar = () => {

    const [open, setOpen] = useState(false);

    const varients = {
        open: {
            clipPath: "circle(1200px at 50px 50px)",
            transition: {
                type: 'spring',
                stiffness: 20,
            }
        },
        closed: {
            clipPath: "circle(30px at 50px 50px)",
            transition: {
                delay: 0.5,
                type: 'spring',
                stiffness: 400,
                damping: 40
            }
        }
    }


    return (
        <motion.div className='sidebar' animate={open ? 'open' : 'closed'}>
            <motion.div className="bg" variants={varients}>
                <ToggleLinks />
            </motion.div>
            <ToggleButton setOpen={setOpen} open={open} />
        </motion.div>
    )
}

export default Sidebar
