/*! For license information please see content---docs-developing-components-in-isolationd-43-423.f2923095ef1e0d052c7a.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{129:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return p}));var r=n(0),o=n.n(r),a=o.a.createContext({}),i=function(e){var t=o.a.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},u=function(e){var t=i(e.components);return o.a.createElement(a.Provider,{value:t},e.children)};var l="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},s=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,u=e.parentName,l=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}(e,["components","mdxType","originalType","parentName"]),s=i(n),p=r,f=s[u+"."+p]||s[p]||c[p]||a;return n?o.a.createElement(f,Object.assign({},{ref:t},l,{components:n})):o.a.createElement(f,Object.assign({},{ref:t},l))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=s;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u[l]="string"==typeof e?e:r,i[1]=u;for(var p=2;p<a;p++)i[p]=n[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},130:function(e,t,n){"use strict";e.exports=n(131)},131:function(e,t,n){"use strict";var r=n(132),o="function"==typeof Symbol&&Symbol.for,a=o?Symbol.for("react.element"):60103,i=o?Symbol.for("react.portal"):60106,u=o?Symbol.for("react.fragment"):60107,l=o?Symbol.for("react.strict_mode"):60108,c=o?Symbol.for("react.profiler"):60114,s=o?Symbol.for("react.provider"):60109,p=o?Symbol.for("react.context"):60110,f=o?Symbol.for("react.concurrent_mode"):60111,b=o?Symbol.for("react.forward_ref"):60112,y=o?Symbol.for("react.suspense"):60113,d=o?Symbol.for("react.memo"):60115,m=o?Symbol.for("react.lazy"):60116,h="function"==typeof Symbol&&Symbol.iterator;function g(e){for(var t=arguments.length-1,n="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=0;r<t;r++)n+="&args[]="+encodeURIComponent(arguments[r+1]);!function(e,t,n,r,o,a,i,u){if(!e){if(e=void 0,void 0===t)e=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[n,r,o,a,i,u],c=0;(e=Error(t.replace(/%s/g,(function(){return l[c++]})))).name="Invariant Violation"}throw e.framesToPop=1,e}}(!1,"Minified React error #"+e+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",n)}var v={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},j={};function O(e,t,n){this.props=e,this.context=t,this.refs=j,this.updater=n||v}function w(){}function S(e,t,n){this.props=e,this.context=t,this.refs=j,this.updater=n||v}O.prototype.isReactComponent={},O.prototype.setState=function(e,t){"object"!=typeof e&&"function"!=typeof e&&null!=e&&g("85"),this.updater.enqueueSetState(this,e,t,"setState")},O.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},w.prototype=O.prototype;var k=S.prototype=new w;k.constructor=S,r(k,O.prototype),k.isPureReactComponent=!0;var N={current:null},x={current:null},_=Object.prototype.hasOwnProperty,C={key:!0,ref:!0,__self:!0,__source:!0};function R(e,t,n){var r=void 0,o={},i=null,u=null;if(null!=t)for(r in void 0!==t.ref&&(u=t.ref),void 0!==t.key&&(i=""+t.key),t)_.call(t,r)&&!C.hasOwnProperty(r)&&(o[r]=t[r]);var l=arguments.length-2;if(1===l)o.children=n;else if(1<l){for(var c=Array(l),s=0;s<l;s++)c[s]=arguments[s+2];o.children=c}if(e&&e.defaultProps)for(r in l=e.defaultProps)void 0===o[r]&&(o[r]=l[r]);return{$$typeof:a,type:e,key:i,ref:u,props:o,_owner:x.current}}function E(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var P=/\/+/g,$=[];function I(e,t,n,r){if($.length){var o=$.pop();return o.result=e,o.keyPrefix=t,o.func=n,o.context=r,o.count=0,o}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function T(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>$.length&&$.push(e)}function A(e,t,n){return null==e?0:function e(t,n,r,o){var u=typeof t;"undefined"!==u&&"boolean"!==u||(t=null);var l=!1;if(null===t)l=!0;else switch(u){case"string":case"number":l=!0;break;case"object":switch(t.$$typeof){case a:case i:l=!0}}if(l)return r(o,t,""===n?"."+U(t,0):n),1;if(l=0,n=""===n?".":n+":",Array.isArray(t))for(var c=0;c<t.length;c++){var s=n+U(u=t[c],c);l+=e(u,s,r,o)}else if(null===t||"object"!=typeof t?s=null:s="function"==typeof(s=h&&t[h]||t["@@iterator"])?s:null,"function"==typeof s)for(t=s.call(t),c=0;!(u=t.next()).done;)l+=e(u=u.value,s=n+U(u,c++),r,o);else"object"===u&&g("31","[object Object]"===(r=""+t)?"object with keys {"+Object.keys(t).join(", ")+"}":r,"");return l}(e,"",t,n)}function U(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function M(e,t){e.func.call(e.context,t,e.count++)}function D(e,t,n){var r=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?L(e,r,n,(function(e){return e})):null!=e&&(E(e)&&(e=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(P,"$&/")+"/")+n)),r.push(e))}function L(e,t,n,r,o){var a="";null!=n&&(a=(""+n).replace(P,"$&/")+"/"),A(e,D,t=I(t,a,r,o)),T(t)}function F(){var e=N.current;return null===e&&g("321"),e}var q={Children:{map:function(e,t,n){if(null==e)return e;var r=[];return L(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;A(e,M,t=I(null,null,t,n)),T(t)},count:function(e){return A(e,(function(){return null}),null)},toArray:function(e){var t=[];return L(e,t,null,(function(e){return e})),t},only:function(e){return E(e)||g("143"),e}},createRef:function(){return{current:null}},Component:O,PureComponent:S,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:p,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:b,render:e}},lazy:function(e){return{$$typeof:m,_ctor:e,_status:-1,_result:null}},memo:function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},useCallback:function(e,t){return F().useCallback(e,t)},useContext:function(e,t){return F().useContext(e,t)},useEffect:function(e,t){return F().useEffect(e,t)},useImperativeHandle:function(e,t,n){return F().useImperativeHandle(e,t,n)},useDebugValue:function(){},useLayoutEffect:function(e,t){return F().useLayoutEffect(e,t)},useMemo:function(e,t){return F().useMemo(e,t)},useReducer:function(e,t,n){return F().useReducer(e,t,n)},useRef:function(e){return F().useRef(e)},useState:function(e){return F().useState(e)},Fragment:u,StrictMode:l,Suspense:y,createElement:R,cloneElement:function(e,t,n){null==e&&g("267",e);var o=void 0,i=r({},e.props),u=e.key,l=e.ref,c=e._owner;if(null!=t){void 0!==t.ref&&(l=t.ref,c=x.current),void 0!==t.key&&(u=""+t.key);var s=void 0;for(o in e.type&&e.type.defaultProps&&(s=e.type.defaultProps),t)_.call(t,o)&&!C.hasOwnProperty(o)&&(i[o]=void 0===t[o]&&void 0!==s?s[o]:t[o])}if(1===(o=arguments.length-2))i.children=n;else if(1<o){s=Array(o);for(var p=0;p<o;p++)s[p]=arguments[p+2];i.children=s}return{$$typeof:a,type:e.type,key:u,ref:l,props:i,_owner:c}},createFactory:function(e){var t=R.bind(null,e);return t.type=e,t},isValidElement:E,version:"16.8.6",unstable_ConcurrentMode:f,unstable_Profiler:c,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:N,ReactCurrentOwner:x,assign:r}},G={default:q},V=G&&q||G;e.exports=V.default||V},132:function(e,t,n){"use strict";var r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;function i(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var n,u,l=i(e),c=1;c<arguments.length;c++){for(var s in n=Object(arguments[c]))o.call(n,s)&&(l[s]=n[s]);if(r){u=r(n);for(var p=0;p<u.length;p++)a.call(n,u[p])&&(l[u[p]]=n[u[p]])}}return l}},77:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return s}));n(130);var r=n(129);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i={id:"developing-components-in-isolation",title:"Developing Components in Isolation"},u=[{value:"Getting Started with Storybook",id:"getting-started-with-storybook",children:[]},{value:"Getting Started with Styleguidist",id:"getting-started-with-styleguidist",children:[]}],l={rightToc:u},c="wrapper";function s(e){var t=e.components,n=a(e,["components"]);return Object(r.b)(c,o({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Usually, in an app, you have a lot of UI components, and each of them has many different states.\nFor an example, a simple button component could have the following states:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"In a regular state, with a text label."),Object(r.b)("li",{parentName:"ul"},"In the disabled mode."),Object(r.b)("li",{parentName:"ul"},"In a loading state.")),Object(r.b)("p",null,"Usually, it’s hard to see these states without running a sample app or some examples."),Object(r.b)("p",null,"Create React App doesn’t include any tools for this by default, but you can easily add ",Object(r.b)("a",o({parentName:"p"},{href:"https://storybook.js.org"}),"Storybook for React")," (",Object(r.b)("a",o({parentName:"p"},{href:"https://github.com/storybooks/storybook"}),"source"),") or ",Object(r.b)("a",o({parentName:"p"},{href:"https://react-styleguidist.js.org/"}),"React Styleguidist")," (",Object(r.b)("a",o({parentName:"p"},{href:"https://github.com/styleguidist/react-styleguidist"}),"source"),") to your project. ",Object(r.b)("strong",{parentName:"p"},"These are third-party tools that let you develop components and see all their states in isolation from your app"),"."),Object(r.b)("p",null,Object(r.b)("img",o({parentName:"p"},{src:"https://i.imgur.com/7CIAWpB.gif",alt:"Storybook for React Demo"}))),Object(r.b)("p",null,"You can also deploy your Storybook or style guide as a static app. This way, everyone in your team can view and review different states of UI components without starting a backend server or creating an account in your app."),Object(r.b)("h2",{id:"getting-started-with-storybook"},"Getting Started with Storybook"),Object(r.b)("p",null,"Storybook is a development environment for React UI components. It allows you to browse a component library, view the different states of each component, and interactively develop and test components."),Object(r.b)("p",null,"Run the following command inside your app’s directory:"),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{className:"language-sh"}),"npx -p @storybook/cli sb init\n")),Object(r.b)("p",null,"After that, follow the instructions on the screen."),Object(r.b)("p",null,"Learn more about React Storybook:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",o({parentName:"li"},{href:"https://learnstorybook.com"}),"Learn Storybook (tutorial)")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",o({parentName:"li"},{href:"https://storybook.js.org/basics/introduction/"}),"Documentation")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",o({parentName:"li"},{href:"https://github.com/storybooks/storybook"}),"GitHub Repo")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",o({parentName:"li"},{href:"https://github.com/storybooks/storybook/tree/master/addons/storyshots"}),"Snapshot Testing UI")," with Storybook + addon/storyshot")),Object(r.b)("h2",{id:"getting-started-with-styleguidist"},"Getting Started with Styleguidist"),Object(r.b)("p",null,"Styleguidist combines a style guide, where all your components are presented on a single page with their props documentation and usage examples, with an environment for developing components in isolation, similar to Storybook. In Styleguidist you write examples in Markdown, where each code snippet is rendered as a live editable playground."),Object(r.b)("p",null,"First, install Styleguidist:"),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{className:"language-sh"}),"npm install --save react-styleguidist\n")),Object(r.b)("p",null,"Alternatively you may use ",Object(r.b)("inlineCode",{parentName:"p"},"yarn"),":"),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{className:"language-sh"}),"yarn add react-styleguidist\n")),Object(r.b)("p",null,"Then, add these scripts to your ",Object(r.b)("inlineCode",{parentName:"p"},"package.json"),":"),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{className:"language-diff"}),'   "scripts": {\n+    "styleguide": "styleguidist server",\n+    "styleguide:build": "styleguidist build",\n     "start": "react-scripts start",\n')),Object(r.b)("p",null,"Then, run the following command inside your app’s directory:"),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{className:"language-sh"}),"npm run styleguide\n")),Object(r.b)("p",null,"After that, follow the instructions on the screen."),Object(r.b)("p",null,"Learn more about React Styleguidist:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",o({parentName:"li"},{href:"https://github.com/styleguidist/react-styleguidist"}),"GitHub Repo")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",o({parentName:"li"},{href:"https://react-styleguidist.js.org/docs/getting-started.html"}),"Documentation"))))}s.isMDXComponent=!0}}]);