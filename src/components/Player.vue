<script>
import { computed, reactive, ref, watch } from 'vue';
export default {
    name: 'Player',
    props: {
        audioUrl: {
            required: true, 
            default: null,
            type: String
        }
    },
    setup(props, {emit}) {
        let playing = ref(false),
            audio = ref(null);

        const play = (()=>{
            if(!props.audioUrl) {
                alert('Seleccione una ciudad');
                playing.value = false;
                return;
            }

            audio.value.play();
            playing.value = true;

        })

        const pause = (()=>{
            audio.value.pause();
            playing.value = false;
        })

        watch(()=>playing.value, ( currentValue , oldValue) => { 
            if(currentValue)play()
            else pause();
        });

        watch(()=> props.audioUrl, (currentValue, oldValue)=> {
            if(currentValue){

                if(playing.value) pause();

                setTimeout(() => {
                    audio.value = null;
                }, 100);
        
                
                setTimeout(() => {
                    audio.value = new Audio(currentValue);
                    play()
                }, 1000);
            }

                

        })

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