(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],[,function(t,e,n){t.exports={inputForm:"InputForm_inputForm__2HMSe",label:"InputForm_label__1KlGz",input:"InputForm_input__2a2vd"}},,,,,function(t,e,n){t.exports={list:"Contacts_list__2X_tJ",item:"Contacts_item__aep7G"}},,,,,,,function(t,e,n){t.exports={input:"Input_input__HIX_X"}},function(t,e,n){t.exports={wrapper:"Filter_wrapper__26I9n"}},function(t,e,n){t.exports={text:"SingleContact_text__3PQtp"}},,function(t,e,n){t.exports=n(25)},,,,,,,function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),c=n(10),o=n.n(c),i=n(16),u=n(2),s=n(3),l=n(5),m=n(4),p=n(11),f=n(12),h=n(1),b=n.n(h),d=n(13),g=n.n(d);var v=function(t){var e=t.type,n=t.name,a=t.value,c=t.inputTracking,o=t.placeholder,i=t.minLength,u=t.required,s=t.autoFocus;return r.a.createElement("input",{className:g.a.input,type:e,name:n,onChange:function(t){return c(t)},value:a,placeholder:o||"",minLength:i,autoFocus:s,required:u})},C=function(t){Object(l.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={name:"",number:""},t.inputTracking=function(e){e.preventDefault(),t.setState(Object(f.a)({},e.target.name,e.target.value))},t.submitForm=function(e){e.preventDefault(),t.props.addNewContact(t.state.name,t.state.number),t.resetInputForm()},t.resetInputForm=function(){t.setState({name:"",number:""})},t}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("form",{className:b.a.inputForm,onSubmit:this.submitForm},r.a.createElement("label",{className:b.a.label},"Name",r.a.createElement(v,{type:"input",name:"name",value:this.state.name,inputTracking:this.inputTracking,minLength:3,required:!0,autoFocus:!0})),r.a.createElement("label",{className:b.a.label},"Number",r.a.createElement(v,{type:"number",name:"number",value:this.state.number,inputTracking:this.inputTracking,minLength:10,required:!0})),r.a.createElement("button",{className:b.a.btn,type:"submit"},"Add contact"))}}]),n}(a.Component),_=n(14),E=n.n(_);var k=function(t){var e=t.inputTracking;return r.a.createElement("div",{className:E.a.wrapper},r.a.createElement(v,{type:"input",name:"filter",inputTracking:e,placeholder:"Search"}))},w=n(15),y=n.n(w);var N=function(t){var e=t.name,n=t.number,a=t.id,c=t.deleteContact,o=t.firstLetters;return r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{className:y.a.text},o(e),": ",n),r.a.createElement("button",{type:"button",onClick:function(){return c(a)}},"Delete"))},F=n(6),S=n.n(F);function O(t){return t.trim().split(" ").map((function(t){return t[0].toUpperCase()+t.substring(1).toLowerCase()})).join(" ")}var T=function(t){var e=t.visibleContacts,n=t.deleteContact;return r.a.createElement("ul",{className:S.a.list},e.map((function(t){return r.a.createElement("li",{key:t.id,className:S.a.item},r.a.createElement(N,{name:t.name,number:t.number,id:t.id,deleteContact:n,firstLetters:O}))})))},j=function(t){Object(l.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={contacts:[],filter:""},t.addNewContact=function(e,n){var a={id:Object(p.v4)(),name:e,number:n};t.checkExistingName(e)?alert(e+" is already in contacts"):t.pushToContacts(a)},t.pushToContacts=function(e){t.setState((function(t){return{contacts:[].concat(Object(i.a)(t.contacts),[e])}}))},t.inputFilterTracking=function(e){t.setState({filter:e.target.value})},t.filterContacts=function(){return t.state.contacts.filter((function(e){return(e.name.toLowerCase()+e.number.toLowerCase()).includes(t.state.filter.toLowerCase())}))},t.checkExistingName=function(e){return t.state.contacts.map((function(t){return t.name.toLowerCase().trim()})).includes(e.toLowerCase().trim())},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts");t&&this.setState({contacts:JSON.parse(t)})}},{key:"componentDidUpdate",value:function(t){t.contacts!==this.state.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var t=this.filterContacts();return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Phonebook"),r.a.createElement(C,{addNewContact:this.addNewContact}),this.state.contacts.length>0&&r.a.createElement("h2",null,"Contacts"),this.state.contacts.length>1&&r.a.createElement(k,{inputTracking:this.inputFilterTracking}),this.state.contacts.length>0&&r.a.createElement(T,{visibleContacts:t,deleteContact:this.deleteContact}))}}]),n}(a.Component);n(24);o.a.render(r.a.createElement(j,null),document.getElementById("root"))}],[[17,1,2]]]);
//# sourceMappingURL=main.4c44b7f2.chunk.js.map