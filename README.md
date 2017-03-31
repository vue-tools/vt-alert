# vt-alert

基于 vue 2 封装的 alert 组件，提供了基本的样式和事件，并提供了相应的插件，同时支持桌面端和移动端。

## Install

该组件依赖 [babel-plugin-diff-platform](https://github.com/Jerret321/babel-plugin-diff-platform) 插件，使用前需在工程中配置该插件。

```javascript
npm i vt-alert -S

import Alert from 'vt-alert'

// global install
Vue.component('Alert', Alert)

// scope install
export default {
    components: {
        Alert
    }
}
```

## Usage

```example
<template>
    <Buttons @click="showComponent">组件</Buttons>
    <Buttons @click="showPlugin">插件</Buttons>
    
    <Alert :visible="visible" @hide="hideComponent">
        <p slot="title">这是 title</p>
        <p slot="text">这是 text</p>
    </Alert>
</template>

<script>
    import Alert from 'src/pc'
    import Buttons from 'vt-button'

    export default {
        data() {
            return {
                visible: false
            }
        },
        methods: {
            showComponent() {
                this.visible = true
            },
            hideComponent() {
                this.visible = false
            },
            showPlugin() {
                this.$alert({
                    title: '这是 title',
                    text: '这是 text',
                    button: 'button'
                })
            }
        },
        components: {
            Alert,
            Buttons
        }
    }
</script>
```