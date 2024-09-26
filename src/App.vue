<template>
  <div id="app" class="full-screen">
    <nav class="top-header">
      <div class="nav-links">
        <router-link to="/" class="nav-item">
          <span class="material-icons">home</span>
          <span>Home</span>
        </router-link>
        <router-link to="/completed" class="nav-item">
          <span class="material-icons">check_circle</span>
          <span>Completed</span>
        </router-link>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style scoped>
/* Ensure the component takes up full screen */
.full-screen {
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
  position: relative;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.top-header {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  background-color: #42b983;
  padding: 15px 20px;
  position: absolute;
  top: 0;
  left: 0;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.nav-links {
  display: flex;
  align-items: center;
}

.nav-item {
  display: flex;
  align-items: center;
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
  padding: 10px 20px;
  margin-right: 20px;
  transition: background-color 0.3s, color 0.3s;
}

.nav-item:hover {
  background-color: #36956b;
  border-radius: 5px;
}

.nav-item span.material-icons {
  font-size: 1.5rem;
  margin-right: 8px;
}

h1 {
  font-size: 3rem;
  color: #42b983;
  margin-bottom: 20px;
  margin-top: 80px; /* Adjusting for the header height */
}

input[type="text"] {
  padding: 10px;
  font-size: 1.2rem;
  border: 2px solid #42b983;
  border-radius: 5px;
  margin-right: 10px;
  width: 80%;
}

button {
  padding: 12px 20px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1.2rem;
  cursor: pointer;
  margin-top: 10px;
}

button:hover {
  background-color: #36956b;
}

ul {
  list-style-type: none;
  padding: 0;
  width: 100%;
}

li {
  padding: 20px;
  border-bottom: 1px solid #ddd;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: background-color 0.3s;
}

li:hover {
  background-color: #f9f9f9;
}

span {
  font-size: 1.2rem;
  text-decoration: none;
  flex-grow: 1;
}

span.completed {
  text-decoration: line-through;
  color: #999;
}

input[type="checkbox"] {
  margin-right: 10px;
  transform: scale(1.2);
}

.todo-actions {
  display: flex;
  gap: 10px;
}

button.edit,
button.delete {
  font-size: 1rem;
}

button.delete {
  background-color: #ff6b6b;
}

button.delete:hover {
  background-color: #ff4d4d;
}
.top-header {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  background-color: #42b983;
  padding: 0; /* Remove padding from the header */
  position: absolute;
  top: 0;
  left: 0;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  height: 60px; /* Define a fixed height for the header */
}

.nav-links {
  display: flex;
  align-items: center;
  height: 100%; /* Make the nav-links fill the header's height */
}

.nav-item {
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
  padding: 0 20px; /* Adjust padding to space out the links horizontally */
  margin: 0; /* Remove margin */
  height: 100%; /* Make the nav-item fill the height of the header */
  transition: background-color 0.3s, color 0.3s;
  cursor: pointer; /* Add cursor pointer to indicate clickability */
}

.nav-item:hover {
  background-color: #36956b;
  border-radius: 0; /* Remove border-radius if you want the background to fill the entire height */
}

.nav-item span.material-icons {
  font-size: 1.5rem;
  margin-right: 8px;
}

</style>
