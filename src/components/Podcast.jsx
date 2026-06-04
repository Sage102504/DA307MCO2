import { useEffect, useRef } from "react";
import coffeeImg from "../assets/RotatingCoffee.png";

export default function Podcast() {
  const audioRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const audio = audioRef.current;

        if (!audio) return;

        // If section is NOT visible → pause audio
        if (!entry.isIntersecting) {
          audio.pause();
        }
      },
      {
        threshold: 0.25, // triggers when 25% of section is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="podcast" className="podcast" ref={sectionRef}>
      <div className="podcast-container">

        {/* LEFT */}
        <div className="podcast-text">
          <h2>How It Started</h2>

          <p>
            Hear the story behind Coffee First — how a simple idea
            turned into a community space built around passion,
            comfort, and great coffee.
          </p>

          <span className="episode-tag">
            Episode 01 • BrewTalks Podcast
          </span>
        </div>

        {/* RIGHT */}
        <div className="podcast-card">
          <div className="podcast-visual">
            <img src={coffeeImg} alt="Coffee Visual" />
          </div>

          <audio ref={audioRef} controls>
            <source src="/src/assets/podcast.mp3" type="audio/mp3" />
          </audio>
        </div>

      </div>
    </section>
  );
}