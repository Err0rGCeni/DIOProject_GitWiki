import React from 'react'
import { ItemContainer } from './styles'

export default function ItemRepo({repo, handleRemoveRepo}) {
    const handleRemove = () => {
        handleRemoveRepo(repo.id)
    }
  return (
    <ItemContainer>
        <h3>{repo.name}</h3>
        <p>{repo.full_name}</p>
        <a href={repo.html_url} target='_blank' rel='noreferrer'>Ver</a>
        <br/>
        <button type='button' onClick={handleRemove}>Remover</button>
        <hr/>
    </ItemContainer>
  )
}
