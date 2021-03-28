'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Categoria', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome: {
        type: Sequelize.STRING
      },
      userId: {
        type: Sequelize.INTEGER,
        references:{      //foreigh key
          model: 'users',
          key: 'id'
        },
        onUpdate: 'cascade',  //Caso atualize a categoria as anotacoes serao atualizadas 
        onDelete: 'cascade'   //Caso delete a categoria as anotacoes serao deletadas 
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Categoria');
  }
};