<template>
    <div id="Miheader">
        <!-- Codigo del menu principal -->
        <nav class="navbar bg-dark navbar-dark">
                
            <a class="navbar-brand" href="/">
                <img src="../assets/img/nysl_logo.png" alt="" width="30" height="30" class="d-inline-block align-top">
            NYSL
            </a>
            
            <button type="button"  class="btn dropdown-toggler " data-toggle="dropdown" aria-expanded="false">
                <span class="navbar-toggler-icon" ></span>
            </button>
                
            <ul class="dropdown-menu dropdown-menu-end">
                <li><button class="dropdown-item" type="button"><router-link to="/">Home</router-link></button></li>
                <li><button class="dropdown-item" type="button"><router-link to="/ListadodePartidos">Game Info</router-link></button></li>
                <li><button class="dropdown-item" type="button">Rules</button></li>
                <li><button class="dropdown-item" type="button">Contact</button></li>
                <li><button class="dropdown-item" type="button">About</button></li>
                <li><button class="dropdown-item" type="button">Login</button></li>
            </ul> 
               
        </nav>
        
    </div>
</template>

<script>
export default {
    name: "MyHeader",
    
}

</script>


<style scoped>

</style>