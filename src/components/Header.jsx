 import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaSun, FaMoon } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

export default function Header({ darkMode, setDarkMode }) {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const roles = ['Full-Stack Developer', 'React Specialist', 'Node.js Engineer', 'TypeScript Enthusiast'];
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      // Update active section based on scroll position
      const sections = ['home', 'projects', 'skills', 'about', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    const roleInterval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(roleInterval);
    };
  }, []);

  const handleNavClick = (section) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'py-2 bg-white/90 dark:bg-gray-900/90 shadow-sm' : 'py-4 bg-transparent'}`}>
      <div className="container mx-auto px-6">
        <nav className="flex justify-between items-center">
          {/* Logo/Name with animation */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col"
          >
            <a 
              href="#home" 
              className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-teal-400 bg-clip-text text-transparent"
              onClick={() => handleNavClick('home')}
            >
              YASH DESAI
            </a>
            <motion.span 
              key={currentRole}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="text-xs text-gray-500 dark:text-gray-400 mt-1"
            >
              {roles[currentRole]}
            </motion.span>
          </motion.div>

          {/* Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {['home', 'projects', 'skills', 'about', 'contact'].map((item) => (
              <a 
                href={`#${item}`} 
                key={item}
                className={`relative group font-medium ${activeSection === item ? 'text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-gray-300'} hover:text-blue-600 dark:hover:text-blue-400 transition-colors`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item);
                }}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
                {activeSection === item && (
                  <motion.span 
                    layoutId="activeDot"
                    className="absolute -bottom-1 left-1/2 w-2 h-2 bg-blue-500 rounded-full -translate-x-1/2"
                  />
                )}
                <span className="absolute left-0 -bottom-0.5 h-0.5 bg-blue-500 w-0 group-hover:w-full transition-all duration-300" />
              </a>
            ))}

            {/* Social Icons */}
            <div className="flex gap-4 ml-6">
              <a 
                href="https://github.com/YASHSPTFY" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <FaGithub className="text-lg" />
              </a>
              <a 
                href="https://www.linkedin.com/in/yash-desai-b45932370" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-700 dark:hover:text-blue-400 transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-lg" />
              </a>
              <a 
                href="https://x.com/Yash5102" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
                aria-label="X (formerly Twitter)"
              >
                <FaXTwitter className="text-lg" />
              </a>
            </div>
          </div>

          {/* CTA & Dark Mode */}
          <div className="flex items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
              onClick={() => handleNavClick('contact')}
            >
              Let's Talk
            </motion.button>

            <button 
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-600" />}
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}