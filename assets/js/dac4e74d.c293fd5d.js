"use strict";(self.webpackChunkflutter_news_toolkit_docs=self.webpackChunkflutter_news_toolkit_docs||[]).push([[618],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>m});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=p(o),m=r,f=d["".concat(l,".").concat(m)]||d[m]||s[m]||i;return o?n.createElement(f,a(a({ref:t},u),{},{components:o})):n.createElement(f,a({ref:t},u))}));function m(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,a=new Array(i);a[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var p=2;p<i;p++)a[p]=o[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},866:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>s,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var n=o(7462),r=(o(7294),o(3905));const i={sidebar_position:8,description:"Learn how to setup continous deployments for your API."},a="API Deployment Setup",c={unversionedId:"project_configuration/api_deployment",id:"project_configuration/api_deployment",title:"API Deployment Setup",description:"Learn how to setup continous deployments for your API.",source:"@site/docs/project_configuration/api_deployment.md",sourceDirName:"project_configuration",slug:"/project_configuration/api_deployment",permalink:"/news_toolkit/project_configuration/api_deployment",draft:!1,editUrl:"https://github.com/flutter/news_toolkit/tree/main/docs/docs/project_configuration/api_deployment.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8,description:"Learn how to setup continous deployments for your API."},sidebar:"tutorialSidebar",previous:{title:"App Deployment Setup",permalink:"/news_toolkit/project_configuration/app_deployment"},next:{title:"Testing",permalink:"/news_toolkit/project_configuration/testing"}},l={},p=[{value:"Google Cloud",id:"google-cloud",level:2},{value:"Other",id:"other",level:2}],u={toc:p};function s(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"api-deployment-setup"},"API Deployment Setup"),(0,r.kt)("h2",{id:"google-cloud"},"Google Cloud"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Set-up a ",(0,r.kt)("a",{parentName:"li",href:"https://cloud.google.com/resource-manager/docs/creating-managing-projects"},"Google Cloud",(0,r.kt)("br",{parentName:"a"}),"account"),"\nto host your API.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Enable Billing."))),(0,r.kt)("li",{parentName:"ul"},"Set-up an ",(0,r.kt)("a",{parentName:"li",href:"https://cloud.google.com/blog/products/identity-security/enabling-keyless-authentication-from-github-actions"},"Github Action Service account"),"."),(0,r.kt)("li",{parentName:"ul"},"Configure ",(0,r.kt)("a",{parentName:"li",href:"https://cloud.google.com/docs/authentication#:~:text=the%20section%20below.-,Authentication%20strategies,public%20data%20using%20API%20keys."},"API authentication"),"\nand ",(0,r.kt)("a",{parentName:"li",href:"https://cloud.google.com/run/docs/authenticating/end-users#cicp-firebase-auth"},"user authentication for your",(0,r.kt)("br",{parentName:"a"}),"API"),"\n(optional).")),(0,r.kt)("h2",{id:"other"},"Other"))}s.isMDXComponent=!0}}]);