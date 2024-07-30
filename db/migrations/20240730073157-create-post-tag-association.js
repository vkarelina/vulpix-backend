module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('PostTags', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.DataTypes.INTEGER,
      },
      postId: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: 'Posts',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        validate: {
          isEmail: true,
        },
      },
      tagId: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: 'Tags',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        validate: {
          isEmail: true,
        },
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('PostTags');
  },
};