const Sequelize = require("sequelize");
module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
    "organization",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      Name: {
        type: DataTypes.STRING(45),
        allowNull: true,
      },
      "Creating date": {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      Description: {
        type: DataTypes.STRING(45),
        allowNull: true,
      },
      Adress: {
        type: DataTypes.STRING(45),
        allowNull: true,
      },
      Creator_Id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
          model: "user",
          key: "id",
        },
      },
    },
    {
      sequelize,
      tableName: "organization",
      timestamps: false,
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [{ name: "id" }, { name: "Creator_Id" }],
        },
        {
          name: "fk_Organization_User1_idx",
          using: "BTREE",
          fields: [{ name: "Creator_Id" }],
        },
      ],
    }
  );
};
