<template>
  <div class="aboutme">
    <div class="eun_site_wrap">
      <div class="rina_eun">
        <img class="its-different" src="@/assets/images/its_me.jpg" alt="실물과 다름">
        <div class="txt-skill">
          <p>VANILLA JS, JQUERY, Vue.js, SEO, SASS, BOOTSTRAP, GIT, Gulp</p>
        </div>
        <div class="timeline-wrap">
          <div class="list-timeline">
            <ul>
              <li>
                <dl>
                  <dt>JTBC studios</dt>
                  <dd class="timline-img"><!-- 텍스트:timline-txt, 텍스트+이미지:timline-img -->
                    <a href="#">
                    <strong>2016.10.18~</strong>
                    <span class="thumb-area">
                      <img src="@/assets/images/jtbc_logo_news.png" alt="">
                    </span> 
                    </a>
                  </dd>
                </dl>
              </li>
              <li class="timeline-txt-con"><!-- timeline-txt-con:날짜 세팅하지 않을 경우 해당영역 비노출 -->
                <dl>
                  <dt></dt>
                  <dd class="timline-txt"><!-- 텍스트:timline-txt, 텍스트+이미지:timline-img -->
                    <strong>manage</strong>
                    <span>
                      JTBC(<a href="http://jtbc.joins.com" target="_blank">pc</a>, <a href="http://m.jtbc.joins.com" target="_blank">mobile web)</a>, <a href="http://jtbc2.joins.com/" target="_blank">JTBC2</a>, <a href="http://jtbc4.joins.com/" target="_blank">JTBC4</a>, <a href="http://www.jtbcmediacomm.co.kr" target="_blank">JTBC mediacomm</a>, JTBC news (<a href="http://news.jtbc.joins.com" target="_blank">pc</a>, <a href="http://mnews.jtbc.joins.com" target="_blank">mobile web</a>, <a href="#" target="_blank">app:web view</a>)</span>
                  </dd>
                </dl>
              </li>
              <li class="timeline-txt-con">
                <dl>
                  <dt>2020.12.31</dt>
                  <dd>
                    <strong>build</strong>
                    <span>
                      JTBC 5th, Mixnine vote, JTBC NOW promotion, JoongAng Group Family Point, JTBC2, JTBC news app newshome, Baeksangawards, Goldendisc
                    </span>
                  </dd>
                </dl>
              </li>

              <li>
                <dl>
                  <dt>Hey Korean</dt>
                  <dd class="timline-img">
                    <a href="#">
                    <strong>2015.4.13 ~ 2016.6.14</strong>
                    <span class="thumb-area">
                      <img src="@/assets/images/heykorean.png" alt="">
                    </span> 
                    </a>
                  </dd>
                </dl>
              </li>
              <li class="timeline-txt-con">
                <dl>
                  <dt></dt>
                  <dd class="timline-txt">
                    <strong>manage</strong>
                    <span>Single to Mingle (web &amp; mobile web), HeyKorean</span>
                  </dd>
                </dl>
              </li>
              <li class="timeline-txt-con">
                <dl>
                  <dt></dt>
                  <dd>
                    <strong>build</strong>
                    <span>
                      Single to Mingle (web &amp; mobile web), HeyKorean customer service center(flexible site)
                    </span>
                  </dd>
                </dl>
              </li>

              <li>
                <dl>
                  <dt>WAPLEZ</dt>
                  <dd class="timline-img">
                    <a href="#">
                    <strong>2014.02.17 ~  2014.06.30</strong>
                    <span class="thumb-area">
                      <img src="@/assets/images/waplez.png" alt="">
                    </span> 
                    </a>
                  </dd>
                </dl>
              </li>
              <li class="timeline-txt-con">
                <dl>
                  <dt>2020.12.31</dt>
                  <dd>
                    <strong>build</strong>
                    <span>
                      hyunjinst, blueTech Solution, bolak, SoongSil University Artificial Interlligence Laboratory, Standardmedia, CBNU IUCF, Hizen, E-journal, Danielprayer, ShinaTNC, Ahnsanggyu Honey
                    </span>
                  </dd>
                </dl>
              </li>

              <li>
                <dl>
                  <dt>Conerstone Interactive</dt>
                  <dd class="timline-img"><!-- 텍스트:timline-txt, 텍스트+이미지:timline-img -->
                    <a href="#">
                    <strong>2013.1.16 ~ 2014.2.13</strong>
                    <span class="thumb-area">
                      <img src="@/assets/images/conerstone.png" alt="">
                    </span> 
                    </a>
                  </dd>
                </dl>
              </li>
              <li class="timeline-txt-con">
                <dl>
                  <dt></dt>
                  <dd class="timline-txt">
                    <strong>manage</strong>
                    <span>
                      T’station, ksNet, Pizzahut, Jaseng Hospital of Korean Medicine, UL Korea, Woori Asset Management, Samsung Yepp
                    </span>
                  </dd>
                </dl>
              </li>
              <li class="timeline-txt-con">
                <dl>
                  <dt>2020.12.31</dt>
                  <dd>
                    <strong>build</strong>
                    <span>
                      SogangLIfeCare, Biofood
                    </span>
                  </dd>
                </dl>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="go_bottom_wrap">
        <a href="#footer" class="go_bottom">Get started from the bottom ▼</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'aboutme',
  props: {
  }
}
</script>
<style scoped>
  .go_bottom_wrap {text-align:center;}
  .go_bottom_wrap a {font-size:32px;}
  .go_bottom {display:inline-block;margin:20px 0;}
  .rina_eun {overflow-y:scroll;display:none;position:absolute;top:195px;left:10%;padding:5%;width:80%;max-height:70%;background:#fff;border: 1px solid rgba(230,230,230,1);z-index:1;}
  .its-different {display:block;margin:0 auto 30px; max-width:150px; width:40%;}
  .eun_site_wrap .rina_eun.on {display:block;box-shadow:15px 15px 30px rgba(0,0,0,0.4);border-radius:5px;z-index:3;}
  .eun_site_wrap .dark {display:none;}
  .eun_site_wrap.on .dark {display:block;position:fixed;left:0;top:0;width:100%;height:100%;background:#000;opacity:0.5;filter:alpha(opacity=50);z-index:1;}
  .close {display:block; position:absolute;right:2%;top:1%; font-size:60px; z-index:100;}

  .txt-skill {margin:30px auto; max-width:700px; width:100%;  }
  .txt-skill p {display:block; font-size:22px; text-align:center; font-weight:700;}

  /* timeline */
  .timeline-wrap {margin:0 auto; max-width:700px; width:100%;}
  .list-timeline {overflow:hidden;margin:14px 0 0;}
  .list-timeline ul {padding-bottom:20px;}
  .list-timeline li{position:relative;padding-top:20px;}
  .list-timeline li.timeline-txt-con {padding-top:0;}
  .list-timeline li.timeline-txt-con dt {display:none;}
  .list-timeline li:first-child {padding-top:0;}
  .list-timeline li dl{clear:both;overflow:hidden;}
  .list-timeline li:before{overflow:hidden;content:'';position:absolute;bottom:0;left:0;width:18px;height:100%;border-right:1px solid #ccc;}
  .list-timeline li:last-child.txt:before, 
  .list-timeline li:last-child.img:before{bottom: auto; height: 10%;}
  .list-timeline li:first-child:before{top:20px;}
  .list-timeline li dl, .module-timeline.list-timeline li dt, .module-timeline.list-timeline li dd{display:block;}
  .list-timeline li dt{position:relative;display:inline-block;padding:2px 10px 0;height:21px;font-size:12px;line-height:21px;background:#2782c4;border-radius:12px;color:#fff;text-align:center;z-index: 1;}
  .list-timeline li dd {position:relative;display:block;margin-top:8.5px;margin-left:33px;box-sizing:border-box;color:#333;background:#f5f5f5;border:1px solid #ebebeb;}
  .list-timeline li dd a {display:block;}
  .list-timeline li dd span a {display:inline-block;}
  .list-timeline li dd strong{
    overflow:hidden;position:relative;display:block;padding:0 8px;max-width:100%;height:36px;box-sizing:border-box;
    font-size:14px;line-height:36px;color:#000;font-weight:bold;white-space:nowrap;text-overflow:ellipsis;}
  .list-timeline li dd span {
    overflow:hidden;position:relative;display:block;margin:-14px 0 -2px;padding:8px;max-width:100%;box-sizing:border-box;
    font-size:14px;line-height:20px;color:#666;}
  .list-timeline li dd:before {
    position:absolute;left:-19px;top:13px;content:"";display:block;width:18px;height:8px;
    background: url("http://images.jtbc.joins.com/ui_mobile/2018/app/news/bg_list_timeline.png") no-repeat;background-size:auto 8px;}
  .module-timeline.list-timeline li:last-child dd:before {height:100%;background-color:#fff;}
  .list-timeline li dd.timline-img span{padding-bottom:0;border-bottom:none;}
  .list-timeline li dd.timline-img span.thumb-area {margin-top:0;padding:0;height:auto;border:none;}
  .list-timeline li dd span img{width:100%;height:auto;}
  .list-timeline li dd span span{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding:0 !important;margin:0 !important;border:none;}
  
  @media (max-width: 1024px) {
    .eun_site {font-size:28px;}
    .img-tit {padding-top:8%; width:60%;}
    .info-wrap .port-tit a {font-size:24px;}
    .go_bottom_wrap a {font-size:20px;}
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