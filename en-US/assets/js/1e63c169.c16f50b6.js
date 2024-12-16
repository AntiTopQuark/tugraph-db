"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[93687],{35490:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>a,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var t=r(74848),s=r(28453);const l={},o="TuGraph console client",i={id:"client-tools/bolt-console-client",title:"TuGraph console client",description:"lgraph_cli \u662f\u57fa\u4e8ebolt\u534f\u8bae\u7684 console client\uff0cc++\u7f16\u5199\uff0c\u4f7f\u7528\u65f6\u9700\u8981\u8fde\u63a5tugraph\u7684bolt\u7aef\u53e3\u3002",source:"@site/versions/version-4.2.0/zh-CN/source/7.client-tools/6.bolt-console-client.md",sourceDirName:"7.client-tools",slug:"/client-tools/bolt-console-client",permalink:"/tugraph-db/en-US/zh/4.2.0/client-tools/bolt-console-client",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Bolt\u5ba2\u6237\u7aef",permalink:"/tugraph-db/en-US/zh/4.2.0/client-tools/bolt-client"},next:{title:"RESTful API",permalink:"/tugraph-db/en-US/zh/4.2.0/client-tools/restful-api"}},a={},c=[{value:"<code>lgraph_cli</code>\u4f7f\u7528",id:"lgraph_cli\u4f7f\u7528",level:2},{value:"\u5728\u7ebf\u6570\u636e\u5bfc\u51fa",id:"\u5728\u7ebf\u6570\u636e\u5bfc\u51fa",level:2},{value:"csv\u683c\u5f0f",id:"csv\u683c\u5f0f",level:3},{value:"json\u683c\u5f0f",id:"json\u683c\u5f0f",level:3}];function h(n){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,s.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.header,{children:(0,t.jsx)(e.h1,{id:"tugraph-console-client",children:"TuGraph console client"})}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:"lgraph_cli"})," \u662f\u57fa\u4e8ebolt\u534f\u8bae\u7684 console client\uff0cc++\u7f16\u5199\uff0c\u4f7f\u7528\u65f6\u9700\u8981\u8fde\u63a5tugraph\u7684bolt\u7aef\u53e3\u3002"]}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:"lgraph_cypher"})," \u662f\u57fa\u4e8ehttp\u534f\u8bae\u7684 console client\uff0cpython\u7f16\u5199\uff0c\u4f7f\u7528\u65f6\u9700\u8981\u8fde\u63a5tugraph\u7684http\u7aef\u53e3\u3002"]}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:"lgraph_cypher"})," \u4f7f\u7528\u7684\u65f6\u5019\u9700\u8981\u5b89\u88c5\u9700\u8981\u7684python\u5e93\uff0c\u5982\u679c\u670d\u52a1\u5668\u7f51\u7edc\u4e0d\u901a\uff0c\u5219\u9700\u8981\u624b\u52a8\u5b89\u88c5\u7f3a\u5931\u7684python\u5e93\u3002"]}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:"lgraph_cli"})," \u662f\u4e00\u4e2a\u4e8c\u8fdb\u5236\u7684\u53ef\u6267\u884c\u6587\u4ef6\uff0c\u4e0d\u4f9d\u8d56\u5176\u4ed6\u52a8\u6001\u5e93\uff0c\u62f7\u8d1d\u5230\u4e00\u53f0linux\u673a\u5668\u4e0a\u5c31\u53ef\u6267\u884c\u3002"]}),"\n",(0,t.jsxs)(e.h2,{id:"lgraph_cli\u4f7f\u7528",children:[(0,t.jsx)(e.code,{children:"lgraph_cli"}),"\u4f7f\u7528"]}),"\n",(0,t.jsxs)(e.p,{children:["\u8bed\u53e5\u4ee5\u5206\u53f7\u7ed3\u675f\uff0c\u8f93\u5165",(0,t.jsx)(e.code,{children:"exit"}),", ",(0,t.jsx)(e.code,{children:"quit"}),"\u6216\u8005Ctrl-C\u9000\u51fa\u5ba2\u6237\u7aef\u3002"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-powershell",children:"lgraph_cli --ip 127.0.0.1 --port 7687 --graph default --user admin --password 73@TuGraph\n\nWelcome to the TuGraph console client. Commands end with ';'.\nCopyright(C) 2018-2023 Ant Group. All rights reserved.\nType 'exit', 'quit' or Ctrl-C to exit.\n\nTuGraph> match(n) return n limit 1;\n+-------------------------------------------------------------------------------------------------------------------------------------+\n| n                                                                                                                                   |\n+-------------------------------------------------------------------------------------------------------------------------------------+\n| (:person {id:2,born:1961,poster_image:\"https://image.tmdb.org/t/p/w185/mh0lZ1XsT84FayMNiT6Erh91mVu.jpg\",name:\"Laurence Fishburne\"}) |\n+-------------------------------------------------------------------------------------------------------------------------------------+\n\nTuGraph>\n"})}),"\n",(0,t.jsx)(e.p,{children:"\u8bed\u53e5\u53ef\u4ee5\u4e2d\u95f4\u6362\u884c\uff0c\u591a\u884c\u8f93\u5165\u3002"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-powershell",children:'TuGraph> match(n)\n      -> return n\n      -> limit 1;\n+-------------------------------------------------------------------------------------------------------------------------------------+\n| n                                                                                                                                   |\n+-------------------------------------------------------------------------------------------------------------------------------------+\n| (:person {id:2,born:1961,poster_image:"https://image.tmdb.org/t/p/w185/mh0lZ1XsT84FayMNiT6Erh91mVu.jpg",name:"Laurence Fishburne"}) |\n+-------------------------------------------------------------------------------------------------------------------------------------+\n\nTuGraph>\n'})}),"\n",(0,t.jsx)(e.p,{children:"\u975e\u4ea4\u4e92\u5f0f"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-powershell",children:'\necho "match(n) return n limit 1;" | lgraph_cli --ip 127.0.0.1 --port 7687 --graph default --user admin --password 73@TuGraph\n+-------------------------------------------------------------------------------------------------------------------------------------+\n| n                                                                                                                                   |\n+-------------------------------------------------------------------------------------------------------------------------------------+\n| (:person {id:2,born:1961,poster_image:"https://image.tmdb.org/t/p/w185/mh0lZ1XsT84FayMNiT6Erh91mVu.jpg",name:"Laurence Fishburne"}) |\n+-------------------------------------------------------------------------------------------------------------------------------------+\n1 rows\n\n'})}),"\n",(0,t.jsx)(e.p,{children:"\u4ece\u6587\u4ef6\u8bfb\u53d6\u591a\u6761\u547d\u4ee4"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-powershell",children:'\ncat query.txt\nmatch(n) return n limit 1;\nmatch(n) return n limit 1;\n\nlgraph_cli --ip 127.0.0.1 --port 7687 --graph default --user admin --password 73@TuGraph < query.txt\n+-------------------------------------------------------------------------------------------------------------------------------------+\n| n                                                                                                                                   |\n+-------------------------------------------------------------------------------------------------------------------------------------+\n| (:person {id:2,born:1961,poster_image:"https://image.tmdb.org/t/p/w185/mh0lZ1XsT84FayMNiT6Erh91mVu.jpg",name:"Laurence Fishburne"}) |\n+-------------------------------------------------------------------------------------------------------------------------------------+\n| (:person {id:3,born:1967,poster_image:"https://image.tmdb.org/t/p/w185/8iATAc5z5XOKFFARLsvaawa8MTY.jpg",name:"Carrie-Anne Moss"})   |\n+-------------------------------------------------------------------------------------------------------------------------------------+\n2 rows\n\n+-------------------------------------------------------------------------------------------------------------------------------------+\n| n                                                                                                                                   |\n+-------------------------------------------------------------------------------------------------------------------------------------+\n| (:person {id:2,born:1961,poster_image:"https://image.tmdb.org/t/p/w185/mh0lZ1XsT84FayMNiT6Erh91mVu.jpg",name:"Laurence Fishburne"}) |\n+-------------------------------------------------------------------------------------------------------------------------------------+\n| (:person {id:3,born:1967,poster_image:"https://image.tmdb.org/t/p/w185/8iATAc5z5XOKFFARLsvaawa8MTY.jpg",name:"Carrie-Anne Moss"})   |\n+-------------------------------------------------------------------------------------------------------------------------------------+\n2 rows\n'})}),"\n",(0,t.jsx)(e.h2,{id:"\u5728\u7ebf\u6570\u636e\u5bfc\u51fa",children:"\u5728\u7ebf\u6570\u636e\u5bfc\u51fa"}),"\n",(0,t.jsx)(e.p,{children:"lgraph_cli \u652f\u6301\u6d41\u5f0f\u8bfb\u53d6\uff0c\u5bfc\u51fa\u6570\u636e\u53ea\u9700\u8981\u628algraph_cli\u7684\u8f93\u51fa\u91cd\u5b9a\u5411\u5230\u6587\u4ef6\u4e2d\u5373\u53ef\uff0c\u5bfc\u51fa\u683c\u5f0f\u652f\u6301csv\u548cjson\u3002"}),"\n",(0,t.jsx)(e.h3,{id:"csv\u683c\u5f0f",children:"csv\u683c\u5f0f"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-powershell",children:'\necho "match(n) return n.id, n.name;" | lgraph_cli --ip 127.0.0.1 --port 7687 --graph default --user admin --password 73@TuGraph --format csv > output.txt\n\n'})}),"\n",(0,t.jsx)(e.h3,{id:"json\u683c\u5f0f",children:"json\u683c\u5f0f"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-powershell",children:'\necho "match(n) return n.id, n.name;" | lgraph_cli --ip 127.0.0.1 --port 7687 --graph default --user admin --password 73@TuGraph --format json > output.txt\n\n'})})]})}function p(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(h,{...n})}):h(n)}},28453:(n,e,r)=>{r.d(e,{R:()=>o,x:()=>i});var t=r(96540);const s={},l=t.createContext(s);function o(n){const e=t.useContext(l);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:o(n.components),t.createElement(l.Provider,{value:e},n.children)}}}]);