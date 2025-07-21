import React, { useState } from 'react';
import Image from 'next/image';

const projectData = [
  {
    id: 1,
    title: 'Project A',
    date: '2023.01 - 2023.03',
    description: '사용자의 생산성 극대화에 초점을 맞춘 웹 애플리케이션입니다.',
    tags: ['React', 'Node.js', 'Tailwind CSS'],
    image: '/images/project-a.png',
  },
  {
    id: 2,
    title: 'Project B',
    date: '2023.04 - 2023.06',
    description: '실시간 데이터 시각화를 제공하는 관리자 대시보드입니다. 이 설명은 다른 프로젝트보다 조금 더 길어서 레이아웃이 어떻게 유지되는지 테스트하기 좋습니다.',
    tags: ['Vue.js', 'Firebase', 'Chart.js'],
    image: '/images/project-b.png',
  },
];

const Project = ({ onOpenModal }) => {
  const [activeProjectId, setActiveProjectId] = useState(projectData[0].id);
  const activeProject = projectData.find(p => p.id === activeProjectId);

  return (
    <div className="bg-gray-200 flex flex-col items-center justify-center min-h-screen py-16 px-4">
      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-700 tracking-wider mb-8 uppercase">
        MY PROJECTS
      </h1>

      <div className="flex flex-wrap justify-center items-center bg-slate-300/70 p-1.5 rounded-lg mb-[-20px] z-10 relative">
        {projectData.map((project) => (
          <button
            key={project.id}
            onClick={() => setActiveProjectId(project.id)}
            className={`px-4 sm:px-6 py-2 rounded-md font-semibold text-sm sm:text-base transition-all duration-300 ${activeProjectId === project.id ? 'bg-slate-600 text-white shadow-md' : 'text-gray-600 hover:bg-slate-400/50'}`}
          >
            {project.title}
          </button>
        ))}
      </div>

      {activeProject && (
        <div className="bg-white rounded-2xl shadow-xl w-full max-w-5xl p-8 pt-12 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center h-[420px]">
            <div className="w-full h-full bg-gray-100 rounded-lg overflow-hidden shadow-lg">
              <Image
                width={500}
                height={420}
                src={activeProject.image} 
                alt={`${activeProject.title} screenshot`} 
                className="w-full h-full object-cover"
                priority
              />
            </div>

            <div className="h-full flex flex-col justify-between space-y-4">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-gray-900">{activeProject.title}</h2>
                <p className="text-sm text-gray-500 font-medium">{activeProject.date}</p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {activeProject.tags.map((tag) => (
                    <span key={tag} className="bg-gray-200 text-gray-700 rounded-md px-3 py-1 text-sm font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-gray-600 leading-relaxed pt-2">{activeProject.description}</p>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => onOpenModal(activeProject)}
                  className="inline-block bg-slate-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-slate-700 transition-colors duration-300 shadow-sm"
                >
                  more
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Project;