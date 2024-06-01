import React, { useState } from 'react';
import axios from 'axios';
import './Login.css'; 

const Login = ({ setShowLogin }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/auth/login', formData);
      alert('Login successful');
    } catch (error) {
      alert('Error: ' + error.response.data.error);
    }
  };

  return (
    <div className='container mt-5'>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card card-body shadow custom-card">
            <div className="text-center mb-4">
              <img src='/logo.png' alt="Logo" className='tamaño-imagen' />
            </div>
            <form onSubmit={handleSubmit}>
              <div className="form-group mb-3">
                <input type="email" className="form-control" placeholder='Correo' name="email" value={formData.email} onChange={handleChange} />
              </div>
              <div className="form-group mb-3">
                <input type="password" className="form-control" placeholder='Contraseña' name="password" value={formData.password} onChange={handleChange} />
              </div>
              <button className='btn btn-primary w-100'>Iniciar sesión</button>
            </form>
            <div className="text-center mt-3">
              <p>¿No tienes una cuenta? <span className="text-primary" onClick={() => setShowLogin(false)} style={{ cursor: 'pointer' }}>Regístrate</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
