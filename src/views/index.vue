<template>
  <main class="application">
    <router-link class="link" to="/showcase">View showcase</router-link>
    <div class="clip">
    <vue-simple-scrollbar class="test">
      <p>{{ longText }}</p>
    </vue-simple-scrollbar>
  </div>
  </main>
</template>

<script lang="js">
import VueSimpleScrollbar from '@/components/vue-simple-scrollbar.vue'

export default {
  name: 'Home',
  components: {
    VueSimpleScrollbar
  },
  data () {
    return {
      longText: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur, iure, tempore atque ratione eveniet, aperiam repellat sequi accusamus facilis repudiandae obcaecati. Blanditiis reprehenderit ducimus modi voluptate ea assumenda ut neque, ratione praesentium aut voluptates quis pariatur? Eum neque fuga architecto quasi maxime voluptatum sit vel? Numquam, ullam. Perspiciatis, ipsa non. Illum alias quisquam, aperiam tempora esse at vel? Aperiam eaque beatae suscipit debitis, ducimus unde illo modi minus. Explicabo, sit? Non incidunt ullam reprehenderit eligendi ut corporis omnis vero corrupti odit. Quae quaerat ipsa ut corrupti hic, placeat sapiente temporibus sunt, quibusdam ea at sequi! Quasi, hic soluta. Provident nihil similique, mollitia voluptates sint aperiam asperiores eius! Sit corporis, molestias enim obcaecati quidem velit, quibusdam dolorum tempore, magni ipsam cum accusantium necessitatibus id quas? Perspiciatis suscipit fuga eligendi possimus deserunt. Numquam ratione ex atque voluptas! Vero sequi tenetur '
    }
  }
}
</script>

<style lang="scss" scoped>
.application {
  background: #efefef;
  display: flex;
  flex-direction: column;
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

.link {
  margin-bottom: 50px;
  padding: 8px 12px;
  text-decoration: none;
  color:#fff;
  background: #0087ff;
  transition: all 0.1s ease-in;
  border-radius: 5px;
  overflow: hidden;

  &:hover {
    background: #363636;
  }
}
</style>
