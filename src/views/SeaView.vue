<template>
    <h1 contenteditable="">大连海域</h1><!--标题-->
    <el-carousel :interval="4000" type="card" height="350px" style="margin: 50px 400px;">
        <el-carousel-item v-for="(item, index) in index_carousel_images" :key="index">
            <img :src="item" alt="Carousel Image" style="width: 100%; height: 100%;" />
        </el-carousel-item>
    </el-carousel>

<div style="margin: 50px 0px;">
    <p>大连是滨海城市，有浪漫、时尚、足球冠名的城市更有北方小香港之称的城市。</p>
    <p>大连的地理位置位于中国东北地区的最南端，三面环海，东濒黄海，西邻渤海，南与山东半岛隔海相望，北依东北平原。</p>
    <p><i>具有海洋性特点的温带季风气候。1984年批准为沿海开放城市</i>，</p>
    <p><b>1994</b>年被批准为副省级城市。也是东北最重要的港口、工业、贸易、金融和旅游城市。也是东对外开放的出口。</p>
    <p>海岸线总长<b>2211</b>公里，大连海域拥有<b>538</b>个岛屿，也构成的东北地区独特的海洋气候地区</p>
    <p> <i>也是东北地区最重要的港口，促进了东北的经济、贸易和文化交流的重要地区。</i></p>
    <p>这些独特的地理位置为大连海域的海洋资源和生态系统提供良好的自然条件，下层成为了中国乃至世界上重要的海洋资源宝库和旅游胜地。</p>
</div><!--文本内容-->

    <el-container>
        <el-aside width="760px">
            <img src="@/assets/images/sea/sea-8.jpg" width="760 " height="460">
        </el-aside>
        <el-main style="margin-top: 100px; margin-left: 200px;">
            <span id="text1">
                <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;《海之韵》<br>
                浩渺无垠接碧天，波涛汹涌势连绵。<br>
                潮来潮去千秋韵，云卷云舒万里烟。<br>
                日出东方辉海面，月升西岭映波前。<br>
                海风吹拂心沉醉，似梦如诗映眼前。
            </span><br>
        </el-main>
    </el-container>
    <footer> <p>&copy; 2024 跨海大桥. 版权所有.</p></footer>
</template>

<style>

b{
    color: red;
}
       footer {                                      /*2024 跨海大桥. 版权所有样式*/
        background-color:#219be4;
        color: white;
        text-align: center;
        padding: 20px;
        position:relative;
        bottom: 0;
        width: 100%;
      }
#text1{
    font-size: 28px;
    font-family: 华为楷体;
    text-align: right;
    color:#011A90;
}

i {
    color: #004097
}

h1 {
    color: #3c8ac4;
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
                require("@/assets/images/sea/sea-1.jpg"),
                require("@/assets/images/sea/sea-2.jpg"),
                require("@/assets/images/sea/sea-3.jpg"),
                require("@/assets/images/sea/sea-4.jpg"),
                require("@/assets/images/sea/sea-5.jpg"),
                require("@/assets/images/sea/sea-6.jpg"),
            ]
        }
    }
}
</script>