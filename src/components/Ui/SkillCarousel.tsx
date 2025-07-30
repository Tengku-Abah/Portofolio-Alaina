
'use client';
import { useEffect, useRef } from 'react';
import Image from 'next/image';

const skills = [
  { id: 'js', src: '/js.webp', name: 'JavaScript' },
  { id: 'mysql', src: '/mysql.jpeg', name: 'MySQL' },
  { id: 'html', src: '/html.png', name: 'HTML' },
  { id: 'css', src: '/css.jpeg', name: 'CSS' },
  { id: 'react', src: '/react.png', name: 'React' }
];

export default function CenterAlignedSkillCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number>();
  const progressRef = useRef(0);

  useEffect(() => {
    const container = containerRef.current;
    const track = trackRef.current;
    if (!container || !track) return;

    // Hitung posisi tengah awal
    const containerWidth = container.offsetWidth;
    const trackWidth = track.offsetWidth;
    const initialOffset = (containerWidth - trackWidth) / 2;
    progressRef.current = initialOffset;

    const animate = () => {
      progressRef.current -= 0.8;
      
      // Reset ketika mencapai ujung kiri
      if (progressRef.current <= -trackWidth) {
        progressRef.current = containerWidth;
      }
      
      track.style.transform = `translateX(${progressRef.current}px)`;
      requestRef.current = requestAnimationFrame(animate);
    };

    // Set posisi awal ke tengah
    track.style.transform = `translateX(${initialOffset}px)`;
    
    // Mulai animasi setelah delay kecil
    const timeoutId = setTimeout(() => {
      requestRef.current = requestAnimationFrame(animate);
    }, 500);

    return () => {
      clearTimeout(timeoutId);
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, []);

  return (
    <div className="relative overflow-hidden py-10 bg-[#b99364] rounded-2xl">
      <div ref={containerRef} className="relative w-full h-24">
        {/* Track animasi */}
        <div 
          ref={trackRef}
          className="absolute flex gap-10"
        >
          {skills.map((skill) => (
            <div 
              key={skill.id}
              className="flex flex-col items-center justify-center w-20 h-20 bg-white rounded-lg p-2 shadow-md transition-transform hover:scale-110"
            >
              <Image
                src={skill.src}
                alt={skill.name}
                width={120}
                height={120}
                className="object-contain w-full h-full"
              />
              <span className="text-xs mt-1">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}