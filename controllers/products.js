const database = require("./database");

module.exports = {
  //products: [],

  addProduct: async function (req, res, next) {
    const qs = req.query;
    const name = qs.name;
    const description = qs.description;
    const price = qs.price;
    const image = qs.image;

    if (!name || name.length === 0) throw "empty";

    try {
      const result = await database.main(sql, [
        name,
        description,
        price,
        image,
      ]);
      res.send(result[0]);
    } catch (err) {
      console.log(err);
    }
  },

  productsList: async function (req, res) {
    const sql = "SELECT * FROM products ORDER BY name ASC";

    try {
      const result = await database.main(sql);
      res.send(result[0]);
    } catch (err) {
      console.log(err);
    }
  },

  exportProducts: async function (req, res, next) {
    const sql =
      "SELECT name, description,price FROM products ORDER BY name ASC";
  },
  deleteProduct: async function (req, res, next) {},

  searchProducts: async function (req, res, next) {},

  //todo: sort products by column
  //sql: SORT BY ASC/DESC

  //todo: edit/update product
  //sql = patch
  editProducts: async function (req, res, next) {},
};
