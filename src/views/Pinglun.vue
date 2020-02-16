<template>
	<div id="commment">
		<div class="backTwo">
			<router-link to="swiperDetails">
			<img src="../assets/images/left.png" />
			</router-link>
			<h1>13条评论</h1>
		</div>
		<div class="long">
			<h2>15条长评</h2>
			<div class="longWords" v-for="long in long" :key="long.title">
				<div class="longLeft">
					<img :src="long.avatar" />
				</div>
				<div class="longRight">
					<h3>{{ long.author }}</h3>
					<p>{{long.content}}</p>
					<div class="lastLine">
						<span>02-03 11:43</span>
						<img src="../assets/images/mouth.png" />
						<img src="../assets/images/sun.png" class="ping" />
					</div>
				</div>
			</div>
		</div><!--long end-->
		<div class="duan">
			<h2>14条短评</h2>
			<div class="duanWords" v-for="short in short" :key="short.title">
				<div class="duanLeft">
					<img :src="short.avatar" />
				</div>
				<div class="duanRight">
					<h3>{{ short.author }}</h3>
					<p>{{ short.content }}</p>
					<div class="lastLine">
						<span>02-03 11:43</span>
						<img src="../assets/images/mouth.png" />
						<img src="../assets/images/sun.png" class="ping" />
					</div>
				</div>
			</div><!--duanWords end-->
		</div><!--duan end-->
	</div>
</template>

<script>
	export default{
		components:{
			
		},
		data(){
			return{
				long:[],
				short:[]
			}
		},
		//接口
		mounted:function(){
			this.axios.get("story/4232852/long-comments").then(res =>{
			this.long=res.data.comments;	
			});
			this.axios.get("story/4232852/short-comments").then(res =>{
			this.short=res.data.comments;	
			});
		}
	}
</script>

<style>
/*commment*/ 
#commment .backTwo{padding:0.5rem;overflow:auto;border-bottom:0.1rem solid #F1F1F1;}
.backTwo img{float:left;width:7%;}
.backTwo h1{width:92%;text-align:center;font-size:1.2rem;}
.long{padding:0.5rem;}
.long h2{font-size:1.1rem;}
.longWords{padding:1rem 0.5rem 0.5rem 0;border-bottom:0.1rem solid #F1F1F1;display:flex;}
.longLeft{padding:0 0.5rem 0 0;margin-bottom:5rem;}
.longLeft img{width:2.5rem;}
.longRight h3{margin-bottom:0.4rem;}
.longRight p{line-height:1.5rem;}
.lastLine{overflow:auto;margin-top:1rem;}
.lastLine span{float:left;margin-right:7rem;}
.lastLine img{width:1.3rem;float:left;}
.lastLine img.ping{margin-left:3rem;}
.lastLine span{color:#666;}
.duan{padding:0.5rem;}
.duan h2{font-size:1.1rem;}
.duanWords{padding:1rem 0.5rem 0.5rem 0;border-bottom:0.1rem solid #F1F1F1;display:flex;}
.duanLeft{padding:0 0.5rem 0rem 0;}
.duanLeft img{width:2.5rem;}
.duanRight h3{margin-bottom:0.4rem;}
.duanRight p{line-height:1.5rem;}
</style>
