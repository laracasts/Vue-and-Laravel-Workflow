module.exports = {
    template: require('./checkout.template.html'),

    data: function() {
        return {
            cost: 50,
            discount: 0
        };
    },

    components: {
        coupon: require('../components/Coupon')
    },

    filters: {
        coupon: function(cost) {
            return cost - (this.discount / 100 * cost);
        }
    },

    methods: {
        applyDiscount: function(discount) {
            this.discount = discount;
        }
    }
};