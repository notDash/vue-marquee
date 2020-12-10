import vueMarquee from "./vue-marquee.vue"
const marquee = {
    install (Vue, options) {
        Vue.component(vueMarquee.name, vueMarquee)
    }
}
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(vueMarquee);
}
export default marquee
