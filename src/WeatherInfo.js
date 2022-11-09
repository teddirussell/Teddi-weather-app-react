import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

import "bootstrap/dist/css/bootstrap.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
      <h1>{props.data.city}</h1>
     <h2><FormattedDate date={props.data.date} /></h2>
          
        <h3 className="text-capitalize">{props.data.description}</h3>
        <br />
        </div>
        <div className="row">
  <div className="col-6">
    <div className="d-flex current-weather">
            <div className="WeatherIconMain">
              <WeatherIcon code={props.data.icon} size={64} className="float-left" />
            </div>

            <div className="float-left">
              <h2 className="weather"><WeatherTemperature celsius={props.data.temperature} /></h2>
            </div>
          </div>
        </div>
        <div className="col-6">
        <p className="unit">Humidity: <span className="Humidity">{props.data.humidity}%</span></p>
        <p className="unit">Wind: <span className="Wind">{props.data.wind} km/h</span></p>
        </div>
      </div>
    </div>
  );
}
