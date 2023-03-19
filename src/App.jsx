import React from 'react'
import Header from './components/Header'
import Timevote from './components/Timevote'
import Textvote from './components/Textvote'
import Competitors from './components/Competitors'
import Model from './components/Model'

function App() {
  return (
    <div className='main'>
      <div className="container">

     <Header/>
     {/* <Timevote/> */}
     <Textvote />
     <Competitors/>
     <Model/>
      </div>
    </div>
  )
}

export default App