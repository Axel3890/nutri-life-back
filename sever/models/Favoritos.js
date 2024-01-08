const { DataTypes } = require('sequelize');
const { v4: uuidv4 } = require('uuid');

module.exports = (sequelize) => {
    sequelize.define('Favoritos', {
        Favid: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        UserID: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        RecetaID: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });
};