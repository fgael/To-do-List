const todosApp = {
  data() {
    return {
        todos: [],
        newTodo: {
          done: false
        },
        count: 1
    }
  },
  methods: {
    addTodo: function() {
      if (this.newTodo.text) {
        this.newTodo.count = this.count++;
        this.todos.push(this.newTodo);
        this.newTodo = {
          done: false
        };
        localStorage.setItem("todos", JSON.stringify(this.todos));
      } else {
        alert ("To-do text is required")
      }
    },
    storeTodos(){
      localStorage.setItem("todos", JSON.stringify(this.todos));
    },
    clearTodos(){
      this.todos = [];
      localStorage.removeItem("todos");
    }
  },
  created() {
    this.todos = localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : this.todos;
    this.count = localStorage.getItem("todos") ? this.todos[this.todos.length -1].count +1 : 1;
  }
};

Vue.createApp(todosApp).mount('#app');
