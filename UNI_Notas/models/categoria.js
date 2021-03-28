'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Categoria extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Categoria.belongsTo(models.User); //Categoria pertence ao usuario
      Categoria.hasMany(models.Anotacao); // Relaciona categoria com anotacao
    }
  };
  Categoria.init({
    nome: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Categoria',
  });
  return Categoria;
};