import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import InputCard from './components/InputCard';
import WeatherCard from './components/WeatherCard';

function App() {

  const [image, setImage] = useState("")
  const [temp, setTemp] = useState(0)
  const [city, setCity] = useState("")
  const [country, setCountry] = useState("")
  const [description, setDescription] = useState("")
  const [windSpeed, setWindSpeed] = useState(0)
  const [humidity, setHumidity] = useState(0)


  return (
    <div className="App">
        <Router>
          <Routes>
            <Route path="/city-weather" element={
              <InputCard 
                setImage={setImage} 
                setTemp={setTemp} 
                setCityInput={setCity} 
                setCountryInput={setCountry} 
                setDescription={setDescription} 
                setWindSpeed={setWindSpeed} 
                setHumidity={setHumidity} />} 
            />
            <Route path="/city-weather/result" element={
              <WeatherCard 
                image={image} 
                temp={temp} 
                city={city} 
                country={country} 
                description={description} 
                windSpeed={windSpeed} 
                humidity={humidity} />} 
            />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
