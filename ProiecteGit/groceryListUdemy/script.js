const listForm = document.querySelector("#listForm");
const list = document.querySelector("#list");
const button = document.querySelector("#button");


// take inputs from user and add to list
button.addEventListener("click", function (e) {
  e.preventDefault();
  const product = listForm.elements.product;
  const quantity = listForm.elements.quantity;
 

  addItem(product.value, quantity.value);
  product.value = "";
  quantity.value = "";
});

function addItem(product, quantity) {
  const listItem = document.createElement("li");
  listItem.append(`${product} - ${quantity}`);
  list.append(listItem);
  return list;
}

// remove inputs from list EVENT DELEGATION ON PARENT ELEMENT
list.addEventListener("click", function(e){
    if(e.target.nodeName ==="LI"){
        e.target.remove()
    }
  
})

