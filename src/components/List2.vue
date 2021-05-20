<template>
    <div class="list">
        <div class="row">
            <div v-for="item in list" v-bind:key="item.id" class="article">
                <!-- {{ item.id }} <br> {{ item.name }} <br> {{ item.device }} <br> {{item.period}}  -->
                <button v-on:click="togglePopup()" type="button"><img :src="`${item.image}`" alt=""></button>
            </div>
        </div>
    </div> 


    <!-- <MyModal @close="closeModal"> -->
    <template v-slot="dimwrap">
        <!-- <div slot="projectname"></div> -->    
        <!-- <template v-slot="projectdesc"></template> -->
    </template>
</template> 

<script>
import Popup from '@/components/Popup.vue'
export default {
    name: 'list',
    components: Popup,
    props: {},
    data(){
        return {
            list: [
                {
                    id: 1, 
                    name: 'HeyNews', 
                    device: 'Responsive Web', 
                    period: '2020.5 ~ 2020.10',
                    image: require('@/assets/images/heynews.png')
                },
                {
                    id: 2, 
                    name: 'JTBC New App', 
                    device: 'APP (web view)', 
                    period: '2020.8 ~ 2020.10',
                    image: require('@/assets/images/jtbcnews.png')
                },
                {
                    id: 3, 
                    name: '날씨가좋으면 찾아가겠어요', 
                    device: 'Responsive Web', 
                    period: '2020.02',
                    image: require('@/assets/images/weather.png')
                },
                {
                    id: 4, 
                    name: 'Golden Disc', 
                    device: 'pc, mobile web', 
                    period: '2019.12',
                    image: require('@/assets/images/goldendisc.png')
                },
                {
                    id: 5, 
                    name: '백상예술대상', 
                    device: 'pc, mobile web', 
                    period: '2019. 04',
                    image: require('@/assets/images/baeksang.png')
                },
                {
                    id: 6, 
                    name: 'JTBC 5th Event', 
                    device: 'pc, mobile web', 
                    period: '',
                    image: require('@/assets/images/jtbc_5th.png')
                },
                {
                    id: 7, 
                    name: 'JTBC 아는형님 200회 출석 체크 이벤트', 
                    device: 'pc, mobile web', 
                    period: '',
                    image: require('@/assets/images/knowingbrother_logo.jpg')
                },{
                    id: 8, 
                    name: 'JTBC beautyinside 바뀐그림찾기', 
                    device: 'pc, mobile web', 
                    period: '',
                    image: require('@/assets/images/beautyinside.png')
                },{
                    id: 9, 
                    name: 'JTBC2', 
                    device: 'pc, mobile web', 
                    period: '',
                    image: require('@/assets/images/jtbc2.png')
                },{
                    id: 10, 
                    name: 'JTBC 히든싱어 레전드 편 투표', 
                    device: 'pc, mobile web', 
                    period: '',
                    image: require('@/assets/images/hiddensinger5.png')
                },{
                    id: 11, 
                    name: '중앙패밀리포인트', 
                    device: 'pc, mobile web', 
                    period: '',
                    image: require('@/assets/images/joongang_family_point1.png')
                },{
                    id: 12, 
                    name: 'JTBC 일단 뜨겁게 청소하라', 
                    device: 'pc, mobile web', 
                    period: '',
                    image: require('@/assets/images/hotclean.png')
                },{
                    id: 13, 
                    name: 'JTBC Now Promotion', 
                    device: 'pc, mobile web', 
                    period: '',
                    image: require('@/assets/images/jtbcnow.png')
                },{
                    id: 14, 
                    name: 'JTBC worldwide', 
                    device: 'pc, mobile web', 
                    period: '',
                    image: require('@/assets/images/jtbc_worldwide.png')
                },{
                    id: 15, 
                    name: 'JTBC 믹스나인', 
                    device: 'pc, mobile web', 
                    period: '',
                    image: require('@/assets/images/mixnine.png')
                }
            ],
            // isActive: true,
            // error: null
            modal: false,
            message: ''
        }   
    },
    methods: {
        // openModal() {
        //     this.modal = true
        // },
        closeModal() {
            this.modal = false
        },
        togglePopup(){
            return {
                active: this.isActive && !this.error
            }
        }
    }
}
</script>
<style scoped>
.container {margin:0 auto;max-width:100%;}
.row {display:-ms-flexbox; display:flex; -ms-flex-wrap:wrap; flex-wrap:wrap; margin-left:-15px; margin-right:-15px; min-width:320px;}
.article {
	overflow:hidden;position:relative; padding:15px; box-sizing:border-box;
	flex:0 0 16.666667%; max-width:16.666667%;
}
.article .thumb-area, .article .second {width:100%;height:100%;}
.article .thumb-area a {display:block; cursor:pointer;}
.article .thumb-area a img {transition:transform .5s cubic-bezier(.175,.885,.32,1.275); transform:scale(1);}
.article .thumb-area a:hover img {transform:scale(1.03) rotate(.02deg)}
.article.on .second {display:block;}

