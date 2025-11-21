import {useRef,useEffect} from "react"
import{gsap} from "gsap"
import {ScrollTrigger} from "gsap/all"
import TechStack from "./TechStack"

const AboutSection = () => {
const sectionRef = useRef(null);
const titleRef = useRef(null);
const introRef=useRef(null);
const starsRef=useRef([]);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animate
    gsap.fromTo(
      titleRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration:0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%", // Trigger later for smoother appearance
          toggleActions:"play reverse play reverse",
        },
      }
    );
    //intro animation
   
  gsap.fromTo(
    introRef.current,
    { y: 300, opacity: 0, filter: "blur(10px)" },
{
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      duration: 0.8,
    ease: "power3",
    scrollTrigger: {
    trigger: sectionRef.current,
    start: "top 80%",
    toggleActions:"play reverse play reverse",
}
});
  //stars animation
  starsRef.current.forEach((star,index)=>{
    const direction=index%2==0?1:-1;
    const speed=0.5+Math.random()*0.5

    gsap.to(star,{
        x:`${direction *(100+index *20)}`,
        y:`${direction *-50 -index*10}`,
        rotation:direction*360,
        ease:"none",
        scrollTrigger:{
            trigger:sectionRef.current,
            start:"top bottom",
            end:"bottom top",
            scrub:speed,
        }
    })
  })

    // Optional cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);


  const addToStars=(el)=>{
    if(el && !starsRef.current.includes(el)){
        starsRef.current.push(el)
    }
  }
  return (
    <section
      ref={sectionRef}
      id="about"
      className="min-h-screen relative overflow-hidden py-20 bg-gradient-to-b "
      style={{
        background: "linear-gradient(135deg, #0a0f2a 40%, #000000 100%)"
      }}
    >
      <div className="absolute inset-0 overflow-hidden">
        {/* Stars*/}
        {[...Array(10)].map((_, i) => (
          <div
            ref={addToStars}
            key={`star-${i}`}
            className="absolute rounded-full"
            style={{
              width: `${10 + i * 3}px`,
              height: `${10 + i * 3}px`,
              backgroundColor: "white",
              opacity: 0.2 + Math.random() * 0.4,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>
      <div className="container mx-auto px-4 flex flex-col items-center text-center gap-10">
        <h1
          ref={titleRef}
          className="text-4xl md:text-6xl font-bold sm:mb-16 text-center bg-gradient-to-r from-blue-500 to-white bg-clip-text text-transparent"
        >
          About Me
        </h1>
      </div>
      <div
        ref={introRef}
        className="mt-12 w-full flex md:flex-row flex-col-reverse justify-between lg:px-24 px-5 items-center gap-12"
      >
        <h3 className="text-sm md:text-xl from-neutral-100  max-w-4xl tracking-wide">
          I'm a B.E. Computer Science and Engineering student at PSG College of Technology with a strong interest in full-stack development and AI engineering. I enjoy building responsive, user-friendly websites and delving into the exciting world of artificial intelligence. My academic journey blends core computer science fundamentals with hands-on exploration in both development and AI. I'm passionate about learning new technologies, solving real-world problems, and continuously improving my technical and problem-solving skills. Currently, I'm focused on expanding my knowledge through personal projects and seeking opportunities that allow me to grow as a full-stack developer and an AI engineer.
        </h3>

        <img
          className="lg:h-[20rem] md:h-[12rem] h-[15rem] mix-blend-lighten rounded-full shadow-lg"
          src="images/person.jpg"
          alt="profile-img"
        />
      </div>
      <TechStack />
    </section>
  )
}

export default AboutSection