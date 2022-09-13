import React from 'react';
import './Weather.css';

class Weather extends React.Component {

    constructor(props) {
        super(props);
        console.log(props);
        console.log(this.props.latitude);
        this.state = {
            weatherData: null,
            userLongi: props.longitude,
            userLat: props.latitude
        }
        console.log('constructor');
    }

    render() {
        console.log('render');
        console.log(this.state);
        const { weatherData } = this.state;
        if (weatherData === null) {
            return (<div>loading</div>);
        }
        else {
            return (
                <div id="weather">
                    <img id="icon" src={weatherData.current.condition.icon} alt="weather_icon"></img>
                    <ul id="data">
                        <li>{weatherData.current.condition.text}</li>
                        <li>Temp: {weatherData.current.temp_c} &#176;C</li>
                        <li>Feels like: {weatherData.current.feelslike_c} &#176;C</li>
                        <li>{weatherData.location.name}, {weatherData.location.country}</li>
                    </ul>
                </div>
            );
        }
    }

    componentDidMount() {
        // Simple GET request using fetch
        console.log('componentDidMount');
        fetch(`https://api.weatherapi.com/v1/current.json?key=bc9c65f4cc46418d8c815637220107&q=${this.state.userLat},${this.state.userLongi}&days=7`)
            .then(response => response.json())
            .then(data => {
                this.setState({ weatherData: data });
            })
    }

}
export default Weather;