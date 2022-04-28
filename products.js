const products = [];
function addProduct() {
  const name = process.argv.slice(2);

  if (!name || name.length === 0) {
    throw "ERRPR: name is empty";
  }
  orders.push({
    name: name,
    id: products.length,
  });

  products.forEach((product) => {
    console.log(`ok.name: ${product.name} was created.`);
  });
}
addProduct();
