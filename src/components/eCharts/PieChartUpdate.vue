<template>
  <div class="pie-chart">
    <!-- 1.初始化eCharts 需要一个有宽高的 盒子  height: 500px; width: 100% -->
    <div ref='mapbox' style="height: 200px; width: 100%;"></div>
  </div>
</template>

<script>
  // 2.导入echarts
  // import echarts from 'echarts'
  import { seriesData, legendData } from '../../data/update-pie-chart.js'


  // 4.指定图表的配置项和数据
  const option = {
    // color设置线条颜色
    color: ['#006cff', '#60cda0', '#ed8884', '#ff9f7f', '#0096ff', '#9fe6b8', '#32c5e9', '#1d9dff'],

    // 设置图表标题
    title: {
      text: '南丁格尔玫瑰图',
      link: 'www.baidu.com',
      subtext: '纯属虚构',
      // 标题居中
      left: 'center'
    },
    // 图表的提示框组件
    tooltip: {
      trigger: 'item',
      // a为series里的name，b为data里的name，c为data里的value值，d为百分数
      formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    // 图例组件
    legend: {
      // 距离底部
      bottom: "0%",
      // 小图标的宽度和高度
      itemWidth: 10,
      itemHeight: 10,
      // orient: 'vertical',
      // 如果series里面已经有name属性了，那么legend里的data可以删掉。
      data: [],
      // 修改图例组件中的文字
      textStyle: {
        color: '#4c9bfd',
        fontSize: "12"
      },
      left: '10'
    },
    // 网格配置，图表在DOM中的定位
    grid: {
      top: '30%',
      left: '3%',
      right: '4%',
      bottom: '3%',
      // 不显示边框
      show: false,
      borderColor: '#012f4a',// 边框颜色
      // 是否显示刻度标签
      containLabel: true
    },
    // 工具箱组件，可以另存为等功能
    toolbox: {
      show: true,
      feature: {
        mark: { show: true },
        dataView: { show: true, readOnly: false },
        magicType: {
          show: true,
          type: ['pie', 'funnel']
        },
        restore: { show: true },
        saveAsImage: { show: true }
      }
    },

    // 系列图表配置，决定显示哪种类型的图表
    series: [
      {
        name: '半径模式',  //面积模式  半径模式
        type: 'pie',
        roseType: 'radius',  //area  radius
        // 设置饼形图在容器中的位置
        center: ['50%', '50%'],
        // 修改内圆半径和外圆半径为 百分比是相对容器宽度按来说的
        radius: ['10%', '70%'],
        avoidLabelOverlap: false,
        // 图形标签文字
        label: {
          // show: false,
          // position: 'center'
          show: true,
          fontSize:10
        },
        // 链接图形和文字的线
        labelLine: {
          show: true,
          // 链接线段分段长度
          length:6,
          length2:8
        },
        emphasis: {
          label: {
            show: true,
            fontSize: '30',
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
        data: []
      }
    ]
  }

  export default {
    name: 'PieChart',
    data() {
      return {
        seriesData: seriesData,
      }
    },
    methods: {
      getData() {
        option.legend.data = legendData;

        // 添加series的data数据
        option.series[0].data = this.seriesData;

      }
    },
    mounted() {
      // 获取数据
      this.getData();
      // 3.基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(this.$refs.mapbox);

      // 5.使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);


      // 6.让图表跟随屏幕自动的去适应
      window.addEventListener("resize", function () {
        myChart.resize()
      });

    }
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
</style>