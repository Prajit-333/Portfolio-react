import { ArrowRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { gsap } from "gsap";
import { useRef, useEffect } from "react";
import { ScrollTrigger } from "gsap/all";
import Tilt from 'react-parallax-tilt';
import Particles from './Particles';

const Projects = () => {
  const titleRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
      titleRef.current,
      { x: 100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play reverse play reverse",
        },
      }
    );
  }, []);

  const projects = [
    {
      title: "YouTube Clone",
      description:
        "A modern e-commerce solution with advanced filtering, real-time inventory, and seamless checkout experience.",
      techStack: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "/images/yt.png",
      liveLink: "#",
      codeLink: "#",
    },
    {
      title: "Portfolio Website",
      description:
        "A sleek and modern portfolio to showcase skills, projects, and blogs with smooth animations and responsive design.",
      techStack: ["React", "GSAP", "Tailwind CSS", "Vite"],
      image: "/images/portfolio1.png",
      liveLink: "#",
      codeLink: "#",
    },
    {
      title: "Task Management App",
      description:
        "A task management application with real-time updates, priority tagging, calendar integration, and responsive desktop-first UI.",
      techStack: ["React", "MongoDB", "Tailwind CSS"],
      image: "/images/taskmanager.png",
      liveLink: "#",
      codeLink: "#",
    },
  ];

  return (
    <div className="relative w-full min-h-[600px]">
      {/* Particles Background */}
      <div className="absolute inset-0 -z-10 " style={{
        background: "linear-gradient(135deg, #0a0f2a 40%, #000000 100%)"
      }}>
        <Particles
          particleColors={['#ffffff', '#ffffff']}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      <section
        ref={sectionRef}
        id="projects"
        className="relative w-full text-white py-20 px-6 flex flex-col gap-8 items-center overflow-hidden"
      >
      <div ref={titleRef}>
        <h1 className="w-auto font-bold md:text-6xl text-4xl bg-gradient-to-r from-blue-500 to-white bg-clip-text text-transparent ml-3 text-center">
          Projects
        </h1>
        <h2 className="md:text-2xl text-xl text-gray-400 text-center">
          A showcase of my latest work, featuring cutting-edge technologies and
          innovative solutions.
        </h2>
      </div>

      <div className="flex flex-col md:flex-col gap-8 w-full items-center">
        {projects.map((project, index) => (
          
          <div
            key={index}
            className={`
              group relative w-full md:max-w-[1100px] flex flex-col md:flex-row 
              items-center justify-between gap-10 p-6 md:p-10 rounded-2xl border 
              border-border/30 bg-background/70 backdrop-blur-md shadow-lg transition-transform 
               hover:border-primary/60
              ${index % 2 !== 0 ? "md:flex-row-reverse" : ""}
            `}
            style={{
              minHeight: "350px",
              "--tw-shadow-color": "#115fa5",
            }}
          >
            {/* Image */}
            <Tilt>
            <div className="max-w-md w-full md:h-[350px] h-[300px] flex items-center justify-center bg-gray-900 rounded-lg overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="object-fill w-50 h-full"
              />
            </div>
            </Tilt>
            {/* Info */}
            <div className="flex flex-col gap-4 max-w-xl w-full px-2">
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent">
                {project.title}
              </h2>
              <p className="text-gray-300">{project.description}</p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mt-2 px-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="bg-gray-800 px-3 py-1 rounded-full text-sm text-gray-100 "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-3 mt-3 p-0">
                <div className="relative group inline-block w-[200px]">
                  <a
                    href={project.liveLink}
                    className="relative z-10 inline-flex items-center justify-center w-full px-5 py-3 
                               text-white font-medium rounded-md overflow-hidden
                               border border-blue-500
                               bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700
                               shadow-lg shadow-blue-500/30
                               hover:border-white hover:-translate-y-1 transition-all duration-300"
                  >
                    View Project
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </div>

                <a
                  href={project.codeLink}
                  className="inline-flex items-center gap-2 px-5 py-3 border border-gray-600 text-white rounded-md hover:border-white hover:-translate-y-1 transition-all duration-300"
                >
                  <FaGithub className="w-5 h-5" /> Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
    </div>
  );
};

export default Projects;
