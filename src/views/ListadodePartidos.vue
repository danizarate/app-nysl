<template>
<div class="ListadoPartidos">
    <Miheader />
    <ListadoPartidos />
</div>
</template>

<script>
import Miheader from "@/components/Header.vue";
import ListadoPartidos from "@/components/ListadoPartidos.vue";

export default {
  name: "Game Info",

  components: {

    Miheader,
    ListadoPartidos
    
  }
};
</script>

<style>

</style>