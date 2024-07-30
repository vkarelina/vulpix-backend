module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      login: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: true,
          len: [4, 25],
        },
      },
      email: {
        type: Sequelize.DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate: {
          isEmail: true,
        },
      },
      password: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: true,
          len: [8, 255],
        },
      },
      avatar_path: {
        type: Sequelize.DataTypes.STRING(255),
        allowNull: true,
      },
      created_at: {
        type: Sequelize.DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
      updated_at: {
        type: Sequelize.DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('Users');
  },
};
