import React, { useContext, useEffect, useState } from 'react';
import rickAndMortyContext from '../context/RickMortyContext';

export default function Table() {
  const { data, filters } = useContext(rickAndMortyContext);
  const [search, setSearch] = useState([])
  
  const filterEpisodes = (arr) => {
   let filterByEpisode = []
   switch (filters.quantity) {
    case "maior que":
      filterByEpisode = arr.filter((el) => el.episode.length > filters.episode)
      break;
      case "menor que":
      filterByEpisode = arr.filter((el) => el.episode.length < filters.episode)
      break;
      case "igual a":
      filterByEpisode = arr.filter((el) => el.episode.length === filters.episode)
      break;
    default:
      filterByEpisode = arr
      break;
   }
     return filterByEpisode
  }

  const filterData = () => {
    const dataFilterName = data.filter((el) => el.name.toUpperCase().includes(filters.name?.toUpperCase()))
    if(filters.gender === 'Todos'){
      setSearch(filterEpisodes(dataFilterName))
      
    } else {
      const dataFilterGender = dataFilterName.filter((el) => el.gender.toUpperCase() === filters.gender?.toUpperCase())
      setSearch(filterEpisodes(dataFilterGender))
    }
  }



  useEffect(() => {
     setSearch(data)
     if(Object.values(filters).length > 1){
      filterData()
     }
  }, [data, filters])

  return (
    <table>
      <thead>
        <tr>
          <td>Nome</td>
          <td>Espécie</td>
          <td>Gênero</td>
          <td>Status</td>
          <td>Quantidade de Episódios</td>
        </tr>
      </thead>
      <tbody>
      {
        search.length === 0 ? <span>Nada Encontrado</span> :
        search.map((el) => (
          <tr key={el.id} >
          <td>{el.name}</td>
          <td>{el.species}</td>
          <td>{el.gender}</td>
          <td>{el.status}</td>
          <td>{el.episode.length}</td>
          </tr>
        ))
      }
      </tbody>
    </table>
  )
}
