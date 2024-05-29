import React, { useState } from 'react'
import Logo from '../assets/LOGOfoodforlife.png'
import appFirebase from '../credenciales'
import PropTypes from 'prop-types'
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'
const auth = getAuth(appFirebase)

const Login = () => {

  const [registrando, setRegistrando] = useState(false)

  const functAutenticacion = async(e) => {
    e.preventDefault();
    const correo = e.target.email.value;
    const contraseña = e.target.password.value;

    if(registrando){
      try {
        await createUserWithEmailAndPassword(auth, correo, contraseña)
      } catch (error) {
        alert("Asegurese que la contraseña tenga más de 8 caracteres")
      }
      
    }
    else{
      try {
        await signInWithEmailAndPassword(auth, correo, contraseña)
      } catch (error) {
        alert ("El correo o la contraseña son incorrectos")
      }
      
    }
  }

  return (
    <div className='container mt-5'>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="text-center mb-4">
            <img src={Logo} alt="Logo" className='tamaño-imagen' />
          </div>
          <div className="card card-body shadow custom-card">
            <form onSubmit={functAutenticacion}>
              <div className="form-group mb-3">
                <input type="text" className="form-control pastel-input" placeholder='Correo' id='email'/>
              </div>
              <div className="form-group mb-3">
                <input type="password" className="form-control pastel-input" placeholder='Contraseña' id='password' />
              </div>
              <button type="submit" className='btn btn-primary w-100 pastel-button'>
                {registrando ? "Registrate" : "Inicia sesión"}
              </button>
            </form>
            <h4 className="mt-3 text-center custom-text">
              {registrando ? "Si ya tienes una cuenta" : "¿No tienes una cuenta?"}
              <button onClick={() => setRegistrando(!registrando)} className="link-button">
                {registrando ? "Inicia sesión" : "Regístrate"}
              </button>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;