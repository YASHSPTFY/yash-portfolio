 import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-800 px-6 py-12">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Compact Header */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-2">
            About Me
          </h1>
          <p className="text-xl text-blue-500 dark:text-teal-400 mb-6">
            Building Future-Ready Digital Solutions
          </p>

          {/* Core Content */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-6"
          >
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-tight">
              I'm <span className="font-semibold text-gray-800 dark:text-white">Yash Desai</span>, a full-stack developer creating modern web applications that blend technical excellence with intuitive user experiences. My solutions leverage strategic AI integration to deliver smarter, more efficient systems.
            </p>

            {/* Key Points Grid */}
            <div className="grid md:grid-cols-2 gap-6 text-left mt-8">
              <div className="bg-white dark:bg-gray-700/50 p-5 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                  Technical Edge
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Specializing in React, Node.js, and Python ecosystems, enhanced with AI-assisted development for rapid prototyping and performance optimization.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-700/50 p-5 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                  Value-Driven
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Focused on delivering measurable business impact through clean architecture, scalable solutions, and maintainable codebases.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-6">
              <a
                href="#contact"
                className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-teal-500 text-white rounded-lg font-semibold text-lg hover:shadow-lg transition-all"
              >
                Let's Collaborate
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}