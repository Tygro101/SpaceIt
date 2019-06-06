(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./privacy-policy/privacy-policy.component */ "./src/app/privacy-policy/privacy-policy.component.ts");
/* harmony import */ var _terms_and_conditions_terms_and_conditions_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./terms-and-conditions/terms-and-conditions.component */ "./src/app/terms-and-conditions/terms-and-conditions.component.ts");
/* harmony import */ var _main_view_main_view_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./main-view/main-view.component */ "./src/app/main-view/main-view.component.ts");







var routes = [
    {
        path: '',
        component: _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        children: [
            { path: 'main', component: _main_view_main_view_component__WEBPACK_IMPORTED_MODULE_6__["MainViewComponent"] },
            { path: 'privacy-policy', component: _privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_4__["PrivacyPolicyComponent"] },
            { path: 'terms-and-conditions', component: _terms_and_conditions_terms_and_conditions_component__WEBPACK_IMPORTED_MODULE_5__["TermsAndConditionsComponent"] }
        ]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div #container class=\"container\">\r\n  <router-outlet></router-outlet>\r\n  \r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  background-color: #272727;\n  width: 100%;\n  height: 100%;\n  font-family: 'Baloo Da', cursive; }\n  .container .dot {\n    height: 10px;\n    width: 10px;\n    background-color: #ffffff;\n    border-radius: 50%;\n    display: inline-block; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxSYW5cXERvY3VtZW50c1xcR2l0SHViXFxTcGFjZUl0L3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSx5QkFBeUI7RUFDekIsV0FBVztFQUNYLFlBQVk7RUFDWixnQ0FBZ0MsRUFBQTtFQUpwQztJQU9RLFlBQVk7SUFDWixXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixxQkFBcUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuLmNvbnRhaW5lcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNzI3Mjc7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGZvbnQtZmFtaWx5OiAnQmFsb28gRGEnLCBjdXJzaXZlO1xyXG5cclxuICAgIC5kb3Qge1xyXG4gICAgICAgIGhlaWdodDogMTBweDtcclxuICAgICAgICB3aWR0aDogMTBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIH1cclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent(renderer) {
        this.renderer = renderer;
    }
    AppComponent.prototype.ngOnInit = function () {
        var height = window.innerHeight + "px";
        this.renderer.setStyle(this.component.nativeElement, "height", height);
        ;
    };
    AppComponent.prototype.onResize = function (event) {
        var height = event.target.innerHeight + "px";
        this.renderer.setStyle(this.component.nativeElement, "height", height);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('container'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AppComponent.prototype, "component", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], AppComponent.prototype, "onResize", null);
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./privacy-policy/privacy-policy.component */ "./src/app/privacy-policy/privacy-policy.component.ts");
/* harmony import */ var _tag_tag_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tag/tag.component */ "./src/app/tag/tag.component.ts");
/* harmony import */ var _terms_and_conditions_terms_and_conditions_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./terms-and-conditions/terms-and-conditions.component */ "./src/app/terms-and-conditions/terms-and-conditions.component.ts");
/* harmony import */ var _main_view_main_view_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./main-view/main-view.component */ "./src/app/main-view/main-view.component.ts");









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_5__["PrivacyPolicyComponent"],
                _tag_tag_component__WEBPACK_IMPORTED_MODULE_6__["TagComponent"],
                _terms_and_conditions_terms_and_conditions_component__WEBPACK_IMPORTED_MODULE_7__["TermsAndConditionsComponent"],
                _main_view_main_view_component__WEBPACK_IMPORTED_MODULE_8__["MainViewComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/main-view/main-view.component.html":
/*!****************************************************!*\
  !*** ./src/app/main-view/main-view.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  main-view works!\n</p>\n"

/***/ }),

/***/ "./src/app/main-view/main-view.component.scss":
/*!****************************************************!*\
  !*** ./src/app/main-view/main-view.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4tdmlldy9tYWluLXZpZXcuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/main-view/main-view.component.ts":
/*!**************************************************!*\
  !*** ./src/app/main-view/main-view.component.ts ***!
  \**************************************************/
