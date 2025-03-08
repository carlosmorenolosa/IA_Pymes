import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from './components/ui/card';
import { Button } from './components/ui/button';
import { Input } from './components/ui/input';
import { ScrollArea } from './components/ui/scroll-area';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

// Mensajes de ejemplo: solo un mensaje inicial
const sampleMessages = [
  {
    sender: 'PymerIA',
    content: '¡Hola! Soy PymerIA, el asistente inteligente de esta empresa. ¿Tienes alguna duda con nuestros servicios? ¡Cuéntame!'
  }
];

// URL de la API Gateway y API Key
const LAMBDA_URL = "https://go066mldzb.execute-api.eu-west-1.amazonaws.com/prod";
const API_KEY = "jR72QE1yTW2gMIvIy5IZt5YJsVaN9Puz7X7PxcaF";

export default function InterfazGraficaPymerIA() {
  const [messages, setMessages] = useState(sampleMessages);
  const [currentInput, setCurrentInput] = useState('');

  // Función para enviar mensaje y obtener respuesta de Lambda
  const handleSendMessage = async () => {
    if (!currentInput.trim()) return;

    const newMessage = {
      sender: 'User',
      content: currentInput.trim(),
    };
    const updatedMessages = [...messages, newMessage].slice(-20);
    setMessages(updatedMessages);
    setCurrentInput('');

    try {
      const response = await fetch(LAMBDA_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': API_KEY,
        },
        body: JSON.stringify({ conversation: updatedMessages }),
      });

      if (!response.ok) {
        throw new Error('Error al conectar con el servidor');
      }

      const data = await response.json();
      const pymerIAResponse = {
        sender: 'PymerIA',
        content: data.response || 'No tengo una respuesta para eso en este momento.',
      };
      setMessages((prev) => [...prev, pymerIAResponse]);
    } catch (error) {
      const errorMessage = {
        sender: 'PymerIA',
        content: 'Hubo un problema al procesar tu solicitud. Inténtalo de nuevo más tarde.',
      };
      setMessages((prev) => [...prev, errorMessage]);
      console.error('Error al llamar a la Lambda:', error);
    }
  };

  // Enviar mensaje al presionar Enter
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="flex h-full w-full flex-col bg-gray-50 text-gray-800">
      {/* Encabezado */}
      <header className="border-b bg-white py-3 px-4">
        <h1 className="text-lg font-semibold text-indigo-600">PymerIA</h1>
      </header>

      {/* Zona de mensajes */}
      <ScrollArea className="flex-1 p-4">
        {messages.map((msg, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: msg.sender === 'User' ? 50 : -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className={
              `my-2 max-w-3xl break-words rounded-lg p-3 shadow-sm ` +
              (msg.sender === 'User'
                ? 'ml-auto self-end bg-indigo-100 text-right'
                : 'self-start bg-white')
            }
          >
            {/* Mostrar solo el nombre si el mensaje NO es del usuario */}
            {msg.sender !== 'User' && (
              <p className="mb-1 text-sm font-semibold text-indigo-600">{msg.sender}</p>
            )}
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              className="prose text-sm leading-normal text-gray-700"
            >
              {msg.content}
            </ReactMarkdown>
          </motion.div>
        ))}
      </ScrollArea>

      {/* Barra de entrada de mensajes */}
      <div className="border-t bg-white p-4">
        <Card className="shadow-sm">
          <CardContent className="flex p-2">
            <Input
              value={currentInput}
              onChange={(e) => setCurrentInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Escribe tu mensaje..."
              className="flex-1"
            />
            <Button
              onClick={handleSendMessage}
              className="ml-2 bg-indigo-600 text-white shadow-lg hover:bg-indigo-500"
            >
              Enviar
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
