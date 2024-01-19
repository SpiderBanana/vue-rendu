<script>
export default {
  name: 'App'
};
</script>


<template>
  <div id="app">
    <nav>
      <ul>
        <li><router-link to="/">Clavier Numérique</router-link></li>
        <li><router-link to="/calls">Journal d'Appels</router-link></li>
        <li><router-link to="/contacts">Liste de Contacts</router-link></li>
        
      </ul>
    </nav>

    <router-view/>
  </div>
</template>


<style scoped>
nav ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

nav li {
  margin: 0 10px;
}

nav a {
  text-decoration: none; 
  color: inherit; 
}


</style>
