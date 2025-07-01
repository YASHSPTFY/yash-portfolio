import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaPlayCircle } from 'react-icons/fa';
import MCUImage from '../assets/mcu.jpeg';
import GameImage from '../assets/game.jpeg';
import PassopImage from '../assets/Passop.jpeg';

const projects = [
  {
    title: "MCU Website",
    description: "A responsive Marvel Cinematic Universe fan site featuring character profiles and movie timelines.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: MCUImage,
    github: "https://github.com/YASHSPTFY/mcu-website",
    demo: "https://yashsptfy.github.io/mcu-website", // Your direct live link
    highlights: [
      "Implemented smooth CSS animations",
      "Mobile-first responsive design",
      "Vanilla JS DOM manipulation"
    ]
  },
  {
    title: "Password Manager",
    description: "Full-stack application for secure password storage with encryption and biometric login.",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    image: PassopImage,
    demo: "https://drive.google.com/file/d/your-password-manager-video/view", // Video demo link
    github: "https://github.com/YASHSPTFY/password-manager",
    highlights: [
      "JWT authentication",
      "AES-256 encryption", 
      "React context for state management"
    ]
  },
  {
    title: "Glass Stepping Stone Game",
    description: "Desktop application simulating light refraction through glass structures.",
    tech: ["Java", "Java Swing", "AWT"],
    image: GameImage,
    demo: "https://drive.google.com/file/d/your-game-video/view", // Video demo link
    github: "https://github.com/YASHSPTFY/glass-game",
    highlights: [
      "Physics-based rendering",
      "Interactive UI controls",
      "Object-oriented design patterns"
    ]
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12 relative"
        >
          My Projects
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-blue-600"></span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              {/* Project Cover */}
              <div className="h-48 relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <ul className="space-y-2 mb-6">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span className="text-gray-700 dark:text-gray-300 text-sm">{highlight}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap gap-4">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    <FaGithub /> Code
                  </a>
                  
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    {project.title === "MCU Website" ? (
                      <FaExternalLinkAlt /> 
                    ) : (
                      <FaPlayCircle />
                    )}
                    {project.title === "MCU Website" ? "Live Demo" : "Watch Demo"}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}