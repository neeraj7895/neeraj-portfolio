"use client";

import { useEffect, useState } from "react";

export default function CursorGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <div
      className="pointer-events-none fixed w-64 h-64 rounded-full bg-purple-500/20 blur-3xl -z-10 transition-transform duration-75"
      style={{
        transform: `translate(${position.x - 128}px, ${position.y - 128}px)`,
      }}
    />
  );
}
