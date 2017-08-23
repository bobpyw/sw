webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/account/account-resolver.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__demo_service__ = __webpack_require__("../../../../../src/app/demo.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountResolver; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AccountResolver = (function () {
    function AccountResolver(ds) {
        this.ds = ds;
    }
    AccountResolver.prototype.resolve = function (route, state) {
        return this.ds.retrieve(route.params.account_id).then(function (acct) {
            return acct;
        });
    };
    return AccountResolver;
}());
AccountResolver = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__demo_service__["a" /* DemoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__demo_service__["a" /* DemoService */]) === "function" && _a || Object])
], AccountResolver);

var _a;
//# sourceMappingURL=account-resolver.service.js.map

/***/ }),

/***/ "../../../../../src/app/account/account.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/account/account.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row\">\n\n  <div class=\"col-sm-6\">\n    <div class=\"panel panel-default\">\n\n      <div class=\"panel-heading\">\n        <h2 class=\"panel-title\">Account Details</h2>\n      </div>\n\n      <div class=\"panel-body\">\n        <div class=\"form form-horizontal\">\n          <div class=\"form-group\">\n            <label class=\"control-label col-sm-4\">Username:</label>\n            <div class=\"col-sm-8\">\n              <p class=\"form-control-static\">{{ account.username }}</p>\n            </div>\n          </div>\n\n          <div class=\"form-group\">\n            <label class=\"control-label col-sm-4\">Email:</label>\n            <div class=\"col-sm-8\">\n              <p class=\"form-control-static\">{{ account.username }}</p>\n            </div>\n          </div>\n\n          <div class=\"form-group\">\n            <div class=\"col-sm-offset-4 col-sm-8 \">\n              <button type=\"link\" class=\"btn btn-primary\" routerLink=\"/login\">Logout</button>\n            </div>\n          </div>\n\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-sm-6\">\n\n    <div class=\"panel panel-default\">\n        \n      <div class=\"panel-heading\">\n        <h2 class=\"panel-title\">Devices</h2>\n      </div>\n    \n      <table class=\"table\" *ngIf=\"account.devices.length\">\n        <thead>\n          <tr>\n            <th>Token</th>\n            <th>Plaform</th>\n            <th></th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let device of account.devices\">\n            <td [title]=\"device.token\">{{ device.token | slice:0:9 }} <b *ngIf=\"device_token==device.token\">(this device)</b></td>\n            <td>{{ device.platform }}</td>\n            <td><i class=\"fa fa-angel-right\"></i></td>\n          </tr>\n        </tbody>\n      </table>\n      <div class=\"panel-body\" *ngIf=\"!account.devices.length\">\n        <p class=\"text-muted\">No records</p>\n      </div> \n      <div class=\"panel-footer\">\n        <button type=\"btn\" class=\"btn btn-block btn-primary\" (click)=\"subscribe()\" *ngIf=\"!subscribed\">Subscribe this device</button>\n        <button type=\"btn\" class=\"btn btn-block btn-danger\" (click)=\"unsubscribe()\" *ngIf=\"subscribed\">Unsubscribe this device</button>\n      </div>  \n    </div>\n  </div>\n</div>\n\n\n<form #sendForm=\"ngForm\" (submit)=\"publish()\" novalidate>\n  <div class=\"panel panel-default\">\n\n    <div class=\"panel-heading\">\n      <h2 class=\"panel-title\">Publish a message</h2>\n    </div>\n\n    <div class=\"panel-body\">\n\n      <div class=\"form-horizontal\" *ngIf=\"recipients && recipients.length\">\n        <div class=\"form-group\">\n          <label class=\"control-label col-sm-2\">To:</label>\n          <div class=\"col-sm-10\">\n            <select class=\"form-control\" name=\"to\" [(ngModel)]=\"message.to\" required >\n              <option *ngFor=\"let acct of recipients\" [value]=\"acct.notification_key\">{{ acct.username }}</option>\n            </select>\n          </div>\n        </div>\n\n        <div class=\"form-group\">\n          <label class=\"control-label col-sm-2\">Title:</label>\n          <div class=\"col-sm-10\">\n            <input type=\"text\" class=\"form-control\" name=\"title\" [(ngModel)]=\"message.title\" placeholder=\"Title of notification\" required>\n          </div>\n        </div>\n\n        <div class=\"form-group\">\n          <label class=\"control-label col-sm-2\">Body:</label>\n          <div class=\"col-sm-10\">\n              <textarea rows=10 cols=30 class=\"form-control\" name=\"body\" [(ngModel)]=\"message.body\" placeholder=\"Content of notification\" required></textarea>\n          </div>\n        </div>\n\n        <div class=\"form-group\">\n          <div class=\"col-sm-10 col-sm-offset-2\">\n            <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!sendForm.valid\">Submit</button>\n          </div>\n        </div>\n      </div>\n\n      <p class=\"text-muted\" *ngIf=\"!recipients || recipients.length==0\">No other user is subscribed</p>\n\n    </div>\n  </div>\n</form>\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/account/account.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__demo_service__ = __webpack_require__("../../../../../src/app/demo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fcm_service__ = __webpack_require__("../../../../../src/app/fcm.service.ts");
/* unused harmony export Message */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Message = (function () {
    function Message() {
    }
    return Message;
}());

