var form = document.querySelector("form");
var input = document.getElementById("item");
var btn = document.querySelector("button");
var ul = document.querySelector("ul");
var itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];


localStorage.setItem("items", JSON.stringify(itemsArray));
var data = JSON.parse(localStorage.getItem("items"));

var liMaker = (text) => {
    var li = document.createElement("li");
    li.textContent = text;
    ul.appendChild(li);
};

form.addEventListener( "submit", function(e) {
    e.preventDefault();
  
   itemsArray.push(input.value)
   localStorage.setItem('input', JSON.stringify(itemsArray));
   liMaker(input.value);
   input.value = "";
});

data.forEach( item => {
    liMaker(item);
});


btn.addEventListener('click', function () {
    localStorage.clear();
    while (ul.firstChild) {
      ul.removeChild(ul.firstChild);
    }
    itemsArray = [];
  });