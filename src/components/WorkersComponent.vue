<!-- Get object as a props and displays it -->
<template>
  <div id="Workers" class="section">
    <div style="display:flex;   flex-direction:row; padding: 0 12.5%;
     background-image: url('https://previews.123rf.com/images/natbasil/natbasil1512/natbasil151200010/49870137-hairdresser-seamless-background-.jpg'); 
    background-attachment: fixed;
    "> 
      <div class="workerCart">
        <div class="workerPfoto" > </div>
        <div style="flex:3;">
          <p>ALLA</p>
          <p>5 Years of exprience</p>
          <p>Man/woman hairdrasing and styling</p>
          <p>Telephone 26887118</p>
        </div>
      </div>
 

      <div class="workerCart">
        <div class="workerPfoto" > </div>
        <div style="flex:3;">
          <p>VALERA</p>
          <p>5 Years of exprience</p>
          <p>Man/woman hairdrasing and styling</p>
          <p>Telephone 26887118</p>
        </div>
      </div>

       <div class="workerCart">
        <div class="workerPfoto" > </div>
        <div style="flex:3;">
          <p>INGA</p>
          <p>5 Years of exprience</p>
          <p>Man/woman hairdrasing and styling</p>
          <p>Telephone 26887118</p>
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
 
.raz {
  background-image: url('~@/assets/main.png');
  background-position: center; 
  background-size: cover;
  flex:1;   
  background-size: contain;
  background-repeat: no-repeat;
  opacity: 0.88;
}
.workerCart {
  flex: 1 ;
  display:flex;
  flex-direction: column; 
  background: rgba(255,255,255,0.98); 
  padding: 10px; 
  min-height: 500px;
  border-radius: 5px;
  margin: 10px;
}
.workerPfoto {
  flex: 1;
  background-image: url('https://thefha.org.uk/wp-content/uploads/Femal-Stylist-Thumbs-Up-Smiling.png');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;
  height: 150px;
  width: 150px;
  margin: 0 auto;
  border-radius: 360%;

}
</style>