var AccountComponent = (function () {
    function AccountComponent(route, fs, ds) {
        this.route = route;
        this.fs = fs;
        this.ds = ds;
    }
    AccountComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.message = new Message();
        this.route.data.subscribe(function (data) {
            _this.account = data.account;
        });
        this.route.params.subscribe(function (params) {
            _this.auth_token = params['token'];
        });
        this.fs.currentToken.subscribe(function (token) {
            _this.device_token = token;
            _this.subscribed = _this.account.devices.filter(function (d) { return d.token == _this.device_token; }).length > 0;
        });
        this.ds.list_accounts().then(function (accts) {
            _this.recipients = accts.filter(function (acct) { return acct.notification_key && acct.uuid != _this.account.uuid; });
        });
    };
    AccountComponent.prototype.subscribe = function () {
        var _this = this;
        return this.fs.subscribe(this.auth_token).then(function () { return _this.refresh(); });
    };
    AccountComponent.prototype.unsubscribe = function () {
        var _this = this;
        return this.fs.unsubscribe(this.auth_token).then(function () { return _this.refresh(); });
    };
    AccountComponent.prototype.refresh = function () {
        var _this = this;
        return this.ds.retrieve(this.account.uuid).then(function (acct) {
            _this.account = acct;
            _this.subscribed = _this.account.devices.filter(function (d) { return d.token == _this.device_token; }).length > 0;
        })
            .catch(function (error) {
            console.log(error.message || error);
        });
    };
    AccountComponent.prototype.publish = function () {
        var _this = this;
        return this.fs.publish(this.message, this.auth_token).then(function (res) {
            _this.message = new Message();
            console.log('Message has been published...');
        });
    };
    return AccountComponent;
}());
AccountComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-account',
        template: __webpack_require__("../../../../../src/app/account/account.component.html"),
        styles: [__webpack_require__("../../../../../src/app/account/account.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__fcm_service__["a" /* FcmService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__fcm_service__["a" /* FcmService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__demo_service__["a" /* DemoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__demo_service__["a" /* DemoService */]) === "function" && _c || Object])
], AccountComponent);

