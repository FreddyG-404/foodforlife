import React from 'react'
import {getAuth, signOut} from 'firebase/auth'

const Home = () => {
  return (
    <div>
        <h2>Aqui va toda la app</h2>
        <button className='btn-primary' onClick={()=> signOut(auth)}>Cerrar sesión</button>
    </div>
  )
}

export default Home;