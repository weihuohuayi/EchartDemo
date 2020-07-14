<template>
  <div class="wrapper">这是wrapper div
    <div class="container">这是container div
      <div class="dashboard-bg-image">部分标签-背景图片</div>
      <div :style="marginStyle">
        <div style="position: relative;">
          <div class="dashboard-container" :style="transformStyle">
            <!-- 头部的盒子 -->
            <top-title :title.sync="title"></top-title>

            <!-- 页面主体部分 -->
            <section class="mainbox">
              <!-- left -->
              <div class="column">左：占3份
                <div class="panel bar">
                  <h2>柱形图</h2>
                  <div class="chart">
                    <bar-chart />
                  </div>
                  <div class="pannel-foot"></div>
                </div>
                <div class="panel line">
                  <h2>折线图</h2>
                  <div class="chart">
                    <line-chart/>
                  </div>
                  <div class="pannel-foot"></div>
                </div>
                <div class="panel pie">
                  <h2>饼形图</h2>
                  <div class="chart">
                    <pie-chart/>
                  </div>
                  <div class="pannel-foot"></div>
                </div>
              </div>

              <!-- middle -->
              <div class="column">中：占5份
                <div class="numBlock">上半部分
                  <div class="num-hd">数字
                    <ul>
                      <li>12313</li>
                      <li>8374</li>
                    </ul>
                  </div>
                  <div class="num-bd">
                    <ul>
                      <li>左边文字</li>
                      <li>右边文字</li>
                    </ul>
                  </div>
                </div>
                <world-dot-net />
              </div>


              <div class="column">右：占3份
                <div class="panel bar">
                  <h2>美化柱形图</h2>
                  <div class="chart">
                    <bar-chart-update/>
                  </div>
                  <div class="pannel-foot"></div>
                </div>
                <div class="panel line">
                  <h2>美化折线图</h2>
                  <div class="chart">
                    <line-chart-update/>
                  </div>
                  <div class="pannel-foot"></div>
                </div>
                <div class="panel pie">
                  <h2>美化饼形图</h2>
                  <div class="chart">
                    <pie-chart-update/>
                  </div>
                  <div class="pannel-foot"></div>
                </div>
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import LineChart from './eCharts/LineChart'
  import LineChartUpdate from './eCharts/LineChartUpdate'
  import BarChart from './eCharts/BarChart'
  import BarChartUpdate from './eCharts/BarChartUpdate'
  import PieChart from './eCharts/PieChart'
  import PieChartUpdate from './eCharts/PieChartUpdate'
  import TopTitle from './TopTitle';

  import WorldDotNet from './common/background/WorldDotNet'



  // import { getCurrentDate } from '../assets/utils.js'



  export default {
    name: 'DashBoard',
    data() {
      return {
        scaleX: 1,
        scaleY: 1,
        marginHorizontal: 0,
        title: '请输入top-title大标题',
      };
    },

    components: {
      LineChart,
      LineChartUpdate,
      BarChart,
      BarChartUpdate,
      PieChart,
      PieChartUpdate,
      TopTitle,
      WorldDotNet,
    },

    computed: {
      transformStyle: function () {
        return {
          transform: `scale(${this.scaleX}, ${this.scaleY})`
        };
      },
      marginStyle: function () {
        return {
          margin: `0px ${this.marginHorizontal}px`
        };
      }
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h3 {
    margin: 40px 0 0;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }

  /* 声明字体 */
  @font-face {
    font-family: electronicFont;
    src: url(../assets/font/DS-Digital.ttf)
  }


  .wrapper {
    height: 100%;
    width: 100%;
    position: relative;
    border-style: dotted;
    background-color: rgb(16, 214, 16);

  }

  .container {
    background-color: rgb(200, 210, 255);

    /* 溢出隐藏 */
    overflow: hidden;

    /* 设置绝对位置后，就和上级标签没有关系了 */
    /* position: absolute; */
    /* top: 500px; */
    /* left: 100px; */
    /* right: 0; */
    /* bottom: 0; */
  }


  .dashboard-bg-image {
    width: 100%;
    height: 100%;

    /* 设置绝对位置后，就和上级标签没有关系了 */
    position: absolute;
    /* background: url('~assets/bg3.jpg'); */
    background-repeat: no-repeat top center;
    background-size: 100% 100%;
  }

  .dashboard-container {
    position: relative;
    user-select: none;
    width: 100%;
    height: 100%;
    transform-origin: 0 0;

    /* box-shadow参数意义：水平位置为平移，垂直位置为平移，第三个10px代表阴影的模糊程度blur，第四个是阴影半径的意思 */
    box-shadow: 0 0 10px 0x rgba(0, 0, 0, .5);
    transition: all .3s linear;
    overflow: hidden;
  }

  .mainbox {
    /* 大屏参数 */
    min-width: 1024px;
    max-width: 1920px;
    margin: 0 auto;
    background-color: wheat;
    padding: 0.625rem 0.625rem 0;

    /* 里面内容并排放 */
    display: flex;
  }

  .column {
    flex: 3;
  }

  .column:nth-child(2) {
    flex: 5;
    margin: 0 0.625rem 1rem;
  }

  .panel {
    position: relative;
    height: 310px;
    border: 1px solid rgb(200, 210, 255);
    padding: 0 1rem 0.5rem;
    margin-bottom: 0.9375rem;
    background-color: rgba(10, 10, 150, .1);
  }

  .panel::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 10px;
    height: 10px;
    border-left: 2px solid rgba(1, 1, 252, 0.986);
    border-top: 2px solid rgba(1, 1, 252, 0.986);
    content: "";
  }

  .panel::after {
    position: absolute;
    top: 0;
    right: 0;
    width: 10px;
    height: 10px;
    border-right: 2px solid rgba(1, 1, 252, 0.986);
    border-top: 2px solid rgba(1, 1, 252, 0.986);
    content: "";
  }

  .pannel-foot {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
  }

  .pannel-foot::before {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 10px;
    height: 10px;
    border-left: 2px solid rgba(1, 1, 252, 0.986);
    border-bottom: 2px solid rgba(1, 1, 252, 0.986);
    content: "";
  }

  .pannel-foot::after {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 10px;
    height: 10px;
    border-right: 2px solid rgba(1, 1, 252, 0.986);
    border-bottom: 2px solid rgba(1, 1, 252, 0.986);
    content: "";
  }


  .numBlock {
    background-color: mediumseagreen;
    position: relative;

    padding: 1rem;

  }

  .num-hd {
    border: 1px solid rgna(25, 186, 139, 0.17);
  }

  .num-hd::before {
    position: absolute;
    top: 0;
    left: 0;
    content: "";
    width: 30px;
    height: 10px;
    border-top: 2px solid rgba(1, 1, 252, 0.986);
    border-left: 2px solid rgba(1, 1, 252, 0.986);
  }

  .num-hd ul,
  .num-bd ul {
    display: flex;
  }

  .num-hd ul li {
    flex: 1;
    /* 均匀分配主轴剩余空间 */
    line-height: 3rem;
    font-size: 2.875rem;
    color: #ffeb7b;
    /* text-align:center; */

    /* 去除list开头标签 */
    /* list-style: none; */

    /* 字体引用 */
    font-family: 'electronicFont';
  }


  .num-bd ul li {
    flex: 1;
    /* 均匀分配主轴剩余空间 */
    text-align: center;
    color: white;
    font-size: 1rem;
    height: 1.2rem;
    line-height: 1.2rem;
    padding: 1rem;
  }
</style>