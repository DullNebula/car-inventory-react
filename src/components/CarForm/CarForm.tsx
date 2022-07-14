import React from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';
import {useForm} from 'react-hook-form';
import {Button} from '@mui/material';
import {chooseName,choosePrice,chooseDescription,chooseMake,chooseMilesPerGallon,
        chooseMaxSpeed, chooseDimensions, chooseWeight, chooseCostOfProduction,
        chooseSeries, chooseSeats} from '../../redux/slices/rootSlice';
import {Input} from '../sharedComponents';
import {serverCalls} from '../../api';
import {useGetData} from '../../custom-hooks';

interface CarFormProps{
    id?:string;
    data?:{}
}

interface CarState{
    name:string;
    price:string;
    description:string;
    make: string;
    miles_per_gallon: string;
    dimensions: string;
    max_speed: string;
    weight: string;
    cost_of_production: string;
    series: string;
    seats: string;
}

export const CarForm = (props:CarFormProps) => {
    const dispatch = useDispatch();
    let {carData, getData} = useGetData();
    const store = useStore();
    const name = useSelector<CarState>(state => state.name)
    const {register, handleSubmit} = useForm({})

    const onSubmit = async (data:any, event:any) => {
        console.log(props.id)

        if(props.id!){
            serverCalls.update(props.id!, data)
            console.log(`Updated car id: ${props.id}`)
            window.location.reload();
            event.target.reset();
        } else {
            dispatch(chooseName(data.name))
            dispatch(choosePrice(data.price))
            dispatch(chooseDescription(data.description))
            dispatch(chooseMake(data.Make))
            dispatch(chooseMilesPerGallon(data.MilesPerGallon))
            dispatch(chooseDimensions(data.Dimensions))
            dispatch(chooseMaxSpeed(data.MaxSpeed))
            dispatch(chooseWeight(data.Weight))
            dispatch(chooseCostOfProduction(data.Cost_of_production))
            dispatch(chooseSeries(data.Series))
            dispatch(chooseSeats(data.Seats))
            await serverCalls.create(store.getState())
            window.location.reload();
            event.target.reset();
        }
    }

    return (
        <div>
            <form onSubmit = {handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="name">Car Name</label>
                    <Input {...register('name')} name="name" placeholder="Car's name" />
                </div>
                <div>
                    <label htmlFor="price">Price</label>
                    <Input {...register('price')} name="price" placeholder="Price"/>
                </div>
                <div>
                    <label htmlFor="make">Make</label>
                    <Input {...register('make')} name="make" placeholder="Car Make"/>
                </div>
                <div>
                    <label htmlFor="miles_per_gallon">Miles per Gallon</label>
                    <Input {...register('milesPerGallon')} name="milesPerGallon" placeholder="MPG"/>
                </div>
                <div>
                    <label htmlFor="description">Description</label>
                    <Input {...register('description')} name="description" placeholder="Description"/>
                </div>
                <div>
                    <label htmlFor="dimensions">Dimensions</label>
                    <Input {...register('dimensions')} name="dimensions" placeholder="Dimensions"/>
                </div>
                <div>
                    <label htmlFor="max_speed">Max Speed</label>
                    <Input {...register('max_speed')} name="max_speed" placeholder="Max Speed"/>
                </div>
                <div>
                    <label htmlFor="weight">Weight</label>
                    <Input {...register('weight')} name="weight" placeholder="Weight"/>
                </div>
                <div>
                    <label htmlFor="cost_of_production">Cost Of Production</label>
                    <Input {...register('cost_of_production')} name="cost_of_production" placeholder="Cost Of Production"/>
                </div>
                <div>
                    <label htmlFor="series">Series</label>
                    <Input {...register('series')} name="series" placeholder="Series"/>
                </div>
                <div>
                    <label htmlFor="seats">Seats</label>
                    <Input {...register('seats')} name="seats" placeholder="Seats"/>
                </div>
                <Button type='submit'>Submit</Button>
            </form>
        </div>
    )
}