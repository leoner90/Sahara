<!-- Get object as a props and displays it -->
<template>
  <div id="Home"  class="section">
    <div class="dca" >
      <MenuComponent />
      <div style="padding: 0 12.5% ; display: flex; align-items: center; justify-content: center; width: 100%;background: rgba(62,43,43,0.47); padding-right:50%;">
        <h1 style="color: #fff; font-family: 'Risque', cursive; font-size: 3vw; color: #FFCDCD; transform: rotate(357deg);font-style: italic;">
        Frizētava <br />
        un <br />
        Skaistumkopšanas salons
        </h1>
      </div>
    </div>
  </div>
</template>

<script>
import MenuComponent from '@/components/MenuComponent.vue';
export default { 
  props: {
  },
  components: {
    MenuComponent,
  }
}
</script>

<style scoped>
.dca {
  background-attachment: fixed;
  display: flex; height: 65vh; flex-direction: row;  
  background-image: url('~@/assets/main.png');
  background-repeat:no-repeat;
  background-position:80% top;
}

</style>