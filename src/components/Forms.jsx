import React from 'react';

export default function Forms() {

  return (
    <form>
      <label htmlFor="name">
        Nome:
        <input type="text" id="name"/>
      </label>
      <label htmlFor="gender">
        Gênero:
        <select name="gender" id="gender">
          <option value="">Todos</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </label>
      <label htmlFor="episode">
        Episódios:
        <select name="episode" id="episode">
            <option value="maior que">maior que</option>
            <option value="menor que">menor que</option>
            <option value="igual a">igual a</option>
          </select>
          <input type="text"/>
      </label>
      <button>Filtrar Episódio</button>
    </form>
  )
}
