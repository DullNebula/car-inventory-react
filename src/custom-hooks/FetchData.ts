import React, {useState, useEffect} from 'react';
import {serverCalls} from '../api';

export const useGetData = () => {
    const [carData, setData] = useState<any>([]);

    async function handleDataFetch(){
        const result = await serverCalls.get();
        setData(result)
    }
    // Introduce the useEffect Hook
    useEffect(() => {handleDataFetch();}, [])
    return {carData, getData:handleDataFetch}
}