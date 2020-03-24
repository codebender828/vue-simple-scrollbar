[![Codecov Coverage](https://img.shields.io/codecov/c/github/codebender828/vue-simple-scrollbar/master.svg?style=flat-square)](https://codecov.io/gh/codebender828/vue-simple-scrollbar) [![CircleCI](https://circleci.com/gh/codebender828/vue-simple-scrollbar.svg?style=svg)](https://circleci.com/gh/codebender828/vue-simple-scrollbar) [![Netlify Status](https://api.netlify.com/api/v1/badges/cf493ebe-9a4a-45df-94ed-162de0ee999b/deploy-status)](https://app.netlify.com/sites/vigorous-hypatia-ceea9b/deploys)

# 🦉 vue-simple-scrollbar
A simple friendly lightweight scrollbar to make take your scrollbar game to the next level. This awesome package was ported from the awesome [simple-scrollbar](https://github.com/buzinas/simple-scrollbar)

## How it works?
Vue simple scrollbar creates an elegant, customizable lightweight javascript scrollbar for content that overflows the `vue-simple-scrollbar`'s parent element. Out of the box, `vue-simple-scrollbar` gives you:
- Super fast and lightweight (2.1KB after gzip and minify)
- It uses the native scroll events(mouse wheel, space, page down, page up, arrows)
- No dependencies, completely vanilla Javascript!

## ⚡️ Demo
Very ugly demo here: [Demo](https://vue-simple-scrollbar.netlify.com/)
Don't worry! Will make it more elegant later!

## 📦 Installation

With Yarn:
```
yarn add vue-simple-scrollbar
```

Or if you're an NPM hipster:
```
npm install vue-simple-scrollbar --save
```

## 🖌 Usage
### 📌 Local Component Registation
You can import the `vue-simple-scrollbar` in your single file component as shown below. Remember to import the `vue-simple-scrollbar` in your style tag as well.

In your template file
```html
<template>
  <div class="box">
    <vue-simple-scrollbar>
      {{ longString }}
    </vue-simple-scrollbar>
  </div>
</template>

<script lang="js">
import VueSimpleScrollbar from 'vue-simple-scrollbar'

export default {
  name: 'MyComponent',
  components: {
    VueSimpleScrollbar
  },
  data() {
    return {
      longString: 'Lorem Ipsum ...'
    }
  }
}
</script>

<style scoped>
@import '~vue-simple-scrollbar/dist/vue-simple-scrollbar.css';

.box {
  width: 200px;
  height: 200px;
}
</style>

```
### 🌍 Global Component Registation
In your `main.js`:
```js
import Vue from 'vue'
import App from './App.vue'
import VueSimpleScript from 'vue-simple-scrollbar'
import 'vue-simple-scrollbar/dist/vue-simple-scrollbar.css'

Vue.component('VueSimpleScrollBar', VueSimpleScrollbar)

new Vue({
  render: h => h(App)
}).$mount('#app')
```
Then use the `vue-simple-scrollbar` component directly in your components.

### 📬 With CDN
In your good old trusty HTML:
```html
<meta charset="utf-8">
<title>My Page</title>
<script src="https://unpkg.com/vue"></script>
<script src="https://unpkg.com/vue-simple-scrollbar@latest/dist/vue-simple-scrollbar.umd.min.js"></script>
<link rel="stylesheet" href="https://unpkg.com/vue-simple-scrollbar@latest/dist/vue-simple-scrollbar.css">


<div id="app">
  <demo></demo>
</div>

<script>
new Vue({
  components: {
    VueSimpleScrollbar
  }
}).$mount('#app')
</script>
```

## Props:
|Name|Description|Type|Required|Default|Values|
|---|---|---|---|---|---|
|`scrollbarColor`|Background color scrollbar|`String` |`false`|`rgba(0, 0, 0, 0.1);`||
|`autoScroll`|Watches for changes in DOM content via the Mutation Observer API and automatically scrolls to `autoscrollDirection`|`String` |`false`|`false`|
|`autoScrollDirection`|Direction of auto scroll behavior|`String` |`false`|`bottom`|`bottom`, `top`|
|`scrollBehavior`|Behaviour of scroll animation|`String` |`false`|`rgba(0, 0, 0, 0.1);`|`smooth`|

### Programmatically Scrolling `vue-simple-scrollbar`
`vue-simple-scrollbar` can also be programmatically scrolled for content that is dynamic in nature. This can be done by directly calling the scroll methods on the `vue-simple-scrollbar` component.

```html
<template>
  <div>
    <vue-simple-scrollbar ref="scrollbarWrapper">
      ... content ...
    </vue-simple-scrollbar>
  </div>
</template>

<script lang="js">
import VueSimpleScrollbar from 'vue-simple-scrollbar'

export default {
  name: 'ParentComponent',
  components: {
    VueSimpleScrollbar
  },
  mounted() {
    // Programmatically scroll content to bottom
    this.$refs.scrollbarWrapper.scrollToBottom()

    // Programmatically scroll content to top
    this.$refs.scrollbarWrapper.scrollToTop()
  }
}
</script>
```

### 🥦 TODO:
- [x]  Dynamic styles/colors
  - [x]  Github issue template
  - [x]  Pull request template
- [x]  Custom styling via props.
- [x]  Auto Scroll control and behaviour
- [ ]  Smart padding of inner wrapper markup.
  - [ ]  Dynamic smart padding via props
- [ ]  Documentation Site
- [ ]  Server side rendering support with Vue SSR and Nuxt.js
- [ ]  Make demo site more elegant.
  - [ ]  Use Saber for docs
  - [ ]  Make CodeSandbox demos
  - [ ]  Write articles
- [ ]  Design Logo

### Contributing:
Please read the [Contribution Guide](./.github/CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

### License: MIT
Please read the [license](./LICENSE) documentation for more information

### Contributors
Waiting for you ❤️. Feel free to take a stab at one of the upcoming tasks or open issues.

### 🍇 Author 
Made with love by Jonathan Bakebwa.
👣 Github: [@codebender828](https://github.com/codebender828)
🦅 Twitter: [@codebender828](https://twitter.com/codebender828)

### ☕️ Support
Do you like my work? [Buy me a coffee!](https://www.buymeacoffee.com/dIlWof6x5)
