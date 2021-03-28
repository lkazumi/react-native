'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Anotacao extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Anotacao.belongsTo(models.Categoria); //Anotacao pertence a categoria
    }
  };
  Anotacao.init({
    name: DataTypes.STRING,
    desc: DataTypes.STRING,
    data: DataTypes.STRING,
    lembrete: DataTypes.STRING,
    prioridade: DataTypes.INTEGER,
    categoriaId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Anotacao',
  });
  return Anotacao;
};