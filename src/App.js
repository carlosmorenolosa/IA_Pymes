import { useState, useEffect } from "react";
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
  Menu,
  X,
  CheckCircle,
} from "lucide-react";

import Slider from "react-slick";

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
  const [scrolling, setScrolling] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolling(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolling ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        {/* Logo */}
        <motion.img
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          src="/images/logo_web.png"     // Ajusta la ruta si es distinta
          alt="IA4PYMEs Logo"
          className="h-16 w-auto"    // Ajusta la altura y anchura según lo que necesites
        />


        {/* Menú Desktop */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-semibold tracking-wide uppercase">
          {["Inicio", "Sobre Nosotros", "Soluciones", "Chatbot", "Casos de Éxito"].map(
            (item, index) => (
              <a
                key={index}
                href={`#${item.toLowerCase().replace(/\s/g, "-")}`}
                className="relative text-gray-700 hover:text-brandBlue/80 transition-all duration-300
                  after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px]
                  after:bg-indigo-500 after:transition-all after:duration-300 hover:after:w-full"
              >
                {item}
              </a>
            )
          )}
          {/* Botón Contacto */}
          <a
            href="#contacto"
            className="bg-brandBlue text-white px-4 py-2 rounded-lg shadow-md hover:bg-brandBlue/80 transition-all duration-300"
          >
            Contacto
          </a>
        </nav>

        {/* Menú Móvil */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {menuOpen && (
          <div className="absolute top-16 left-0 w-full bg-white shadow-md md:hidden">
            <nav className="flex flex-col space-y-4 py-4 text-center">
              {["Inicio", "Sobre Nosotros", "Soluciones", "Chatbot", "Casos de Éxito", "Contacto"].map(
                (item, index) => (
                  <a
                    key={index}
                    href={`#${item.toLowerCase().replace(/\s/g, "-")}`}
                    className="block text-gray-700 hover:text-brandBlue/80 transition-all duration-300"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item}
                  </a>
                )
              )}
            </nav>
          </div>
        )}
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
      id="inicio"
      className="relative flex items-center justify-center bg-white text-gray-900 py-24 px-4"
      style={{ minHeight: "80vh" }}
    >

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-5xl text-center"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-4 text-4xl font-extrabold md:text-6xl text-brandBlue"
        >
          DEMOCRATIZANDO LA IA
        </motion.h2>

        <p className="mx-auto mb-8 max-w-2xl text-base md:text-xl text-gray-600">
          Descubre cómo la IA puede hacer <strong>crecer</strong> tu empresa y <strong>simplificar</strong> tu gestión.
        </p>
        <a href="#contacto">
          <Button className="rounded-2xl bg-brandBlue px-8 py-4 text-lg text-white shadow-lg hover:bg-brandBlue/80">
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
    <Card className="rounded-2xl shadow-md transition-all transform hover:scale-105 hover:shadow-xl">
      <CardContent className="flex flex-col items-center p-6 text-center">
        <div className="mb-4 text-brandBlue">{icon}</div>
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
    <section id="sobre-nosotros" className="bg-white py-16 px-4 scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="container mx-auto max-w-5xl"
      >
        <h2 className="mb-6 text-center text-3xl font-bold text-brandBlue">
          Sobre Nosotros
        </h2>
        <div
          className="mx-auto mb-6 max-w-3xl text-gray-700"
          style={{ textAlign: 'justify' }}
        >
          <p>
            En IA4PYMES, creemos que la Inteligencia Artificial no debería ser exclusiva de las grandes corporaciones. Nuestra misión es hacer que las soluciones de IA sean <strong>accesibles, personalizadas y fáciles de integrar</strong> para que las PYMEs puedan crecer sin complicaciones.
          </p>
          <p className="mt-4">
            Nos diferenciamos por ofrecer herramientas <strong>totalmente adaptadas a tu negocio</strong>, sin necesidad de cambios drásticos en tu infraestructura y con un soporte continuo que te acompaña en cada paso del camino.
          </p>
          <p className="mt-4">
            Nuestra visión es <strong>empoderar a las empresas</strong> para que aprovechen el máximo potencial de la IA, manteniéndose competitivas en un mercado que evoluciona constantemente.
          </p>
        </div>
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
    <section id="soluciones" className="bg-white py-16 px-4 scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="container mx-auto max-w-5xl"
      >
        <h2 className="mb-6 text-center text-3xl font-bold text-brandBlue">
          Soluciones y Servicios
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
          <ServiceCard
            title="Automatización de Procesos"
            description="Reduce las tareas repetitivas y optimiza la eficiencia operativa."
            icon={<Cpu className="h-10 w-10 text-brandBlue" />}
          />
          <ServiceCard
            title="IA para Atención al Cliente"
            description="Responde consultas en tiempo real y mejora la experiencia con un chatbot propio."
            icon={<MessageSquare className="h-10 w-10 text-brandBlue" />}
          />
          <ServiceCard
            title="Análisis de Datos y Predicciones"
            description="Procesa grandes volúmenes de datos y proporciona informes en tiempo real para una toma de decisiones más informada."
            icon={<BarChart className="h-10 w-10 text-brandBlue" />}
          />
          <ServiceCard
            title="Integración con Herramientas Actuales"
            description="Compatibilidad con CRM, ERP y sistemas contables, soluciones en la nube sin necesidad de hardware avanzado."
            icon={<Users className="h-10 w-10 text-brandBlue" />}
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
    <Card className="rounded-2xl shadow-md transition-all transform hover:scale-105 hover:shadow-xl">
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
    <section id="chatbot" className="bg-white py-16 px-4 scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="container mx-auto max-w-5xl"
      >
        <h2 className="mb-6 text-center text-3xl font-bold text-brandBlue">
          🤖 Tu asistente virtual 24/7 para potenciar tu negocio
        </h2>
        <p
          className="mx-auto mb-8 max-w-2xl text-gray-700"
          style={{ textAlign: 'justify' }}
        >
          Nuestro chatbot transforma la atención al cliente: <strong>gestiona consultas, captura leads y mejora la experiencia de tus usuarios</strong> sin esfuerzo. Aprende de cada interacción y <strong>automatiza tareas</strong>, reduciendo la carga de trabajo de tu equipo.
          ¿No estás seguro de cómo puede ayudarte? <strong>Háblale a nuestro chatbot sobre tu empresa y descubre todo lo que puede hacer por ti.</strong> 🚀
        </p>
        <div className="mt-10 flex flex-col items-center justify-center">
        <div className="w-full max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-xl" style={{ height: "600px" }}>
          <iframe
            src="https://pymeria.vercel.app/"
            style={{ width: "100%", height: "100%", border: "none" }}
            loading="lazy"
            title="Chatbot Pymeria"
            allow="clipboard-write"
          ></iframe>
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
      title: "Casos reales, impacto tangible",
      client: "Hospital Universitario de Toledo",
      description: "Tratamientos dermatológicos personalizados, más rápidos y precisos para cada paciente",
    },
    {
      title: "Soluciones Inteligentes. Resultados Extraordinarios",
      client: "Puerto Marítimo de Alicante",
      description: "Visión artificial para detectar contenedores dañados en tiempo real, optimizando la logística y mejorando la seguridad operativa",
    },
    {
      title: "Clientes que inspiran, soluciones que transforman",
      client: "Terminales Marítimas del Sureste",
      description: "Modelo predictivo de daños en contenedores: menos costes, más control logístico",
    },
    {
      title: "Juntos construimos el cambio",
      client: "Agencia Viajes Rascado",
      description: "Automatización de consultas, captación de leads y mejora del posicionamiento digital para vender más y mejor",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <section id="casos-de-éxito" className="bg-white py-16 px-4 scroll-mt-24">
      <div className="mx-auto max-w-5xl w-full px-4">
        <Slider {...settings}>
        {successStories.map((story, idx) => (
          <div key={idx} className="px-4 py-12">
            <div className="text-center">
              <h2 className="mb-2 text-3xl md:text-4xl font-bold text-brandBlue">{story.title}</h2>
              <h3 className="text-lg md:text-xl font-semibold text-gray-800">{story.client}</h3>
              <div className="w-10 h-0.5 mx-auto my-4 bg-brandBlue" />
              <p className="text-gray-700 max-w-2xl mx-auto text-base md:text-lg">
                {story.description}
              </p>
            </div>
          </div>
        ))}
        </Slider>
      </div>
    </section>
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
        "https://3jcx6fnigf.execute-api.eu-west-1.amazonaws.com/prod/send-email",
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
        setResponseMessage("Correo enviado exitosamente. Le responderemos lo antes posible.");
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
    <section id="contacto" className="bg-white py-16 px-4 scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="container mx-auto max-w-5xl"
      >
        <h2 className="mb-6 text-center text-4xl font-bold text-brandBlue">
          El momento es ahora. ¿Construimos juntos?
        </h2>
        <p className="mx-auto mb-6 max-w-3xl text-center text-gray-700">
          ¿Listo para llevar tu negocio al <strong>siguiente nivel</strong>? Rellena el formulario
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
              className="rounded-2xl bg-brandBlue px-6 py-3 text-white shadow-lg hover:bg-brandBlue/80"
            >
              {isSending ? "Enviando..." : "Enviar"}
            </Button>
          </form>
          {responseMessage && (
            <p className="mt-4 text-center text-gray-700">{responseMessage}</p>
          )}
        </div>
        <div className="mt-10 text-center">
          <h3 className="mb-4 text-xl font-semibold text-gray-800">
            ¡Estamos esperando tu <strong>mensaje</strong>!
          </h3>

          {/* Correos de cada departamento en una sola columna y centrados */}
          <div className="flex flex-col items-center space-y-3 text-gray-700">
            <p>
              <strong>Administración:</strong>{" "}
              <a
                href="mailto:contacto@ia4pymes.tech"
                className="underline hover:text-indigo-500"
              >
                contacto@ia4pymes.tech
              </a>
            </p>
            <p>
              <strong>Departamento de Marketing:</strong>{" "}
              <a
                href="mailto:alejandro@ia4pymes.tech"
                className="underline hover:text-indigo-500"
              >
                alejandro@ia4pymes.tech
              </a>
            </p>
            <p>
              <strong>Departamento de IA:</strong>{" "}
              <a
                href="mailto:carlos@ia4pymes.tech"
                className="underline hover:text-indigo-500"
              >
                carlos@ia4pymes.tech
              </a>
            </p>
            <p>
              <strong>Automatización de Procesos:</strong>{" "}
              <a
                href="mailto:pablo@ia4pymes.tech"
                className="underline hover:text-indigo-500"
              >
                pablo@ia4pymes.tech
              </a>
            </p>
          </div>

          {/* Solo LinkedIn con icono */}
          <div className="mt-6 flex justify-center">
            <a
              href="https://www.linkedin.com/in/alejandro-picallo-galante-543557324/"
              className="inline-flex items-center space-x-2 text-brandBlue hover:text-brandBlue/80"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 448 512"
              >
                <path d="M100.28 448H7.4V149.06h92.88zm-46.44-338A53.56 53.56 0 011.4 56a53.56 53.56 0 01106.84 0 53.56 53.56 0 01-53.56 54zM447.9 448h-92.68V302.4c0-34.7-.7-79.37-48.33-79.37-48.34 0-55.77 37.79-55.77 76.83V448h-92.66V149.06h88.91v40.8h1.28c12.39-23.5 42.66-48.33 87.87-48.33 94 0 111.31 61.87 111.31 142.3V448z" />
              </svg>
              <span>LinkedIn</span>
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
    <footer className="bg-white py-4 text-center text-sm text-brandBlue">
      <p>© {new Date().getFullYear()} IA4PYMEs. Todos los derechos reservados.</p>
    </footer>
  );
}
