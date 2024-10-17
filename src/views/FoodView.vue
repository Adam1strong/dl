<template>
    <h1 contenteditable="">美食</h1><!--标题-->
    <el-carousel :interval="4000" type="card" height="350px" style="margin: 50px 400px;">
        <el-carousel-item v-for="(item, index) in index_carousel_images" :key="index">
            <img :src="item" alt="Carousel Image" style="width: 100%; height: 100%;" />
        </el-carousel-item>
    </el-carousel>


    <p><br><br>在大连，大海的馈赠是一场无尽的盛宴。<br>大连海鲜，那是来自海洋深处的珍宝，每一口都饱含着大海的气息与深情。<br><i>螃蟹</i>张牙舞爪，彰显着鲜美霸气；<i>虾爬子</i>活力满满，一尝便是海的鲜甜；<br>还有那肥美的<i>海蛎子</i>、鲜嫩的<i>扇贝</i>，仿佛把整个海洋的美味都浓缩在了餐桌上。<br>大连海鲜，一场舌尖与海洋的浪漫邂逅。<br>一座被海洋环抱的城市，海鲜便是它最璀璨的名片。当那一盘盘新鲜的大连海鲜端上餐桌，<br><i>仿佛能听见海浪的声音，闻到海风的味道。鲜嫩的鱼、饱满的虾、多汁的贝类，在味蕾上舞动</i>
       <br> <br> <i>成为了中国乃至世界上重要的海洋资源宝库和旅游胜地。</i><br><br>
        <br><br></p><!--文本内容-->

    <el-container>
        <el-aside width="760px">
            <img src="@/assets/images/food/food-8.jpg" width="760 " height="760">
        </el-aside>
        <el-main style="margin-top: 200px; margin-left: 250px;">
            <span><img src="@/assets/images/food/food-9.jpg" width="700" height="860" data-aos="fade-up"> </span>
            <br>
        </el-main>
    </el-container>
    <footer>
        <p>&copy; 2024 跨海大桥. 版权所有.</p>
    </footer>
</template>

<style>
b {
    color: red;
}

footer {
    /*2024 跨海大桥. 版权所有样式*/
    background-color: #193c96;
    color: white;
    text-align: center;
    padding: 20px;
    position: relative;
    bottom: 0;
    width: 100%;
}

i {
    /*文本颜色 */
    color: #DA7297;
}

h1 {
    /* 标题颜色*/
    color: #FFB4C2;
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
        color: #fa70a0;
    }

    20%,
    30%,
    50%,
    60%,
    80%,
    90%,
    100% {
        color: #fff;
        text-shadow: 0 0 10px #c8a1e0, 0 0 20px #c8a1e0, 0 0 40px #c8a1e0, 0 0 80px #c8a1e0;
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
                require("@/assets/images/food/food-1.jpg"),
                require("@/assets/images/food/food-2.jpg"),
                require("@/assets/images/food/food-3.jpg"),
                require("@/assets/images/food/food-7.jpg"),
                require("@/assets/images/food/food-4.jpg"),
                require("@/assets/images/food/food-5.jpg"),
                require("@/assets/images/food/food-6.jpg"),
                


            ]
        }
    }
}
</script>