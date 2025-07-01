 import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 relative">
          Get In Touch
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-blue-600"></span>
        </h2>
        
        <div className="max-w-2xl mx-auto">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block mb-2 font-medium">Name</label>
              <input 
                type="text" 
                id="name" 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600"
                required 
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 font-medium">Email</label>
              <input 
                type="email" 
                id="email" 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600"
                required 
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2 font-medium">Message</label>
              <textarea 
                id="message" 
                rows="5" 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600"
                required
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition w-full"
            >
              Send Message
            </button>
          </form>
          
          <div className="flex justify-center gap-6 mt-12">
            <a 
              href="https://github.com/YASHSPTFY" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-2xl text-gray-700 dark:text-gray-300 hover:text-blue-600"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a 
              href="https://www.linkedin.com/in/yash-desai-b45932370" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-2xl text-gray-700 dark:text-gray-300 hover:text-blue-600"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a 
              href="https://x.com/Yash5102" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-2xl text-gray-700 dark:text-gray-300 hover:text-blue-600"
              aria-label="X (formerly Twitter)"
            >
              <FaXTwitter />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}