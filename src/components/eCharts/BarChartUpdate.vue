<template>
  <div class="bar-chart">
    <!-- 1.初始化eCharts 需要一个有宽高的 盒子  height: 500px; width: 100% -->
    <div ref='mapbox' style="height: 200px; width: 100%;"></div>
  </div>
</template>

<script>
  // 2.导入echarts
  // import echarts from 'echarts'
  import { seriesData, xAxisData, legendData } from '../../data/update-bar-chart.js'

  let myColor = ['#1089E7', '#F57474', '#56D0E3', '#F8B448', '#8B78F6', 'black']

  // 4.指定图表的配置项和数据
  const option = {
    // color设置线条颜色
    // color: ['#3398DB'],

    // 设置图表标题
    title: {
      text: '美化柱形图',
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
      left: '25%',
      right: '10%',
      bottom: '3%',
      // 是否显示刻度标签
      // containLabel: true
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
      // type: 'value',
      // 折线与坐标轴之间保留间隙
      // boundaryGap: false,
      // data: '',
      // axisTick: {
      //   alignWithLabel: true
      // },
      // 修改刻度标签
      // axisLabel: {
      //   color: 'red',
      //   fontSize: '12'
      // }
      // 不显示x轴相关信息
      show: false
    },
    // 设置y轴的相关配置
    yAxis: [
      {
        type: 'category',
        inverse: true,
        data: '',
        // 修改刻度标签
        axisLabel: {
          color: 'darkred',
          fontSize: '12'
        },
        // 修改Y轴线条颜色
        axisLine: {
          lineStyle: {
            color: 'rgba(255,255,255,0.1)',
            width: 2,
            // 不显示Y轴的线
            show: false
          }
        },
        axisTick: {
          // 不显示X轴的刻度
          show: false
        },
        // 修改Y轴分隔线的线条颜色
        splitLine: {
          lineStyle: {
            color: 'yellow'
          }
        }
      },
      {
        type: 'category',
        data: ['da', '342', 'eq2', '3123', '31'],
        // 修改刻度标签
        axisLabel: {
          color: 'darkred',
          fontSize: '12'
        },
        // 修改Y轴线条颜色
        axisLine: {
          lineStyle: {
            color: 'rgba(255,255,255,0.1)',
            width: 2
          },
          // 不显示Y轴的线
          show: false
        },
        axisTick: {
          // 不显示X轴的刻度
          show: false
        },
        // 修改Y轴分隔线的线条颜色
        splitLine: {
          lineStyle: {
            color: 'yellow'
          }
        }
      }
    ],
    // 系列图表配置，决定显示哪种类型的图表
    series: [
      {
        name: '条',
        type: 'bar',
        z: 0,
        // 柱子之间的距离
        // barCategoryGap: 50,
        barWidth: '10',
        data: [],

        itemStyle: {
          // 修改柱子圆角
          barBorderRadius: 20,
          // 此处的color可以修改柱子的颜色
          color: function (params) {
            //params传入柱子对象
            return myColor[params.dataIndex];
          }
        },
        // 显示柱子内的文字
        label: {
          show: true,
          // 柱子内显示
          position: 'inside',
          // {c}会自动解析data里面的数据值  {a}会自动解析name里面的系列名  {b}会自动解析数据类
          formatter: '{c}%'
        }
      }
      ,
      {
        name: '框',
        type: 'bar',
        z: 1,
        barGap: '-100%',
        // 柱子之间的距离
        // barCategoryGap: 50,
        barWidth: '10',
        data: [],

        itemStyle: {
          color: 'none',
          borderColor: '#00c1de',
          borderWidth: 2,
          barBorderRadius: 15
        }
      }
    ]
  }

  export default {
    name: 'BarChartUpdate',
    data() {
      return {
        // seriesData: seriesData
      }
    },
    methods: {
      getData() {
        option.yAxis[0].data = xAxisData;
        option.legend.data = legendData;
        // 添加series的标签name
        for (var i = 0; i < option.legend.data.length; i++) {
          option.series[i].name = option.legend.data[i];

        }
        // 添加series的data数据
        for (var i = 0; i < option.legend.data.length; i++) {
          option.series[i].data = seriesData[i];

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