import { useEffect, useState } from "react";

const StarBackground = () => {
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);

  // // stars are gonna have the ff; id, size, x, y, opacity, animationDuration
  // // meteors are gonna have the ff; id, size, x, y, delay, animationDuration

  // Function to generate stars based on screen size
  const createStar = () => {
    const numberOfStars = Math.floor(
      (window.innerWidth * window.innerHeight) / 8000
    );
    const newStars = [];
    for (let i = 0; i < numberOfStars; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 4 + 1, // 1–5px
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.5 + 0.5,
        animationDuration: Math.random() * 4 + 2,
      });
    }
    setStars(newStars);
  };
  
  // Function to generate Meteors based on screen size
  const createMeteors = () => {
    const numberOfMeteors = 4;

    const newMeteors = [];
    for (let i = 0; i < numberOfMeteors; i++) {
      newMeteors.push({
        id: i,
        size: Math.random() * 2 + 1, // 1-3px
        x: Math.random() * 100,
        y: Math.random() * 20,
        delay: Math.random() * 15, // delay between 0-15s
        animationDuration: Math.random() * 3 + 3, // duration between 3-6s
      });
    }
    setMeteors(newMeteors);
  };

  useEffect(() => {
    createStar(); // Initial load
    createMeteors(); // Initial load

    const handleResize = () => {
      createStar();
    }

    window.addEventListener("resize", handleResize)

    return window.removeEventListener("resize", handleResize) //cleanup to prevent against memory leaks
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star star-twinkle"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            left: `${star.x}%`,
            top: `${star.y}%`,
            opacity: star.opacity,
            animationDuration: `${star.animationDuration}s`,
          }}
        />
      ))}
      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="meteor animate-meteor"
          style={{
            width: `${meteor.size * 40}px`,
            height: `${meteor.size}px`,
            left: `${meteor.x}%`,
            top: `${meteor.y}%`,
            animationDelay: `${meteor.delay}s`,
            animationDuration: `${meteor.animationDuration}s`,
          }}
        />
      ))}
    </div>
  );
};

export default StarBackground;
