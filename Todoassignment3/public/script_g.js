const RESPONSE_DONE = 4;
const STATUS_OK = 200;
const TODO_LIST_ID_ACTIVE = "active";
const TODO_LIST_ID_COMPLETE = "complete";
const TODO_LIST_ID_DELETE = "delete";
const NEW_TODO_INPUT_ID = "new_todo_input";

var table = document.createElement("table");

window.onload = getTodosAJAX();

function activeElement(id, todo_data_json) {
    var todos = JSON.parse(todo_data_json);
    var parent = document.getElementById(id);
    parent.innerHTML = "";

    if (parent) {
        Object.keys(todos).forEach( function (key) {
            if (todos[key].status == "ACTIVE") {
                var todo_element = activeTodoElement(key, todos[key]);
                parent.appendChild(todo_element);
            }
        });
    }
}

function completeElement(id, todo_data_json) {
    var todos = JSON.parse(todo_data_json);
    var parent = document.getElementById(id);
    parent.innerHTML = "";

    if (parent) {
        Object.keys(todos).forEach( function (key) {
            if (todos[key].status == "COMPLETE") {
                var todo_element = completeTodoElement(key, todos[key]);
                parent.appendChild(todo_element);
            }
        });
    }
}

function deleteElement(id, todo_data_json) {
    var todos = JSON.parse(todo_data_json);
    var parent = document.getElementById(id);
    parent.innerHTML = "";

    if (parent) {
        Object.keys(todos).forEach( function (key) {
            if (todos[key].status == "DELETED") {
                var todo_element = deleteTodoElement(key, todos[key]);
                parent.appendChild(todo_element);
            }
        });
    }
}

/*
function addTodoElements(id, todo_data_json) {
    var todos = JSON.parse(todo_data_json);
    var parent = document.getElementById(id);
    parent.innerHTML = "";
    if (parent) {
        Object.keys(todos).forEach(
            function (key) {
                var todo_element = activeTodoElement(key, todos[key]);
                parent.appendChild(todo_element);
        });
    }
}
*/
function activeTodoElement(id, todo_object) {
    var todo_element = document.createElement("div");
    todo_element.innerText = todo_object.title;
    todo_element.setAttribute("data-id", id);
    todo_element.setAttribute("class", "todoStatus" + todo_object.status);

    if (todo_object.status == "ACTIVE") {
        var complete_button = document.createElement("checkbox");
        complete_button.innerHTML = '<input type="checkbox">';
        complete_button.setAttribute("onclick", "completeTodoAJAX(" + id + ")");
        complete_button.setAttribute("class", "breathHorizontal");
        todo_element.appendChild(complete_button);
    }

    if (todo_object.status != "DELETED") {
        var delete_button = document.createElement("img");
        delete_button.style.height = "10px";
        delete_button.style.width = "10px";
        delete_button.setAttribute('src', '/image/cross.jpg');
        delete_button.setAttribute("onclick", "deleteTodoAJAX(" + id + ")");
        delete_button.setAttribute("class", "breathHorizontal");
        todo_element.appendChild(delete_button);
    }

    return todo_element;
}

function completeTodoElement(id, todo_object) {
    var todo_element = document.createElement("div");
    todo_element.innerText = todo_object.title;
    todo_element.setAttribute("data-id", id);
    todo_element.setAttribute("class", "todoStatus" + todo_object.status);

    if (todo_object.status == "COMPLETE") {
        var complete_button = document.createElement("checkbox");
        complete_button.innerHTML = '<input type="checkbox" checked="true">';
        complete_button.setAttribute("onclick", "completeTodoAJAX(" + id + ")");
        complete_button.setAttribute("class", "breathHorizontal");
        todo_element.appendChild(complete_button);
    }

    if (todo_object.status != "DELETED") {
        var delete_button = document.createElement("img");
        delete_button.style.height = "10px";
        delete_button.style.width = "10px";
        delete_button.setAttribute('src', '/image/cross.jpg');
        delete_button.setAttribute("onclick", "deleteTodoAJAX(" + id + ")");
        delete_button.setAttribute("class", "breathHorizontal");
        todo_element.appendChild(delete_button);
    }

    return todo_element;
}

