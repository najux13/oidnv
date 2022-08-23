function _extends() {_extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};return _extends.apply(this, arguments);} // http://stackoverflow.com/questions/36403930/complex-animation-possible-with-reactcsstransitiongroup-and-react-router
const ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;
const { render } = ReactDOM;
const { IndexRoute, Link, Route, Router, hashHistory } = ReactRouter;

const pageTransitionName = "page";
const repoTransitionName = "repo";
const transitionClassName = "transition-group";
const transitionDuration = 300;
const transitionEnterTimeout = 2 * transitionDuration;

render( /*#__PURE__*/
React.createElement(Router, { history: hashHistory }, /*#__PURE__*/
React.createElement(Route, { path: "/", component: App }, /*#__PURE__*/
React.createElement(IndexRoute, { component: Home }), /*#__PURE__*/
React.createElement(Route, { path: "/repos", component: Repos }, /*#__PURE__*/
React.createElement(Route, { path: "/repos/:userName/:repoName", component: Repo })), /*#__PURE__*/

React.createElement(Route, { path: "/about", component: About }))),


document.getElementById('app'));


function App(props) {
  return /*#__PURE__*/(
    React.createElement("div", { className: "App" }, /*#__PURE__*/
    React.createElement("header", { className: "App-header" }, /*#__PURE__*/
    React.createElement("h1", { className: "App-heading" }, /*#__PURE__*/
    React.createElement(NavLink, { to: "/" }, "Isso n\xE3o \xE9 sobre n\xF3s, \xE9 sobre mim.")), /*#__PURE__*/

    React.createElement("nav", null, /*#__PURE__*/
    React.createElement("ul", { className: "App-navList" }, /*#__PURE__*/
    React.createElement("li", null, /*#__PURE__*/React.createElement(NavLink, { to: "/", onlyActiveOnIndex: true }, "Home")), /*#__PURE__*/
    React.createElement("li", null, /*#__PURE__*/React.createElement(NavLink, { to: "/about" }, "A gente?")), /*#__PURE__*/
    React.createElement("li", null, /*#__PURE__*/React.createElement(NavLink, { to: "/repos" }, "Uma mensagem"))))), /*#__PURE__*/



    React.createElement("main", { className: "App-body" }, /*#__PURE__*/
    React.createElement(ReactCSSTransitionGroup, {
      component: "div",
      className: transitionClassName,
      transitionName: pageTransitionName,
      transitionEnterTimeout: transitionEnterTimeout,
      transitionLeaveTimeout: transitionDuration },

    React.cloneElement(props.children, {
      key: getSubstringUntilNth(props.location.pathname, '/', 2) })))));





}

function NavLink(props) {
  return /*#__PURE__*/React.createElement(Link, _extends({}, props, { className: "NavLink", activeClassName: "active" }));
}

function Home() {
  return /*#__PURE__*/(
    React.createElement("div", { className: "Home" }, /*#__PURE__*/
    React.createElement("h2", { className: "Home-heading" }, "Home"), /*#__PURE__*/
    React.createElement("p", null, "Ol\xE1, eu fiz isso com carinho, ou n\xE3o tamb\xE9m"), /*#__PURE__*/
    React.createElement("p", null, "Que engra\xE7adinha, rs... ", /*#__PURE__*/React.createElement("a", { href: "https://i.pinimg.com/originals/3f/e1/5e/3fe15eff0b68bdaead907b6caf1afd49.jpg" }, "clique aqui e veja the nuggets ou s\xF3 um cachorro quente"), ".")));


}

function About() {
  return /*#__PURE__*/(
    React.createElement("div", { className: "About" }, /*#__PURE__*/
    React.createElement("h2", { className: "About-heading" }, "A gente?"), /*#__PURE__*/
    React.createElement("p", { className: "About-body" }, "look at this"), /*#__PURE__*/
    React.createElement("p", null, "Nada n\xE9? \xC9 que eu n\xE3o pensei direito nisso...Mas olha o link"), /*#__PURE__*/
    React.createElement("div", { className: "Square" }, /*#__PURE__*/
    React.createElement("p", null, /*#__PURE__*/React.createElement("a", { href: "https://thumbs.web.sapo.io/?W=800&H=0&delay_optim=1&epic=ZTc1v4BoE6yraPwPh5l+S1e9G/Vq7zT2VylJRRk5aDEJ4Fan7kG2hTnjWjSVlk1SwudP6Gz0T/rRd4h/a75nVykRJGdBHBTeB1N7+wdYjwJj3n8=" }, "Lembra dessa?")), /*#__PURE__*/
    React.createElement("p", null, "Epa, errei o link"), /*#__PURE__*/
    React.createElement("p", null, /*#__PURE__*/React.createElement("a", { href: "https://youtu.be/AEXPV3SU3RE" }, "Lembra dessa?")), /*#__PURE__*/
    React.createElement("p", null, /*#__PURE__*/React.createElement("a", { href: "https://youtu.be/GQBrcSr7z40" }, "E dessa kkk?"))), /*#__PURE__*/

    React.createElement("p", null, "Isso sim \xE9 sobre a gente(?), vamos ter muitas recorda\xE7\xF5es, n\xE3o?")));


}

