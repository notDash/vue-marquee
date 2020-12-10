<template>
    <div class="my-marquee" :style="innerStyle">
        <img v-if="!custom && icon" src="../assets/sound.png" alt="">
        <div class="my-marquee-container" ref="marqueeContainer">
        </div>
    </div>
</template>

<script>
export default {
    name: 'VueMarquee',
    props: {
        list: {
            type: Array,
            default: () => []
        },
        color: {
            type: String,
            default: '#fff'
        },
        fontSize: {
            type: String,
            default: '28px'
        },
        backgroundColor: {
            type: String,
            default: 'rgba(0, 0, 0, 0.5)'
        },
        icon: { // 是否显示 icon
            type: Boolean,
            default: true
        },
        custom: { // 自定义之后内置的样式不生效，包括颜色、背景颜色、字体大小
            type: Boolean
        }
    },
    data () {
        return {
            startTimestamp: 0,
            currIndex: 0
        }
    },
    computed: {
        innerStyle () {
            let innerStyle = {
                color: this.color,
                backgroundColor: this.backgroundColor,
                fontSize: this.fontSize
            }
            return this.custom ? {} : innerStyle
        }
    },
    mounted () {
        this.initScroll()
    },
    methods: {
        initScroll () {
            this.startTimestamp = 0
            this.addScrollItem()
        },
        addScrollItem () {
            const container = this.$refs.marqueeContainer
            const listLen = this.list ? this.list.length : 0
            if (!container) return
            if (this.currIndex >= listLen) {
            this.currIndex = 0
            }
            const content = this.list && this.list[this.currIndex]
            let initIndex = 0
            while (container.childNodes.length < 2 && initIndex < 2) {
            const div = document.createElement('div')
            div.setAttribute('class', 'marquee-item')
            div.innerHTML = this.list && this.list[initIndex]
            container.appendChild(div)
            initIndex++
            }
            if (container.childNodes.length === 2) {
            container.childNodes[0].innerHTML = content
            container.appendChild(container.childNodes[0])
            container.scrollTop = 0
            }
            requestAnimationFrame(this.handleScroll)
        },
        handleScroll (timestamp) {
            if (this.startTimestamp === 0) {
            this.startTimestamp = timestamp
            }
            const elapsed = timestamp - this.startTimestamp
            // 执行动画
            const container = this.$refs.marqueeContainer
            container && (container.scrollTop += 1)
            if (elapsed < 2000) { // 在3秒后停止动画
            requestAnimationFrame(this.handleScroll)
            } else {
            setTimeout(() => {
                this.currIndex += 1
                this.initScroll()
            }, 1000)
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.my-marquee {
    padding: 0 20px;
    border-radius: 20px;
    display: inline-flex;
    align-items: center;
    width: 300px;
    > img {
        width: 30px;
        height: 24px;
        margin-right: 10px;
    }
    &-container {
        height: 60px;
        line-height: 60px;   
        display: inline-block;
        overflow: hidden;
    }
}
</style>