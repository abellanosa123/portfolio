import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiAcademicCap, HiLightningBolt, HiCog, HiGlobeAlt } from 'react-icons/hi';

const milestones = [
  {
    icon: <HiAcademicCap size={24} />,
    title: 'Foundation in Software Development',
    description:
      'Started my journey learning programming fundamentals, web technologies, and building my first applications using HTML, CSS, and JavaScript. Developed a strong foundation in computer science concepts and problem-solving.',
    tags: ['HTML/CSS', 'JavaScript', 'Python', 'Problem Solving'],
    color: 'from-blue-500 to-cyan-400',
    dotColor: 'bg-blue-400',
  },
  {
    icon: <HiCog size={24} />,
    title: 'Full-Stack Web Development',
    description:
      'Expanded into full-stack development, mastering the MERN stack and Laravel. Built scalable web applications, REST APIs, and data-driven dashboards for real-world use cases including monitoring and management systems.',
    tags: ['MERN Stack', 'Laravel', 'REST APIs', 'Databases'],
    color: 'from-primary-500 to-primary-400',
    dotColor: 'bg-primary-400',
  },
  {
    icon: <HiLightningBolt size={24} />,
    title: 'IoT & Embedded Systems',
    description:
      'Dove into the world of IoT and embedded systems, working with ESP32, Orange Pi, and various sensors. Designed intelligent systems that bridge hardware and software for smart automation and real-time monitoring.',
    tags: ['ESP32', 'Orange Pi', 'Sensors', 'Automation'],
    color: 'from-accent-500 to-teal-400',
    dotColor: 'bg-accent-400',
  },
  {
    icon: <HiGlobeAlt size={24} />,
    title: 'Building Real-World Solutions',
    description:
      'Currently focused on designing and deploying production-ready applications and IoT systems. Passionate about creating technology that solves tangible problems — from smart irrigation to surveillance dashboards.',
    tags: ['System Architecture', 'Deployment', 'Innovation', 'Impact'],
    color: 'from-purple-500 to-pink-400',
    dotColor: 'bg-purple-400',
  },
];

export default function Experience() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="experience" className="section-padding relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="orb-1 absolute top-0 left-1/3 w-[400px] h-[400px] rounded-full bg-accent-500/[0.03] blur-3xl" />
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
            04 — Experience
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-4">
            My Learning <span className="text-gradient">Journey</span>
          </h2>
          <p className="text-dark-300 max-w-2xl mx-auto">
            A continuous path of growth, experimentation, and building real-world systems.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-400 rounded-full mx-auto mt-4" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500/40 via-accent-500/20 to-transparent md:-translate-x-0.5" />

          <div className="space-y-12 md:space-y-16">
            {milestones.map((item, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 mt-8 md:mt-10">
                    <span className={`block w-3 h-3 rounded-full ${item.dotColor} shadow-lg ring-4 ring-dark-950`} />
                  </div>

                  {/* Content Card */}
                  <div className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${isLeft ? 'md:pr-4 md:mr-auto' : 'md:pl-4 md:ml-auto'}`}>
                    <div className="glass-card p-6 md:p-8 rounded-2xl hover:border-dark-600/50 transition-all duration-500 group hover:-translate-y-1">
                      {/* Icon */}
                      <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${item.color} text-white mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        {item.icon}
                      </div>

                      <h3 className="text-xl font-display font-bold text-white mb-3">
                        {item.title}
                      </h3>
                      <p className="text-dark-300 text-sm leading-relaxed mb-4">
                        {item.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-1 text-[11px] font-mono font-medium text-dark-200 bg-dark-800/60 rounded-md border border-dark-700/30"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
