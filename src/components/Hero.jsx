import { ArrowDown } from "lucide-react";
import React from "react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Victor
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              {" "}
              Iberi
            </span>
          </h1>
          <p className="text-lg md:xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            Frontend developer skilled in React and Tailwind. I recently
            completed an internship at Cyncra Technologies and am now wrapping
            up my Frontend Engineering diploma at AltSchool Africa.
          </p>
          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce cursor-pointer"
      >
        <span className="text-sm text-muted-forefround mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </a>
    </section>
  );
};

export default Hero;


