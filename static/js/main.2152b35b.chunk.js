(this["webpackJsonptrivia-test"]=this["webpackJsonptrivia-test"]||[]).push([[0],{39:function(e,t,a){e.exports=a.p+"static/media/trivia.466d153e.png"},40:function(e,t,a){e.exports=a(60)},49:function(e,t,a){},57:function(e,t){},58:function(e,t,a){},60:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(26),c=a.n(o),i=a(9),s=a(16),l=a(21),u=a(37),p=a(36),d=a(1),m=a(15),f=a.n(m),h=a(19),v=function(){return function(){var e=Object(h.a)(f.a.mark((function e(t){var a,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://opentdb.com/api_token.php?command=request",e.next=3,fetch("https://opentdb.com/api_token.php?command=request");case 3:return a=e.sent,e.next=6,a.json();case 6:n=e.sent,t({type:"UPDATE_TOKEN",token:n.token});case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},b={name:"",assertions:0,score:0,gravatarEmail:""},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_LOGIN":return Object(d.a)(Object(d.a)({},e),{},{name:t.login.nome,gravatarEmail:t.login.email});case"UPDATE_SCORE":return Object(d.a)(Object(d.a)({},e),{},{score:e.score+t.score});case"UPDATE_ASSERTIONS":return Object(d.a)(Object(d.a)({},e),{},{assertions:t.assertions+e.assertions});case"RESET_SCORE":return Object(d.a)(Object(d.a)({},e),{},{score:0,assertions:0});default:return e}},E={token:""},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_TOKEN":return t.token;default:return e}},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:30,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_TIME":return t.time;default:return e}},y=Object(l.combineReducers)({player:g,token:k,time:O}),j=Object(l.createStore)(y,Object(p.composeWithDevTools)(Object(l.applyMiddleware)(u.a)));window.Cypress&&(window.store=j);var w=j,S=(a(49),a(7)),x=a(3),T=a(4),C=a(6),A=a(5),N=a(62),_=a(27),I=function(e){Object(C.a)(a,e);var t=Object(A.a)(a);function a(){return Object(x.a)(this,a),t.apply(this,arguments)}return Object(T.a)(a,[{key:"render",value:function(){return r.a.createElement("p",null,"Carregando...")}}]),a}(r.a.Component),q=function(e){Object(C.a)(a,e);var t=Object(A.a)(a);function a(){var e;return Object(x.a)(this,a),(e=t.call(this)).onInpChange=function(t){var a=t.target;e.setState(Object(_.a)({},a.id,a.value))},e.checkEmail=function(){var t=e.state.email;return!(!t.includes("@")||!t.includes(".com"))},e.validateBtn=function(){var t=e.state.nome,a=e.checkEmail();return!(t.length>0&&a)},e.btnClick=function(){var t=Object(h.a)(f.a.mark((function t(a){var n,r,o;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),n=e.props,r=n.handleInfo,o=n.getToken,r(e.state),e.setState({loading:!0}),t.next=6,o();case 6:e.setState({redirect:!0});case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.state={nome:"",email:"",loading:!1,redirect:!1},e}return Object(T.a)(a,[{key:"render",value:function(){var e=this.state,t=e.nome,a=e.email,n=e.loading,o=e.redirect,c=this.validateBtn();return o?r.a.createElement(S.a,{to:"/game"}):n?r.a.createElement(I,null):r.a.createElement("form",{id:"email-password"},r.a.createElement("label",{htmlFor:"nome"},r.a.createElement("input",{type:"text",id:"nome",value:t,onChange:this.onInpChange,placeholder:"Nome","data-testid":"input-player-name"})),r.a.createElement("label",{htmlFor:"email"},r.a.createElement("input",{type:"text",id:"email",value:a,onChange:this.onInpChange,placeholder:"Email","data-testid":"input-gravatar-email"})),r.a.createElement(N.a,{type:"submit",disabled:c,onClick:this.btnClick,"data-testid":"btn-play"},"Play"))}}]),a}(r.a.Component),D=Object(i.b)(null,(function(e){return{handleInfo:function(t){return e({type:"UPDATE_LOGIN",login:t})},getToken:function(){return e(v())}}}))(q),P=a(39),B=a.n(P),R=function(e){Object(C.a)(a,e);var t=Object(A.a)(a);function a(){var e;return Object(x.a)(this,a),(e=t.call(this)).btnClick=function(){e.setState({redirect:!0})},e.state={redirect:!1},e}return Object(T.a)(a,[{key:"componentDidMount",value:function(){(0,this.props.clearScore)()}},{key:"render",value:function(){return this.state.redirect?r.a.createElement(S.a,{to:"/config"}):r.a.createElement("div",{className:"login-page"},r.a.createElement("header",{className:"App-header"},r.a.createElement("img",{src:B.a,className:"App-logo",alt:"logo"}),r.a.createElement("div",null,r.a.createElement(D,null),r.a.createElement(N.a,{variant:"light",type:"button","data-testid":"btn-settings",onClick:this.btnClick},"Configura\xe7\xe3o"))))}}]),a}(r.a.Component),M=Object(i.b)(null,(function(e){return{clearScore:function(){return e({type:"RESET_SCORE"})}}}))(R),U=a(29),Q=a.n(U),J=function(e){Object(C.a)(a,e);var t=Object(A.a)(a);function a(){return Object(x.a)(this,a),t.apply(this,arguments)}return Object(T.a)(a,[{key:"render",value:function(){var e=this.props,t=e.name,a=e.email,n=e.score,o=Q()(a).toString();return r.a.createElement("header",{id:"header-game"},r.a.createElement("img",{className:"foto-perfil",alt:"foto",src:"https://www.gravatar.com/avatar/".concat(o),"data-testid":"header-profile-picture"}),r.a.createElement("div",null,r.a.createElement("h2",{"data-testid":"header-player-name"},t)),r.a.createElement("div",null,"Pontua\xe7\xe3o Atual:",r.a.createElement("h2",{"data-testid":"header-score"},n)))}}]),a}(r.a.Component),z=Object(i.b)((function(e){return{name:e.player.name,email:e.player.gravatarEmail,score:e.player.score}}))(J),F=a(25),W=function(e){Object(C.a)(a,e);var t=Object(A.a)(a);function a(){var e;return Object(x.a)(this,a),(e=t.call(this)).resetTime=function(t){var a=e.props,n=a.question,r=a.disableBtn;t.question!==n&&e.setState({tempo:30},(function(){r(!1),e.handleTime()}))},e.handleTime=function(){if(e.props.respondido)return e.setState((function(e){return{tempo:e.tempo+2}}),(function(){(0,e.props.disableBtn)(!0)})),null;var t=e.state.tempo;if(0===t)return(0,e.props.disableBtn)(!0),null;var a=e.props.atualizaTempo;setTimeout((function(){e.setState((function(e){return{tempo:e.tempo-1}})),a(t),e.handleTime()}),1e3)},e.state={tempo:30},e}return Object(T.a)(a,[{key:"componentDidMount",value:function(){this.handleTime()}},{key:"componentDidUpdate",value:function(e){this.resetTime(e)}},{key:"render",value:function(){var e=this.state.tempo;return r.a.createElement("div",{className:"timer"},r.a.createElement("h2",null,e))}}]),a}(r.a.Component),G=Object(i.b)(null,(function(e){return{atualizaTempo:function(t){return e({type:"UPDATE_TIME",time:t})}}}))(W),K=function(e){Object(C.a)(a,e);var t=Object(A.a)(a);function a(){var e;return Object(x.a)(this,a),(e=t.call(this)).updateToken=function(){e.setState((function(e){return{validToken:!e.validToken}}))},e.requestAPI=Object(h.a)(f.a.mark((function t(){var a,n,r,o;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.props.token,n="https://opentdb.com/api.php?amount=5&token=".concat(a),t.next=4,fetch(n);case 4:return r=t.sent,t.next=7,r.json();case 7:return o=t.sent,e.setState({respostaApi:e.fixQuestion(o)}),t.abrupt("return",o);case 10:case"end":return t.stop()}}),t)}))),e.validateAPI=Object(h.a)(f.a.mark((function t(){var a,n;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.requestAPI();case 2:a=t.sent,3,3===a.response_code&&(0,e.props.getToken)(),n=e.state.index,4,n<=4&&e.prepareQuestion();case 8:case"end":return t.stop()}}),t)}))),e.handleBtn=function(t){var a=t.target;e.setState({validateColor:!0,respondido:!0}),"correct"===a.name&&e.checkScore()},e.shufleArray=function(e){return e.sort((function(){return Math.random()-.5}))},e.checkScore=function(){var t=e.state,a=t.respostaApi.results,n=t.index,r=e.props,o=r.dispatchUpdatedScore,c=r.updateAssertion,i=3;switch(a[n].difficulty){case"easy":i=1;break;case"medium":i=2;break;default:i=3}o(10+e.props.time*i),c(1)},e.disableBtn=function(t){t?e.setState({disabled:!0}):e.setState({disabled:!1})},e.prepareQuestion=function(){var t=e.state,a=t.respostaApi.results,n=t.index;if(void 0===a||n>4)return"";var r=a[n],o=Object(F.a)(r.incorrect_answers).map((function(e,t){return{response:e,ind:t}})),c=[r.correct_answer].concat(Object(F.a)(o)),i=e.shufleArray(c);e.setState({shufleButtons:i})},e.fixQuestion=function(e){return e.results.forEach((function(e){e.question=e.question.replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#039;/g,"'"),e.correct_answer=e.correct_answer.replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#039;/g,"'"),e.incorrect_answers=e.incorrect_answers.map((function(e){return e.replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#039;/g,"'")}))})),e},e.renderQuestions=function(){var t=e.state,a=t.respostaApi.results,n=t.index,o=t.shufleButtons,c=t.validateColor,i=t.disabled;if(void 0===a)return"";var s=!0===c?"success":null,l=!0===c?"danger":null,u=a[n];return r.a.createElement("div",{className:"questionsMain"},r.a.createElement("div",{className:"questions"},r.a.createElement("h2",{"data-testid":"question-category",className:"question-category"},u.category),r.a.createElement("h2",{"data-testid":"question-text",className:"question-text"},u.question)),r.a.createElement("div",{"data-testid":"answer-options",className:"answer-container"},r.a.createElement("div",{className:"answer-options"},o.map((function(t,a){return r.a.createElement(N.a,{variant:t===u.correct_answer?s:l,onClick:e.handleBtn,name:t===u.correct_answer?"correct":"incorrect",key:a,type:"button",disabled:i,className:"options-button","data-testid":t===u.correct_answer?"correct-answer":"wrong-answer-".concat(t.ind)},void 0===t.response?t:t.response)}))),r.a.createElement("div",null,e.renderNextQuestion())))},e.nextQuestion=function(){if(e.state.index>4)return null;e.setState((function(e){return{index:e.index+1,validateColor:!1,respondido:!1}}),(function(){e.prepareQuestion()}))},e.renderNextQuestion=function(){if(!0===e.state.disabled)return r.a.createElement(N.a,{variant:"primary",size:"lg",type:"button",onClick:e.nextQuestion,className:"btn-next","data-testid":"btn-next"},"Next")},e.state={validToken:!1,respostaApi:"vazio",index:0,disabled:!1,validateColor:!1,shufleButtons:[],respondido:!1},e}return Object(T.a)(a,[{key:"componentDidMount",value:function(){this.validateAPI(),w.subscribe(this.updateToken)}},{key:"render",value:function(){var e=this.state,t=e.index,a=e.respondido;return t<=4?r.a.createElement("div",null,r.a.createElement(G,{disableBtn:this.disableBtn,question:t,respondido:a}),this.renderQuestions()):r.a.createElement(S.a,{to:"/feedback"})}}]),a}(r.a.Component),L=Object(i.b)((function(e){return{token:e.token,time:e.time}}),(function(e){return{getToken:function(){return e(v())},dispatchUpdatedScore:function(t){return e(function(e){return{type:"UPDATE_SCORE",score:e}}(t))},updateAssertion:function(t){return e(function(e){return{type:"UPDATE_ASSERTIONS",assertions:e}}(t))}}}))(K),V=function(e){Object(C.a)(a,e);var t=Object(A.a)(a);function a(){return Object(x.a)(this,a),t.apply(this,arguments)}return Object(T.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(z,null),r.a.createElement(L,null))}}]),a}(r.a.Component),$=function(e){Object(C.a)(a,e);var t=Object(A.a)(a);function a(){return Object(x.a)(this,a),t.apply(this,arguments)}return Object(T.a)(a,[{key:"render",value:function(){return r.a.createElement("h2",{"data-testid":"settings-title"},"Configura\xe7\xf5es")}}]),a}(r.a.Component),H=function(e){Object(C.a)(a,e);var t=Object(A.a)(a);function a(){var e;Object(x.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).compare=function(e,t){return e.score>t.score?-1:e.score<t.score?1:0},e.handleRanking=function(){var t=e.props,a=t.email,n=t.name,r=t.score,o=Q()(a).toString(),c="https://www.gravatar.com/avatar/".concat(o),i=JSON.parse(localStorage.getItem("ranking")),s=null===i?"":i,l={name:n,score:r,picture:c},u=[].concat(Object(F.a)(s),[l]);u.sort(e.compare),localStorage.setItem("ranking",JSON.stringify(u))},e.motivationMessage=function(){var t=e.props,a=t.assertions,n=t.score;return localStorage.setItem("score",n),localStorage.setItem("assertions",a),a<3?"Could be better...":a>=3?"Well Done!":void 0},e.playAgain=function(){e.props.history.push("/")},e}return Object(T.a)(a,[{key:"componentDidMount",value:function(){this.handleRanking()}},{key:"render",value:function(){var e=this.props,t=e.assertions,a=e.score;return r.a.createElement(r.a.Fragment,null,r.a.createElement(z,null),r.a.createElement("main",null,r.a.createElement("div",{className:"feedback"},r.a.createElement("h1",{"data-testid":"feedback-text"},this.motivationMessage()),r.a.createElement("p",null,"Placar total:"),r.a.createElement("p",{"data-testid":"feedback-total-score"},a),r.a.createElement("p",null,"Quest\xf5es corretas:"),r.a.createElement("p",{"data-testid":"feedback-total-question"},t)),r.a.createElement("div",{className:"feedback-buttons"},r.a.createElement(s.b,{to:"/ranking"},r.a.createElement(N.a,{variant:"info",type:"button","data-testid":"btn-ranking"},"Ranking")),r.a.createElement(N.a,{variant:"info",type:"button","data-testid":"btn-play-again",onClick:this.playAgain},"Pagina inicial"))))}}]),a}(r.a.Component),X=Object(i.b)((function(e){return{assertions:e.player.assertions,score:e.player.score,email:e.player.gravatarEmail,name:e.player.name}}))(H),Y=a(61),Z=function(e){Object(C.a)(a,e);var t=Object(A.a)(a);function a(){return Object(x.a)(this,a),t.apply(this,arguments)}return Object(T.a)(a,[{key:"render",value:function(){var e=this.props,t=e.name,a=e.score,n=e.picture,o=e.index;return r.a.createElement(Y.a,{style:{width:"18rem"},className:"ranking-score-container"},r.a.createElement(Y.a.Img,{variant:"top",src:n,alt:"foto de perfil",class:"picture"}),r.a.createElement(Y.a.Body,null,r.a.createElement(Y.a.Title,{"data-testid":"player-name-".concat(o)},t),r.a.createElement(Y.a.Text,{"data-testid":"player-score-".concat(o)},a)))}}]),a}(r.a.Component),ee=function(e){Object(C.a)(a,e);var t=Object(A.a)(a);function a(){var e;return Object(x.a)(this,a),(e=t.call(this)).handleRanking=function(){var t=JSON.parse(localStorage.getItem("ranking"));t&&e.setState({ranking:t})},e.state={ranking:[]},e}return Object(T.a)(a,[{key:"componentDidMount",value:function(){this.handleRanking()}},{key:"render",value:function(){var e=this.state.ranking;return r.a.createElement("div",{className:"ranking-page"},r.a.createElement("h1",{"data-testid":"ranking-title"},"Ranking"),r.a.createElement("div",{className:"players-ranking"},void 0!==e&&e.length>0?e.map((function(e,t){var a=e.name,n=e.score,o=e.picture;return r.a.createElement(Z,{key:t,name:a,score:n,picture:o,index:t})})):r.a.createElement("p",null,"Ainda n\xe3o jogou")),r.a.createElement(s.b,{to:"/"},r.a.createElement(N.a,{variant:"primary",type:"button","data-testid":"btn-go-home"},"Voltar ao in\xedcio")))}}]),a}(r.a.Component);a(58);function te(){return r.a.createElement("div",{className:"App"},r.a.createElement(S.d,null,r.a.createElement(S.b,{exact:!0,path:"/",component:M}),r.a.createElement(S.b,{path:"/game",component:V}),r.a.createElement(S.b,{path:"/config",component:$}),r.a.createElement(S.b,{path:"/feedback",component:X}),r.a.createElement(S.b,{path:"/ranking",component:ee})))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(59);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(i.a,{store:w},r.a.createElement(s.a,null,r.a.createElement(te,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[40,1,2]]]);
//# sourceMappingURL=main.2152b35b.chunk.js.map