/*! exports provided: MainViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainViewComponent", function() { return MainViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MainViewComponent = /** @class */ (function () {
    function MainViewComponent() {
    }
    MainViewComponent.prototype.ngOnInit = function () {
    };
    MainViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main-view',
            template: __webpack_require__(/*! ./main-view.component.html */ "./src/app/main-view/main-view.component.html"),
            styles: [__webpack_require__(/*! ./main-view.component.scss */ "./src/app/main-view/main-view.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MainViewComponent);
    return MainViewComponent;
}());



/***/ }),

/***/ "./src/app/models/tag-data-holder.ts":
/*!*******************************************!*\
  !*** ./src/app/models/tag-data-holder.ts ***!
  \*******************************************/
/*! exports provided: TagType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagType", function() { return TagType; });
var TagType;
(function (TagType) {
    TagType[TagType["TITLE"] = 0] = "TITLE";
    TagType[TagType["SUB_TITLE"] = 1] = "SUB_TITLE";
})(TagType || (TagType = {}));


/***/ }),

/***/ "./src/app/privacy-policy/privacy-policy.component.html":
/*!**************************************************************!*\
  !*** ./src/app/privacy-policy/privacy-policy.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"rout-container\">\r\n    <div class=\"header\">Privacy And Policy</div>\r\n    <div class=\"tags\">\r\n            <tag-component [tagDataHolder]='data' *ngFor='let data of tags'></tag-component>\r\n    </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/privacy-policy/privacy-policy.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/privacy-policy/privacy-policy.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ByaXZhY3ktcG9saWN5L3ByaXZhY3ktcG9saWN5LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/privacy-policy/privacy-policy.component.ts":
/*!************************************************************!*\
  !*** ./src/app/privacy-policy/privacy-policy.component.ts ***!
  \************************************************************/
/*! exports provided: PrivacyPolicyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivacyPolicyComponent", function() { return PrivacyPolicyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_tag_data_holder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/tag-data-holder */ "./src/app/models/tag-data-holder.ts");



var PrivacyPolicyComponent = /** @class */ (function () {
    function PrivacyPolicyComponent() {
        this.initData();
    }
    PrivacyPolicyComponent.prototype.ngOnInit = function () {
    };
    PrivacyPolicyComponent.prototype.initData = function () {
        this.tags = [
            {
                tag: "Introduction",
                type: _models_tag_data_holder__WEBPACK_IMPORTED_MODULE_2__["TagType"].TITLE,
                subTags: [
                    {
                        tag: "SpaceIt application privacy policy, we will explain how we will treat your personal information.",
                        subTags: [],
                        type: _models_tag_data_holder__WEBPACK_IMPORTED_MODULE_2__["TagType"].SUB_TITLE
                    }
                ]
            },
            {
                tag: "Collection personal information",
                type: _models_tag_data_holder__WEBPACK_IMPORTED_MODULE_2__["TagType"].TITLE,
                subTags: [
                    {
                        tag: "We are currently using your google play information for this game, high score etc...",
                        subTags: [],
                        type: _models_tag_data_holder__WEBPACK_IMPORTED_MODULE_2__["TagType"].SUB_TITLE
                    },
                ]
            },
            {
                tag: "International data transfers",
                type: _models_tag_data_holder__WEBPACK_IMPORTED_MODULE_2__["TagType"].TITLE,
                subTags: [
                    {
                        tag: "Your score will be shared between all the countries the application supports.",
                        subTags: [],
                        type: _models_tag_data_holder__WEBPACK_IMPORTED_MODULE_2__["TagType"].SUB_TITLE
                    },
                ]
            },
            {
                tag: "Retaining personal information",
                type: _models_tag_data_holder__WEBPACK_IMPORTED_MODULE_2__["TagType"].TITLE,
                subTags: [
                    {
                        tag: "The user score will be stored in the user device as long as the application exists on the user device.",
                        subTags: [],
                        type: _models_tag_data_holder__WEBPACK_IMPORTED_MODULE_2__["TagType"].SUB_TITLE
                    },
                ]
            },
            {
                tag: "Security of personal information",
                type: _models_tag_data_holder__WEBPACK_IMPORTED_MODULE_2__["TagType"].TITLE,
                subTags: [
                    {
                        tag: "We will not take responsibility for any loss of any information that the application used.",
                        subTags: [],
                        type: _models_tag_data_holder__WEBPACK_IMPORTED_MODULE_2__["TagType"].SUB_TITLE
                    },
                    {
                        tag: "All the information that has been sent or stored is by user's responsibility only, We will not take responsibility.",
                        subTags: [],
                        type: _models_tag_data_holder__WEBPACK_IMPORTED_MODULE_2__["TagType"].SUB_TITLE
                    },
                    {
                        tag: "User is responsible for keeping the information save.",
                        subTags: [],
                        type: _models_tag_data_holder__WEBPACK_IMPORTED_MODULE_2__["TagType"].SUB_TITLE
                    },
                ]
            },
            {
                tag: "Amendments",
                type: _models_tag_data_holder__WEBPACK_IMPORTED_MODULE_2__["TagType"].TITLE,
                subTags: [
                    {
                        tag: "We may update this policy from time to time by publishing a new version.",
                        subTags: [],
                        type: _models_tag_data_holder__WEBPACK_IMPORTED_MODULE_2__["TagType"].SUB_TITLE
                    },
                    {
                        tag: "You should check this page occasionally to ensure you are happy with any changes to this policy.",
                        subTags: [],
                        type: _models_tag_data_holder__WEBPACK_IMPORTED_MODULE_2__["TagType"].SUB_TITLE
                    },
                    {
                        tag: "We may notify you of changes to this policy.",
                        subTags: [],
                        type: _models_tag_data_holder__WEBPACK_IMPORTED_MODULE_2__["TagType"].SUB_TITLE
                    },
                ]
            }
        ];
    };
    PrivacyPolicyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-privacy-policy',
            template: __webpack_require__(/*! ./privacy-policy.component.html */ "./src/app/privacy-policy/privacy-policy.component.html"),
            styles: [__webpack_require__(/*! ./privacy-policy.component.scss */ "./src/app/privacy-policy/privacy-policy.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PrivacyPolicyComponent);
    return PrivacyPolicyComponent;
}());



/***/ }),

