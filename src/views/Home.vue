<template>
  <div class="home">
    <Miheader />
    <ContainerHome />
  </div>
 
</template>

<script>
// @ is an alias to /src

import Miheader from "@/components/Header.vue";
import ContainerHome from "@/components/ContainerHome.vue";


export default {
  name: "Home",

  components: {

    Miheader,
    ContainerHome
    
  }
};
</script>
