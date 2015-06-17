<?php

use App\Coupon;

get('checkout', function() {
    return view('store.checkout');
});

// API

get('api/coupons/{code}', function($code) {
    return Coupon::whereCode($code)->firstOrFail();
});