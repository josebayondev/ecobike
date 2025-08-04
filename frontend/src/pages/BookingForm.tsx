import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import { type Bike } from "../types/bike";

interface BatteryBarProps {
  battery: number;
}

const BatteryBar = ({ battery }: BatteryBarProps) => (
  <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
    <div 
      className={`h-2 rounded-full ${
        battery > 50 ? 'bg-green-500' : 
        battery > 20 ? 'bg-yellow-500' : 'bg-red-500'
      }`}
      style={{ width: `${battery}%` }}
    ></div>
  </div>
);

export default function BookingForm(): React.JSX.Element {
  const [bikes, setBikes] = useState<Bike[]>([]);
  const [selectedBike, setSelectedBike] = useState<Bike | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect((): void => {
    const fetchBikes = async (): Promise<void> => {
      try {
        setLoading(true);
        const response = await fetch('http://localhost:8000/bikes');
        
        if (!response.ok) {
          throw new Error('Error al cargar las bicicletas');
        }
        
        const data = await response.json();
        setBikes(data.bikes);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error desconocido');
      } finally {
        setLoading(false);
      }
    };

    fetchBikes();
  }, []);

  const handleSelectBike = (bike: Bike): void => {
    if (bike.available) {
      setSelectedBike(bike);
    }
  };

  function handleContinueToPayment(): void {
    if (selectedBike) {
      // Aquí podrías pasar datos de la bicicleta seleccionada al estado global o localStorage
      localStorage.setItem('selectedBike', JSON.stringify(selectedBike));
      navigate('/payments');
    }
  }

  return (
    <Layout>
      <div className="w-full max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Selecciona tu EcoBike
        </h1>

        {/* Estados de carga y error */}
        {loading && (
          <div className="text-center py-8">
            <p className="text-gray-600">Cargando bicicletas...</p>
          </div>
        )}

        {error && (
          <div className="text-center py-8">
            <p className="text-red-600">Error: {error}</p>
            <button 
              onClick={() => window.location.reload()} 
              className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Reintentar
            </button>
          </div>
        )}

        {!loading && !error && (
          <>
            {/* Mostrar la bicicleta seleccionada */}
            {selectedBike && (
              <div className="mb-6 p-4 bg-green-100 rounded-lg border border-green-300">
                <h3 className="text-lg font-semibold text-green-800">
                  EcoBike seleccionada: {selectedBike.name}
                </h3>
                <p className="text-green-700">
                  {selectedBike.model} -  {selectedBike.location} - €{selectedBike.pricePerHour}/hora
                </p>
              </div>
            )}

        {/* Lista de bicicletas disponibles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bikes.map((bike) => ( // Recorre y muestra las bicicletas y crea un div
            <div
              key={bike.id}
              onClick={() => handleSelectBike(bike)}
              className={`p-6 rounded-lg border-2 cursor-pointer transition-all ${
                bike.available
                  ? selectedBike?.id === bike.id
                    ? 'border-blue-500 bg-blue-50 shadow-lg'
                    : 'border-gray-300 hover:border-blue-300 hover:shadow-md'
                  : 'border-red-300 bg-red-50 cursor-not-allowed opacity-40'
              }`}
            > 

              {/* Informacion de la bicicleta. Muestra el nombre y si esta disponible */}
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-bold text-gray-800">{bike.name}</h3>
                <div className={`px-2 py-1 rounded text-xs font-semibold ${
                  bike.available 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-red-100 text-red-800'
                }`}>
                  {bike.available ? 'Disponible' : 'No disponible'}
                </div>
              </div>
              
              <p className="text-gray-600 mb-2">Modelo: {bike.model}</p>
              <p className="text-gray-600 mb-2">Ubicación: {bike.location}</p>
              <p className="text-gray-600 mb-2">Tipo: {bike.type === 'electric' ? 'Eléctrica' : 'Manual'}</p>
              
              {bike.type === 'electric' && bike.battery !== null && (
                <p className="text-gray-600 mb-2">
                  Batería: {bike.battery}%
                  <BatteryBar battery={bike.battery} />
                </p>
              )}
              
              <div className="flex justify-between items-center mt-4">
                <span className="text-lg font-bold text-blue-600">
                  €{bike.pricePerHour}/hora
                </span>
                {bike.available && (
                  <button 
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                    onClick={(e: React.MouseEvent<HTMLButtonElement>): void => {
                      e.stopPropagation();
                      handleSelectBike(bike);
                    }}
                  >
                    Seleccionar
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {selectedBike && (
          <div className="mt-8 text-center">
            <button 
              onClick={handleContinueToPayment}
              className="px-8 py-3 bg-green-600 text-white text-lg rounded-lg hover:bg-green-700 transition"
            >
              Continuar con la reserva
            </button>
          </div>
        )}
          </>
        )}
      </div>
    </Layout>
  );
}
