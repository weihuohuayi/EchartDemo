<template>
  <div class="world">
    <div class="earth"></div>
    <div class="net"></div>


  </div>
</template>

<script>


  export default {
    name: 'WorldDotNet',

  }
</script>

<style>
  .world {
    background: pink;
    width: 100%;
    height: 100%;
    position: relative;


  }

  .earth {
    width: 1024px;
    height: 1024px;
    /* position: absolute; */

    /* 保证水平居中垂直居中 */
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    text-align: center;
    /* border: green solid 1px; */
    /* 实现实时缩放 */
    background-size: 100%;
    background: url('../../../assets/dashboard/background/手绘卡通地球png元素.png');
    transform: scale(0.8);
    opacity: 0.3;
  }

  .net {
    width: 4000px;
    height: 4000px;
    background: red;
    position: absolute;
    /* text-align: center; */
    /* 保证水平居中垂直居中 */
    top: -116%;
    left: -147%;

    border: green solid 1px;
    /* 实现实时缩放 */
    background-size: 100%;
    background: url('../../../assets/dashboard/background/蓝色渐变科技感网络连接地球_元素编号11976882.png');
    transform: scale(0.21);
    animation: rotate1 15s linear infinite;

  }

  @keyframes rotate1{
    from{
      /* transform:translate(-50% -50%); */
      transform:scale(0.21) rotate(0deg)
    }
    to{
      /* transform:translate(-50% -50%); */
      transform:scale(0.21) rotate(360deg)
    }
  }
</style>