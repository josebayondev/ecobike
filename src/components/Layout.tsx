
import { type ReactNode } from 'react';
import leftBike from '../assets/img/leftBike.png';
import rightBike from '../assets/img/rightBike.png';
import logo from '../assets/img/logo.png';
import fondo from '../assets/img/fondo.jpg';
import { useNavigate } from 'react-router-dom';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const navigate = useNavigate();


  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 relative">
      {/* Imagen de fondo */}
      <img 
        src={fondo}
        alt="Fondo EcoBike"
        className="absolute inset-0 w-full h-full object-cover opacity-10 z-0"
      />
      
      {/* Logo en esquina superior izquierda */}
      <button
        onClick={() => navigate('/')}
        className="absolute top-4 left-4 z-20 bg-transparent border-0 p-0 cursor-pointer"
      >
        <img 
          src={logo} 
          alt="EcoBike Logo" 
          className="w-20 h-auto"
        />
      </button>

      
      {/* Imagen izquierda */}
      <img 
        src={leftBike} 
        alt="Bicicleta izquierda" 
        className="absolute left-26 top-1/2 transform -translate-y-1/2 w-100 h-auto opacity-90 z-5"
      />
      
      {/* Contenido central */}
      <div className="z-10 relative">
        {children}
      </div>
      
      {/* Imagen derecha */}
      <img 
        src={rightBike} 
        alt="Bicicleta derecha" 
        className="absolute right-10 top-1/2 transform -translate-y-1/2 w-125 h-auto opacity-90 z-5"
      />
    </div>
  );
}