/***/ "./src/app/tag/tag.component.html":
/*!****************************************!*\
  !*** ./src/app/tag/tag.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"tag\">\r\n  <div #text  class=\"text\">\r\n      <div class=\"sub-title\" *ngIf='!isSubTag'>{{tagDataHolder.tag}}</div>\r\n      <li *ngIf='isSubTag'>{{tagDataHolder.tag}}</li>\r\n  </div>\r\n  <tag-component [tagDataHolder]='subTagDataHolder' [isSubTag]='true' *ngFor='let subTagDataHolder of tagDataHolder.subTags'></tag-component>\r\n</div>"

/***/ }),

/***/ "./src/app/tag/tag.component.scss":
/*!****************************************!*\
  !*** ./src/app/tag/tag.component.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sub-title {\n  font-size: 20px;\n  text-decoration: underline;\n  margin-bottom: 10px; }\n\n.tag {\n  color: white; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFnL0M6XFxVc2Vyc1xcUmFuXFxEb2N1bWVudHNcXEdpdEh1YlxcU3BhY2VJdC9zcmNcXGFwcFxcdGFnXFx0YWcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFjO0VBQ2QsMEJBQTBCO0VBQzFCLG1CQUFrQixFQUFBOztBQUd0QjtFQUNJLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL3RhZy90YWcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3ViLXRpdGxle1xyXG4gICAgZm9udC1zaXplOjIwcHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgIG1hcmdpbi1ib3R0b206MTBweDtcclxufVxyXG5cclxuLnRhZ3tcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/tag/tag.component.ts":
/*!**************************************!*\
  !*** ./src/app/tag/tag.component.ts ***!
  \**************************************/
