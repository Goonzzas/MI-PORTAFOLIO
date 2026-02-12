import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code2, 
  Database, 
  Wrench, 
  ChevronRight,
  Download,
  Menu,
  X,
  Rocket,
  Scissors,
  MapPin
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Componentes Reutilizables ---

const SectionTitle = ({ children }) => (
  <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white flex items-center gap-3">
    <span className="w-8 h-1 bg-blue-600 rounded-full"></span>
    {children}
  </h2>
);

const SkillBadge = ({ name }) => (
  <span className="px-3 py-1 bg-slate-900 border border-slate-800 text-slate-300 text-sm rounded-lg hover:border-blue-500/50 transition-colors">
    {name}
  </span>
);

const ProjectCard = ({ title, description, stack, icon: Icon, links }) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="group bg-slate-900/50 border border-slate-800 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300"
  >
    <div className="h-48 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 group-hover:scale-110 transition-transform duration-500">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent"></div>
      </div>
      <Icon className="w-16 h-16 text-blue-500 group-hover:rotate-12 transition-transform duration-300" />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-slate-400 text-sm mb-4 line-clamp-2">{description}</p>
      <div className="flex flex-wrap gap-2 mb-6">
        {stack.map(s => <SkillBadge key={s} name={s} />)}
      </div>
      <div className="flex gap-4">
        <a href={links.demo} className="flex items-center gap-1 text-sm font-bold text-blue-400 hover:text-blue-300 transition-colors">
          Demo <ExternalLink size={14} />
        </a>
        <a href={links.github} className="flex items-center gap-1 text-sm font-bold text-slate-500 hover:text-slate-300 transition-colors">
          GitHub <Github size={14} />
        </a>
      </div>
    </div>
  </motion.div>
);

