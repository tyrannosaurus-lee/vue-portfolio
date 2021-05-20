<template>
    <!-- <div class="dim-wrap" v-bind:class="{'on': isActive }" > -->
    <!-- <div class="dim-wrap" v-bind:class="[isActive ? 'on' : '']" v-on:click.self="$emit('close')" > -->
    <slot name="dimwrap">
        <div class="dim-wrap">
            <div class="info-wrap">
                <!-- <em class="port-tit"><a href="#" target="_blank">프로젝트명</a></em> -->
                <slot name="projectname">
                    <em class="port-tit">
                        <a href="#" target="_blank">프로젝트명</a>
                    </em>
                </slot>
                
                
                <!-- <slot name="projectdesc">
                    <ul class="port-desc">
                        <li>
                            <span>디바이스</span>
                        </li>
                        <li>
                            <span>작업기간</span>
                            <span>2014.06</span>
                        </li>
                    </ul>
                </slot> -->
                <!-- <button v-on:click="$emit('close')" type="button" class="close">&times;</button> -->
            </div>
        </div>
    </slot>
</template>

<script>
export default {
    name: 'popup',
    props: {}
}
</script>

<style>
/* modal popup */
.dim-wrap {
	display:block; position:fixed; left:0; top:0; right:0; bottom:0; width:100%; height:100%; background:rgba(0, 0, 0, .6);filter:alpha(opacity=50); z-index:1;
	opacity:1; /* visibility:hidden; */ transition:all .3s;}
.dim-wrap.on {display:block;opacity:1; /* visibility:visible; */}
.close {display:block; position:absolute;right:2%;top:1%; font-size:60px; z-index:100;}
.info-wrap {position:fixed;left:20%;top:30%;padding:5%;width:60%;border-radius:15px;background:#fff;z-index:2;opacity:1;transition: all .9s}
.dim-wrap.on .info-wrap {opacity:1;visibility:visible;}
.info-wrap .port-tit {display:block; margin-top:10px;text-align:center;}
.info-wrap .port-tit:first-child {margin-top:0;}
.info-wrap .port-tit a {font-size:34px; font-weight:600;}
.info-wrap .port-tit a:hover {text-decoration:underline;}
.info-wrap .port-tit a span {font-size:1.2rem; letter-spacing:-.1rem;}
.port-desc {padding-top:20px;}
.port-desc li {display:table; width:100%;}
.port-desc li span {display:table-cell; height:56px; font-size:28px; vertical-align:middle;}
.port-desc li span:last-child {width:70%;}
.expire.on .second > div {display:none !important;}
.top-wrap {display:none; position:fixed; bottom:140px;right:30px;}
</style>