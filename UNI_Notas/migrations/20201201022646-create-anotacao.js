'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Anotacaos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      desc: {
        type: Sequelize.STRING
      },
      data: {
        type: Sequelize.STRING
      },
      lembrete: {
        type: Sequelize.STRING
      },
      prioridade: {
        type: Sequelize.INTEGER
      },
      categoriaId: {
        type: Sequelize.INTEGER,
        references:{      //foreigh key
          model: 'categoria',
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
    await queryInterface.dropTable('Anotacaos');
  }
};