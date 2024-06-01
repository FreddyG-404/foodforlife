const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user.model');

exports.register = (req, res) => {
  const { sexo, peso_actual, altura, fecha_nacimiento, nivel_actividad, dieta_objetivo, peso_meta, nombre_miembro, email, password } = req.body;
  
  const hashedPassword = bcrypt.hashSync(password, 8);

  const newUser = new User({
    sexo, peso_actual, altura, fecha_nacimiento, nivel_actividad, dieta_objetivo, peso_meta, nombre_miembro, email, password: hashedPassword
  });

  User.create(newUser, (err, data) => {
    if (err) {
      res.status(500).send({ message: err.message || "Some error occurred while creating the User." });
      return;
    }
    res.send({ message: "User was registered successfully!" });
  });
};

exports.login = (req, res) => {
  const { email, password } = req.body;

  User.findByEmail(email, (err, user) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({ message: "User not found" });
      } else {
        res.status(500).send({ message: "Error retrieving User" });
      }
      return;
    }

    const passwordIsValid = bcrypt.compareSync(password, user.password);
    if (!passwordIsValid) {
      res.status(401).send({ message: "Invalid Password!" });
      return;
    }

    const token = jwt.sign({ id: user.id }, "secret_key", { expiresIn: 86400 }); // 24 hours

    res.send({ message: "Login successful!", accessToken: token });
  });
};
