var Vue = require('vue');

Vue.use(require('vue-resource'));

new Vue({
    el: '#app',

    data: {
        currentView: 'checkout-view'
    },

    components: {
        'checkout-view': require('./views/checkout')
    }
})