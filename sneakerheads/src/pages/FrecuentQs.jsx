import React, { useEffect, useState } from 'react';
import FAQitem from "/src/components/FAQitem";
import "/src/components/FAQ.css";

const FrecuentQs = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems([
      {
        id: 1,
        title: '¿Son todos los productos que venden 100% originales?',
        content:
          'Sí, todos nuestros productos son 100% originales. Nos enorgullece ofrecer zapatillas de las marcas más reconocidas y garantizamos su autenticidad.',
      },
      {
        id: 2,
        title: '¿Cómo puedo registrarme como usuario en su sitio web?',
        content:
        'Puedes registrarte como usuario en nuestro sitio web haciendo clic en el ícono de usuario en la parte superior derecha de la página. Completa el formulario de registro y ¡listo!',
      },
      {
        id: 3,
        title: '¿Qué opciones de pago aceptan?',
        content:
        'Aceptamos pagos con tarjetas de débito y crédito a través de la plataforma PSE. También ofrecemos la opción de pago en efectivo a través de los servicios de Efecty y Baloto.',
      },
      {
        id: 4,
        title: '¿Cuánto tiempo tarda en llegar mi pedido?',
        content:
        'Una vez que realices tu compra, procesaremos tu pedido en un plazo de 1 a 2 días hábiles. Los envíos se realizan a través de Servientrega y el tiempo de entrega varía según la ubicación, generalmente entre 2 y 5 días hábiles.',
      },
      {
        id: 5,
        title: '¿Cuáles son los costos de envío?',
        content:
        'Los costos de envío varían según la ubicación y el peso del paquete. Durante el proceso de compra, se calculará automáticamente el costo de envío y se mostrará antes de realizar el pago.',
      },
      {
        id: 6,
        title: '¿Puedo realizar un cambio de producto si no me queda bien?',
        content:
        'Sí, ofrecemos la opción de cambio de producto en caso de que no te quede bien. Ponte en contacto con nuestro equipo de atención al cliente por medio de nuestra línea de Whatsapp dentro de los 10 días posteriores a la entrega y ellos te brindarán la información necesaria para el proceso de cambio.',
      },
      {
        id: 7,
        title: '¿Qué sucede si recibo un producto defectuoso o incorrecto?',
        content:
        'Si recibes un producto defectuoso o incorrecto, lamentamos las molestias. Ponte en contacto con nuestro equipo de atención al cliente de inmediato y ellos te brindarán una solución, ya sea reemplazando el producto o realizando un reembolso.',
      },
      {
        id: 8,
        title: '¿Ofrecen garantía en sus productos?',
        content:
        'Sí, todos nuestros productos están respaldados por la garantía del fabricante. Si experimentas algún problema con un producto dentro del período de garantía, contáctanos y te asistiremos en el proceso de reclamo.',
      },
      {
        id: 9,
        title: '¿Puedo cancelar mi pedido después de haberlo realizado?',
        content:
        'Si deseas cancelar tu pedido, contáctanos lo antes posible. Si el pedido aún no ha sido procesado para envío, podremos cancelarlo y realizar un reembolso. Sin embargo, una vez que el pedido haya sido enviado, no podremos cancelarlo.',
      },
      {
        id: 10,
        title: '¿Tienen una tienda física en Medellín?',
        content:
        'Actualmente, operamos exclusivamente como una tienda en línea y no contamos con una tienda física en Medellín. Sin embargo, puedes realizar tus compras fácilmente a través de nuestro sitio web y disfrutar de envíos rápidos y seguros a todo el país.',
      },
    ]);
  }, []);

  return (
    <div className="containerF">
      <h2 className='FAQ'>Frequently Asked Questions</h2>
      <FAQitem items={items} />
      <h5 className='FAQ'>Recuerda que nuestra prioridad es brindarte una experiencia de compra satisfactoria, por lo que si tienes alguna otra pregunta o inquietud, no dudes en contactarnos a través de nuestro servicio de atención al cliente. Estaremos encantados de ayudarte.</h5>
    </div>
  );
};

export default FrecuentQs;
