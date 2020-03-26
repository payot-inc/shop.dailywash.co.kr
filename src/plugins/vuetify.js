import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import VueNumeral from 'vue-numeral-filter';
import VueMoment from 'vue-moment';
import moment from 'moment';
import 'moment/locale/ko';
import '@/assets/css/global-font.scss';
import '@/assets/css/style.scss';

Vue.use(Vuetify);
Vue.use(VueNumeral);
Vue.use(VueMoment, { moment });

export default new Vuetify({});