var _a, _b, _c;
//# sourceMappingURL=account.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin/admin.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/admin.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  admin works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/admin/admin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdminComponent = (function () {
    function AdminComponent() {
    }
    AdminComponent.prototype.ngOnInit = function () {
    };
    return AdminComponent;
}());
AdminComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-admin',
        template: __webpack_require__("../../../../../src/app/admin/admin.component.html"),
        styles: [__webpack_require__("../../../../../src/app/admin/admin.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AdminComponent);

//# sourceMappingURL=admin.component.js.map

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__admin_admin_component__ = __webpack_require__("../../../../../src/app/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__register_register_component__ = __webpack_require__("../../../../../src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__account_account_component__ = __webpack_require__("../../../../../src/app/account/account.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__page_not_found_component__ = __webpack_require__("../../../../../src/app/page-not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__account_account_resolver_service__ = __webpack_require__("../../../../../src/app/account/account-resolver.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */]
    },
    {
        path: 'register',
        component: __WEBPACK_IMPORTED_MODULE_4__register_register_component__["a" /* RegisterComponent */]
    },
    {
        path: 'accounts/:account_id',
        component: __WEBPACK_IMPORTED_MODULE_5__account_account_component__["a" /* AccountComponent */],
        resolve: {
            account: __WEBPACK_IMPORTED_MODULE_7__account_account_resolver_service__["a" /* AccountResolver */]
        }
    },
    {
        path: 'admin',
        component: __WEBPACK_IMPORTED_MODULE_3__admin_admin_component__["a" /* AdminComponent */]
    },
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: '**',
        component: __WEBPACK_IMPORTED_MODULE_6__page_not_found_component__["a" /* PageNotFoundComponent */]
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n:host >>> form > .panel-sm {\r\n    max-width: 500px;\r\n    margin-left: auto; \r\n    margin-right: auto;\r\n}\r\n\r\n:host >>> label.required:before {\r\n    content: '*';\r\n    color: red;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<!-- <div style=\"text-align:center\">\n  <h1>\n    Welcome to {{title}}!!\n  </h1>\n  <img width=\"300\" src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOS4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCAyNTAgMjUwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNTAgMjUwOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPg0KCS5zdDB7ZmlsbDojREQwMDMxO30NCgkuc3Qxe2ZpbGw6I0MzMDAyRjt9DQoJLnN0MntmaWxsOiNGRkZGRkY7fQ0KPC9zdHlsZT4NCjxnPg0KCTxwb2x5Z29uIGNsYXNzPSJzdDAiIHBvaW50cz0iMTI1LDMwIDEyNSwzMCAxMjUsMzAgMzEuOSw2My4yIDQ2LjEsMTg2LjMgMTI1LDIzMCAxMjUsMjMwIDEyNSwyMzAgMjAzLjksMTg2LjMgMjE4LjEsNjMuMiAJIi8+DQoJPHBvbHlnb24gY2xhc3M9InN0MSIgcG9pbnRzPSIxMjUsMzAgMTI1LDUyLjIgMTI1LDUyLjEgMTI1LDE1My40IDEyNSwxNTMuNCAxMjUsMjMwIDEyNSwyMzAgMjAzLjksMTg2LjMgMjE4LjEsNjMuMiAxMjUsMzAgCSIvPg0KCTxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik0xMjUsNTIuMUw2Ni44LDE4Mi42aDBoMjEuN2gwbDExLjctMjkuMmg0OS40bDExLjcsMjkuMmgwaDIxLjdoMEwxMjUsNTIuMUwxMjUsNTIuMUwxMjUsNTIuMUwxMjUsNTIuMQ0KCQlMMTI1LDUyLjF6IE0xNDIsMTM1LjRIMTA4bDE3LTQwLjlMMTQyLDEzNS40eiIvPg0KPC9nPg0KPC9zdmc+DQo=\">\n</div>\n<h2>Here are some links to help you start: </h2>\n<ul>\n  <li>\n    <h2><a target=\"_blank\" href=\"https://angular.io/tutorial\">Tour of Heroes</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" href=\"https://github.com/angular/angular-cli/wiki\">CLI Documentation</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" href=\"http://angularjs.blogspot.ca/\">Angular blog</a></h2>\n  </li>\n</ul> -->\n\n<div class=\"container\">\n  \n  <h1 class=\"page-header\">Demo</h1>\n  <router-outlet></router-outlet>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__register_register_component__ = __webpack_require__("../../../../../src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__admin_admin_component__ = __webpack_require__("../../../../../src/app/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__account_account_component__ = __webpack_require__("../../../../../src/app/account/account.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__demo_service__ = __webpack_require__("../../../../../src/app/demo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__fcm_service__ = __webpack_require__("../../../../../src/app/fcm.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__account_account_resolver_service__ = __webpack_require__("../../../../../src/app/account/account-resolver.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__page_not_found_component__ = __webpack_require__("../../../../../src/app/page-not-found.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_8__register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_9__admin_admin_component__["a" /* AdminComponent */],
            __WEBPACK_IMPORTED_MODULE_10__account_account_component__["a" /* AccountComponent */],
            __WEBPACK_IMPORTED_MODULE_15__page_not_found_component__["a" /* PageNotFoundComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_13__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_4_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].firebase)
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_11__demo_service__["a" /* DemoService */], __WEBPACK_IMPORTED_MODULE_14__account_account_resolver_service__["a" /* AccountResolver */], __WEBPACK_IMPORTED_MODULE_12__fcm_service__["a" /* FcmService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/demo.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* unused harmony export Device */
/* unused harmony export Account */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DemoService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Device = (function () {
    function Device() {
    }
    return Device;
}());

var Account = (function () {
    function Account() {
    }
    return Account;
}());

var DemoService = (function () {
    //private acct:Account;
    function DemoService(http) {
        this.http = http;
        this.baseUrl = '/api'; //'http://127.0.0.1:8000/api'
    }
    DemoService.prototype.retrieve = function (account_id) {
        return this.http.get(this.baseUrl + '/accounts/' + account_id)
            .toPromise()
            .then(function (response) {
            return response.json();
        })
            .catch(this.handleError);
    };
    DemoService.prototype.list_accounts = function () {
        return this.http.get(this.baseUrl + '/accounts/')
            .toPromise()
            .then(function (response) {
            return response.json();
        })
            .catch(this.handleError);
    };
    DemoService.prototype.login = function (params) {
        return this.http.post(this.baseUrl + '/accounts/login/', params)
            .toPromise()
            .then(function (response) {
            return response.json();
        })
            .catch(this.handleError);
    };
    DemoService.prototype.register = function (params) {
        return this.http.post(this.baseUrl + '/accounts/register/', params)
            .toPromise()
            .then(function (response) {
            return response.json();
        })
            .catch(this.handleError);
    };
    DemoService.prototype.handleError = function (error) {
        //console.error('Error >>> ', error);
        var errors = error.json();
        var errMsg = Object.keys(errors).map(function (k) { return (k == 'non_field_errors' ? '' : k.toUpperCase() + ': ') + errors[k]; }).join('\n');
        return Promise.reject(errMsg);
    };
    return DemoService;
}());
DemoService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], DemoService);

var _a;
//# sourceMappingURL=demo.service.js.map

/***/ }),

/***/ "../../../../../src/app/fcm.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__("../../../../firebase/firebase-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject__);
/* unused harmony export Notification */
/* unused harmony export Payload */
/* unused harmony export MessageData */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FcmService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var Notification = (function () {
    function Notification() {
    }
    return Notification;
}());

var Payload = (function () {
    function Payload() {
    }
    return Payload;
}());

var MessageData = (function () {
    function MessageData() {
    }
    return MessageData;
}());

var FcmService = (function () {
    function FcmService(http, _firebaseApp) {
        var _this = this;
        this.http = http;
        this._firebaseApp = _firebaseApp;
        this.baseUrl = '/api'; //'http://127.0.0.1:8000/api';
        this.currentToken = new __WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject__["BehaviorSubject"]('');
        navigator.serviceWorker.register('./sw.js')
            .then(function (registration) {
            _this._messaging = __WEBPACK_IMPORTED_MODULE_3_firebase__["messaging"](_this._firebaseApp);
            _this._messaging.useServiceWorker(registration);
            _this._messaging.requestPermission()
                .then(function (result) {
                _this._messaging.getToken()
                    .then(function (currentToken) {
                    _this.currentToken.next(currentToken);
                })
                    .catch(_this.handleError);
            })
                .catch(function (error) {
                alert(error.message || error);
            });
            _this._messaging.onMessage(function (payload) {
                var notification = JSON.parse(payload.data.notification);
                window.alert("Message received >>> " + notification.title + ':' + notification.body);
            });
        });
    }
    FcmService.prototype.subscribe = function (auth_token) {
        var payload = { token: this.currentToken.getValue(), platform: 'Chrome' }, headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Authorization': 'token ' + auth_token });
        return this.http.post(this.baseUrl + '/accounts/subscribe/', payload, { headers: headers })
            .toPromise()
            .then(function (response) {
            console.log('Token has been submitted');
        })
            .catch(this.handleError);
    };
    FcmService.prototype.unsubscribe = function (auth_token) {
        var payload = { token: this.currentToken.getValue(), platform: 'Chrome' }, headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Authorization': 'token ' + auth_token });
        return this.http.post(this.baseUrl + '/accounts/unsubscribe/', payload, { headers: headers })
            .toPromise()
            .then(function (response) {
            console.log('Token has been removed');
        })
            .catch(this.handleError);
    };
    FcmService.prototype.publish = function (payload, auth_token) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Authorization': 'token ' + auth_token });
        console.log(payload);
        return this.http.post(this.baseUrl + '/accounts/publish/', payload, { headers: headers })
            .toPromise()
            .then(function (response) {
            console.log('Message has been published');
        })
            .catch(this.handleError);
    };
    FcmService.prototype.handleError = function (error) {
        console.log('Error >>> ', error);
        var errors = error.json();
        var errMsg = Object.keys(errors).map(function (k) { return (k == 'non_field_errors' ? '' : k.toUpperCase() + ': ') + errors[k]; }).join('\n');
        return Promise.reject(errMsg);
    };
    return FcmService;
}());
FcmService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2_angularfire2__["b" /* FirebaseApp */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object, typeof (_b = ((_c = (typeof __WEBPACK_IMPORTED_MODULE_3_firebase__ !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_firebase__).app) && _c).App) === "function" && _b || Object])
], FcmService);

