<template>
  <div class="add-todo">
    <input type="text" v-model="newTodo" placeholder="Enter todo..." />
    <button @click="addTodo">Add</button>
  </div>
</template>

<script>
export default {
  name: "AddTodo",
  data() {
    return {
      newTodo: ""
    };
  },
  methods: {
    addTodo() {
      console.log("Emitting newtodo value");
      if (this.newTodo.trim() !== "") {
        this.$emit("addTodo", this.newTodo);
      }
      this.newTodo = "";
    }
  }
};
</script>

<style scoped>
.add-todo {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

input[type="text"] {
  padding: 10px;
  width: 300px;
  border-radius: 5px;
  border: 1px solid #ccc;
  margin-right: 10px;
  font-size: 16px;
}

button {
  padding: 10px 20px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}

button:hover {
  background-color: #2c8a63;
}
</style>
