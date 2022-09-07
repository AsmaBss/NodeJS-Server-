const Sequelize = require("sequelize");

const conn = new Sequelize("testdb", "postgres", "asmabesbes", {
  dialect: "postgres",
  host: "192.168.100.200", //192.168.1.200
  define: {
    timestamps: false,
  },
});

const TypeFacture = conn.define(
  "type",
  {
    type: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    numHeight: {
      type: Sequelize.FLOAT,
      allowNull: false,
    },
    numWidth: {
      type: Sequelize.FLOAT,
      allowNull: false,
    },
    numX: {
      type: Sequelize.FLOAT,
      allowNull: false,
    },
    numY: {
      type: Sequelize.FLOAT,
      allowNull: false,
    },
    dateHeight: {
      type: Sequelize.FLOAT,
      allowNull: false,
    },
    dateWidth: {
      type: Sequelize.FLOAT,
      allowNull: false,
    },
    dateX: {
      type: Sequelize.FLOAT,
      allowNull: false,
    },
    dateY: {
      type: Sequelize.FLOAT,
      allowNull: false,
    },
    topayHeight: {
      type: Sequelize.FLOAT,
      allowNull: false,
    },
    topayWidth: {
      type: Sequelize.FLOAT,
      allowNull: false,
    },
    topayX: {
      type: Sequelize.FLOAT,
      allowNull: false,
    },
    topayY: {
      type: Sequelize.FLOAT,
      allowNull: false,
    },
  },
  { createdAt: false, updatedAt: false }
);

const Factures = conn.define(
  "factures",
  {
    num: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    date: {
      type: Sequelize.DATEONLY,
      allowNull: false,
    },
    topay: {
      type: Sequelize.FLOAT,
      allowNull: false,
    },
    type: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    status: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  { timestamps: false, createdAt: false, updatedAt: false }
);

const Users = conn.define(
  "users",
  {
    firstname: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    lastname: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    birthDate: {
      type: Sequelize.DATEONLY,
      allowNull: false,
    },
    address: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    image: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  { timestamps: false, createdAt: false, updatedAt: false }
);

conn.sync({ alert: false, force: false, logging: true }).then(() => {
  TypeFacture.findOrCreate({
    where: {
      type: "Sonede",
    },
    defaults: {
      type: "Sonede",
      numHeight: 1,
      numWidth: 1,
      numX: 1,
      numY: 1,
      dateHeight: 1,
      dateWidth: 1,
      dateX: 1,
      dateY: 1,
      topayHeight: 1,
      topayWidth: 1,
      topayX: 1,
      topayY: 1,
    },
  });
  TypeFacture.findOrCreate({
    where: {
      type: "Steg",
    },
    defaults: {
      type: "Steg",
      numHeight: 2,
      numWidth: 2,
      numX: 2,
      numY: 2,
      dateHeight: 2,
      dateWidth: 2,
      dateX: 2,
      dateY: 2,
      topayHeight: 2,
      topayWidth: 2,
      topayX: 2,
      topayY: 2,
    },
  });
  new Factures();
  new Users();
});

module.exports = conn;
