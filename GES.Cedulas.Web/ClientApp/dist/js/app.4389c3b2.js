(function(t){function a(a){for(var r,l,s=a[0],i=a[1],c=a[2],d=0,v=[];d<s.length;d++)l=s[d],Object.prototype.hasOwnProperty.call(o,l)&&o[l]&&v.push(o[l][0]),o[l]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);u&&u(a);while(v.length)v.shift()();return n.push.apply(n,c||[]),e()}function e(){for(var t,a=0;a<n.length;a++){for(var e=n[a],r=!0,s=1;s<e.length;s++){var i=e[s];0!==o[i]&&(r=!1)}r&&(n.splice(a--,1),t=l(l.s=e[0]))}return t}var r={},o={app:0},n=[];function l(a){if(r[a])return r[a].exports;var e=r[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,l),e.l=!0,e.exports}l.m=t,l.c=r,l.d=function(t,a,e){l.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,a){if(1&a&&(t=l(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(l.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var r in t)l.d(e,r,function(a){return t[a]}.bind(null,r));return e},l.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(a,"a",a),a},l.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},l.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=a,s=s.slice();for(var c=0;c<s.length;c++)a(s[c]);var u=i;n.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"56d7":function(t,a,e){"use strict";e.r(a);e("e260"),e("e6cf"),e("cca6"),e("a79d");var r=e("2b0e"),o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-app",[e("v-app-bar",{attrs:{absolute:"",color:"grey darken-4",dark:""}},[e("v-toolbar-title",[t._v("Tarea 12")]),e("v-spacer")],1),e("br"),e("br"),e("br"),e("v-main",[e("router-view")],1),e("v-card",{attrs:{height:"60"}},[e("v-footer",{staticClass:"font-weight-medium",attrs:{absolute:"",color:"grey darken-4"}},[e("v-col",{staticClass:"text-center white--text",attrs:{cols:"12"}},[e("strong",[t._v("Oscar Iván Guerrero Esqueda")])])],1)],1)],1)},n=[],l=(e("d3b7"),e("d4ec")),s=e("bee2"),i=function(){function t(){Object(l["a"])(this,t)}return Object(s["a"])(t,[{key:"handleResponse",value:function(t){if(401===t.status){this.logout(),location.reload(!0);var a=t.data&&t.data.message;return Promise.reject(a)}return Promise.resolve(t)}},{key:"urlAPI",value:function(){return"http://10.100.66.25:8088/api/"}}]),t}(),c=new i,u={name:"App",components:{},data:function(){return{itemSalir:{text:"Salir",icon:"mdi-logout"},drawer:!1,group:null}},computed:{loggedIn:function(){return null!=this.$store.state.auth.user&&this.$store.state.auth.user},currentUser:function(){return!!this.loggedIn&&this.$store.state.auth.user},isIdle:function(){return this.loggedIn&&this.$store.state.idleVue.isIdle&&this.salir(),this.$store.state.idleVue.isIdle},dgS:function(){return c.dgSigla(this.cveArea)}},methods:{salir:function(){console.log("salir"),localStorage.removeItem("user"),location.reload(!0)}}},d=u,v=e("2877"),f=e("6544"),h=e.n(f),p=e("7496"),b=e("40dc"),m=e("b0af"),g=e("62ad"),k=e("553a"),_=e("f6c4"),C=e("2fa4"),w=e("2a7f"),x=Object(v["a"])(d,o,n,!1,null,null,null),j=x.exports;h()(x,{VApp:p["a"],VAppBar:b["a"],VCard:m["a"],VCol:g["a"],VFooter:k["a"],VMain:_["a"],VSpacer:C["a"],VToolbarTitle:w["a"]});var y=e("8c4f"),S=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"home"},[e("HelloWorld")],1)},V=[],A=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-container",[e("v-row",{staticClass:"text-center"},[e("v-col",{staticClass:"mb-4"},[e("h1",{staticClass:"display-2 font-weight-bold mb-3"},[t._v(" Tarea 12 ")])]),e("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[e("v-btn",{staticClass:"mb-4",attrs:{elevation:"2",color:"blue darken-1",raised:"",dark:"",link:"",to:{path:"/capturas"},"x-large":"",rounded:""}},[t._v(" Captura de art�culo ")]),e("br"),e("v-btn",{staticClass:"mb-4",attrs:{elevation:"2",color:"blue darken-1",raised:"",dark:"",link:"",to:{path:"/compras"},"x-large":"",rounded:""}},[t._v(" Compra de art�culo ")])],1)],1)],1)},O=[],P={name:"Inicio",data:function(){return{}}},E=P,R=e("8336"),I=e("a523"),$=e("0fd9"),H=Object(v["a"])(E,A,O,!1,null,null,null),T=H.exports;h()(H,{VBtn:R["a"],VCol:g["a"],VContainer:I["a"],VRow:$["a"]});var B={name:"Home",components:{HelloWorld:T},computed:{loggedIn:function(){return null!=this.$store.state.auth.user}}},F=B,q=Object(v["a"])(F,S,V,!1,null,null,null),D=q.exports,z=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-container",[e("v-row",{staticClass:"text-center"},[e("v-col",{staticClass:"mb-4"},[e("h1",{staticClass:"display-1 font-weight-bold mb-3",attrs:{align:"center"}},[t._v(" Capturas de Artículos ")])])],1),e("v-row",{staticClass:"text-center"},[e("v-col",{attrs:{align:"left",cols:"8"}},[e("div",{staticClass:"title row"},[t._v(" Descripción - "),e("v-text-field",{attrs:{required:"",outlined:"",dense:"",label:"Ingrese Descripción"},model:{value:t.articulo.descripcion,callback:function(a){t.$set(t.articulo,"descripcion",a)},expression:"articulo.descripcion"}})],1)])],1),e("v-row",{staticClass:"text-center"},[e("v-col",{attrs:{align:"left",cols:"8"}},[e("div",{staticClass:"title row"},[t._v(" Precio - "),e("v-text-field",{attrs:{required:"",outlined:"",dense:"",label:"Ingrese Precio"},model:{value:t.articulo.precio,callback:function(a){t.$set(t.articulo,"precio",a)},expression:"articulo.precio"}})],1)])],1),e("v-row",{staticClass:"text-center"},[e("v-col",{attrs:{align:"left",cols:"8"}},[e("div",{staticClass:"title row"},[t._v(" Cantidad - "),e("v-text-field",{attrs:{required:"",outlined:"",dense:"",label:"Cantidad"},model:{value:t.articulo.cantidad,callback:function(a){t.$set(t.articulo,"cantidad",a)},expression:"articulo.cantidad"}})],1)])],1),e("v-row",{staticClass:"text-center"},[e("v-col",{attrs:{align:"left",cols:"8"}},[e("div",{staticClass:"title row"},[t._v(" Fotografía - "),e("input",{staticClass:"form-control",attrs:{type:"file",id:"input",accept:".jpg, .jpeg"},on:{change:function(a){return t.fileChange(a.target.files)}}})])])],1),e("v-btn",{attrs:{color:"lime darken-3",dark:""},on:{click:function(a){return t.Alta()}}},[t._v(" Guardar ")]),t._v(" "+t._s(t.articulo)+" "+t._s(t.foto)+" "),e("v-snackbar",{attrs:{color:t.colorSnackbar,"multi-line":!0,timeout:5e3},model:{value:t.snackbar,callback:function(a){t.snackbar=a},expression:"snackbar"}},[t._v(" "+t._s(t.mensaje)+" "),e("v-btn",{attrs:{dark:"",text:""},on:{click:function(a){t.snackbar=!1}}},[t._v(" Cerrar ")])],1)],1)},G=[],J=(e("ac1f"),e("25f0"),e("5319"),e("bc3a")),U=e.n(J),M=function(){function t(){Object(l["a"])(this,t)}return Object(s["a"])(t,[{key:"alta",value:function(t,a){return console.log("service formulario"),console.log(t),U.a.post("https://tarea12420220610061513.azurewebsites.net/api/Alta",{f:a},{params:{e:t}}).then(this.handleResponse).then((function(t){return console.log("api guardar formulario"),console.log(t),t.data}))}},{key:"eliminar",value:function(t,a){return console.log("service formulario"),console.log(t),U.a.post("https://tarea12420220610061513.azurewebsites.net/api/Eliminar",null,{params:{fk:t,cantidad:a}}).then(this.handleResponse).then((function(t){return console.log("api guardar formulario"),console.log(t),t.data}))}},{key:"alCarro",value:function(t){return console.log("service formulario"),console.log(t),U.a.post("https://tarea12420220610061513.azurewebsites.net/api/alCarro",null,{params:{e:t}}).then(this.handleResponse).then((function(t){return console.log("api guardar formulario"),console.log(t),t.data}))}},{key:"getCarrito",value:function(){return U.a.get("https://tarea12420220610061513.azurewebsites.net/api/GetCarrito",{params:{}}).then(this.handleResponse).then((function(t){return t.data}))}},{key:"buscar",value:function(t){return U.a.get("https://tarea12420220610061513.azurewebsites.net/api/Consulta",{params:{e:t}}).then(this.handleResponse).then((function(t){return t.data}))}},{key:"insertArchivo",value:function(t){return console.log("Service insertar archivo"),U.a.post("http://localhost:7286/api/SubirArchivo",null,{params:{files:t}}).then(this.handleResponse).then((function(t){return console.log("api subir archivo"),console.log(t),t.data}))}},{key:"eliminarTodo",value:function(){return console.log("service formulario"),U.a.post("https://tarea12420220610061513.azurewebsites.net/api/EliminarTodo",null,null).then(this.handleResponse).then((function(t){return console.log("api guardar formulario"),console.log(t),t.data}))}},{key:"handleResponse",value:function(t){if(401===t.status){this.logout(),location.reload(!0);var a=t.data&&t.data.message;return Promise.reject(a)}return Promise.resolve(t)}}]),t}(),N=new M,L={name:"Altas",data:function(){return{folio:null,mensaje:"",colorSnackbar:"",snackbar:!1,articulo:{descripcion:null,precio:null,cantidad:1},foto:null,loading:!1,file:null}},methods:{fileChange:function(t){var a=this,e=t[0],r=new FileReader;r.onloadend=function(){var t=r.result.replace("data:","").replace(/^.+,/,"");console.log(t),a.foto=t.toString()},r.readAsDataURL(e)},Alta:function(){var t=this;console.log("Guardar"),N.alta(JSON.stringify(this.articulo),this.foto).then((function(a){console.log("Enviado"),console.log(a),t.mensaje="Guardado",t.colorSnackbar="green",t.snackbar=!0}),(function(a){console.log("Ha habido un error"),console.log(a),t.mensaje="Ha habido un error",t.colorSnackbar="error",t.snackbar=!0}))}}},W=L,K=e("2db4"),Q=e("8654"),X=Object(v["a"])(W,z,G,!1,null,null,null),Y=X.exports;h()(X,{VBtn:R["a"],VCol:g["a"],VContainer:I["a"],VRow:$["a"],VSnackbar:K["a"],VTextField:Q["a"]});var Z=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-container",[e("v-row",{staticClass:"text-center"},[e("v-col",{staticClass:"mb-4"},[e("h1",{staticClass:"display-1 font-weight-bold mb-3",attrs:{align:"center"}},[t._v(" Capturas de Artículos ")])])],1),e("v-row",[e("v-col",{attrs:{align:"right",cols:"8"}},[e("div",{staticClass:"title row"},[t._v(" Buscar - "),e("v-text-field",{attrs:{required:"",outlined:"",dense:"",label:"Ingrese Descripción"},model:{value:t.busqueda,callback:function(a){t.busqueda=a},expression:"busqueda"}})],1)]),e("v-col",[e("v-btn",{attrs:{color:"lime darken-3",dark:""},on:{click:function(a){return t.Buscar()}}},[t._v(" Buscar ")])],1)],1),null!=t.resultados?e("div",[e("v-row",{staticClass:"text-center"},[e("table",{staticClass:"table table-sm table-hover"},[e("thead",[e("tr",[e("th",[t._v("Artículo")]),e("th",[t._v(" | ")]),e("th",[t._v("Precio")]),e("th",[t._v(" | ")]),e("th",[t._v("Cantidad")]),e("th",[t._v(" | ")]),e("th",[t._v("Foto")]),e("th",[t._v(" | ")]),e("th",[t._v("Cantidad a Comprar")])])]),e("tbody",t._l(t.resultados,(function(a){return e("tr",{key:a.pkArticulo},[e("th",[t._v(t._s(a.Descripcion))]),e("th",[t._v(" | ")]),e("th",[t._v(t._s(a.Precio))]),e("th",[t._v(" | ")]),e("th",[t._v(t._s(a.Cantidad))]),e("th",[t._v(" | ")]),e("th",[e("img",{attrs:{src:t.aFoto(a.Foto),width:"70",height:"60"}})]),e("th",[t._v(" | ")]),e("th",[e("v-text-field",{attrs:{outlined:"",dense:"",label:"Deseados"},model:{value:a.deseados,callback:function(e){t.$set(a,"deseados",e)},expression:"item.deseados"}}),e("v-btn",{attrs:{color:"lime darken-3",dark:""},on:{click:function(e){return t.Agregar(a)}}},[t._v(" Agregar ")])],1)])})),0)])])],1):t._e(),e("v-row",[e("v-btn",{attrs:{color:"lime darken-3",dark:"",link:"",to:{path:"/carrito"}}},[t._v(" Carrito ")])],1),e("v-row",[t._v(" "+t._s(t.resultados)+" ")]),e("v-snackbar",{attrs:{color:t.colorSnackbar,"multi-line":!0,timeout:5e3},model:{value:t.snackbar,callback:function(a){t.snackbar=a},expression:"snackbar"}},[t._v(" "+t._s(t.mensaje)+" "),e("v-btn",{attrs:{dark:"",text:""},on:{click:function(a){t.snackbar=!1}}},[t._v(" Cerrar ")])],1)],1)},tt=[],at=(e("4160"),e("159b"),{name:"Altas",data:function(){return{resultados:null,mensaje:"",colorSnackbar:"",snackbar:!1,articulo:{descripcion:null,precio:null,cantidad:1,foto:null},loading:!1,busqueda:null}},computed:{imageSrc:function(){var t="data:image/jpeg;base64,";return t}},methods:{aFoto:function(t){return"data:image/jpeg;base64,"+t},Agregar:function(t){var a=this;if(console.log(t),parseInt(t.deseados)>t.Cantidad)this.mensaje="Se solicitan más de los que hay disponibles",this.colorSnackbar="error",this.snackbar=!0;else{var e={descripcion:t.Descripcion,precio:t.Precio,cantidad:t.deseados,fkArticulo:t.PkArticulo},r=JSON.stringify(e);console.log("Json articulo"),console.log(r),N.alCarro(JSON.stringify(e)).then((function(t){a.mensaje="Guardado en el Carro",a.colorSnackbar="green",a.snackbar=!0,console.log(t)}),(function(t){console.log("Ha habido un error"),console.log(t),a.mensaje="Ha habido un error",a.colorSnackbar="error",a.snackbar=!0}))}},Buscar:function(){var t=this;console.log("Buscar"),N.buscar(this.busqueda).then((function(a){console.log("Buscar"),console.log(a),t.resultados=a,t.resultados.forEach((function(t){return t.deseados=1}))}),(function(a){console.log("Ha habido un error"),console.log(a),t.mensaje="Ha habido un error",t.colorSnackbar="error",t.snackbar=!0}))}}}),et=at,rt=Object(v["a"])(et,Z,tt,!1,null,null,null),ot=rt.exports;h()(rt,{VBtn:R["a"],VCol:g["a"],VContainer:I["a"],VRow:$["a"],VSnackbar:K["a"],VTextField:Q["a"]});var nt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-container",[e("v-row",{staticClass:"text-center"},[e("v-col",{staticClass:"mb-4"},[e("h1",{staticClass:"display-1 font-weight-bold mb-3",attrs:{align:"center"}},[t._v(" Carrito de compras ")])])],1),null!=t.resultados?e("div",[e("v-row",{staticClass:"text-center"},[e("table",{staticClass:"table table-sm table-hover"},[e("thead",[e("tr",[e("th",[t._v("Artículo")]),e("th",[t._v(" | ")]),e("th",[t._v("Precio")]),e("th",[t._v(" | ")]),e("th",[t._v("Cantidad")]),e("th",[t._v(" | ")]),e("th",[t._v("Costo")]),e("th",[t._v(" | ")]),e("th",[t._v("Foto")]),e("th",[t._v(" | ")]),e("th",[t._v("Cantidad a Comprar")])])]),e("tbody",t._l(t.resultados,(function(a){return e("tr",{key:a.pkArticulo},[e("th",[t._v(t._s(a.Descripcion))]),e("th",[t._v(" | ")]),e("th",[t._v(t._s(a.Precio))]),e("th",[t._v(" | ")]),e("th",[t._v(t._s(a.Cantidad))]),e("th",[t._v(" | ")]),e("th",[t._v(t._s(t.costo(a.Precio,a.Cantidad)))]),e("th",[t._v(" | ")]),e("th",[e("img",{attrs:{src:t.aFoto(a.foto),width:"70",height:"60"}})]),e("th",[t._v(" | ")]),e("th",[e("v-btn",{attrs:{color:"lime darken-3",dark:""},on:{click:function(e){return t.Eliminar(a)}}},[t._v(" Eliminar ")])],1)])})),0)])]),e("v-row",[e("p",[t._v("Total de la compra: "+t._s(t.total()))])]),e("v-row",[e("v-btn",{attrs:{color:"lime darken-3",dark:""},on:{click:function(a){return t.EliminarTodo()}}},[t._v(" Vaciar Carrito ")])],1)],1):t._e(),e("v-row",[e("v-btn",{attrs:{color:"lime darken-3",dark:"",link:"",to:{path:"/compras"}}},[t._v(" Regresar a Compras ")])],1),e("v-row",[t._v(" "+t._s(t.resultados)+" ")]),e("v-snackbar",{attrs:{color:t.colorSnackbar,"multi-line":!0,timeout:5e3},model:{value:t.snackbar,callback:function(a){t.snackbar=a},expression:"snackbar"}},[t._v(" "+t._s(t.mensaje)+" "),e("v-btn",{attrs:{dark:"",text:""},on:{click:function(a){t.snackbar=!1}}},[t._v(" Cerrar ")])],1)],1)},lt=[],st={name:"Carrito",data:function(){return{resultados:null,mensaje:"",colorSnackbar:"",snackbar:!1,articulo:{descripcion:null,precio:null,cantidad:1,foto:null},loading:!1,busqueda:null}},mounted:function(){var t=this;N.getCarrito().then((function(a){t.resultados=a,console.log("Buscar"),console.log(a)}),(function(a){console.log("Ha habido un error"),console.log(a),t.mensaje="Ha habido un error",t.colorSnackbar="error",t.snackbar=!0}))},methods:{aFoto:function(t){return"data:image/jpeg;base64,"+t},EliminarTodo:function(){var t=this,a=confirm("¿Eliminar todo el carrito?");1==a&&N.eliminarTodo().then((function(a){t.resultados=a,t.mensaje="Carrito Vaciado",t.colorSnackbar="green",t.snackbar=!0,location.reload()}),(function(a){console.log("Ha habido un error"),console.log(a),t.mensaje="Ha habido un error",t.colorSnackbar="error",t.snackbar=!0}))},Eliminar:function(t){var a=this,e=confirm("¿Eliminar articulo del carrito?");if(1==e){var r=t.FkArticulo,o=t.Cantidad;N.eliminar(r,o).then((function(t){a.resultados=t,a.mensaje="Artículo eliminado",a.colorSnackbar="green",a.snackbar=!0,location.reload()}),(function(t){console.log("Ha habido un error"),console.log(t),a.mensaje="Ha habido un error",a.colorSnackbar="error",a.snackbar=!0}))}else alert("Operación cancelada")},costo:function(t,a){return t*a},total:function(){var t=this,a=0;return this.resultados.forEach((function(e){return a+=t.costo(e.Precio,e.Cantidad)})),a}}},it=st,ct=Object(v["a"])(it,nt,lt,!1,null,null,null),ut=ct.exports;h()(ct,{VBtn:R["a"],VCol:g["a"],VContainer:I["a"],VRow:$["a"],VSnackbar:K["a"]}),r["default"].use(y["a"]);var dt=[{path:"/",name:"Home",component:D},{path:"/capturas",name:"Capturas",component:Y},{path:"/carrito",name:"Carrito",component:ut},{path:"/compras",name:"Compras",component:ot}],vt=new y["a"]({mode:"history",base:"/",routes:dt}),ft=vt,ht=e("2f62");r["default"].use(ht["a"]);var pt=new ht["a"].Store({state:{},mutations:{},actions:{}}),bt=e("f309");r["default"].use(bt["a"]);var mt=new bt["a"]({}),gt=e("5887"),kt=e.n(gt),_t=e("1dce"),Ct=e.n(_t),wt=e("dcb8"),xt=e.n(wt),jt=e("2106"),yt=e.n(jt);U.a.defaults.baseURL=Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_API_URL,r["default"].config.productionTip=!1,r["default"].use(Ct.a),r["default"].use(kt.a,{componentPrefix:"vc"}),r["default"].use(xt.a,{store:pt,idleTime:36e5,startAtIdle:!1}),new r["default"]({router:ft,store:pt,axios:U.a,VueAxios:yt.a,vuetify:mt,render:function(t){return t(j)}}).$mount("#app")}});
//# sourceMappingURL=app.4389c3b2.js.map