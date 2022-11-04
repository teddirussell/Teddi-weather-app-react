import React from "react";
import axios from "axios";

import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
  const apiKey = "c9990719b68fb3b69a357ef1e3379959";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
  

  if (weatherData.ready) {
  return (
    <div className="Weather">
      <form className="mb-3" onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-6">
            <input
              type="search"
              placeholder="Type a city.."
              className="form-control"
              autoComplete="off"
              onChange={handleCityChange}
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Current"
              className="float-left btn btn-success w-100"
            />
          </div>
        </div>
      </form>

      <div className="current-weather">
        <h1>{weatherData.city}</h1>
        <h2>{weatherData.date}</h2>
        <h3>{weatherData.condition}</h3>

        <div className="row">
          <div className="col-6">
            <div className="d-flex current-weather">
              <img
                src={weatherData.imgUrl}
                alt={weatherData.description}
                className="float-left"
              />
              <div className="float-left">
                <h2 className="weather">{weatherData.temperature}</h2>
                <sub className="current-temp"> &deg;C</sub>
              </div>
            </div>
          </div>
          <div className="col-6">
            <p>
              Humidity: <span>{weatherData.humidity}</span>%
              <br />
              Wind: <span>{weatherData.wind}</span> km/h
            </p>
          </div>
        </div>
      </div>
    </div>
     );
    } else {
      search();
      return "Loading...";
    }
  }