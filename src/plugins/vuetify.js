import "@mdi/font/css/materialdesignicons.min.css"
import '@fortawesome/fontawesome-free/css/all.css'
import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
	theme: {
		themes: {
			light: {
				primary: '#3f51b5',
				secondary: '#b0bec5',
				accent: '#33cc99',
				error: '#b71c1c',
			},
		},
	},
	icons: {
		iconfont: 'mdi' || 'fa' || 'fa4',
	},
});
