 import { color, motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

// Words distributed evenly without photo constraints
const TECH_WORDS =  [
  // Top-left
  { text: "HTML", x: "5%", y: "10%", size: "text-md" },
  { text: "CSS", x: "12%", y: "5%", size: "text-md" },
  { text: "JavaScript", x: "25%", y: "8%", size: "text-lg" },
  { text: "Bootstrap", x: "18%", y: "12%", size: "text-md" },
  { text: "SASS", x: "10%", y: "18%", size: "text-md" },

  // Left-middle
  { text: "React", x: "15%", y: "25%", size: "text-lg" },
  { text: "Angular", x: "28%", y: "22%", size: "text-lg" },
  { text: "Vue.js", x: "10%", y: "30%", size: "text-md" },
  { text: "Next.js", x: "22%", y: "33%", size: "text-xl" },
  { text: "Redux", x: "8%", y: "40%", size: "text-md" },
  { text: "Tailwind CSS", x: "27%", y: "40%", size: "text-md" },

  // Center-top
  { text: "Clean Code", x: "47%", y: "12%", size: "text-lg" },
  { text: "TypeScript", x: "58%", y: "18%", size: "text-md" },
  { text: "REST API", x: "47%", y: "20%", size: "text-md" },

  // Center-middle
  { text: "Express", x: "35%", y: "45%", size: "text-md" },
  { text: "Node.js", x: "20%", y: "50%", size: "text-xl" },
  { text: "MongoDB", x: "30%", y: "53%", size: "text-md" },
  { text: "MySQL", x: "42%", y: "50%", size: "text-md" },
  { text: "Firebase", x: "15%", y: "60%", size: "text-md" },
  { text: "Prisma", x: "40%", y: "60%", size: "text-md" },

  // Center-right
  { text: "Java", x: "60%", y: "50%", size: "text-lg" },
  { text: "Python", x: "70%", y: "45%", size: "text-lg" },
  { text: "Flask", x: "85%", y: "48%", size: "text-xl" },
  { text: "Django", x: "75%", y: "55%", size: "text-md" },
  { text: "GraphQL", x: "65%", y: "58%", size: "text-md" },

  // Top-right
  { text: "Git", x: "78%", y: "20%", size: "text-xl" },
  { text: "GitHub", x: "88%", y: "25%", size: "text-md" },
  { text: "Bitbucket", x: "92%", y: "35%", size: "text-md" },
  { text: "WordPress", x: "80%", y: "40%", size: "text-lg" },

  // Bottom-left
  { text: "JQuery", x: "10%", y: "75%", size: "text-md" },
  { text: "AJAX", x: "25%", y: "70%", size: "text-md" },
  { text: "Vite", x: "20%", y: "78%", size: "text-md" },
  { text: "Gulp", x: "15%", y: "85%", size: "text-md" },

  // Bottom-center
  { text: "Docker", x: "42%", y: "77%", size: "text-md" },
  { text: "Testing", x: "52%", y: "83%", size: "text-md" },
  { text: "Jest", x: "40%", y: "85%", size: "text-md" },
  { text: "Postman", x: "50%", y: "72%", size: "text-md" },
  { text: "Swagger", x: "60%", y: "75%", size: "text-md" },

  // Bottom-right
  { text: "Nginx", x: "70%", y: "70%", size: "text-md" },
  { text: "Linux", x: "78%", y: "78%", size: "text-md" },
  { text: "AWS", x: "88%", y: "72%", size: "text-md" },
  { text: "Netlify", x: "82%", y: "85%", size: "text-md" },
  { text: "Vercel", x: "90%", y: "90%", size: "text-md" },

  // Others
  { text: "SEO", x: "60%", y: "30%", size: "text-md" },
  { text: "Agile", x: "67%", y: "35%", size: "text-md" }
]
;

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
              YASH DESAI
            </span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-700 dark:text-gray-300">
            <TypeAnimation
              sequence={[
                'React Expert',
                1000,
                'Full-Stack Developer',
                1000,
                'MERN Developer',
                1000,
                'Node JS Engineer',
                1000
                
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