import { useSelector } from "react-redux";
import "./card.scss";

const Card = () => {
  const cityData = useSelector((state) => state.data.data);
  const { name, weather, main, wind, sys } = cityData;
  const iconUrl = `http://openweathermap.org/img/w/${weather[0].icon}.png`;

  return (
    <div className="card">
      <div className="card-top">
        <div className="card-top-city-details">
          <p className="card--top-city-name">
            {name}, {sys.country}
          </p>
          <p className="card-city-weather-desc">{weather[0].description}</p>
          <p className="card-city-weather-desc">10:00PM</p>
        </div>
        <img src={iconUrl} alt="sun" className="card-weather-icon" />
      </div>
      <div className="card-bottom">
        <h2>{Math.round(main.temp)}&#8451;</h2>
        <div className="card-bottom-city-details">
          <h4>Details</h4>
          <div className="card-details">
            <h5>Feels Like</h5>
            <span>{Math.round(main.feels_like)}&#8451;</span>
            <h5>Wind</h5>
            <span>{wind.speed} m/s</span>
            <h5>Humidity</h5>
            <span>{main.humidity}%</span>
            <h5>Pressure</h5>
            <span>{main.pressure} hPa</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
