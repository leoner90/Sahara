<!-- Get object as a props and displays it -->
<template>
  <div class="menu">
    <div id="nav">
      <router-link to="/Home">Home</router-link> |
      <router-link to="/Hairdresser">About</router-link> |
      <router-link to="/Beauty">Services</router-link> |
      <router-link to="/Workers">komanda</router-link> |
      <router-link to="/Prices">Prices</router-link> |
      <router-link to="/Contacts">Contact</router-link> |
    </div>
  </div>
</template>

<script>
export default { 
  props: {
  },
  methods: {
    scrollTo() {
      alert(1);
    }
  }
}

</script>

<style scoped>
.menu {
     padding: 0 12.5% ; 
     position: fixed;
     left:0;
     right: 0;
     z-index: 999;
     top:0;
     background: rgba(55,9,9,0.8);
     color: #F9BFBF;
}
 #nav {
  padding: 30px;
  text-align:left;
  
}

#nav a {
  font-weight: bold;
  color: #F9BFBF;
}

#nav a.router-link-exact-active {
  color: #F9BFBF;
}

</style>