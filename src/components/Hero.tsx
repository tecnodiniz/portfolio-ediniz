import { useEffect, useRef } from "react";
import Link from "next/link";

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Grid parameters
    const gridSize = 30;
    const maxDistance = 500;
    const perspective = 4;
    const horizonY = canvas.height * 0.5;
    const speed = 0.5;

    let offset = 0;

    // Animation function
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw the grid
      ctx.strokeStyle = "rgba(0, 221, 255, 0.3)";
      ctx.lineWidth = 1;

      offset = (offset + speed) % gridSize;

      // Horizontal lines
      for (let y = horizonY; y < canvas.height; y += gridSize) {
        const scale = (y - horizonY) / maxDistance;
        const currentGridSize = gridSize + scale * perspective * gridSize;

        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Vertical lines
      for (let x = -gridSize; x < canvas.width + gridSize; x += gridSize) {
        const adjustedX = (x - offset) % (canvas.width + gridSize);

        ctx.beginPath();
        ctx.moveTo(adjustedX, horizonY);
        ctx.lineTo(adjustedX, canvas.height);
        ctx.stroke();
      }

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 z-0 cyberpunk-grid" />

      <div className="absolute inset-0 bg-gradient-to-b from-background to-transparent z-10"></div>

      <div className="container mx-auto px-6 z-20 text-center md:text-left">
        <h2 className="font-orbitron text-lg md:text-2xl mb-2 text-secondary">
          <span className="glitch" data-text="Hello World_">
            Hello World_
          </span>
        </h2>

        <h1 className="font-orbitron text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
          <span className="neon-text">Eduardo Diniz</span>
        </h1>

        <h3 className="font-mono text-xl md:text-2xl mb-6 text-foreground/90">
          <span className="text-primary">&lt;</span>
          Software Developer
          <span className="text-primary">/&gt;</span>
        </h3>

        <p className="text-lg mb-8 max-w-2xl mx-auto md:mx-0">
          Specialized in building scalable APIs with
          <span className="text-secondary"> Node.js</span>,
          <span className="text-primary"> NestJS</span>,
          <span className="text-primary"> Next.js</span>,
          <span className="text-accent"> Python</span> and more.
        </p>

        <div className="flex gap-4 flex-col sm:flex-row justify-center md:justify-start">
          <Link
            href="#projects"
            className="px-8 py-3 border border-primary rounded bg-primary/10 
              hover:bg-primary/20 transition-all duration-300 font-orbitron flex items-center justify-center"
          >
            View My Work
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </Link>

          <Link
            href="#contact"
            className="px-8 py-3 border border-secondary rounded bg-secondary/10 
              hover:bg-secondary/20 transition-all duration-300 font-orbitron flex items-center justify-center"
          >
            Contact Me
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
