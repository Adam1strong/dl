<template>
    <h1 contenteditable="">浪漫之都</h1><!--标题-->
    <el-carousel :interval="4000" type="card" height="350px" style="margin: 50px 400px;">
        <el-carousel-item v-for="(item, index) in index_carousel_images" :key="index">
            <img :src="item" alt="Carousel Image" style="width: 100%; height: 100%;" />
        </el-carousel-item>
    </el-carousel>


<!--文本内容--><p><i>大连被称为时尚之都的原因主要包括其自然环境、文化活动、教育资源和时尚产业的发展。</i><br>
    首先，大连的自然环境为其成为时尚之都提供了得天独厚的条件。大连市民对美的追求与生俱来，城市的浪漫氛围和海洋性气候为居民和游客提供了优美的环境和舒适的气候条件，这些都是时尚之都的重要特征。<br>浪漫之都的称号于2006年提出，旨在提升大连的形象和影响力。大连以其独特的城市景观建设和自然文化条件，<br><i>成为了-个年轻且充满活力的城市，拥有众多独具特色的旅游景点。</i>,<br>最后，大连的地理位置和历史背景也是其成为时尚之都的重要因素。作为北方的海滨城市，大连的自然美景和浪漫氛围吸引了众多游客，<br>同时，大连的历史和文化也为时尚产业的发展提供了丰富的素材和灵感来源。

</p>

    <el-container>
        <el-aside width="760px">
            <img src="@/assets/images/Romantic/Romantic-10.jpg" width="700" height="860">
        </el-aside>
        <el-main style="margin-top: 100px; margin-left: 200px;">
            <span><img src="@/assets/images/Romantic/Romantic-9.jpg" width="700" height="860" data-aos="fade-up"> </span>
        </el-main>
    </el-container>
    <footer> <p>&copy; 2024 跨海大桥. 版权所有.</p></footer>
</template>

<style>
b{
    color: red;
}
       footer {                                      /*2024 跨海大桥. 版权所有样式*/
        background-color:#193c96;
        color: white;
        text-align: center;
        padding: 20px;
        position:relative;
        bottom: 0;
        width: 100%;
      }


i {
    color: #00a4c5;
}

h1 {
    color: #153788;
    text-align: center;
    position: relative;
    letter-spacing: 25px;
    text-transform: uppercase;
    line-height: 0.7em;
    outline: none;
    -webkit-box-reflect: below 3px linear-gradient(transparent, #0008);
    animation: animate 5s linear infinite;
}

@keyframes animate {

    0%,
    21%,
    31%,
    51%,
    60%,
    80%,
    90%,
    92% {
        color: #0e3742;
    }

    20%,
    30%,
    50%,
    60%,
    80%,
    90%,
    100% {
        color: #fff;
        text-shadow: 0 0 10px #03bcf4, 0 0 20px #03bcf4, 0 0 40px #03bcf4, 0 0 80px #03bcf4;
        /* 加阴影有发散感觉*/
    }
}

p {
    align-self: center;
    text-align: center;
}
</style>

<script>
import DHeader from '@/components/DHeader.vue';
import { RouterLink } from 'vue-router';

export default {
    name: 'App',
    components: {
        DHeader
    },
    data() {
        return {
            index_carousel_images: [
                require("@/assets/images/Romantic/Romantic-1.jpg"),
                require("@/assets/images/Romantic/Romantic-2.jpg"),
                require("@/assets/images/Romantic/Romantic-3.jpg"),
                require("@/assets/images/Romantic/Romantic-4.jpg"),
                require("@/assets/images/Romantic/Romantic-5.jpg"),
                require("@/assets/images/Romantic/Romantic-6.jpg"),
            ]
        }
    }
}
</script>