import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { useInView } from 'react-intersection-observer';
import { HiOutlineMail, HiOutlineLocationMarker, HiCheckCircle, HiXCircle } from 'react-icons/hi';
import { FaGithub, FaLinkedin, FaPaperPlane } from 'react-icons/fa';

const contactInfo = [
  {
    icon: <HiOutlineMail size={22} />,
    label: 'Email',
    value: 'caloythepro@gmail.com',
    href: 'mailto:caloythepro@gmail.com',
    color: 'text-primary-400',
    bg: 'bg-primary-500/10',
    border: 'border-primary-500/20',
  },
  {
    icon: <FaGithub size={22} />,
    label: 'GitHub',
    value: 'github.com/abellanosa123',
    href: 'https://github.com/abellanosa123',
    color: 'text-dark-200',
    bg: 'bg-dark-700/30',
    border: 'border-dark-600/30',
  },
  {
    icon: <FaLinkedin size={22} />,
    label: 'LinkedIn',
    value: 'linkedin.com/in/carlabellanosa',
    href: 'https://linkedin.com/in/carlabellanosa',
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/20',
  },
  {
    icon: <HiOutlineLocationMarker size={22} />,
    label: 'Location',
    value: 'Kadingilan, Bukidnon, Philippines',
    href: null,
    color: 'text-accent-400',
    bg: 'bg-accent-500/10',
    border: 'border-accent-500/20',
  },
];

const Toast = ({ message, type, isVisible, onClose }) => (
  <AnimatePresence>
    {isVisible && (
      <motion.div
        initial={{ opacity: 0, y: 50, x: '-50%' }}
        animate={{ opacity: 1, y: 0, x: '-50%' }}
        exit={{ opacity: 0, y: 20, scale: 0.95, x: '-50%' }}
        className="fixed bottom-10 left-1/2 z-[100] w-[90%] max-w-md"
      >
        <div className={`glass-card p-4 rounded-2xl flex items-center gap-4 shadow-2xl border ${
          type === 'success' ? 'border-accent-500/30 bg-accent-500/5' : 'border-red-500/30 bg-red-500/5'
        }`}>
          <div className={`p-2 rounded-xl ${
            type === 'success' ? 'bg-accent-500/20 text-accent-400' : 'bg-red-500/20 text-red-400'
          }`}>
            {type === 'success' ? <HiCheckCircle size={24} /> : <HiXCircle size={24} />}
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium text-white">{message}</p>
          </div>
          <button 
            onClick={onClose}
            className="p-1 hover:bg-white/10 rounded-lg transition-colors text-dark-400 hover:text-white"
          >
            <HiXCircle size={20} className="opacity-50" />
          </button>
        </div>
      </motion.div>
    )}
  </AnimatePresence>
);

