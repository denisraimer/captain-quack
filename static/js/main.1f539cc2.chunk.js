(this["webpackJsonpcaptain-quack"]=this["webpackJsonpcaptain-quack"]||[]).push([[0],{154:function(e,t,a){e.exports=a.p+"static/media/logo.d53e64f2.png"},155:function(e,t,a){e.exports=a.p+"static/media/404.2b42d7aa.png"},165:function(e,t,a){e.exports=a(291)},290:function(e,t,a){},291:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(12),c=a.n(o),l=a(28),i=a(11),u=a(89),d=a(47),s=a.n(d);function m(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return{type:"GET_PRODUCTS_SUCCESS",payload:e}}function p(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"https://agile-taiga-33505.herokuapp.com/api/products/api/products";return function(t){return s.a.get("".concat(e)).then((function(e){return t(m(e.data))})).catch((function(e){throw e}))}}function f(e){return{type:"CREATE_PRODUCT_SUCCESS",payload:e}}function b(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"https://agile-taiga-33505.herokuapp.com/api/products/api/products",t=arguments.length>1?arguments[1]:void 0;return function(a){return s.a.post(e,t).then((function(e){return a(f(e.data))})).catch((function(e){return e}))}}function E(e){return{type:"DELETE_PRODUCT_SUCCESS",payload:e}}function h(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return function(t){return s.a.delete(e).then((function(e){return t(E(e))})).catch((function(e){return e}))}}var g=a(348),v=Object(i.combineReducers)({products:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_PRODUCTS_SUCCESS":return[].concat(Object(u.a)(e),Object(u.a)(t.payload));case"CREATE_PRODUCT_SUCCESS":return[].concat(Object(u.a)(e),[t.payload]);case"DELETE_PRODUCT_SUCCESS":var a=t.payload.config.url.replace("/api/products/","");return e.filter((function(e){return e._id!==a}));default:return e}},form:g.a}),y=a(148),C=a(149),O=(a(250),Object(i.createStore)(v,Object(y.composeWithDevTools)(Object(i.applyMiddleware)(C.a)))),k=a(48),S=a(49),j=a(56),x=a(57),_=function(e){var t=e.errorMessage,a=void 0===t?"Error":t;return r.a.createElement("div",{className:"not-found"},r.a.createElement("div",{className:"not-found__title"},a))},M=function(e){Object(x.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(k.a)(this,a),(n=t.call(this,e)).state={hasError:!1},n}return Object(S.a)(a,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement(_,{errorMessage:"\u0427\u0442\u043e-\u0442\u043e \u043a\u0440\u044f\u043a\u043d\u0443\u043b\u0430\u0441\u044c..."}):this.props.children}}]),a}(n.Component),N=a(346),T=a(345),w=a(6),P=a(350),R=Object(w.a)({root:{width:"100%",marginBottom:10,"& label":{fontSize:14,fontFamily:"'Roboto', sans-serif",fontWeight:700,color:"#999",marginTop:8,marginLeft:10},"& label.Mui-focused":{color:"#999",marginTop:0},"& label.MuiFormLabel-filled":{marginTop:0},"& input":{border:"1px solid #dcdcdc",borderBottom:"2px solid #dcdcdc",height:40,padding:"0 0 0 10px"},"& div.MuiInput-underline:before":{borderBottom:"2px solid #dcdcdc"},"& div.MuiInput-underline:after":{borderBottom:"2px solid #000"},"& div.MuiInput-underline.Mui-error:after":{borderBottom:"2px solid #f44336"},"& div.MuiInput-underline:hover:not(.Mui-disabled):before":{borderBottomColor:"#f44336"}}})(P.a),I=function(e){var t=e.input,a=e.label,n=e.type,o=e.meta,c=o.touched,l=o.error,i=o.warning,u=c&&(l&&"".concat(l)||i&&"".concat(i));return r.a.createElement(R,Object.assign({helperText:u,error:u,label:a,type:n,id:"custom-css-standard-input"},t))},B=function(e){return e||"string"===typeof e?void 0:"\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0434\u043b\u044f \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f"},D=function(e){return e&&/^[0-9]+$/.test(e)?void 0:"\u041d\u0435\u0434\u043e\u043f\u0443\u0441\u0442\u0438\u043c\u044b\u0435 \u0441\u0438\u043c\u0432\u043e\u043b\u044b"},U=a(153),A=a.n(U),F=a(330),z=a(344),L=a(352),W=a(333),q=Object(w.a)({root:{width:"100%",marginTop:20,"& div.MuiInput-underline:hover:not(.Mui-disabled):before":{borderBottom:"2px solid #f44336"},"& div.MuiSelect-select.MuiSelect-select":{paddingLeft:10},"& div.MuiInput-underline:before":{borderBottom:"2px solid #dcdcdc"},"& div.MuiInput-underline:after":{borderBottom:"2px solid #000"},"& div.MuiInput-underline.Mui-error:after":{borderBottom:"2px solid #f44336"},"& div.MuiSelect-select:focus":{backgroundColor:"transparent"},"& div.MuiInputBase-root":{borderTop:"1px solid #dcdcdc",borderLeft:"1px solid #dcdcdc",borderRight:"1px solid #dcdcdc",height:40,fontSize:14,fontFamily:"'Roboto', sans-serif",fontWeight:700,color:"#999"},"& div.MuiInputBase-input":{padding:"6px 0 5px"},"& svg":{color:"#000"}}})(F.a),G=function(e){var t=e.input,a=e.meta,n=a.touched,o=a.error,c=a.warning,l=n&&(o&&"".concat(o)||c&&"".concat(c));return r.a.createElement(q,{error:l},r.a.createElement(z.a,Object.assign({},t,{displayEmpty:!0,inputProps:{"aria-label":"Without label"}}),r.a.createElement(L.a,{value:"",disabled:!0},"\u0421\u0442\u0430\u0442\u0443\u0441"),r.a.createElement(L.a,{value:"\u0412 \u043d\u0430\u043b\u0438\u0447\u0438\u0438"},"\u0412 \u043d\u0430\u043b\u0438\u0447\u0438\u0438"),r.a.createElement(L.a,{value:"\u041e\u0436\u0438\u0434\u0430\u0435\u0442\u0441\u044f"},"\u041e\u0436\u0438\u0434\u0430\u0435\u0442\u0441\u044f"),r.a.createElement(L.a,{value:"\u041d\u0435\u0442 \u0432 \u043d\u0430\u043b\u0438\u0447\u0438\u0438"},"\u041d\u0435\u0442 \u0432 \u043d\u0430\u043b\u0438\u0447\u0438\u0438")),r.a.createElement(W.a,null,l))},J=a(334),K=Object(w.a)({root:{backgroundColor:"#c4092f",height:40,marginTop:20,"& span.MuiButton-label":{fontSize:16,fontFamily:"'Roboto', sans-serif",fontWeight:700,marginTop:2,"& span.MuiButton-endIcon":{marginLeft:2,marginTop:"-2px"},"& svg":{fontSize:16}}}})(J.a),Q=a(336),V=a(337),$=a(331),H=a(349),X=a(4),Y=a(335),Z=a(347),ee=a(353),te=function(e){var t=e.value,a=t.value,n=Object(Y.a)({root:{"&:hover":{backgroundColor:"transparent"}},icon:{border:"1px solid #e7e7e7",borderRadius:"50%",width:25,height:25,backgroundColor:a,"input:hover ~ &":{backgroundColor:a},"input:disabled ~ &":{boxShadow:"none",background:"rgba(206,217,224,.5)"}},checkedIcon:{backgroundColor:a,backgroundImage:"linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))","&:before":{borderRadius:50,border:"4px solid #c4092f",background:a,position:"absolute",left:5,top:5,display:"block",width:32,height:32,content:'""'},"input:hover ~ &":{backgroundColor:a}}})();return r.a.createElement(Z.a,Object.assign({disableRipple:!0,checkedIcon:r.a.createElement("span",{className:Object(X.a)(n.icon,n.checkedIcon)}),className:n.root,color:"default",icon:r.a.createElement("span",{className:n.icon})},t))},ae=function(e){var t=e.input;return r.a.createElement(ee.a,{value:t,control:r.a.createElement(te,null)})};var ne=Object(T.a)({form:"managerForm"})((function(e){return r.a.createElement(Q.a,null,r.a.createElement("form",{onSubmit:e.handleSubmit},r.a.createElement(V.a,{container:!0,spacing:1},r.a.createElement(V.a,{item:!0,xs:12,sm:4,md:4},r.a.createElement(N.a,{className:"form-control",component:I,validate:B,label:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",name:"title"})),r.a.createElement(V.a,{item:!0,xs:6,sm:4,md:4},r.a.createElement(N.a,{className:"form-control",component:I,validate:B,label:"\u0413\u043e\u0434",warn:D,name:"year"})),r.a.createElement(V.a,{item:!0,xs:6,sm:4,md:4},r.a.createElement(N.a,{className:"form-control",component:I,validate:B,label:"\u0426\u0435\u043d\u0430",warn:D,name:"price"})),r.a.createElement(V.a,{item:!0,xs:12},r.a.createElement(N.a,{className:"form-control",component:I,label:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",name:"description"})),r.a.createElement(V.a,{item:!0,xs:12,sm:4,md:4},r.a.createElement("div",{className:"manager-radio-form"},r.a.createElement(F.a,{component:"fieldset"},r.a.createElement($.a,{component:"legend",className:"label"},"\u0426\u0432\u0435\u0442"),r.a.createElement(H.a,{defaultValue:"female",row:!0},["fff","000","cbcbcc","d74345","88c504"].map((function(e,t){return r.a.createElement("label",{key:"".concat(t).concat(e)},r.a.createElement(N.a,{name:"color",component:ae,type:"radio",value:"#".concat(e)}))})))))),r.a.createElement(V.a,{item:!0,xs:6,sm:4,md:4},r.a.createElement(N.a,{component:G,className:"form-control",validate:B,name:"status"})),r.a.createElement(V.a,{item:!0,xs:6,sm:4,md:4},r.a.createElement(K,{disableElevation:!0,endIcon:r.a.createElement(A.a,null),variant:"contained",color:"secondary",type:"submit"},"\u043e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c")))))})),re=function(e){Object(x.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(k.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).eventCreateProduct=function(t){e.props.createProduct("https://agile-taiga-33505.herokuapp.com/api/products/api/products",t)},e}return Object(S.a)(a,[{key:"render",value:function(){return r.a.createElement(ne,{onSubmit:this.eventCreateProduct,state:this.state})}}]),a}(n.Component),oe=Object(l.b)(null,(function(e){return{createProduct:Object(i.bindActionCreators)(b,e)}}))(re),ce=a(340),le=a(332),ie=a(341),ue=a(342),de=a(339),se=a(343),me=a(338),pe=Object(w.a)({head:{backgroundColor:"#c4092f",fontFamily:"'Roboto', sans-serif",fontWeight:700,fontSize:15,color:"#fff"},body:{fontFamily:"'Roboto', sans-serif",fontWeight:400,fontSize:15,color:"#282d30"}})(me.a),fe=Object(w.a)((function(e){return{root:{"&:nth-of-type(odd)":{backgroundColor:e.palette.action.hover}}}}))(de.a),be=Object(w.a)({root:{borderRadius:50,backgroundColor:"transparent",height:40,"&:hover":{backgroundColor:"#282d30",color:"#fff"},"&:hover span.MuiButton-label":{color:"#fff"},"& span.MuiButton-label":{fontSize:16,fontFamily:"'Roboto', sans-serif",textTransform:"none",color:"#8b9497",marginTop:2}}})(J.a);var Ee=function(e){var t=e.products,a=e.eventDeleteProduct;return r.a.createElement(Q.a,null,r.a.createElement(V.a,{container:!0},r.a.createElement("div",{className:"product-list"},r.a.createElement(ce.a,{component:le.a},r.a.createElement(ie.a,{"aria-label":"customized table"},r.a.createElement(ue.a,null,r.a.createElement(de.a,null,r.a.createElement(pe,{width:"580"},"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"),r.a.createElement(pe,{width:"100",align:"center"},"\u0413\u043e\u0434"),r.a.createElement(pe,{width:"100",align:"center"},"\u0426\u0432\u0435\u0442"),r.a.createElement(pe,{width:"150",align:"left"},"\u0421\u0442\u0430\u0442\u0443\u0441"),r.a.createElement(pe,{align:"left",colSpan:"2"},"\u0426\u0435\u043d\u0430"))),r.a.createElement(se.a,null,t.map((function(e){return r.a.createElement(fe,{key:e._id},r.a.createElement(pe,{component:"th",scope:"row"},e.title,e.description?r.a.createElement("div",{className:"product-list__description"},e.description):""),r.a.createElement(pe,{align:"center"},e.year),r.a.createElement(pe,{align:"center"},r.a.createElement("div",{className:"status-color",style:{background:"".concat(e.color)}})),r.a.createElement(pe,{align:"left"},e.status),r.a.createElement(pe,{width:"150",align:"left"},e.price," \u0440\u0443\u0431."),r.a.createElement(pe,{align:"left"},r.a.createElement(be,{onClick:function(){return a(e._id)},color:"primary",type:"submit"},"\u0423\u0434\u0430\u043b\u0438\u0442\u044c")))}))))))))},he=function(e){Object(x.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(k.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).eventDeleteProduct=function(t){e.props.deleteProduct("https://agile-taiga-33505.herokuapp.com/api/products/api/products/".concat(t))},e}return Object(S.a)(a,[{key:"componentDidMount",value:function(){this.props.fetchProducts()}},{key:"render",value:function(){var e=this.props.products;return r.a.createElement(Ee,{products:e,eventDeleteProduct:this.eventDeleteProduct})}}]),a}(n.Component),ge=Object(l.b)((function(e){return{products:e.products}}),(function(e){return{fetchProducts:Object(i.bindActionCreators)(p,e),deleteProduct:Object(i.bindActionCreators)(h,e)}}))(he);function ve(){return r.a.createElement("div",{className:"footer footer_fluid"},r.a.createElement("div",{className:"footer__copyright"},"\xa9 2020 CAPTAIN QUACK ",r.a.createElement("br",null)," \u0414\u0435\u0441\u043d\u0438\u0446\u0430 \u0442\u044b\u0441\u044f\u0447\u0435\u043b\u0435\u0442\u0438\u044f \u0438 \u043c\u043e\u043b\u043b\u044e\u0441\u043a!"))}var ye=a(154),Ce=a.n(ye);function Oe(){return r.a.createElement("div",{className:"header header_fluid"},r.a.createElement("div",{className:"header__logo"},r.a.createElement("img",{className:"header__logo-img",src:Ce.a,alt:"Captain quack logo"})))}function ke(){return r.a.createElement("div",{className:"title"},"\xa1Ay caramba!")}var Se=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(Oe,null),r.a.createElement(ke,null),r.a.createElement(oe,null),r.a.createElement(ge,null),r.a.createElement(ve,null))},je=a(156),xe=a(15),_e=a(155),Me=a.n(_e);function Ne(){return r.a.createElement("div",{className:"not-found"},r.a.createElement("div",{className:"not-found__title"},"4",r.a.createElement("img",{className:"not-found__image",src:Me.a,alt:"Captain quack 404"}),"4 - \xa1Ay caramba!"))}var Te=function(){return r.a.createElement(je.a,null,r.a.createElement(xe.c,null,r.a.createElement(xe.a,{exact:!0,path:"/",component:Se}),r.a.createElement(xe.a,{component:Ne})))};a(290);c.a.render(r.a.createElement(l.a,{store:O},r.a.createElement(M,null,r.a.createElement(Te,null))),document.getElementById("root"))}},[[165,1,2]]]);
//# sourceMappingURL=main.1f539cc2.chunk.js.map