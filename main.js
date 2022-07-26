"use strict";
(self["webpackChunktradingview_angular_example"] = self["webpackChunktradingview_angular_example"] || []).push([["main"],{

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _tv_tv_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tv/tv.component */ 6761);


class AppComponent {
    constructor() {
        this.title = 'tradingview-angular-example';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 1, consts: [[3, "symbol"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-tv", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("symbol", "BTC");
    } }, dependencies: [_tv_tv_component__WEBPACK_IMPORTED_MODULE_0__.TvComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _tv_tv_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tv/tv.component */ 6761);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);




class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.BrowserModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent,
        _tv_tv_component__WEBPACK_IMPORTED_MODULE_1__.TvComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.BrowserModule] }); })();


/***/ }),

/***/ 6019:
/*!*****************************************************!*\
  !*** ./src/app/mock/btc-181123_2006-181124_0105.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BTC_PRICE_LIST": () => (/* binding */ BTC_PRICE_LIST)
/* harmony export */ });
const BTC_PRICE_LIST = [{
        'time': 1545595560000,
        'open': 3919.95,
        'close': 3916.05,
        'low': 3916.05,
        'high': 3920.95,
        'amount': 2.6494,
        'count': 50,
        'volume': 10382.654567
    }, {
        'time': 1545595620000,
        'open': 3915.58,
        'close': 3910.86,
        'low': 3909.05,
        'high': 3915.58,
        'amount': 31.3374,
        'count': 196,
        'volume': 122540.368748
    }, {
        'time': 1545595680000,
        'open': 3911.82,
        'close': 3909.85,
        'low': 3909.85,
        'high': 3913.59,
        'amount': 1.2824,
        'count': 36,
        'volume': 5017.295088
    }, {
        'time': 1545595740000,
        'open': 3910.61,
        'close': 3908,
        'low': 3907.51,
        'high': 3910.61,
        'amount': 6.417655824483938,
        'count': 37,
        'volume': 25084.547188
    }, {
        'time': 1545595800000,
        'open': 3908,
        'close': 3904.46,
        'low': 3903.78,
        'high': 3908,
        'amount': 5.734735049846349,
        'count': 96,
        'volume': 22398.001773
    }, {
        'time': 1545595860000,
        'open': 3904.53,
        'close': 3910.95,
        'low': 3903.69,
        'high': 3911.48,
        'amount': 6.79244631682586,
        'count': 59,
        'volume': 26535.201696
    }, {
        'time': 1545595920000,
        'open': 3910.64,
        'close': 3910.76,
        'low': 3907.99,
        'high': 3911.19,
        'amount': 10.6691,
        'count': 75,
        'volume': 41711.810846
    }, {
        'time': 1545595980000,
        'open': 3910.95,
        'close': 3912.95,
        'low': 3910.75,
        'high': 3914.73,
        'amount': 2.6783,
        'count': 35,
        'volume': 10482.124166
    }, {
        'time': 1545596040000,
        'open': 3914.31,
        'close': 3912.37,
        'low': 3911.83,
        'high': 3914.31,
        'amount': 4.4520148393593075,
        'count': 37,
        'volume': 17420.59877762
    }, {
        'time': 1545596100000,
        'open': 3912.92,
        'close': 3916.53,
        'low': 3911.23,
        'high': 3916.53,
        'amount': 1.4375,
        'count': 32,
        'volume': 5624.996441
    }, {
        'time': 1545596160000,
        'open': 3915.4,
        'close': 3922.08,
        'low': 3915.4,
        'high': 3927.44,
        'amount': 11.074641427959069,
        'count': 112,
        'volume': 43435.55565132
    }, {
        'time': 1545596220000,
        'open': 3922.08,
        'close': 3925.31,
        'low': 3915.66,
        'high': 3926.47,
        'amount': 8.1356,
        'count': 136,
        'volume': 31899.973721
    }, {
        'time': 1545596280000,
        'open': 3925.31,
        'close': 3924.41,
        'low': 3919.59,
        'high': 3929.99,
        'amount': 7.2071,
        'count': 96,
        'volume': 28288.055944
    }, {
        'time': 1545596340000,
        'open': 3925.16,
        'close': 3921.84,
        'low': 3920.78,
        'high': 3925.16,
        'amount': 0.9036,
        'count': 20,
        'volume': 3544.389167
    }, {
        'time': 1545596400000,
        'open': 3920.79,
        'close': 3927.45,
        'low': 3920.79,
        'high': 3928.81,
        'amount': 6.9504,
        'count': 44,
        'volume': 27273.102012
    }, {
        'time': 1545596460000,
        'open': 3927.84,
        'close': 3925.43,
        'low': 3925.05,
        'high': 3931.17,
        'amount': 5.5312,
        'count': 71,
        'volume': 21729.200603
    }, {
        'time': 1545596520000,
        'open': 3925.44,
        'close': 3924.05,
        'low': 3921.97,
        'high': 3930.87,
        'amount': 18.766416788529444,
        'count': 111,
        'volume': 73701.664237
    }, {
        'time': 1545596580000,
        'open': 3923.87,
        'close': 3923.44,
        'low': 3922.43,
        'high': 3924.41,
        'amount': 5.683518305300905,
        'count': 35,
        'volume': 22300.73222496
    }, {
        'time': 1545596640000,
        'open': 3922.4,
        'close': 3917.16,
        'low': 3916.56,
        'high': 3922.43,
        'amount': 4.739220279412065,
        'count': 46,
        'volume': 18578.08270412
    }, {
        'time': 1545596700000,
        'open': 3918.23,
        'close': 3917.94,
        'low': 3916.11,
        'high': 3919.44,
        'amount': 3.710854899323265,
        'count': 37,
        'volume': 14539.14573631
    }, {
        'time': 1545596760000,
        'open': 3916.85,
        'close': 3917.84,
        'low': 3916.27,
        'high': 3917.88,
        'amount': 1.9814,
        'count': 26,
        'volume': 7760.490482
    }, {
        'time': 1545596820000,
        'open': 3916.82,
        'close': 3915.24,
        'low': 3915.24,
        'high': 3917.51,
        'amount': 3.203,
        'count': 38,
        'volume': 12543.175451
    }, {
        'time': 1545596880000,
        'open': 3915.21,
        'close': 3917.6,
        'low': 3915.05,
        'high': 3918.09,
        'amount': 1.113,
        'count': 39,
        'volume': 4358.376304
    }, {
        'time': 1545596940000,
        'open': 3918.18,
        'close': 3920.77,
        'low': 3918.18,
        'high': 3927.54,
        'amount': 14.533,
        'count': 102,
        'volume': 57025.050161
    }, {
        'time': 1545597000000,
        'open': 3920.77,
        'close': 3909.89,
        'low': 3909.05,
        'high': 3920.77,
        'amount': 5.518229793251023,
        'count': 81,
        'volume': 21609.08130213139
    }, {
        'time': 1545597060000,
        'open': 3908.45,
        'close': 3917.95,
        'low': 3907.69,
        'high': 3918.12,
        'amount': 11.188309775742098,
        'count': 121,
        'volume': 43782.71338653
    }, {
        'time': 1545597120000,
        'open': 3916.15,
        'close': 3921.01,
        'low': 3913.95,
        'high': 3922.23,
        'amount': 2.2769,
        'count': 42,
        'volume': 8924.323983
    }, {
        'time': 1545597180000,
        'open': 3921.03,
        'close': 3917.27,
        'low': 3917.14,
        'high': 3923.77,
        'amount': 8.305542612647999,
        'count': 74,
        'volume': 32564.190933
    }, {
        'time': 1545597240000,
        'open': 3917.51,
        'close': 3923.64,
        'low': 3916.87,
        'high': 3924.19,
        'amount': 3.7977,
        'count': 53,
        'volume': 14897.274348
    }, {
        'time': 1545597300000,
        'open': 3921.5,
        'close': 3917.66,
        'low': 3917,
        'high': 3921.5,
        'amount': 2.9686,
        'count': 46,
        'volume': 11634.109757
    }, {
        'time': 1545597360000,
        'open': 3918.74,
        'close': 3914.15,
        'low': 3914.15,
        'high': 3919.74,
        'amount': 1.4102,
        'count': 57,
        'volume': 5523.201325
    }, {
        'time': 1545597420000,
        'open': 3914.15,
        'close': 3916.97,
        'low': 3913.18,
        'high': 3922.07,
        'amount': 8.9157,
        'count': 83,
        'volume': 34918.423295
    }, {
        'time': 1545597480000,
        'open': 3916.96,
        'close': 3922.21,
        'low': 3916.6,
        'high': 3925.55,
        'amount': 7.2153,
        'count': 97,
        'volume': 28294.37888
    }, {
        'time': 1545597540000,
        'open': 3922.19,
        'close': 3919.82,
        'low': 3919.68,
        'high': 3924.02,
        'amount': 2.4399,
        'count': 40,
        'volume': 9568.192585
    }, {
        'time': 1545597600000,
        'open': 3918.7,
        'close': 3921.71,
        'low': 3918.7,
        'high': 3922.79,
        'amount': 1.754297691214625,
        'count': 37,
        'volume': 6878.857166
    }, {
        'time': 1545597660000,
        'open': 3921.19,
        'close': 3920.44,
        'low': 3916.48,
        'high': 3921.19,
        'amount': 3.7597,
        'count': 47,
        'volume': 14731.930322
    }, {
        'time': 1545597720000,
        'open': 3921.08,
        'close': 3922.05,
        'low': 3919.91,
        'high': 3924.69,
        'amount': 4.1617,
        'count': 62,
        'volume': 16323.263617
    }, {
        'time': 1545597780000,
        'open': 3921.05,
        'close': 3927.16,
        'low': 3921.05,
        'high': 3927.34,
        'amount': 2.481283858384118,
        'count': 56,
        'volume': 9736.2059905
    }, {
        'time': 1545597840000,
        'open': 3927.56,
        'close': 3937.53,
        'low': 3927.56,
        'high': 3938.44,
        'amount': 10.91627529268147,
        'count': 159,
        'volume': 42943.31075
    }, {
        'time': 1545597900000,
        'open': 3937.54,
        'close': 3933.31,
        'low': 3929.72,
        'high': 3938.09,
        'amount': 15.711093725879334,
        'count': 157,
        'volume': 61785.79985459
    }, {
        'time': 1545597960000,
        'open': 3932.51,
        'close': 3927.9,
        'low': 3925.72,
        'high': 3932.51,
        'amount': 13.0184,
        'count': 65,
        'volume': 51138.2109
    }, {
        'time': 1545598020000,
        'open': 3927.91,
        'close': 3931.09,
        'low': 3927.91,
        'high': 3931.09,
        'amount': 2.1967,
        'count': 42,
        'volume': 8631.892303
    }, {
        'time': 1545598080000,
        'open': 3931.91,
        'close': 3934.52,
        'low': 3929.76,
        'high': 3937.09,
        'amount': 3.3394980005184878,
        'count': 64,
        'volume': 13136.894765
    }, {
        'time': 1545598140000,
        'open': 3933.52,
        'close': 3937.35,
        'low': 3932.78,
        'high': 3937.39,
        'amount': 3.591289423364062,
        'count': 49,
        'volume': 14133.625718
    }, {
        'time': 1545598200000,
        'open': 3936.61,
        'close': 3932.95,
        'low': 3932.5,
        'high': 3936.61,
        'amount': 4.7224000320253765,
        'count': 34,
        'volume': 18575.753901
    }, {
        'time': 1545598260000,
        'open': 3932.51,
        'close': 3930.29,
        'low': 3930.25,
        'high': 3932.56,
        'amount': 1.3119,
        'count': 29,
        'volume': 5157.514888
    }, {
        'time': 1545598320000,
        'open': 3930.15,
        'close': 3931.76,
        'low': 3930.03,
        'high': 3931.76,
        'amount': 2.0674,
        'count': 13,
        'volume': 8125.287038
    }, {
        'time': 1545598380000,
        'open': 3931.54,
        'close': 3933.42,
        'low': 3930.99,
        'high': 3934.13,
        'amount': 1.3813,
        'count': 14,
        'volume': 5431.267363
    }, {
        'time': 1545598440000,
        'open': 3935.74,
        'close': 3937.02,
        'low': 3933.49,
        'high': 3937.3,
        'amount': 2.3958,
        'count': 42,
        'volume': 9428.64404
    }, {
        'time': 1545598500000,
        'open': 3937.49,
        'close': 3931.09,
        'low': 3930.7,
        'high': 3937.86,
        'amount': 4.7534,
        'count': 62,
        'volume': 18705.741879
    }, {
        'time': 1545598560000,
        'open': 3930.7,
        'close': 3934.42,
        'low': 3929.07,
        'high': 3938.01,
        'amount': 6.7871,
        'count': 74,
        'volume': 26700.907256
    }, {
        'time': 1545598620000,
        'open': 3933.47,
        'close': 3938.56,
        'low': 3932.79,
        'high': 3938.64,
        'amount': 1.936054189681424,
        'count': 49,
        'volume': 7621.217088
    }, {
        'time': 1545598680000,
        'open': 3938.56,
        'close': 3938.62,
        'low': 3937.82,
        'high': 3941.09,
        'amount': 2.2721,
        'count': 62,
        'volume': 8948.444527
    }, {
        'time': 1545598740000,
        'open': 3937.61,
        'close': 3939.73,
        'low': 3937.39,
        'high': 3939.73,
        'amount': 1.5454,
        'count': 48,
        'volume': 6086.396394
    }, {
        'time': 1545598800000,
        'open': 3939.19,
        'close': 3938.04,
        'low': 3938.04,
        'high': 3940.15,
        'amount': 1.1774,
        'count': 32,
        'volume': 4638.497767
    }, {
        'time': 1545598860000,
        'open': 3938.04,
        'close': 3937.23,
        'low': 3937.22,
        'high': 3938.46,
        'amount': 1.0392,
        'count': 49,
        'volume': 4092.08
    }, {
        'time': 1545598920000,
        'open': 3937.78,
        'close': 3936.88,
        'low': 3936.88,
        'high': 3938.29,
        'amount': 0.8415,
        'count': 24,
        'volume': 3313.249109
    }, {
        'time': 1545598980000,
        'open': 3937.4,
        'close': 3932.32,
        'low': 3931.05,
        'high': 3937.59,
        'amount': 4.065612565421939,
        'count': 39,
        'volume': 15994.74723526
    }, {
        'time': 1545599040000,
        'open': 3930.69,
        'close': 3932.56,
        'low': 3930.69,
        'high': 3933.95,
        'amount': 1.3386,
        'count': 26,
        'volume': 5263.914208
    }, {
        'time': 1545599100000,
        'open': 3932.25,
        'close': 3930.68,
        'low': 3930.68,
        'high': 3932.94,
        'amount': 6.5182,
        'count': 38,
        'volume': 25629.750181
    }, {
        'time': 1545599160000,
        'open': 3931.34,
        'close': 3933.04,
        'low': 3931.34,
        'high': 3934.46,
        'amount': 7.1751,
        'count': 54,
        'volume': 28217.612016
    }, {
        'time': 1545599220000,
        'open': 3933.47,
        'close': 3936.14,
        'low': 3933.47,
        'high': 3936.14,
        'amount': 1.5349,
        'count': 27,
        'volume': 6038.532258
    }, {
        'time': 1545599280000,
        'open': 3936.55,
        'close': 3938.49,
        'low': 3936.11,
        'high': 3938.49,
        'amount': 4.4013,
        'count': 58,
        'volume': 17328.643269
    }, {
        'time': 1545599340000,
        'open': 3938.89,
        'close': 3937.87,
        'low': 3937.5,
        'high': 3940.93,
        'amount': 4.9441,
        'count': 38,
        'volume': 19473.55667
    }, {
        'time': 1545599400000,
        'open': 3938.47,
        'close': 3941.91,
        'low': 3937.31,
        'high': 3943.33,
        'amount': 3.6492,
        'count': 32,
        'volume': 14377.061675
    }, {
        'time': 1545599460000,
        'open': 3941.92,
        'close': 3951.48,
        'low': 3940.96,
        'high': 3951.48,
        'amount': 19.0896,
        'count': 152,
        'volume': 75321.243486
    }, {
        'time': 1545599520000,
        'open': 3950.16,
        'close': 3945.44,
        'low': 3944.07,
        'high': 3952.97,
        'amount': 10.052,
        'count': 144,
        'volume': 39678.46404
    }, {
        'time': 1545599580000,
        'open': 3945.81,
        'close': 3947,
        'low': 3944.36,
        'high': 3947.95,
        'amount': 2.2663,
        'count': 39,
        'volume': 8944.416663
    }, {
        'time': 1545599640000,
        'open': 3947,
        'close': 3940.95,
        'low': 3940.17,
        'high': 3947.1,
        'amount': 8.1658,
        'count': 69,
        'volume': 32210.599269
    }, {
        'time': 1545599700000,
        'open': 3940.76,
        'close': 3937.78,
        'low': 3937.34,
        'high': 3944.56,
        'amount': 10.508098858128854,
        'count': 101,
        'volume': 41406.605846
    }, {
        'time': 1545599760000,
        'open': 3937.29,
        'close': 3935.69,
        'low': 3934.95,
        'high': 3937.73,
        'amount': 3.2426,
        'count': 80,
        'volume': 12766.614728
    }, {
        'time': 1545599820000,
        'open': 3935.68,
        'close': 3936.98,
        'low': 3934.45,
        'high': 3938.05,
        'amount': 1.7317,
        'count': 39,
        'volume': 6817.557127
    }, {
        'time': 1545599880000,
        'open': 3936.99,
        'close': 3940.85,
        'low': 3936.99,
        'high': 3948.3,
        'amount': 15.7253,
        'count': 150,
        'volume': 62027.095291
    }, {
        'time': 1545599940000,
        'open': 3942.07,
        'close': 3947.31,
        'low': 3941.39,
        'high': 3947.85,
        'amount': 5.9625,
        'count': 54,
        'volume': 23520.403807
    }, {
        'time': 1545600000000,
        'open': 3947.76,
        'close': 3943.58,
        'low': 3942.59,
        'high': 3948.93,
        'amount': 6.5566,
        'count': 60,
        'volume': 25861.074679
    }, {
        'time': 1545600060000,
        'open': 3943.58,
        'close': 3943.99,
        'low': 3941.42,
        'high': 3943.99,
        'amount': 1.8408992182825035,
        'count': 48,
        'volume': 7257.041934
    }, {
        'time': 1545600120000,
        'open': 3943.46,
        'close': 3946.15,
        'low': 3943.46,
        'high': 3946.16,
        'amount': 4.4229,
        'count': 45,
        'volume': 17447.576058
    }, {
        'time': 1545600180000,
        'open': 3946.03,
        'close': 3948.38,
        'low': 3945.16,
        'high': 3949.95,
        'amount': 8.819229845089179,
        'count': 86,
        'volume': 34814.17183561
    }, {
        'time': 1545600240000,
        'open': 3948,
        'close': 3954.43,
        'low': 3947.94,
        'high': 3954.43,
        'amount': 4.93,
        'count': 64,
        'volume': 19475.314857
    }, {
        'time': 1545600300000,
        'open': 3954.36,
        'close': 3945.42,
        'low': 3944.05,
        'high': 3954.97,
        'amount': 17.7092,
        'count': 149,
        'volume': 69986.674812
    }, {
        'time': 1545600360000,
        'open': 3945.36,
        'close': 3946.36,
        'low': 3945.34,
        'high': 3948.05,
        'amount': 1.4839,
        'count': 30,
        'volume': 5856.112596
    }, {
        'time': 1545600420000,
        'open': 3946.36,
        'close': 3947.65,
        'low': 3945.9,
        'high': 3948.26,
        'amount': 4.8448,
        'count': 47,
        'volume': 19119.585917
    }, {
        'time': 1545600480000,
        'open': 3947.65,
        'close': 3946.78,
        'low': 3946.05,
        'high': 3948.4,
        'amount': 1.8645,
        'count': 36,
        'volume': 7359.221465
    }, {
        'time': 1545600540000,
        'open': 3947.59,
        'close': 3941.28,
        'low': 3941.28,
        'high': 3947.59,
        'amount': 3.4008,
        'count': 58,
        'volume': 13418.441823
    }, {
        'time': 1545600600000,
        'open': 3941.28,
        'close': 3937.38,
        'low': 3937.36,
        'high': 3942.32,
        'amount': 12.680310328318946,
        'count': 75,
        'volume': 49958.29184613
    }, {
        'time': 1545600660000,
        'open': 3937.59,
        'close': 3945.09,
        'low': 3937.32,
        'high': 3945.73,
        'amount': 10.57,
        'count': 88,
        'volume': 41678.702534
    }, {
        'time': 1545600720000,
        'open': 3945.94,
        'close': 3942.65,
        'low': 3942.5,
        'high': 3945.94,
        'amount': 1.7193,
        'count': 57,
        'volume': 6780.34045
    }, {
        'time': 1545600780000,
        'open': 3942.46,
        'close': 3933.11,
        'low': 3932.36,
        'high': 3942.46,
        'amount': 8.852162883313042,
        'count': 76,
        'volume': 34848.3311678
    }, {
        'time': 1545600840000,
        'open': 3934.95,
        'close': 3938.06,
        'low': 3933.92,
        'high': 3938.06,
        'amount': 2.2307,
        'count': 70,
        'volume': 8778.806471
    }, {
        'time': 1545600900000,
        'open': 3938.1,
        'close': 3938.24,
        'low': 3935.71,
        'high': 3939.51,
        'amount': 1.9563,
        'count': 35,
        'volume': 7703.065286
    }, {
        'time': 1545600960000,
        'open': 3938.25,
        'close': 3935.59,
        'low': 3935.1,
        'high': 3938.27,
        'amount': 4.3032,
        'count': 48,
        'volume': 16938.56607
    }, {
        'time': 1545601020000,
        'open': 3935.8,
        'close': 3936.94,
        'low': 3935.8,
        'high': 3937.1,
        'amount': 3.8502,
        'count': 43,
        'volume': 15158.169032
    }, {
        'time': 1545601080000,
        'open': 3936.05,
        'close': 3935.25,
        'low': 3935.1,
        'high': 3936.34,
        'amount': 1.296135442475065,
        'count': 50,
        'volume': 5100.709647
    }, {
        'time': 1545601140000,
        'open': 3935.25,
        'close': 3936.14,
        'low': 3935.25,
        'high': 3936.4,
        'amount': 1.5555,
        'count': 32,
        'volume': 6122.245259
    }, {
        'time': 1545601200000,
        'open': 3936.14,
        'close': 3936.1,
        'low': 3935.26,
        'high': 3936.41,
        'amount': 8.7553,
        'count': 25,
        'volume': 34458.005571
    }, {
        'time': 1545601260000,
        'open': 3936.11,
        'close': 3935.88,
        'low': 3935.76,
        'high': 3937.51,
        'amount': 4.762506533118966,
        'count': 44,
        'volume': 18749.830133
    }, {
        'time': 1545601320000,
        'open': 3935.86,
        'close': 3934.9,
        'low': 3934.06,
        'high': 3936.97,
        'amount': 4.5626,
        'count': 30,
        'volume': 17957.066572
    }, {
        'time': 1545601380000,
        'open': 3934.88,
        'close': 3933.05,
        'low': 3932.83,
        'high': 3934.88,
        'amount': 9.4831,
        'count': 32,
        'volume': 37301.723001
    }, {
        'time': 1545601440000,
        'open': 3932.83,
        'close': 3930.23,
        'low': 3929.23,
        'high': 3932.83,
        'amount': 16.998800266475456,
        'count': 51,
        'volume': 66817.381812
    }, {
        'time': 1545601500000,
        'open': 3929.52,
        'close': 3924.94,
        'low': 3920.43,
        'high': 3929.52,
        'amount': 12.3244,
        'count': 100,
        'volume': 48384.259691
    }, {
        'time': 1545601560000,
        'open': 3925,
        'close': 3923.82,
        'low': 3922.64,
        'high': 3926.44,
        'amount': 14.1284,
        'count': 67,
        'volume': 55445.861756
    }, {
        'time': 1545601620000,
        'open': 3923.81,
        'close': 3926.84,
        'low': 3920.42,
        'high': 3926.84,
        'amount': 15.1771,
        'count': 72,
        'volume': 59535.938427
    }, {
        'time': 1545601680000,
        'open': 3926.77,
        'close': 3925.64,
        'low': 3924.15,
        'high': 3927.54,
        'amount': 23.4884,
        'count': 66,
        'volume': 92205.559564
    }, {
        'time': 1545601740000,
        'open': 3924.61,
        'close': 3923.75,
        'low': 3919.94,
        'high': 3925.02,
        'amount': 20.5572,
        'count': 71,
        'volume': 80624.415389
    }, {
        'time': 1545601800000,
        'open': 3924.51,
        'close': 3925.48,
        'low': 3923.57,
        'high': 3925.75,
        'amount': 23.60549538686875,
        'count': 41,
        'volume': 92653.967643
    }, {
        'time': 1545601860000,
        'open': 3925.45,
        'close': 3925.67,
        'low': 3924.66,
        'high': 3926.41,
        'amount': 13.09534497319991,
        'count': 73,
        'volume': 51408.759286
    }, {
        'time': 1545601920000,
        'open': 3925.67,
        'close': 3925.04,
        'low': 3924.8,
        'high': 3926.28,
        'amount': 22.0919,
        'count': 39,
        'volume': 86729.933872
    }, {
        'time': 1545601980000,
        'open': 3925.03,
        'close': 3927.86,
        'low': 3924.95,
        'high': 3927.86,
        'amount': 24.6371,
        'count': 55,
        'volume': 96711.959994
    }, {
        'time': 1545602040000,
        'open': 3927.95,
        'close': 3932.82,
        'low': 3927.56,
        'high': 3933.39,
        'amount': 19.5134,
        'count': 79,
        'volume': 76696.404155
    }, {
        'time': 1545602100000,
        'open': 3931.86,
        'close': 3935.17,
        'low': 3931.68,
        'high': 3937,
        'amount': 38.2892,
        'count': 93,
        'volume': 150601.701063
    }, {
        'time': 1545602160000,
        'open': 3935.15,
        'close': 3937.98,
        'low': 3935.15,
        'high': 3939.15,
        'amount': 16.950698386724056,
        'count': 70,
        'volume': 66753.62026417723
    }, {
        'time': 1545602220000,
        'open': 3937.47,
        'close': 3932.24,
        'low': 3930.8,
        'high': 3937.66,
        'amount': 19.84286009598419,
        'count': 93,
        'volume': 78035.04407179
    }, {
        'time': 1545602280000,
        'open': 3932.23,
        'close': 3937.67,
        'low': 3932.23,
        'high': 3939.49,
        'amount': 26.356156548739673,
        'count': 117,
        'volume': 103724.45060376
    }, {
        'time': 1545602340000,
        'open': 3937.56,
        'close': 3929.56,
        'low': 3929.23,
        'high': 3937.56,
        'amount': 17.457281753322878,
        'count': 94,
        'volume': 68666.95031293
    }, {
        'time': 1545602400000,
        'open': 3929.55,
        'close': 3926.77,
        'low': 3925.05,
        'high': 3931.57,
        'amount': 28.80078441438699,
        'count': 98,
        'volume': 113104.81705889628
    }, {
        'time': 1545602460000,
        'open': 3926.75,
        'close': 3929.93,
        'low': 3926.75,
        'high': 3930.02,
        'amount': 3.869,
        'count': 53,
        'volume': 15201.284333
    }, {
        'time': 1545602520000,
        'open': 3929.46,
        'close': 3926.26,
        'low': 3925,
        'high': 3930.92,
        'amount': 20.42251783242407,
        'count': 101,
        'volume': 80238.811333
    }, {
        'time': 1545602580000,
        'open': 3925.77,
        'close': 3922.93,
        'low': 3922.93,
        'high': 3926.89,
        'amount': 29.499,
        'count': 97,
        'volume': 115796.232113
    }, {
        'time': 1545602640000,
        'open': 3923.04,
        'close': 3925.35,
        'low': 3922.56,
        'high': 3925.57,
        'amount': 15.254329005822356,
        'count': 43,
        'volume': 59854.59656833
    }, {
        'time': 1545602700000,
        'open': 3924.32,
        'close': 3924.93,
        'low': 3923.71,
        'high': 3927.46,
        'amount': 5.7951,
        'count': 49,
        'volume': 22749.682282
    }, {
        'time': 1545602760000,
        'open': 3924.84,
        'close': 3924.64,
        'low': 3921.05,
        'high': 3925.47,
        'amount': 29.1128,
        'count': 94,
        'volume': 114201.00159
    }, {
        'time': 1545602820000,
        'open': 3924.33,
        'close': 3923.27,
        'low': 3923.17,
        'high': 3925.78,
        'amount': 10.142,
        'count': 40,
        'volume': 39802.179869
    }, {
        'time': 1545602880000,
        'open': 3923.23,
        'close': 3924.09,
        'low': 3922.05,
        'high': 3924.19,
        'amount': 26.4123,
        'count': 43,
        'volume': 103620.364922
    }, {
        'time': 1545602940000,
        'open': 3923.95,
        'close': 3925.95,
        'low': 3923.94,
        'high': 3929.41,
        'amount': 19.98282410025188,
        'count': 72,
        'volume': 78449.57498488
    }, {
        'time': 1545603000000,
        'open': 3925.76,
        'close': 3929.68,
        'low': 3925.76,
        'high': 3931.73,
        'amount': 19.2385,
        'count': 93,
        'volume': 75604.026341
    }, {
        'time': 1545603060000,
        'open': 3930.07,
        'close': 3932.62,
        'low': 3930.07,
        'high': 3933.99,
        'amount': 10.3461,
        'count': 76,
        'volume': 40682.521952
    }, {
        'time': 1545603120000,
        'open': 3932.27,
        'close': 3927.98,
        'low': 3927.39,
        'high': 3932.63,
        'amount': 34.0194,
        'count': 121,
        'volume': 133650.102086
    }, {
        'time': 1545603180000,
        'open': 3927.99,
        'close': 3921.85,
        'low': 3921.85,
        'high': 3927.99,
        'amount': 14.3462,
        'count': 83,
        'volume': 56297.621491
    }, {
        'time': 1545603240000,
        'open': 3922.44,
        'close': 3928.03,
        'low': 3921.24,
        'high': 3928.03,
        'amount': 30.664809203431485,
        'count': 83,
        'volume': 120327.02192646
    }, {
        'time': 1545603300000,
        'open': 3926.15,
        'close': 3927.09,
        'low': 3926.15,
        'high': 3928.04,
        'amount': 3.947,
        'count': 32,
        'volume': 15502.597704
    }, {
        'time': 1545603360000,
        'open': 3927.49,
        'close': 3927.36,
        'low': 3926.86,
        'high': 3927.92,
        'amount': 24.481464248609953,
        'count': 54,
        'volume': 96146.1532104
    }, {
        'time': 1545603420000,
        'open': 3927.52,
        'close': 3923.56,
        'low': 3922.06,
        'high': 3927.57,
        'amount': 25.33250007841999,
        'count': 70,
        'volume': 99433.434601
    }, {
        'time': 1545603480000,
        'open': 3923.52,
        'close': 3922.11,
        'low': 3922.05,
        'high': 3924.02,
        'amount': 2.7788,
        'count': 48,
        'volume': 10900.069297
    }, {
        'time': 1545603540000,
        'open': 3923.16,
        'close': 3921.47,
        'low': 3921.32,
        'high': 3923.16,
        'amount': 9.0486,
        'count': 26,
        'volume': 35490.745623
    }, {
        'time': 1545603600000,
        'open': 3921.67,
        'close': 3916.08,
        'low': 3916.06,
        'high': 3921.67,
        'amount': 15.8492,
        'count': 124,
        'volume': 62093.226584
    }, {
        'time': 1545603660000,
        'open': 3916.73,
        'close': 3918.8,
        'low': 3916.73,
        'high': 3918.8,
        'amount': 17.2309,
        'count': 51,
        'volume': 67507.407651
    }, {
        'time': 1545603720000,
        'open': 3916.87,
        'close': 3918.95,
        'low': 3916.87,
        'high': 3919.52,
        'amount': 8.025812030038734,
        'count': 34,
        'volume': 31453.55032
    }, {
        'time': 1545603780000,
        'open': 3918.03,
        'close': 3918.94,
        'low': 3918.03,
        'high': 3919.83,
        'amount': 14.5777,
        'count': 31,
        'volume': 57124.561276
    }, {
        'time': 1545603840000,
        'open': 3918.95,
        'close': 3918.97,
        'low': 3917.97,
        'high': 3919,
        'amount': 19.2721,
        'count': 38,
        'volume': 75520.071379
    }, {
        'time': 1545603900000,
        'open': 3917.99,
        'close': 3918.34,
        'low': 3917.35,
        'high': 3918.61,
        'amount': 16.303599719260276,
        'count': 50,
        'volume': 63877.107609
    }, {
        'time': 1545603960000,
        'open': 3918.32,
        'close': 3914.33,
        'low': 3914.33,
        'high': 3918.32,
        'amount': 30.9665,
        'count': 80,
        'volume': 121287.993562
    }, {
        'time': 1545604020000,
        'open': 3914.33,
        'close': 3912.35,
        'low': 3910.06,
        'high': 3914.83,
        'amount': 24.92,
        'count': 162,
        'volume': 97474.89565
    }, {
        'time': 1545604080000,
        'open': 3912.34,
        'close': 3905.8,
        'low': 3905.02,
        'high': 3912.95,
        'amount': 39.80613120856292,
        'count': 169,
        'volume': 155651.238596
    }, {
        'time': 1545604140000,
        'open': 3906.31,
        'close': 3902,
        'low': 3902,
        'high': 3906.31,
        'amount': 56.591,
        'count': 152,
        'volume': 220871.15498
    }, {
        'time': 1545604200000,
        'open': 3902.36,
        'close': 3894.09,
        'low': 3890.01,
        'high': 3902.36,
        'amount': 104.94481083748725,
        'count': 411,
        'volume': 408943.08126608224
    }, {
        'time': 1545604260000,
        'open': 3894.22,
        'close': 3900.21,
        'low': 3889.4,
        'high': 3905.26,
        'amount': 222.1311,
        'count': 479,
        'volume': 864932.506027
    }, {
        'time': 1545604320000,
        'open': 3900.21,
        'close': 3889.57,
        'low': 3889.52,
        'high': 3901.36,
        'amount': 23.381960206438222,
        'count': 207,
        'volume': 91087.271321
    }, {
        'time': 1545604380000,
        'open': 3889.57,
        'close': 3897.94,
        'low': 3889.13,
        'high': 3897.95,
        'amount': 20.2779,
        'count': 125,
        'volume': 78928.824837
    }, {
        'time': 1545604440000,
        'open': 3897.94,
        'close': 3902.95,
        'low': 3896.25,
        'high': 3902.95,
        'amount': 26.1656,
        'count': 76,
        'volume': 102025.172012
    }, {
        'time': 1545604500000,
        'open': 3902.95,
        'close': 3908.97,
        'low': 3902.31,
        'high': 3911.36,
        'amount': 19.05252110764433,
        'count': 115,
        'volume': 74455.87415486
    }, {
        'time': 1545604560000,
        'open': 3908.75,
        'close': 3908.52,
        'low': 3907.09,
        'high': 3909.85,
        'amount': 14.5468,
        'count': 43,
        'volume': 56849.93244
    }, {
        'time': 1545604620000,
        'open': 3907.41,
        'close': 3905.62,
        'low': 3905.62,
        'high': 3907.45,
        'amount': 22.8787,
        'count': 70,
        'volume': 89381.794543
    }, {
        'time': 1545604680000,
        'open': 3905.52,
        'close': 3902.26,
        'low': 3901.05,
        'high': 3905.52,
        'amount': 21.723,
        'count': 57,
        'volume': 84776.967893
    }, {
        'time': 1545604740000,
        'open': 3902.16,
        'close': 3902.83,
        'low': 3902.15,
        'high': 3904.55,
        'amount': 35.9406,
        'count': 58,
        'volume': 140282.631178
    }, {
        'time': 1545604800000,
        'open': 3902.84,
        'close': 3905.31,
        'low': 3902.84,
        'high': 3907.1,
        'amount': 15.218,
        'count': 56,
        'volume': 59421.989726
    }, {
        'time': 1545604860000,
        'open': 3906.88,
        'close': 3914.06,
        'low': 3905.56,
        'high': 3914.39,
        'amount': 27.7121,
        'count': 124,
        'volume': 108400.886932
    }, {
        'time': 1545604920000,
        'open': 3914.05,
        'close': 3912.3,
        'low': 3911.65,
        'high': 3914.06,
        'amount': 26.3361,
        'count': 53,
        'volume': 103051.171226
    }, {
        'time': 1545604980000,
        'open': 3912.05,
        'close': 3906.83,
        'low': 3906.83,
        'high': 3912.05,
        'amount': 27.3156,
        'count': 81,
        'volume': 106793.529554
    }, {
        'time': 1545605040000,
        'open': 3907,
        'close': 3907.29,
        'low': 3906.83,
        'high': 3908.95,
        'amount': 14.115927519154761,
        'count': 59,
        'volume': 55151.994791
    }, {
        'time': 1545605100000,
        'open': 3907.93,
        'close': 3912.99,
        'low': 3907.32,
        'high': 3912.99,
        'amount': 14.0939,
        'count': 55,
        'volume': 55084.81528
    }, {
        'time': 1545605160000,
        'open': 3912.99,
        'close': 3916.68,
        'low': 3912,
        'high': 3916.68,
        'amount': 7.643100440852875,
        'count': 90,
        'volume': 29911.15121457
    }, {
        'time': 1545605220000,
        'open': 3915.69,
        'close': 3914.16,
        'low': 3914.16,
        'high': 3915.69,
        'amount': 16.2344044877475,
        'count': 53,
        'volume': 63557.37821407
    }, {
        'time': 1545605280000,
        'open': 3914.86,
        'close': 3919.04,
        'low': 3914.2,
        'high': 3919.28,
        'amount': 10.884016159064545,
        'count': 79,
        'volume': 42632.36531137
    }, {
        'time': 1545605340000,
        'open': 3919.16,
        'close': 3926.38,
        'low': 3919.15,
        'high': 3932.37,
        'amount': 40.6423,
        'count': 228,
        'volume': 159501.710725
    }, {
        'time': 1545605400000,
        'open': 3926.38,
        'close': 3937.91,
        'low': 3926.38,
        'high': 3938.68,
        'amount': 62.2637,
        'count': 241,
        'volume': 244964.24849
    }, {
        'time': 1545605460000,
        'open': 3937.95,
        'close': 3932.64,
        'low': 3927.08,
        'high': 3941.44,
        'amount': 30.1323,
        'count': 220,
        'volume': 118473.27103
    }, {
        'time': 1545605520000,
        'open': 3931.15,
        'close': 3929.11,
        'low': 3928.88,
        'high': 3931.98,
        'amount': 15.5869,
        'count': 78,
        'volume': 61257.553022
    }, {
        'time': 1545605580000,
        'open': 3929.11,
        'close': 3937.93,
        'low': 3929.11,
        'high': 3940.58,
        'amount': 24.3865,
        'count': 127,
        'volume': 95972.263919
    }, {
        'time': 1545605640000,
        'open': 3937.86,
        'close': 3930.84,
        'low': 3930.75,
        'high': 3938.44,
        'amount': 14.0069,
        'count': 83,
        'volume': 55106.237804
    }, {
        'time': 1545605700000,
        'open': 3931.56,
        'close': 3934.66,
        'low': 3930.78,
        'high': 3935.61,
        'amount': 8.2119,
        'count': 81,
        'volume': 32294.893276
    }, {
        'time': 1545605760000,
        'open': 3934.66,
        'close': 3937.69,
        'low': 3934.65,
        'high': 3937.69,
        'amount': 5.3634,
        'count': 44,
        'volume': 21105.098143
    }, {
        'time': 1545605820000,
        'open': 3936.47,
        'close': 3930.78,
        'low': 3930.78,
        'high': 3937.03,
        'amount': 36.2,
        'count': 122,
        'volume': 142399.277185
    }, {
        'time': 1545605880000,
        'open': 3930.77,
        'close': 3934.5,
        'low': 3930.77,
        'high': 3936.33,
        'amount': 39.9542,
        'count': 72,
        'volume': 157128.10813
    }, {
        'time': 1545605940000,
        'open': 3934.82,
        'close': 3939.94,
        'low': 3934.63,
        'high': 3940.38,
        'amount': 41.1882,
        'count': 109,
        'volume': 162195.175978
    }, {
        'time': 1545606000000,
        'open': 3939.94,
        'close': 3942.57,
        'low': 3939.24,
        'high': 3944.98,
        'amount': 25.2533,
        'count': 138,
        'volume': 99555.263077
    }, {
        'time': 1545606060000,
        'open': 3942.57,
        'close': 3940.85,
        'low': 3935.61,
        'high': 3942.57,
        'amount': 35.26444365296618,
        'count': 144,
        'volume': 138893.670399
    }, {
        'time': 1545606120000,
        'open': 3940.15,
        'close': 3938.35,
        'low': 3938.35,
        'high': 3941.5,
        'amount': 22.5085,
        'count': 70,
        'volume': 88694.554922
    }, {
        'time': 1545606180000,
        'open': 3937.58,
        'close': 3933.58,
        'low': 3933.34,
        'high': 3939.19,
        'amount': 22.5156,
        'count': 129,
        'volume': 88628.549622
    }, {
        'time': 1545606240000,
        'open': 3933.58,
        'close': 3931.05,
        'low': 3931.05,
        'high': 3935.37,
        'amount': 59.48352701326103,
        'count': 91,
        'volume': 233885.97452828
    }, {
        'time': 1545606300000,
        'open': 3931.06,
        'close': 3928.07,
        'low': 3926.16,
        'high': 3931.06,
        'amount': 48.14614916540102,
        'count': 146,
        'volume': 189115.57272278253
    }, {
        'time': 1545606360000,
        'open': 3927.6,
        'close': 3928.35,
        'low': 3926.87,
        'high': 3929.29,
        'amount': 6.8014,
        'count': 77,
        'volume': 26712.651305
    }, {
        'time': 1545606420000,
        'open': 3928.35,
        'close': 3935.05,
        'low': 3928.35,
        'high': 3936.72,
        'amount': 6.7874,
        'count': 131,
        'volume': 26699.112616
    }, {
        'time': 1545606480000,
        'open': 3934.53,
        'close': 3917.47,
        'low': 3913.32,
        'high': 3935.38,
        'amount': 91.26175084742137,
        'count': 310,
        'volume': 358272.33420653
    }, {
        'time': 1545606540000,
        'open': 3917.43,
        'close': 3918.22,
        'low': 3916.81,
        'high': 3922.27,
        'amount': 37.55741439349171,
        'count': 119,
        'volume': 147198.761821
    }, {
        'time': 1545606600000,
        'open': 3918.95,
        'close': 3921.39,
        'low': 3918.95,
        'high': 3926.43,
        'amount': 31.1701,
        'count': 116,
        'volume': 122289.753081
    }, {
        'time': 1545606660000,
        'open': 3921.24,
        'close': 3920.33,
        'low': 3918.97,
        'high': 3927.65,
        'amount': 21.5483,
        'count': 99,
        'volume': 84563.483275
    }, {
        'time': 1545606720000,
        'open': 3921.28,
        'close': 3920.58,
        'low': 3918.07,
        'high': 3921.46,
        'amount': 16.2248,
        'count': 54,
        'volume': 63591.335592
    }, {
        'time': 1545606780000,
        'open': 3920.58,
        'close': 3923.64,
        'low': 3919.05,
        'high': 3924.95,
        'amount': 14.4216,
        'count': 74,
        'volume': 56555.085859
    }, {
        'time': 1545606840000,
        'open': 3923.76,
        'close': 3922.8,
        'low': 3922.8,
        'high': 3924.44,
        'amount': 16.33428507822924,
        'count': 49,
        'volume': 64090.847882
    }, {
        'time': 1545606900000,
        'open': 3922.86,
        'close': 3925.78,
        'low': 3921.39,
        'high': 3925.78,
        'amount': 7.2988,
        'count': 65,
        'volume': 28636.992997
    }, {
        'time': 1545606960000,
        'open': 3925.62,
        'close': 3929.8,
        'low': 3925.62,
        'high': 3930.07,
        'amount': 3.1525,
        'count': 54,
        'volume': 12384.438971
    }, {
        'time': 1545607020000,
        'open': 3929.8,
        'close': 3921.74,
        'low': 3921.39,
        'high': 3929.86,
        'amount': 30.101720284514712,
        'count': 117,
        'volume': 118188.3275345
    }, {
        'time': 1545607080000,
        'open': 3922.36,
        'close': 3925.33,
        'low': 3921.07,
        'high': 3926.12,
        'amount': 32.3838,
        'count': 92,
        'volume': 126998.92687
    }, {
        'time': 1545607140000,
        'open': 3925.47,
        'close': 3922.26,
        'low': 3921.77,
        'high': 3925.87,
        'amount': 12.8722,
        'count': 44,
        'volume': 50523.006696
    }, {
        'time': 1545607200000,
        'open': 3922.25,
        'close': 3920.77,
        'low': 3920.77,
        'high': 3922.25,
        'amount': 32.2674,
        'count': 75,
        'volume': 126535.021394
    }, {
        'time': 1545607260000,
        'open': 3920.77,
        'close': 3917.84,
        'low': 3910,
        'high': 3920.77,
        'amount': 36.8855,
        'count': 185,
        'volume': 144377.965487
    }, {
        'time': 1545607320000,
        'open': 3918.54,
        'close': 3919.92,
        'low': 3918.05,
        'high': 3922.86,
        'amount': 35.2259,
        'count': 107,
        'volume': 138057.158929
    }, {
        'time': 1545607380000,
        'open': 3919.9,
        'close': 3921.24,
        'low': 3918.31,
        'high': 3922.88,
        'amount': 18.1279,
        'count': 75,
        'volume': 71075.546764
    }, {
        'time': 1545607440000,
        'open': 3921.95,
        'close': 3921.92,
        'low': 3921.27,
        'high': 3923,
        'amount': 15.1487,
        'count': 46,
        'volume': 59416.152107
    }, {
        'time': 1545607500000,
        'open': 3921.93,
        'close': 3922,
        'low': 3921.04,
        'high': 3922.95,
        'amount': 23.9147,
        'count': 67,
        'volume': 93794.164261
    }, {
        'time': 1545607560000,
        'open': 3922,
        'close': 3933.05,
        'low': 3922,
        'high': 3933.05,
        'amount': 32.8344,
        'count': 128,
        'volume': 128947.565709
    }, {
        'time': 1545607620000,
        'open': 3933.04,
        'close': 3934.32,
        'low': 3929.67,
        'high': 3935.19,
        'amount': 40.7488,
        'count': 86,
        'volume': 160235.833989
    }, {
        'time': 1545607680000,
        'open': 3933.98,
        'close': 3933.05,
        'low': 3932.05,
        'high': 3934.69,
        'amount': 17.2281,
        'count': 59,
        'volume': 67774.768829
    }, {
        'time': 1545607740000,
        'open': 3933.49,
        'close': 3931.31,
        'low': 3928.97,
        'high': 3933.49,
        'amount': 5.2675,
        'count': 104,
        'volume': 20703.788348
    }, {
        'time': 1545607800000,
        'open': 3931.95,
        'close': 3927.98,
        'low': 3927.56,
        'high': 3932.3,
        'amount': 18.369980534757804,
        'count': 91,
        'volume': 72194.81625486857
    }, {
        'time': 1545607860000,
        'open': 3928.58,
        'close': 3931.95,
        'low': 3927,
        'high': 3932.32,
        'amount': 10.7516,
        'count': 65,
        'volume': 42241.985134
    }, {
        'time': 1545607920000,
        'open': 3931.95,
        'close': 3925.95,
        'low': 3925.55,
        'high': 3932.81,
        'amount': 12.9938,
        'count': 83,
        'volume': 51051.688588
    }, {
        'time': 1545607980000,
        'open': 3925.95,
        'close': 3924.97,
        'low': 3924.97,
        'high': 3925.95,
        'amount': 22.002286683549592,
        'count': 52,
        'volume': 86371.995701
    }, {
        'time': 1545608040000,
        'open': 3924.96,
        'close': 3930.95,
        'low': 3924.96,
        'high': 3930.95,
        'amount': 14.06060144935907,
        'count': 74,
        'volume': 55213.83933396
    }, {
        'time': 1545608100000,
        'open': 3930.92,
        'close': 3921.59,
        'low': 3921.05,
        'high': 3930.92,
        'amount': 26.00103708139733,
        'count': 131,
        'volume': 102082.39342440561
    }, {
        'time': 1545608160000,
        'open': 3922.37,
        'close': 3919.69,
        'low': 3919.05,
        'high': 3924.28,
        'amount': 26.21762183625206,
        'count': 107,
        'volume': 102782.53756286
    }, {
        'time': 1545608220000,
        'open': 3919.69,
        'close': 3926.07,
        'low': 3918.11,
        'high': 3926.95,
        'amount': 15.065,
        'count': 72,
        'volume': 59100.677899
    }, {
        'time': 1545608280000,
        'open': 3926.08,
        'close': 3926.95,
        'low': 3923.23,
        'high': 3927,
        'amount': 17.6514,
        'count': 59,
        'volume': 69291.221128
    }, {
        'time': 1545608340000,
        'open': 3926.95,
        'close': 3922.06,
        'low': 3921.05,
        'high': 3928.73,
        'amount': 13.8007,
        'count': 81,
        'volume': 54187.275983
    }, {
        'time': 1545608400000,
        'open': 3922.06,
        'close': 3922.82,
        'low': 3920.05,
        'high': 3923.99,
        'amount': 19.70236212678642,
        'count': 99,
        'volume': 77262.27470815
    }, {
        'time': 1545608460000,
        'open': 3922.95,
        'close': 3926.62,
        'low': 3922.26,
        'high': 3927.49,
        'amount': 14.5148,
        'count': 62,
        'volume': 56974.751397
    }, {
        'time': 1545608520000,
        'open': 3926.95,
        'close': 3926.95,
        'low': 3925.04,
        'high': 3927.5,
        'amount': 18.0552,
        'count': 44,
        'volume': 70895.92336
    }, {
        'time': 1545608580000,
        'open': 3926.41,
        'close': 3930.42,
        'low': 3926.41,
        'high': 3930.42,
        'amount': 25.3432,
        'count': 48,
        'volume': 99542.407647
    }, {
        'time': 1545608640000,
        'open': 3929.06,
        'close': 3930.11,
        'low': 3928.01,
        'high': 3930.42,
        'amount': 14.483,
        'count': 34,
        'volume': 56907.515598
    }, {
        'time': 1545608700000,
        'open': 3930.28,
        'close': 3933.8,
        'low': 3929.82,
        'high': 3934.56,
        'amount': 16.490011037933087,
        'count': 56,
        'volume': 64840.99634841
    }, {
        'time': 1545608760000,
        'open': 3934.34,
        'close': 3933.16,
        'low': 3931.57,
        'high': 3936.72,
        'amount': 39.918188962066914,
        'count': 125,
        'volume': 157113.28349859
    }, {
        'time': 1545608820000,
        'open': 3931.62,
        'close': 3927.93,
        'low': 3925.36,
        'high': 3932.29,
        'amount': 22.7650012209928,
        'count': 113,
        'volume': 89460.76550189
    }, {
        'time': 1545608880000,
        'open': 3928.4,
        'close': 3930.44,
        'low': 3928.4,
        'high': 3930.44,
        'amount': 45.7224,
        'count': 57,
        'volume': 179638.457109
    }, {
        'time': 1545608940000,
        'open': 3930.5,
        'close': 3929.82,
        'low': 3929.65,
        'high': 3932.81,
        'amount': 10.4191,
        'count': 72,
        'volume': 40956.718729
    }, {
        'time': 1545609000000,
        'open': 3930.93,
        'close': 3931.22,
        'low': 3929.77,
        'high': 3933.1,
        'amount': 3.688792530654846,
        'count': 57,
        'volume': 14499.56488328
    }, {
        'time': 1545609060000,
        'open': 3930.52,
        'close': 3929.85,
        'low': 3928.22,
        'high': 3930.52,
        'amount': 9.455878980014809,
        'count': 67,
        'volume': 37153.58330956
    }, {
        'time': 1545609120000,
        'open': 3929.85,
        'close': 3932.62,
        'low': 3928.25,
        'high': 3932.62,
        'amount': 11.051471066020332,
        'count': 53,
        'volume': 43429.5082998
    }, {
        'time': 1545609180000,
        'open': 3932,
        'close': 3933.98,
        'low': 3931.28,
        'high': 3936.03,
        'amount': 21.7875,
        'count': 86,
        'volume': 85696.861397
    }, {
        'time': 1545609240000,
        'open': 3933.57,
        'close': 3932.08,
        'low': 3931.42,
        'high': 3934.18,
        'amount': 10.833287450497943,
        'count': 67,
        'volume': 42597.530691
    }, {
        'time': 1545609300000,
        'open': 3932.35,
        'close': 3929.95,
        'low': 3927.46,
        'high': 3934.23,
        'amount': 33.8195,
        'count': 141,
        'volume': 132941.502984
    }, {
        'time': 1545609360000,
        'open': 3931.62,
        'close': 3930.05,
        'low': 3929.07,
        'high': 3932.81,
        'amount': 33.0711,
        'count': 57,
        'volume': 129978.508107
    }, {
        'time': 1545609420000,
        'open': 3930.61,
        'close': 3926.63,
        'low': 3925.11,
        'high': 3931.32,
        'amount': 15.125852540531454,
        'count': 61,
        'volume': 59429.87071136
    }, {
        'time': 1545609480000,
        'open': 3925.95,
        'close': 3927.96,
        'low': 3925.11,
        'high': 3928.44,
        'amount': 21.040259257201825,
        'count': 119,
        'volume': 82618.38922943546
    }, {
        'time': 1545609540000,
        'open': 3927.96,
        'close': 3929.89,
        'low': 3927.95,
        'high': 3932.22,
        'amount': 19.961948645196436,
        'count': 107,
        'volume': 78447.21338643
    }, {
        'time': 1545609600000,
        'open': 3929.94,
        'close': 3930.55,
        'low': 3928.43,
        'high': 3932.36,
        'amount': 30.860526519048733,
        'count': 119,
        'volume': 121266.97530076306
    }, {
        'time': 1545609660000,
        'open': 3929.88,
        'close': 3933.44,
        'low': 3929.88,
        'high': 3935.03,
        'amount': 28.682521496201527,
        'count': 92,
        'volume': 112812.43635500947
    }, {
        'time': 1545609720000,
        'open': 3934.14,
        'close': 3935.47,
        'low': 3932.96,
        'high': 3936.66,
        'amount': 26.92797746883556,
        'count': 125,
        'volume': 105939.496689
    }, {
        'time': 1545609780000,
        'open': 3935.68,
        'close': 3936.9,
        'low': 3933.43,
        'high': 3936.91,
        'amount': 26.0351,
        'count': 136,
        'volume': 102458.440485
    }, {
        'time': 1545609840000,
        'open': 3936.91,
        'close': 3946.43,
        'low': 3936.91,
        'high': 3947.29,
        'amount': 37.0594,
        'count': 176,
        'volume': 146111.293245
    }, {
        'time': 1545609900000,
        'open': 3946.57,
        'close': 3949.2,
        'low': 3945.03,
        'high': 3949.69,
        'amount': 32.588450750102645,
        'count': 230,
        'volume': 128620.443524
    }, {
        'time': 1545609960000,
        'open': 3949.73,
        'close': 3965.33,
        'low': 3949.73,
        'high': 3969.85,
        'amount': 73.4791,
        'count': 402,
        'volume': 290951.1036612121
    }, {
        'time': 1545610020000,
        'open': 3964.03,
        'close': 3955,
        'low': 3950.91,
        'high': 3965.3,
        'amount': 39.988517498686114,
        'count': 198,
        'volume': 158219.39608958
    }, {
        'time': 1545610080000,
        'open': 3955.15,
        'close': 3966.54,
        'low': 3955.15,
        'high': 3967.01,
        'amount': 44.322738942580344,
        'count': 169,
        'volume': 175531.862393
    }, {
        'time': 1545610140000,
        'open': 3964.38,
        'close': 3970.34,
        'low': 3964,
        'high': 3971.76,
        'amount': 53.498890875666646,
        'count': 329,
        'volume': 212200.29098017368
    }, {
        'time': 1545610200000,
        'open': 3970.34,
        'close': 3969.06,
        'low': 3968.87,
        'high': 3974.34,
        'amount': 46.937170224297475,
        'count': 471,
        'volume': 186417.84748887565
    }, {
        'time': 1545610260000,
        'open': 3969.37,
        'close': 3980.88,
        'low': 3968.2,
        'high': 3980.88,
        'amount': 92.47297740919853,
        'count': 337,
        'volume': 367647.061699
    }, {
        'time': 1545610320000,
        'open': 3980.88,
        'close': 3995.33,
        'low': 3980.02,
        'high': 3997.96,
        'amount': 61.55591243951104,
        'count': 591,
        'volume': 245465.27062605988
    }, {
        'time': 1545610380000,
        'open': 3995.33,
        'close': 3979.99,
        'low': 3979.99,
        'high': 3996.66,
        'amount': 91.28705166556199,
        'count': 576,
        'volume': 364031.20821579965
    }, {
        'time': 1545610440000,
        'open': 3980.09,
        'close': 3996.82,
        'low': 3979.89,
        'high': 3998.65,
        'amount': 50.66011073925956,
        'count': 353,
        'volume': 202076.44482891
    }, {
        'time': 1545610500000,
        'open': 3996.82,
        'close': 4000.31,
        'low': 3995.58,
        'high': 4003.63,
        'amount': 151.85517196927114,
        'count': 604,
        'volume': 607432.46771
    }, {
        'time': 1545610560000,
        'open': 4001.36,
        'close': 3982.05,
        'low': 3981.54,
        'high': 4003.87,
        'amount': 84.36354600627165,
        'count': 457,
        'volume': 337233.87847330037
    }, {
        'time': 1545610620000,
        'open': 3982.05,
        'close': 3982.53,
        'low': 3980,
        'high': 3986.05,
        'amount': 30.630706647059856,
        'count': 249,
        'volume': 121975.58571470765
    }, {
        'time': 1545610680000,
        'open': 3981.15,
        'close': 3988.22,
        'low': 3980.72,
        'high': 3990.01,
        'amount': 96.2522,
        'count': 301,
        'volume': 383880.087433
    }, {
        'time': 1545610740000,
        'open': 3988.23,
        'close': 3989.09,
        'low': 3988.22,
        'high': 3991.61,
        'amount': 14.996373997620363,
        'count': 152,
        'volume': 59823.28850619
    }, {
        'time': 1545610800000,
        'open': 3988.8,
        'close': 3982.39,
        'low': 3981.59,
        'high': 3989.09,
        'amount': 48.8388,
        'count': 195,
        'volume': 194681.535374
    }, {
        'time': 1545610860000,
        'open': 3982.6,
        'close': 3976.24,
        'low': 3976.05,
        'high': 3982.69,
        'amount': 50.720659820201455,
        'count': 250,
        'volume': 201870.881232
    }, {
        'time': 1545610920000,
        'open': 3977.1,
        'close': 3982.6,
        'low': 3975.61,
        'high': 3986.01,
        'amount': 44.8539,
        'count': 214,
        'volume': 178520.356969
    }, {
        'time': 1545610980000,
        'open': 3982.6,
        'close': 3984.87,
        'low': 3981.77,
        'high': 3987.96,
        'amount': 25.05266131761505,
        'count': 219,
        'volume': 99802.474772
    }, {
        'time': 1545611040000,
        'open': 3985.91,
        'close': 3984.01,
        'low': 3982.71,
        'high': 3987.73,
        'amount': 32.62014464714176,
        'count': 140,
        'volume': 129983.60372601
    }, {
        'time': 1545611100000,
        'open': 3984.62,
        'close': 3992.98,
        'low': 3984.03,
        'high': 3993,
        'amount': 14.4764,
        'count': 117,
        'volume': 57721.428007
    }, {
        'time': 1545611160000,
        'open': 3992.98,
        'close': 3988.96,
        'low': 3988.88,
        'high': 3993.32,
        'amount': 44.767680032148945,
        'count': 143,
        'volume': 178655.12165145
    }, {
        'time': 1545611220000,
        'open': 3990.17,
        'close': 3982.89,
        'low': 3982.88,
        'high': 3990.17,
        'amount': 56.48384483754173,
        'count': 204,
        'volume': 225149.4054233329
    }, {
        'time': 1545611280000,
        'open': 3982.89,
        'close': 3988.91,
        'low': 3982.88,
        'high': 3990,
        'amount': 53.93468505205421,
        'count': 236,
        'volume': 215032.35929590405
    }, {
        'time': 1545611340000,
        'open': 3989.05,
        'close': 3988.5,
        'low': 3986.18,
        'high': 3990,
        'amount': 40.6706,
        'count': 153,
        'volume': 162205.227738
    }, {
        'time': 1545611400000,
        'open': 3988.47,
        'close': 3982.91,
        'low': 3982.88,
        'high': 3990,
        'amount': 53.10878088473323,
        'count': 225,
        'volume': 211790.77281313
    }, {
        'time': 1545611460000,
        'open': 3982.92,
        'close': 3984.09,
        'low': 3982.88,
        'high': 3987.31,
        'amount': 5.345051399860643,
        'count': 156,
        'volume': 21299.079390867897
    }, {
        'time': 1545611520000,
        'open': 3982.98,
        'close': 3984.12,
        'low': 3982.96,
        'high': 3987.22,
        'amount': 22.7605,
        'count': 126,
        'volume': 90696.22750804527
    }, {
        'time': 1545611580000,
        'open': 3984.69,
        'close': 3984.17,
        'low': 3984.09,
        'high': 3985,
        'amount': 12.976,
        'count': 140,
        'volume': 51701.672573
    }, {
        'time': 1545611640000,
        'open': 3984.17,
        'close': 3983.74,
        'low': 3983.05,
        'high': 3985,
        'amount': 15.88438882782366,
        'count': 107,
        'volume': 63288.080446
    }, {
        'time': 1545611700000,
        'open': 3983.74,
        'close': 3982.88,
        'low': 3982.88,
        'high': 3984.28,
        'amount': 25.46413613723049,
        'count': 213,
        'volume': 101445.43846434
    }, {
        'time': 1545611760000,
        'open': 3982.88,
        'close': 3983.92,
        'low': 3981.88,
        'high': 3984.95,
        'amount': 18.84,
        'count': 144,
        'volume': 75049.214537
    }, {
        'time': 1545611820000,
        'open': 3984.42,
        'close': 3990.87,
        'low': 3984.26,
        'high': 3993.67,
        'amount': 24.311043266711092,
        'count': 242,
        'volume': 97006.799608
    }, {
        'time': 1545611880000,
        'open': 3990.72,
        'close': 3989.97,
        'low': 3988.1,
        'high': 3990.77,
        'amount': 31.055570012616638,
        'count': 180,
        'volume': 123887.24912924
    }, {
        'time': 1545611940000,
        'open': 3989.79,
        'close': 3997.82,
        'low': 3989.78,
        'high': 3999,
        'amount': 39.669058027411715,
        'count': 204,
        'volume': 158478.83458871
    }, {
        'time': 1545612000000,
        'open': 3998.12,
        'close': 4014.09,
        'low': 3997.8,
        'high': 4015,
        'amount': 193.55886223012777,
        'count': 512,
        'volume': 775170.83295
    }, {
        'time': 1545612060000,
        'open': 4014.09,
        'close': 4038,
        'low': 4012.52,
        'high': 4039,
        'amount': 320.5294223220344,
        'count': 1235,
        'volume': 1291052.0309064453
    }, {
        'time': 1545612120000,
        'open': 4038,
        'close': 4030,
        'low': 4029.39,
        'high': 4038,
        'amount': 218.3157547718048,
        'count': 879,
        'volume': 880894.248773
    }, {
        'time': 1545612180000,
        'open': 4029.43,
        'close': 4021.34,
        'low': 4020,
        'high': 4030.63,
        'amount': 76.25472208642904,
        'count': 556,
        'volume': 307064.676276913
    }, {
        'time': 1545612240000,
        'open': 4021.34,
        'close': 4047.37,
        'low': 4020.01,
        'high': 4049,
        'amount': 153.2245,
        'count': 660,
        'volume': 618252.967552
    }, {
        'time': 1545612300000,
        'open': 4048.59,
        'close': 4088,
        'low': 4044.87,
        'high': 4088,
        'amount': 374.8349845315417,
        'count': 1481,
        'volume': 1524923.6323487165
    }, {
        'time': 1545612360000,
        'open': 4086.26,
        'close': 4101.29,
        'low': 4076.05,
        'high': 4108.54,
        'amount': 693.0413154376816,
        'count': 2184,
        'volume': 2840070.9806519095
    }, {
        'time': 1545612420000,
        'open': 4101.29,
        'close': 4088.55,
        'low': 4084.7,
        'high': 4103.27,
        'amount': 106.03580357869618,
        'count': 759,
        'volume': 434018.8573674
    }, {
        'time': 1545612480000,
        'open': 4087.92,
        'close': 4102.7,
        'low': 4087.92,
        'high': 4105.86,
        'amount': 152.50976136677295,
        'count': 745,
        'volume': 625146.87218493
    }, {
        'time': 1545612540000,
        'open': 4103.7,
        'close': 4085.78,
        'low': 4085.33,
        'high': 4103.89,
        'amount': 39.64372136408007,
        'count': 367,
        'volume': 162340.1804161818
    }, {
        'time': 1545612600000,
        'open': 4085.78,
        'close': 4103.85,
        'low': 4085.78,
        'high': 4114.5,
        'amount': 156.4542,
        'count': 792,
        'volume': 641735.8790275267
    }, {
        'time': 1545612660000,
        'open': 4103.85,
        'close': 4130,
        'low': 4102.66,
        'high': 4130,
        'amount': 189.1381617146422,
        'count': 872,
        'volume': 778369.1653020186
    }, {
        'time': 1545612720000,
        'open': 4130,
        'close': 4150.04,
        'low': 4129,
        'high': 4158,
        'amount': 364.8719426062168,
        'count': 1256,
        'volume': 1512350.5522929032
    }, {
        'time': 1545612780000,
        'open': 4150.04,
        'close': 4145,
        'low': 4145,
        'high': 4155.13,
        'amount': 219.1980081459858,
        'count': 640,
        'volume': 910218.07382932
    }, {
        'time': 1545612840000,
        'open': 4145,
        'close': 4131.28,
        'low': 4126,
        'high': 4145,
        'amount': 131.93445013457006,
        'count': 578,
        'volume': 545263.4676552344
    }, {
        'time': 1545612900000,
        'open': 4131.28,
        'close': 4141.05,
        'low': 4129.16,
        'high': 4141.16,
        'amount': 77.38850135129577,
        'count': 450,
        'volume': 319985.75298
    }, {
        'time': 1545612960000,
        'open': 4141.09,
        'close': 4135.98,
        'low': 4130,
        'high': 4141.15,
        'amount': 196.6795058485776,
        'count': 689,
        'volume': 813776.168094
    }, {
        'time': 1545613020000,
        'open': 4135.16,
        'close': 4150.7,
        'low': 4133.22,
        'high': 4158,
        'amount': 134.44853420698104,
        'count': 615,
        'volume': 557339.4105989955
    }, {
        'time': 1545613080000,
        'open': 4150.7,
        'close': 4147.1,
        'low': 4139.5,
        'high': 4153.84,
        'amount': 84.7122,
        'count': 438,
        'volume': 351266.737787
    }, {
        'time': 1545613140000,
        'open': 4147.95,
        'close': 4144.05,
        'low': 4141.44,
        'high': 4148.95,
        'amount': 52.412352860008646,
        'count': 319,
        'volume': 217179.14359642
    }, {
        'time': 1545613200000,
        'open': 4144.05,
        'close': 4162.46,
        'low': 4143.99,
        'high': 4165.22,
        'amount': 146.49894032504648,
        'count': 652,
        'volume': 608320.7634383774
    }, {
        'time': 1545613260000,
        'open': 4161.65,
        'close': 4132.71,
        'low': 4132.71,
        'high': 4165.19,
        'amount': 105.62858369947831,
        'count': 560,
        'volume': 438550.76689449
    }, {
        'time': 1545613320000,
        'open': 4133.94,
        'close': 4129.86,
        'low': 4122.84,
        'high': 4133.94,
        'amount': 107.90185485935464,
        'count': 520,
        'volume': 445522.10037637816
    }, {
        'time': 1545613380000,
        'open': 4129.86,
        'close': 4130.38,
        'low': 4121.89,
        'high': 4133,
        'amount': 64.72686752009344,
        'count': 357,
        'volume': 267201.833258
    }, {
        'time': 1545613440000,
        'open': 4130.38,
        'close': 4130.63,
        'low': 4123.79,
        'high': 4132.52,
        'amount': 34.72735261627907,
        'count': 240,
        'volume': 143376.252804
    }, {
        'time': 1545613500000,
        'open': 4132.01,
        'close': 4129.99,
        'low': 4128.03,
        'high': 4137.7,
        'amount': 52.16401507356659,
        'count': 301,
        'volume': 215532.39173211
    }];


