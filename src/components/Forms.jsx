import React, { useState, useContext }from 'react';
import rickAndMortyContext from '../context/RickMortyContext'; 

export default function Forms() {
  const [inputs, setInputs] = useState({
   name: '',
   gender: 'Todos',
   episode: 0,
   quantity: ''
  })

  const { setFilters } = useContext(rickAndMortyContext);

  const handleChange= ({target}) => {
    setInputs({...inputs, [target.name]:target.value });
  }

  const handleClick = () => {
    setFilters(inputs);
  }
 
  return (
    <form>
      <label htmlFor="name">
        Nome:
        <input type="text" name='name' value={inputs.name} id="name" onChange={ handleChange }/>
      </label>
      <label htmlFor="gender">
        Gênero:
        <select name="gender" value={inputs.gender} id="gender" onChange={ handleChange }>
          <option value="Todos">Todos</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </label>
      <label htmlFor="episode">
        Episódios:
        <select id="episode" value={inputs.quantity} name='quantity' onChange={ handleChange }>
            <option value="maior que">maior que</option>
            <option value="menor que">menor que</option>
            <option value="igual a">igual a</option>
            <option value="">reset</option>
          </select>
          <input type="text" value={inputs.episode} name="episode" onChange={ handleChange }/>
      </label>
      <button type ='button' onClick={ handleClick }>Filtrar Episódio</button>
    </form>
  )
}
