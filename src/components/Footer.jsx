import { FaGithub, FaLinkedin, FaHeart } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

const footerLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

const socialLinks = [
  { icon: <FaGithub size={18} />, href: 'https://github.com/abellanosa123', label: 'GitHub' },
  { icon: <FaLinkedin size={18} />, href: 'https://linkedin.com/in/carlabellanosa', label: 'LinkedIn' },
  { icon: <HiOutlineMail size={18} />, href: 'mailto:caloythepro@gmail.com', label: 'Email' },
];

export default function Footer() {
  const handleClick = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-dark-800/50">
      {/* Top Gradient Line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/30 to-transparent" />

      <div className="container-custom section-padding !py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo */}
          <div className="text-center md:text-left">
            <a href="#home" onClick={(e) => handleClick(e, '#home')} className="inline-block">
              <span className="text-2xl font-display font-bold text-white tracking-tight">
                Carl<span className="text-gradient">.</span>
              </span>
            </a>
            <p className="text-dark-400 text-sm mt-2">
              Full-Stack Developer & IoT Enthusiast
            </p>
          </div>

          {/* Nav Links */}
          <div className="flex flex-wrap justify-center gap-4">
            {footerLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className="text-sm text-dark-400 hover:text-white transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex justify-center md:justify-end gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="p-2.5 rounded-lg bg-dark-800/40 text-dark-400 border border-dark-700/30 hover:text-white hover:border-primary-500/30 transition-all duration-300 hover:scale-110"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-dark-800/40 mt-8 pt-8">
          <p className="text-center text-sm text-dark-500">
            © 2026 Carl Abellanosa – Built with{' '}
            <FaHeart className="inline text-red-500 mx-1 animate-pulse" size={12} />{' '}
            passion for technology and innovation.
          </p>
        </div>
      </div>
    </footer>
  );
}
