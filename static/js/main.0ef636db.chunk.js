(this.webpackJsonpuserprofile=this.webpackJsonpuserprofile||[]).push([[0],{36:function(e,t,n){},55:function(e,t,n){},65:function(e,t,n){},73:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),s=n(29),r=n.n(s),i=(n(36),n(31)),o=n(2),l=n(12),d=n(13),u=n(17),h=n(16),j=n(14),p=n.n(j),b=(n(55),n(15)),f=n.n(b),v=n(1),m=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).handleClick=function(t){e.props.history.push("/singleprofile/?Id=".concat(t))},e.handleChange=function(t){var n=t.target.value;e.props.history.push("/singleprofile/?Id=".concat(n))},e.state={userdata:[],color:"rgb(235, 171, 52)",loading:!0},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=this;p()({method:"GET",url:"https://reqres.in/api/users?delay=3",headers:{"content-Type":"application/json"}}).then((function(t){e.setState({userdata:t.data}),e.setState({loading:!1})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){var e=this,t=this.state,n=t.userdata,a=t.color,c=t.loading;return Object(v.jsx)("div",{className:"App",children:c?Object(v.jsx)("center",{style:{marginTop:"30vh"},children:Object(v.jsx)(f.a,{color:a,size:80})}):Object(v.jsx)("section",{className:"content-wrapper",children:Object(v.jsxs)("div",{children:[Object(v.jsx)("h1",{className:"heading",children:"User"}),Object(v.jsx)("div",{className:"select-wrapper",children:Object(v.jsx)("select",{onChange:this.handleChange,children:n.data?n.data.map((function(e){return Object(v.jsxs)("option",{value:e.id,children:[e.first_name," ",e.last_name]})})):null})}),n.data?n.data.map((function(t){return Object(v.jsxs)("div",{className:"inside-wrapper",onClick:function(){e.handleClick(t.id)},children:[Object(v.jsx)("img",{src:t.avatar,alt:"can't found"}),Object(v.jsx)("div",{children:t.first_name}),Object(v.jsx)("div",{children:t.last_name})]},t.id)})):null]})})})}}]),n}(c.a.Component),O=n(30),x=n.n(O),g=(n(65),function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).state={id:void 0,avatar:void 0,first_name:void 0,last_name:void 0,userdata:{},filterdata:{},loading:!0,color:"rgb(235, 171, 52)"},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=this;p()({method:"GET",url:"https://reqres.in/api/users?delay=3",headers:{"content-Type":"application/json"}}).then((function(t){e.setState({userdata:t.data}),e.setState({loading:!1})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){var e=x.a.parse(this.props.location.search).Id,t=this.state,n=t.userdata,a=t.loading,c=t.color,s=n.data?n.data.find((function(t){return t.id==e})):null;return a?Object(v.jsx)("center",{style:{marginTop:"30vh"},children:Object(v.jsx)(f.a,{color:c,size:80})}):Object(v.jsxs)("div",{className:"wrapper",children:[Object(v.jsx)("h1",{children:"User"}),s?Object(v.jsxs)("div",{children:[Object(v.jsx)("img",{src:s.avatar}),Object(v.jsx)("div",{className:"name",children:s.first_name}),Object(v.jsx)("div",{className:"name",children:s.last_name})]}):null]})}}]),n}(c.a.Component)),y=function(){return Object(v.jsxs)(i.a,{children:[Object(v.jsx)(o.a,{exact:!0,path:"/",component:m}),Object(v.jsx)(o.a,{path:"/singleprofile",component:g})]})};r.a.render(Object(v.jsx)(c.a.StrictMode,{children:Object(v.jsx)(y,{})}),document.getElementById("root"))}},[[73,1,2]]]);
//# sourceMappingURL=main.0ef636db.chunk.js.map