import TypeWriter from "./TypeWriter.jsx"
import {motion} from 'framer-motion'
import Spline from "@splinetool/react-spline"
import Button from "./Button.jsx"

const HeroSection = () => {
return (
    <section id="home" className="h-screen flex xl:flex-row flex-col-reverse
items-start justify-start md:items-center md:justify-start lg:px-24 px-10 relative overflow-hidden z-10"
    style={{
        background: "linear-gradient(135deg, #0a0f2a 40%, #000000 100%)"
      }}
> 

              <motion.div
                className="flex flex-col text-3xl justify-start items-start md:gap-4 gap-2 z-40 xl:mb-0 mb-[20%] max-w-2xl w-full"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ type: "spring", stiffness: 60, damping: 15, duration: 1 }}
            >
                <h2 className="">
                Hi! Iam <span className="bg-gradient-to-r from-blue-900 to-blue-500 bg-clip-text text-transparent">Prajit</span>
                </h2>
                <h2
                className="text-4xl"
                >
                I am a
                </h2>
                <motion.span
                className="text-3xl md:text-5xl lg:text-6xl"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.7, ease: "easeOut" }}
                >
                <TypeWriter />
                </motion.span>
                <p
                className="text-xl md:leading-relaxed"
                >
            I specialize in transforming concepts into responsive, high-quality, and interactive web realities. Driven by curiosity and a commitment to continuous learning, I build intuitive interfaces that truly engage users.
                </p>
                
            <a
  href="/images/Resume.pdf"      // Path relative to public folder
  download="My_Resume.pdf" // 👈 specify filename (optional)
  style={{ width: "fit-content" }}
>
  <Button>Download Resume</Button>
</a>

            </motion.div>
            
            {/*Right Section */}
          <Spline className="absolute xl:right-[-28%] right-0 top-[-20%] lg:top-0" 
          scene="https://prod.spline.design/XZTeMH5ucn5gfmNx/scene.splinecode" />

    </section>
)
}

export default HeroSection