import { motion } from "framer-motion";
import {FiGithub,FiLinkedin,FiInstagram} from "react-icons/fi";
import PillNav from "./PillNav.jsx";
const Header = () => {
  return (
<header className="absolute w-full z-50 transition-all duration-300 ">
<div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">
            {/* Logo name*/}
<motion.div
  initial={{ opacity: 0, x: -100}}
  animate={{ opacity: 1, x: 0}}
  transition={{
    type: "spring",
    stiffness: 120,
    damping: 15,
  }}
  className=" items-center md:flex hidden">

<div className="h-10 w-10 rounded-xl bg-gradient-to-r from-gray-500 to-gray-100 flex items-center justify-center text-blue-600 font-bold text-xl mr-3">
    <img src="/images/Gemini_Generated_Image_z8scioz8scioz8sc.png" alt="Prajit logo" className="h-full w-full object-cover rounded-xl" loading="lazy" />
 </div>
<span className="text-xl font-bold bg-gradient-to-r from-gray-300 to-gray-100 bg-clip-text text-transparent">
    Prajit
</span>
</motion.div>



{/* navebar the holds page topics we made it using map method */}
  <nav className="lg:flex space-x-8 mx-auto  md:hidden flex">
    {["Home","About","Projects","Contact"].map((item,index)=>(

        <motion.a key={item} 
        initial={{opacity:0,y:-20}}
        animate={{opacity:1,y:0}}
        transition={{type:"spring",
          stiffness:100,
          damping:20,
          delay:0.2+index*0.3,
        }}
        className= "md:hidden group relative text-gray-800 dark:text-gray-200 hover:text-blue-600  dark:hover:text-blue-400 font-medium transition-colors duration-300" href="#" >
          {item}
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
        </motion.a>
))}
  </nav>

    {/*Social Icons */}
<div className="md:flex hidden items-center space-x-7">
<motion.a 
initial={{opacity:0,scale:0.5}}
animate={{opacity:1,scale:1}}
whileHover={{ scale: 1.3, transition: { duration: 0.1} }}
transition={{delay:0.3,duration:0.8}}
className="text-gray-700 dark:text-gray-300 hover:text-blue-600
dark:hover:text-blue-400 transition-colors duration-300" href="https://github.com/Prajit-333" target="_blank" rel="noopener noreferrer">
  <FiGithub className="w-5 h-5"/>
</motion.a>

<motion.a 
initial={{opacity:0,scale:0.5}}
animate={{opacity:1,scale:1}}
whileHover={{ scale: 1.3, transition: { duration: 0.1} }}
transition={{delay:0.3,duration:0.8}}
className="text-gray-700 dark:text-gray-300 hover:text-blue-600
dark:hover:text-blue-400 transition-colors duration-300" href="https://www.linkedin.com/in/prajit-r111" target="_blank" rel="noopener noreferrer">
  <FiLinkedin className="w-5 h-5"/>
</motion.a>

<motion.a 
initial={{opacity:0,scale:0.5}}
animate={{opacity:1,scale:1}}
whileHover={{ scale: 1.3, transition: { duration: 0.1} }}
transition={{delay:0.3,duration:0.8}}
className="text-gray-700 dark:text-gray-300 hover:text-blue-600
dark:hover:text-blue-400 transition-colors duration-300" href="#">
  <FiInstagram className="w-5 h-5"/>
</motion.a>
</div>


</div>
    </header>
  )
}

export default Header