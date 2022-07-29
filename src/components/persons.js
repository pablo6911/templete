import React from 'react'
import { Button } from './elements/Botton'
import { ContairnerImg } from './containers/ContainerImg'
import { ContairnerText } from './containers/ContainerText'
import { ContainerBoton } from './containers/ContainerBoton'
import { useLazyQuery } from '@apollo/client'
import { ALL_PERSONS } from './queris/queries'

const PERSONS = ({ characters }) => {
  const [getCharacters, { data, error, InMemoryCache }] =
    useLazyQuery(ALL_PERSONS)

  //if (loading) return <p>Loading....</p>
  if (error) return <p>Error {error.message}</p>
  let todo = {}
  let max = 20
  let min = 1
  let aleatorio = Math.floor(Math.random() * (max - min) + min)
  todo = data?.characters?.results.filter((p) => p.id == aleatorio)
  console.log(todo)
  console.log(aleatorio)
  console.log(InMemoryCache())

  if (characters === null) return null
  return !data ? (
    <div>
      <div>No se ha cargado ningún personaje</div>
      <Button
        onClick={() => {
          getCharacters()
        }}
      >
        Generate
      </Button>
    </div>
  ) : (
    <div>
      {todo.map((p) => (
        <div key={p.id}>
          <ContairnerText>
            <table BORDER="5" CELLPADDING="12" CELLSPACING="30">
              <tr>
                <th>Name</th>
                <br />
                <td> {p.name}</td>
              </tr>
              <hr />
              <tr>
                <th>species</th>
                <br />
                <td>{p.species}</td>
              </tr>
              <hr />
              <tr>
                <th>Status</th>
                <br />
                <td>{p.status}</td>
              </tr>
              <hr />
              <tr>
                <th>type</th>
                <br />
                <td>{p.type}</td>
              </tr>
              <hr />
              <tr>
                <th>gender</th>
                <br />
                <td>{p.gender}</td>
              </tr>
              <hr />
              <tr>
                <th>origin</th>
                <br />
                <td>{p.origin.name}</td>
              </tr>
              <hr />
              <tr>
                <th>location</th>
                <br />
                <td>{p.location.id}</td>
              </tr>
              <hr />
              <tr>
                <th>created</th>
                <br />
                <td>{p.created}</td>
              </tr>
            </table>
          </ContairnerText>
          <ContairnerImg>
            <img src={p.image} alt="" className="image" />
          </ContairnerImg>
        </div>
      ))}
      <ContainerBoton>
        <Button
          onClick={() => {
            getCharacters()
          }}
        >
          Generate
        </Button>
      </ContainerBoton>
    </div>
  )
}
export { PERSONS }
