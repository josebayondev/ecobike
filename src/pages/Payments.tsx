import Layout from '../components/Layout';
import { useNavigate } from 'react-router-dom';


export default function Payment() {
const navigate = useNavigate();
  return (
    <Layout>
      <h1 className="text-2xl font-semibold mb-6">Página de Pago</h1>
      {/* Aquí irán los detalles del pago */}

      <button
        onClick={() => navigate('/')}
        className="px-10 py-4 bg-yellow-600 text-white text-xl rounded hover:bg-yellow-700 transition"
      >
        Volver a inicio
      </button>
    </Layout>
  );
}