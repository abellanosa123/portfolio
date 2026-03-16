import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Tilt from 'react-parallax-tilt';
import { HiCode, HiChip, HiDatabase, HiLightningBolt } from 'react-icons/hi';

const highlights = [
  {
    icon: <HiCode className="text-primary-400" size={28} />,
    title: 'Full-Stack Dev',
    description: 'Building end-to-end web applications with modern frameworks and scalable architectures.',
  },
  {
    icon: <HiChip className="text-accent-400" size={28} />,
    title: 'IoT Systems',
    description: 'Designing smart hardware-software integrations using ESP32, Orange Pi, and real-time sensors.',
  },
  {
    icon: <HiDatabase className="text-primary-400" size={28} />,
    title: 'Data-Driven',
    description: 'Creating insightful dashboards and analytics platforms for data-driven decision making.',
  },
  {
    icon: <HiLightningBolt className="text-accent-400" size={28} />,
    title: 'Automation',
    description: 'Automating processes and workflows with smart systems and real-time monitoring.',
  },
];

const techStack = [
  'React', 'Node.js', 'Express', 'MongoDB', 'Laravel', 
  'Flutter', 'Firebase', 'ESP32', 'Orange Pi', 'REST APIs',
];

export default function About() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="about" className="section-padding relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="hidden md:block orb-2 absolute top-20 right-0 w-[400px] h-[400px] rounded-full bg-accent-500/[0.02] blur-2xl md:blur-3xl" />
      </div>

      <div className="container-custom relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 text-sm font-mono text-primary-400 glass-card rounded-full mb-4">
            01 — About Me
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-4">
            Passionate about building
            <br />
            <span className="text-gradient">intelligent solutions</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-400 rounded-full mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left - Bio */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="glass-card p-8 rounded-2xl glow-border">
              <div className="space-y-5 text-dark-200 leading-relaxed">
                <p>
                  I'm <span className="text-white font-semibold">Carl Abellanosa</span>, 
                  a dedicated developer who focuses on{' '}
                  <span className="text-primary-400 font-medium">full-stack web development</span>,{' '}
                  <span className="text-accent-400 font-medium">IoT systems</span>, and smart 
                  automation technologies.
                </p>
                <p>
                  With experience across the{' '}
                  <span className="text-white font-medium">MERN Stack</span> (MongoDB, Express, React, Node.js), 
                  <span className="text-white font-medium"> Laravel</span>,{' '}
                  <span className="text-white font-medium">Flutter</span>, and{' '}
                  <span className="text-white font-medium">Firebase</span>, I build scalable 
                  applications that seamlessly integrate with hardware components 
                  like <span className="text-accent-400 font-medium">ESP32</span> and{' '}
                  <span className="text-accent-400 font-medium">Orange Pi</span>.
                </p>
                <p>
                  I enjoy creating data-driven dashboards, real-time monitoring systems, 
                  automation workflows, and scalable web platforms that solve tangible, 
                  real-world problems. My work bridges the gap between software 
                  and hardware, bringing ideas to life through code and circuits.
                </p>
              </div>

              {/* Tech Stack Pills */}
              <div className="mt-8 pt-6 border-t border-dark-700/40">
                <p className="text-sm font-mono text-dark-400 mb-3">Technologies I work with:</p>
                <div className="flex flex-wrap gap-2">
                  {techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 text-xs font-mono font-medium text-dark-200 bg-dark-800/60 rounded-lg border border-dark-700/30 hover:border-primary-500/30 hover:text-primary-300 transition-all duration-300 cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Highlight Cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="h-full"
              >
                <Tilt
                  tiltMaxAngleX={10}
                  tiltMaxAngleY={10}
                  scale={1.05}
                  transitionSpeed={2500}
                  className="group h-full glass-card p-6 rounded-2xl hover:border-primary-500/50 hover:shadow-[0_0_30px_rgba(42,136,255,0.2)] transition-all duration-500"
                >
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-dark-800/80 mb-4 group-hover:scale-110 group-hover:bg-dark-700/80 transition-all duration-300 shadow-md">
                    {item.icon}
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-dark-300 text-sm leading-relaxed">{item.description}</p>
                </Tilt>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
