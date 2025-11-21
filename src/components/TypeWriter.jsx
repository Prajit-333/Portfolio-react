// TypeWriter.jsx
import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

const TypeWriter = () => {
  const el = useRef(null);     // For span element
  const typed = useRef(null);  // For storing Typed instance

 useEffect(() => {
  const timeout = setTimeout(() => {
    typed.current = new Typed(el.current, {
      strings: ["Frontend Developer", "Web Developer", "AI/ML Engineer", "UI/UX Designer","Cloud Architect"],
      typeSpeed: 30,
      backSpeed: 30,
      backDelay: 1000,
      loop: true,
    });
  }, 1000); 

  // Cleanup
  return () => {
    clearTimeout(timeout); // clear timeout on unmount
    typed.current?.destroy(); // destroy Typed instance if exists
  };
}, []);


  return (
    <p>
      <span ref={el}></span>
    </p>
  );
};

export default TypeWriter