.article .second > div {opacity:0;visibility:hidden;transition:all .5s;}
.article.on .second > div, .info-wrap {visibility:visible; position:fixed;left:20%;top:30%;padding:5%;width:60%;border-radius:15px;background:#fff;z-index:2;opacity:1;}
.article.on .second > div .detail_portfolio {position:absolute;right:3%;top:0;}
.article.on .second > div table tr:first-child th {font-size:1.5em;text-align:center;}
.article.on .second > div th a {font-size:2.2rem;}
.article.on .second > div th a:hover {text-decoration:underline;}
.article.on .second > div th, .article.on .second > div td {font-size:1.8rem;}
.article.on .second > div table td {height:2.5em;}
.article.on .second > div table td a {overflow:hidden;display:block;font-weight:bold;white-space:nowrap;text-overflow:ellipsis;}
.article.on .second > div table td a:hover, .second > div table td a:active {color:#111;}
.article .second {display:none;}
.article img {display:block;width:100%;}



/* 임시 */
.section {position:relative;width:100%;}


@media (max-width: 1024px) {
	div .row {margin:0;}
	.port-desc li span {height:36px; font-size:16px;}
}

/* 태블릿, 아이패드(세로) */
@media (min-width: 768px) and (max-width: 1024px) {
	.eun_site {height:120px;line-height:120px;}
	.rina_eun {font-size:2.2em;}
	.close {font-size:1.8em;}
	.article {
		-ms-flex : 0 0 25%;
		flex : 0 0 25%;
		max-width : 25%;
	}
}

/* 태블릿, 아이패드(가로) */
@media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
	.rina_eun {font-size:2.5em;}
	.close {font-size:2.5em;}
	.article {
		-ms-flex : 0 0 25%;
		flex : 0 0 25%;
		max-width : 25%;
	}
}

/* 저해상도 태블릿, 모바일(가로) */
@media (min-width: 481px) and (max-width: 767px) {
	.eun_site {height:140px; line-height:140px;}
	.rina_eun {font-size:2.8em;}
	.article {
		-ms-flex : 0 0 33.333333%;
		flex : 0 0 33.333333%;
		max-width : 33.333333%;
	}
}

/* 대부분의 스마트폰 모바일 기기(세로) */
@media (min-width: 320px) and (max-width: 480px) {
	.eun_site {height:100px;line-height:100px;}
	.rina_eun {top:120px;max-height:60%; font-size:3em;}
	.close {font-size:36px;}
	.article.on .second > div {font-size:2.3em;}
	.article {
		-ms-flex : 0 0 50%;
		flex : 0 0 50%;
		max-width : 50%;
	}
}

/* android */
.module-timeline .list-timeline li dt{padding:0 10px;height:23px;font-size:12px;line-height:23px;}
</style>