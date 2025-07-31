import { useNavigate } from 'react-router-dom'; // For the navigation
import { useState } from 'react'; // For managing state
import Layout from '../components/Layout'; 
import NewUserModal from '../components/NewUserModal';

interface LoginData {
  username: string;
  password: string;
}

export default function Home() {
  const navigate = useNavigate(); // variable for  navigation
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false); // State to manage modal visibility
  const openModal = (): void => setIsModalOpen(true); //function to open modal
  const closeModal = (): void => setIsModalOpen(false); //function to close modal
  const [loginData, setLoginData] = useState<LoginData>({  // Initial state for login data
    username: '',
    password: ''
  });

  // Handle input changes for login form
  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>): void {
    const { name, value } = e.target;
    setLoginData((prev: LoginData) => ({
      ...prev,
      [name]: value
    }));
  }

  // Handle login submission
  const handleLogin = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    // Aquí puedes agregar la lógica de autenticación
    console.log('Datos de login:', loginData);
    // Navegar a booking cuando se haga clic en Acceder
    navigate('/booking');
  };

  return (
    <Layout>
      <div className="bg-white rounded-lg shadow-lg p-8 w-96 max-w-md opacity-90">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Iniciar Sesión
        </h1>
        
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Usuario
            </label>
            <input
              type="text"
              name="username"
              value={loginData.username}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Ingresa tu usuario"
              //required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Contraseña
            </label>
            <input
              type="password"
              name="password"
              value={loginData.password}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Ingresa tu contraseña"
              //required
            />
          </div>
          
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white text-lg font-medium rounded-md hover:bg-blue-700 transition mt-6"
          >
            Acceder
          </button>
        </form>
        
        <div className="mt-6 pt-4 border-t border-gray-200">
          <p className="text-center text-sm text-gray-600 mb-3">
            ¿No tienes cuenta? Regístrate como nuevo usuario
          </p>
          <button
            onClick={openModal}
            className="w-full py-2 bg-green-600 text-white text-sm rounded-md hover:bg-green-700 transition mb-2"
          >
            Crear nueva cuenta
          </button>
        </div>

        {/* Modal para nuevo usuario */}
        <NewUserModal isOpen={isModalOpen} onClose={closeModal} />
      </div>
    </Layout>
  );
}