import { createSlice } from "@reduxjs/toolkit";

const rootSlice = createSlice({
    name: 'root',
    initialState:{
        name: 'classic car',
        price: "40000.00",
        description: "Travelling inefficiently",
        make: 'Car Company',
        miles_per_gallon: '20 MPG',
        max_speed: '140 kph',
        dimensions: 'Too big',
        weight: 'Approx 2 tons',
        cost_of_production: 20000.00,
        series: 'Great Faking Series',
        seats: 4
    },
    reducers: {
        chooseName: (state, action) => {state.name = action.payload},
        choosePrice: (state, action) => {state.price = action.payload},
        chooseDescription: (state, action) => {state.description = action.payload},
        chooseMake: (state, action) => {state.make = action.payload},
        chooseMilesPerGallon: (state, action) => {state.miles_per_gallon = action.payload},
        chooseMaxSpeed: (state, action) => {state.max_speed = action.payload},
        chooseDimensions: (state, action) => {state.dimensions = action.payload},
        chooseWeight: (state, action) => {state.weight = action.payload},
        chooseCostOfProduction: (state, action) => {state.cost_of_production = action.payload},
        chooseSeries: (state, action) => {state.series = action.payload},
        chooseSeats: (state, action) => {state.seats = action.payload},
    }
})

export const reducer = rootSlice.reducer;
export const {chooseName,choosePrice,chooseDescription,chooseMake,chooseMilesPerGallon,
chooseMaxSpeed, chooseDimensions, chooseWeight, chooseCostOfProduction,
chooseSeries, chooseSeats} = rootSlice.actions;