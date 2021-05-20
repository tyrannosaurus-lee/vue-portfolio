<template>
  <div class="top">
    <div class="eun_site_wrap">
				<div class="eun_site eun_pop">
					<img class="img-tit" src="@/assets/images/logo_link.png" alt="">
					<svg class="bi bi-chevron-down" width="1em" height="1em" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
						<path fill-rule="evenodd" d="M3.646 6.646a.5.5 0 01.708 0L10 12.293l5.646-5.647a.5.5 0 01.708.708l-6 6a.5.5 0 01-.708 0l-6-6a.5.5 0 010-.708z" clip-rule="evenodd"></path>
					</svg>
				</div>
				
			</div>
  </div>
</template>

<script>
// import axios from 'axios'
export default {
  name: 'top',
  props: {
  }
}
</script>
<style scoped>
  .eun_site_wrap:before {display:block; content:""; width:100%; height:12px; background:#333;}
  .eun_site {
    position:relative;perspective:600px;margin:-12px auto 0;width:80%;height:160px;line-height:160px;text-align:center;font-size:38px;background:#fff;cursor:pointer;z-index:1;
    transform-origin:50% 0%; 
    transition:transform 0.1s;
    transition-timing-function: ease-in;
    border: 1px solid rgba(230,230,230,1);border-radius:5px;box-shadow: 0px 10px 30px rgba(0,0,0,0.6);
  }
  .eun_site:active {
    transform: perspective( 600px ) rotateX( 45deg );
    /* perspective:600px; */
  }
  .img-tit {padding-top:53px; width:190px;}
  
</style>