function deleteTodoElement(id, todo_object) {
    var todo_element = document.createElement("div");
    todo_element.innerText = todo_object.title;
    todo_element.setAttribute("data-id", id);
    todo_element.setAttribute("class", "todoStatus" + todo_object.status);

    if (todo_object.status == "COMPLETE") {
        var complete_button = document.createElement("checkbox");
        complete_button.innerHTML = '<input type="checkbox" checked="true">';
        complete_button.setAttribute("onclick", "completeTodoAJAX(" + id + ")");
        complete_button.setAttribute("class", "breathHorizontal");
        todo_element.appendChild(complete_button);
    }

    if (todo_object.status != "DELETED") {
        var delete_button = document.createElement("img");
        delete_button.style.height = "10px";
        delete_button.style.width = "10px";
        delete_button.setAttribute('src', '/image/cross.jpg');
        delete_button.setAttribute("onclick", "deleteTodoAJAX(" + id + ")");
        delete_button.setAttribute("class", "breathHorizontal");
        todo_element.appendChild(delete_button);
    }

    return todo_element;
}

function getTodosAJAX() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "/api/todos", true);

    xhr.onreadystatechange = function () {
        if (xhr.readyState == RESPONSE_DONE) {
            if (xhr.status == STATUS_OK) {
                console.log(xhr.responseText);
                activeElement(TODO_LIST_ID_ACTIVE, xhr.responseText);
                completeElement(TODO_LIST_ID_COMPLETE, xhr.responseText);
                deleteElement(TODO_LIST_ID_DELETE, xhr.responseText);
            }
        }
    };
    xhr.send(data=null);
}

function addTodoAJAX() {
    var title = document.getElementById(NEW_TODO_INPUT_ID).value;

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/api/todos", true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    var data = "todo_title=" + encodeURI(title);

    xhr.onreadystatechange = function () {
        if (xhr.readyState == RESPONSE_DONE) {
            if (xhr.status == STATUS_OK) {
                activeElement(TODO_LIST_ID_ACTIVE, xhr.responseText);
                completeElement(TODO_LIST_ID_COMPLETE, xhr.responseText);
                deleteElement(TODO_LIST_ID_DELETE, xhr.responseText);
            }
            else {
                console.log(xhr.responseText);
            }
        }
    };
    xhr.send(data);
}

function completeTodoAJAX(id) {
    var xhr = new XMLHttpRequest();
    xhr.open("PUT", "/api/todos/" + id, true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    data = "todo_status=COMPLETE";

    xhr.onreadystatechange = function () {
        if (xhr.readyState == RESPONSE_DONE) {
            if (xhr.status == STATUS_OK) {
                activeElement(TODO_LIST_ID_ACTIVE, xhr.responseText);
                completeElement(TODO_LIST_ID_COMPLETE, xhr.responseText);
                deleteElement(TODO_LIST_ID_DELETE, xhr.responseText);
            }
            else {
                console.log(xhr.responseText);
            }
        }
    };
    xhr.send(data);
}

function deleteTodoAJAX(id) {
    var xhr = new XMLHttpRequest();
    xhr.open("DELETE", "/api/todos/" + id, true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    data = "todo_status=DELETED";

    xhr.onreadystatechange = function () {
        if (xhr.readyState == RESPONSE_DONE) {
            if (xhr.status == STATUS_OK) {
                activeElement(TODO_LIST_ID_ACTIVE, xhr.responseText);
                completeElement(TODO_LIST_ID_COMPLETE, xhr.responseText);
                deleteElement(TODO_LIST_ID_DELETE, xhr.responseText);
            }
            else {
                console.log(xhr.responseText);
            }
        }
    };
    xhr.send(data);
}


