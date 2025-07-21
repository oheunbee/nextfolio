import Image from 'next/image';
import React from 'react';
import { FiMail, FiPhone, FiGithub } from 'react-icons/fi';

// 스킬 태그를 위한 재사용 가능한 컴포넌트
const SkillTag = ({ name }) => (
  <span className="inline-block bg-gray-200 text-gray-700 rounded-md px-3 py-1 text-sm font-medium mr-2 mb-2">
    {name}
  </span>
);

// 스킬 섹션을 위한 재사용 가능한 컴포넌트
const SkillSection = ({ title, skills }) => (
  <div>
    <h3 className="text-lg font-semibold text-gray-800 mb-3">{title}</h3>
    <div className="flex flex-wrap">
      {skills.map((skill) => (
        <SkillTag key={skill} name={skill} />
      ))}
    </div>
  </div>
);

const About = () => {
  // 스킬 데이터를 배열로 관리하여 유지보수를 용이하게 합니다.
  const skills = {
    languages: ['JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3'],
    frameworks: ['React', 'Next.js', 'Vue.js', 'Redux Toolkit', 'Zustand'],
    styling: ['Tailwind CSS', 'Styled-components', 'Sass/SCSS', 'Figma'],
    tools: ['Git', 'Webpack', 'Vercel', 'Firebase'],
  };

  return (
    // 전체 페이지 배경
    <div className="bg-gray-100 flex items-center justify-center min-h-screen p-4 sm:p-6 md:p-8">
      {/* 흰색 카드 컨테이너 */}
      <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* 왼쪽 섹션 (프로필) */}
        <div className="md:col-span-1 flex flex-col items-center text-center space-y-5">
          {/* 
            프로필 이미지를 public 폴더에 넣고 경로를 수정해주세요.
            예: public/profile.png
          */}
          <Image
            width={200}
            height={200}
            src="/profile.png" // 이 부분을 실제 이미지 경로로 변경하세요.
            alt="오은비 프로필"
            className="w-40 h-40 rounded-full object-cover bg-gray-200 ring-4 ring-gray-200"
          />
          <div>
            <h1 className="text-3xl font-bold text-gray-900">오은비</h1>
            <p className="text-blue-600 font-semibold mt-1">Frontend Developer</p>
          </div>
          <div className="pt-4 space-y-3 text-left w-full">
            <a href="mailto:dhdmsql1324@gmail.com" className="flex items-center text-gray-600 hover:text-blue-600 transition-colors">
              <FiMail className="w-5 h-5 mr-3 flex-shrink-0" />
              <span>dhdmsql1324@gmail.com</span>
            </a>
            <div className="flex items-center text-gray-600">
              <FiPhone className="w-5 h-5 mr-3 flex-shrink-0" />
              <span>010-7302-3027</span>
            </div>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-600 hover:text-blue-600 transition-colors">
              <FiGithub className="w-5 h-5 mr-3 flex-shrink-0" />
              <span>GitHub Profile</span>
            </a>
          </div>
        </div>

        {/* 오른쪽 섹션 (소개 및 스킬) */}
        <div className="md:col-span-2 space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">About Me</h2>
            <p className="text-gray-600 leading-relaxed text-base">
              사용자 경험을 최우선으로 생각하며, 직관적이고 효율적인 웹 솔루션을 만드는 데 열정을 가진 프론트엔드 개발자입니다. 복잡한 문제를 단순하게 풀고, 동료들과의 협업을 통해 함께 성장하는 과정에서 큰 보람을 느낍니다.
            </p>
          </div>

          {/* 구분선 */}
          <div className="border-t border-gray-200"></div>

          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Skills</h2>
            <SkillSection title="Languages" skills={skills.languages} />
            <SkillSection title="Frameworks & Libraries" skills={skills.frameworks} />
            <SkillSection title="Styling & UI" skills={skills.styling} />
            <SkillSection title="Tools & Etc." skills={skills.tools} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;