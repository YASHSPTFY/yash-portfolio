 import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

// Words distributed evenly without photo constraints
const TECH_WORDS = [
  // Left cluster
  { text: "React", x: "15%", y: "20%", size: "text-lg" },
  { text: "Node.js", x: "10%", y: "35%", size: "text-xl" },
  { text: "MongoDB", x: "20%", y: "50%", size: "text-md" },
  
  // Right cluster 
  { text: "TypeScript", x: "75%", y: "25%", size: "text-xl" },
  { text: "Next.js", x: "80%", y: "40%", size: "text-lg" },
  
  // Center-top
  { text: "Clean Code", x: "45%", y: "15%", size: "text-lg" },
  
  // Bottom
  { text: "Docker", x: "25%", y: "75%", size: "text-md" },
  { text: "REST API", x: "70%", y: "80%", size: "text-md" },
  { text: "Testing", x: "50%", y: "85%", size: "text-md" }
];

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-white dark:bg-gray-900 overflow-hidden">
      {/* Dynamic Word Cloud */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {TECH_WORDS.map((word, i) => (
          <motion.div
            key={i}
            initial={{ x: word.x, y: word.y, opacity: 0.3 }}
            animate={{ 
              x: [`${word.x}`, `${parseInt(word.x) + 3}%`],
              y: [`${word.y}`, `${parseInt(word.y) + 1}%`]
            }}
            transition={{
              duration: 40 + Math.random() * 20,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
            className={`absolute ${word.size} text-gray-400 dark:text-gray-500 font-medium`}
            style={{ left: word.x, top: word.y }}
          >
            {word.text}
          </motion.div>
        ))}
      </div>

      {/* Gradient bubbles */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-20 left-20 w-40 h-40 bg-blue-400 rounded-full filter blur-3xl opacity-10 dark:opacity-15"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 bg-teal-400 rounded-full filter blur-3xl opacity-10 dark:opacity-15"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">
              YASH DESAIhbb
            </span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-700 dark:text-gray-300">
            <TypeAnimation
              sequence={[
                'TypeScript Expert',
                2000,
                'Full-Stack Developer',
                2000,
                'Node.js Engineer',
                2000
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
            />
          </h2>

          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            I build scalable web applications with modern technologies.<br/>
            Passionate about clean code and intuitive user experiences.
          </p>

          <div className="flex justify-center gap-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-teal-500 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-all"
            >
              View Projects
            </motion.a>
            
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="px-8 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg font-medium hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors"
            >
              Contact Me
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}