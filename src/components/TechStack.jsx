import { iconsList } from "./index.js"
import TechIcon from "./TechIcon";
import {gsap} from "gsap"
import {ScrollTrigger} from "gsap/all"
import {useRef,useEffect} from "react"
const TechStack = () => {
  const techRef=useRef(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
      techRef.current,
      { x: 100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: techRef.current,
          start: "top 80%", // Changed from "top 30%" to "top 80%" for earlier trigger
          toggleActions: "play reverse play reverse", // Changed "restart" to "play" for initial animation
        }
      }
    );
  }, []);
  return (
 <div className="w-full h-full flex flex-col mt-12 justify-center items-center">
  <div>
    <div ref={techRef}className="container mx-auto mt-4 md:p-6 px-5">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center bg-gradient-to-r from-blue-500 to-white bg-clip-text text-transparent ">Tech Stack</h1>
      <h2 className="font-semibold md:text-xl text-sm text-center">
        The tools I use to build and bring ideas to life.
      </h2>
    </div>

    <div className="mt-2 relative">
      <div className="marquee h-52">
        <div className="marquee-box md:gap-10 gap-4">
          {iconsList.map((icon, index) => (
            <TechIcon key={index} icon={icon} />
          ))}
          {iconsList.map((icon, index) => (
            <TechIcon key={index} icon={icon} />
          ))}
          {iconsList.map((icon, index) => (
            <TechIcon key={index} icon={icon} />
          ))}
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default TechStack