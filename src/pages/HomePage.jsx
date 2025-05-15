import { useState, useEffect } from 'react';
import CardList from '../components/CardList';

function HomePage() {
  const [burgers, setBurgers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://free-food-menus-api-two.vercel.app/burgers')
      .then((res) => {
        if (!res.ok) {throw new Error('Failed to fetch data burgers');}
        return res.json();
      })
      .then((data) => setBurgers(data))
      .catch((err) => setError(err.message));
  }, []);

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center text-orange-500 mb-8">Our Burger Menu</h2>
      {error ? (
        <p className="text-center text-red-500">{error}</p>
      ) : (
        <CardList burgers={burgers} />
      )}
    </div>
  );
}

export default HomePage;