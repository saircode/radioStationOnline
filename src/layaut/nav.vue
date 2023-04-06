<script>
    import {computed, ref} from 'vue'
    import {RouterLink} from 'vue-router' ;    
    import Player from '../components/Player.vue';
    export default {
        name: 'navLayaut',
        components: {
            Player,
            RouterLink
        },
        setup() {
            let citySelected = ref(null),
                cities = ref([
                    {name: 'Medellin - besame' , urlAudio: 'https://24083.live.streamtheworld.com/BESAME_MEDELLINAAC.aac'},
                    {name: 'Bogota - tropicana' , urlAudio: 'https://18123.live.streamtheworld.com/TROPICANAAAC.aac'},
                    {name: 'Monteria - olimpica' , urlAudio: 'https://20833.live.streamtheworld.com/OLP_MONTERIAAAC.aac?dist=OlpMonWeb'},
                    {name: 'Barranquilla - olimpica' , urlAudio: 'https://26653.live.streamtheworld.com/OLP_BARRANQUILLAAAC.aac'}
                ])
            
            return {
                citySelected, 
                cities
            }
        },

        computed : {
            actualRoute(){
                return this.$route.name;
            }
        }
    }
</script>

<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top mb-4">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Radio Station Online</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item" :class="{'active':actualRoute ==='inicio'}">
                    <router-link class="nav-link" to="/" >Inicio</router-link>
                </li>
                <li class="nav-item" :class="{'active':actualRoute ==='noticias'}">
                    <router-link class="nav-link" to="/noticias" >Noticias</router-link>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Locutores</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Programación</a>
                </li>
                <li class="nav-item dropdown active" >
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown"
                        aria-haspopup="true" aria-expanded="false">
                        {{ citySelected ? citySelected.name : 'Seleccionar ciudad' }}
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <a class="dropdown-item" v-for="(city,key) in cities" :key="key"
                            @click="citySelected=city" href="#">
                            {{ city.name }}
                        </a>
                    </div>
                </li>
            </ul>
            <player :audioUrl="citySelected ? citySelected.urlAudio : null" />
        </div>
        </div>
        
    </nav>
    <br><br>

</template>