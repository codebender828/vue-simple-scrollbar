import { shallowMount } from '@vue/test-utils'
import VueSimpleScrollBar from '@/components/vue-simple-scrollbar.vue'

describe('vue-simple-scrollbar.vue', () => {
  let scrollbar
  describe('scrollbar component instance tests', () => {
    it('should be a vue instance', () => {
      scrollbar = shallowMount(VueSimpleScrollBar)
      expect(scrollbar.isVueInstance()).toBeTruthy()
    })
  })

  describe('scrollbar color API tests', () => {
    it('should set default scrollbar color to rgba(0, 0, 0, 0.1)', () => {
      scrollbar = shallowMount(VueSimpleScrollBar)
      expect(scrollbar.vm.scrollbarColor).toEqual('rgba(0, 0, 0, 0.1)')
    })

    it('should set scrollbar color when props value is set from parent', () => {
      scrollbar = shallowMount(VueSimpleScrollBar, {
        propsData: {
          scrollbarColor: '#ff0055'
        }
      })
      expect(scrollbar.vm.scrollbarColor).toEqual('#ff0055')
    })
  })
})
