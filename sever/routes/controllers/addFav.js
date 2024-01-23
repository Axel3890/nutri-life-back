const { Favoritos } = require("../../db");

const addFav = async (req, res) => {

  try {
    const { email, recetaID } = req.body;

    // Crea un nuevo favorito en la base de datos
    const newFav = await Favoritos.create({
      email,
      recetaID,
    });

    // Devuelve los datos del favorito
    res.status(201).json(newFav);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

module.exports = addFav;