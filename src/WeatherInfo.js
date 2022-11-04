import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
     <h2><FormattedDate date={props.data.date} /></h2>
          
        <h3 className="text-capitalize">{props.data.description}</h3>

        <div className="row">
  <div className="col-6">
    <div className="d-flex current-weather">
            <div>
              <WeatherIcon code={props.data.icon} size={52} className="float-left" />
            </div>

            <div className="float-left">
              <h2 className="weather"><WeatherTemperature celsius={props.data.temperature} /></h2>
            </div>
          </div>
        </div>
        <div className="col-6">
        <p>Humidity: {props.data.humidity}%</p>
        <p>Wind: {props.data.wind} km/h</p>
        </div>
      </div>
    </div>
  );
}
