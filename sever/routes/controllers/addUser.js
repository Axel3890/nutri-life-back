const { User } = require("../../db");

const addUser = async (req, res) => {
  try {
    // Obtén los datos del cuerpo de la solicitud
    const { email, contraseña } = req.body;

    // Crea un nuevo usuario en la base de datos
    const newUser = await User.create({
      email,
      contraseña,
    });

    // Devuelve los datos del usuario creado
    res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

module.exports = addUser;

