<template>
  <main class="application">
    <keep-alive>
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </keep-alive>
  </main>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
@import '@/scss/nprogress.scss';

html,
body {
  height: 100vh;
  width: 100vw;
  margin: 0;
}

.application {
  background: #efefef;
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;

  .clip {
    width: 300px;
    height: 400px;
    background: #ffffff;
  }
}
</style>
