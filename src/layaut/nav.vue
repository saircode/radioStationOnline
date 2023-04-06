<script>
    import {ref} from 'vue'
    import Player from '../components/Player.vue';
    export default {
        name: 'navLayaut',
        components: {
            Player
        },
        setup() {
            let citySelected = ref(null),
                cities = ref([
                    {name: 'Medellin - besame' , urlAudio: 'https://24083.live.streamtheworld.com/BESAME_MEDELLINAAC.aac'},
                    {name: 'Bogota - tropicana' , urlAudio: 'https://18123.live.streamtheworld.com/TROPICANAAAC.aac'},
                    {name: 'Monteria - radio 1' , urlAudio: 'https://www.colombia.com/dfdcae47-7a77-45c9-9542-f1da9eda83da'},
                    {name: 'Cali' , urlAudio: 'https://sonic.cloudstreaming.eu:10998/;'},
                    {name: 'Cartagena - la cariñosa' , urlAudio: 'https://www.colombia.com/fe57c759-c511-44ac-b143-62410fe60126'},
                    {name: 'Barranquilla - olimpica' , urlAudio: 'https://26653.live.streamtheworld.com/OLP_BARRANQUILLAAAC.aac'}
                ])
            
            return {
                citySelected, 
                cities
            }
        },
    }
</script>

<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <a class="navbar-brand" href="#">Radio Station Online</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="#">Inicio <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Noticias</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Locutores</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Programación</a>
                </li>
                <li class="nav-item dropdown">
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
    </nav>


</template>