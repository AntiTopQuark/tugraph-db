"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[56718],{88921:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var r=n(74848),i=n(28453);const a={},o="Architecture",s={id:"introduction/architecture",title:"Architecture",description:"This document mainly introduces the product architecture of TuGraph.",source:"@site/versions/version-4.3.1/en-US/source/2.introduction/6.architecture.md",sourceDirName:"2.introduction",slug:"/introduction/architecture",permalink:"/tugraph-db/en-US/en/4.3.1/introduction/architecture",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"HTAP",permalink:"/tugraph-db/en-US/en/4.3.1/introduction/characteristics/htap"},next:{title:"Functionality",permalink:"/tugraph-db/en-US/en/4.3.1/introduction/functionality"}},c={},u=[{value:"1.Introduction",id:"1introduction",level:2}];function l(e){const t={blockquote:"blockquote",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",p:"p",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"architecture",children:"Architecture"})}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"This document mainly introduces the product architecture of TuGraph."}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"1introduction",children:"1.Introduction"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Architecture",src:n(91609).A+"",width:"1074",height:"522"})}),"\n",(0,r.jsx)(t.p,{children:"The following diagram shows the overall architecture of an enterprise-level graph database from the perspective of functional modules, using TuGraph as an example, from bottom to top:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Software and hardware environment. This involves the development and use environment of the graph database. TuGraph is mainly developed based on the underlying C++ language, and is compatible with most operating systems and CPUs on the market."}),"\n",(0,r.jsx)(t.li,{children:"Storage layer, including the KV storage layer and the graph storage layer. The storage layer needs to support various functions required by the calculation layer."}),"\n",(0,r.jsx)(t.li,{children:"Calculation layer. The calculation layer should include the graph transaction engine, graph analysis engine, and graph neural network engine. It also includes a variety of programming interfaces provided by the server, including descriptive query language Cypher, stored procedures, and so on."}),"\n",(0,r.jsx)(t.li,{children:"Client. The client SDK should support multiple languages such as Java, Python, and C++, and also support command-line interaction. The Browser and Explorer reduce the threshold for using the graph database through web-based interaction."}),"\n",(0,r.jsx)(t.li,{children:"In terms of ecological tools, it covers the development, operation, and management links of enterprise-level graph databases, improving usability."}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},91609:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/architecture-en-6f0f1b61b5aa56a47aa991d2cdd3b41a.png"},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>s});var r=n(96540);const i={},a=r.createContext(i);function o(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);