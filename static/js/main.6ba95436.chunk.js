(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{30:function(e,a,t){e.exports=t(62)},60:function(e,a,t){},62:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(26),o=t.n(c),l=t(3),s=t(4),i=t(6),m=t(5),u=t(7),p=t(64),h=t(65),d=t(66),f=t(8),b=t.n(f),v=t(12),E=t(29),y=t(17),C=t(13),g=t.n(C),N=r.a.createContext(),j=function(e,a){switch(a.type){case"DELETE_CONTACT":return Object(y.a)({},e,{contacts:e.contacts.filter(function(e){return e.id!==a.payload})});case"ADD_CONTACT":return Object(y.a)({},e,{contacts:[a.payload].concat(Object(E.a)(e.contacts))});case"UPDATE_CONTACT":return Object(y.a)({},e,{contacts:e.contacts.map(function(e){return e.id===a.payload.id?e=a.payload:e})});default:return e}},O=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={contacts:[],dispatch:function(e){return t.setState(function(a){return j(a,e)})}},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=Object(v.a)(b.a.mark(function e(){var a;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.get("https://jsonplaceholder.typicode.com/users");case 2:a=e.sent,this.setState({contacts:a.data});case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement(N.Provider,{value:this.state},this.props.children)}}]),a}(n.Component),k=N.Consumer,w=t(63),x=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={showContactInfo:!1},t.onDeleteClick=function(){var e=Object(v.a)(b.a.mark(function e(a,t){return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.delete("https://jsonplaceholder.typicode.com/users/".concat(a));case 2:t({type:"DELETE_CONTACT",payload:a});case 3:case"end":return e.stop()}},e,this)}));return function(a,t){return e.apply(this,arguments)}}(),t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this,a=this.props.contact,t=a.id,n=a.name,c=a.phone,o=a.email,l=this.state.showContactInfo;return r.a.createElement(k,null,function(a){var s=a.dispatch;return r.a.createElement("div",{className:"card card-body mb-3"},r.a.createElement("h4",null,n," ",r.a.createElement("i",{onClick:function(){return e.setState({showContactInfo:!e.state.showContactInfo})},className:"fas fa-sort-down",style:{cursor:"pointer"}}),r.a.createElement("i",{className:"fas fa-times",style:{cursor:"pointer",float:"right",color:"red"},onClick:e.onDeleteClick.bind(e,t,s)}),r.a.createElement(w.a,{to:"contact/edit/".concat(t)},r.a.createElement("i",{className:"fas fa-pencil-alt",style:{cursor:"pointer",float:"right",color:"black",marginRight:"1rem"}}))),l?r.a.createElement("ul",{className:"list-group"},r.a.createElement("li",{className:"list-group-item"},"Email: ",o),r.a.createElement("li",{className:"list-group-item"},"Phone: ",c)):null)})}}]),a}(n.Component),S=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).deleteContact=function(e){var a=t.state.contacts.filter(function(a){return a.id!==e});t.setState({contacts:a})},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(k,null,function(a){var t=a.contacts;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"display-4 mb-2"},r.a.createElement("span",{className:"text-danger"},"Contact")," List"),t.map(function(a){return r.a.createElement(x,{key:a.id,contact:a,deleteClickHandler:e.deleteContact.bind(e,a.id)})}))})}}]),a}(n.Component),A=function(e){var a=e.branding;return r.a.createElement("div",null,r.a.createElement("nav",{className:"navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0"},r.a.createElement("div",{className:"container"},r.a.createElement("a",{href:"/",className:"navbar-brand"}," ",a," "),r.a.createElement("div",null,r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(w.a,{to:"/",className:"nav-link"},r.a.createElement("i",{className:"fas fa-home"})," Home ")," "),r.a.createElement("li",{className:"nav-item"},r.a.createElement(w.a,{to:"/contact/add",className:"nav-link"},r.a.createElement("i",{className:"fas fa-address-book"})," Add Contact ")," "),r.a.createElement("li",{className:"nav-item"},r.a.createElement(w.a,{to:"/about",className:"nav-link"},r.a.createElement("i",{className:"fas fa-question"})," About ")," "),r.a.createElement("li",{className:"nav-item"},r.a.createElement(w.a,{to:"/test",className:"nav-link"},r.a.createElement("i",{className:"fas fa-plus"})," Test ")," "))))))};A.defaultProps={branding:"Contacts"};var P=A,T=t(14),D=t(27),q=t.n(D),_=function(e){var a=e.label,t=e.name,n=e.value,c=e.placeholder,o=e.type,l=e.onChange,s=e.error;return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:t},a),r.a.createElement("input",{type:o,name:t,className:q()("form-control form-control-lg",{"is-invalid":s}),placeholder:c,value:n,onChange:l}),s&&r.a.createElement("div",{className:"invalid-feedback"},s))};_.defaultProps={type:"text"};var I=_,M=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={name:"",email:"",phone:"",errors:{}},t.onChange=function(e){return t.setState(Object(T.a)({},e.target.name,e.target.value))},t.onSubmit=function(){var e=Object(v.a)(b.a.mark(function e(a,n){var r,c,o,l,s,i;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),r=t.state,c=r.name,o=r.email,l=r.phone,""!==c){e.next=5;break}return t.setState({errors:{name:"Name is required"}}),e.abrupt("return");case 5:if(""!==o){e.next=8;break}return t.setState({errors:{email:"Email is required"}}),e.abrupt("return");case 8:if(""!==l){e.next=11;break}return t.setState({errors:{phone:"Phone is required"}}),e.abrupt("return");case 11:return s={name:c,email:o,phone:l},e.next=14,g.a.post("https://jsonplaceholder.typicode.com/users",s);case 14:i=e.sent,a({type:"ADD_CONTACT",payload:i.data}),t.setState({name:"",email:"",phone:"",errors:{}}),t.props.history.push("/");case 18:case"end":return e.stop()}},e,this)}));return function(a,t){return e.apply(this,arguments)}}(),t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this,a=this.state,t=a.name,n=a.email,c=a.phone,o=a.errors;return r.a.createElement(k,null,function(a){var l=a.dispatch;return r.a.createElement("div",{className:"card mb-3"},r.a.createElement("div",{className:"card-header"},"Add Contact"),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:e.onSubmit.bind(e,l)},r.a.createElement(I,{label:"Name",name:"name",placeholder:"Please enter a name...",value:t,onChange:e.onChange,error:o.name}),r.a.createElement(I,{label:"Email",name:"email",placeholder:"Please enter an email address...",value:n,onChange:e.onChange,error:o.email}),r.a.createElement(I,{label:"Phone",name:"phone",placeholder:"Please enter a phone number...",value:c,onChange:e.onChange,error:o.phone}),r.a.createElement("input",{type:"submit",value:"Add Contact",className:"btn btn-light btn-block"}))))})}}]),a}(n.Component),F=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={name:"",email:"",phone:"",errors:{}},t.onChange=function(e){return t.setState(Object(T.a)({},e.target.name,e.target.value))},t.onSubmit=function(){var e=Object(v.a)(b.a.mark(function e(a,n){var r,c,o,l,s,i,m;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),r=t.state,c=r.name,o=r.email,l=r.phone,""!==c){e.next=5;break}return t.setState({errors:{name:"Name is required"}}),e.abrupt("return");case 5:if(""!==o){e.next=8;break}return t.setState({errors:{email:"Email is required"}}),e.abrupt("return");case 8:if(""!==l){e.next=11;break}return t.setState({errors:{phone:"Phone is required"}}),e.abrupt("return");case 11:return s={name:c,email:o,phone:l},i=t.props.match.params.id,e.next=15,g.a.put("https://jsonplaceholder.typicode.com/users/".concat(i),s);case 15:m=e.sent,a({type:"UPDATE_CONTACT",payload:m.data}),t.setState({name:"",email:"",phone:"",errors:{}}),t.props.history.push("/");case 19:case"end":return e.stop()}},e,this)}));return function(a,t){return e.apply(this,arguments)}}(),t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=Object(v.a)(b.a.mark(function e(){var a,t,n;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=this.props.match.params.id,e.next=3,g.a.get("https://jsonplaceholder.typicode.com/users/".concat(a));case 3:t=e.sent,n=t.data,this.setState({name:n.name,email:n.email,phone:n.phone});case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,a=this.state,t=a.name,n=a.email,c=a.phone,o=a.errors;return r.a.createElement(k,null,function(a){var l=a.dispatch;return r.a.createElement("div",{className:"card mb-3"},r.a.createElement("div",{className:"card-header"},"Edit Contact"),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:e.onSubmit.bind(e,l)},r.a.createElement(I,{label:"Name",name:"name",placeholder:"Please enter a name...",value:t,onChange:e.onChange,error:o.name}),r.a.createElement(I,{label:"Email",name:"email",placeholder:"Please enter an email address...",value:n,onChange:e.onChange,error:o.email}),r.a.createElement(I,{label:"Phone",name:"phone",placeholder:"Please enter a phone number...",value:c,onChange:e.onChange,error:o.phone}),r.a.createElement("input",{type:"submit",value:"Update Contact",className:"btn btn-light btn-block"}))))})}}]),a}(n.Component),L=function(e){return r.a.createElement("div",null,r.a.createElement("h1",{className:"display-4"},"About Contact Manager"),r.a.createElement("p",{className:"lead"},"Simple to manage contacts"),r.a.createElement("p",{className:"text-secondary"},"Version ",e.match.params.version))},U=function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"display-4"},r.a.createElement("span",{className:"text-danger"},"404 Page Not Found")),r.a.createElement("p",{className:"lead"},"Sorry, that page does not exist"))},B=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={name:"",email:""},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users/1").then(function(e){return e.json()}).then(function(a){return e.setState({name:a.name,email:a.email})})}},{key:"render",value:function(){var e=this.state,a=e.name,t=e.email;return r.a.createElement("div",null,r.a.createElement("h1",null,a),r.a.createElement("h2",null,t))}}]),a}(n.Component),H=(t(59),t(60),function(e){function a(){return Object(l.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(O,null,r.a.createElement(p.a,null,r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"container"},r.a.createElement(P,{branding:"Contact Mananger"}),r.a.createElement(h.a,null,r.a.createElement(d.a,{exact:!0,path:"/",component:S}),r.a.createElement(d.a,{exact:!0,path:"/about/:version",component:L}),r.a.createElement(d.a,{exact:!0,path:"/contact/add",component:M}),r.a.createElement(d.a,{exact:!0,path:"/contact/edit/:id",component:F}),r.a.createElement(d.a,{exact:!0,path:"/test",component:B}),r.a.createElement(d.a,{component:U}))))))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(H,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[30,1,2]]]);
//# sourceMappingURL=main.6ba95436.chunk.js.map