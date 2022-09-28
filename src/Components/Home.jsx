import React from 'react'
import{Link} from 'react-router-dom'

function Home() {
  return (
    <div>
    <h1>Welcome Kava!!</h1>
    <Link to='/About'>To go About page</Link>
    </div>
    
  )
}

export default Home