import React from 'react'
import { Button } from './Botton'
import { ContairnerImg } from './ContainerImg'
import { ContairnerText } from './ContainerText'
import { useQuery } from '@apollo/client'
import { ALL_PERSONS } from './queries'
const PERSONS = ({ characters }) => {
  const { data, error, loading } = useQuery(ALL_PERSONS)

  if (loading) return <p>Loading....</p>
  if (error) return <p>Error {error.message}</p>
  let todo = {}
  let max = 20
  let min = 1
  let aleatorio = Math.floor(Math.random() * (max - min) + min)
  todo = data?.characters?.results.filter((p) => p.id == aleatorio)
  console.log(todo)
  console.log(aleatorio)

  if (characters === null) return null
  return (
    <div>
      <Button>Generate</Button>
      {todo.map((p) => (
        <div key={p.id}>
          <ContairnerText>
            {p.name},{p.species},{p.type},{p.gender},{p.status},{p.created},
          </ContairnerText>
          <ContairnerImg>
            <img src={p.image} alt="" className="image" />
          </ContairnerImg>
        </div>
      ))}
    </div>
  )
}
export { PERSONS }
