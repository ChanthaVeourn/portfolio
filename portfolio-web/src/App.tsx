import { useState } from 'react'

import { NavBar, Welcome, Footer } from './components'
 
function App() {
  return (
    <div className="App">
      <div className='min-h-screen max-w-full bg-img bg-contain'>
          <NavBar />
          <Welcome />
          <Footer />
      </div>
    </div>
  )
}

export default App
