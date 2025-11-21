import React, { useState } from 'react';
import Particles from './Particles';
const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false); 
    }, 1000);
  };

  return (   
  <div className="relative w-full min-h-[600px] "
  >
      <div className="absolute inset-0 -z-10">
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
    <section id="contact" className='w-full mx-auto flex flex-col overflow-hidden gap-4 justify-center items-center px-4 pb-10 pt-4 '
      >
      <h1 className='text-center text-3xl md:text-4xl bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent'>Get In Touch</h1>
      <h1 className='text-center text-base md:text-xl max-w-full md:max-w-[650px] text-slate-400'>
        Have a project in mind or just want to say hello? Drop me a message and let's create something amazing together.
      </h1>
      <div className='rounded-lg w-full max-w-full md:max-w-[600px]'
        style={{
          background: "linear-gradient(135deg, #0a0f1a 0%, #10182a 40%, #0d1b2a 70%, #000 100%)"
        }}>
        <form
          className="w-full rounded-lg flex flex-col p-4 space-y-4"
          onSubmit={handleSubmit}
        >
          <h2>Your Name</h2>
          <input
            className='mt-2 p-2 border border-gray-500 rounded-md bg-gray-900 transition-all duration-300 focus:border-blue-500 focus:scale-105 hover:scale-105'
            placeholder='John'
          />
          <h2>Email Address</h2>
          <input
            placeholder='John@gmail.com'
            className='mt-2 p-2 border rounded-md bg-gray-900 border-gray-500 transition-all duration-300 focus:border-blue-500 focus:scale-105 hover:scale-105'
          />
          <h2>Message</h2>
          <textarea
            className='border rounded-md mt-2 p-2 h-24 text-start bg-gray-900 border-gray-500 transition-all duration-300 focus:border-blue-500 focus:scale-105 hover:scale-105'
            placeholder='Share your thoughts, ideas, or just say hi!'
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className={`items-center justify-center gap-2 whitespace-nowrap text-sm ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-11 rounded-md px-8 w-full btn-glow bg-gradient-to-r from-red-500 to-blue-500 text-primary-foreground font-medium py-4
              ${isSubmitting ? "scale-95 opacity-70" : "hover:scale-105 hover:shadow-lg"}
            `}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
    </div>
  )
}

export default Contact