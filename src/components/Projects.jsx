import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Tilt from 'react-parallax-tilt';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { HiChip, HiCode, HiDesktopComputer, HiDatabase } from 'react-icons/hi';

const projects = [
  {
    id: 1,
    title: 'FarmFlow',
    subtitle: 'Intelligent Water Distribution System',
    description:
      'An IoT-based irrigation management system designed for sustainable rice field irrigation in Dalwangan. The system integrates ESP32, Orange Pi, sensors, and a mobile application to monitor and control water distribution in real time.',
    technologies: ['ESP32', 'Orange Pi', 'Flutter', 'Firebase', 'IoT Sensors', 'Real-time Data'],
    category: 'iot',
    icon: <HiChip size={22} />,
    gradient: 'from-teal-500 to-cyan-400',
    bgGradient: 'from-teal-500/10 to-cyan-500/5',
    github: '#',
    demo: '#',
    featured: true,
  },
  {
    id: 2,
    title: 'CCTV Monitoring Dashboard',
    subtitle: 'Real-time Surveillance System',
    description:
      'A comprehensive MERN stack web application for CCTV monitoring and incident management. Features real-time statistics, detailed log management, report generation, and a responsive admin dashboard.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Chart.js', 'jsPDF'],
    category: 'fullstack',
    icon: <HiDesktopComputer size={22} />,
    gradient: 'from-primary-500 to-blue-400',
    bgGradient: 'from-primary-500/10 to-blue-500/5',
    github: '#',
    demo: '#',
    featured: true,
  },
  {
    id: 3,
    title: 'Multi-Tenant Management',
    subtitle: 'Scalable Management Platform',
    description:
      'A scalable multi-tenant management system built with Laravel and modern frontend technologies. Supports multiple organizations, user roles, and comprehensive data management with REST API integration.',
    technologies: ['Laravel', 'MySQL', 'React', 'REST API', 'Authentication'],
    category: 'fullstack',
    icon: <HiCode size={22} />,
    gradient: 'from-purple-500 to-pink-400',
    bgGradient: 'from-purple-500/10 to-pink-500/5',
    github: '#',
    demo: '#',
    featured: false,
  },
  {
    id: 4,
    title: 'Data Monitoring Dashboards',
    subtitle: 'Analytics & Visualization Platform',
    description:
      'Interactive data monitoring dashboards with real-time updates, customizable charts, and comprehensive analytics. Built for tracking key metrics and generating actionable insights from streaming data.',
    technologies: ['React', 'Firebase', 'Chart.js', 'Node.js', 'WebSockets'],
    category: 'data',
    icon: <HiDatabase size={22} />,
    gradient: 'from-amber-500 to-orange-400',
    bgGradient: 'from-amber-500/10 to-orange-500/5',
    github: '#',
    demo: '#',
    featured: false,
  },
];

const filters = [
  { key: 'all', label: 'All Projects' },
  { key: 'fullstack', label: 'Full-Stack' },
  { key: 'iot', label: 'IoT' },
  { key: 'data', label: 'Data' },
];

function ProjectCard({ project, index }) {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      layout
      className={`${project.featured ? 'md:col-span-2 lg:col-span-1' : ''}`}
    >
      <Tilt
        tiltMaxAngleX={5}
        tiltMaxAngleY={5}
        scale={1.02}
        transitionSpeed={2500}
        className="group h-full glass-card rounded-2xl overflow-hidden hover:border-dark-600/60 transition-all duration-500 hover:shadow-[0_0_40px_rgba(42,136,255,0.15)] flex flex-col"
      >
        {/* Card Header */}
        <div className={`relative h-48 bg-gradient-to-br ${project.bgGradient} p-6 flex flex-col justify-between overflow-hidden`}>
        {/* Decorative Circles */}
        <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-white/[0.03]" />
        <div className="absolute -bottom-12 -left-12 w-40 h-40 rounded-full bg-white/[0.02]" />
        
        <div className="flex items-center justify-between relative z-10">
          <div className={`p-2.5 rounded-xl bg-gradient-to-br ${project.gradient} text-white shadow-lg`}>
            {project.icon}
          </div>
          {project.featured && (
            <span className="px-3 py-1 text-xs font-mono font-medium text-accent-400 bg-dark-900/60 rounded-full border border-accent-500/20">
              Featured
            </span>
          )}
        </div>
        
        <div className="relative z-10">
          <h3 className="text-xl font-display font-bold text-white">{project.title}</h3>
          <p className="text-dark-200 text-sm">{project.subtitle}</p>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-6">
        <p className="text-dark-300 text-sm leading-relaxed mb-5">
          {project.description}
        </p>

        {/* Tech Tags */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 text-[11px] font-mono font-medium text-dark-200 bg-dark-800/60 rounded-md border border-dark-700/30"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3 mt-auto">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-dark-800/60 text-dark-200 text-sm font-medium border border-dark-700/30 hover:border-primary-500/30 hover:text-white hover:bg-dark-800/80 transition-all duration-300 transform hover:scale-[1.03]"
          >
            <FaGithub size={16} />
            GitHub
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gradient-to-r ${project.gradient} text-white text-sm font-semibold shadow-lg hover:shadow-xl hover:scale-[1.03] transition-all duration-300`}
          >
            <FaExternalLinkAlt size={13} />
            Live Demo
          </a>
        </div>
      </div>
      </Tilt>
    </motion.div>
  );
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="section-padding relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="hidden md:block orb-2 absolute top-1/2 right-0 w-[500px] h-[500px] rounded-full bg-primary-500/[0.02] blur-2xl md:blur-3xl" />
      </div>

      <div className="container-custom relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 text-sm font-mono text-primary-400 glass-card rounded-full mb-4">
            03 — Projects
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-4">
            Featured <span className="text-gradient">Work</span>
          </h2>
          <p className="text-dark-300 max-w-2xl mx-auto">
            A selection of projects showcasing my expertise in full-stack development, IoT integration, and data visualization.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-400 rounded-full mx-auto mt-4" />
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-5 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeFilter === filter.key
                  ? 'bg-gradient-to-r from-primary-600 to-primary-500 text-white shadow-lg shadow-primary-500/20'
                  : 'glass-card text-dark-300 hover:text-white hover:border-dark-600/60'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid md:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