function Repos(props) {
  return /*#__PURE__*/(
    React.createElement("div", { className: "Repos" }, /*#__PURE__*/
    React.createElement("h2", { className: "About-heading" }, "Uma mensagem"), /*#__PURE__*/
    React.createElement("div", { className: "Message" }, /*#__PURE__*/
    React.createElement("p", null, "Bom, eu s\xF3 fiz esse site meia boca (com React cara!) pra te mandar tipo de uma carta(?), sei l\xE1, fiz esse esfor\xE7o porque gosto de voc\xEA e achei criativo..."), /*#__PURE__*/


    React.createElement("p", null, "Mas isso se trata de um assunto s\xE9rio, de uma decis\xE3o s\xE9ria que vai mudar muita coisa."), /*#__PURE__*/


    React.createElement("p", null, "Ontem voc\xEA me disse que quer um tempo da nossa rela\xE7\xE3o, que est\xE1 confuso, que n\xE3o sabe, mas que me ama. E eu parei pra pensar que dar um tempo n\xE3o existe! Eu n\xE3o quero ser indecis\xE3o de ningu\xE9m mano, ou algu\xE9m quer alguma coisa ou n\xE3o quer, se coloca no meu lugar poxa, imagina a inseguran\xE7a que isso me causa. Por um momento eu me senti um lixo por n\xE3o ser apta a estar inclusa no seu futuro, mas eu vejo agora tudo que tenho de bom e tudo que estive disposta a melhorar por voc\xEA e o quanto eu LUTEI e entreguei tanto de mim p ver se tu ficava feliz...Mas n\xE3o, isso n\xE3o adiantou, ent\xE3o n\xE3o tem mais oq EU fazer."), /*#__PURE__*/


    React.createElement("p", null, "Quando algu\xE9m pedi um tempo num relacionamento, \xE9 porque est\xE1 com a cabe\xE7a no t\xE9rmino, ent\xE3o por favor, me fala se eu tenho que ir embora ou se voc\xEA quer me ", /*#__PURE__*/
    React.createElement("strong", null, "amar"), ". Eu ainda n\xE3o consigo entender o fato de eu ser a \"garota incr\xEDvel\" com um cora\xE7\xE3o enorme mas nunca a escolhida..."), /*#__PURE__*/

    React.createElement("p", null, "Cara eu sinceramente n\xE3o sei o motivo de tanta confus\xE3o, e eu to extremamente triste de n\xE3o poder ficar com voc\xEA de uma forma mais suave...T\xF4 tendo que deixar tudo o que sonhei pra n\xF3s, deixar minha emo\xE7\xE3o, meu amor e todas as putas mem\xF3rias que a gente tem juntos no passado, pra pensar mais com raz\xE3o, e a raz\xE3o diz que eu j\xE1 fiz tudo e que se trata de uma escolha sua agora e eu posso ser a menina perfeita que n\xE3o muda."), /*#__PURE__*/


    React.createElement("p", null, "E um tempo separados n\xE3o vai mudar nada mas sim nos distanciar, talvez at\xE9 de algo melhor!"), /*#__PURE__*/


    React.createElement("p", null, "Jo\xE3o, voc\xEA lembra de quando a gente voltou l\xE1 em maio? E voc\xEA me prometeu que seria s\xE9rio, que nada mudaria e que ainda eu at\xE9 te perguntei umas 300x se seria mesmo, pra eu enfrentar meus pais, meus amigos e tudo mais?...Parece que \xE9 outra pessoa cara, acho que nesse meio tempo eu devo ter entrando em um mundo paralelo kkkk (s\xF3 quero sinceridade)"), /*#__PURE__*/


    React.createElement("p", null, "Mas enfim, independente do que voc\xEA me falar, eu vou estar aqui pra tudo, quero ser algu\xE9m que voc\xEA confie e possa contar, que possa rir, igual \xE9ramos no come\xE7o sabe?"), /*#__PURE__*/


    React.createElement("p", null, "Eu lembro de tudo contigo...A primeira sa\xEDda, o primeiro beijo, quando a gente fingia n\xE3o ter sentimentos, os toques, as m\xFAsicas, as brigas, as brincadeiras mais idiotas poss\xEDveis, quando terminamos real, a falta que voc\xEA fez nesses meses, como era chato fingir que tava tudo bem, lembro at\xE9 de quando foi a primeira coisa que fiz na ch\xE1cara quando fui a primeira vez kkk enfim muita coisa que passamos n\xE9?!"), /*#__PURE__*/


    React.createElement("p", null, "Mas mano, n\xE3o d\xE1 p ficar presa em algu\xE9m que n\xE3o quer igual eu quero n\xE9...\xC9 isso."), /*#__PURE__*/


    React.createElement("p", null, "Eu n\xE3o sei pq fiz esse site ainda kkkkk mas fala ai, que ", /*#__PURE__*/
    React.createElement("strong", null, "pica"), ".")), /*#__PURE__*/


    React.createElement("p", { className: "Heart" }, /*#__PURE__*/React.createElement("strong", null, "s2"))));


}

function Repo(props) {
  const { userName, repoName } = props.params;
  return /*#__PURE__*/(
    React.createElement("div", { className: "Repo" }, /*#__PURE__*/
    React.createElement("h3", { className: "Repo-heading" }, repoName), /*#__PURE__*/
    React.createElement("div", { className: "Repo-body" }, /*#__PURE__*/
    React.createElement("p", null, /*#__PURE__*/
    React.createElement("a", { href: `https://github.com/${userName}/${repoName}` }, "More information"), " about this repo."))));




}

function getSubstringUntilNth(str, pattern, n) {
  return str.split(pattern, n).join(pattern);
}