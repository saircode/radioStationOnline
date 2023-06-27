<script>
    import {computed, onMounted, ref} from 'vue'
    import {RouterLink} from 'vue-router' ;    
    import Player from '../components/Player.vue';
    import serviceCityStations from '../services/serviceCityStations';
    export default {
        name: 'navLayaut',
        components: {
            Player,
            RouterLink
        },
        setup() {
            onMounted(()=>{
                getCitiesStation();
            })

            let citySelected = ref(null),
                cities = ref(),

                getCitiesStation = (()=>{
                    serviceCityStations.getCitiesStations()
                    .then(res=>{
                        cities.value = res.data;
                    })
                })


            
            return {
                citySelected, 
                cities,getCitiesStation
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
            <player :audioUrl="citySelected ? citySelected.url_live_audio : null" />
        </div>
        </div>
        
    </nav>
    <br><br>

</template>