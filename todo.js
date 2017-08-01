var todo = todo || {},
    data = JSON.parse(localStorage.getItem("todoData"));

data = data || {};

function toDoList() {
  var value = document.getElementById("todo-text").value
  var list = document.getElementById("sanjanalist")
  var elem = document.createElement('li');

  elem.innerHTML = '<b>'+value+'</b>';
  elem.className = 'list-group-item';

  list.appendChild(elem);

}
