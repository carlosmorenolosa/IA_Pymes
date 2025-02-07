import React from "react";
import { motion } from "framer-motion";
import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";
import {
  Check,
  MessageSquare,
  Cpu,
  BarChart,
  Users,
  MonitorSmartphone,
} from "lucide-react";

// Importa tu componente del chatbot
import InterfazGraficaPymerIA from "./chatbot_pymeria";

export default function IABusinessWebsite() {
  return (
    <div className="font-sans text-gray-800">
      <Navbar />
      <HomeSection />
      <AboutSection />
      <ServicesSection />
      <ChatbotSection />
      <SuccessStoriesSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xl font-bold text-indigo-600"
        >
          IA4PYMEs
        </motion.h1>
        <nav className="hidden space-x-4 md:block">
          <a href="#home" className="hover:text-indigo-600">
            Inicio
          </a>
          <a href="#about" className="hover:text-indigo-600">
            Sobre Nosotros
          </a>
          <a href="#services" className="hover:text-indigo-600">
            Soluciones
          </a>
          <a href="#chatbot" className="hover:text-indigo-600">
            Chatbot IA
          </a>
          <a href="#success-stories" className="hover:text-indigo-600">
            Casos de Éxito
          </a>
          <a href="#contact" className="hover:text-indigo-600">
            Contacto
          </a>
        </nav>
      </div>
    </header>
  );
}

function HomeSection() {
  return (
    <section
      id="home"
      className="flex items-center justify-center bg-gray-50 py-16 px-4"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-5xl text-center"
      >
        <h2 className="mb-4 text-3xl font-bold text-indigo-600 md:text-4xl">
          Optimiza tu negocio con IA: Soluciones inteligentes para PYMEs.
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-gray-600">
          Descubre cómo la inteligencia artificial puede transformar tu empresa y
          potenciar tu crecimiento.
        </p>
        <a href="#contact">
          <Button className="rounded-2xl bg-indigo-600 px-6 py-3 text-white shadow-lg hover:bg-indigo-500">
            Agenda una consulta gratuita
          </Button>
        </a>
        <div className="mt-12 grid grid-cols-1 gap-6 px-6 sm:grid-cols-2 md:grid-cols-4">
          <BenefitCard icon={<Cpu className="h-8 w-8" />} title="Automatización de procesos" />
          <BenefitCard icon={<BarChart className="h-8 w-8" />} title="Optimización de costos" />
          <BenefitCard icon={<Check className="h-8 w-8" />} title="Mejora en la toma de decisiones" />
          <BenefitCard icon={<MonitorSmartphone className="h-8 w-8" />} title="Integración sin complicaciones" />
        </div>
      </motion.div>
    </section>
  );
}

function BenefitCard({ icon, title }) {
  return (
    <Card className="rounded-2xl shadow-md">
      <CardContent className="flex flex-col items-center p-6 text-center">
        <div className="mb-4 text-indigo-600">{icon}</div>
        <h4 className="font-semibold text-gray-700">{title}</h4>
      </CardContent>
    </Card>
  );
}

function AboutSection() {
  return (
    <section id="about" className="bg-white py-16 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="container mx-auto max-w-5xl"
      >
        <h2 className="mb-6 text-center text-3xl font-bold text-indigo-600">
          Sobre Nosotros
        </h2>
        <p className="mx-auto mb-6 max-w-3xl text-center text-gray-700">
          Nuestra misión es proporcionar soluciones de Inteligencia Artificial
          accesibles y personalizadas para ayudar a las PYMEs a crecer. Nos
          diferenciamos por ofrecer una total personalización de nuestras
          herramientas, integrándolas sin grandes cambios en tu infraestructura y
          brindando soporte continuo.
        </p>
        <p className="mx-auto mb-10 max-w-3xl text-center text-gray-700">
          Nuestra visión es capacitar a los negocios para que aprovechen todo el
          potencial de la IA y sigan siendo competitivos en un mercado en
          constante evolución.
        </p>
        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
          <TeamMember
            name="Carlos Moreno"
            role="Co-Fundador / CEO"
            imageUrl="/images/carlos-moreno.jpeg"
          />
          <TeamMember
            name="Alejandro Picallo"
            role="Co-Fundador / CTO"
            imageUrl="/images/picallo.jpg"
          />
          <TeamMember
            name="Pablo Fora"
            role="Líder de Desarrollo"
            imageUrl="/images/pablo.jpg"
          />
        </div>
      </motion.div>
    </section>
  );
}

function TeamMember({ name, role, imageUrl }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="text-center"
    >
      <img
        src={imageUrl}
        alt={name}
        className="mx-auto mb-4 h-40 w-40 rounded-full object-cover shadow-md"
      />
      <h4 className="text-lg font-semibold text-gray-800">{name}</h4>
      <p className="text-gray-600">{role}</p>
    </motion.div>
  );
}

