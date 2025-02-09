import React, { useState } from "react";
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
  CheckCircle,
} from "lucide-react";

// Importa tu componente del chatbot
import InterfazGraficaPymerIA from "./chatbot_pymeria";

// ---------------------------------------
// 1. Componente principal
// ---------------------------------------
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

// ---------------------------------------
// 2. Navbar
// ---------------------------------------
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

// ---------------------------------------
// 3. Sección de Inicio (HomeSection)
// ---------------------------------------
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

// ---------------------------------------
// 4. Tarjeta (BenefitCard) para la HomeSection
// ---------------------------------------
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

// ---------------------------------------
// 5. Sección 'Sobre Nosotros' (AboutSection)
// ---------------------------------------
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
            role="Ingeniero de IA"
            imageUrl="/images/carlos-moreno.jpeg"
          />
          <TeamMember
            name="Alejandro Picallo"
            role="Director de Marketing"
            imageUrl="/images/picallo.jpg"
          />
          <TeamMember
            name="Pablo Fora"
            role="Ingeniero Industrial especializado en automatización de procesos"
            imageUrl="/images/pablo.jpg"
          />
        </div>
      </motion.div>
    </section>
  );
}

// ---------------------------------------
// 6. Componente individual para cada miembro (TeamMember)
// ---------------------------------------
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

// ---------------------------------------
// 7. Sección 'Servicios' (ServicesSection)
// ---------------------------------------
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

// ---------------------------------------
// 8. Tarjeta (ServiceCard) para la sección 'Servicios'
// ---------------------------------------
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

// ---------------------------------------
// 9. Sección 'Chatbot'
// ---------------------------------------
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
          reduce la carga de trabajo en atención al cliente. ¿No sabes con qué te podemos ayudar?
          ¡Cuéntale a nuestro chatbot de qué trata tu empresa y averiguarás todo lo que podemos hacer por ti!
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

// ---------------------------------------
// 10. Sección de Casos de Éxito
// ---------------------------------------
function SuccessStoriesSection() {
  const successStories = [
    {
      name: "Hospital de Toledo (IA Generativa)",
      summary:
        "IA para tratamientos dermatológicos personalizados. Redujo tiempos y mejoró la calidad en atención.",
    },
    {
      name: "Puerto Marítimo de Alicante (Machine Learning)",
      summary:
        "Modelo para predecir daños en contenedores, ahorrando costes y tiempos de reparación.",
    },
    {
      name: "Puerto Marítimo de Alicante (Visión Artificial)",
      summary:
        "Visión artificial para detectar contenedores dañados y notificar automáticamente a propietarios.",
    },
  ];

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
        <div className="mx-auto mt-10 grid gap-6 md:grid-cols-3">
          {successStories.map((story, i) => (
            <SuccessStoryCard
              key={i}
              name={story.name}
              summary={story.summary}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}

// ---------------------------------------
// 11. Tarjeta minimalista para cada Caso de Éxito
// ---------------------------------------
function SuccessStoryCard({ name, summary }) {
  return (
    <div
      className="relative flex flex-col items-start justify-between
                    rounded-2xl bg-white px-6 py-8 shadow-md
                    transition-transform duration-300 hover:-translate-y-1"
    >
      <div className="absolute right-4 top-4 text-green-500 z-10">
        <CheckCircle className="h-8 w-8" />
      </div>
      <h4 className="mb-2 text-lg font-semibold text-gray-800">{name}</h4>
      <p className="mb-2 text-sm text-gray-600">{summary}</p>
    </div>
  );
}

// ---------------------------------------
// 12. Sección de Contacto
// ---------------------------------------
function ContactSection() {
  // Estados para los datos del formulario, el envío y el mensaje de respuesta
  const [formData, setFormData] = useState({
    nombre: "",
    empresa: "",
    email: "",
    mensaje: "",
    demo: false,
  });
  const [isSending, setIsSending] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  // Manejador de cambios en los inputs
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Manejador del envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setResponseMessage("");

    try {
      const response = await fetch(
        "https://3jcx6fnigf.execute-api.eu-west-1.amazonaws.com/prod",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          // Envía los datos del formulario en formato JSON
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();
      if (response.ok) {
        setResponseMessage("Correo enviado exitosamente.");
        // Reiniciamos el formulario
        setFormData({
          nombre: "",
          empresa: "",
          email: "",
          mensaje: "",
          demo: false,
        });
      } else {
        setResponseMessage("Error al enviar el correo.");
      }
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      setResponseMessage("Error al enviar el correo.");
    }
    setIsSending(false);
  };

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
          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
            <input
              type="text"
              name="nombre"
              placeholder="Nombre"
              value={formData.nombre}
              onChange={handleChange}
              className="rounded-xl border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
            <input
              type="text"
              name="empresa"
              placeholder="Empresa"
              value={formData.empresa}
              onChange={handleChange}
              className="rounded-xl border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="rounded-xl border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
            <textarea
              name="mensaje"
              placeholder="Mensaje"
              rows={4}
              value={formData.mensaje}
              onChange={handleChange}
              className="rounded-xl border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="demo"
                checked={formData.demo}
                onChange={handleChange}
              />
              <span>Solicitar una demostración de IA</span>
            </label>
            <Button
              type="submit"
              disabled={isSending}
              className="rounded-2xl bg-indigo-600 px-6 py-3 text-white shadow-lg hover:bg-indigo-500"
            >
              {isSending ? "Enviando..." : "Enviar"}
            </Button>
          </form>
          {responseMessage && (
            <p className="mt-4 text-center text-gray-700">{responseMessage}</p>
          )}
        </div>
        <div className="mt-10 flex flex-col items-center space-y-4 text-center">
          <p className="text-gray-700">ia4pymes@gmail.com</p>
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

// ---------------------------------------
// 13. Footer
// ---------------------------------------
function Footer() {
  return (
    <footer className="bg-white py-4 text-center text-sm text-gray-600">
      <p>© {new Date().getFullYear()} IA4PYMEs. Todos los derechos reservados.</p>
    </footer>
  );
}