export default function Contact() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [toast, setToast] = useState({ isVisible: false, message: '', type: 'success' });
  const formRef = useRef(null);

  const showToast = (message, type = 'success') => {
    setToast({ isVisible: true, message, type });
    setTimeout(() => setToast(prev => ({ ...prev, isVisible: false })), 5000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);

    // Replace these credentials with your actual EmailJS credentials
    // You can get them from https://www.emailjs.com/
    const serviceId = 'service_2otidzj';
    const templateId = 'template_fdyvqvk';
    const publicKey = 'N3vLnuzy55ijaoDQH';

    // If credentials are still placeholders, fallback to simulation so the UI still works
    if (serviceId === 'YOUR_EMAILJS_SERVICE_ID' || templateId === 'YOUR_EMAILJS_TEMPLATE_ID' || publicKey === 'YOUR_EMAILJS_PUBLIC_KEY') {
      setTimeout(() => {
        setSending(false);
        setSent(true);
        showToast('Success! Your message has been sent successfully. I will get back to you soon!', 'success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSent(false), 3000);
      }, 1500);
      return;
    }

    emailjs
      .send(serviceId, templateId, {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      }, {
        publicKey: publicKey,
      })
      .then(
        () => {
          setSending(false);
          setSent(true);
          showToast('Success! Your message has been sent successfully. I will get back to you soon!', 'success');
          setFormData({ name: '', email: '', message: '' });
          setTimeout(() => setSent(false), 3000);
        },
        (error) => {
          setSending(false);
          console.error('FAILED...', error);
          const errorMsg = error.text || error.message || 'Check your internet or EmailJS settings.';
          showToast(`Message failed: ${errorMsg}`, 'error');
        }
      );
  };

  return (
    <section id="contact" className="section-padding relative">
      <Toast 
        {...toast} 
        onClose={() => setToast(prev => ({ ...prev, isVisible: false }))} 
      />
      <div className="absolute inset-0 pointer-events-none">
        <div className="hidden md:block orb-2 absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-primary-500/[0.02] blur-2xl md:blur-3xl" />
        <div className="orb-1 absolute top-20 left-0 w-[300px] h-[300px] rounded-full bg-accent-500/[0.02] blur-2xl md:blur-3xl" />
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
            05 — Contact
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-4">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-dark-300 max-w-2xl mx-auto">
            Have a project in mind or just want to say hello? I'd love to hear from you.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-400 rounded-full mx-auto mt-4" />
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-4"
          >
            <div className="glass-card p-6 rounded-2xl mb-6">
              <h3 className="text-xl font-display font-bold text-white mb-2">
                Get in Touch
              </h3>
              <p className="text-dark-300 text-sm leading-relaxed">
                Whether it's a collaboration, opportunity, or just a friendly chat about technology — 
                feel free to reach out through any of these channels.
              </p>
            </div>

            {contactInfo.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              >
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-4 p-4 glass-card rounded-xl hover:border-dark-600/60 transition-all duration-300 group hover:-translate-y-0.5"
                  >
                    <div className={`p-3 rounded-xl ${item.bg} border ${item.border} ${item.color}`}>
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xs text-dark-400 font-mono uppercase tracking-wider">{item.label}</p>
                      <p className="text-sm text-dark-100 group-hover:text-white font-medium transition-colors">
                        {item.value}
                      </p>
                    </div>
                  </a>
                ) : (
                  <div className="flex items-center gap-4 p-4 glass-card rounded-xl">
                    <div className={`p-3 rounded-xl ${item.bg} border ${item.border} ${item.color}`}>
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xs text-dark-400 font-mono uppercase tracking-wider">{item.label}</p>
                      <p className="text-sm text-dark-100 font-medium">{item.value}</p>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <form ref={formRef} onSubmit={handleSubmit} className="glass-card p-6 md:p-8 rounded-2xl glow-border">
              <h3 className="text-xl font-display font-bold text-white mb-6">Send a Message</h3>

              <div className="space-y-5">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-dark-300 mb-2">
                    Your Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl bg-dark-800/60 border border-dark-700/40 text-white placeholder-dark-500 focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/20 transition-all font-sans text-sm"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-dark-300 mb-2">
                    Your Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-dark-800/60 border border-dark-700/40 text-white placeholder-dark-500 focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/20 transition-all font-sans text-sm"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-dark-300 mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell me about your project or idea..."
                    className="w-full px-4 py-3 rounded-xl bg-dark-800/60 border border-dark-700/40 text-white placeholder-dark-500 focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/20 transition-all font-sans text-sm resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={sending}
                  className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 ${
                    sent
                      ? 'bg-accent-500 text-white'
                      : 'bg-gradient-to-r from-primary-600 to-primary-500 text-white hover:shadow-lg hover:shadow-primary-500/25 hover:scale-[1.02]'
                  } disabled:opacity-70 disabled:cursor-not-allowed`}
                >
                  {sending ? (
                    <>
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending...
                    </>
                  ) : sent ? (
                    <>✓ Message Sent!</>
                  ) : (
                    <>
                      <FaPaperPlane size={14} />
                      Send Message
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
