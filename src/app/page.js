'use client';

import { useState, useRef, useEffect } from 'react';
import About from "../components/About";
import Project from "@/components/Project";
import ProjectModal from '@/components/ProjectModal'; 

const ANIMATION_DURATION = 1200;

export default function Home() {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const isThrottled = useRef(false);
  const totalSections = 3;

  const [modalProject, setModalProject] = useState(null);
  const modalProjectRef = useRef(modalProject);
  modalProjectRef.current = modalProject;

  const openModal = (project) => {
    setModalProject(project);
  };

  const closeModal = () => {
    setModalProject(null);
  };

  useEffect(() => {
    const handleWheel = (e) => {
      if (modalProjectRef.current) {
        return;
      }
      
      if (isThrottled.current) return;
      isThrottled.current = true;

      setTimeout(() => {
        isThrottled.current = false;
      }, ANIMATION_DURATION);

      const direction = e.deltaY > 0 ? 'down' : 'up';
      if (direction === 'down') {
        setCurrentSectionIndex((prevIndex) => Math.min(prevIndex + 1, totalSections - 1));
      } else {
        setCurrentSectionIndex((prevIndex) => Math.max(prevIndex - 1, 0));
      }
    };
    
    window.addEventListener('wheel', handleWheel);
    
    return () => window.removeEventListener('wheel', handleWheel);
  }, []);

  return (
    <main className="relative h-screen w-full overflow-hidden">
      <div
        className="h-full w-full transition-transform ease-in-out"
        style={{
          transitionDuration: `${ANIMATION_DURATION}ms`,
          transform: `translateY(-${currentSectionIndex * 100}vh)`,
        }}
      >
        <section className="h-screen w-full">
          <div className='w-full h-full bg-stone-100 relative'>
            <div className="absolute inset-0 flex items-center justify-center"><h1 className="text-8xl font-bold">PORTFOLIO</h1></div>
            <div className="absolute bottom-0 left-0 w-full p-8 md:p-12"><div className="flex items-center gap-4"><div className="flex-grow h-px bg-black"></div><span className="text-sm font-semibold tracking-widest uppercase">OH EUNBEE</span></div></div>
            <div className="absolute top-0 right-0 bottom-0 p-8 md:p-12"><div className="flex flex-col items-center gap-4 h-full pb-10"><span className="block text-sm font-semibold tracking-widest uppercase rotate-90 whitespace-nowrap">2025</span><div className="w-px bg-black flex-grow"></div></div></div>
          </div>
        </section>

        <section className="h-screen w-full">
          <About />
        </section>

        <section className="h-screen w-full">
          <Project onOpenModal={openModal} />
        </section>
      </div>

      {modalProject && (
        <ProjectModal project={modalProject} onClose={closeModal} />
      )}
    </main>
  );
}