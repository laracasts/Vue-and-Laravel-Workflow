module.exports = {
    template: require('./coupon.template.html'),

    props: ['when-applied'],

    data: function() {
        return {
            coupon: {
                code: '',
                description: '',
                discount: 0
            },

            valid: false
        };
    },

    methods: {
        validate: function() {
            this.$http.get('/api/coupons/' + this.coupon.code)
                .success(function(coupon) {
                    this.coupon = coupon;
                    this.valid = true;

                    this.whenApplied(coupon.discount);
                })
                .error(function() {
                    this.coupon.code = '';
                    this.coupon.description = 'Sorry, that coupon does not exist.';
                });
        }
    }
};