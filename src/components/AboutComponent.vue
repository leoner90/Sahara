<!-- Get object as a props and displays it -->
<template>
  <div id="About" class="section">
    <div style="display: flex; flex-direction: row;"> 
      <div style="flex:1;">
        <h1> PAR MUMS </h1>
        <p>
          Frizētavā  strādā pieredzējuši, profesionāli meistari, kuri nepārtraukti pilnveidojas.
            piedāvā friziera, manikīra un pedikīra pakalpojumus. Frizieri strādā ar profesionālo "Matrix" matu kosmētiku.
          Salonā var iegādāties profesionālos matu kopšanas līdzekļus: šampūnus, matu eļļas, veidošanas līdzekļus, kā arī dāvanu komplektus. 
        </p>
      </div>
      <div style="flex:1;">
        <img src="https://img.pp.lv/storage/40/8d/408d367a236ace50d00e9d6213ffc4dd/0x500.jpeg" />
        <img src="https://lv.lumberjackbarbershop.com/wp-content/uploads/barbershops-carousel-audeju-4.jpg"  height="180px" width="200px"/>
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
 
.raz {
  background-image: url('~@/assets/main.png');
  background-position: center; 
  background-size: cover;
  flex:1;   
  background-size: contain;
  background-repeat: no-repeat;
  opacity: 0.88;
}

#About {
  height: 65vh;
  padding: 0 12.5%;
}
</style>