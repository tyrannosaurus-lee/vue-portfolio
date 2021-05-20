<template>
  <div class="bottom">
    <a href="#" class="top-wrap">
		<img src="http://images.jtbc.joins.com/goldendisk/common/go_top.png" alt="위로">
	</a>

	<div id="footer">
		<strong>Eunhye </strong>&copy; 2013 - 2021<br>
		designed by <a href="http://www.50shadesofdrake.com/" target="_blank">50shadesofdrake.com</a>
	</div>
  </div>
</template>

<script>
export default {
  name: 'bottom',
  props: {
  }
}
</script>

<style scoped>
    .top-wrap {display:none; position:fixed; bottom:140px;right:30px;}
    #footer {padding:30px;font-size:20px;color:#111;text-align:center;background:#656565;}
    #footer a {color:#d2d2d2;}
    #footer a:hover, #footer a:active {color:#111;}
</style>