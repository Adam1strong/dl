<template>
    <h1 contenteditable="">世界经济论坛</h1><!--标题-->
    <el-carousel :interval="4000" type="card" height="350px" style="margin: 50px 400px;">
        <el-carousel-item v-for="(item, index) in index_carousel_images" :key="index">
            <img :src="item" alt="Carousel Image" style="width: 100%; height: 100%;" />
        </el-carousel-item>
    </el-carousel>


   <div style="margin: 50px 0px;"> 
    <p>达沃斯（Davos），一个充满魅力与影响力的地方。</p>
    <p>位于<i>达沃斯也是全球重要的经济论坛举办地。世界各国的政要、商业领袖、学者等齐聚于此，共同探讨全球经济、政治、社会等重大问题。</i></p>
    <p><i>这里汇聚着前沿的思想、创新的理念和广泛的合作机遇，成为引领世界发展的重要力量。</i></p>
    <p>坐落在雄伟阿尔卑斯山脉怀抱中的达沃斯，既是闻名遐迩的滑雪胜地，又是全球瞩目的重要经济论坛举办地。追溯其历史，</p>
    <p><i>达沃斯，以其壮丽的自然风光、悠久的历史文化和重要的国际地位</i>，成为了一个令人向往和敬仰的地方。</p>
    <p>它既展现了大自然的壮美与宁静，又承载着人类对未来的思考与探索，是历史与现代、自然与人文的完美结合</p>
    <p><i>达沃斯以其独特的魅力，既展现了大自然的壮美与宁静，</i>又承载着人类对未来的思考与探索，是一个令人向往和敬仰的地方。</p>
   </div>

    <el-container>
        <el-aside width="760px">
            <img src="@/assets/images/WorldEconomicForum/WorldEconomicForum-9.jpg" width="760 " height="460">
        </el-aside>
        <el-main style="margin-top: 100px; margin-left: 200px;">
            <span id="text1">

            </span><br>
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

#text1 {
    font-size: 28px;
    font-family: 长城行楷体;
    text-align: right;
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
                require("@/assets/images/WorldEconomicForum/WorldEconomicForum-1.jpg"),
                require("@/assets/images/WorldEconomicForum/WorldEconomicForum-2.jpg"),
                require("@/assets/images/WorldEconomicForum/WorldEconomicForum-3.jpg"),
                require("@/assets/images/WorldEconomicForum/WorldEconomicForum-6.jpg"),
                require("@/assets/images/WorldEconomicForum/WorldEconomicForum-5.jpg"),
                require("@/assets/images/WorldEconomicForum/WorldEconomicForum-4.jpg"),
            ]
        }
    }
}
</script>