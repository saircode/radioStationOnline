<script>
import { ref } from "vue";
export default {
  name: "DetailNews",
  setup() {
    let dataNew = ref({
      tag: "noticia-1",
      date: "6 de abril de 2023",
      author: "Sair Sanchez",
      title: "Noticia 1 tal cosa",
      body: "Lorem ipsum dolor text body",
      img: "/assets/img/newsSliderDemo/1.svg",
    });
    return {
      dataNew,
    };
  },
};
</script>

<template>
  <div class="container mt-4">
    <div class="card mt-4">
      <div class="card-header">
        <h1>{{ dataNew.title }}</h1>
        <h5>{{ dataNew.date }}</h5>
        <p>Por {{ dataNew.author }}</p>
      </div>
      <div class="card-body">
        <div class="row">
          <div class="col-12 text-center">
            <img :src="dataNew.img" alt="" class="img-fluid" />
          </div>
        </div>
        <p class="text-justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit
          amet lorem a neque tristique efficitur. Curabitur gravida, urna non
          ornare mattis, lorem nisi vulputate purus, lobortis rutrum diam purus
          ac quam. Fusce posuere erat ligula, elementum commodo dolor tincidunt
          at. Integer vulputate nisl nec viverra tempor. Mauris et mauris at
          nibh tincidunt porta eget vel neque. Sed placerat feugiat convallis.
          Suspendisse non ligula quis tortor ultricies eleifend. Duis placerat
          dui velit, eget suscipit tellus posuere eget. Suspendisse potenti.
          Quisque molestie mattis risus, at consectetur nisl dapibus ac. Duis
          leo sem, auctor sed facilisis et, luctus quis metus. Mauris id nisl
          ligula. Donec dapibus tincidunt nunc eget iaculis. Vestibulum
          convallis, elit elementum auctor facilisis, lorem ligula scelerisque
          mi, vel pharetra dui mi at est. Vivamus eget nisi non nulla elementum
          tempus. Ut malesuada consequat massa. Fusce felis mauris, rutrum nec
          libero quis, molestie consequat leo. Integer facilisis ex sed faucibus
          sagittis. Nam at gravida elit, nec rhoncus quam. Aliquam sit amet
          scelerisque leo. Etiam non dolor nunc. Morbi est nisi, consequat id
          diam sed, scelerisque ultricies tellus. Nam ante nibh, volutpat in dui
          quis, vestibulum hendrerit quam. Curabitur sed velit in mauris
          vestibulum condimentum. In a molestie nulla, non molestie velit. Morbi
          in nulla sollicitudin, feugiat sem ac, malesuada odio. Maecenas at
          ligula efficitur, porttitor arcu non, volutpat mauris. Quisque
          lobortis in turpis nec pellentesque. Duis nec quam non magna finibus
          sodales. Cras lobortis ultrices fermentum. Quisque ut consectetur
          lectus. Duis odio sapien, vehicula non diam tempus, mollis ultricies
          lectus. Vivamus consequat justo enim, ut hendrerit urna mollis eu.
          Phasellus vel tellus sed nisi fermentum blandit. Aliquam hendrerit
          arcu vitae augue ultricies, quis rhoncus nibh pulvinar. Donec ac
          aliquam dolor, fringilla ultricies orci. Sed vel egestas quam, et
          iaculis est. Morbi mauris turpis, dignissim vitae lacus ac, pulvinar
          tincidunt nulla. Nulla magna nisi, pretium condimentum bibendum quis,
          facilisis quis orci. Nullam pretium tortor in lectus mollis, vulputate
          ultricies elit posuere. Suspendisse ut nunc sit amet quam porta cursus
          eget pretium nisi. Nullam imperdiet risus nulla, vitae laoreet dui
          fermentum non. In hac habitasse platea dictumst. Morbi placerat quis
          tellus at eleifend. Cras erat arcu, auctor ut luctus ut, efficitur eu
          lorem. Sed augue dolor, fermentum at metus ut, tristique dictum erat.
          Cras pretium felis neque, ut pharetra velit iaculis ac. Etiam nec
          risus interdum, rutrum lectus quis, cursus ligula. In fermentum luctus
          nisl, ac pulvinar odio consequat ac. Curabitur rutrum urna ut blandit
          lacinia. Sed vitae auctor ipsum. Morbi et dui quam. Donec auctor
          tortor vel semper consequat. Nam tortor ipsum, mattis sed velit eget,
          maximus auctor libero. Sed blandit augue nec ultrices efficitur.
          Maecenas lacinia dolor sit amet quam tincidunt ullamcorper. Duis ac
          hendrerit turpis. Fusce sapien quam, mollis vitae leo ac, vestibulum
          laoreet risus. Nulla a pretium erat. Cras nec nisi et nisl posuere
          efficitur. Aliquam sed nisl non nunc sodales volutpat ac congue enim.
          Fusce malesuada dictum magna nec condimentum. Pellentesque sodales mi
          ut condimentum accumsan. Morbi finibus velit et augue vulputate, et
          sagittis dolor iaculis. Proin eget nulla eget nulla malesuada egestas.
          Generated 5 paragraphs, 506 words, 3404 bytes of Lorem Ipsum
        </p>
      </div>
    </div>
  </div>
</template>