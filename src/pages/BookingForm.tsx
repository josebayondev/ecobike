import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';

export default function BookingForm() {
  const navigate = useNavigate();

  return (
    <Layout>
      <h1 className="text-2xl font-semibold mb-6">Formulario y Mapa aquí</h1>
      {/* Aquí pondrás formulario y mapa */}
      <button
        onClick={() => navigate('/payments')}
        className="px-10 py-4 bg-green-600 text-white text-xl rounded hover:bg-green-700 transition mt-6"
      >
        Ir a Pagos
      </button>
    </Layout>
  );
}