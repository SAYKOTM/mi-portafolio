'use client'
import React, { useState, useEffect, useRef } from 'react';
import { Github, Mail, ExternalLink, Code2, Briefcase, GraduationCap, ChevronDown, Instagram, Linkedin, Star, GitFork, Award, Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

// Importar componentes nuevos
import MobileMenu from './components/MobileMenu';
import SkillChart from './components/SkillChart';
import ExperienceCard from './components/ExperienceCard';
import ContactForm from './components/ContactForm';
import { experienceData } from './data/experienceData';
import AnimatedCounter from './AnimatedCounter';
import BrandCarousel from './components/BrandCarousel';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [visibleSections, setVisibleSections] = useState({});
  const [touchComponent, setTouchComponent] = useState(false);
  const [activeSkills, setActiveSkills] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // TUS REDES SOCIALES
  const socialLinks = {
    github: "https://github.com/SAYKOTM",
    linkedin: "https://www.linkedin.com/in/nicol%C3%A1s-hern%C3%A1ndez-3307142ba/",
    instagram: "https://www.instagram.com/its.nlvssj/?hl=es-la",
    email: "shieldsnicolas1@gmail.com"
  };

  // Stats animados - Actualizados con paleta de colores
  const stats = [
    { icon: Code2, label: "Proyectos Entregados", value: 15, suffix: "+", color: "from-indigo-400 to-indigo-500" },
    { icon: GitFork, label: "Soluciones Implementadas", value: 200, suffix: "+", color: "from-indigo-500 to-indigo-600" },
    { icon: Award, label: "Tecnologías de Vanguardia", value: 10, suffix: "+", color: "from-indigo-600 to-indigo-700" },
    { icon: Star, label: "Años Impulsando Negocios", value: 2, suffix: "+", color: "from-indigo-400 to-indigo-600" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer para animaciones de entrada
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  // Efecto para activar animación cuando se ve la sección de habilidades
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSkills(true);
            setTimeout(() => setTouchComponent(true), 500);
          }
        });
      },
      { threshold: 0.3 }
    );

    const skillsSection = document.getElementById('habilidades');
    if (skillsSection) observer.observe(skillsSection);

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      id: 1,
      title: "App Web Zenko Dai Sushi",
      description: "Aplicación para restaurante de sushi con sistema de pedidos, menú interactivo y gestión de órdenes en tiempo real.",
      technologies: ["React", "JavaScript", "CSS", "Firebase"],
      image: "/images/imagewebsushi.png",
      github: "https://github.com/SAYKOTM/appsushi",
      demo: "https://appsushi.vercel.app/",
      status: "En desarrollo"
    },
    {
      id: 2,
      title: "Homenaje Eterno - Rosa Osores",
      description: "Sitio web conmemorativo con galería de fotos, biografía y sección de mensajes para honrar la memoria de un ser querido.",
      technologies: ["HTML", "CSS", "JavaScript", "Netlify"],
      image: "/images/image.png",
      github: "https://github.com/SAYKOTM",
      demo: "https://homenajeeterno-rosa-osores.netlify.app/",
      status: "Completado"
    },
    {
      id: 3,
      title: "Próximo Proyecto",
      description: "Espacio reservado para tu siguiente desarrollo. ¡Mantente atento a las actualizaciones!",
      technologies: ["React", "Node.js", "MongoDB"],
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=500&fit=crop",
      github: "https://github.com/SAYKOTM",
      demo: "#",
      status: "Próximamente"
    }
  ];

  // Skills basadas en la imagen proporcionada
  const skills = [
    {
      category: "Frontend",
      items: ["JavaScript", "HTML/CSS", "Tailwind"],
      color: "from-indigo-400 to-indigo-500",
      icon: "💻"
    },
    {
      category: "Backend",
      items: ["Node.js", "Express", "REST APIs"],
      color: "from-indigo-500 to-indigo-600",
      icon: "⚡"
    },
    {
      category: "Bases de Datos",
      items: ["MongoDB", "Firebase"],
      color: "from-indigo-600 to-indigo-700",
      icon: "🗄️"
    },
    {
      category: "Herramientas",
      items: ["Git/GitHub", "VS Code", "Netlify"],
      color: "from-indigo-400 to-indigo-600",
      icon: "🛠️"
    }
  ];

  // Datos para gráficos de habilidades
  const skillCharts = [
    { skill: "React", percentage: 85, color: "indigo" },
    { skill: "JavaScript", percentage: 90, color: "blue" },
    { skill: "HTML/CSS", percentage: 95, color: "purple" },
    { skill: "Node.js", percentage: 75, color: "indigo" },
    { skill: "MongoDB", percentage: 70, color: "blue" },
    { skill: "Firebase", percentage: 80, color: "purple" },
    { skill: "Tailwind CSS", percentage: 90, color: "indigo" },
    { skill: "Git/GitHub", percentage: 85, color: "blue" },
  ];

  const education = [
    {
      degree: "Ingeniería en Informática",
      institution: "Universidad Tecnológica",
      period: "2024 - Actualidad",
      status: "Cursando 2º año"
    }
  ];

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionId);
  };



  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-40 transition-all duration-500 ${isScrolled ? 'bg-gray-900/95 backdrop-blur-md shadow-lg shadow-indigo-500/10' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-indigo-400 to-indigo-300 bg-clip-text text-transparent">
              Expande WEB
            </div>

            {/* Menú desktop */}
            <div className="hidden md:flex gap-6 lg:gap-8">
              {['Inicio', 'Stats', 'Proyectos', 'Habilidades', 'Experiencia', 'Educación', 'Contacto'].map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="hover:text-indigo-400 transition-all duration-300 text-sm font-medium relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-400 transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
            </div>

            {/* Botón menú móvil */}
            <button
              className="md:hidden text-indigo-400 p-2 rounded-lg hover:bg-gray-800/50 transition-colors"
              onClick={() => setIsMenuOpen(true)}
              aria-label="Abrir menú"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Menú móvil */}
      <MobileMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        scrollToSection={scrollToSection}
      />

      {/* Hero Section */}
      <section id="inicio" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute w-64 sm:w-96 h-64 sm:h-96 bg-indigo-500/10 rounded-full blur-3xl -top-24 sm:-top-48 -left-24 sm:-left-48"
            style={{ transform: `translateY(${scrollY * 0.5}px)` }}
          ></div>
          <div
            className="absolute w-64 sm:w-96 h-64 sm:h-96 bg-indigo-400/10 rounded-full blur-3xl -bottom-24 sm:-bottom-48 -right-24 sm:-right-48"
            style={{ transform: `translateY(${-scrollY * 0.3}px)` }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <div className="mb-6">
            <div className="w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 mx-auto mb-8 rounded-full bg-gradient-to-br from-indigo-400 to-indigo-600 p-1.5 sm:p-2 shadow-2xl shadow-indigo-500/50 animate-float">
              <img
                src="/images/perfil.png"
                alt="Nicolás Hernández"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6">
            <span className="bg-gradient-to-r from-indigo-400 via-indigo-500 to-indigo-600 bg-clip-text text-transparent">
              Expande WEB
            </span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 sm:mb-8 max-w-3xl mx-auto px-4">
            Agencia de Software | Especialistas en Desarrollo Full Stack apasionados por crear soluciones digitales innovadoras y escalables para tu negocio.
          </p>
          <div className="flex gap-3 sm:gap-4 justify-center mb-8 sm:mb-12 flex-wrap px-4">
            {[
              { href: socialLinks.github, icon: Github, label: "GitHub" },
              { href: socialLinks.linkedin, icon: Linkedin, label: "LinkedIn" },
              { href: socialLinks.instagram, icon: Instagram, label: "Instagram" },
              { href: `mailto:${socialLinks.email}`, icon: Mail, label: "Email" }
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                target={social.label !== "Email" ? "_blank" : undefined}
                rel={social.label !== "Email" ? "noopener noreferrer" : undefined}
                className="p-2 sm:p-3 rounded-full bg-gray-800/50 hover:bg-indigo-500/20 transition-all duration-300 hover:scale-110 hover:rotate-6 group"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform" />
              </a>
            ))}
          </div>

          <div className="flex justify-center gap-4 mb-8 sm:mb-12">
            <a
              href="/files/cv.pdf"
              download="CV_Nicolas_Hernandez.pdf"
              className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-full font-medium hover:opacity-90 transition-all duration-300 hover:scale-105 flex items-center gap-2 shadow-lg shadow-indigo-500/25"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Solicitar Propuesta
            </a>
          </div>

          <button
            onClick={() => scrollToSection('stats')}
            className="animate-bounce hover:text-indigo-300 transition-colors"
          >
            <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8 text-indigo-400" />
          </button>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-white">
              Estadísticas
            </h2>
            <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
              Nuestro impacto en números
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border border-gray-700/50 hover:border-indigo-500/50 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-indigo-500/10 text-center group"
              >
                <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto mb-3 sm:mb-4 rounded-full bg-gradient-to-br ${stat.color} flex items-center justify-center group-hover:rotate-12 transition-transform duration-300`}>
                  <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" />
                </div>
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  color={stat.color}
                />
                <p className="text-gray-400 mt-1 sm:mt-2 text-xs sm:text-sm font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Carousel */}
      <BrandCarousel />

      {/* Projects Section */}
      <section id="proyectos" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 mb-3 sm:mb-4 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20">
              <Briefcase className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-400" />
              <span className="text-indigo-400 font-medium text-sm sm:text-base">Portafolio</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-white">
              Nuestros Proyectos
            </h2>
            <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
              Una selección de soluciones digitales que demuestran nuestra capacidad técnica y compromiso con la excelencia.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {projects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-gray-800/50 backdrop-blur-sm rounded-xl sm:rounded-2xl overflow-hidden border border-gray-700/50 hover:border-indigo-500/50 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-indigo-500/10"
              >
                <div className="relative h-40 sm:h-48 md:h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent"></div>
                  <div className="absolute top-3 sm:top-4 right-3 sm:right-4">
                    <span className={`px-3 sm:px-4 py-1 sm:py-1.5 rounded-lg text-xs sm:text-sm font-bold shadow-lg backdrop-blur-md ${project.status === 'Completado'
                      ? 'bg-green-600/80 text-green-100'
                      : project.status === 'En desarrollo'
                        ? 'bg-yellow-500/80 text-yellow-50'
                        : 'bg-indigo-600/80 text-indigo-100'
                      }`}>
                      {project.status}
                    </span>
                  </div>
                </div>

                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 group-hover:text-indigo-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 sm:px-3 py-1 bg-gray-700/50 rounded-full text-xs text-indigo-400 border border-gray-600 hover:border-indigo-500 hover:bg-gray-700 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-2 sm:gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-gray-700/50 hover:bg-gray-700 rounded-lg transition-all duration-300 text-xs sm:text-sm hover:scale-105"
                    >
                      <Github className="w-3 h-3 sm:w-4 sm:h-4" />
                      Código
                    </a>
                    {project.demo !== '#' && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 rounded-lg transition-all duration-300 text-xs sm:text-sm font-medium hover:scale-105"
                      >
                        <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                        Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="habilidades" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gray-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 mb-3 sm:mb-4 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20">
              <Code2 className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-400" />
              <span className="text-indigo-400 font-medium text-sm sm:text-base">Tecnologías</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-white">
              Habilidades Técnicas
            </h2>
            <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
              Dominio de tecnologías modernas para desarrollo web
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* Gráficos de habilidades */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50"
            >
              <h3 className="text-xl font-bold mb-6 text-white">Nivel de Dominio</h3>
              <div className="space-y-2">
                {skillCharts.map((skill, index) => (
                  <SkillChart
                    key={index}
                    skill={skill.skill}
                    percentage={skill.percentage}
                    color={skill.color}
                    index={index}
                  />
                ))}
              </div>
            </motion.div>

            {/* Categorías de habilidades */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {skills.map((skillGroup, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-700/50 hover:border-indigo-500/50 transition-all duration-500 hover:scale-105"
                >
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br ${skillGroup.color} flex items-center justify-center mb-3 sm:mb-4`}>
                    <span className="text-lg sm:text-xl">{skillGroup.icon}</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mb-3 text-indigo-400">
                    {skillGroup.category}
                  </h3>
                  <div className="space-y-1.5 sm:space-y-2">
                    {skillGroup.items.map((skill, i) => (
                      <div
                        key={i}
                        className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gray-700/30 rounded-lg text-sm hover:bg-gray-700/50 transition-all duration-300 hover:translate-x-1 sm:hover:translate-x-2 flex items-center gap-2"
                      >
                        <div className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-gradient-to-r ${skillGroup.color}`}></div>
                        <span className="text-white">{skill}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experiencia" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-white">
              Experiencia
            </h2>
            <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
              Trayectoria y compromiso con la innovación constante
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {experienceData.map((experience, index) => (
              <ExperienceCard
                key={index}
                experience={experience}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="educación" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gray-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 mb-3 sm:mb-4 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20">
              <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-400" />
              <span className="text-indigo-400 font-medium text-sm sm:text-base">Formación</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-white">
              Nuestros Valores y Misión
            </h2>          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-gray-700/50 hover:border-indigo-500/50 transition-all duration-500">
                <h3 className="text-xl font-bold mb-4 text-indigo-400">Nuestra Misión</h3>
                <p className="text-gray-300 leading-relaxed">
                  En Expande WEB, nuestra misión es democratizar el acceso a software de alta calidad, permitiendo que empresas de todos los tamaños escalen sus operaciones mediante soluciones tecnológicas modernas, eficientes y centradas en el usuario.
                </p>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-gray-700/50 hover:border-indigo-500/50 transition-all duration-500">
                <h3 className="text-xl font-bold mb-4 text-indigo-400">Nuestra Visión</h3>
                <p className="text-gray-300 leading-relaxed">
                  Convertirnos en el socio tecnológico líder para emprendedores y empresas que buscan trascender en la era digital, destacándonos por nuestra innovación, transparencia y excelencia en el desarrollo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-white">
              ¿Trabajemos Juntos?
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 mb-6 sm:mb-8 max-w-3xl mx-auto">
              Estamos siempre abiertos a nuevos proyectos, colaboraciones y oportunidades.
              ¡Hablemos sobre cómo podemos ayudar a hacer realidad tu idea!
            </p>
          </div>

          {/* Formulario de contacto */}
          <ContactForm />

          {/* Redes sociales */}
          <div className="mt-12 text-center">
            <p className="text-gray-400 mb-4">O contáctame directamente</p>
            <div className="flex gap-4 sm:gap-6 justify-center">
              {[
                { href: socialLinks.github, icon: Github, label: "GitHub" },
                { href: socialLinks.linkedin, icon: Linkedin, label: "LinkedIn" },
                { href: socialLinks.instagram, icon: Instagram, label: "Instagram" },
                { href: `mailto:${socialLinks.email}`, icon: Mail, label: "Email" }
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target={social.label !== "Email" ? "_blank" : undefined}
                  rel={social.label !== "Email" ? "noopener noreferrer" : undefined}
                  className="text-gray-400 hover:text-indigo-400 transition-all duration-300 hover:scale-125 hover:rotate-12"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 sm:py-8 px-4 sm:px-6 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <div className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-indigo-300 bg-clip-text text-transparent">
                Expande WEB
              </div>
              <p className="text-gray-400 text-sm mt-1">Desarrollador Full Stack</p>
            </div>

            <div className="text-center">
              <p className="text-gray-400 text-sm">
                © 2024 Expande WEB. Todos los derechos reservados.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Desarrollado con React, Tailwind y CSS
              </p>
            </div>

            <div className="flex gap-4">
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-indigo-400 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-indigo-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}