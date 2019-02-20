
function TodoItem(id, inputText) {
    this.id = id;
    this.inputText = inputText;
    this.checked = false;
}

TodoItem.prototype.addItem = function (todoText) {
    var todoID = new Date().getTime();  //id = timestamp
    if (todoText) {
        var newTodoItem = document.createElement('div');
        newTodoItem.classList.add('list-item');
        var checkBox = document.createElement('input');
        checkBox.type = 'checkbox';
        checkBox.setAttribute('todo-action', 'selectTodoItem');
        newTodoItem.appendChild(checkBox);
        var input = document.createElement('p');
        input.textContent = todoText;
        newTodoItem.appendChild(input);
        newTodoItem.setAttribute('todo-id', `${todoID}`);
        var close = document.createElement('button');
        close.textContent = 'X'
        close.setAttribute('todo-action', 'removeTodoItem');
        newTodoItem.appendChild(close);

        return { todoItem: newTodoItem, todoID: todoID };
    }
};

var getClosest = function (element, attribute) {
    while (!element.getAttribute(attribute)) {
        element = element.parentElement;
    }
    return element;
}

TodoItem.prototype.init = function (todoManager) {
    document.getElementById('list-container').addEventListener('click', function (event) {

        var id = parseInt(getClosest(event.target, 'todo-id').getAttribute('todo-id'));

        switch (event.target.getAttribute('todo-action')) {
            case "removeTodoItem": {

                for (var i = 0; i < todoManager.todoList.length; i++) {
                    if (id === todoManager.todoList[i].id) {
                        todoManager.todoList.splice(i, 1);
                        getClosest(event.target, 'todo-id').remove();
                    }
                }
            } break;

            case "selectTodoItem": {
                for (var i = 0; i < todoManager.todoList.length; i++) {
                    if (id === todoManager.todoList[i].id) {
                        todoManager.todoList[i].checked = event.target.checked;
                    }
                }
            } break;
        }
    });

}
export {
    TodoItem
};