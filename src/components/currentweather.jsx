import React, { Component } from "react";
import { currentWeatherByCity } from "../services/currentweatherservice";

class CurrentWeather extends Component {
  state = { weatherData: {} };
  async componentDidMount() {
    const { data } = await currentWeatherByCity("Irving");
    console.log(data);
    this.setState({ weatherData: data });
  }
  render() {
    const {
      name: cityName,
      sys: { country } = {},
      coord: { lon, lat } = {},
      weather: [{ description }] = [{}],
      main: { temp_max, temp_min, feels_like, humidity } = {},
    } = { ...this.state.weatherData };

    return (
      <table className="table table-bordered">
        <tbody>
          <tr className="table-info">
            <th>City</th>
            <td>{cityName}</td>
            <th>Country</th>
            <td colSpan="5">{country}</td>
          </tr>
          <tr>
            <th>Coordinates (lon, lat)</th>
            <td colSpan="7">{`${lon}, ${lat}`}</td>
          </tr>
          <tr>
            <th>Weather</th>
            <td colSpan="7">{description}</td>
          </tr>
          <tr className="table-info">
            <th colSpan="8">Temperature</th>
          </tr>
          <tr>
            <th>Minimum</th>
            <td>{temp_min}</td>
            <th>Maximum</th>
            <td>{temp_max}</td>
            <th>Feels Like</th>
            <td>{feels_like}</td>
            <th>Humidity</th>
            <td>{humidity}</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default CurrentWeather;
