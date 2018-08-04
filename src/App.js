import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Title from './components/Title';
import Form from './components/Form';
import Weather from './components/Weather';

const API_KEY = "3593c0a7c6e770baef72f92b533ee1c4";

class App extends Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    
    if (city && country) {
      const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
      const data = await api_call.json();
      // console.log(data);
      if (data.message) {
        alert(data.message);
      }
      else {
        this.setState({
          temperature: data.main.temp,
          city: data.name,
          country: data.sys.country,
          humidity: data.main.humidity,
          description: data.weather[0].description,
          error: ""
        });
      }
    }
    else{
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "Please enter correct inputs!"
      });
    }
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="Main">
          <Title />
          <div className="Content">
            <Form call_getWeather={this.getWeather}/>
            <Weather
              temperature={this.state.temperature} 
              city={this.state.city} 
              country={this.state.country} 
              humidity={this.state.humidity} 
              description={this.state.description} 
              error={this.state.error}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
