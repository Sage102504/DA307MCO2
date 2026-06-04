import { useEffect, useRef } from "react";
import videoSrc from "../assets/CoffeeFirstPromotional.mp4";

export default function VideoSection() {
  const videoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting && videoRef.current) {
          videoRef.current.pause();
        }
      },
      {
        threshold: 0.3, // pause when less than 30% visible
      }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <section id="video" className="video-section">
      <h1>Welcome to Coffee First!</h1>

      <video ref={videoRef} controls width="100%">
        <source src={videoSrc} type="video/mp4" />
      </video>
    </section>
  );
}