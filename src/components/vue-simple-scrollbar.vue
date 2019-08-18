<template>
  <div ref="el" :style="{ '--scrollbar-color': scrollbarColor }" class="v-ss">
    <slot name="default"></slot>
  </div>
</template>

<script>
import SimpleScrollbar from 'simple-scrollbar'

export default {
  name: 'VueSimpleScrollbar',
  data () {
    return {
      simpleScroll: undefined
    }
  },
  props: {
    scrollbarColor: {
      type: String,
      default: 'rgba(0, 0, 0, 0.1)'
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.simpleScroll = SimpleScrollbar
      const el = this.$refs.el
      this.simpleScroll.initEl(el)
    })
  }
}
</script>

<style lang="scss">

:root {
  --scrollbar-color: unset;
}

.v-ss {
  height: inherit;
  width: inherit;
}

.ss-wrapper {
  --scrollbar-color: inherit;
  overflow: hidden;
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 1;
  float: left;
}

.ss-content {
  height: 100%;
  width: calc(100% + 18px);
  padding: 0 12px 0 0;
  position: relative;
  overflow: auto;
  box-sizing: border-box;
}

.ss-content.rtl {
  width: calc(100% + 18px);
  right: auto;
}

.ss-scroll {
  --scrollbar-color: inherit;
  position: relative;
  background: var(--scrollbar-color);
  width: 8px;
  border-radius: 4px;
  top: 0;
  z-index: 2;
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.25s linear;
}

.ss-hidden {
  display: none;
}

.ss-container:hover .ss-scroll,
.ss-container:active .ss-scroll {
  opacity: 1;
}

.ss-grabbed {
  -o-user-select: none;
  -ms-user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  user-select: none;
}

</style>
