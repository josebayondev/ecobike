import { type ReactNode } from "react";
import leftBike from "../assets/img/leftBike.png";
import rightBike from "../assets/img/rightBike.png";
import logo from "../assets/img/logo.png";
import fondo from "../assets/img/fondo.jpg";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {

  const location = useLocation();
  const isHomePage = location.pathname === "/";
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 relative">
      <h1 className="text-5xl font-bold text-center mb-6 text-gray-800">
        Alquila tu EcoBike{" "}
      </h1>
      {/* Imagen de fondo */}
      <img
        src={fondo}
        alt="Fondo EcoBike"
        className="absolute inset-0 w-full h-full object-cover opacity-10 z-0"
      />

      {/* Logo en esquina superior izquierda */}
      <Link
        to="/"
        className="absolute top-4 left-4 z-20 block w-20"
      >
        <img src={logo} alt="EcoBike Logo" className="w-full h-auto" />
      </Link>

      {/* Imagen izquierda */}
      <img
        src={leftBike}
        alt="Bicicleta izquierda"
        className={`absolute left-26 top-1/2 transform -translate-y-1/2 w-100 h-auto z-5 ${
          isHomePage ? 'opacity-60' : 'opacity-40'
        }`}
      />
      {/* Imagen derecha */}
      <img
        src={rightBike}
        alt="Bicicleta derecha"
        className={`absolute right-10 top-1/2 transform -translate-y-1/2 w-125 h-auto z-5 ${
          isHomePage ? 'opacity-80' : 'opacity-40'
        }`}
      />

      {/* Contenido central */}
      <div className="z-10 relative">{children}</div>
    </div>
  );
}
