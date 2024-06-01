const sql = require('../config/db.config');

const User = function(user) {
  this.sexo = user.sexo;
  this.peso_actual = user.peso_actual;
  this.altura = user.altura;
  this.fecha_nacimiento = user.fecha_nacimiento;
  this.nivel_actividad = user.nivel_actividad;
  this.dieta_objetivo = user.dieta_objetivo;
  this.peso_meta = user.peso_meta;
  this.nombre_miembro = user.nombre_miembro;
  this.email = user.email;
  this.password = user.password;
};

User.create = (newUser, result) => {
  sql.query("INSERT INTO users SET ?", newUser, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    result(null, { id: res.insertId, ...newUser });
  });
};

User.findByEmail = (email, result) => {
  sql.query(`SELECT * FROM users WHERE email = ?`, [email], (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    if (res.length) {
      result(null, res[0]);
      return;
    }
    result({ kind: "not_found" }, null);
  });
};

module.exports = User;

