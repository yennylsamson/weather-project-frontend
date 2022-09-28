import React from 'react'
import { Link } from 'react-router-dom'

import '../style/WeatherCard.css'
import weatherIcons from '../images/WeatherIcons.js'

function WeatherCard({ image, temp, city, country, description, windSpeed, humidity }) {

  return (
    <div className="WeatherCardDiv">
      <div className='WeatherCard'>
        <div className="Top">
          <div className='Icon_Temp'>
            <img src={weatherIcons[image]} alt="Icon" />
            <h2>🌡️Temperature: {temp} ℃</h2>
          </div>
          <h2>🏠Country: {country}</h2>
        </div>
        <div className="Bottom">
          <div className='Left'>
            <h2>🌤️Weather: {description}</h2>
            <button className='BackButton'><Link to="/city-weather">New Search</Link></button>
          </div>
          <div>
            <h2>💨WindSpeed: {windSpeed} m/sec</h2>
            <h2>💦Humidity: {humidity} %</h2>
          </div>
        </div>


      </div>
    </div>
  )
}

export default WeatherCard