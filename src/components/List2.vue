<template>
    <div class="list">
        <div class="row">
            <!-- <div v-for="item in list" v-bind:key="item.id" class="article"> -->
            <div v-for="(item, index) in list" 
                 v-bind:key="index" 
                 v-on:click="showModal(index)"
                 class="article">
                <button type="button"><img :src="`${item.image}`" alt=""></button>
            </div>
        </div>
    </div> 

    <div class="dim-wrap" 
         v-bind:class="{'on': isActive }" 
          v-on:click="togglePopup()"
         ref="dim">
        <div class="info-wrap">
            <em class="port-tit">
                <a v-bind:href="`${list[popupIndex].link}`" target="_blank">
                <!-- <router-link v-bind:to="'home'"> -->
                <!-- <router-link to='https://hey.news.co.kr/'> -->
                    {{ list[popupIndex].name }}
                <!-- </router-link> -->
                </a>
            </em>
            <div class="project-desc">
                <ul class="port-desc">
                    <li>
                        <span>
                            {{ list[popupIndex].device }}
                        </span>
                    </li>
                    <li>
                        <span>
                            {{ list[popupIndex].period }}
                        </span>
                    </li>
                </ul>
            </div>
            <!-- <button v-on:click="togglePopup()" type="button" class="close">&times;</button> -->
        </div>
    </div>
</template> 

