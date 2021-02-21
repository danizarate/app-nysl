<template>
<div class="Mensajes">
    <Miheader />
    <Mensajesapp />
</div>
</template>

<script>
import Miheader from "@/components/Header.vue";
import Mensajesapp from "@/components/Mensajesapp.vue";

export default {
  name: "Login",

  components: {

    Miheader,
    Mensajesapp
    
  }
};
</script>

<style>

</style>