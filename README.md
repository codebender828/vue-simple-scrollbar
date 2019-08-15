![vue-simple-scrollbar](./coverage/badge-branches.svg) ![vue-simple-scrollbar](./coverage/badge-branches.svg) ![vue-simple-scrollbar](./coverage/badge-branches.svg) ![vue-simple-scrollbar](./coverage/badge-branches.svg)[![Netlify Status](https://api.netlify.com/api/v1/badges/cf493ebe-9a4a-45df-94ed-162de0ee999b/deploy-status)](https://app.netlify.com/sites/vigorous-hypatia-ceea9b/deploys)

# 🦉 vue-simple-scrollbar
A simple friendly lightweight scrollbar to make take your scrollbar game to the next level. This awesome package was ported from the awesome [simple-scrollbar](https://github.com/buzinas/simple-scrollbar)

## How it works?
Vue simple scrollbar creates an elegant, customizable lightweight javascript scrollbar for content that overflows the `vue-simple-scrollbar`'s parent element. Out of the box, `vue-simple-scrollbar` gives you:
- Super fast and lightweight (less than 3KB after gzip and minify)
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

### 🥦 TODO:
- [ ] Server side rendering support with Vue SSR and Nuxt.js
- [ ] Custom styling via props.
- [ ] Smart padding of wrapper component.
- [ ] Make site more elegant
- [ ] Design Logo.
- [ ] Do more epic things.


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
Do you like my work? Buy me a coffee! 

<style>.bmc-button img{width: 27px !important;margin-bottom: 1px !important;box-shadow: none !important;border: none !important;vertical-align: middle !important;}.bmc-button{line-height: 36px !important;height:37px !important;text-decoration: none !important;display:inline-flex !important;color:#ffffff !important;background:linear-gradient(330deg, #0092ff, #0062ff); !important;border-radius: 3px !important;border: 1px solid transparent !important;padding: 1px 9px !important;font-size: 22px !important;letter-spacing:0.6px !important;box-shadow: 0px 1px 2px rgba(190, 190, 190, 0.5) !important;-webkit-box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5) !important;margin: 0 auto !important;font-family: 'Dosis', sans-serif !important;-webkit-box-sizing: border-box !important;box-sizing: border-box !important;-o-transition: 0.3s all linear !important;-webkit-transition: 0.3s all linear !important;-moz-transition: 0.3s all linear !important;-ms-transition: 0.3s all linear !important;transition: 0.3s all linear !important;}.bmc-button:hover, .bmc-button:active, .bmc-button:focus {-webkit-box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5) !important;text-decoration: none !important;box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5) !important;opacity: 0.85 !important;color:#ffffff !important;}</style><link href="https://fonts.googleapis.com/css?family=Dosis&display=swap" rel="stylesheet"><a class="bmc-button" target="_blank" href="https://www.buymeacoffee.com/dIlWof6x5"><img src="https://bmc-cdn.nyc3.digitaloceanspaces.com/BMC-button-images/BMC-btn-logo.svg" alt="Buy me a coffee ❤️"><span style="margin-left:5px">Buy me a coffee ❤️</span></a>
