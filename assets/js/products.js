import { compile, createApp } from 'vue';
import App from './pages/products';

createApp({
    data: App.data,
    render: App.render,
}).mount('#app');
