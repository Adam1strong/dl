<template>



    <p class="aa">我喜欢大连，它静静地开放，从不声张。像花朵，有着异样的芬芳...</p>
    <p class="aa">I love DaLian, quietly open, never make a fuss .Like flowers,with a strange fragrance</p>

    <img src="@/assets/images/bridge/bridge-6.jpg" style="margin-left: auto;display: flex;height: 333px;width: 602px;" />
    <p></p>


    <RouterLink to="/sea">
        <img src="@/assets/images/index/sea-2.jpg" width="602" height="333" alt="img4.jpg"
            style="display: flex; margin-right: auto;" />
    </RouterLink>

    <p class="aa">大连的海通常属于什么海？<em>其实，大连的的地理位置很特别，可以说三面环海</em>。东南部就是黄海，西北部是渤海，也就是说大连的海并不是一个海。</p>
    <p class="aa"><em>也就是说，</em>大连的海属于两个 ，一部分属于渤海，一部分属于黄海。而不论是哪个海，都让大连邂逅了浪漫和美丽，渤海也好，黄海也好，都将大连的海岸装饰的分外妖艳。</p>

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
.aa {
    text-align: center;
    margin: 50px;
    color: #a5a5a5;
    font-family: "楷体";
    font-weight: normal;
    font-weight: bold;
}

a {
    text-decoration: none;
}

</style>