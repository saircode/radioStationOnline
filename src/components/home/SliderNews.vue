<script>
import { ref } from 'vue'
    export default {
        name: 'SliderNew',
        setup(){
            let dataNews = ref([
                {tag: 'noticia-1', title: 'Noticia 1' , body: 'Lorem ipsum dolor', img: '/assets/img/newsSliderDemo/1.svg'},
                {tag: 'noticia-2', title: 'Noticia 2' , body: 'Lorem ipsum dolor', img: '/assets/img/newsSliderDemo/2.svg'},
                {tag: 'noticia-3', title: 'Noticia 3' , body: 'Lorem ipsum dolor', img: '/assets/img/newsSliderDemo/3.svg'}
            ]);

            return {
                dataNews
            }
        }
    }
</script>


<template>
    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item" :class="{'active' : key===0}" v-for="(item , key) in dataNews" :key="key">
          <img class="d-block w-100" :src="item.img" :alt="item.title">
        </div>
        
      </div>
      <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
</template>