/*! exports provided: TagComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagComponent", function() { return TagComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TagComponent = /** @class */ (function () {
    function TagComponent(renderer, element) {
        this.renderer = renderer;
        this.element = element;
        this.isSubTag = false;
    }
    TagComponent.prototype.ngAfterViewInit = function () {
        if (this.isSubTag)
            this.renderer.setStyle(this.tagComponent.nativeElement, 'padding-left', '30px');
    };
    TagComponent.prototype.ngOnInit = function () {
    };
    TagComponent.prototype.addPadding = function (tagComponent) {
        if (this.isSubTag) {
            console.log(this.element);
            //this.renderer.setStyle(this.tagComponent.nativeElement, 'padding-left', '45px');
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('text'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], TagComponent.prototype, "tagComponent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], TagComponent.prototype, "isSubTag", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TagComponent.prototype, "tagDataHolder", void 0);
    TagComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'tag-component',
            template: __webpack_require__(/*! ./tag.component.html */ "./src/app/tag/tag.component.html"),
            styles: [__webpack_require__(/*! ./tag.component.scss */ "./src/app/tag/tag.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], TagComponent);
    return TagComponent;
}());



/***/ }),

/***/ "./src/app/terms-and-conditions/terms-and-conditions.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/terms-and-conditions/terms-and-conditions.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"rout-container\">\r\n    <div class=\"header\">Terms and Conditions</div>\r\n    <div class=\"Content\">{{content}}</div>\r\n    <div class=\"tags\">\r\n            <tag-component [tagDataHolder]='data' *ngFor='let data of tags'></tag-component>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/terms-and-conditions/terms-and-conditions.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/terms-and-conditions/terms-and-conditions.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rlcm1zLWFuZC1jb25kaXRpb25zL3Rlcm1zLWFuZC1jb25kaXRpb25zLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/terms-and-conditions/terms-and-conditions.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/terms-and-conditions/terms-and-conditions.component.ts ***!
  \************************************************************************/
/*! exports provided: TermsAndConditionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsAndConditionsComponent", function() { return TermsAndConditionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_tag_data_holder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/tag-data-holder */ "./src/app/models/tag-data-holder.ts");



var TermsAndConditionsComponent = /** @class */ (function () {
    function TermsAndConditionsComponent() {
        this.content = "Please read these Terms and Conditions carefully before using SpaceIt mobile application.\nYour access to and use of the application is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all users..\nBy accessing or using the application you agree to be bound by these Terms. If you disagree with any part of the terms then you may not access SpaceIt application\n";
    }
    TermsAndConditionsComponent.prototype.ngOnInit = function () {
        this.tags = [
            {
                tag: "Content",
                type: _models_tag_data_holder__WEBPACK_IMPORTED_MODULE_2__["TagType"].TITLE,
                subTags: [
                    {
                        tag: "SpaceIt application is a game that contains a movement of the device in order to achieve score",
                        subTags: [],
                        type: _models_tag_data_holder__WEBPACK_IMPORTED_MODULE_2__["TagType"].SUB_TITLE
                    },
                ]
            },
            {
                tag: "Declarations",
                type: _models_tag_data_holder__WEBPACK_IMPORTED_MODULE_2__["TagType"].TITLE,
                subTags: [
                    {
                        tag: "SpaceIt it\u2019s mobile game based on player movement of the device, therefore the device may be damaged during the using of the app, we are not commit it will work,\n                  and SpaceIt will NOT take any responsibility for any damage to the device that caused by the use of the app.\n                  The user takes full responsibility for all that relates to the use of this app",
                        subTags: [],
                        type: _models_tag_data_holder__WEBPACK_IMPORTED_MODULE_2__["TagType"].SUB_TITLE
                    },
                ]
            },
            {
                tag: "Amendments",
                type: _models_tag_data_holder__WEBPACK_IMPORTED_MODULE_2__["TagType"].TITLE,
                subTags: [
                    {
                        tag: "We may update this policy from time to time by publishing a new version.",
                        subTags: [],
                        type: _models_tag_data_holder__WEBPACK_IMPORTED_MODULE_2__["TagType"].SUB_TITLE
                    },
                    {
                        tag: "You should check this page occasionally to ensure you are happy with any changes to this policy.",
                        subTags: [],
                        type: _models_tag_data_holder__WEBPACK_IMPORTED_MODULE_2__["TagType"].SUB_TITLE
                    },
                    {
                        tag: "We may notify you of changes to this policy.",
                        subTags: [],
                        type: _models_tag_data_holder__WEBPACK_IMPORTED_MODULE_2__["TagType"].SUB_TITLE
                    },
                ]
            }
        ];
    };
    TermsAndConditionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-terms-and-conditions',
            template: __webpack_require__(/*! ./terms-and-conditions.component.html */ "./src/app/terms-and-conditions/terms-and-conditions.component.html"),
            styles: [__webpack_require__(/*! ./terms-and-conditions.component.scss */ "./src/app/terms-and-conditions/terms-and-conditions.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TermsAndConditionsComponent);
    return TermsAndConditionsComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Ran\Documents\GitHub\SpaceIt\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map