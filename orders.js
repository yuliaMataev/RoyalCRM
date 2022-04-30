module.export = {
  orders: [],
  addOrder: function () {
    const name = process.argv.slice(2);

    if (!name || name.length === 0) {
      throw "ERRPR: name is empty";
    }
    this.list.push({
      name: name,
      id: products.length,
    });

    this.list.forEach((order) => {
      console.log(`ok.name: ${orders.name} was created.`);
    });
  },
};

addOrder();
