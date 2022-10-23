import React, { useState } from "react";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "New York",
    temperature: 19,
    date: "Tuesday 10:00",
    condition: "Cloudy",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    humidity: 80,
    wind: 10
  };

  return (
    <div className="Weather">
      <form className="mb-3">
        <div className="row">
          <div className="col-6">
            <input
              type="search"
              placeholder="Type a city.."
              className="form-control"
              autoComplete="off"
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
}
