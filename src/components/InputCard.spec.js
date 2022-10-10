import React from 'react';
import {screen, render, } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import InputCard from "./InputCard";
import {MemoryRouter, Route, Router, Routes} from "react-router-dom";

const mockImage = 'test-image';

const mockTemp = 0;

const mockCountryInput = 'Philippines';

const mockDescription = 'test-description';

const mockWindSpeed = 0;

const mockHumidity = 0;

const renderSetup = () => {
    render(
        <MemoryRouter>
            <InputCard
                setImage={mockImage}
                setTemp={mockTemp}
                setCountryInput={mockCountryInput}
                setDescription={mockDescription}
                setWindSpeed={mockWindSpeed}
                setHumidity={mockHumidity}
            />
        </MemoryRouter>
    );
}

describe("InputCard Component", () => {

    it("checks if input card is existing", () =>{
        renderSetup();
        expect(screen.getByTestId("input-card-component")).toBeInTheDocument();
    });

});