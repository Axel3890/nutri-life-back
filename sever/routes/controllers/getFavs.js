const { Favoritos } = require("../../db");
const { Op } = require('sequelize');
async function getFavs (req,res) {
    const  { email } = req.query
    console.log(email)
    try {
      // Realiza la solicitud GET con Axios
      const respuesta = await Favoritos.findAll({
        where:{
            email: {
                [Op.iLike]: `%${email}%`
            }
        },

    });
    console.log(respuesta)
    res.status(200).json(respuesta);
    } catch (error) {
      console.error('Error al obtener los favoritos:', error);
      throw error;
    }
  };

  module.exports= getFavs;
  