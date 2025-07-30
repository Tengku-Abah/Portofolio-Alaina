'use client';
import { useEffect, useRef } from 'react';
import Image from 'next/image';

const skills = [
  '/html.png',
  '/css.jpeg',
  '/js.webp',
  '/mysql.jpeg',
  '/react.png',
  '/Supabase.jpeg',
  '/spiking.png',
];

export default function SkillCarousel() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    // Clone elemen untuk efek seamless
    const scrollerContent = Array.from(scroller.children);
    scrollerContent.forEach(item => {
      scroller.appendChild(item.cloneNode(true));
    });

    let animationFrameId: number;
    let currentPosition = 0;
    const speed = 1.5; // Kecepatan scroll

    const animate = () => {
      currentPosition -= speed;
      
      // Reset ketika mencapai setengah konten (setelah clone)
      if (currentPosition <= -scroller.scrollWidth / 2) {
        currentPosition = 0;
      }
      
      scroller.style.transform = `translateX(${currentPosition}px)`;
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div className="bg-[#b99364] rounded-2xl py-10 overflow-hidden relative w-full">
      <div className="w-full overflow-hidden">
        <div ref={scrollerRef} className="flex gap-10 w-max">
          {skills.map((src, idx) => (
            <div
              key={`skill-${idx}`}
              className="flex-shrink-0 w-20 h-20 bg-white rounded-lg p-2 shadow-md hover:scale-110 transition-transform duration-300"
            >
              <Image
                src={src}
                alt={`skill-${idx}`}
                width={120}
                height={120}
                className="object-contain w-full h-full"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}