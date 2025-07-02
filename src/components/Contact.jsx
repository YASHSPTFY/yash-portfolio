 import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaXTwitter, FaPaperPlane } from 'react-icons/fa6';

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace with your preferred contact method
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    console.log('Form data:', data); // For testing
    
    // Option 1: Open default mail client
    window.location.href = `mailto:your.email@example.com?subject=Contact from Portfolio&body=Name: ${data.name}%0D%0AEmail: ${data.email}%0D%0AMessage: ${data.message}`;
    
    // Option 2: Show success message
    alert("Thanks for your message! I'll get back to you soon.");
    e.target.reset();
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold mb-6 relative inline-block">
            Get In Touch
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-blue-500 to-teal-400"></span>
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">
            Have a project in mind or want to connect? Drop me a message!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="space-y-6 bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-lg"
          >
            <div>
              <label htmlFor="name" className="block mb-2 font-medium text-gray-700 dark:text-gray-300">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition-all"
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block mb-2 font-medium text-gray-700 dark:text-gray-300">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition-all"
                required
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block mb-2 font-medium text-gray-700 dark:text-gray-300">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition-all"
                required
              ></textarea>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-teal-500 text-white font-medium rounded-lg hover:shadow-lg transition-all flex items-center justify-center gap-2"
            >
              <FaPaperPlane /> Send Message
            </motion.button>
          </motion.form>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-8 text-center lg:text-left"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
                Let's Connect
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Prefer social media? Reach out through these platforms:
              </p>
            </div>
            
            <div className="flex justify-center lg:justify-start gap-6">
              <a
                href="https://github.com/YASHSPTFY"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              
              <a
                href="https://www.linkedin.com/in/yash-desai-b45932370"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl text-gray-700 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-400 transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              
              <a
                href="https://x.com/Yash5102"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-200 transition-colors"
                aria-label="X (Twitter)"
              >
                <FaXTwitter />
              </a>
            </div>

            <div className="pt-8">
              <h4 className="text-lg font-medium mb-2 text-gray-800 dark:text-white">
                Direct Email
              </h4>
              <a
                href="mailto:ysd5102@gmail.com"
                className="text-blue-600 dark:text-blue-400 hover:underline text-lg"
              >
                 ysd5102@gmail.com
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}