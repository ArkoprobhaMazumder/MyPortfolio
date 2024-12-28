import './navbar.scss';
import instagram from '../../../public/images/instagram.png';
import facebook from '../../../public/images/facebook.png';
import dribble from '../../../public/images/dribble.png';

import { motion } from "framer-motion";
import Sidebar from '../sidebar/Sidebar';

const Navbar = () => {
    return (
        <div className="navbar">
            {/* {Sidebar} */}
            <Sidebar />
            <div className="wrapper">
                <motion.span
                    initial={{ opacity: 0, scale: 0.4 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7 }}
                >Arko Mazumder</motion.span>
                <div className="socialLists">
                    <a href="https://www.facebook.com/profile.php?id=100084673733234">
                        <img src={facebook} alt="" />
                    </a>
                    <a href="https://www.instagram.com/arkoprobhamazumder/">
                        <img src={instagram} alt="" />
                    </a>
                    <a href="https://www.linkedin.com/in/arkoprobhamazumder">
                        <img src={dribble} alt="" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Navbar