/***/ }),

/***/ 2491:
/*!*******************************************!*\
  !*** ./src/app/providers/mock.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MockService": () => (/* binding */ MockService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 2378);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 3491);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var _mock_btc_181123_2006_181124_0105__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../mock/btc-181123_2006-181124_0105 */ 6019);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);




class MockService {
    constructor() {
    }
    static dataGenerator(time = +new Date()) {
        const obj = {};
        Object.assign(obj, _mock_btc_181123_2006_181124_0105__WEBPACK_IMPORTED_MODULE_0__.BTC_PRICE_LIST[this.dataIndex], { time });
        ++this.dataIndex >= this.dataLength && (this.dataIndex = 0);
        return obj;
    }
    getHistoryList(param) {
        const list = [];
        let timePoint = +new Date(param.startTime * 1e3).setSeconds(0, 0);
        const now = +new Date();
        while (timePoint < now) {
            this.lastBarTimestamp = timePoint;
            list.push(MockService.dataGenerator(timePoint));
            timePoint += param.granularity * 1e3;
        }
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable((ob) => {
            ob.next(list);
            ob.complete();
        });
    }
    fakeWebSocket() {
        let granularity;
        let subscription;
        const ws = {
            send(message) {
                const matched = message.match(/.+_kline_(\d+)/);
                // if matched, then send data based on granularity
                // else unsubscribe, which means to close connection in this example
                if (matched) {
                    granularity = +matched[1] * 1e3;
                    sendData();
                }
                else {
                    subscription.unsubscribe();
                }
            },
            close() {
            }
        };
        const sendData = () => {
            const duration = 3e3;
            subscription = (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.interval)(duration)
                .pipe(
            /*
             * mock data, no need to care about the logic if you use server data
             * the point is the time of the data
             * data.time === last.time => update
             * data.time !== last.time => draw new bar
             */
            (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(() => {
                const currentTimestamp = +new Date();
                if (currentTimestamp - this.lastBarTimestamp >= granularity) {
                    /* time goes to next, generate new one */
                    this.lastBarTimestamp += granularity;
                    return MockService.dataGenerator(this.lastBarTimestamp);
                }
                else if (currentTimestamp + duration - this.lastBarTimestamp >= granularity) {
                    // next one will be new one, get data from local, then return to client
                    // so old bars will be real data
                    return { ..._mock_btc_181123_2006_181124_0105__WEBPACK_IMPORTED_MODULE_0__.BTC_PRICE_LIST[MockService.dataIndex], time: this.lastBarTimestamp, };
                }
                else {
                    /* simulate real time update, update the one that last time returned */
                    const data = _mock_btc_181123_2006_181124_0105__WEBPACK_IMPORTED_MODULE_0__.BTC_PRICE_LIST[MockService.dataIndex];
                    const priceChanged = Math.random() * 10 - 10 / 2; // make price change in same step
                    return {
                        time: this.lastBarTimestamp,
                        open: data.open + priceChanged,
                        close: data.close + priceChanged,
                        low: data.low + priceChanged,
                        high: data.high + priceChanged,
                        amount: Math.abs(data.amount + Math.random() * 10 - 10 / 2),
                        count: Math.abs(data.count + Math.random() * 10 - 10 / 2),
                        volume: Math.abs(data.volume + Math.random() * 10 - 10 / 2),
                    };
                }
            }))
                .subscribe(x => {
                ws.onmessage && ws.onmessage(x);
            });
        };
        // simulate open websocket after one second
        setTimeout(() => {
            ws.onopen();
        }, 1e3);
        return ws;
    }
}
MockService.dataTemplate = { 'time': 1545572340000, 'open': 3917, 'high': 3917, 'low': 3912.03, 'close': 3912.62, 'volume': 3896 };
MockService.dataIndex = 0;
MockService.dataLength = _mock_btc_181123_2006_181124_0105__WEBPACK_IMPORTED_MODULE_0__.BTC_PRICE_LIST.length;
MockService.ɵfac = function MockService_Factory(t) { return new (t || MockService)(); };
MockService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: MockService, factory: MockService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 6761:
/*!************************************!*\
  !*** ./src/app/tv/tv.component.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TvComponent": () => (/* binding */ TvComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 5398);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 8759);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _providers_mock_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../providers/mock.service */ 2491);




