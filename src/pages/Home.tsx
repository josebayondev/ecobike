import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';

export default function Home() {
  const navigate = useNavigate();

  return (
    <Layout>
      <button
        onClick={() => navigate('/booking')}
        className="px-10 py-4 bg-blue-600 text-white text-xl rounded hover:bg-blue-700 transition"
      >
        Comenzar
      </button>
    </Layout>
  );
}