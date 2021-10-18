<template>
  <div >
   
    <router-view/>
    <AboutComponent />
    <ServicesConmopnent/>
    <WorkersComponent/>
    <PricesComponent />
    <ContactsComponent/>
  </div> 
</template>

<script>
// @ is an alias to /src
 
import AboutComponent from '@/components/AboutComponent.vue'
import ServicesConmopnent from '@/components/ServicesConmopnent.vue'
import WorkersComponent from '@/components/WorkersComponent.vue'
import PricesComponent from '@/components/PricesComponent.vue'
import ContactsComponent from '@/components/ContactsComponent.vue'

export default {
  name: 'Home',
  components: {
   
    AboutComponent,
    ServicesConmopnent,
    WorkersComponent,
    PricesComponent,
    ContactsComponent
  },
  data () {
  return {
    sectionObserver: null
  }
},
mounted () {
  this.observeSections()
},
methods: {
  observeSections() {
    try {
      this.sectionObserver.disconnect()
    } catch (error) {console.log('sectionObserver ERR')}

    const options = {
      rootMargin: '0px 0px',
      threshold: 0
    }
    this.sectionObserver = new IntersectionObserver(this.sectionObserverHandler, options)
  
    // Observe each section
    const sections = document.querySelectorAll('.section')
    sections.forEach(section => {
      this.sectionObserver.observe(section)
    })
  },
  sectionObserverHandler (entries) {
    for (const entry of entries) {
      if (entry.isIntersecting) {
          const sectionId = entry.target.id
          console.log(11 , sectionId)
          //  this.$router.push({ hash: `#${sectionId}` })
          this.$router.replace({hash: `${sectionId}` })
      }
    }
  }
}
}
</script>


<style>
html {
    height: 100%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #EDEDED;
}

 body {
   margin: 0;
 }

 .section {
   min-height: 100%;
    
 }
</style>
