(this.webpackJsonplemonadestand=this.webpackJsonplemonadestand||[]).push([[0],{46:function(e,t,a){e.exports=a(64)},62:function(e,t,a){e.exports=a.p+"static/media/lemonade.89c6f4df.jpg"},64:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(8),l=a.n(o),s=a(12),u=a(13),i=a(23),m=a(17),c=a(16),d=a(70),h=a(66),p=function(e){Object(m.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={newName:"",newCommission:0,newAmount1:"",newAmount2:"",newAmount3:"",newAmount4:"",newAmount5:"",newAmount6:"",newAmount7:"",newAmount8:"",newAmount9:"",newAmount10:"",report:[]},n}return Object(u.a)(a,[{key:"addForm",value:function(e){var t=0,a=0,n=[],r=0,o=!1;if(""!==this.state.newAmount1&&(n[r]=this.state.newAmount1+" "+e[0],r++,o=!0,t+=this.state.newAmount1*this.props.products[0].price),""!==this.state.newAmount2&&(n[r]=this.state.newAmount2+" "+e[1],r++,o=!0,t+=this.state.newAmount2*this.props.products[1].price),""!==this.state.newAmount3&&(n[r]=this.state.newAmount3+" "+e[2],r++,o=!0,t+=this.state.newAmount3*this.props.products[2].price),""!==this.state.newAmount4&&(n[r]=this.state.newAmount4+" "+e[3],r++,o=!0,t+=this.state.newAmount4*this.props.products[3].price),""!==this.state.newAmount5&&(n[r]=this.state.newAmount5+" "+e[4],r++,o=!0,t+=this.state.newAmount5*this.props.products[4].price),""!==this.state.newAmount6&&(n[r]=this.state.newAmount6+" "+e[5],r++,t+=this.state.newAmount6*this.props.products[5].price),""!==this.state.newAmount7&&(n[r]=this.state.newAmount7+" "+e[6],r++,o=!0,t+=this.state.newAmount7*this.props.products[6].price),""!==this.state.newAmount8&&(n[r]=this.state.newAmount8+" "+e[7],r++,o=!0,t+=this.state.newAmount8*this.props.products[7].price),""!==this.state.newAmount9&&(n[r]=this.state.newAmount9+" "+e[8],r++,o=!0,t+=this.state.newAmount9*this.props.products[8].price),""!==this.state.newAmount10&&(n[r]=this.state.newAmount10+" "+e[9],r++,o=!0,t+=this.state.newAmount10*this.props.products[9].price),!1===o)alert("Please enter an amount sold.");else{a=t*(this.state.newCommission/100);var l=new Date,s=l.getDate()+"/"+(l.getMonth()+1)+"/"+l.getFullYear()+" @ "+l.getHours()+":"+l.getMinutes()+":"+l.getSeconds();this.setState({newAmount1:"",newAmount2:"",newAmount3:"",newAmount4:"",newAmount5:"",newAmount6:"",newAmount7:"",newAmount8:"",newAmount9:"",newAmount10:"",newCommission:10,newName:""});var u={date:s.slice(),list:n.toString().slice(),revenue:t,commission:a},i=[];(i=this.state.report).push(u),this.setState({report:i}),this.props.sendReport(this.state.report)}}},{key:"updateName",value:function(e){this.setState({newName:e})}},{key:"updateCommission",value:function(e){this.setState({newCommission:e})}},{key:"updateAmount1",value:function(e){this.setState({newAmount1:e})}},{key:"updateAmount2",value:function(e){this.setState({newAmount2:e})}},{key:"updateAmount3",value:function(e){this.setState({newAmount3:e})}},{key:"updateAmount4",value:function(e){this.setState({newAmount4:e})}},{key:"updateAmount5",value:function(e){this.setState({newAmount5:e})}},{key:"updateAmount6",value:function(e){this.setState({newAmount6:e})}},{key:"updateAmount7",value:function(e){this.setState({newAmount7:e})}},{key:"updateAmount8",value:function(e){this.setState({newAmount8:e})}},{key:"updateAmount9",value:function(e){this.setState({newAmount9:e})}},{key:"updateAmount10",value:function(e){this.setState({newAmount10:e})}},{key:"renderSwitch",value:function(e,t){switch(e){case"updateAmount1":this.updateAmount1(t.target.value);break;case"updateAmount2":this.updateAmount2(t.target.value);break;case"updateAmount3":this.updateAmount3(t.target.value);break;case"updateAmount4":this.updateAmount4(t.target.value);break;case"updateAmount5":this.updateAmount5(t.target.value);break;case"updateAmount6":this.updateAmount6(t.target.value);break;case"updateAmount7":this.updateAmount7(t.target.value);break;case"updateAmount8":this.updateAmount8(t.target.value);break;case"updateAmount9":this.updateAmount9(t.target.value);break;case"updateAmount10":this.updateAmount10(t.target.value)}}},{key:"render",value:function(){for(var e=this,t=[],a=0;a<this.props.products.length;a++)t.push(this.props.products[a].product);return r.a.createElement("div",null,r.a.createElement("h2",{class:"text-center"},"Employee Sales Form"),r.a.createElement(d.a,null,r.a.createElement(d.a.Group,null,r.a.createElement(d.a.Label,null,"Select Your Name"),r.a.createElement(d.a.Control,{as:"select",size:"sm",style:{backgroundColor:"#f4ea8e"},value:this.state.newName,onChange:function(t){return e.updateName(t.target.value)},custom:!0},this.props.staff.map((function(e){return r.a.createElement("option",null,e.name)})))),r.a.createElement(d.a.Group,null,r.a.createElement(d.a.Label,null,"Select Your Commission Rate (%)"),r.a.createElement(d.a.Control,{as:"select",size:"sm",style:{backgroundColor:"#f4ea8e"},value:this.state.newCommission,onChange:function(t){return e.updateCommission(t.target.value)},custom:!0},this.props.staff.map((function(e){return r.a.createElement("option",null,e.commission)})))),this.props.products.map((function(a){var n="updateAmount"+(t.indexOf(a.product)+1);return r.a.createElement(d.a.Group,null,r.a.createElement(d.a.Label,null,a.product),r.a.createElement(d.a.Control,{minLength:1,style:{backgroundColor:"#f4ea8e"},value:e.state["newAmount"+(t.indexOf(a.product)+1)],delayTimeout:100,type:"number",placeholder:"Enter Amount Sold",onChange:function(t){e.renderSwitch(n,t)}}))})),r.a.createElement(h.a,{size:"lg",block:!0,className:"addBtn",onClick:function(){return e.addForm(t)}},"Submit")))}}]),a}(n.Component),E=a(67),w=function(e){Object(m.a)(a,e);var t=Object(c.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var e=0,t=0;return r.a.createElement("div",null,r.a.createElement("h2",{class:"text-center"},"Employee Sales and Commissions"),r.a.createElement(E.a,{variant:"primary",striped:!0,bordered:!0,hover:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Date"),r.a.createElement("th",null,"Items Sold"),r.a.createElement("th",null,"Total Price"),r.a.createElement("th",null,"Commission Earned"))),r.a.createElement("tbody",null,this.props.report.map((function(a){return e+=a.revenue,t+=a.commission,r.a.createElement("tr",null,r.a.createElement("td",null,a.date),r.a.createElement("td",null,a.list),r.a.createElement("td",null,"$"+(Math.round(100*a.revenue)/100).toFixed(2)),r.a.createElement("td",null,"$"+(Math.round(100*a.commission)/100).toFixed(2)))})),r.a.createElement("tr",null,r.a.createElement("td",null,"TOTAL"),r.a.createElement("td",null),r.a.createElement("td",null,"$"+(Math.round(100*e)/100).toFixed(2)),r.a.createElement("td",null,"$"+(Math.round(100*t)/100).toFixed(2))))))}}]),a}(r.a.Component),A=a(71),b=a(72),f=a(68),v=a(69),y=a(41),k=a(19),g=function(e){Object(m.a)(n,e);var t=Object(c.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).getReport=a.getReport.bind(Object(i.a)(a)),a.state={newName:"",newRole:"",newCommission:"",newProduct:"",newPrice:"",report:[],staff:[{name:"Jeff Terry",role:"Senior",commission:10,id:Math.random()*Number.MAX_SAFE_INTEGER},{name:"Thomas Black",role:"Manager",commission:20,id:Math.random()*Number.MAX_SAFE_INTEGER},{name:"John Rice",role:"Junior",commission:5,id:Math.random()*Number.MAX_SAFE_INTEGER},{name:"Larry Long",role:"Junior",commission:0,id:Math.random()*Number.MAX_SAFE_INTEGER}],prices:[{product:"Fresh Lemon Lemonade",price:1.5,id:Math.random()*Number.MAX_SAFE_INTEGER},{product:"Orange & Lemon Splash",price:2,id:Math.random()*Number.MAX_SAFE_INTEGER},{product:"Sugary Shocker",price:3,id:Math.random()*Number.MAX_SAFE_INTEGER},{product:"Wild Whiskey Whack",price:5.5,id:Math.random()*Number.MAX_SAFE_INTEGER}]},a}return Object(u.a)(n,[{key:"deleteItem",value:function(e){var t=this.state.staff.filter((function(t){return t.id!==e}));this.setState({staff:t})}},{key:"deleteItem2",value:function(e){var t=this.state.prices.filter((function(t){return t.id!==e}));this.setState({prices:t})}},{key:"updateName",value:function(e){this.setState({newName:e})}},{key:"updateRole",value:function(e){this.setState({newRole:e})}},{key:"updateCommission",value:function(e){this.setState({newCommission:e})}},{key:"updateProduct",value:function(e){this.setState({newProduct:e})}},{key:"updatePrice",value:function(e){this.setState({newPrice:e})}},{key:"addItem",value:function(){var e={id:Math.random()*Number.MIN_SAFE_INTEGER,name:this.state.newName.slice(),role:this.state.newRole.slice(),commission:this.state.newCommission.slice()},t=this.state.staff;""!==e.name&&""!==e.role&&""!==e.commission?t.push(e):alert("Please fill in all fields"),this.setState({newName:"",newRole:"",newCommission:"",staff:t})}},{key:"addItem2",value:function(){var e={id:Math.random()*Number.MIN_SAFE_INTEGER,product:this.state.newProduct.slice(),price:this.state.newPrice.slice()},t=this.state.prices;""!==e.product&&""!==e.price?t.push(e):alert("Please fill in all fields"),this.setState({newProduct:"",newPrice:"",prices:t})}},{key:"getReport",value:function(e){this.setState({report:e})}},{key:"componentDidMount",value:function(){document.body.style.backgroundColor="#5fdde5",document.body.style.color="#e84a5f"}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(A.a,{className:"justify-content-end",bg:"primary"},r.a.createElement(b.a,{variant:"tabs"},r.a.createElement(b.a.Item,null,r.a.createElement(b.a.Link,null," ",r.a.createElement(k.Link,{activeClass:"active",className:"test1",to:"test1",spy:!0,smooth:!0,duration:500,style:{color:"white",fontWeight:"bold"}},"Employee List"))),r.a.createElement(b.a.Item,null,r.a.createElement(b.a.Link,null,r.a.createElement(k.Link,{activeClass:"active",className:"test2",to:"test2",spy:!0,smooth:!0,duration:500,style:{color:"white",fontWeight:"bold"}},"Product List"))),r.a.createElement(b.a.Item,null,r.a.createElement(b.a.Link,null,r.a.createElement(k.Link,{activeClass:"active",className:"test3",to:"test3",spy:!0,smooth:!0,duration:500,style:{color:"white",fontWeight:"bold"}},"Form"))),r.a.createElement(b.a.Item,null,r.a.createElement(b.a.Link,null,r.a.createElement(k.Link,{activeClass:"active",className:"test4",to:"test4",spy:!0,smooth:!0,duration:500,style:{color:"white",fontWeight:"bold"}},"Report"))))),r.a.createElement("h1",{class:"text-center"},"Lemonade Stand"),r.a.createElement("div",null,r.a.createElement(f.a,{width:"200",className:"rounded mx-auto d-block",src:a(62),alt:"Lemonade",fluid:!0,roundedCircle:!0})),r.a.createElement("br",null),r.a.createElement("h2",{name:"test1"},"Employee List"),r.a.createElement(E.a,{variant:"primary",striped:!0,bordered:!0,hover:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Full Name"),r.a.createElement("th",null,"Position"),r.a.createElement("th",null,"Commission (%)"))),r.a.createElement("tbody",null,this.state.staff.map((function(t){return r.a.createElement("tr",null,r.a.createElement("td",null,t.name),r.a.createElement("td",null,t.role),r.a.createElement("td",null,(t.commission/100*100).toFixed(2)+"%"),r.a.createElement(h.a,{variant:"danger",onClick:function(){return e.deleteItem(t.id)}},"Delete Row"))})))),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("p",{class:"h3"},"Enter a new employee"),r.a.createElement(d.a,null,r.a.createElement(v.a,{className:"mb-3"},r.a.createElement(v.a.Prepend,null,r.a.createElement(v.a.Text,{id:"basic-addon1"},"Full Name:")),r.a.createElement(y.a,{style:{backgroundColor:"#f4ea8e"},"aria-describedby":"basic-addon1",className:"in",placeholder:"Enter Full Name",type:"text",value:this.state.newName,onChange:function(t){return e.updateName(t.target.value)}})),r.a.createElement(v.a,{className:"mb-3"},r.a.createElement(v.a.Prepend,null,r.a.createElement(v.a.Text,{id:"basic-addon1"},"Position:")),r.a.createElement(y.a,{style:{backgroundColor:"#f4ea8e"},"aria-describedby":"basic-addon1",className:"in2",placeholder:"Enter Position",type:"text",value:this.state.newRole,onChange:function(t){return e.updateRole(t.target.value)}})),r.a.createElement(v.a,{className:"mb-3"},r.a.createElement(v.a.Prepend,null,r.a.createElement(v.a.Text,{id:"basic-addon1"},"Commission (%):")),r.a.createElement(y.a,{style:{backgroundColor:"#f4ea8e"},"aria-describedby":"basic-addon1",className:"in3",placeholder:"Enter Commission Rate",type:"number",value:this.state.newCommission,onChange:function(t){return e.updateCommission(t.target.value)}})),r.a.createElement(h.a,{size:"lg",block:!0,className:"addBtn",onClick:function(){return e.addItem()}},"ADD EMPLOYEE")),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("hr",{style:{color:"#000000",backgroundColor:"#000000",height:5,borderColor:"#000000"}}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("p",{class:"h3",name:"test2"},"Products and Prices"),r.a.createElement(E.a,{variant:"primary",striped:!0,bordered:!0,hover:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Lemonade"),r.a.createElement("th",null,"Price"))),r.a.createElement("tbody",null,this.state.prices.map((function(t){return r.a.createElement("tr",null,r.a.createElement("td",null,t.product),r.a.createElement("td",null,"$"+(Math.round(100*t.price)/100).toFixed(2)),r.a.createElement(h.a,{variant:"danger",onClick:function(){return e.deleteItem2(t.id)}},"Delete Row"))})))),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("p",{class:"h3"},"Add item to menu"),r.a.createElement(d.a,null,r.a.createElement(v.a,{className:"mb-3"},r.a.createElement(v.a.Prepend,null,r.a.createElement(v.a.Text,{id:"basic-addon1"},"Lemonade Name:")),r.a.createElement(y.a,{style:{backgroundColor:"#f4ea8e"},"aria-describedby":"basic-addon1",className:"in",placeholder:"Enter Product Name",type:"text",value:this.state.newProduct,onChange:function(t){return e.updateProduct(t.target.value)}})),r.a.createElement(v.a,{className:"mb-3"},r.a.createElement(v.a.Prepend,null,r.a.createElement(v.a.Text,{id:"basic-addon1"},"Price:")),r.a.createElement(y.a,{style:{backgroundColor:"#f4ea8e"},"aria-describedby":"basic-addon1",className:"in2",placeholder:"Enter Price",type:"number",value:this.state.newPrice,onChange:function(t){return e.updatePrice(t.target.value)}})),r.a.createElement(h.a,{size:"lg",block:!0,className:"addBtn",onClick:function(){return e.addItem2()}},"ADD ITEM")),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("hr",{style:{color:"#000000",backgroundColor:"#000000",height:5,borderColor:"#000000"}}),r.a.createElement("br",null),r.a.createElement("div",{name:"test3"},r.a.createElement(p,{sendReport:this.getReport,staff:this.state.staff,products:this.state.prices})),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("hr",null),r.a.createElement("div",{name:"test4"},r.a.createElement(w,{report:this.state.report})))}}]),n}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(63);l.a.render(r.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[46,1,2]]]);
//# sourceMappingURL=main.7c9a6c16.chunk.js.map