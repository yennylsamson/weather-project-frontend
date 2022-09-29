import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';
import '../style/InputCard.css';

function InputCard({ setImage, setTemp, setCountryInput, setDescription, setWindSpeed, setHumidity }) {

    const [countries, setCountries] = useState([]);
    const [country, setCountry] = useState("");

    const getCountries = () => {
        axios.get('http://localhost:8080/countries/asia')
        .then(function (response){
            setCountries(response.data);
        });
    };
    
    useEffect(() => {
        getCountries();
    }, [])

    const changeCountryHandler = (event) => {
        setCountry(event.target.value)
    }

    const checkWeather = () => {
        if (country === "") {
            alert('Please Select Country 😀')
            return;
        }
        axios.get(`http://localhost:8080/weather/current?country=${country}`)
        .then((response) => {
            const result = response.data[0]
            setImage(result.weather[0].icon)
            setTemp(result.main.temp)
            setCountryInput(country)
            setDescription(result.weather[0].description)
            setWindSpeed(result.wind.speed)
            setHumidity(result.main.humidity)
        })
    }

    return (
        <div className='input-card-div'>
            <div className='input-card'>
                <div className='country-field'>
                    <label>Country</label>
                    <select defaultValue="default" onChange={changeCountryHandler}>
                        <option value="default" key="default" disabled>----Select Country----</option>
                        {countries.map((value, index) => {
                            if (value === "") {
                                return null
                            }
                            else if(value.name.common === 'South Korea'){
                                return value.name.common = 'Korea';
                            }
                            return (<option value={value.name.common} key={index}>{value.name.common}</option>)
                        })}
                    </select>
                </div>

                <button onClick={checkWeather}><Link to={country === "" ? '/city-weather' : '/city-weather/result'}>Check Weather 🌧️</Link></button>
            </div>
        </div>
    )
}

export default InputCard