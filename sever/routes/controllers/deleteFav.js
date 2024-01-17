const { Favoritos } = require("../../db")
const removeFav = async (req, res) => {
    try {
      // Obtén los datos del cuerpo de la solicitud
      const { email, recetaID } = req.body;
  
      // Elimina el favorito de la base de datos
      const deletedFav = await Favoritos.destroy({
        where: {
          email,
          recetaID,
        },
      });
  
      if (deletedFav) {
        res.status(200).json({ message: 'Favorito eliminado exitosamente' });
      } else {
        res.status(404).json({ error: 'Favorito no encontrado' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error interno del servidor' });
    }
  };


module.exports = removeFav;