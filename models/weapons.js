module.exports = function (sequelize, DataTypes) {
  const weapon = sequelize.define("weapon", {
    weaponName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    dmgDice: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 6,
        max: 12
      }
    },
    numberOfDice: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1,
        max: 40
      }
    },
    weaponType: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isIn: ["Simple Melee", "Simple Ranged", "Martial Melee", "Martial Range"]
      }
    },
    dmgType: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isIn: ["Simple Melee", "Simple Ranged", "Martial Melee", "Martial Range"]
      }
    }
  });
  weapon.associate = function (models) {
    weapon.hasMany(models.character, {
      onDelete: "cascade"
    });
  };
  return weapon;
};
