 import { motion } from 'framer-motion';
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython, 
  FaJava, FaGitAlt, FaAws, FaDocker, FaPhp
} from 'react-icons/fa';
import { 
  SiMongodb, SiExpress, SiTailwindcss, SiTypescript, SiNextdotjs,
  SiAngular, SiVuedotjs, SiRedux, SiBootstrap, SiGraphql,
  SiPostman, SiFirebase, SiSpring, SiFlask, SiKotlin, SiCplusplus
} from 'react-icons/si';
import { DiDjango } from 'react-icons/di';

const skillGroups = [
  {
    category: "Frontend",
    color: "from-blue-500 to-blue-600",
    skills: [
      { name: "HTML", level: 9, icon: <FaHtml5 className="text-orange-500" /> },
      { name: "CSS", level: 9, icon: <FaCss3Alt className="text-blue-400" /> },
      { name: "JavaScript", level: 7, icon: <FaJs className="text-yellow-400" /> },
      { name: "React", level: 7, icon: <FaReact className="text-blue-300" /> },
      { name: "Bootstrap", level: 7, icon: <SiBootstrap className="text-purple-500" /> }
    ]
  },
  {
    category: "Backend",
    color: "from-purple-500 to-purple-600",
    skills: [
      { name: "Node.js", level: 6, icon: <FaNodeJs className="text-green-500" /> },
      { name: "Express", level: 6, icon: <SiExpress className="text-gray-100" /> },
      { name: "Python", level: 8, icon: <FaPython className="text-blue-400" /> },
      { name: "Flask", level: 4, icon: <SiFlask className="text-black dark:text-white" /> },
      { name: "PHP", level: 4, icon: <FaPhp className="text-purple-400" /> }
    ]
  },
  {
    category: "Databases",
    color: "from-green-500 to-green-600",
    skills: [
      { name: "MongoDB", level: 7, icon: <SiMongodb className="text-green-600" /> },
      { name: "SQL", level: 5, icon: <SiPostman className="text-blue-500" /> },
      { name: "Mongoose", level: 4, icon: <SiMongodb className="text-green-400" /> },
      { name: "GraphQL", level: 5, icon: <SiGraphql className="text-pink-500" /> },
      { name: "Postman", level: 5, icon: <SiPostman className="text-orange-500" /> }
    ]
  },
  {
    category: "Mobile & Frameworks",
    color: "from-rose-500 to-rose-600",
    skills: [
      { name: "React Native", level: 5, icon: <FaReact className="text-blue-300" /> },
      { name: "Next.js", level: 5, icon: <SiNextdotjs className="text-black dark:text-white" /> },
      { name: "Angular", level: 1, icon: <SiAngular className="text-red-500" /> },
      { name: "Vue", level: 4, icon: <SiVuedotjs className="text-green-500" /> },
      { name: "Django", level: 2, icon: <DiDjango className="text-green-700" /> }
    ]
  },
  {
    category: "Tools & DevOps",
    color: "from-amber-500 to-amber-600",
    skills: [
      { name: "Git/Github", level: 8, icon: <FaGitAlt className="text-black dark:text-white" /> },
      { name: "AWS", level: 4, icon: <FaAws className="text-orange-500" /> },
      { name: "Docker", level: 3, icon: <FaDocker className="text-blue-400" /> },
      { name: "Firebase", level: 3, icon: <SiFirebase className="text-yellow-500" /> },
      { name: "Redux", level: 5, icon: <SiRedux className="text-purple-400" /> }
    ]
  },
  {
    category: "Other Languages",
    color: "from-indigo-500 to-indigo-600",
    skills: [
      { name: "TypeScript", level: 4, icon: <SiTypescript className="text-blue-600" /> },
      { name: "Java", level: 3, icon: <FaJava className="text-red-500" /> },
      { name: "Spring", level: 3, icon: <SiSpring className="text-green-500" /> },
      { name: "Kotlin", level: 2, icon: <SiKotlin className="text-purple-500" /> },
      { name: "C/C++", level: 6, icon: <SiCplusplus className="text-blue-500" /> }
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 relative">
          Skills
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-blue-500 to-teal-500"></span>
        </h2>

        <div className="space-y-12">
          {skillGroups.map((group, i) => (
            <div key={i} className="mb-8">
              <h3 className="text-xl font-semibold mb-6 text-gray-800 dark:text-white">
                {group.category}
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                {group.skills.map((skill, j) => (
                  <motion.div
                    key={j}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: j * 0.1 }}
                    className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="text-2xl">
                        {skill.icon}
                      </div>
                      <span className="font-medium text-gray-800 dark:text-white">
                        {skill.name}
                      </span>
                    </div>
                    
                    {/* Animated proficiency bar */}
                    <div className="w-full h-2.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level * 10}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className={`h-full rounded-full bg-gradient-to-r ${group.color}`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}