<script>
export default {
    name: 'list',
    props: {},
    data(){
        return {
            list: [
                {
                    id: 1, 
                    name: 'HeyNews', 
                    device: 'Responsive Web', 
                    period: '2020.5 ~ 2020.10',
                    image: require('@/assets/images/heynews.png'),
                    link: 'https://hey.news.co.kr'
                },
                {
                    id: 2, 
                    name: 'JTBC New App', 
                    device: 'APP (web view)', 
                    period: '2020.8 ~ 2020.10',
                    image: require('@/assets/images/jtbcnews.png'),
                    link: 'https://play.google.com/store/apps/details?id=com.jtbc.news&hl=ko'
                },
                {
                    id: 3, 
                    name: '날씨가좋으면 찾아가겠어요', 
                    device: 'Responsive Web', 
                    period: '2020.02',
                    image: require('@/assets/images/weather.png'),
                    link: 'http://eunhye106.cafe24.com/event/weather/event.html'
                },
                {
                    id: 4, 
                    name: 'Golden Disc', 
                    device: 'pc, mobile web', 
                    period: '2019.12',
                    image: require('@/assets/images/goldendisc.png'),
                    link: 'http://www.goldendisc.co.kr/kr/'
                },
                {
                    id: 5, 
                    name: '백상예술대상', 
                    device: 'pc, mobile web', 
                    period: '2019. 04',
                    image: require('@/assets/images/baeksang.png'),
                    link: 'https://www.baeksangawards.co.kr/'
                },
                {
                    id: 6, 
                    name: 'JTBC 5th Event', 
                    device: 'pc, mobile web', 
                    period: '2016.11',
                    image: require('@/assets/images/jtbc_5th.png'),
                    link: 'http://eunhye106.cafe24.com/jtbc_5th/'
                },
                {
                    id: 7, 
                    name: 'JTBC 아는형님 200회 출석 체크 이벤트', 
                    device: 'Responsive Web', 
                    period: '2019. 09',
                    image: require('@/assets/images/knowingbrother_logo.jpg'),
                    link: 'http://eunhye106.cafe24.com/event/knowingbrother/brother_mv_event.html'
                },{
                    id: 8, 
                    name: 'JTBC beautyinside 바뀐그림찾기', 
                    device: 'Responsive Web', 
                    period: '2018. 09',
                    image: require('@/assets/images/beautyinside.png'),
                    link: 'http://eunhye106.cafe24.com/event/beautyinside/beautyinside_event.html'
                },{
                    id: 9, 
                    name: 'JTBC2', 
                    device: 'pc', 
                    period: '2018. 06',
                    image: require('@/assets/images/jtbc2.png'),
                    link: 'https://jtbc2.joins.com/'
                },{
                    id: 10, 
                    name: 'JTBC 히든싱어 레전드 편 투표', 
                    device: 'Responsive Web', 
                    period: '2018. 06',
                    image: require('@/assets/images/hiddensinger5.png'),
                    link: 'http://eunhye106.cafe24.com/event/hiddensinger5/legend_event.html'
                },{
                    id: 11, 
                    name: '중앙패밀리포인트', 
                    device: 'Responsive Web', 
                    period: '2018. 05',
                    image: require('@/assets/images/joongang_family_point1.png'),
                    link: 'http://eunhye106.cafe24.com/family_point/family_point01.html'
                },{
                    id: 12, 
                    name: 'JTBC 일단 뜨겁게 청소하라', 
                    device: 'Responsive Web', 
                    period: '2019. 09',
                    image: require('@/assets/images/hotclean.png'),
                    link: 'http://eunhye106.cafe24.com/event/hotclean/event.html'
                },{
                    id: 13, 
                    name: 'JTBC Now Promotion', 
                    device: 'Responsive Web', 
                    period: '2018.01',
                    image: require('@/assets/images/jtbcnow.png'),
                    link: 'http://eunhye106.cafe24.com/jtbc_now/jtbc_now3.html'
                },{
                    id: 14, 
                    name: 'JTBC worldwide', 
                    device: 'Responsive Web', 
                    period: '2017. 05 ~ 2017.06',
                    image: require('@/assets/images/jtbc_worldwide.png'),
                    link: 'http://www.jtbcworldwide.com/'
                },{
                    id: 15, 
                    name: 'JTBC 믹스나인', 
                    device: 'pc, mobile web', 
                    period: '2017. 10 ~ 2018.01',
                    image: require('@/assets/images/mixnine.png'),
                    link: 'http://eunhye106.cafe24.com/mixnine/index.html'
                },{
                    id: 16, 
                    name: 'JTBC 밤도깨비 OX 이벤트', 
                    device: 'pc, mobile web', 
                    period: '2017. 08',
                    image: require('@/assets/images/nightgoblin1.png'),
                    link: 'http://eunhye106.cafe24.com/event/nightgoblin/nightgoblin_oxevent.html'
                },{
                    id: 17, 
                    name: 'JTBC 아는형님 뮤비 대전', 
                    device: 'pc, mobile web', 
                    period: '2018. 02',
                    image: require('@/assets/images/knowingbrother_poster.png'),
                    link: 'http://eunhye106.cafe24.com/event/knowingbrother/brother_mv_event.html'
                },{
                    id: 19, 
                    name: 'heykoreantimes', 
                    device: '프로젝트 중단', 
                    period: '2015.10',
                    image: require('@/assets/images/bg_27.png'),
                    link: 'http://eunhye106.cafe24.com/heykorean/heykoreantimes/'
                },{
                    id: 20, 
                    name: 'Korcham', 
                    device: 'pc', 
                    period: '2016.05',
                    image: require('@/assets/images/bg_25.png'),
                    link: 'http://korchamvietnam.com/'
                },{
                    id: 21, 
                    name: 'HeyKorean payment', 
                    device: 'pc', 
                    period: '2016.02',
                    image: require('@/assets/images/bg_24.png'),
                    link: 'http://eunhye106.cafe24.com/heykorean/payment/chargehk.html'
                },{
                    id: 22, 
                    name: 'trader Kim', 
                    device: 'pc', 
                    period: '2015.09',
                    image: require('@/assets/images/traderkim.png'),
                    link: 'http://eunhye106.cafe24.com/heykorean/traderkim/main.html'
                },{
                    id: 23, 
                    name: 'HeyKorean Market', 
                    device: 'pc', 
                    period: '2015.11',
                    image: require('@/assets/images/bg_20.png'),
                    link: 'http://market.heykorean.com'
                },{
                    id: 24, 
                    name: 'heykorean CS', 
                    device: 'Responsive Web (프로젝트 중단)', 
                    period: '2015.10',
                    image: require('@/assets/images/bg_19.png'),
                    link: 'http://eunhye106.cafe24.com/heykorean/help/index.html'
                },{
                    id: 25, 
                    name: '신아TNC', 
                    device: 'pc', 
                    period: '2014.06',
                    image: require('@/assets/images/bg_16.png'),
                    link: 'http://www.shinatnc.com/rb/'
                },{
                    id: 26, 
                    name: '숭실대학교 인공지능 연구실', 
                    device: 'pc', 
                    period: '2014.05',
                    image: require('@/assets/images/bg_13.png'),
                    link: 'http://ailab.ssu.ac.kr/rb/?r=home'
                },{
                    id: 27, 
                    name: '안상규벌꿀', 
                    device: 'pc', 
                    period: '2014.05',
                    image: require('@/assets/images/bg_11.png'),
                    link: 'http://www.beeman.co.kr/rb/'
                },{
                    id: 28, 
                    name: 'hizen', 
                    device: 'pc', 
                    period: '2014.04',
                    image: require('@/assets/images/bg_10.png'),
                    link: 'http://www.hizenco.com/'
                },{
                    id: 29, 
                    name: 'bluetechsolution', 
                    device: 'pc', 
                    period: '2014.04',
                    image: require('@/assets/images/bg_8.png'),
                    link: 'http://www.bluetechs.com/'
                },{
                    id: 30, 
                    name: '보락', 
                    device: 'pc', 
                    period: '2014.03',
                    image: require('@/assets/images/bg_7.png'),
                    link: 'http://www.bolak.co.kr/?r=home'
                },{
                    id: 31, 
                    name: '현진특수강', 
                    device: 'pc', 
                    period: '2014.02',
                    image: require('@/assets/images/bg_6.png'),
                    link: 'http://www.hyunjinst.co.kr/'
                },{
                    id: 32, 
                    name: '서강라이프케어', 
                    device: 'pc', 
                    period: '2013.11',
                    image: require('@/assets/images/bg_5.png'),
                    link: '#'
                },{
                    id: 33, 
                    name: 'CBNU IUCF', 
                    device: 'pc', 
                    period: '2014.06',
                    image: require('@/assets/images/bg_15.png'),
                    link: '#'
                }
            ],
            isActive: false,
            popupIndex: 0
        }   
    },
    methods: {
        showModal(index){
            console.log(this);
            this.popupIndex = index;
            this.togglePopup();
        },
        togglePopup(){
            this.isActive = !this.isActive;
        }
    }
}
</script>
<style scoped>
.container {margin:0 auto;max-width:100%;}
.row {display:-ms-flexbox; display:flex; -ms-flex-wrap:wrap; flex-wrap:wrap; margin-left:-15px; margin-right:-15px; min-width:320px;}
.article {
	overflow:hidden;position:relative; padding:15px; box-sizing:border-box; cursor:pointer;
	flex:0 0 16.666667%; max-width:16.666667%;
}
.article button {display:block; width:100%}
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

/* modal popup */
.dim-wrap {
	display:none; position:fixed; left:0; top:0; right:0; bottom:0; width:100%; height:100%; background:rgba(0, 0, 0, .6);filter:alpha(opacity=50); z-index:1;
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
.port-desc li span {display:table-cell; height:56px; font-size:28px; vertical-align:middle; text-align:center;}
.port-desc li span:last-child {width:70%;}
.expire.on .second > div {display:none !important;}
.top-wrap {display:none; position:fixed; bottom:140px;right:30px;}
</style>