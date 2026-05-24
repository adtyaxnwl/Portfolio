import { useState } from 'react';
import '../styles/Weather.css';

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY; 

export default function Weather() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWeather = async () => {
    if (!city.trim()) return;
    setLoading(true);
    setError(null);
    setWeather(null);
    try {
      const res = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${encodeURIComponent(city)}&aqi=no`
      );
      if (!res.ok) throw new Error('City not found');
      const data = await res.json();
      setWeather(data);
    } catch (err) {
      setError(err.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  const handleKey = (e) => {
    if (e.key === 'Enter') fetchWeather();
  };

  const getConditionEmoji = (code) => {
    if (code >= 1000 && code <= 1003) return '☀️';
    if (code >= 1006 && code <= 1009) return '☁️';
    if (code >= 1063 && code <= 1201) return '🌧️';
    if (code >= 1204 && code <= 1282) return '❄️';
    if (code >= 1273 && code <= 1282) return '⛈️';
    return '🌤️';
  };

  return (
    <main className="weather-page">
      <div className="page-header">
        <div className="page-tag">Live conditions</div>
        <h1 className="page-title">Weather</h1>
      </div>

      <div className="weather-search">
        <input
          className="weather-input"
          type="text"
          placeholder="Enter city name..."
          value={city}
          onChange={e => setCity(e.target.value)}
          onKeyDown={handleKey}
        />
        <button className="weather-btn" onClick={fetchWeather} disabled={loading}>
          {loading ? 'Searching…' : 'Search'}
        </button>
      </div>

      {error && <div className="weather-error">{error}</div>}

      {weather && (
        <div className="weather-card">
          <div className="weather-top">
            <div>
              <h2 className="weather-city">{weather.location.name}</h2>
              <p className="weather-region">{weather.location.region}, {weather.location.country}</p>
              <p className="weather-time">Local time: {weather.location.localtime}</p>
            </div>
            <div className="weather-icon-wrap">
              <span className="weather-emoji">
                {getConditionEmoji(weather.current.condition.code)}
              </span>
            </div>
          </div>

          <div className="weather-main">
            <span className="weather-temp">{weather.current.temp_c}°</span>
            <span className="weather-unit">C</span>
          </div>
          <p className="weather-condition">{weather.current.condition.text}</p>

          <div className="weather-details">
            <div className="weather-detail">
              <span className="detail-label">Feels Like</span>
              <span className="detail-value">{weather.current.feelslike_c}°C</span>
            </div>
            <div className="weather-detail">
              <span className="detail-label">Humidity</span>
              <span className="detail-value">{weather.current.humidity}%</span>
            </div>
            <div className="weather-detail">
              <span className="detail-label">Wind</span>
              <span className="detail-value">{weather.current.wind_kph} km/h</span>
            </div>
            <div className="weather-detail">
              <span className="detail-label">UV Index</span>
              <span className="detail-value">{weather.current.uv}</span>
            </div>
            <div className="weather-detail">
              <span className="detail-label">Visibility</span>
              <span className="detail-value">{weather.current.vis_km} km</span>
            </div>
            <div className="weather-detail">
              <span className="detail-label">Pressure</span>
              <span className="detail-value">{weather.current.pressure_mb} mb</span>
            </div>
          </div>
        </div>
      )}

      {!weather && !loading && !error && (
        <div className="weather-placeholder">
          <span className="placeholder-icon">🌍</span>
          <p>Enter a city to see current weather conditions</p>
        </div>
      )}
    </main>
  );
}
