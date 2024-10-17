<!-- 全局头部实现的导航栏功能 -->
<template>
    <el-container class="animate__animated animate__zoomInDown">
        <!-- flex-grow同级元素会按比例分配空间 -->
        <span style="margin: 5px 20px">
            <font class="ma-shan-zheng-regular">浪漫大连，心动无限</font>
        </span>

        <el-menu mode="horizontal" style="width:1000px;background-color: #ededed;" :default-active="'0'" ellipsis=false>

            <!-- index.vue -->
            <el-menu-item index="0">
                <RouterLink to="/">
                    <el-icon>
                        <House />
                    </el-icon>
                    <span>首页</span>
                </RouterLink>
            </el-menu-item>

            <!-- bridgepage.vue -->

            <el-menu-item index="1">

                <RouterLink to="/bridge">
                    <el-icon>
                        <Sunny />
                    </el-icon>
                    <span>跨海大桥</span>
                </RouterLink>
            </el-menu-item>

            <!-- 海域页 -->
            <el-menu-item index="2">
                <RouterLink to="/sea">
                    <el-icon>
                        <MoonNight />
                    </el-icon>
                    <span>大连海域</span>
                </RouterLink>
            </el-menu-item>
            <el-menu-item index="3">
            <RouterLink to="/wef">
                    <el-icon>
                        <position/>
                    </el-icon>
                    <span>达沃斯论坛</span>
                </RouterLink>
            </el-menu-item>

            <!-- 足球页 -->
            <el-menu-item index="4">
                <RouterLink to="/football">
                    <el-icon>
                        <football />
                    </el-icon>
                    <span>足球</span>
                </RouterLink>
            </el-menu-item>

            <el-menu-item index="5">
                <RouterLink to="/food">
                    <el-icon>
                        <fork-spoon/>
                    </el-icon>
                    <span>美食</span>
                </RouterLink>
            </el-menu-item>

            <el-menu-item index="6">
                <RouterLink to="/romantic">
                    <el-icon>
                        <magic-stick/>
                    </el-icon>
                    <span>浪漫</span>
                </RouterLink>
            </el-menu-item>
        </el-menu>
    </el-container>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Ma+Shan+Zheng&display=swap');

@font-face {
    font-family: 'Ma Shan Zheng';
    src: url('@/assets/fonts/MaShanZheng-Regular.ttf') format('truetype');
}


.ma-shan-zheng-regular {
    font-family: "Ma Shan Zheng", cursive;
    font-weight: 400;
    font-style: normal;
    font-size: 30px;
    text-align: left;
}

a {
    text-decoration: none;
}

.el-menu-item,
.el-sub-menu__title {
    display: flex;
    background-color: #ededed;
}
</style>

<script setup>
</script>