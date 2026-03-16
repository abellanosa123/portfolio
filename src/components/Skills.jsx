import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaLaravel,
  FaDatabase, FaMicrochip,
} from 'react-icons/fa';
import {
  SiExpress, SiFlutter, SiMongodb, SiFirebase, SiEspressif,
} from 'react-icons/si';
import { HiCpuChip } from 'react-icons/hi2';

const skillCategories = [
  {
    title: 'Frontend',
    color: 'from-blue-500 to-cyan-400',
    textColor: 'text-blue-400',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/20',
    skills: [
      { name: 'HTML', icon: <FaHtml5 />, level: 90, color: '#E34F26' },
      { name: 'CSS', icon: <FaCss3Alt />, level: 85, color: '#1572B6' },
      { name: 'JavaScript', icon: <FaJs />, level: 88, color: '#F7DF1E' },
      { name: 'React', icon: <FaReact />, level: 85, color: '#61DAFB' },
    ],
  },
  {
    title: 'Backend',
    color: 'from-green-500 to-emerald-400',
    textColor: 'text-green-400',
    bgColor: 'bg-green-500/10',
    borderColor: 'border-green-500/20',
    skills: [
      { name: 'Node.js', icon: <FaNodeJs />, level: 82, color: '#339933' },
      { name: 'Express', icon: <SiExpress />, level: 80, color: '#ffffff' },
      { name: 'Laravel', icon: <FaLaravel />, level: 78, color: '#FF2D20' },
    ],
  },
  {
    title: 'Mobile',
    color: 'from-purple-500 to-pink-400',
    textColor: 'text-purple-400',
    bgColor: 'bg-purple-500/10',
    borderColor: 'border-purple-500/20',
    skills: [
      { name: 'Flutter', icon: <SiFlutter />, level: 75, color: '#02569B' },
    ],
  },
  {
    title: 'Database',
    color: 'from-amber-500 to-orange-400',
    textColor: 'text-amber-400',
    bgColor: 'bg-amber-500/10',
    borderColor: 'border-amber-500/20',
    skills: [
      { name: 'MongoDB', icon: <SiMongodb />, level: 82, color: '#47A248' },
      { name: 'Firebase', icon: <SiFirebase />, level: 80, color: '#FFCA28' },
    ],
  },
  {
    title: 'IoT / Embedded',
    color: 'from-teal-500 to-cyan-400',
    textColor: 'text-teal-400',
    bgColor: 'bg-teal-500/10',
    borderColor: 'border-teal-500/20',
    skills: [
      { name: 'ESP32', icon: <SiEspressif />, level: 85, color: '#E7352C' },
      { name: 'Orange Pi', icon: <HiCpuChip />, level: 78, color: '#FF6600' },
    ],
  },
];

function SkillBar({ name, icon, level, color, delay }) {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="group"
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2.5">
          <span className="text-lg" style={{ color }}>{icon}</span>
          <span className="text-sm font-medium text-dark-100 group-hover:text-white transition-colors">
            {name}
          </span>
        </div>
        <span className="text-xs font-mono text-dark-400 group-hover:text-primary-400 transition-colors">
          {level}%
        </span>
      </div>
      <div className="h-2 bg-dark-800/80 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay: delay + 0.3, ease: 'easeOut' }}
          className="h-full rounded-full relative"
          style={{
            background: `linear-gradient(90deg, ${color}88, ${color})`,
          }}
        >
          <div
            className="absolute inset-0 rounded-full opacity-50"
            style={{
              background: `linear-gradient(90deg, transparent, ${color}40)`,
            }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="skills" className="section-padding relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="hidden md:block orb-1 absolute bottom-0 left-1/4 w-[500px] h-[500px] rounded-full bg-primary-500/[0.02] blur-2xl md:blur-3xl" />
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
            02 — Skills
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-4">
            My <span className="text-gradient">Technical Arsenal</span>
          </h2>
          <p className="text-dark-300 max-w-2xl mx-auto">
            A comprehensive toolkit spanning frontend, backend, mobile, database, and IoT technologies.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-400 rounded-full mx-auto mt-4" />
        </motion.div>

        {/* Skill Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
              className={`glass-card p-6 rounded-2xl hover:border-dark-600/50 transition-all duration-500 hover:-translate-y-1 ${
                category.title === 'IoT / Embedded' ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-10 h-10 rounded-xl ${category.bgColor} border ${category.borderColor} flex items-center justify-center`}>
                  <span className={`text-sm font-bold ${category.textColor}`}>
                    {category.skills.length}
                  </span>
                </div>
                <div>
                  <h3 className="text-white font-semibold">{category.title}</h3>
                  <div className={`h-0.5 w-12 bg-gradient-to-r ${category.color} rounded-full mt-1`} />
                </div>
              </div>

              {/* Skills */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIdx) => (
                  <SkillBar
                    key={skill.name}
                    {...skill}
                    delay={catIdx * 0.1 + skillIdx * 0.08}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
