const config =require("./config")

const { Sequelize, DataTypes } = require('sequelize');

const connection = new Sequelize(
    "goodi",
    "root",
    "root",
    {
      host: "localhost",
      dialect: "mysql",
      define:{
        timestamps:false,
      }
    }
  );
// Define User model
const User = connection.define('User', {
  idu: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  image: {
    type: DataTypes.TEXT('long'),
  },
  email: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  password: {
    type: DataTypes.TEXT('long'),
    allowNull: false,
  },
  role: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
});

// Define Produits model
const Produits = connection.define('Produits', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  desc: {
    type: DataTypes.TEXT('long'),
    allowNull: false,
  },
  image: {
    type: DataTypes.TEXT('long'),
    allowNull: false,
  },
});

// Define Cart model
const Cart = connection.define('Cart', {});

// Define associations
User.hasMany(Cart, { foreignKey: 'user_idu' });
Cart.belongsTo(User, { foreignKey: 'user_idu' });

Produits.hasMany(Cart, { foreignKey: 'Produits_id' });
Cart.belongsTo(Produits, { foreignKey: 'Produits_id' });


connection.authenticate()
.then(()=>console.log("db connected"))
.catch((err)=>console.log("db didnt connect",err)) 
 



// connection
//   .sync({ force: true })
//   .then(() => {
//     console.log("db created successfully!");
//   })
//   .catch((error) => {
//     console.error("Unable to create db : ", error);
//   });






module.exports = {User,Produits,Cart}
