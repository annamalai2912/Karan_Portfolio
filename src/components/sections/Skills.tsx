import React from 'react';
import Card from '../ui/Card';

interface Skill {
  name: string;
  level: number;
  icon: string;
}

const skills: Skill[] = [
  { name: 'Web Development', level: 95, icon: '💻' },
  { name: 'Photoshop', level: 90, icon: '🎨' },
  { name: 'UI/UX Design', level: 85, icon: '✨' },
  { name: 'React.js', level: 90, icon: '⚛️' },
  { name: 'Node.js', level: 80, icon: '🚀' },
  { name: 'TypeScript', level: 85, icon: '📘' }
];

const SkillBar: React.FC<{ skill: Skill }> = ({ skill }) => {
  const [width, setWidth] = React.useState(0);

  React.useEffect(() => {
    setTimeout(() => setWidth(skill.level), 500);
  }, [skill.level]);

  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <span>{skill.icon}</span>
          <span className="font-medium">{skill.name}</span>
        </div>
        <span className="text-[#00ff95]">{skill.level}%</span>
      </div>
      <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
        <div
          className="h-full bg-[#00ff95] rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section className="py-20 bg-[#0a0a0a]">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-16">
          My <span className="text-[#00ff95]">Skills</span>
        </h2>
        <Card className="max-w-4xl mx-auto">
          {skills.map((skill) => (
            <SkillBar key={skill.name} skill={skill} />
          ))}
        </Card>
      </div>
    </section>
  );
};

export default Skills;