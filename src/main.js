import Vue from 'vue'
import App from './App.vue'

import AppStartScreen from './components/StartScreen.vue';
import AppContacts from './components/Contacts.vue';
import AppSkills from './components/Skills.vue';
import AppProjects from './components/Projects.vue';
import AppHobbies from './components/Hobbies.vue';
import AppResultScreen from './components/ResultScreen.vue';

Vue.component('AppStartScreen', AppStartScreen);
Vue.component('AppContacts', AppContacts);
Vue.component('AppSkills', AppSkills);
Vue.component('AppProjects', AppProjects);
Vue.component('AppHobbies', AppHobbies);
Vue.component('AppResultScreen', AppResultScreen);
new Vue({
  el: '#app',
  render: h => h(App)
})
