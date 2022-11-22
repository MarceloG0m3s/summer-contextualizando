import React, { useEffect, useMemo, useState } from 'react';
import RickAndMortyContext from './RickMortyContext';
import requestAPIFetch from '../services/RequestAPI';

export default function RickAndMortyProvider({children}){
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({})

 useEffect(() => {
    requestAPIFetch().then((result) => setData(result))
 }, [])

 const value = useMemo(() => ({
    data,
    filters,
    setFilters,
 }), [data, filters, setFilters])

    return (
        <RickAndMortyContext.Provider value={value}>
            {children}
        </RickAndMortyContext.Provider>
    )
}