<template>
    <div>
        <div id="head">
            <div class="left">
                <p class="six">6</p>
                <p class="two">二月</p>
            </div>
            <div class="middle">
                <div class="mleft"><img src="@/assets/images/shu.png" alt="" height="55rpx" width="20rpx"></div>
            </div>
            <div class="mright">知乎日报</div>
            <div class="right"><img src="@/assets/images/man.png" width="40rpx" height="40rpx"></div>
        </div>
        <div class="banner">
            <van-pull-refresh>
                <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
                    <van-swipe-item v-for="item in swiperList" :key="item.id" @click="go">
                        <a :href="item.url">
                            <img :src="item.image" width="100%" height="400rpx">
                            <p>
                                {{item.title}}
                                <span>{{item.hint}}</span>
                            </p>
                        </a>
                    </van-swipe-item>
                </van-swipe>
            </van-pull-refresh>
        </div>
        <div id="con">
            <a :href="item.url" v-for="item in conList" :key="item.id" @click="go">
                <p>
                    {{item.title}}<br />
                    <span >{{item.hint}}</span>
                </p>
                <img :src="item.images" width="100rem" height="100rem">
            </a>
        </div>
    </div>
</template>
<style>
*{margin: 0;padding: 0}
#head{overflow: hidden;width: 100%}
#head .left{margin-left: 0.5rem}
#head .left,.middle{float:left;}
#head .right{float:right;padding: 0.5rem 1rem 0 0}
#head .left p{text-align: center}
#head .left .six{font-size: 1.5rem;font-weight: bold}
#head .left .two{font-size: 1.1rem}
#head .middle .mleft,#head .mright{float: left;}
#head  .mright{font-size: 1.8rem;padding-top: 0.5rem;padding-left: 0.1rem}
.banner{width: 100%;overflow: hidden;}
.banner a{color: #fff;}
.banner p{width:95%;position:absolute;bottom:24px;color: #fff;text-align: left;padding-left:1rem;}
#con a{display: block;padding-bottom: 8rem;padding-left: 0.5rem;color: black;font-size: 1.1rem}
#con img{float: right;padding-right: 0.5rem}
#con p{float: left;width: 70%}
#con  a span{color:#e9e9e9;font-size: 0.8rem}
</style>
<script>
import Vue from 'vue';
import { Swipe, SwipeItem } from 'vant';

Vue.use(Swipe);
Vue.use(SwipeItem);

export default{
    components: {

    },
    data(){
        return {
            swiperList: [],
            conList: []
        }
    },
    methods: {
        go() {
            this.$router.replace('/Details');
        }
    },
    mounted:function(){
        this.axios.get("news/latest").then(res => {
            this.swiperList = res.data.top_stories;
            this.conList = res.data.stories
        })
    }
}
</script>