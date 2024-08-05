module.exports = function (sequelize, DataTypes) { // module.exports exporta; y se importa con "require"
  const Weather = sequelize.define('Weather',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      fecha: {
        type: DataTypes.DATEONLY
      },
      indicativo: {
        type: DataTypes.STRING
      },
      nombre: {
        type: DataTypes.STRING
      },
      provincia: {
        type: DataTypes.STRING
      },
      altitud: {
        type: DataTypes.INTEGER
      },
      prec: {
        type: DataTypes.STRING
      },
      tmin: {
        type: DataTypes.DECIMAL
      },
      tmed: {
        type: DataTypes.DECIMAL
      },
      tmax: {
        type: DataTypes.DECIMAL
      },
      dir: {
        type: DataTypes.DECIMAL
      },
      velmedia: {
        type: DataTypes.DECIMAL
      },
      racha: {
        type: DataTypes.DECIMAL
      },
      sol: {
        type: DataTypes.DECIMAL
      },
      presMax: {
        type: DataTypes.DECIMAL
      },
      presMin: {
        type: DataTypes.DECIMAL
      },
      hrMedia: {
        type: DataTypes.INTEGER
      },
      hrMax: {
        type: DataTypes.INTEGER
      },
      hrMin: {
        type: DataTypes.INTEGER
      },
      createdAt: {
        type: DataTypes.DATE
      },
      updatedAt: {
        type: DataTypes.DATE
      }
    }, {
      sequelize,
      tableName: 'weather',
      timestamps: true,
      paranoid: true,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [
            { name: 'id' }
          ]
        }
      ]
    }
  )

  Weather.associate = function (models) {

  }

  return Weather
}