function ServicesSection() {
  return (
    <section id="services" className="bg-gray-50 py-16 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="container mx-auto max-w-5xl"
      >
        <h2 className="mb-6 text-center text-3xl font-bold text-indigo-600">
          Soluciones y Servicios
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
          <ServiceCard
            title="Automatización de Procesos"
            description="Reduce las tareas repetitivas y optimiza la eficiencia operativa."
            icon={<Cpu className="h-10 w-10 text-indigo-600" />}
          />
          <ServiceCard
            title="IA para Atención al Cliente"
            description="Responde consultas en tiempo real y mejora la experiencia con un chatbot propio."
            icon={<MessageSquare className="h-10 w-10 text-indigo-600" />}
          />
          <ServiceCard
            title="Análisis de Datos y Predicciones"
            description="Procesa grandes volúmenes de datos y proporciona informes en tiempo real para una toma de decisiones más informada."
            icon={<BarChart className="h-10 w-10 text-indigo-600" />}
          />
          <ServiceCard
            title="Integración con Herramientas Actuales"
            description="Compatibilidad con CRM, ERP y sistemas contables, soluciones en la nube sin necesidad de hardware avanzado."
            icon={<Users className="h-10 w-10 text-indigo-600" />}
          />
        </div>
      </motion.div>
    </section>
  );
}

function ServiceCard({ title, description, icon }) {
  return (
    <Card className="rounded-2xl shadow-md">
      <CardContent className="p-6">
        <div className="mb-4">{icon}</div>
        <h3 className="mb-2 text-xl font-semibold text-gray-800">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
}

// SECCIÓN DONDE INCRUSTAMOS EL CHATBOT
function ChatbotSection() {
  return (
    <section id="chatbot" className="bg-white py-16 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="container mx-auto max-w-5xl"
      >
        <h2 className="mb-6 text-center text-3xl font-bold text-indigo-600">
          Chatbot IA
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-center text-gray-700">
          Nuestro chatbot ayuda a gestionar consultas, capturar leads y mejorar la
          experiencia del cliente. Disponible 24/7, aprende de cada interacción y
          reduce la carga de trabajo en atención al cliente.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center space-y-6">
          {/* COMPONENTE DEL CHATBOT REAL */}
          <div className="w-full max-w-xl">
            <InterfazGraficaPymerIA />
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function SuccessStoriesSection() {
  return (
    <section id="success-stories" className="bg-gray-50 py-16 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="container mx-auto max-w-5xl"
      >
        <h2 className="mb-6 text-center text-3xl font-bold text-indigo-600">
          Casos de Éxito
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
          <Testimonial
            name="Hospital de Toledo"
            before="Falta de personalización en los tratamientos de dermatología y procesos manuales que ralentizaban la atención al paciente."
            after="Implementación de un modelo de IA que generó tratamientos personalizados, reduciendo tiempos de espera y mejorando la calidad de los tratamientos dermatológicos."
          />
          <Testimonial
            name="Puerto Marítimo de Alicante"
            before="Frecuentes daños en los contenedores durante las operaciones de carga y descarga, generando costos adicionales en reparaciones y reclamaciones."
            after="Desarrollo de un modelo de machine learning que predice daños antes de que ocurran, reduciendo costos de reparación y optimizando los tiempos de operación."
          />
          <Testimonial
            name="Puerto Marítimo de Alicante"
            before="Dificultad para identificar daños en los contenedores al entrar o salir de la terminal, lo que generaba reclamaciones y costos adicionales de reparación."
            after="Desarrollo de un modelo de visión artificial que detecta automáticamente los daños en los contenedores mediante imágenes, notificando a la empresa propietaria y evitando disputas y costos de reparación."
          />
        </div>
      </motion.div>
    </section>
  );
}

function Testimonial({ name, before, after }) {
  return (
    <Card className="rounded-2xl shadow-md">
      <CardContent className="p-6">
        <h4 className="mb-2 text-xl font-semibold text-gray-800">{name}</h4>
        <p className="mb-2 text-sm text-gray-500">
          <strong>Antes:</strong> {before}
        </p>
        <p className="text-sm text-gray-500">
          <strong>Después:</strong> {after}
        </p>
      </CardContent>
    </Card>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="bg-gray-50 py-16 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="container mx-auto max-w-5xl"
      >
        <h2 className="mb-6 text-center text-3xl font-bold text-indigo-600">
          Contacto / Solicita una Demo
        </h2>
        <p className="mx-auto mb-6 max-w-3xl text-center text-gray-700">
          ¿Listo para llevar tu negocio al siguiente nivel? Rellena el formulario
          para ponerte en contacto con nosotros.
        </p>
        <div className="mx-auto mt-8 max-w-xl">
          <form className="grid grid-cols-1 gap-4">
            <input
              type="text"
              placeholder="Nombre"
              className="rounded-xl border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="text"
              placeholder="Empresa"
              className="rounded-xl border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="email"
              placeholder="Email"
              className="rounded-xl border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <textarea
              placeholder="Mensaje"
              rows={4}
              className="rounded-xl border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <label className="flex items-center space-x-2">
              <input type="checkbox" />
              <span>Solicitar una demostración de IA</span>
            </label>
            <Button className="rounded-2xl bg-indigo-600 px-6 py-3 text-white shadow-lg hover:bg-indigo-500">
              Enviar
            </Button>
          </form>
        </div>
        <div className="mt-10 flex flex-col items-center space-y-4 text-center">
          <p className="text-gray-700">
            ia4pymes@gmail.com
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-indigo-600 hover:text-indigo-400">
              Facebook
            </a>
            <a href="#" className="text-indigo-600 hover:text-indigo-400">
              Twitter
            </a>
            <a href="#" className="text-indigo-600 hover:text-indigo-400">
              LinkedIn
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-white py-4 text-center text-sm text-gray-600">
      <p>© {new Date().getFullYear()} IA4PYMEs. Todos los derechos reservados.</p>
    </footer>
  );
}
