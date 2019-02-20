
function TodoActionBar() {

}
TodoActionBar.prototype.initialize = function (todoManager) {

    document.getElementById('add-todo-item').addEventListener('click', function () {
        addTodoItem(todoManager);
    });

    document.addEventListener('keypress', function (event) {
        if (event.which === 13) {
            addTodoItem(todoManager);
        }
    });

    document.getElementById('delete-todo-item').addEventListener('click', function () {
        deleteSelectedItem(todoManager);
    });

    document.getElementById('select-all-todo-item').addEventListener('click', function () {
        selectTodoItem(todoManager)
    });
}

var addTodoItem = function (todoManager) {
    var todoText = document.getElementById('input-text').value;
    if (todoText) {
        document.getElementById('input-text').value = "";
        todoManager.addTodoItem(todoText);
    }
};

var deleteSelectedItem = function (todoManager) {
    todoManager.deleteSelectedItem();
}

var selectTodoItem = function (todoManager) {
    todoManager.selectTodoItem();
}
export { TodoActionBar };