<template>
  <div class="common">
    <div class="hidden">
      <a href="#container">본문 바로가기</a>
    </div>
  </div>
</template>

<script>
// import axios from 'axios'
export default {
  name: 'common',
  props: {
  }
}
</script>
<style>

    /* reset */
    body, div, p, pre, dl, dt, dd, input, form, fieldset, legend, h1, h2, h3, h4, h5, h6, ul, ol, li{margin:0;padding:0;box-sizing:border-box;}
    body{margin:0; padding:0; font:16px/1.2 'Noto Sans KR', "맑은고딕", "Malgun Gothic", "돋움", Dotum, Tahoma, sans-serif;}
    body, a {margin:0; padding:0; color:#2a2a2a;}
    h1, h2, h3, h4, h5, h6, ul, ol, li {display: block; font-size: 0; margin-block-start: 0; margin-block-end: 0; margin-inline-start: 0px; margin-inline-end: 0px; font-weight:300;}
    p {display: block; margin-block-start: 0; margin-block-end: 0; margin-inline-start: 0px; margin-inline-end: 0px; font-weight:300;}
    ul, li, ol{margin:0; padding:0; list-style: outside none none;}
    a, a:active, a:hover, a:visited{text-decoration:none;}
    button{cursor:pointer;}
    button::-moz-focus-inner{padding:0;border:0;}/* ff style bug */
    em,address{font-style:normal;}
    img, fieldset{border:0;}
    img {vertical-align:top;}
    hr{display:none;}
    article,aside,dialog,header,section,footer,nav,figure{display:block;margin:0;padding:0;} /* html5 */
    table{padding:0;margin:0;border-spacing:0;border:0;border-collapse:collapse;}
    caption, legend, .blind{position:absolute;top:-9999em;height:0;overflow:hidden;visibility:hidden;}
    /* Button */
    button{overflow:visible;margin:0;padding:0;border:0;background:none;white-space:nowrap;cursor:pointer;}
    button::-moz-focus-inner{padding:0;border:0;}
    button span{position:relative;}
    textarea, input {-webkit-appearance: none; -webkit-border-radius: 0;}

    /* common */
    .hidden {overflow:hidden; position:absolute !important; margin:-1px; width:1px; height:1px; white-space:nowrap; clip:rect(0, 0, 0, 0); clip-path:polygon(0 0, 0 0, 0 0);line-height:24px;text-align:center;background:#000;color:#fff;}
    .hidden a:focus{height:auto;}

    /* browser caution */
    .browserupgrade {position:fixed; left:0; top:0; right:0; bottom:0; padding-top:150px; text-align:center; color:#fff; background:#262626; z-index:2;}
    .txt-sorry {display:block; height:250px; font-size:200px; line-height:200px;}
    .browserupgrade p {font-size:20px; line-height:30px;}
    .browserupgrade p a {color:#888;}
</style>
