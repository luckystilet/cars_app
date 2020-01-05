(function(t){function e(e){for(var r,s,i=e[0],l=e[1],c=e[2],u=0,p=[];u<i.length;u++)s=i[u],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&p.push(n[s][0]),n[s]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);d&&d(e);while(p.length)p.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],r=!0,i=1;i<a.length;i++){var l=a[i];0!==n[l]&&(r=!1)}r&&(o.splice(e--,1),t=s(s.s=a[0]))}return t}var r={},n={app:0},o=[];function s(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=r,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(a,r,function(e){return t[e]}.bind(null,r));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var d=l;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("4de4"),a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container pt-5",attrs:{id:"app"}},[t._m(0),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-4"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"search"}},[t._v("Find your car")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticClass:"form-control",attrs:{type:"text",id:"search",placeholder:"name, model..."},domProps:{value:t.search},on:{input:[function(e){e.target.composing||(t.search=e.target.value)},t.updateSelectedCar]}})]),a("hr"),a("ul",{staticClass:"list-group"},t._l(t.filteredCars,(function(e,r){return a("li",{key:r,staticClass:"list-group-item list-group-item-action pointer",class:{active:t.selectedCarIndex===r},on:{click:function(e){return t.selectCar(r)}}},[t._v(" "+t._s(e.name)+" - "+t._s(e.model)+" ")])})),0)]),a("div",{staticClass:"col-md-8 pt-4"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-7"},[a("h2",[t._v(t._s(t.car.name))]),a("img",{staticClass:"rounded detailed-car-image",attrs:{src:t.car.image,alt:t.car.name+"-"+t.car.model}})]),a("div",{staticClass:"col-md-5 pt-2"},[a("h5",[t._v("Car details")]),a("ul",[a("li",[t._v("Model - "),a("strong",[t._v(t._s(t.car.model))])]),a("li",[t._v("Year - "),a("strong",[t._v(t._s(t.car.year))])]),a("li",[t._v("Owner - "),a("strong",[t._v(t._s(t.car.owner))])])]),a("div",{staticClass:"phone-block"},[a("transition",{attrs:{name:"phone"}},[t.show?a("p",[t._v(t._s(t.car.phone))]):t._e()])],1),a("button",{staticClass:"btn btn-outline-success mr-3 btn-show-hide-phone",domProps:{textContent:t._s(t.phoneBtnText)},on:{click:function(e){t.show=!t.show}}}),a("button",{staticClass:"btn btn-primary",on:{click:function(e){t.modalVisibility=!0}}},[t._v("Buy")])])])])]),t.logs.length?a("div",{staticClass:"row pt-3"},[a("div",{staticClass:"col-md-12"},[a("ul",{staticClass:"list-group"},t._l(t.logs,(function(e){return a("li",{staticClass:"list-group-item",class:{"list-group-item-secondary":"cnl"===e.type,"list-group-item-success":"ok"===e.type}},[t._v(" "+t._s(e.text)+" "+t._s(t._f("date")(e.date))+" ")])})),0)])]):t._e(),a("transition",{attrs:{name:"modal"}},[t.modalVisibility?a("div",{staticClass:"modal fade show",attrs:{id:"exampleModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header"},[a("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[t._v("Do you want buy this car?")]),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"},on:{click:function(e){t.modalVisibility=!1}}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]),a("div",{staticClass:"modal-body"},[a("h5",[t._v("Current car - "),a("strong",[t._v(t._s(t.car.name))])]),a("ul",[a("li",[t._v("Model - "),a("strong",[t._v(t._s(t.car.model))])]),a("li",[t._v("Year - "),a("strong",[t._v(t._s(t.car.year))])]),a("li",[t._v("Owner - "),a("strong",[t._v(t._s(t.car.owner))])])])]),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"},on:{click:t.cancelOrder}},[t._v(" Cancel ")]),a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.newOrder}},[t._v(" Buy ")])])])])]):t._e()]),a("transition",{attrs:{name:"fade"}},[t.modalVisibility?a("div",{staticClass:"modal-backdrop fade show"}):t._e()])],1)},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row mb-3"},[a("div",{staticClass:"col"},[a("h1",[t._v("Cars Application")])])])}],s=(a("a4d3"),a("e01a"),a("d28b"),a("99af"),a("c975"),a("b0c0"),a("2b19"),a("d3b7"),a("ac1f"),a("3ca3"),a("841c"),a("ddb0"),a("3835")),i=function(t,e,a,r,n,o){return{name:t,model:e,owner:a,year:r,phone:n,image:o}},l=function(t,e){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:new Date;return{text:t,type:e,date:a}},c=[i("Volkswagen","model_1","owner_1","year_1","phone_1","img/volkswagen.jpg"),i("Chevrolet","model_2","owner_2","year_2","phone_2","img/chevrolet.jpg"),i("Ford","model_3","owner_3","year_3","phone_3","img/ford.jpg"),i("Honda","model_4","owner_4","year_4","phone_4","img/honda.jpg"),i("Nissan","model_5","owner_5","year_5","phone_5","img/nissan.jpg"),i("Peugeot","model_6","owner_6","year_6","phone_6","img/peugeot.jpg"),i("Citroen","model_7","owner_7","year_7","phone_7","img/citroen.jpg"),i("Toyota","model_8","owner_8","year_8","phone_8","img/toyota.jpg")],d={name:"app",data:function(){return{cars:c,car:c[0],logs:[],selectedCarIndex:0,show:!1,search:"",modalVisibility:!1}},methods:{selectCar:function(t){this.car=this.cars[t],this.selectedCarIndex=t},updateSelectedCar:function(){var t=this,e=this.filteredCars.filter((function(e){return Object.is(e,t.car)}));e.length||(this.car=this.filteredCars[0],this.selectedCarIndex=0);var a=!0,r=!1,n=void 0;try{for(var o,i=this.filteredCars.entries()[Symbol.iterator]();!(a=(o=i.next()).done);a=!0){var l=Object(s["a"])(o.value,2),c=l[0],d=l[1];Object.is(d,this.car)&&(this.selectedCarIndex=c)}}catch(u){r=!0,n=u}finally{try{a||null==i.return||i.return()}finally{if(r)throw n}}},newOrder:function(){this.modalVisibility=!1,this.logs.push(l("Success order: ".concat(this.car.name," - ").concat(this.car.model),"ok"))},cancelOrder:function(){this.modalVisibility=!1,this.logs.push(l("Canceled order: ".concat(this.car.name," - ").concat(this.car.model),"cnl"))}},computed:{phoneBtnText:function(){return this.show?"Hide Phone":"Show Phone"},filteredCars:function(){var t=this,e=this.cars.filter((function(e){return e.name.indexOf(t.search)>-1||e.model.indexOf(t.search)>-1}));return e}},components:{}},u=d,p=a("2877"),m=Object(p["a"])(u,n,o,!1,null,null,null),h=m.exports;function _(t){return t.toLocaleString()}r["a"].config.productionTip=!1,r["a"].filter("date",_),new r["a"]({render:function(t){return t(h)}}).$mount("#app")}});
//# sourceMappingURL=app.c786d77f.js.map