// --- Aplicación Principal ---

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Sobre mí', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Proyectos', href: '#projects' },
    { name: 'Contacto', href: '#contact' },
  ];

  const projects = [
    {
      title: "Meteor Madness – NASA Project",
      description: "Visualizador de asteroides que consume la NASA NEO API con simulaciones físicas de impacto.",
      stack: ["React", "TypeScript", "Three.js", "NASA API"],
      icon: Rocket,
      links: { demo: "#", github: "#" }
    },
    {
      title: "Barbería Pro",
      description: "Sistema de gestión de citas y catálogo de servicios con persistencia de datos profesional.",
      stack: ["React", "Supabase", "Tailwind"],
      icon: Scissors,
      links: { demo: "#", github: "#" }
    },
    {
      title: "UrbanFix Reports",
      description: "Plataforma ciudadana para reporte de fallas urbanas con geolocalización y panel administrativo.",
      stack: ["Angular", "PostgreSQL", "JavaScript"],
      icon: MapPin,
      links: { demo: "#", github: "#" }
    }
  ];

  return (
    <div className="bg-slate-950 text-slate-300 min-h-screen selection:bg-blue-500/30 selection:text-white">
      
      {/* Navbar */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/80 backdrop-blur-md border-b border-slate-800 py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <span className="text-xl font-bold text-white tracking-tighter">
            JUAN<span className="text-blue-500">ANDRÉS.</span>
          </span>
          
          <div className="hidden md:flex gap-8">
            {navLinks.map(link => (
              <a key={link.name} href={link.href} className="text-sm font-medium hover:text-blue-400 transition-colors uppercase tracking-widest">
                {link.name}
              </a>
            ))}
          </div>

          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-slate-950 pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6 text-2xl font-bold">
              {navLinks.map(link => (
                <a key={link.name} href={link.href} onClick={() => setIsMenuOpen(false)}>{link.name}</a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        {/* 1. HERO SECTION */}
        <section className="relative min-h-screen flex items-center pt-20 px-6 overflow-hidden">
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>

          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center w-full">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
                Hola, soy <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                  Juan Andrés
                </span> <span className="inline-block animate-bounce">👋</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-400 mb-8 max-w-lg leading-relaxed">
                Desarrollador Frontend / Full Stack Junior. 
                Construyo aplicaciones web con React, consumo APIs reales y desarrollo productos listos para producción.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#projects" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-bold transition-all flex items-center gap-2">
                  Ver proyectos <ChevronRight size={18} />
                </a>
                <a href="#" className="bg-slate-900 hover:bg-slate-800 text-white border border-slate-700 px-8 py-4 rounded-2xl font-bold transition-all flex items-center gap-2">
                  GitHub <Github size={18} />
                </a>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative flex justify-center lg:justify-end"
            >
              {/* Marco para la foto */}
              <div className="relative w-72 h-72 md:w-96 md:h-96">
                <div className="absolute inset-0 bg-blue-600 rounded-[3rem] rotate-6 opacity-20"></div>
                <div className="absolute inset-0 border-2 border-slate-800 rounded-[3rem] -rotate-3"></div>
                <div className="relative w-full h-full bg-slate-900 rounded-[3rem] overflow-hidden border border-slate-700 shadow-2xl">
                  {/* Imagen de ejemplo o placeholder */}
                  <img 
                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=Juan" 
                    alt="Juan Andrés" 
                    className="w-full h-full object-cover"
                    onError={(e) => { e.target.src = "https://via.placeholder.com/400x400/1e293b/ffffff?text=Tu+Foto+Aqui" }}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 2. ABOUT SECTION */}
        <section id="about" className="py-24 px-6 bg-slate-900/30">
          <div className="max-w-4xl mx-auto">
            <SectionTitle>Sobre mí</SectionTitle>
            <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-3xl">
              <p className="text-xl text-slate-300 leading-relaxed mb-6 italic">
                "Soy técnico en programación de software y estudiante de Ingeniería de Sistemas."
              </p>
              <p className="text-lg text-slate-400 leading-relaxed mb-6">
                Tengo experiencia desarrollando aplicaciones web con <strong>React, Angular y JavaScript</strong>, 
                consumiendo APIs reales como la NASA NEO API y trabajando con bases de datos SQL.
              </p>
              <p className="text-lg text-slate-400 leading-relaxed">
                Actualmente estoy enfocado en el desarrollo web moderno y la construcción de productos reales 
                como <strong>UrbanFix</strong>. Mi objetivo es aportar valor inmediato mediante soluciones escalables y bien diseñadas.
              </p>
            </div>
          </div>
        </section>

        {/* 3. SKILLS SECTION */}
        <section id="skills" className="py-24 px-6 max-w-7xl mx-auto">
          <SectionTitle>Habilidades Técnicas</SectionTitle>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Frontend */}
            <div className="bg-slate-900/40 p-8 rounded-3xl border border-slate-800 hover:border-blue-500/30 transition-all">
              <div className="w-12 h-12 bg-blue-500/10 text-blue-500 rounded-xl flex items-center justify-center mb-6">
                <Code2 size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-6">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {["HTML5", "CSS3", "JavaScript", "React", "Angular", "Tailwind CSS"].map(skill => (
                  <SkillBadge key={skill} name={skill} />
                ))}
              </div>
            </div>

            {/* Backend / Data */}
            <div className="bg-slate-900/40 p-8 rounded-3xl border border-slate-800 hover:border-green-500/30 transition-all">
              <div className="w-12 h-12 bg-green-500/10 text-green-500 rounded-xl flex items-center justify-center mb-6">
                <Database size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-6">Backend & Data</h3>
              <div className="flex flex-wrap gap-2">
                {["SQL (PostgreSQL)", "Supabase", "REST APIs", "JSON", "Node.js"].map(skill => (
                  <SkillBadge key={skill} name={skill} />
                ))}
              </div>
            </div>

            {/* Herramientas */}
            <div className="bg-slate-900/40 p-8 rounded-3xl border border-slate-800 hover:border-purple-500/30 transition-all">
              <div className="w-12 h-12 bg-purple-500/10 text-purple-500 rounded-xl flex items-center justify-center mb-6">
                <Wrench size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-6">Tools</h3>
              <div className="flex flex-wrap gap-2">
                {["Git & GitHub", "Linux (Ubuntu)", "Vite", "Netlify", "Vercel"].map(skill => (
                  <SkillBadge key={skill} name={skill} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 4. PROJECTS SECTION */}
        <section id="projects" className="py-24 px-6 bg-slate-900/20">
          <div className="max-w-7xl mx-auto">
            <SectionTitle>Proyectos Destacados</SectionTitle>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((proj, idx) => (
                <ProjectCard key={idx} {...proj} />
              ))}
            </div>
          </div>
        </section>

        {/* 5. CONTACT SECTION */}
        <section id="contact" className="py-24 px-6 max-w-7xl mx-auto text-center">
          <div className="bg-gradient-to-br from-blue-600 to-cyan-500 p-12 md:p-20 rounded-[3rem] text-white">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">¿Hablamos?</h2>
            <p className="text-lg md:text-xl text-blue-50 mb-10 max-w-xl mx-auto">
              Estoy buscando mi primera oportunidad profesional como desarrollador. Si te gusta lo que ves, ¡contáctame!
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <a href="mailto:tu-correo@gmail.com" className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-bold hover:scale-105 transition-transform flex items-center gap-2 shadow-xl">
                <Mail size={20} /> Enviar Email
              </a>
              <a href="#" className="bg-slate-950 text-white px-8 py-4 rounded-2xl font-bold hover:scale-105 transition-transform flex items-center gap-2 shadow-xl">
                <Download size={20} /> Descargar CV
              </a>
            </div>
            
            <div className="flex justify-center gap-8 mt-12 pt-12 border-t border-white/20">
              <a href="#" className="hover:text-blue-100 transition-colors flex items-center gap-2">
                <Github size={20} /> GitHub
              </a>
              <a href="#" className="hover:text-blue-100 transition-colors flex items-center gap-2">
                <Linkedin size={20} /> LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-12 px-6 border-t border-slate-900 text-center text-slate-500 text-sm">
        <p>© {new Date().getFullYear()} Juan Andrés González. Desarrollado con React y Tailwind CSS.</p>
      </footer>
    </div>
  );
}