class TvComponent {
    constructor(mockService) {
        this.mockService = mockService;
        this.wsMessage = 'you may need to send specific message to subscribe data, eg: BTC';
        this.granularityMap = {
            '1': 60,
            '3': 180,
            '5': 300,
            '30': 30 * 60,
            '60': 60 * 60,
            '120': 60 * 60 * 2,
            '240': 60 * 60 * 4,
            '360': 60 * 60 * 6,
            'D': 86400
        };
    }
    ngOnInit() {
        this.ws = this.mockService.fakeWebSocket();
        this.ws.onopen = () => {
            console.log('fake websocket: onopen');
            this.drawTv();
        };
    }
    ngOnDestroy() {
        this.ws.close();
    }
    drawTv() {
        this.tradingview = new window.TradingView.widget({
            // debug: true, // uncomment this line to see Library errors and warnings in the console
            fullscreen: true,
            symbol: this.symbol,
            interval: '1',
            container_id: 'tradingview',
            library_path: 'assets/vendors/charting_library/',
            locale: 'en',
            disabled_features: [
                // 'timeframes_toolbar',
                // 'go_to_date',
                // 'use_localstorage_for_settings',
                'volume_force_overlay',
                // 'show_interval_dialog_on_key_press',
                'symbol_search_hot_key',
                'study_dialog_search_control',
                'display_market_status',
                /*'header_compare',
                'header_symbol_search',
                'header_fullscreen_button',
                'header_settings',
                'header_chart_type',
                'header_resolutions',*/
                'control_bar',
                'edit_buttons_in_legend',
                'border_around_the_chart',
                'main_series_scale_menu',
                'star_some_intervals_by_default',
                'datasource_copypaste',
                'header_indicators',
                // 'context_menus',
                // 'compare_symbol',
                'header_undo_redo',
                'border_around_the_chart',
                'timezone_menu',
                'remove_library_container_border',
            ],
            // enabled_features: ['study_templates'],
            // charts_storage_url: 'http://saveload.tradingview.com',
            charts_storage_api_version: '1.1',
            client_id: 'tradingview.com',
            user_id: 'public_user_id',
            timezone: 'America/New_York',
            datafeed: {
                onReady(x) {
                    (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.timer)(0)
                        .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.tap)(() => {
                        x({
                            supported_resolutions: ['1', '3', '5', '30', '60', '120', '240', '360', 'D'],
                        });
                    })).subscribe();
                },
                getBars: (...args) => {
                    const [symbol, granularity, startTime, endTime, onResult, onError, isFirst] = args;
                    console.log('[getBars]:', args);
                    this.mockService.getHistoryList({
                        granularity: this.granularityMap[granularity],
                        startTime,
                        endTime
                    }).subscribe((data) => {
                        // push the history data to callback
                        onResult(data, { noData: false });
                    });
                },
                resolveSymbol: (symbol, onResolve, onError) => {
                    console.log('[resolveSymbol]');
                    (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.timer)(1e3)
                        .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.tap)(() => {
                        onResolve({
                            name: this.symbol,
                            full_name: this.symbol,
                            base_name: this.symbol,
                            has_intraday: true,
                            description: '',
                            type: '',
                            session: '24x7',
                            exchange: '',
                            listed_exchange: '',
                            timezone: 'America/New_York',
                            minmov: 1,
                            pricescale: 100,
                            supported_resolutions: ['1', '3', '5', '30', '60', '120', '240', '360', 'D'],
                        });
                    })).subscribe();
                },
                getServerTime: (callback) => {
                    console.log('[serverTime]');
                },
                subscribeBars: (...args) => {
                    const [symbol, granularity, onTick] = args;
                    console.log('[subscribe], arg:', args);
                    this.ws.onmessage = (e) => {
                        try {
                            const data = e;
                            if (data) {
                                // realtime data
                                // data's timestamp === recent one ? Update the recent one : A new timestamp data
                                onTick(data);
                            }
                        }
                        catch (e) {
                            console.error(e);
                        }
                    };
                    // subscribe the realtime data
                    this.ws.send(`${this.wsMessage}_kline_${this.granularityMap[granularity]}`);
                },
                unsubscribeBars: () => {
                    this.ws.send('stop receiving data or just close websocket');
                },
                searchSymbols: () => { },
            },
        });
    }
}
TvComponent.ɵfac = function TvComponent_Factory(t) { return new (t || TvComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_providers_mock_service__WEBPACK_IMPORTED_MODULE_0__.MockService)); };
TvComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: TvComponent, selectors: [["app-tv"]], inputs: { symbol: "symbol" }, decls: 1, vars: 0, consts: [["id", "tradingview"]], template: function TvComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div", 0);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0di5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map