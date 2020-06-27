import React from "react";
import "./App.css";

import Title from "./components/title.js";
import Form from "./components/form.js";
import Weather from "./components/weather.js";

const API_KEY = "804263aae76cafe36c30d6ad8e83cbbb";

class App extends React.Component {
  getWeather = async (event) => {
    event.preventDefault();
    const city = event.target.elements.city.value;
    const country = event.target.elements.country.value;
    const api_call = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`
    );
    const data = await api_call.json();
    console.log(data);
  };

  render() {
    return (
      <div>
        <Title />
        <Form getWeather={this.getWeather} />
        <Weather />
      </div>
    );
  }
}

export default App;
