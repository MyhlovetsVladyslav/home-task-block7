import { createApp } from 'vue'
import App from './App.vue'
const LoggerMixin = {
    created() {
        console.log('Компонент створено');
    },
    beforeDestroy() {
        console.log('Компонент знищено');
    }
};

const app = createApp(App)
app.mixin(LoggerMixin)
app.directive('custom-color', {
    mounted(el, binding) {
        el.style.color = binding.value;
    },
})
app.mount('#app')
