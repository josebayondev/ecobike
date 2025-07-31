import { useState } from 'react';

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  password: string;
}

interface FormErrors {
  password: string;
}

export interface NewUserModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function NewUserModal({ isOpen, onClose }: NewUserModalProps) {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    password: ''
  });

  const [errors, setErrors] = useState<FormErrors>({
    password: ''
  });

  const validatePassword = (password: string): string => {
    if (password.length < 8) {
      return 'La contraseña debe tener al menos 8 caracteres';
    }
    if (!/[A-Z]/.test(password)) {
      return 'La contraseña debe contener al menos una letra mayúscula';
    }
    return '';
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Validar contraseña en tiempo real
    if (name === 'password') {
      const passwordError = validatePassword(value);
      setErrors(prev => ({
        ...prev,
        password: passwordError
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    
    // Validar contraseña antes de enviar
    const passwordError = validatePassword(formData.password);
    if (passwordError) {
      setErrors(prev => ({
        ...prev,
        password: passwordError
      }));
      return;
    }
    
    // Aquí puedes agregar la lógica para procesar el registro
    console.log('Datos del nuevo usuario:', formData);
    
    // Limpiar formulario y cerrar modal
    setFormData({ fullName: '', email: '', phone: '', password: '' });
    setErrors({ password: '' });
    onClose();
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>): void => {
    if (e.target === e.currentTarget) {
      // Limpiar errores al cerrar
      setErrors({ password: '' });
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-20 flex items-center justify-center z-50"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-lg p-6 w-96 max-w-md mx-4 relative">
        {/* Botón cerrar */}
        <button
          onClick={() => {
            setErrors({ password: '' });
            onClose();
          }}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl font-bold"
        >
          ×
        </button>
        
        {/* Contenido del modal */}
        <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
          Nuevo Usuario
        </h2>
        
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Nombre completo
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Ingresa tu nombre completo"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="tu@email.com"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Teléfono
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Tu número de teléfono"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Contraseña
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                errors.password 
                  ? 'border-red-300 focus:ring-red-500' 
                  : 'border-gray-300 focus:ring-blue-500'
              }`}
              placeholder="Introduce una contraseña"
              required
            />
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">{errors.password}</p>
            )}
            <div className="mt-2 text-xs text-gray-600">
              <p className={`${formData.password.length >= 8 ? 'text-green-500' : 'text-gray-400'}`}>
                ✓ Mínimo 8 caracteres
              </p>
              <p className={`${/[A-Z]/.test(formData.password) ? 'text-green-500' : 'text-gray-400'}`}>
                ✓ Al menos una letra mayúscula
              </p>
            </div>
          </div>
          
          <div className="flex space-x-3 pt-4">
            <button
              type="button"
              onClick={() => {
                setErrors({ password: '' });
                onClose();
              }}
              className="flex-1 px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 transition"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="flex-1 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition disabled:bg-gray-400 disabled:cursor-not-allowed"
              disabled={!!errors.password || !formData.password}
            >
              Registrar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
