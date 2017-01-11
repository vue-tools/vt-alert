<style src="./style.css"></style>

<script>
    import Vue from 'vue'
    import plugin from './plugin'

    let Component = {
        props: {
            visible: {
                type: Boolean,
                required: true
            }
        },
        data() {
            return {
                access: false
            }
        },
        render(h) {
            return (
                <transition name="ui-alert-fade">
                    <div class="ui-alert" v-show={this.visible}>
                        <transition name="ui-alert-zoomOut">
                            <div class="ui-alert__container" v-show={this.visible}>
                                <div class="ui-alert__title">{this.$slots.title}</div>
                                <div class="ui-alert__info">{this.$slots.text}</div>
                                <div class={{"ui-alert__button": true, "ui-alert__button--access": this.access}} onClick={this.emit} onTouchstart={this.handle.bind(this, 0)} onTouchend={this.handle.bind(this, 200)}>
                                    {this.$slots.button || '确定'}
                                </div>
                            </div>
                        </transition>
                    </div>
                </transition>
            )
        },
        methods: {
            emit() {
                this.$emit('hide')
            },
            handle(time) {
                setTimeout(() => {
                    this.access = !this.access
                }, time)
            }
        }
    }

    Vue.use(plugin, Component)

    export default Component
</script>