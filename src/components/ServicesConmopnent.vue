<!-- Get object as a props and displays it -->
<template>
  <div id="Services" class="section" style="padding: 0 12.5%;">
    <div style="display: flex; height:100vh; flex-direction: row; background-color: #eee; flex-wrap: wrap ">
      <div class="servicesComponent" >
        <div class="services-imgs"></div>  
        <div>
            hair coloring
        </div>
      </div>

       <div class="servicesComponent" >
        <div class="services-imgs"></div>  
        <div >
            hair Frizetava
        </div>
      </div>
      <div class="servicesComponent" >
        <div class="services-imgs"></div>  
        <div>
           MANIKĪRS, PEDIKĪRS
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default { 
  props: {
  },
}
</script>

<style scoped>
 .services-imgs {
    flex: 1;
    height: 300px;
    margin: 10px;
    background-image: url('https://klinegroup.com/wp-content/uploads/hair-coloring-720x377.png');
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
 }

 .servicesComponent {
    flex: 1 0 33%;  
 }
</style>