import { createApp } from 'vue';
import { Quasar } from 'quasar';
import quasarIconSet from 'quasar/icon-set/material-icons';
import 'quasar/src/css/index.sass';
import '@quasar/extras/material-icons/material-icons.css';
import './css/app.scss';
import App from './App.vue';

import router from './router';

const app = createApp(App);

app.use(Quasar, {
  plugins: {},
  iconSet: quasarIconSet,
  config: {}
});

app.use(router);

app.mount('#app');
