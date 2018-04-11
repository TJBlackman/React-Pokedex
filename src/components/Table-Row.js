import React from 'react'

export default function TableRow (props) {
  const {id, name, type} = props.pokemon; 
  return (
   <tr onClick={() => {props.showPokemonDetails(id)}}>
     <td>{id}</td>
     <td>{name}</td>
     <td>{type[0]}</td>
   </tr>
  )
}