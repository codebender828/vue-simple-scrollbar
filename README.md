![vue-simple-scrollbar](./coverage/badge-branches.svg) ![vue-simple-scrollbar](./coverage/badge-branches.svg) ![vue-simple-scrollbar](./coverage/badge-branches.svg) ![vue-simple-scrollbar](./coverage/badge-branches.svg)

# 🦉 vue-simple-scrollbar
A simple friendly lightweight scrollbar to make take your scrollbar game to the next level. This awesome package was ported from the awesome [simple-scrollbar](https://github.com/buzinas/simple-scrollbar)

## How it works?
Vue simple scrollbar creates an elegant, customizable lightweight javascript scrollbar for content that overflows the `vue-simple-scrollbar`'s parent element. Out of the box, `vue-simple-scrollbar` gives you:
- Super fast and lightweight (less than 3KB after gzip and minify)
- It uses the native scroll events(mouse wheel, space, page down, page up, arrows)
- No dependencies, completely vanilla Javascript!


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
import VueSimpleScript from 'vue-simple-scrollbar'

export default {
  name: 'MyComponent',
  components: {
    VueSimpleScript
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
<script src="https://unpkg.com/vue-simple-scrollbar@0.1.1/dist/vue-simple-scrollbar.umd.min.js"></script>
<link rel="stylesheet" href="https://unpkg.com/vue-simple-scrollbar@0.1.1/dist/vue-simple-scrollbar.css">


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

### 🥦 TODO:
- [ ] Server side rendering support with Vue SSR and Nuxt.js
- [ ] Custom styling via props.
- [ ] Smart padding of wrapper component.
- [ ] Design Logo.
- [ ] Do more epic things.


### Contributing:
Please read the [Contribution Guide](./.github/CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

### License: MIT
Please read [License](./LICENSE) documentation for more information

### Contributors
Waiting for you ❤️. Feel free to take a stab at one of the upcimg tasks or open issues.

### 🍇 Author 
Made with love by Jonathan Bakebwa.
👣 Github: [@codebender828](https://github.com/codebender828)
🦅 Twitter: [@codebender828](https://twitter.com/codebender828)

