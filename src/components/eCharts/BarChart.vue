<template>
  <div class="bar-chart">
    <!-- 1.初始化eCharts 需要一个有宽高的 盒子  height: 500px; width: 100% -->
    <div ref='mapbox' style="height: 200px; width: 100%;"></div>
  </div>
</template>

<script>
  // 2.导入echarts
  // import echarts from 'echarts'
  import { seriesData, xAxisData, legendData } from '../../data/bar-chart.js'


  // 4.指定图表的配置项和数据
  const option = {
    // color设置线条颜色
    color: ['#3398DB'],

    // 设置图表标题
    title: {
      text: '柱形图',
      link: 'www.baidu.com',
      subtext: '副标题'
    },
    // 图表的提示框组件
    tooltip: {
      trigger: 'axis',
      axisPointer: {            // 坐标轴指示器，坐标轴触发有效
        type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    // 图例组件
    legend: {
      // 如果series里面已经有name属性了，那么legend里的data可以删掉。
      data: []
    },
    // 网格配置，图表在DOM中的定位
    grid: {
      left: '0%',
      right: '0%',
      bottom: '3%',
      // 是否显示刻度标签
      containLabel: true
    },
    // 工具箱组件，可以另存为等功能
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    // 设置x轴的相关配置
    xAxis: {
      // 类型：category类目，value值
      type: 'category',
      // 折线与坐标轴之间保留间隙
      boundaryGap: false,
      data: '',
      axisTick: {
        alignWithLabel: true
      },
      // 修改刻度标签
      axisLabel: {
        color: 'red',
        fontSize: '12'
      }
    },
    // 设置y轴的相关配置
    yAxis: {
      type: 'value',
      // 修改刻度标签
      axisLabel: {
        color: 'gray',
        fontSize: '12'
      },
      // 修改Y轴线条颜色
      axisLine: {
        lineStyle: {
          color: 'rgba(255,255,255,0.1)',
          width: 2
        }
      },
      // 修改Y轴分隔线的线条颜色
      splitLine: {
        lineStyle: {
          color: 'yellow'
        }
      }
    },
    // 系列图表配置，决定显示哪种类型的图表
    series: [
      {
        name: '直接访问',
        type: 'bar',
        barWidth: '35%',
        data: [],
        itemStyle: {
          // 修改柱子圆角
          barBorderRadius: 5
        }
      }
    ]
  }

  export default {
    name: 'BarChart',
    data() {
      return {
        // seriesData: seriesData
      }
    },
    methods: {
      getData() {
        option.xAxis.data = xAxisData;
        // option.legend.data = legendData;

        // 添加series的data数据
        option.series[0].data = seriesData;

      }
    },
    mounted() {
      // 获取数据
      this.getData();
      // 3.基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(this.$refs.mapbox);

      // 5.使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);

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