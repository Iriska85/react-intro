(this["webpackJsonpreact-intro"]=this["webpackJsonpreact-intro"]||[]).push([[0],{13:function(e,t,r){},14:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r(1),s=r.n(a),i=r(3),o=r.n(i),c=(r(13),r(4)),l=r(5),u=r(7),m=r(6),d=function(e){var t=e.firstName,r=e.secondName;return Object(n.jsxs)("div",{children:["Hey you ",t," ",r,"!"]})},h={form:{margin:50,padding:10,width:300,border:"1px solid black",backgroundColor:"black",color:"white"},inputGroup:{marginBottom:10},input:{backgroundColor:"#EFEFFF",marginLeft:10},error:{color:"red",margin:5}},f=function(e){var t=e.name,r=e.onChange,a=e.onBlur,s=e.label,i=e.error;return Object(n.jsxs)("div",{style:h.inputGroup,children:[Object(n.jsxs)("label",{children:[s,Object(n.jsx)("input",{style:h.input,type:"text",name:t,onChange:r,onBlur:a})]}),i&&Object(n.jsx)("div",{style:h.error,children:i})]})},b=function(e){Object(u.a)(r,e);var t=Object(m.a)(r);function r(){var e;Object(c.a)(this,r);for(var n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={firstName:"",secondName:"",firstNameError:"",secondNameError:""},e}return Object(l.a)(r,[{key:"firstNameChange",value:function(e){this.setState({firstName:e.target.value})}},{key:"secondNameChange",value:function(e){this.setState({secondName:e.target.value})}},{key:"validateName",value:function(e){return/[A-Za-z]{3,}/.test(e)?"":"Name must contain at least three letters"}},{key:"firstNameBlur",value:function(){var e=this.state.firstName,t=this.validateName(e);return this.setState({firstNameError:t})}},{key:"secondNameBlur",value:function(){var e=this.state.secondName,t=this.validateName(e);return this.setState({secondNameError:t})}},{key:"render",value:function(){var e=this.state,t=e.firstName,r=e.firstNameError,a=e.secondName,s=e.secondNameError;return Object(n.jsxs)("div",{style:h.form,children:[Object(n.jsx)(f,{name:"firstName",label:"First name",onChange:this.firstNameChange.bind(this),onBlur:this.firstNameBlur.bind(this),error:r}),Object(n.jsx)(f,{name:"secondName",label:"Second name",onChange:this.secondNameChange.bind(this),onBlur:this.secondNameBlur.bind(this),error:s}),Object(n.jsx)(d,{firstName:t,secondName:a}),"hello"]})}}]),r}(s.a.Component),N=function(){return Object(n.jsx)("div",{className:"App",children:Object(n.jsx)(b,{})})},j=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,15)).then((function(t){var r=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;r(e),n(e),a(e),s(e),i(e)}))};o.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(N,{})}),document.getElementById("root")),j()}},[[14,1,2]]]);
//# sourceMappingURL=main.692c698a.chunk.js.map