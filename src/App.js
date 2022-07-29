import './App.css'

import { PERSONS } from './components/persons'
import { Header } from './components/Header'
import { ContairnerDiv } from './components/ContainerDiv'
import image from './components/asset/img/academy.png'

function App() {
  return (
    <div className="App">
      <Header>
        <ContairnerDiv>
          <img src={image} alt="" />
        </ContairnerDiv>
      </Header>
      <h1>
        <p>Rick-and-Morty</p>
      </h1>
      {/*  {console.log(data?.characters?.results)} */}

      <PERSONS /* characters={data?.characters}  */ />
    </div>
  )
}

export default App
