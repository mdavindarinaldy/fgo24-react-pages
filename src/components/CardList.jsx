function CardList({ burgers }) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {burgers.map((burger) => (
          <div key={burger.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={burger.img} alt={burger.name} className="w-full h-48 object-cover"/>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900">{burger.name}</h3>
              <p className="text-gray-600 text-sm mt-1">{burger.dsc.slice(0, 50)}...</p>
              <p className="text-orange-500 font-bold mt-2">${burger.price.toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
  
  export default CardList;