import http from "./httpService";
import { apiUrl, appId } from "../config.json";

const apiEndpoint = apiUrl + "/weather";

function weatherApiUrl(cityName) {
  return apiEndpoint + `?q=${cityName}&appid=${appId}`;
}

export function currentWeatherByCity(cityName) {
  return http.get(weatherApiUrl(cityName));
}
