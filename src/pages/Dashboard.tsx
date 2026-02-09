import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error('Failed to log out', error);
    }
  };

  return (
    <div className="min-h-screen">
      <nav className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-2xl font-bold text-nature-green-700">Remembery</h1>
            <div className="flex items-center gap-4">
              <span className="text-gray-700">Hello, {currentUser?.displayName}!</span>
              <button
                onClick={handleLogout}
                className="px-4 py-2 text-sm text-nature-green-700 hover:bg-nature-green-50 rounded-lg transition"
              >
                Log out
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Dashboard</h2>
        <p className="text-gray-600">Welcome to Remembery! We'll build this out in the next steps.</p>
      </div>
    </div>
  );
}
