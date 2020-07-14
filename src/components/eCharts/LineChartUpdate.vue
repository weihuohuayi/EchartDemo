<template>
  <div class="line-chart">
    <!-- 1.初始化eCharts 需要一个有宽高的 盒子  height: 500px; width: 100% -->
    <div ref='mapbox' style="height: 200px; width: 100%;"></div>
  </div>
</template>

<script>
  // 2.导入echarts
  // import echarts from 'echarts'
  import { seriesData, xAxisData, legendData } from '../../data/line-chart.js'


  // 4.指定图表的配置项和数据
  const option = {
    // color设置线条颜色
    color: ['red', 'pink', 'green', '#00f2f1', '#ed3f35'],

    // 设置图表标题
    title: {
      text: '堆叠区域图',
      link: 'www.baidu.com',
      subtext: '副标题'
    },
    // 图表的提示框组件
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#6a7985'
        }
      }
    },
    // 图例组件
    legend: {
      top: '0%',
      // 如果series里面已经有name属性了，那么legend里的data可以删掉。
      data: [],
      // 修改图例组件中的文字
      textStyle: {
        color: '#4c9bfd',
        fontSize: "12"
      },
      right: '10'
    },
    // 网格配置，图表在DOM中的定位
    grid: {
      top: '30%',
      left: '3%',
      right: '4%',
      bottom: '1%',
      // 显示边框
      show: true,
      borderColor: '#012f4a',// 边框颜色
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
        show: false //去除刻度线
      },
      axisLabel: {
        color: '#4c9bfd'//文本颜色
      },
      axisLine: {
        // color: '#4c9bfd'//轴线颜色
        show: false  //去除轴线
      },
      boundaryGap: false //去除轴内间距
    },
    // 设置y轴的相关配置
    yAxis: {
      type: 'value',
      axisTick: { show: false },
      axisLine: {
        color: 'rgba(255,255,255,.1)'
      },
      axisLabel: {
        textStyle: {
          color: 'yellow',
          fontSize: 12
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
        name: '',
        type: 'line',
        // stack: '总量',
        // 填充区域
        areaStyle: {
          color: "blue"
        },
        smooth: true,//线段平滑带有弧度
        // 单独修改当前线条的样式
        lineStyle: {
          color: "red",
          width: "1"

        },
        data: []
      },
      {
        name: '',
        type: 'line',
        // stack: '总量',
        areaStyle: {},
        smooth: true,//线段平滑带有弧度
        data: []
      },
      {
        name: '',
        type: 'line',
        // stack: '总量',
        areaStyle: {},
        smooth: true,//线段平滑带有弧度
        data: []
      },
      {
        name: '',
        type: 'line',
        // stack: '总量',
        areaStyle: {},
        smooth: true,//线段平滑带有弧度
        data: []
      },
      {
        name: '',
        type: 'line',
        // stack: '总量',
        // 线条顶部显示数据
        label: {
          normal: {
            show: true,
            position: 'top'
          }
        },
        areaStyle: {
          color: "pink"
        },
        smooth: true,//线段平滑带有弧度
        // 单独修改当前线条的样式
        lineStyle: {
          color: "red",
          width: "5"
        },
        data: [],
        // 设置拐点
        symbol: "circle",
        // 拐点大小
        symbolSize: 8,

        // 设置拐点颜色以及边框
        itemStyle: {
          color: "#0184d5",
          borderColor: "rgba(221,220,107,.1)",
          borderWidth: 12
        },
        // 开始不显示拐点，鼠标经过显示
        showSymbol: false

      }
    ]
    
  }

  export default {
    name: 'LineChartUpdate',
    data() {
      return {
        seriesData: seriesData,
        // xAxisData: xAxisData
      }
    },
    methods: {
      getData() {
        option.xAxis.data = xAxisData;
        option.legend.data = legendData;
        // 添加series的标签name
        for (var i = 0; i < option.legend.data.length; i++) {
          option.series[i].name = option.legend.data[i];
        }
        // 添加series的data数据
        for (var i = 0; i < option.legend.data.length; i++) {
          option.series[i].data = this.seriesData[i];
        }
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
      window.addEventListener("resize",function(){
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