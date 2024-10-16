<template>
    <h1 contenteditable="">足球之城</h1><!--标题-->
    <el-carousel :interval="4000" type="card" height="350px" style="margin: 50px 400px;">
        <el-carousel-item v-for="(item, index) in index_carousel_images" :key="index">
            <img :src="item" alt="Carousel Image" style="width: 100%; height: 100%;" />
        </el-carousel-item>
    </el-carousel>


    <p>足球，那黑白相间的精灵，在绿茵场上翻滚、跳跃，演绎着激情与梦想的传奇。<i>它是力量与技巧的完美结合，当球员们奋力一脚，足球如离弦之箭般飞出，带着风的呼啸，承载着胜利的渴望。<br>那圆润的球体，在阳光下闪烁着独特的光芒，仿佛一颗跳动的心脏，充满活力。</i>，<br>足球场上，球员们为它奔跑、拼搏，汗水挥洒，每一次传球、每一次射门，都是勇气与智慧的较量。它见证了团队的协作，凝聚着伙伴间的信任与默契。无论是激烈的对抗，还是精彩的配合，足球都以它无穷的魅力，吸引着无数人沉浸其中。<br>
        <i>大连素有“足球城”的美誉，拥有悠久的足球历史和深厚的文化底蕴。大连足球队多次获得中国足球顶级联赛的冠军，为中国国家队输送了大量的足球运动员。杰出的教练和足球运动员在大连涌现</i>
    </p><!--文本内容-->

    <el-container>
        <el-aside width="760px">
            <img src="@/assets/images/football/football-6.jpg" width="660 " height="460">
        </el-aside>
        <el-main style="margin-top: 100px; margin-left: 200px;">
            <span id="text1">
                <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;《夺冠》<br>
                绿茵场上起硝烟，足球飞舞映碧天，<br>
                健将奔腾身影疾，群雄逐鹿激情燃。<br>
                传球巧妙心同契，射门精准志更坚，<br>
                胜负难分皆奋力，豪情壮志谱新篇。
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
        background-color:#193c96;
        color: white;
        text-align: center;
        padding: 20px;
        position:relative;
        bottom: 0;
        width: 100%;
      }
#text1{
    font-size: 28px;
    font-family: 长城行楷体;
    text-align: right;
}

i {
    color: #1fda70;
}

h1 {                                            /* 标题颜色*/
    color: #7EA1FF;
    text-align: center;
    position: relative;
    letter-spacing: 25px;
    text-transform: uppercase;
    line-height: 0.7em;
    outline: none;
    -webkit-box-reflect: below 3px linear-gradient(transparent, #FFF);
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
                require("@/assets/images/football/football-1.jpg"),
                require("@/assets/images/football/football-2.jpg"),
                require("@/assets/images/football/football-3.jpg"),
                require("@/assets/images/football/football-4.jpg"),
                require("@/assets/images/football/football-5.jpg"),

            ]
        }
    }
}
</script>