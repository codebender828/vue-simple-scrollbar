import { shallowMount } from '@vue/test-utils'
import VueSimpleScrollBar from '@/components/vue-simple-scrollbar.vue'

describe('vue-simple-scrollbar.vue', () => {
  it('is is a vue instance', () => {
    const wrapper = shallowMount(VueSimpleScrollBar)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
