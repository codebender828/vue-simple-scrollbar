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

  describe('autoscrolling API tests', () => {
    it('should initialize mutation observer when autoscroll is set to `true`', () => {
      scrollbar = shallowMount(VueSimpleScrollBar, {
        propsData: {
          autoScroll: true
        }
      })
      setTimeout(() => {
        expect(typeof scrollbar.vm.content.scrollTo).toBe('function')
        expect(scrollbar.vm.initializeMutationObserver).toHaveBeenCalled()
      }, 0)
    })

    it('should should scroll to bottom when autoScrollDirection is set to `bottom`', () => {
      const scrollToBottom = jest.fn()
      scrollbar = shallowMount(VueSimpleScrollBar, {
        propsData: {
          autoScroll: true,
          autoScrollDirection: 'bottom'
        },
        methods: {
          scrollToBottom
        }
      })
      scrollbar.find('.ss-content').innerHTML = 'Mooooooooore Blessed Content'
      setTimeout(() => {
        expect(typeof scrollbar.vm.content.scrollTo).toBe('function')
        expect(scrollbar.vm.scrollToBottom).toHaveBeenCalled()
      }, 0)
    })

    it('should should scroll to top when autoScrollDirection is set to `top`', () => {
      const scrollToTop = jest.fn()
      scrollbar = shallowMount(VueSimpleScrollBar, {
        propsData: {
          autoScroll: true,
          autoScrollDirection: 'top'
        },
        methods: {
          scrollToTop
        }
      })
      scrollbar.find('.ss-content').innerHTML = 'Mooooooooore Blessed Content'
      setTimeout(() => {
        expect(typeof scrollbar.vm.content.scrollTo).toBe('function')
        expect(scrollbar.vm.scrollToTop).toHaveBeenCalled()
      }, 0)
    })
  })
})