var _a, _c, _b;
//# sourceMappingURL=fcm.service.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "\n<form (submit)=\"login()\" #loginForm>\n\n  <div class=\"panel panel-default panel-sm\">\n\n    <div class=\"panel-heading\">\n      <h2 class=\"panel-title\">Login</h2>\n    </div>\n\n    <div class=\"panel-body\">\n      <div class=\"form-horizontal\">\n        <div class=\"form-group\">\n          <label class=\"col-sm-3 control-label required\">\n            Username:\n          </label>\n          <div class=\"col-sm-9\">\n            <input type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)]=\"username\" required>\n          </div>\n        </div>\n\n        <div class=\"form-group\">\n            <label class=\"col-sm-3 control-label required\">\n              Password:\n            </label>\n            <div class=\"col-sm-9\">\n              <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"password\" required>\n            </div>\n          </div>\n\n          <div class=\"form-group\">\n            <div class=\"col-sm-offset-3 col-sm-9\">  \n              <button type=\"submit\" class=\"btn btn-primary\">Login</button>\n              <button type=\"link\" class=\"btn btn-link\" routerLink=\"/register\">Register an account</button>\n            </div>\n          </div>\n      </div>\n      \n    </div>\n    \n\n  </div>\n</form>\n\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__demo_service__ = __webpack_require__("../../../../../src/app/demo.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(demoService, router) {
        this.demoService = demoService;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.demoService.login({ username: this.username, password: this.password })
            .then(function (acct) {
            _this.router.navigate(['/accounts', acct.uuid, { 'token': acct.auth_token }]);
            alert('Welcome back ' + acct.username + '!');
        })
            .catch(function (error) {
            window.alert(error);
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__demo_service__["a" /* DemoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__demo_service__["a" /* DemoService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object])
], LoginComponent);

var _a, _b;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/page-not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    return PageNotFoundComponent;
}());
PageNotFoundComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-page-not-found',
        template: "\n    <p>\n      Page is not found. \n    </p>\n  ",
        styles: []
    }),
    __metadata("design:paramtypes", [])
], PageNotFoundComponent);

//# sourceMappingURL=page-not-found.component.js.map

/***/ }),

/***/ "../../../../../src/app/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "\n<form (submit)=\"register()\" #registerForm>\n  \n    <div class=\"panel panel-default panel-sm\">\n  \n      <div class=\"panel-heading\">\n        <h2 class=\"panel-title\">Register</h2>\n      </div>\n  \n      <div class=\"panel-body\">\n        <div class=\"form-horizontal\">\n          <div class=\"form-group\">\n            <label class=\"col-sm-3 control-label required\">\n              Username:\n            </label>\n            <div class=\"col-sm-9\">\n              <input type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)]=\"username\" required>\n            </div>\n          </div>\n  \n          <div class=\"form-group\">\n            <label class=\"col-sm-3 control-label required\">\n              Password:\n            </label>\n            <div class=\"col-sm-9\">\n              <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"password\" required>\n            </div>\n          </div>\n\n          <div class=\"form-group\">\n            <label class=\"col-sm-3 control-label required\">\n              Email:\n            </label>\n            <div class=\"col-sm-9\">\n              <input type=\"email\" class=\"form-control\" name=\"email\" [(ngModel)]=\"email\" required>\n            </div>\n          </div>\n\n\n\n          <div class=\"form-group\">\n            <div class=\"col-sm-offset-3 col-sm-9\">  \n              <button type=\"submit\" class=\"btn btn-primary\">Register</button>\n              <button type=\"link\" class=\"btn btn-link\" routerLink=\"/login\">Sign in as an existing user</button>\n            </div>\n          </div>\n        </div>\n        \n      </div>\n      \n  \n    </div>\n  </form>\n  \n  \n  \n  \n  "

/***/ }),

/***/ "../../../../../src/app/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__demo_service__ = __webpack_require__("../../../../../src/app/demo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterComponent = (function () {
    function RegisterComponent(demoService, router) {
        this.demoService = demoService;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        this.demoService.register({
            username: this.username,
            password: this.password,
            email: this.email
        }).then(function (acct) {
            alert('Welcome aboard ' + acct.username + '!');
            _this.router.navigate(['/accounts', acct.uuid, { 'token': acct.auth_token }]);
        }).catch(function (error) {
            alert(error);
        });
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-register',
        template: __webpack_require__("../../../../../src/app/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/register/register.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__demo_service__["a" /* DemoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__demo_service__["a" /* DemoService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _b || Object])
], RegisterComponent);

var _a, _b;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyDNzAyWj4hqvwDjjKsNxeQO25nyJpczFxM",
        authDomain: "myproject-b53cc.firebaseapp.com",
        databaseURL: "https://myproject-b53cc.firebaseio.com",
        projectId: "myproject-b53cc",
        storageBucket: "",
        messagingSenderId: "85893849466"
    }
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map