const orders = [];
function addOrder() {
  const name = process.argv.slice(2);

  if (!name || name.length === 0) {
    throw "ERRPR: name is empty";
  }
  orders.push({
    name: name,
    id: products.length,
  });

  orders.forEach((order) => {
    console.log(`ok.name: ${orders.name} was created.`);
  });
}
addOrder();
