<template>
    <h1 contenteditable="">跨海大桥</h1><!--标题-->
    <el-carousel :interval="4000" type="card" height="350px" style="margin: 50px 400px;">
        <el-carousel-item v-for="(item, index) in index_carousel_images" :key="index">
            <img :src="item" alt="Carousel Image" style="width: 100%; height: 100%;" />
        </el-carousel-item>
    </el-carousel>

    <div style="margin: 50px 0px;">
        <p>星海湾跨海大桥，又称大连南部滨海大道跨海大桥，简称星海湾大桥，</p>
    <p>位于<i>中国辽宁省大连市，是中国首座海上修筑锚碇的地锚式悬索桥</i>，</p>
    <p>也是中国第一座公路双层钢桁架悬索桥。大桥于2011年开始建设，2015年10月30日开通。</p>
    <p>星海湾大桥全长6.8公里，其中主桥长820米，净空高度30米，中央正对星海广场中轴线。</p>
    <p><i>辽宁省大连市境内链接甘井子与西岗区的跨海大桥位于黄海水域上全长六千米，</i></p>
    <p>分为上下两层，上层宽度<b>21米</b>，下层<b>17米</b>。是中国建筑的伟大奇迹。</p>
    </div>

    


    <el-container>
        <el-aside width="760px">
            <img src="@/assets/images/bridge/bridge-10.jpg" width="760 " height="460">
        </el-aside>
        <el-main style="margin-top: 100px; margin-left: 200px;">
            <span id="text1">
                <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;《赞跨海大桥》<br>
                长虹飞跨海连天，浩渺烟波映眼前。<br>
                巨柱擎天连两岸，钢绳挽索系云边。<br>
                车驰如箭穿涛过，舟渡似梭望影迁。<br>
                伟业千秋惊世界，雄姿伟岸立苍澜。
            </span><br>
        </el-main>
    </el-container>
    <footer>
        <p>&copy; 2024 跨海大桥. 版权所有.</p>
    </footer>
</template>

<style>
b {
    color: #ffb3a6;
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
    font-family: 华文楷体;
    text-align: right;
    color:#2c74c9;
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
                require("@/assets/images/bridge/bridge-1.jpg"),
                require("@/assets/images/bridge/bridge-2.jpg"),
                require("@/assets/images/bridge/bridge-3.jpg"),
                require("@/assets/images/bridge/bridge-4.jpg"),
                require("@/assets/images/bridge/bridge-5.jpg"),
                require("@/assets/images/bridge/bridge-6.jpg"),
            ]
        }
    }
}
</script>