export default function Card ({ clima }) {
    const { name, sys, main, weather } = clima;
  
    return (
      <div className="border border-gray-300 p-4 rounded-md shadow-md">
        <div className="mb-4">
          <h2 className="text-xl font-bold">{name}, {sys.country}</h2>
          <p className="text-gray-500">Temperatura: {main.temp} °C</p>
        </div>
        <div>
          <p className="text-gray-700">{weather[0].description}</p>
        </div>
      </div>
    );
  };