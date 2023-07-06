var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var container = document.querySelector(".container");

function inputLength() {
  return input.value.length;
}

function createListElement() {
  var div = document.createElement("div");
  div.setAttribute("class", "list-btn");
  div.appendChild(ul);
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  input.value = "";
  var itemm = document.createElement("button");
  itemm.setAttribute("class", "btn-del");
  itemm.appendChild(document.createTextNode("Del"));
  li.appendChild(itemm);
  ul.appendChild(li);
  div.appendChild(ul);
  container.appendChild(div);
}

function deleteListElement(element) {
  if ((element.target.classlist = "btn-del")) {
    element.target.parentElement.remove();
  }
}

// function createItemElement(){
// 	// var divi = document.createElement('div');
// 	// divi.setAttribute('class','li-btn');
// }

function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
  }
}

function addListAfterKeypress(event) {
  if (inputLength() > 0 && event.keyCode === 13) {
    createListElement();
  }
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
ul.addEventListener("click", deleteListElement);
