import React, { useState } from 'react';
import axios from 'axios';
import './Registro.css'; 

const Register = ({ setShowLogin }) => {
  const [formData, setFormData] = useState({
    sexo: '',
    peso_actual: '',
    altura: '',
    fecha_nacimiento: '',
    nivel_actividad: '',
    dieta_objetivo: '',
    peso_meta: '',
    nombre_miembro: '',
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
      const response = await axios.post('http://localhost:5000/auth/registro', formData);
      alert(response.data.message);
    } catch (error) {
      alert('Error: ' + error.response.data.message);
    }
  };

  return (
    <div className='container mt-5'>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card card-body shadow custom-card">
            <h3 className="text-center mb-4">Crear Cuenta</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Sexo:</label>
                <div>
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="sexo" value="Femenino" onChange={handleChange} />
                    <label className="form-check-label">Femenino</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="sexo" value="Masculino" onChange={handleChange} />
                    <label className="form-check-label">Masculino</label>
                  </div>
                </div>
              </div>
              <div className="mb-3">
                <label className="form-label">Peso Actual (kg):</label>
                <input type="number" className="form-control" name="peso_actual" value={formData.peso_actual} onChange={handleChange} />
              </div>
              <div className="mb-3">
                <label className="form-label">Altura (cm):</label>
                <input type="number" className="form-control" name="altura" value={formData.altura} onChange={handleChange} />
              </div>
              <div className="mb-3">
                <label className="form-label">Fecha de Nacimiento:</label>
                <input type="date" className="form-control" name="fecha_nacimiento" value={formData.fecha_nacimiento} onChange={handleChange} />
              </div>
              <div className="mb-3">
                <label className="form-label">Nivel de Actividad:</label>
                <select className="form-select" name="nivel_actividad" value={formData.nivel_actividad} onChange={handleChange}>
                  <option value="">Seleccione...</option>
                  <option value="Sedentario">Sedentario</option>
                  <option value="Baja Actividad">Baja Actividad</option>
                  <option value="Activo">Activo</option>
                  <option value="Muy Activo">Muy Activo</option>
                </select>
              </div>
              <div className="mb-3">
                <label className="form-label">Dieta Objetivo:</label>
                <input type="text" className="form-control" name="dieta_objetivo" value={formData.dieta_objetivo} onChange={handleChange} />
              </div>
              <div className="mb-3">
                <label className="form-label">Peso Meta (kg):</label>
                <input type="number" className="form-control" name="peso_meta" value={formData.peso_meta} onChange={handleChange} />
              </div>
              <div className="mb-3">
                <label className="form-label">Nombre del Miembro:</label>
                <input type="text" className="form-control" name="nombre_miembro" value={formData.nombre_miembro} onChange={handleChange} />
              </div>
              <div className="mb-3">
                <label className="form-label">Correo Electrónico:</label>
                <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} />
              </div>
              <div className="mb-3">
                <label className="form-label">Contraseña:</label>
                <input type="password" className="form-control" name="password" value={formData.password} onChange={handleChange} />
              </div>
              <button type="submit" className="btn btn-primary w-100">Siguiente</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
