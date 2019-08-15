<template>
  <main class="application">
    <keep-alive>
      <transition :name="transition">
        <router-view />
      </transition>
    </keep-alive>
  </main>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      transition: 'slidde-left'
    }
  },
  watch: {
    '$route' (to, from) {
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      if (from.path === '/' && to.path === '/showcase') {
        this.transition = 'slide-left'
      } else if (from.path === '/showcase' && to.path === '/') {
        this.transition = 'slide-right'
      } else {
        this.transition = toDepth < fromDepth ? 'slide-right' : 'slide-left'
      }
    }
  }
}
</script>

<style lang="scss">
@import '@/scss/nprogress.scss';

html,
body {
  height: 100vh;
  width: 100vw;
  margin: 0;
  font-family: Avenir;
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

.slide-right-move,
.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}

.slide-right-enter {
  opacity: 0;
  transform: translate(-30px, 0);
}

.slide-right-leave-active {
  position: absolute;
  opacity: 0;
  transform: translate(30px, 0);
}

.slide-left-move,
.slide-left-enter-active,
.slide-left-leave-active {
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}

.slide-left-enter {
  opacity: 0;
  transform: translate(30px, 0);
}

.slide-left-leave-active {
  position: absolute;
  opacity: 0;
  transform: translate(-30px, 0);
}
</style>
