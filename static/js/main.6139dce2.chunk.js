(this.webpackJsonpanimal_crossing=this.webpackJsonpanimal_crossing||[]).push([[0],{190:function(e,t,a){e.exports=a(387)},387:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(5),i=a.n(r),s=a(40),c=a(41),o=a(46),u=a(47),h=a(398),m=a(390),p=a(396),d=a(391),E=a(103),C=a(18),g=a(389),f=a(178),b=a(392),I=a(400),k=a(399),v=a(401),O=(a(195),a(91)),w=a(70),y=a(394),S=a(393),N=a(395),j=a(397),M=a(78),F=a(196),P=new Promise((function(e,t){F.get("https://sheltered-dusk-56497.herokuapp.com/api/users").then((function(t){var a=[];return t.data.forEach((function(e){var t={};switch(t.key=e._id,t.IslandName=e.IslandName,t.TurnipPrice=e.TurnipPrice,t.Password=e.Password,e.FruitType){case"PEACH":t.FruitType="\u6843\u5b50";break;case"PEAR":t.FruitType="\u68a8";break;case"APPLE":t.FruitType="\u82f9\u679c";break;case"ORANGE":t.FruitType="\u6a58\u5b50";break;case"CHERRY":t.FruitType="\u6a31\u6843"}switch(t.FriendID=e.FriendID,e.NorthSouth){case"North":t.NorthSouth="\u5317\u534a\u7403";break;case"South":t.NorthSouth="\u5357\u534a\u7403"}t.Comment=e.Comment,a.push(t)})),e(a)})).catch((function(e){return t(e)}))})),x=function(e){Object(u.a)(a,e);var t=Object(o.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).handleSubmit=function(){var e=n.state.userInput,t=e.name,a=e.price,r=e.password,i=e.fruit,s=e.friendCode,c=e.northSouth,o=e.hour,u=e.minute,m=e.comment,p=60*Number(o)+Number(u),d={IslandName:t,TurnipPrice:a,Password:r.toUpperCase(),FruitType:i,FriendID:s,NorthSouth:c,Period:p,Comment:m},E=[];t.length>15&&E.push(l.a.createElement(h.a,{message:"\u5c9b\u540d\u8fc7\u957f",type:"warning",showIcon:!0})),(Number(a)<=0||Number(a)>1e3||isNaN(Number(a)))&&E.push(l.a.createElement(h.a,{message:"\u4ef7\u683c\u8fc7\u4f4e\u6216\u8fc7\u9ad8",type:"warning",showIcon:!0}));5===r.length&&/([0-9A-Z]){5}/g.test(r.toUpperCase())||0!==r.length&&E.push(l.a.createElement(h.a,{message:"\u4e0a\u5c9b\u5bc6\u7801\u9519\u8bef",type:"warning",showIcon:!0}));12===s.length&&/[0-9]{12}/g.test(s)||0!==s.length&&E.push(l.a.createElement(h.a,{message:"\u597d\u53cb\u7801\u9519\u8bef",type:"warning",showIcon:!0})),(isNaN(p)||0===p)&&E.push(l.a.createElement(h.a,{message:"\u65f6\u957f\u4e0d\u80fd\u4e3a0",type:"warning",showIcon:!0})),m.length>200&&E.push(l.a.createElement(h.a,{message:"\u5907\u6ce8\u6587\u5b57\u8d85\u8fc7200",type:"warning",showIcon:!0})),n.setState({errMessage:E}),E.length||function(e){return new Promise((function(t,a){F.post("https://sheltered-dusk-56497.herokuapp.com/api/users",e).then((function(e){return t(e.data)})).catch((function(e){return a(e)}))}))}(d).then((function(e){n.props.handleSuccess(),n.props.handleClick()})).catch((function(e){n.setState({errMessage:l.a.createElement(h.a,{message:"\u8b66\u544a",description:"\u8bbf\u95ee\u540e\u53f0\u6570\u636e\u51fa\u9519\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5",type:"error",closable:!0,showIcon:!0})})}))},n.handleChange=function(e){n.setState({userInput:Object(w.a)({},n.state.userInput,Object(O.a)({},e.target.name,e.target.value))})},n.handleFruitChange=function(e){n.setState({userInput:Object(w.a)({},n.state.userInput,{fruit:e})})},n.handleNSChange=function(e){n.setState({userInput:Object(w.a)({},n.state.userInput,{northSouth:e})})},n.handleHourChange=function(e){n.setState({userInput:Object(w.a)({},n.state.userInput,{hour:e})})},n.handleMinuteChange=function(e){n.setState({userInput:Object(w.a)({},n.state.userInput,{minute:e})})},n.state={userInput:{name:"",price:0,password:"",fruit:"",friendCode:"",northSouth:"",hour:0,minute:0,comment:""},errMessage:[]},n}return Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(y.a,{maskClosable:!1,title:"\u6dfb\u52a0\u65b0\u8bb0\u5f55",visible:this.props.visible,onOk:this.props.handleClick,onCancel:this.props.handleClick,width:600,footer:[l.a.createElement(C.a,{key:"goBack",onClick:this.props.handleClick},"Cancel"),l.a.createElement(C.a,{key:"submit",type:"primary",onClick:this.handleSubmit},"Submit")]},l.a.createElement(S.a,{labelCol:{span:7},wrapperCol:{span:14},layout:"horizontal"},l.a.createElement(S.a.Item,{label:"\u5c9b\u540d"},l.a.createElement(N.a,{name:"name",onChange:this.handleChange,value:this.state.userInput.name})),l.a.createElement(S.a.Item,{required:!0,label:"\u5927\u5934\u83dc\u4ef7\u683c"},l.a.createElement(N.a,{name:"price",onChange:this.handleChange,value:this.state.userInput.price})),l.a.createElement(S.a.Item,{required:!0,label:"\u4ef7\u683c\u6709\u6548\u65f6\u957f"},l.a.createElement(g.a,null,l.a.createElement(j.a,{min:"0",max:"10",name:"hour",onChange:this.handleHourChange,value:this.state.userInput.hour}),"\u5c0f\u65f6",l.a.createElement(M.a,{name:"minute",style:{width:120},onChange:this.handleMinuteChange,value:this.state.userInput.minute},l.a.createElement(M.a.Option,{value:"0"},"0"),l.a.createElement(M.a.Option,{value:"30"},"30")),"\u5206\u949f")),l.a.createElement(S.a.Item,{label:"\u4e0a\u5c9b\u5bc6\u7801"},l.a.createElement(N.a,{name:"password",onChange:this.handleChange,value:this.state.userInput.password})),l.a.createElement(S.a.Item,{label:"\u6c34\u679c\u7c7b\u578b"},l.a.createElement(M.a,{onChange:this.handleFruitChange,value:this.state.userInput.fruit},l.a.createElement(M.a.Option,{value:"PEACH"},"\u6843\u5b50"),l.a.createElement(M.a.Option,{value:"PEAR"},"\u68a8"),l.a.createElement(M.a.Option,{value:"APPLE"},"\u82f9\u679c"),l.a.createElement(M.a.Option,{value:"ORANGE"},"\u6a58\u5b50"),l.a.createElement(M.a.Option,{value:"CHERRY"},"\u6a31\u6843"))),l.a.createElement(S.a.Item,{label:"\u5357/\u5317\u534a\u7403"},l.a.createElement(M.a,{name:"northSouth",onChange:this.handleNSChange,value:this.state.userInput.northSouth},l.a.createElement(M.a.Option,{value:"North"},"\u5317\u534a\u7403"),l.a.createElement(M.a.Option,{value:"South"},"\u5357\u534a\u7403"))),l.a.createElement(S.a.Item,{label:"\u597d\u53cb\u7801"},l.a.createElement(N.a,{name:"friendCode",addonBefore:"SW -",onChange:this.handleChange,value:this.state.userInput.friendCode})),l.a.createElement(S.a.Item,{label:"\u5907\u6ce8"},l.a.createElement(N.a.TextArea,{row:4,name:"comment",onChange:this.handleChange,value:this.state.userInput.comment}))),this.state.errMessage))}}]),a}(n.Component),H=function(e){Object(u.a)(a,e);var t=Object(o.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={},n}return Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(y.a,{title:"\u5982\u4f55\u4f7f\u7528\u672c\u7f51\u7ad9",visible:this.props.visible,onOk:this.props.handleClick,onCancel:this.props.handleClick,width:"50%",footer:[l.a.createElement(C.a,{key:"ok",type:"primary",onClick:this.props.handleClick},"OK")]},l.a.createElement("h5",null,"\u67e5\u8be2\u4fe1\u606f"),l.a.createElement("p",null,"\u8bf7\u4f7f\u7528\u4e3b\u9875\u8868\u683c\u7b5b\u9009\uff0c\u6392\u5e8f\u7b5b\u9009\u5408\u9002\u7684\u5927\u5934\u83dc\u4fe1\u606f,\u6570\u636e\u5e93\u4f1a\u5220\u9664\u4ef7\u683c\u6709\u6548\u65f6\u957f\u5230\u671f\u7684\u6570\u636e"),l.a.createElement("h5",null,"\u6dfb\u52a0\u65b0\u7eaa\u5f55"),l.a.createElement("p",null,"\u8bf7\u4f7f\u7528\u6dfb\u52a0\u6309\u94ae\u6dfb\u52a0\u65b0\u7684\u5927\u5934\u83dc\u8bb0\u5f55\u4fe1\u606f"),l.a.createElement("h6",null,"\u5c9b\u540d"),l.a.createElement("p",null,"\u9009\u586b\u9879\uff0c\u6dfb\u52a0\u5c9b\u540d\u4fe1\u606f\u65b9\u4fbf\u5c0f\u4f19\u4f34\u786e\u8ba4\u5373\u5c06\u8fde\u63a5\u7684\u5c9b\u662f\u5426\u6b63\u786e"),l.a.createElement("h6",null,"\u5927\u5934\u83dc\u4ef7\u683c"),l.a.createElement("p",null,l.a.createElement("b",null,"\u5fc5\u586b\u9879"),"\uff0c\u8bf7\u586b\u51990~1000\u4ee5\u5185\u7684\u6570\u5b57\uff0c\u5c9b\u4e0a\u5927\u5934\u83dc\u8d85\u8fc71000\u94c3\u94b1\u7684\u5c0f\u4f19\u4f34\u8bf7\u76f4\u63a5\u8054\u7cfb\u6211 \uff1a\uff09"),l.a.createElement("h6",null,"\u4ef7\u683c\u6709\u6548\u65f6\u957f"),l.a.createElement("p",null,l.a.createElement("b",null,"\u5fc5\u586b\u9879"),"\uff0c\u8bf7\u9009\u62e9\u6570\u636e\u53d1\u5e03\u65f6\u957f\uff0c\u53ef\u4ee5\u9009\u62e9\u4f60\u60f3\u8981\u5f00\u5c9b\u7684\u65f6\u957f\uff0c\u6700\u957f\u4e0d\u80fd\u8d85\u8fc7\u5546\u5e97\u5173\u95e8\u65f6\u95f4"),l.a.createElement("h6",null,"\u4e0a\u5c9b\u5bc6\u7801"),l.a.createElement("p",null,"\u9009\u586b\u9879\uff0c\u65b9\u4fbf\u5c0f\u4f19\u4f34\u4e0a\u5c9b\uff0c\u5355\u7eaf\u7684\u60f3\u5206\u4eab\u9ad8\u4ef7\u5927\u5934\u83dc\u7684\u5feb\u4e50\u6211\u4eec\u4e5f\u6b22\u8fce :("),l.a.createElement("h6",null,"\u6c34\u679c\u7c7b\u578b\u548c\u5357/\u5317\u534a\u7403"),l.a.createElement("p",null,"\u9009\u586b\u9879\uff0c\u52fe\u642d\u4e0d\u540c\u7279\u4ea7/\u534a\u7403\u7684\u5c0f\u4f19\u4f34\uff0c\u4e07\u4e00\u6709\u5c0f\u4f19\u4f34\u60f3\u6765\u503e\u9500\u672c\u5730\u6c34\u679c/\u9493\u9c7c\u5462"),l.a.createElement("h6",null,"\u597d\u53cb\u7801"),l.a.createElement("p",null,"\u9009\u586b\u9879\uff0c\u5982\u586b\u5199\u8bf7\u6b63\u786e\u8f93\u516511\u4f4d\u6570\u5b57"),l.a.createElement("h6",null,"\u5907\u6ce8"),l.a.createElement("p",null,"\u9009\u586b\u9879\uff0c\u65b9\u4fbf\u7559\u8a00\u52fe\u642d\u5c0f\u4f19\u4f34\uff0c\u5907\u6ce8\u6d41\u661f/\u9a86\u9a7c/\u866b\u5546\u4eba/\u9c7c\u5546\u4eba\u7b49\u4fe1\u606f\uff0c\u6700\u957f\u4e0d\u8d85\u8fc7300\u5b57")))}}]),a}(n.Component),T=function(e){Object(u.a)(a,e);var t=Object(o.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={},n}return Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(y.a,{title:"\u611f\u8c22\u4f7f\u7528\u672c\u7f51\u7ad9",visible:this.props.visible,onOk:this.props.handleClick,onCancel:this.props.handleClick,footer:[l.a.createElement(C.a,{key:"ok",type:"primary",onClick:this.props.handleClick},"OK")]},l.a.createElement("p",null,"\u5176\u4ed6\u529f\u80fd\u8fd8\u5728\u8bbe\u8ba1\u5f00\u53d1\u4e2d\uff0c \u5982\u679c\u5bf9\u7f51\u7ad9\u529f\u80fd\u6709\u4efb\u4f55\u7591\u95ee\u6216\u5efa\u8bae\uff0c \u6b22\u8fce\u5728Github\u63d0\u51fa\u5efa\u8bae ",l.a.createElement("a",{href:"https://github.com/CharlesWang653/animal_crossing/issues"},"Github\u9879\u76eeIssue\u4e13\u533a"))))}}]),a}(n.Component),A=function(e){Object(u.a)(a,e);var t=Object(o.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).handleCreateClick=function(){n.setState({isCreateModalOpen:!n.state.isCreateModalOpen})},n.handleHelpClick=function(){n.setState({isHelpModalOpen:!n.state.isHelpModalOpen})},n.handleInfoClick=function(){n.setState({isInfoModalOpen:!n.state.isInfoModalOpen})},n.handleSuccess=function(){n.setState({messageHolder:l.a.createElement(h.a,{message:"\u65b0\u5efa\u6210\u529f",description:"\u65b0\u5efa\u6570\u636e\u6210\u529f\uff01\u8bf7\u5237\u65b0\u9875\u9762\u67e5\u770b\u3002",type:"success",closable:!0,showIcon:!0})})},n.state={isCreateModalOpen:!1,isHelpModalOpen:!1,isInfoModalOpen:!1,data:[],pending:!0,messageHolder:""},n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;P.then((function(t){e.setState({data:t,pending:!1})})).catch((function(t){e.setState({pending:!1,messageHolder:l.a.createElement(h.a,{message:"\u8b66\u544a",description:"\u8bbf\u95ee\u540e\u53f0\u6570\u636e\u51fa\u9519\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5",type:"error",closable:!0,showIcon:!0})})}))}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(m.a,null,l.a.createElement(p.a,{title:"\u52a8\u68ee\u5927\u5934\u83dc\u9ad8\u4ef7\u4ea4\u6613",subTitle:"Beta 1.0"})),l.a.createElement(m.a,null,l.a.createElement(d.a,{span:2,offset:18},l.a.createElement(E.a,{title:"\u6dfb\u52a0"},l.a.createElement(C.a,{type:"primary",shape:"circle",icon:l.a.createElement(I.a,null),onClick:this.handleCreateClick}))),l.a.createElement(d.a,{span:4},l.a.createElement(g.a,null,l.a.createElement(E.a,{title:"\u4f7f\u7528\u8bf4\u660e"},l.a.createElement(C.a,{type:"primary",shape:"circle",icon:l.a.createElement(k.a,null),onClick:this.handleHelpClick})),l.a.createElement(E.a,{title:"\u8054\u7cfb\u6211\u4eec"},l.a.createElement(C.a,{type:"primary",shape:"circle",icon:l.a.createElement(v.a,null),onClick:this.handleInfoClick})),l.a.createElement(x,{visible:this.state.isCreateModalOpen,handleClick:this.handleCreateClick,handleSuccess:this.handleSuccess}),l.a.createElement(H,{visible:this.state.isHelpModalOpen,handleClick:this.handleHelpClick}),l.a.createElement(T,{visible:this.state.isInfoModalOpen,handleClick:this.handleInfoClick})))),l.a.createElement(m.a,null,l.a.createElement(d.a,{span:20,offset:2},this.state.messageHolder,this.state.pending?l.a.createElement("div",{style:{textAlign:"center"}},l.a.createElement(f.a,{size:"large"})):l.a.createElement(b.a,{columns:[{title:"\u5c9b\u540d",dataIndex:"IslandName",width:"10%"},{title:"\u5927\u5934\u83dc\u4ef7\u683c",dataIndex:"TurnipPrice",defaultSortOrder:"descend",sorter:function(e,t){return e.TurnipPrice-t.TurnipPrice},width:"8%"},{title:"\u4e0a\u5c9b\u5bc6\u7801",dataIndex:"Password",width:"8%"},{title:"\u672c\u5730\u6c34\u679c",dataIndex:"FruitType",filters:[{text:"\u6843\u5b50",value:"\u6843\u5b50"},{text:"\u68a8",value:"\u68a8"},{text:"\u82f9\u679c",value:"\u82f9\u679c"},{text:"\u6a58\u5b50",value:"\u6a58\u5b50"},{text:"\u6a31\u6843",value:"\u6a31\u6843"}],filterMultiple:!0,onFilter:function(e,t){return 0===t.FruitType.indexOf(e)},width:"8%"},{title:"\u597d\u53cb\u7801",dataIndex:"FriendID",width:"10%"},{title:"\u5730\u7406\u4f4d\u7f6e",dataIndex:"NorthSouth",filters:[{text:"\u5357\u534a\u7403",value:"\u5357\u534a\u7403"},{text:"\u5317\u534a\u7403",value:"\u5317\u534a\u7403"}],filterMultiple:!1,onFilter:function(e,t){return 0===t.NorthSouth.indexOf(e)},width:"10%"},{title:"\u5907\u6ce8",dataIndex:"Comment"}],dataSource:this.state.data,pagination:{pageSize:25}}))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(A,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[190,1,2]]]);
//# sourceMappingURL=main.6139dce2.chunk.js.map