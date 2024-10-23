import DefaultTheme from 'vitepress/theme'
import { Splide, SplideSlide } from '@splidejs/vue-splide'
import './custom.css'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('Splide', Splide)
    app.component('SplideSlide', SplideSlide)
  }
}