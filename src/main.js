import { createApp } from 'vue'
import App from './App.vue'
import ToDo from './components/ToDo.vue'
import NewItem from './components/NewItem.vue'

const app = createApp(App);

app.component('to-do', ToDo);
app.component('new-item', NewItem);

app.mount('#app')
