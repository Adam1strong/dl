<template>



    <p class="aa">我喜欢大连，它静静地开放，从不声张。像花朵，有着异样的芬芳...</p>
    <p class="aa">I love DaLian, quietly open, never make a fuss .Like flowers,with a strange fragrance</p>


    <el-container>
        <el-main>

            <span id="text2">
                <p>大连 | 山海之间的浪漫</p><br>
                <p>大连—有山海之间的浪漫，有落日余晖，还有人间烟火的文艺气息</p>
                <p>大连的美是复杂的，藏在山海之间，藏在起伏的丘陵，藏在展览的海湾。</p>
                <p>白墙红瓦，蛇形公路，落日余晖，海鸥翔游........无不在诉说大连的浪漫</p>
            </span>

        </el-main>
        <el-aside width="602px">
            <img src="@/assets/images/bridge/bridge-6.jpg"
                style="margin-left: auto;display: flex;height: 333px;width: 602px;" />
        </el-aside>
    </el-container>

    <el-container>
        <el-aside width="602px">
            <img src="@/assets/images/index/sea-2.jpg" width="602" height="333" alt="img4.jpg"
                style="display: flex; margin-right: auto;" />

        </el-aside>
        <el-main>
            <span id="text2">
                <p>星辰 | 大海</p><br>
                <p>我们总是执着远方，以为远方的风景最美，</p>
                <p>但是最美的风景在脚下。我们渴望星辰大海让蔚蓝的大海盛开出白色的花朵</p>
                <p>这是一座建立在广场上的城市，路的尽头永远都是海，希望我们永远能喜欢眼前的风景，身边的人，现在的自己</p>
                <p>热爱是极为稀缺的品质，唯有热爱才能享受过程的乐趣和不可思议的成长</p>
            </span>
        </el-main>
    </el-container>



    <p class="aa" data-aos="fade-up">大连的海通常属于什么海？<em>其实，大连的的地理位置很特别，可以说三面环海</em>。东南部就是黄海，西北部是渤海，也就是说大连的海并不是一个海。<br>
        <br><br><em>也就是说，</em>大连的海属于两个 ，一部分属于渤海，一部分属于黄海。而不论是哪个海，都让大连邂逅了浪漫和美丽，渤海也好，黄海也好，都将大连的海岸装饰的分外妖艳。
    </p>

    <p style="text-align: center;">
        <RouterLink class="footer_link" to="/">浪漫</RouterLink> |
        <RouterLink class="footer_link" to="">足球之城</RouterLink> |
        <RouterLink class="footer_link" to="">时尚之都</RouterLink> |
        <span>都是大连的代名词...</span>
    </p>
    <div class="conteainer">
        <div class="bubbles">
            <sapn></sapn>
            <sapn></sapn>
            <sapn></sapn>
        </div>
    </div>

</template>

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
                require("@/assets/images/bridge/bridge-1.jpg"),
                require("@/assets/images/bridge/bridge-2.jpg"),
                require("@/assets/images/bridge/bridge-3.jpg"),
            ]
        }
    }
}
</script>

<style type="text/css">
#text2{
    color:#116796;
}
#text1 {
    color:#116796;
}

.aa {
    text-align: center;
    margin: 50px;
    color: #85C1C9;                                /*首页字体 */
    font-family: "楷体";
    font-weight: normal;
    font-weight: bold;
}

a {
    text-decoration: none;
}
</style>