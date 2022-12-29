import React from 'react'
import { Link } from 'react-router-dom'
import'./404.css'

function T404() {
  return (
    <div className='opps-page'>Opps! page not found
    <p><Link to='/'>Click here to go home</Link></p>
    </div>
  )
}

export default T404