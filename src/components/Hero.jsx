import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { HiArrowDown, HiOutlineMail } from 'react-icons/hi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import profileImg from '../assets/prof.jpg';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center section-padding overflow-hidden"
    >
      {/* Animated Background Orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="orb-1 absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-primary-500/[0.04] blur-3xl" />
        <div className="orb-2 absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-accent-500/[0.04] blur-3xl" />
        <div className="orb-1 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary-600/[0.02] blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left order-2 lg:order-1"
          >
            {/* Status Badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
              <span className="w-2.5 h-2.5 rounded-full bg-accent-400 animate-pulse" />
              <span className="text-sm font-medium text-dark-200">Available for opportunities</span>
            </motion.div>

            {/* Greeting */}
            <motion.p variants={itemVariants} className="text-dark-300 text-lg md:text-xl font-medium mb-3">
              Hello, I'm
            </motion.p>

            {/* Name */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-4"
            >
              <span className="text-white">Carl</span>
              <br />
              <span className="text-gradient">Abellanosa</span>
            </motion.h1>

            {/* Title with Typing Animation */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center sm:justify-start gap-4 mb-6 h-12">
              <div className="h-0.5 w-12 bg-gradient-to-r from-primary-500 to-accent-400 rounded-full" />
              <div className="text-xl md:text-2xl font-mono font-bold text-primary-400">
                <span>I'm a </span>
                <TypeAnimation
                  sequence={[
                    'Full-Stack Developer', 2000,
                    'IoT Enthusiast', 2000,
                    'System Architect', 2000,
                    'Problem Solver', 2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  className="text-white"
                  repeat={Infinity}
                />
              </div>
            </motion.div>

            {/* Description */}
            <motion.p variants={itemVariants} className="text-dark-300 text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8">
              I'm Carl Abellanosa, an aspiring Full-Stack Developer and IoT enthusiast 
              passionate about building intelligent systems that connect software and 
              hardware to solve real-world problems.
            </motion.p>

            {/* Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-8">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-primary-600 to-primary-500 text-white font-semibold shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 hover:scale-105 transition-all duration-300"
              >
                View Projects
                <HiArrowDown className="group-hover:translate-y-1 transition-transform duration-300" />
              </a>
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl glass-card text-white font-semibold hover:border-primary-500/40 hover:scale-105 transition-all duration-300"
              >
                <HiOutlineMail className="text-primary-400" />
                Contact Me
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex items-center justify-center lg:justify-start gap-4">
              <span className="text-sm text-dark-400">Find me on</span>
              <div className="flex gap-3">
                <a
                  href="https://github.com/abellanosa123"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg glass-card text-dark-300 hover:text-white hover:border-primary-500/40 transition-all duration-300 hover:scale-110"
                  aria-label="GitHub"
                >
                  <FaGithub size={20} />
                </a>
                <a
                  href="https://linkedin.com/in/carlabellanosa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg glass-card text-dark-300 hover:text-white hover:border-primary-500/40 transition-all duration-300 hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin size={20} />
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            className="relative flex justify-center order-1 lg:order-2"
          >
            <div className="relative">
              {/* Glowing Ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-500/20 to-accent-500/20 blur-2xl scale-110 animate-pulse" />
              
              {/* Image Container */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-2 border-dark-700/50 shadow-2xl shadow-primary-500/10">
                <img
                  src={profileImg}
                  alt="Carl Abellanosa"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950/30 to-transparent" />
              </div>

              {/* Floating Badges */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -right-4 px-4 py-2 glass-card rounded-xl shadow-lg"
              >
                <span className="text-sm font-semibold text-accent-400">🚀 IoT</span>
              </motion.div>

              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-4 -left-4 px-4 py-2 glass-card rounded-xl shadow-lg"
              >
                <span className="text-sm font-semibold text-primary-400">⚡ Full-Stack</span>
              </motion.div>

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-1/2 -right-12 px-3 py-1.5 glass-card rounded-lg shadow-lg hidden sm:block"
              >
                <span className="text-xs font-mono text-dark-200">{'<code/>'}</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
        >
          <span className="text-xs text-dark-400 tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-5 h-8 rounded-full border-2 border-dark-600 flex items-start justify-center p-1"
          >
            <div className="w-1 h-2 rounded-full bg-primary-400" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
