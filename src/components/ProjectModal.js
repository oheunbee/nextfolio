import Image from 'next/image';
import React from 'react';
import { FiX, FiExternalLink } from 'react-icons/fi';

// 데스크탑 목업 (새 레이아웃에 맞게 크기 미세 조정)
const DesktopMockup = ({ src }) => (
  <div className="flex-shrink-0">
    <div className="relative mx-auto w-[280px] h-[175px] md:w-[480px] md:h-[300px] bg-slate-800 rounded-xl">
      <div className="w-full h-full bg-black rounded-lg overflow-y-auto">
        <Image src={src} alt="Desktop mockup" width={1024} height={1600} className="w-full h-auto" priority />
      </div>
    </div>
    <div className="relative mx-auto w-[280px] md:w-[480px]">
      <div className="h-8 w-16 md:w-24 mx-auto bg-gradient-to-b from-slate-300 to-slate-400"></div>
      <div className="h-1 w-40 md:w-56 mx-auto bg-slate-300 shadow-md rounded-b-md"></div>
    </div>
  </div>
);

// 모바일 목업 (새 레이아웃에 맞게 크기 미세 조정)
const MobileMockup = ({ src }) => (
  <div className="relative mx-auto border-2 border-slate-700 bg-gradient-to-b from-slate-600 to-slate-700 rounded-[2.8rem] w-[110px] h-[220px] md:w-[140px] md:h-[280px] shadow-xl">
    <div className="absolute left-[-2px] top-[60px] h-6 w-0.5 bg-slate-500 rounded-l-sm"></div>
    <div className="absolute left-[-2px] top-[90px] h-6 w-0.5 bg-slate-500 rounded-l-sm"></div>
    <div className="absolute right-[-2px] top-[75px] h-10 w-0.5 bg-slate-500 rounded-r-sm"></div>
    <div className="rounded-[2.6rem] w-full h-full bg-black overflow-hidden">
      <div className="w-full h-full overflow-y-auto">
        <Image src={src} alt="Mobile mockup" width={393} height={852} className="w-full h-auto" priority />
      </div>
      <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-20 h-4 bg-black rounded-full"></div>
    </div>
  </div>
);

// 재사용 가능한 정보 섹션 컴포넌트
const InfoSection = ({ title, content }) => (
  <div className="space-y-3">
    <h4 className="text-lg font-bold text-slate-700 border-b border-slate-300 pb-2 mb-3">{title}</h4>
    <p className="text-sm text-slate-600 leading-relaxed whitespace-pre-line">
      {content}
    </p>
  </div>
);


const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-80 flex items-center justify-center z-50 p-4 transition-opacity duration-300" onClick={handleBackdropClick}>
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-5xl max-h-[90vh] flex flex-col relative">
        <div className="flex justify-between items-center p-5 border-b border-slate-200 flex-shrink-0">
          <h2 className="text-xl font-bold text-slate-800">{project.title}</h2>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-800 transition-colors">
            <FiX size={24} />
          </button>
        </div>

        {/* 모달 전체가 스크롤되도록 overflow-y-auto를 여기에 적용 */}
        <div className="flex-grow overflow-y-auto">
          {/* --- 1. 비주얼 헤더 --- */}
          <div className="bg-slate-100 p-8 flex flex-col md:flex-row items-end justify-center gap-8 border-b border-slate-200">
            <DesktopMockup src={project.macImage} />
            <div className="relative md:bottom-6">
              <MobileMockup src={project.phoneImage} />
            </div>
          </div>

          {/* --- 2. 텍스트 콘텐츠 영역 --- */}
          <div className="p-8 md:p-10">
            {/* 기본 정보 */}
            <div className="mb-8">
              <h3 className="text-4xl font-extrabold text-slate-800 mb-2">{project.title}</h3>
              <p className="text-base text-slate-500 font-medium">{project.date}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tags.map(tag => (
                  <span key={tag} className="bg-slate-200 text-slate-700 rounded-full px-4 py-1 text-xs font-bold">{tag}</span>
                ))}
              </div>
            </div>

            {/* 다단 설명 그리드 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
              <InfoSection title="상세 설명" content={project.detailedDescription} />
              <InfoSection title="주요 기능" content={project.keyFeatures} />
              <InfoSection title="Technical Challenges" content={project.technicalChallenges} />
              <InfoSection title="What I Learned" content={project.whatILearned} />

              {/* 사이트 바로가기 버튼 */}
              <div className="md:col-span-2 flex justify-center mt-8 pt-8 border-t border-slate-200">
                <a 
                  href={project.liveSiteUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-3 bg-slate-800 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-slate-900 transition-transform duration-300 transform hover:scale-105 shadow-xl"
                >
                  프로젝트 사이트 바로가기 <FiExternalLink />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;