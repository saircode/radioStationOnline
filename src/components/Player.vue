<script>
import { reactive, ref, watch } from 'vue';
export default {
    name: 'Player',
    props: {
        audioUrl: {
            required: true, 
            default: 'https://18123.live.streamtheworld.com/TROPICANAAAC.aac',
            type: String
        }
    },
    setup(props, {emit}) {
        let playing = ref(false),
            audio = ref (new Audio(props.audioUrl) )

        const play = (()=>{
            audio.value.play();
        })

        const pause = (()=>{
            audio.value.pause();
        })

        watch(()=>playing.value, ( currentValue , oldValue) => { 
            if(currentValue)play()
            else pause();
        });

        return {
            playing,
            play,pause,audio
        }
    },
}
</script>
<template>
    <div class="form-inline my-2 my-lg-0 float-right" style="cursor: pointer;" @click="playing = !playing">
        <img v-if="!playing" src="@/assets/img/boton-de-play.png" alt="" class="img-fluid" width="50">
        <img v-if="playing" src="@/assets/img/pausa.png" alt="" class="img-fluid" width="50">
    </div>
</template>