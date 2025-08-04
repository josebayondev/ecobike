import Layout from '../components/Layout';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

interface CardData {
  cardNumber: string;
  expiryDate: string;
  cvv: string;
  cardHolder: string;
  email: string;
  address: string;
  city: string;
  postalCode: string;
}

export default function Payment() {
  const navigate = useNavigate();
  const [cardData, setCardData] = useState<CardData>({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardHolder: '',
    email: '',
    address: '',
    city: '',
    postalCode: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    
    // Formatear número de tarjeta con espacios
    if (name === 'cardNumber') {
      const formattedValue: string = value.replace(/\s/g, '').replace(/(.{4})/g, '$1 ').trim();
      setCardData((prev: CardData) => ({
        ...prev,
        [name]: formattedValue
      }));
    }
    // Formatear fecha de expiración
    else if (name === 'expiryDate') {
      const formattedValue: string = value.replace(/\D/g, '').replace(/(\d{2})(\d{1,2})/, '$1/$2');
      setCardData((prev: CardData) => ({
        ...prev,
        [name]: formattedValue
      }));
    }
    // Limitar CVV a 3 dígitos
    else if (name === 'cvv') {
      const formattedValue: string = value.replace(/\D/g, '').slice(0, 3);
      setCardData((prev: CardData) => ({
        ...prev,
        [name]: formattedValue
      }));
    }
    else {
      setCardData((prev: CardData) => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log('Datos de pago:', cardData);
    alert('¡Pago procesado exitosamente!');
    // Aquí puedes agregar la lógica de procesamiento de pago
    navigate('/');
  };

  return (
    <Layout>
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-2xl">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Información de Pago
        </h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Información de la tarjeta */}
          <div className="border-b border-gray-200 pb-6">
            <h2 className="text-xl font-semibold mb-4 text-gray-700">Datos de la Tarjeta</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Número de Tarjeta
                </label>
                <input
                  type="text"
                  name="cardNumber"
                  value={cardData.cardNumber}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="1234 5678 9012 3456"
                  maxLength={19}
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Fecha de Expiración
                </label>
                <input
                  type="text"
                  name="expiryDate"
                  value={cardData.expiryDate}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="MM/AA"
                  maxLength={5}
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  CVV
                </label>
                <input
                  type="text"
                  name="cvv"
                  value={cardData.cvv}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="123"
                  maxLength={3}
                  required
                />
              </div>
              
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nombre del Titular
                </label>
                <input
                  type="text"
                  name="cardHolder"
                  value={cardData.cardHolder}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Nombre como aparece en la tarjeta"
                  required
                />
              </div>
            </div>
          </div>

          {/* Información de facturación */}
          <div>
            <h2 className="text-xl font-semibold mb-4 text-gray-700">Información de Facturación</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={cardData.email}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="tu@email.com"
                  required
                />
              </div>
              
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Dirección
                </label>
                <input
                  type="text"
                  name="address"
                  value={cardData.address}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Calle, número, piso"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Ciudad
                </label>
                <input
                  type="text"
                  name="city"
                  value={cardData.city}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Tu ciudad"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Código Postal
                </label>
                <input
                  type="text"
                  name="postalCode"
                  value={cardData.postalCode}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="12345"
                  required
                />
              </div>
            </div>
          </div>

          {/* Botones */}
          <div className="flex space-x-4 pt-6">
            <button
              type="button"
              onClick={() => navigate('/booking')}
              className="flex-1 px-6 py-3 bg-gray-300 text-gray-700 text-lg rounded hover:bg-gray-400 transition"
            >
              Volver
            </button>
            <button
              type="submit"
              className="flex-1 px-6 py-3 bg-green-600 text-white text-lg rounded hover:bg-green-700 transition"
            >
              Procesar Pago
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
}