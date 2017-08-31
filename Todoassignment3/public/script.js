console.log("Is Script File Loading");
const RESPONSE_DONE = 4;
const STATUS_OK = 200;
/*const TODOS_LIST_ID_container1 = "active";
const TODOS_LIST_ID_container3 ="complete";
const TODOS_LIST_ID_container4="delete";*/
const TODOS_LIST_ID = "todos_list_div_act";
const TODOS_LIST_ID_COMP ="todos_list_div_comp";
const TODOS_LIST_ID_DEL ="todos_list_div_del";
const NEW_TODO_INPUT_ID = "new_todo_input";



// IF you want to run a function everytime the page loads
// window.onload OR document.onload
// HW : Differences : Subtle difference when this method is called
// window.onload - more widely supported
//
window.onload = getTodosAJAX();

// addTodos
// id = "todos_list_div"
// todos_data_json =
// parent = div
function addTodoElements(id, todos_data_json){

    var todos = JSON.parse(todos_data_json);

    var parent = document.getElementById(id);
    // HW : Figure out "encouraged" view of doing this
    parent.innerHTML = "";

    if (parent){

        // todos { id : {todo object}, id : {todo:object} ..}
        Object.keys(todos).forEach(

            function(key) {
                if(todos[key].status="ACTIVE") {
                    var todo_element = createTodoElement(key, todos[key]);
                    parent.appendChild(todo_element);
                }
            }
        )
    }

  /* if(parent){
       Object.keys(todos).forEach(
           function(key){
               if(todos[key].status="ACTIVE"){
               var todo_element=activeTodoElement(key,todos[key]);
               parent.appendChild(todo_element);
               }

               if(todo[key].status="COMPLETED"){
                   var todo_element=completeTodoElement(key,todos[key]);
                   parent.appendChild(todo_element);
               }

               if(todo[key].status="DELETED"){
                   var todo_element=deleteTodoElement(key,todos[key]);
                   parent.appendChild(todo_element);
               }
           }
       )
   }*/
    function completeTodoElements(id, todos_data_json){

        var todos = JSON.parse(todos_data_json);

        var parent = document.getElementById(id);
        // HW : Figure out "encouraged" view of doing this
        parent.innerHTML = "";

        if (parent){

            // todos { id : {todo object}, id : {todo:object} ..}
            Object.keys(todos).forEach(

                function(key) {
                    if(todos[key].status="COMPLETE") {
                        var todo_element = compcreateTodoElement(key, todos[key]);
                        parent.appendChild(todo_element);
                    }
                }
            )
        }

}

    function deleteTodoElements(id, todos_data_json){

        var todos = JSON.parse(todos_data_json);

        var parent = document.getElementById(id);
        // HW : Figure out "encouraged" view of doing this
        parent.innerHTML = "";

        if (parent){

            // todos { id : {todo object}, id : {todo:object} ..}
            Object.keys(todos).forEach(

                function(key) {
                    if(todos[key].status="DELETE") {
                        var todo_element = delcreateTodoElement(key, todos[key]);
                        parent.appendChild(todo_element);
                    }
                }
            )
        }

    }
// id : 1
// todo_object : {title: A Task, status : ACTIVE}
function createTodoElement(id, todo_object){

    var todo_element = document.createElement("div");
    todo_element.innerText = todo_object.title;
    // HW: Read custom data-* attributes
    todo_element.setAttribute(
        "data-id", id
    );

    todo_element.setAttribute(
        "class", "todoStatus"+ todo_object.status + " " + "breathVertical"
    );


    if (todo_object.status == "ACTIVE"){

        var complete_button = document.createElement("checkbox");
        complete_button.innerHTML = '<input type="checkbox">';
        complete_button.setAttribute("onclick", "completeTodoAJAX("+id+")");
        complete_button.setAttribute("class", "breathHorizontal");
        todo_element.appendChild(complete_button);
    }


    if (todo_object.status != "DELETED"){

        var delete_button = document.createElement("img");
        delete_button.style.height = "10px";
        delete_button.style.width = "10px";
        delete_button.setAttribute('src', '/image/cross.jpg');
        delete_button.setAttribute("onclick","deleteTodoAJAX("+id+")");
        delete_button.setAttribute("class","breathHorizontal");
        todo_element.appendChild(delete_button);

        // HW : Add this functionality
        // Add Delete Buttons for ACTIVE, COMPLETE TODO ITEMS
        // add a delete button
        // HW : Write this code
    }




    return todo_element;

}
// Repo URL - https://github.com/malikankit/todo-august-28

    function compcreateTodoElement(id, todo_object){

        var todo_element = document.createElement("div");
        todo_element.innerText = todo_object.title;
        // HW: Read custom data-* attributes
        todo_element.setAttribute(
            "data-id", id
        );

        todo_element.setAttribute(
            "class", "todoStatus"+ todo_object.status + " " + "breathVertical"
        );


        if (todo_object.status == "COMPLETE"){

            var complete_button = document.createElement("checkbox");
            complete_button.innerHTML = '<input type="checkbox">';
            complete_button.setAttribute("onclick", "completeTodoAJAX("+id+")");
            complete_button.setAttribute("class", "breathHorizontal");
            todo_element.appendChild(complete_button);
        }


        if (todo_object.status != "DELETED"){

            var delete_button = document.createElement("img");
            delete_button.style.height = "10px";
            delete_button.style.width = "10px";
            delete_button.setAttribute('src', '/image/cross.jpg');
            delete_button.setAttribute("onclick","deleteTodoAJAX("+id+")");
            delete_button.setAttribute("class","breathHorizontal");
            todo_element.appendChild(delete_button);

            // HW : Add this functionality
            // Add Delete Buttons for ACTIVE, COMPLETE TODO ITEMS
            // add a delete button
            // HW : Write this code
        }




        return todo_element;

    }

    function delcreateTodoElement(id, todo_object){

        var todo_element = document.createElement("div");
        todo_element.innerText = todo_object.title;
        // HW: Read custom data-* attributes
        todo_element.setAttribute(
            "data-id", id
        );

        todo_element.setAttribute(
            "class", "todoStatus"+ todo_object.status + " " + "breathVertical"
        );


        if (todo_object.status == "COMPLETE"){

            var complete_button = document.createElement("checkbox");
            complete_button.innerHTML = '<input type="checkbox">';
            complete_button.setAttribute("onclick", "completeTodoAJAX("+id+")");
            complete_button.setAttribute("class", "breathHorizontal");
            todo_element.appendChild(complete_button);
        }


        if (todo_object.status != "DELETED"){

            var delete_button = document.createElement("img");
            delete_button.style.height = "10px";
            delete_button.style.width = "10px";
            delete_button.setAttribute('src', '/image/cross.jpg');
            delete_button.setAttribute("onclick","deleteTodoAJAX("+id+")");
            delete_button.setAttribute("class","breathHorizontal");
            todo_element.appendChild(delete_button);

            // HW : Add this functionality
            // Add Delete Buttons for ACTIVE, COMPLETE TODO ITEMS
            // add a delete button
            // HW : Write this code
        }




        return todo_element;

    }
    //you will
function getTodosAJAX(){

    // xhr - JS object for making requests to server via JS
    var xhr = new XMLHttpRequest();
    //
    xhr.open("GET", "/api/todos", true);

    xhr.onreadystatechange = function(){

        if (xhr.readyState == RESPONSE_DONE){

            if(xhr.status == STATUS_OK){
                console.log(xhr.responseText);
                addTodoElements(TODOS_LIST_ID, xhr.responseText);
                completeTodoElements(TODOS_LIST_ID_COMP,xhr.responseText);
                deleteTodoElements(TODOS_LIST_ID_DEL,xhr.responseText);
            }
        }
    }// end of callback

    xhr.send(data=null);

}



function addTodoAJAX(){

    var title= document.getElementById(NEW_TODO_INPUT_ID).value;

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/api/todos", true);
    // the data in this body will be of this form
    xhr.setRequestHeader(
        "Content-type", "application/x-www-form-urlencoded");

    // HW : Read format of X-W-F-U-E
    // HW : Look up encodeURI
    var data = "todo_title=" + encodeURI(title);

    xhr.onreadystatechange = function(){

        if (xhr.readyState == RESPONSE_DONE) {
            if (xhr.status == STATUS_OK) {
                addTodoElements(TODOS_LIST_ID, xhr.responseText);
                completeTodoElements(TODOS_LIST_ID_COMP,xhr.responseText);
                deleteTodoElements(TODOS_LIST_ID_DEL,xhr.responseText);
            }
            else {
                console.log(xhr.responseText);
            }
        }
    }

    xhr.send(data);

}



function completeTodoAJAX(id){

    // Make a AJAX Request to update todo with the above id
    // If Response is 200 : refreshTodoElements


    var xhr = new XMLHttpRequest();
    xhr.open("PUT", "/api/todos/"+id, true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    data = "todo_status=COMPLETE";

    xhr.onreadystatechange = function(){

        if (xhr.readyState == RESPONSE_DONE) {
            if (xhr.status == STATUS_OK) {
                addTodoElements(TODOS_LIST_ID, xhr.responseText);
                completeTodoElements(TODOS_LIST_ID_COMP,xhr.responseText);
                deleteTodoElements(TODOS_LIST_ID_DEL,xhr.responseText);
            }
            else {
                console.log(xhr.responseText);
            }
        }
    }



    xhr.send(data);

    // The body can contain these parameters (XWFUE format)
    //todo_title=newtitle
    //todo_status= ACTIVE/COMPLETE/DELETED



    }







function deleteTodoAJAX(id) {

    // Make a AJAX Request to update todo with the above id
    // If Response is 200 : refreshTodoElements


    var xhr = new XMLHttpRequest();
    xhr.open("DELETE", "/api/todos/" + id, true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    data = "todo_status=COMPLETE";

    xhr.onreadystatechange = function () {

        if (xhr.readyState == RESPONSE_DONE) {
            if (xhr.status == STATUS_OK) {
                addTodoElements(TODOS_LIST_ID, xhr.responseText);
                completeTodoElements(TODOS_LIST_ID_COMP, xhr.responseText);
                deleteTodoElements(TODOS_LIST_ID_DEL, xhr.responseText);
            }
            else {
                console.log(xhr.responseText);
            }
        }
    }


    xhr.send(data);

    // The body can contain these parameters (XWFUE format)
    //todo_title=newtitle
    //todo_status= ACTIVE/COMPLETE/DELETED


}}



