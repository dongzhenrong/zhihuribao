<template>
<div>
    <div class="note" :style ="note">
        <p class="font">小事 · 再也回不去的篮球场</p>
        <p class="brow">Pixabay/CCO</p>
    </div>
    <div id="content">
        <p class="other">那些学生时代喜欢一下课就打篮球的男生后来怎样了？</p>
        <p><span>作者 / 像少年拉菲迟</span>   <a href="">进入「知乎」查看原文</a></p>
        <p class="ton">你来到了大学，每天下午打篮球，夏天温度直逼 40 度的时候，你睡到下午 3 点，起床去食堂吃个饭，便走到了篮球场。</p>
        <p class="ton">这么些年，磨烂了九双鞋，十双袜，手指被顶过不下百次，每次你都像科比那样揉一揉又站到了篮球场上，在心里对自己说到伤疤男人的勋章。</p>
        <p class="ton">你不情愿的从一个竞技场来到了另一个地狱级竞技场，好不容易找到一份工作玩命的干，为的就是留在这个光鲜亮丽的城市，你也偶尔上班摸鱼，借着上厕所的工夫打开虎扑看一看篮球比分，此时厕所的另一个坑位发出了库里好球儿的声音，你好像又找到了新的队友。</p>
        <p class="ton">时间来到了这该死的 2020，这一年真的挺操蛋的，你在 1 月 27 日早上得知科比去世的消息，这个名字太过熟悉了，以至于你不敢相信，呆呆的坐在那里，似水流年。</p>
        <p class="ton bottom">安息吧，科比。</p>
        <button type="info">进入「知乎」查看相关讨论</button>
    </div>
    <div id="footer">
        <div><img src="@/assets/images/man.png" width="30rem" height="30rem" class="one" @click="hrefone"></div>
        <div><img src="@/assets/images/man.png" width="30rem" height="30rem" class="second"></div>
        <!-- <div><img src="@/assets/img/zan.png" width="30rem" height="30rem"></div> -->
        <!--动态点赞开始-->
        <div class="praise">
            <span id="praise"><img src="@/assets/images/man.png" id="praise-img" class="animation"></span>
            <span id="praise-txt" class="">89</span>
            <span id="add-num" style="display: inline;"><em class="add-animation">-1</em></span>
        </div>
        <!--动态点赞结束-->
        <div><img src="@/assets/images/man.png" width="33rem"></div>
        <div><img src="@/assets/images/man.png" width="30rem" height="30rem" class="last"></div>
    </div>
</div>
</template>

// <script>
// import jq from '../js/jquery-1.js';
// export default {
// name: 'productdetailspage',
// methods: {
//         hrefone() {
//             this.$router.replace('/');
//         },
//     },
// mounted:function(){
//     $("#praise").click(function(){
// 			var praise_img = $("#praise-img");
// 			var text_box = $("#add-num");
// 			var praise_txt = $("#praise-txt");
// 			var num=parseInt(praise_txt.text());
// 			if(praise_img.attr("src") == ("/images/mouth.png")){
// 				$(this).html("<img src='/images/man.png' id='praise-img' class='animation' />");
// 				praise_txt.removeClass("hover");
// 				$(".add-animation").removeClass("hover");
// 				num -=1;
// 				praise_txt.text(num)
// 			}else{
// 				$(this).html("<img src='/images/shezhi.png' id='praise-img' class='animation' />");
// 				praise_txt.addClass("hover");
// 				$(".add-animation").addClass("hover");
// 				num +=1;
// 				praise_txt.text(num)
// 			}
// 		});
// },
// data() {
//     return {
//     note: {
//     backgroundImage: "url(" + require("@/assets/images/sun.jpg") + ")",
//     backgroundRepeat: "no-repeat",
//     backgroundSize: "100%",
//     }
//     }
//   }
// }
// </script>

<style>
.note{
    width:100%;
    height:40vh;
}
.font{
    color: #fff;
    font-size: 1.8rem;
    width: 85%;
    padding-top: 15.5rem;
    padding-left: 1.5rem
}
.brow{
    color: #ccc;
    padding-left: 18rem;
    padding-top: .5rem
}
#content{
    font-size: 1.1rem;
    padding-top: 1rem;
    width: 90%;
    margin: auto
}
#content p span{
    color: #666
}
#content a{
    padding-left: 1rem;
    color: blue
}
#content .other{
    font-size: 1.3rem;
    padding-bottom: 1rem;
    font-weight: 600
}
#content .ton{
    font-size: 1.2rem;
    margin-top: 1rem;
    line-height: 1.6rem
}
#content .bottom{
    padding-bottom: 1rem
}
button{
    margin-bottom: 4rem;
    background-color: #1D82FE;
    border: 0;
    outline: 0;
    height: 3rem;
    border-radius: 1.5rem;
    color: #fff!important;
    width: 23rem
  
}
#footer{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    background-color:rgb(248, 245, 245);
    height: 2.8rem;
    margin-top: 2rem;
    position: fixed;
    bottom: 0;
}
#footer .one{
    padding-left: 1rem;
    border-right:solid #666 .05rem;
    padding-right: 1.2rem
}
#footer .last{
    padding-right: 1.5rem;

}

</style>