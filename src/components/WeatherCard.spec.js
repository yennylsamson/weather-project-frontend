import React from 'react';
import {screen, render, } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import {MemoryRouter} from "react-router-dom";
import WeatherCard from "./WeatherCard";

const mockImage = 'test-image';

const mockTemp = 0;

const mockCountryInput = 'Philippines';

const mockDescription = 'test-description';

const mockWindSpeed = 0;

const mockHumidity = 0;

const renderSetup = () => {
    render(
        <MemoryRouter>
            <WeatherCard
                image={mockImage}
                temp={mockTemp}
                country={mockCountryInput}
                description={mockDescription}
                windSpeed={mockWindSpeed}
                humidity={mockHumidity}
            />
        </MemoryRouter>
    );
}

describe("Weather Component", () => {

    it("checks if input card is existing", () =>{
        renderSetup();
        expect(screen.getByTestId("weather-card-component")).toBeInTheDocument();
    });

});