const listForm = document.querySelector("#listForm");
const list = document.querySelector("#list");
const button = document.querySelector("#button");

button.addEventListener("click", function (e) {
  e.preventDefault();
  const product = listForm.elements.product;
  const quantity = listForm.elements.quantity;

  writeList(product.value, quantity.value);
  product.value = "";
  quantity.value = "";
});

function writeList(product, quantity) {
  const listItem = document.createElement("li");
  listItem.append(`${product} - ${quantity}`);
  list.append(listItem);
  return list;
}
