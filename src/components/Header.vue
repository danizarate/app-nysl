<template>
    <div id="Miheader">

        <nav class="navbar navbar-dark fixed-top newnavbar">
                
            <a class="navbar-brand" href="#">
                <img src="../assets/img/nysl_logo.png" alt="" width="33" height="33" class="d-inline-block align-top">
            NYSL
            </a>
            
            <button type="button"  class="btn dropdown-toggler custom-toggler" data-toggle="dropdown" aria-expanded="false">
                <span class="navbar-toggler-icon"></span>
            </button>
                
            <ul class="dropdown-menu dropdown-menu-end newdropmenu">
                <!-- <li><button class="dropdown-item" type="button"><router-link to="/">Home</router-link></button></li> -->
                <li><button class="dropdown-item textli" type="button" onclick="location.href='Home';">Home</button></li>
                <li><button class="dropdown-item textli" type="button"><router-link to="/ListadodePartidos">Game Info</router-link></button></li>
                <li><button class="dropdown-item textli" type="button">Rules</button></li>
                <li><button class="dropdown-item textli" type="button">Contact</button></li>
                <li><button class="dropdown-item textli" type="button">Login</button></li>
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

.newnavbar{
    background-color: rgba(0, 0, 0, 0.9);
    font-family: 'Anton', sans-serif;
}

.newdropmenu {
    background-color: rgba(0, 0, 0, 0.9);
    width: 30%;
}

.textli {
    color: rgb(10, 86, 10);
}

.custom-toggler .navbar-toggler-icon { 
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(0, 128, 0, 0.8)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E"); 
}

</style>