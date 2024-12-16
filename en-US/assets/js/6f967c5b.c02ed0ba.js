"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[50461],{90499:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>t});var l=r(74848),s=r(28453);const i={},c="\u6570\u636e\u5bfc\u5165",d={id:"developer-manual/server-tools/data-import",title:"\u6570\u636e\u5bfc\u5165",description:"\u6b64\u6587\u6863\u4e3b\u8981\u4ecb\u7ecd TuGraph \u7684\u6570\u636e\u5bfc\u5165\u529f\u80fd\u3002\u5176\u4e2d\u5305\u62ec CSV \u683c\u5f0f\u7684\u5206\u9694\u7b26\uff0cjsonline \u7684\u683c\u5f0f\u793a\u4f8b\uff0c\u4ee5\u53ca\u5bfc\u5165\u5728\u7ebf\u548c\u79bb\u7ebf\u7684\u4e24\u79cd\u6a21\u5f0f\u3002",source:"@site/versions/version-3.5.1/zh-CN/source/5.developer-manual/3.server-tools/1.data-import.md",sourceDirName:"5.developer-manual/3.server-tools",slug:"/developer-manual/server-tools/data-import",permalink:"/tugraph-db/en-US/zh/3.5.1/developer-manual/server-tools/data-import",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u90e8\u7f72\u9ad8\u53ef\u7528\u6a21\u5f0f",permalink:"/tugraph-db/en-US/zh/3.5.1/developer-manual/running/high-availability-mode"},next:{title:"\u6570\u636e\u5bfc\u51fa",permalink:"/tugraph-db/en-US/zh/3.5.1/developer-manual/server-tools/data-export"}},o={},t=[{value:"1.\u7b80\u4ecb",id:"1\u7b80\u4ecb",level:2},{value:"2.CSV\u6587\u4ef6\u683c\u5f0f\u5206\u9694\u7b26",id:"2csv\u6587\u4ef6\u683c\u5f0f\u5206\u9694\u7b26",level:2},{value:"3.\u914d\u7f6e\u6587\u4ef6",id:"3\u914d\u7f6e\u6587\u4ef6",level:2},{value:"3.1.\u914d\u7f6e\u6587\u4ef6\u683c\u5f0f",id:"31\u914d\u7f6e\u6587\u4ef6\u683c\u5f0f",level:3},{value:"3.1.1.\u5173\u952e\u5b57",id:"311\u5173\u952e\u5b57",level:4},{value:"3.2.\u914d\u7f6e\u6587\u4ef6\u793a\u4f8b",id:"32\u914d\u7f6e\u6587\u4ef6\u793a\u4f8b",level:3},{value:"4.\u79bb\u7ebf\u5168\u91cf\u5bfc\u5165",id:"4\u79bb\u7ebf\u5168\u91cf\u5bfc\u5165",level:2},{value:"4.1.\u79bb\u7ebf\u5bfc\u5165\u793a\u4f8b",id:"41\u79bb\u7ebf\u5bfc\u5165\u793a\u4f8b",level:3},{value:"5.\u5728\u7ebf\u589e\u91cf\u5bfc\u5165",id:"5\u5728\u7ebf\u589e\u91cf\u5bfc\u5165",level:2}];function a(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.header,{children:(0,l.jsx)(n.h1,{id:"\u6570\u636e\u5bfc\u5165",children:"\u6570\u636e\u5bfc\u5165"})}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"\u6b64\u6587\u6863\u4e3b\u8981\u4ecb\u7ecd TuGraph \u7684\u6570\u636e\u5bfc\u5165\u529f\u80fd\u3002\u5176\u4e2d\u5305\u62ec CSV \u683c\u5f0f\u7684\u5206\u9694\u7b26\uff0cjsonline \u7684\u683c\u5f0f\u793a\u4f8b\uff0c\u4ee5\u53ca\u5bfc\u5165\u5728\u7ebf\u548c\u79bb\u7ebf\u7684\u4e24\u79cd\u6a21\u5f0f\u3002"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"1\u7b80\u4ecb",children:"1.\u7b80\u4ecb"}),"\n",(0,l.jsxs)(n.p,{children:["\u5728\u56fe\u6570\u636e\u5e93\u670d\u52a1\u5b89\u88c5\u6210\u529f\u540e\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528",(0,l.jsx)(n.code,{children:"lgraph_import"}),"\u6279\u91cf\u5bfc\u5165\u5de5\u5177\u5c06\u73b0\u6709\u6570\u636e\u5bfc\u5165 TuGraph\u3002",(0,l.jsx)(n.code,{children:"lgraph_import"}),"\u652f\u6301\u4ece CSV \u6587\u4ef6\u548c JSON \u6570\u636e\u6e90\u5bfc\u5165\u6570\u636e\u3002"]}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"CSV \u683c\u5f0f"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"[movies.csv]\nid, name, year, rating\ntt0188766,King of Comedy,1999,7.3\ntt0286112,Shaolin Soccer,2001,7.3\ntt4701660,The Mermaid,2016,6.3\n"})}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"jsonline \u683c\u5f0f"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-json",children:'["tt0188766","King of Comedy",1999,7.3]\n["tt0286112","Shaolin Soccer",2001,7.3]\n["tt4701660","The Mermaid",2016,6.3]\n'})}),"\n",(0,l.jsx)(n.p,{children:"TuGraph \u652f\u6301\u4e24\u79cd\u5bfc\u5165\u6a21\u5f0f\uff1a"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.em,{children:"\u79bb\u7ebf\u6a21\u5f0f"}),"\uff1a\u8bfb\u53d6\u6570\u636e\u5e76\u5c06\u5176\u5bfc\u5165\u6307\u5b9a\u670d\u52a1\u5668\u7684\u6570\u636e\u6587\u4ef6\uff0c\u5e94\u4ec5\u5728\u670d\u52a1\u5668\u79bb\u7ebf\u65f6\u5b8c\u6210\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.em,{children:"\u5728\u7ebf\u6a21\u5f0f"}),"\uff1a\u8bfb\u53d6\u6570\u636e\u5e76\u5c06\u5176\u53d1\u9001\u5230\u5de5\u4f5c\u4e2d\u7684\u670d\u52a1\u5668\uff0c\u7136\u540e\u5c06\u6570\u636e\u5bfc\u5165\u5176\u6570\u636e\u5e93\u3002"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"2csv\u6587\u4ef6\u683c\u5f0f\u5206\u9694\u7b26",children:"2.CSV\u6587\u4ef6\u683c\u5f0f\u5206\u9694\u7b26"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"CSV\u683c\u5f0f\u7684\u5206\u9694\u7b26\u53ef\u4ee5\u662f\u5355\u5b57\u7b26\u6216\u591a\u5b57\u7b26\u7ec4\u6210\u7684\u5b57\u7b26\u4e32\uff0c\u5176\u4e2d\u4e0d\u80fd\u5305\u542b`\\r`\u6216`\\n`\u3002\u6ce8\u610f\u4e0d\u540c\u7684shell\u4f1a\u5bf9\u8f93\u5165\u5b57\u7b26\u4e32\u505a\u4e0d\u540c\u7684\u5904\u7406\uff0c\u56e0\u6b64\u9488\u5bf9\u4e0d\u540c\u7684shell\u8f93\u5165\u53c2\u6570\u53ef\u80fd\u9700\u8981\u4e0d\u540c\u7684\u8f6c\u4e49\u5904\u7406\u3002\n"})}),"\n",(0,l.jsxs)(n.p,{children:["\u6b64\u5916\uff0c",(0,l.jsx)(n.code,{children:"lgraph_import"}),"\u8fd8\u652f\u6301\u4ee5\u4e0b\u8f6c\u4e49\u5b57\u7b26\uff0c\u4ee5\u4fbf\u8f93\u5165\u7279\u6b8a\u7b26\u53f7\uff1a"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"\u8f6c\u4e49\u7b26"}),(0,l.jsx)(n.th,{children:"\u8bf4\u660e"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"\\"}),(0,l.jsxs)(n.td,{children:["\u53cd\u659c\u6760",(0,l.jsx)(n.code,{children:"\\\\"})]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"\\a"}),(0,l.jsx)(n.td,{children:"\u54cd\u94c3\uff0c\u5373 ASCII \u7801 0x07"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"\\f"}),(0,l.jsx)(n.td,{children:"form-feed\uff0c\u5373 ASCII \u7801 0x0c"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"\\t"}),(0,l.jsx)(n.td,{children:"\u6c34\u5e73\u5236\u8868\u7b26\uff0c\u5373 ASCII \u7801 0x09"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"\\v"}),(0,l.jsx)(n.td,{children:"\u5782\u76f4\u5236\u8868\u7b26\uff0c\u5373 ASCII \u7801 0x0b"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"\\xnn"}),(0,l.jsx)(n.td,{children:"\u4e24\u4f4d\u5341\u516d\u8fdb\u5236\u6570\uff0c\u8868\u793a\u4e00\u4e2a\u5b57\u8282\uff0c\u5982\\x9A"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"\\nnn"}),(0,l.jsx)(n.td,{children:"\u4e09\u4f4d\u516b\u8fdb\u5236\u6570\uff0c\u8868\u793a\u4e00\u4e2a\u5b57\u8282\uff0c\u5982\\001, \\443\uff0c\u6570\u503c\u8303\u56f4\u4e0d\u80fd\u8d85\u8fc7 255"})]})]})]}),"\n",(0,l.jsx)(n.p,{children:"\u4f8b\uff1a"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:'$ ./lgraph_import -c ./import.config --delimiter "\\001\\002"\n'})}),"\n",(0,l.jsx)(n.h2,{id:"3\u914d\u7f6e\u6587\u4ef6",children:"3.\u914d\u7f6e\u6587\u4ef6"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"lgraph_import"}),"\u5de5\u5177\u901a\u8fc7\u6307\u5b9a\u7684\u914d\u7f6e\u6587\u4ef6\u8fdb\u884c\u73af\u5883\u914d\u7f6e\u3002\u914d\u7f6e\u6587\u4ef6\u63cf\u8ff0\u8f93\u5165\u6587\u4ef6\u7684\u8def\u5f84\u3001\u5b83\u4eec\u6240\u4ee3\u8868\u7684\u70b9/\u8fb9\u4ee5\u53ca\u70b9/\u8fb9\u7684\u683c\u5f0f\u3002"]}),"\n",(0,l.jsx)(n.h3,{id:"31\u914d\u7f6e\u6587\u4ef6\u683c\u5f0f",children:"3.1.\u914d\u7f6e\u6587\u4ef6\u683c\u5f0f"}),"\n",(0,l.jsxs)(n.p,{children:["\u914d\u7f6e\u6587\u4ef6\u5305\u542b\u4e24\u90e8\u5206\uff1aschema \u548c files\u3002",(0,l.jsx)(n.code,{children:"schema"}),"\u90e8\u5206\u5b9a\u4e49 label\uff0c",(0,l.jsx)(n.code,{children:"files"}),"\u90e8\u5206\u63cf\u8ff0\u8981\u5bfc\u5165\u7684\u6570\u636e\u6587\u4ef6\u3002"]}),"\n",(0,l.jsx)(n.h4,{id:"311\u5173\u952e\u5b57",children:"3.1.1.\u5173\u952e\u5b57"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["schema (\u6570\u7ec4\u5f62\u5f0f\uff09\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"label\uff08\u5fc5\u9009\uff0c\u5b57\u7b26\u4e32\u5f62\u5f0f\uff09"}),"\n",(0,l.jsx)(n.li,{children:"type\uff08\u5fc5\u9009\uff0c\u503c\u53ea\u80fd\u662f VERTEX \u6216\u8005 EDGE\uff09"}),"\n",(0,l.jsxs)(n.li,{children:["properties\uff08\u6570\u7ec4\u5f62\u5f0f\uff0c\u5bf9\u4e8e\u70b9\u5fc5\u9009\uff0c\u5bf9\u4e8e\u8fb9\u5982\u679c\u6ca1\u6709\u5c5e\u6027\u53ef\u4ee5\u4e0d\u914d\u7f6e\uff09\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"name\uff08\u5fc5\u9009\uff0c\u5b57\u7b26\u4e32\u5f62\u5f0f\uff09"}),"\n",(0,l.jsx)(n.li,{children:"type \uff08\u5fc5\u9009\uff0cBOOL\uff0cINT8\uff0cINT16\uff0cINT32\uff0cINT64\uff0cDATE\uff0cDATETIME\uff0cFLOAT\uff0cDOUBLE\uff0cSTRING\uff0cBLOB\uff09"}),"\n",(0,l.jsx)(n.li,{children:"optional\uff08\u53ef\u9009\uff0c\u4ee3\u8868\u8be5\u5b57\u6bb5\u53ef\u4ee5\u914d\u7f6e\uff0c\u4e5f\u53ef\u4ee5\u4e0d\u914d\u7f6e\uff09"}),"\n",(0,l.jsx)(n.li,{children:"index\uff08\u53ef\u9009\uff0c\u8be5\u5b57\u6bb5\u662f\u5426\u9700\u8981\u5efa\u7d22\u5f15\uff09"}),"\n",(0,l.jsx)(n.li,{children:"unique\uff08\u53ef\u9009\uff0c\u8be5\u5b57\u6bb5\u662f\u5426\u5efa\u7d22\u5f15\uff0c\u5e76\u4e14\u662f unique \u7c7b\u578b\u7684\uff09"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.li,{children:"primary (\u4ec5\u70b9\u914d\u7f6e\uff0c\u5fc5\u9009\uff0c\u4e3b\u952e\u5b57\u6bb5\uff0c\u9700\u6307\u5b9a\u4e00\u4e2a property\uff0c\u7528\u6765\u552f\u4e00\u786e\u5b9a\u4e00\u4e2a\u70b9)"}),"\n",(0,l.jsx)(n.li,{children:"constraints (\u4ec5\u8fb9\u914d\u7f6e\uff0c\u53ef\u9009\uff0c\u6570\u7ec4\u5f62\u5f0f\uff0c\u8d77\u70b9\u548c\u7ec8\u70b9\u7684 label\uff0c\u4e0d\u914d\u7f6e\u6216\u8005\u4e3a\u7a7a\u4ee3\u8868\u4e0d\u9650\u5236)"}),"\n",(0,l.jsxs)(n.li,{children:["detach_property (\u70b9\u8fb9\u90fd\u53ef\u914d\u7f6e\uff0c\u53ef\u9009\uff0c\u9ed8\u8ba4\u662f",(0,l.jsx)(n.code,{children:"false"}),"\u3002",(0,l.jsx)(n.code,{children:"true"})," \u4ee3\u8868\u5c5e\u6027\u6570\u636e\u5355\u72ec\u5b58\u653e\uff0c\u5728\u5185\u5b58\u4e0d\u591f\uff0c\u5c5e\u6027\u6570\u636e\u6bd4\u8f83\u591a\u7684\u573a\u666f\u4e0b\u53ef\u4ee5\u51cf\u5c11io\u8bfb\u653e\u5927)"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["files \uff08\u6570\u7ec4\u5f62\u5f0f\uff09\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"path\uff08\u5fc5\u9009\uff0c\u5b57\u7b26\u4e32\uff0c\u53ef\u4ee5\u662f\u6587\u4ef6\u8def\u5f84\u6216\u8005\u76ee\u5f55\u7684\u8def\u5f84\uff0c\u5982\u679c\u662f\u76ee\u5f55\u4f1a\u5bfc\u5165\u6b64\u76ee\u5f55\u4e0b\u7684\u6240\u6709\u6587\u4ef6\uff0c\u9700\u8981\u4fdd\u8bc1\u6709\u76f8\u540c\u7684 schema\uff09"}),"\n",(0,l.jsx)(n.li,{children:"header\uff08\u53ef\u9009\uff0c\u6570\u5b57\uff0c\u5934\u4fe1\u606f\u5360\u6587\u4ef6\u8d77\u59cb\u7684\u51e0\u884c\uff0c\u6ca1\u6709\u5c31\u662f 0\uff09"}),"\n",(0,l.jsx)(n.li,{children:"format\uff08\u5fc5\u987b\u9009\uff0c\u53ea\u80fd\u662f JSON \u6216\u8005 CSV\uff09"}),"\n",(0,l.jsx)(n.li,{children:"label\uff08\u5fc5\u9009\uff0c\u5b57\u7b26\u4e32\uff09"}),"\n",(0,l.jsxs)(n.li,{children:["columns\uff08\u6570\u7ec4\u5f62\u5f0f\uff09\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"SRC_ID (\u7279\u6b8a\u5b57\u7b26\u4e32\uff0c\u4ec5\u8fb9\u6709\uff0c\u4ee3\u8868\u8fd9\u5217\u662f\u8d77\u59cb\u70b9\u6570\u636e)"}),"\n",(0,l.jsx)(n.li,{children:"DST_ID (\u7279\u6b8a\u5b57\u7b26\u4e32\uff0c\u4ec5\u8fb9\u6709\uff0c\u4ee3\u8868\u8fd9\u5217\u662f\u76ee\u7684\u70b9\u6570\u636e)"}),"\n",(0,l.jsx)(n.li,{children:"SKIP \xa0 (\u7279\u6b8a\u5b57\u7b26\u4e32\uff0c\u4ee3\u8868\u8df3\u8fc7\u8fd9\u5217\u6570\u636e)"}),"\n",(0,l.jsx)(n.li,{children:"[property]"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.li,{children:"SRC_ID (\u4ec5\u8fb9\u914d\u7f6e\uff0c\u503c\u662f\u8d77\u59cb\u70b9\u6807\u7b7e)"}),"\n",(0,l.jsx)(n.li,{children:"DST_ID (\u4ec5\u8fb9\u914d\u7f6e\uff0c\u503c\u662f\u76ee\u7684\u70b9\u6807\u7b7e)"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"32\u914d\u7f6e\u6587\u4ef6\u793a\u4f8b",children:"3.2.\u914d\u7f6e\u6587\u4ef6\u793a\u4f8b"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-json",children:'{\n  "schema": [\n    {\n      "label": "actor",\n      "type": "VERTEX",\n      "properties": [\n        { "name": "aid", "type": "STRING" },\n        { "name": "name", "type": "STRING" }\n      ],\n      "primary": "aid"\n    },\n    {\n      "label": "movie",\n      "type": "VERTEX",\n      "properties": [\n        { "name": "mid", "type": "STRING" },\n        { "name": "name", "type": "STRING" },\n        { "name": "year", "type": "INT16" },\n        { "name": "rate", "type": "FLOAT", "optional": true }\n      ],\n      "primary": "mid",\n      "detach_property": false\n    },\n    {\n      "label": "play_in",\n      "type": "EDGE",\n      "properties": [{ "name": "role", "type": "STRING", "optional": true }],\n      "constraints": [["actor", "movie"]]\n    }\n  ],\n  "files": [\n    {\n      "path": "actors.csv",\n      "header": 2,\n      "format": "CSV",\n      "label": "actor",\n      "columns": ["aid", "name"]\n    },\n    {\n      "path": "movies.csv",\n      "header": 2,\n      "format": "CSV",\n      "label": "movie",\n      "columns": ["mid", "name", "year", "rate"]\n    },\n    {\n      "path": "roles.csv",\n      "header": 2,\n      "format": "CSV",\n      "label": "play_in",\n      "SRC_ID": "actor",\n      "DST_ID": "movie",\n      "columns": ["SRC_ID", "role", "DST_ID"]\n    }\n  ]\n}\n'})}),"\n",(0,l.jsxs)(n.p,{children:["\u5bf9\u4e8e\u4e0a\u8ff0\u914d\u7f6e\u6587\u4ef6\uff0c\u5b9a\u4e49\u4e86\u4e09\u4e2a label\uff1a\u4e24\u4e2a\u70b9\u7c7b\u578b",(0,l.jsx)(n.code,{children:"actor"}),"\u548c",(0,l.jsx)(n.code,{children:"movie"}),"\uff0c\u4e00\u4e2a\u8fb9\u7c7b\u578b",(0,l.jsx)(n.code,{children:"role"}),"\u3002\u6bcf\u4e2a label \u90fd\u63cf\u8ff0\u4e86\uff1alabel \u7684\u540d\u5b57\u3001\u7c7b\u578b\uff08\u70b9\u8fd8\u662f\u8fb9\uff09\u3001\u5c5e\u6027\u5b57\u6bb5\u6709\u54ea\u4e9b\u4ee5\u53ca\u6bcf\u4e2a\u5b57\u6bb5\u7684\u7c7b\u578b\u3002\u5bf9\u4e8e\u70b9\uff0c\u53e6\u5916\u5b9a\u4e49\u4e86 primary \u5b57\u6bb5\u662f\u54ea\u4e2a\uff1b\u5bf9\u4e8e\u8fb9\uff0c\u53e6\u5916\u5b9a\u4e49\u4e86 constraints \u5b57\u6bb5\uff0c\u7528\u6765\u9650\u5236\u8fb9\u7684\u8d77\u70b9\u548c\u7ec8\u70b9\u53ea\u80fd\u662f\u54ea\u4e9b\u7ec4\u5408\u3002"]}),"\n",(0,l.jsxs)(n.p,{children:["\u8fd8\u63cf\u8ff0\u4e86\u4e09\u4e2a\u6570\u636e\u6587\u4ef6\uff0c\u4e24\u4e2a\u70b9\u7684\u6570\u636e\u6587\u4ef6",(0,l.jsx)(n.code,{children:"actors.csv"}),"\u548c",(0,l.jsx)(n.code,{children:"movies.csv"}),"\uff0c\u4e00\u4e2a\u8fb9\u7684\u6570\u636e\u6587\u4ef6",(0,l.jsx)(n.code,{children:"roles.csv"}),"\u3002\u6bcf\u4e2a\u90e8\u5206\u90fd\u63cf\u8ff0\u4e86\uff1a\u6587\u4ef6\u7684\u8def\u5f84\uff08path\uff09\u3001\u6570\u636e\u7c7b\u578b\uff08format\uff09\u3001\u4fe1\u606f\u5934\u5360\u5f00\u5934\u51e0\u884c\uff08header\uff09\u3001\u662f\u54ea\u4e2a label \u7684\u6570\u636e\uff08label\uff09\u3001\u6587\u4ef6\u4e2d\u6bcf\u884c\u6570\u636e\u4e2d\u7684\u6bcf\u4e2a\u5217\u5bf9\u5e94\u7684\u5b57\u6bb5\u662f\u54ea\u4e2a\u3002"]}),"\n",(0,l.jsxs)(n.p,{children:["\u5bf9\u4e8e\u4e0a\u8ff0\u914d\u7f6e\u6587\u4ef6\uff0cimport \u5de5\u5177\u5728\u6267\u884c\u7684\u8fc7\u7a0b\u4e2d\u4f1a\u5148\u5728 TuGraph \u4e2d\u521b\u5efa",(0,l.jsx)(n.code,{children:"actor"}),"\u3001",(0,l.jsx)(n.code,{children:"movie"}),"\u3001",(0,l.jsx)(n.code,{children:"role"}),"\u8fd9\u4e09\u4e2a label\uff0c\u7136\u540e\u518d\u6267\u884c\u4e09\u4e2a\u6587\u4ef6\u7684\u6570\u636e\u5bfc\u5165\u3002"]}),"\n",(0,l.jsx)(n.h2,{id:"4\u79bb\u7ebf\u5168\u91cf\u5bfc\u5165",children:"4.\u79bb\u7ebf\u5168\u91cf\u5bfc\u5165"}),"\n",(0,l.jsxs)(n.p,{children:["\u79bb\u7ebf\u6a21\u5f0f\u53ea\u80fd\u5728\u79bb\u7ebf\u72b6\u6001\u7684\u670d\u52a1\u5668\u4f7f\u7528\u3002\u79bb\u7ebf\u5bfc\u5165\u4f1a\u521b\u5efa\u4e00\u5f20\u65b0\u56fe\uff0c\u56e0\u6b64\u66f4\u9002\u5408\u65b0\u5b89\u88c5\u7684 TuGraph \u670d\u52a1\u5668\u4e0a\u7684\u7b2c\u4e00\u6b21\u6570\u636e\u5bfc\u5165\u3002\n\u8981\u5728\u79bb\u7ebf\u6a21\u5f0f\u4e0b\u4f7f\u7528",(0,l.jsx)(n.code,{children:"lgraph_import"}),"\u5de5\u5177\uff0c\u53ef\u4ee5\u6307\u5b9a",(0,l.jsx)(n.code,{children:"lgraph_import --online false"}),"\u9009\u9879\u3002\u8981\u4e86\u89e3\u53ef\u7528\u7684\u547d\u4ee4\u884c\u9009\u9879\uff0c\u8bf7\u4f7f\u7528",(0,l.jsx)(n.code,{children:"lgraph_import --online false --help"}),"\uff1a"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:'$ ./lgraph_import --online false -help\nAvailable command line options:\n    --log               Log file to use, empty means stderr. Default="".\n    -v, --verbose       Verbose level to use, higher means more verbose.\n                        Default=1.\n    ...\n    -h, --help          Print this help message. Default=0.\n'})}),"\n",(0,l.jsx)(n.p,{children:"\u547d\u4ee4\u884c\u53c2\u6570\uff1a"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"-c, --config_file"})," ",(0,l.jsx)(n.code,{children:"config_file"}),": \u5bfc\u5165\u914d\u7f6e\u6587\u4ef6\u540d\uff0c\u5176\u683c\u5f0f\u8981\u6c42\u89c1\u4e0b\u8ff0\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"--log"})," ",(0,l.jsx)(n.code,{children:"log_dir"}),": \u65e5\u5fd7\u76ee\u5f55\u3002\u9ed8\u8ba4\u4e3a\u7a7a\u5b57\u7b26\u4e32\uff0c\u6b64\u65f6\u5c06\u65e5\u5fd7\u4fe1\u606f\u8f93\u51fa\u5230\u63a7\u5236\u53f0\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"--verbose"})," ",(0,l.jsx)(n.code,{children:"0/1/2"}),": \u65e5\u5fd7\u7b49\u7ea7\uff0c\u7b49\u7ea7\u8d8a\u9ad8\u8f93\u51fa\u4fe1\u606f\u8d8a\u8be6\u7ec6\u3002\u9ed8\u8ba4\u4e3a 1\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"-i, --continue_on_error"})," ",(0,l.jsx)(n.code,{children:"true/false"}),": \u5728\u78b0\u5230\u9519\u8bef\u65f6\u8df3\u8fc7\u9519\u8bef\u5e76\u7ee7\u7eed\uff0c\u9ed8\u8ba4\u4e3a false\uff0c\u78b0\u5230\u9519\u8bef\u7acb\u5373\u9000\u51fa\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"-d, --dir"})," ",(0,l.jsx)(n.code,{children:"{diretory}"}),": \u6570\u636e\u5e93\u76ee\u5f55\uff0c\u5bfc\u5165\u5de5\u5177\u4f1a\u5c06\u6570\u636e\u5199\u5230\u8fd9\u4e2a\u76ee\u5f55\u3002\u9ed8\u8ba4\u4e3a",(0,l.jsx)(n.code,{children:"./db"}),"\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"--delimiter"})," ",(0,l.jsx)(n.code,{children:"{delimiter}"}),": \u6570\u636e\u6587\u4ef6\u5206\u9694\u7b26\u3002\u53ea\u5728\u6570\u636e\u6e90\u662f CSV \u683c\u5f0f\u65f6\u4f7f\u7528\uff0c\u9ed8\u8ba4\u4e3a",(0,l.jsx)(n.code,{children:'","'}),"\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"-u, --username"})," ",(0,l.jsx)(n.code,{children:"{user}"}),": \u6570\u636e\u5e93\u7528\u6237\u540d\u3002\u9700\u8981\u662f\u7ba1\u7406\u5458\u7528\u6237\u624d\u80fd\u6267\u884c\u79bb\u7ebf\u5bfc\u5165\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"-p, --password"})," ",(0,l.jsx)(n.code,{children:"{password}"}),": \u6307\u5b9a\u7684\u6570\u636e\u5e93\u7528\u6237\u7684\u5bc6\u7801"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"--overwrite"})," ",(0,l.jsx)(n.code,{children:"true/false"}),": \u662f\u5426\u8986\u76d6\u6570\u636e\u3002\u8bbe\u4e3a true \u65f6\uff0c\u5982\u679c\u6570\u636e\u76ee\u5f55\u5df2\u7ecf\u5b58\u5728\uff0c\u5219\u8986\u76d6\u6570\u636e\u3002\u9ed8\u8ba4\u4e3a",(0,l.jsx)(n.code,{children:"false"}),"\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"-g, --graph"})," ",(0,l.jsx)(n.code,{children:"{graph_name}"}),": \u6307\u5b9a\u9700\u8981\u5bfc\u5165\u7684\u56fe\u79cd\u7c7b\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"-h, --help"}),": \u8f93\u51fa\u5e2e\u52a9\u4fe1\u606f\u3002"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"41\u79bb\u7ebf\u5bfc\u5165\u793a\u4f8b",children:"4.1.\u79bb\u7ebf\u5bfc\u5165\u793a\u4f8b"}),"\n",(0,l.jsxs)(n.p,{children:["\u5728\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\uff0c\u6211\u4eec\u4f7f\u7528\u4e0a\u9762\u63cf\u8ff0\u7684\u7535\u5f71-\u6f14\u5458\u6570\u636e\u6765\u6f14\u793a\u5bfc\u5165\u5de5\u5177\u7684\u4f7f\u7528\u65b9\u6cd5\u3002\u5f85\u5bfc\u5165\u6570\u636e\u5206\u4e3a\u4e09\u4e2a\u6587\u4ef6\uff1a",(0,l.jsx)(n.code,{children:"movies.csv"}),"\uff0c",(0,l.jsx)(n.code,{children:"actors.csv"}),"\uff0c",(0,l.jsx)(n.code,{children:"roles.csv"}),"\u3002"]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"movies.csv"}),"\u5305\u542b\u7684\u662f\u7535\u5f71\u7684\u4fe1\u606f\uff0c\u5176\u4e2d\u6bcf\u90e8\u7535\u5f71\u6709\u4e00\u4e2a id\uff08\u4f5c\u4e3a\u68c0\u7d22\u7684 primary key\uff09\uff0c\u6b64\u5916\u6bcf\u90e8\u7535\u5f71\u8fd8\u62e5\u6709 title\u3001year \u548c rating \u7b49\u5c5e\u6027\u3002\uff08\u6570\u636e\u6765\u81ea",(0,l.jsx)(n.a,{href:"http://www.imdb.com",children:"IMDb"}),"\uff09\u3002"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"  [movies.csv]\n  id, name, year, rating\n  tt0188766,King of Comedy,1999,7.3\n  tt0286112,Shaolin Soccer,2001,7.3\n  tt4701660,The Mermaid,2016,6.3\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u5bf9\u5e94\u7684 jsonline \u683c\u5f0f\u5982\u4e0b:\n\u4e5f\u53ef\u4ee5\u6240\u6709\u5b57\u6bb5\u90fd\u662f\u5b57\u7b26\u4e32\u5f62\u5f0f\uff0c\u5bfc\u5165\u7684\u65f6\u5019\u4f1a\u8f6c\u6362\u6210\u5bf9\u5e94\u7684\u7c7b\u578b"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-json",children:'["tt0188766","King of Comedy",1999,7.3]\n["tt0286112","Shaolin Soccer",2001,7.3]\n["tt4701660","The Mermaid",2016,6.3]\n'})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-json",children:'["tt0188766","King of Comedy","1999","7.3"]\n["tt0286112","Shaolin Soccer","2001","7.3"]\n["tt4701660","The Mermaid","2016","6.3"]\n'})}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"actors.csv"}),"\u5305\u542b\u7684\u662f\u6f14\u5458\u7684\u4fe1\u606f\u3002\u6bcf\u4e2a\u6f14\u5458\u4e5f\u62e5\u6709\u4e00\u4e2a id\uff0c\u4ee5\u53ca name \u7b49\u5c5e\u6027\u3002"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"  [actors.csv]\n  id, name\n  nm015950,Stephen Chow\n  nm0628806,Man-Tat Ng\n  nm0156444,Cecilia Cheung\n  nm2514879,Yuqi Zhang\n"})}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"\u5bf9\u5e94\u7684 jsonline \u683c\u5f0f\u5982\u4e0b:"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-json",children:'["nm015950","Stephen Chow"]\n["nm0628806","Man-Tat Ng"]\n["nm0156444","Cecilia Cheung"]\n["nm2514879","Yuqi Zhang"]\n'})}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"roles.csv"}),"\u5219\u5305\u542b\u4e86\u6f14\u5458\u5728\u54ea\u4e2a\u7535\u5f71\u4e2d\u626e\u6f14\u4e86\u54ea\u4e2a\u89d2\u8272\u7684\u4fe1\u606f\u3002\u5176\u4e2d\u6bcf\u4e00\u884c\u8bb0\u5f55\u7684\u662f\u6307\u5b9a\u6f14\u5458\u5728\u6307\u5b9a\u7535\u5f71\u91cc\u9970\u6f14\u7684\u89d2\u8272\uff0c\u5bf9\u5e94\u6570\u636e\u5e93\u4e2d\u7684\u4e00\u6761\u8fb9\u3002",(0,l.jsx)(n.code,{children:"SRC_ID"})," \u548c ",(0,l.jsx)(n.code,{children:"DST_ID"})," \u5206\u522b\u662f\u8fb9\u7684\u6e90\u70b9\u548c\u76ee\u6807\u70b9\uff0c\u4ed6\u4eec\u5206\u522b\u662f",(0,l.jsx)(n.code,{children:"actors.csv"}),"\u548c",(0,l.jsx)(n.code,{children:"movies.csv"}),"\u4e2d\u5b9a\u4e49\u7684",(0,l.jsx)(n.code,{children:"primary"}),"\u5c5e\u6027\u3002"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"  [roles.csv]\n  actor, role, movie\n  nm015950,Tianchou Yin,tt0188766\n  nm015950,Steel Leg,tt0286112\n  nm0628806,,tt0188766\n  nm0628806,coach,tt0286112\n  nm0156444,PiaoPiao Liu,tt0188766\n  nm2514879,Ruolan Li,tt4701660\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u5bf9\u5e94\u7684 jsonline \u683c\u5f0f\u5982\u4e0b:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-json",children:'["nm015950","Tianchou Yin","tt0188766"]\n["nm015950","Steel Leg","tt0286112"]\n["nm0628806",null,"tt0188766"]\n["nm0628806","coach","tt0286112"]\n["nm0156444","PiaoPiao Liu","tt0188766"]\n["nm2514879","Ruolan Li","tt4701660"]\n'})}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"\u914d\u7f6e\u6587\u4ef6import.conf"}),"\uff0c\u6ce8\u610f\u6bcf\u4e2a\u6587\u4ef6\u4e2d\u6709\u4e24\u4e2a\u6807\u9898\u884c\uff0c\u56e0\u6b64\u6211\u4eec\u9700\u8981\u6307\u5b9a",(0,l.jsx)(n.code,{children:"HEADER=2"}),"\u9009\u9879\u3002"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-json",children:'{\n  "schema": [\n    {\n      "label": "actor",\n      "type": "VERTEX",\n      "properties": [\n        { "name": "aid", "type": "STRING" },\n        { "name": "name", "type": "STRING" }\n      ],\n      "primary": "aid"\n    },\n    {\n      "label": "movie",\n      "type": "VERTEX",\n      "properties": [\n        { "name": "mid", "type": "STRING" },\n        { "name": "name", "type": "STRING" },\n        { "name": "year", "type": "INT16" },\n        { "name": "rate", "type": "FLOAT", "optional": true }\n      ],\n      "primary": "mid"\n    },\n    {\n      "label": "play_in",\n      "type": "EDGE",\n      "properties": [{ "name": "role", "type": "STRING", "optional": true }],\n      "constraints": [["actor", "movie"]]\n    }\n  ],\n  "files": [\n    {\n      "path": "actors.csv",\n      "header": 2,\n      "format": "CSV",\n      "label": "actor",\n      "columns": ["aid", "name"]\n    },\n    {\n      "path": "movies.csv",\n      "header": 2,\n      "format": "CSV",\n      "label": "movie",\n      "columns": ["mid", "name", "year", "rate"]\n    },\n    {\n      "path": "roles.csv",\n      "header": 2,\n      "format": "CSV",\n      "label": "play_in",\n      "SRC_ID": "actor",\n      "DST_ID": "movie",\n      "columns": ["SRC_ID", "role", "DST_ID"]\n    }\n  ]\n}\n'})}),"\n",(0,l.jsx)(n.p,{children:"\u4f7f\u7528\u5bfc\u5165\u914d\u7f6e\u6587\u4ef6\uff0c\u6211\u4eec\u73b0\u5728\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u5bfc\u5165\u6570\u636e\uff1a"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"$ ./lgraph_import\n        -c import.conf             # \u4eceimport.conf\u8bfb\u53d6\u914d\u7f6e\u4fe1\u606f\n        --dir /data/lgraph_db      # \u5c06\u6570\u636e\u5b58\u653e\u5728/data/lgraph_db\n        --graph mygraph            # \u5bfc\u5165\u540d\u4e3a mygraph \u7684\u56fe\n"})}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"\u6ce8\u610f"}),"\uff1a"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\u5982\u679c\u540d\u4e3a",(0,l.jsx)(n.code,{children:"mygraph"}),"\u7684\u56fe\u5df2\u5b58\u5728\uff0c\u5bfc\u5165\u5de5\u5177\u5c06\u6253\u5370\u9519\u8bef\u6d88\u606f\u5e76\u9000\u51fa\u3002\u8981\u5f3a\u5236\u8986\u76d6\u56fe\u5f62\uff0c\u53ef\u4ee5\u4f7f\u7528",(0,l.jsx)(n.code,{children:"--overwrite true"})," \u9009\u9879\u3002"]}),"\n",(0,l.jsx)(n.li,{children:"\u914d\u7f6e\u6587\u4ef6\u548c\u6570\u636e\u6587\u4ef6\u5fc5\u987b\u4f7f\u7528 UTF-8 \u7f16\u7801\uff08\u6216\u666e\u901a ASCII \u7f16\u7801\uff0c\u5373 UTF-8 \u7684\u5b50\u96c6\uff09\u5b58\u50a8\u3002\u5982\u679c\u4efb\u4f55\u6587\u4ef6\u4f7f\u7528 UTF-8 \u4ee5\u5916\u7684\u7f16\u7801\uff08\u4f8b\u5982\uff0c\u5e26\u6709 BOM \u6216 GBK \u7684 UTF-8\uff09\u7f16\u7801\uff0c\u5219\u5bfc\u5165\u5c06\u5931\u8d25\uff0c\u5e76\u8f93\u51fa\u5206\u6790\u5668\u9519\u8bef\u3002"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"5\u5728\u7ebf\u589e\u91cf\u5bfc\u5165",children:"5.\u5728\u7ebf\u589e\u91cf\u5bfc\u5165"}),"\n",(0,l.jsxs)(n.p,{children:["\u5728\u7ebf\u5bfc\u5165\u6a21\u5f0f\u53ef\u7528\u4e8e\u5c06\u4e00\u6279\u6587\u4ef6\u5bfc\u5165\u5df2\u5728\u8fd0\u884c\u4e2d\u7684 TuGraph \u5b9e\u4f8b\u4e2d\u3002\u8fd9\u5bf9\u4e8e\u5904\u7406\u901a\u5e38\u4ee5\u56fa\u5b9a\u7684\u65f6\u95f4\u95f4\u9694\u8fdb\u884c\u7684\u589e\u91cf\u6279\u5904\u7406\u66f4\u65b0\u975e\u5e38\u4fbf\u5229\u3002",(0,l.jsx)(n.code,{children:"lgraph_import --online true"}),"\u9009\u9879\u4f7f\u5bfc\u5165\u5de5\u5177\u80fd\u591f\u5728\u7ebf\u6a21\u5f0f\u5de5\u4f5c\u3002\u4e0e",(0,l.jsx)(n.code,{children:"\u79bb\u7ebf\u6a21\u5f0f"}),"\u4e00\u6837\uff0c\u5728\u7ebf\u6a21\u5f0f\u6709\u81ea\u5df1\u7684\u547d\u4ee4\u884c\u9009\u9879\u96c6\uff0c\u53ef\u4ee5\u4f7f\u7528",(0,l.jsx)(n.code,{children:"-h\uff0c--help"}),"\u9009\u9879\u8fdb\u884c\u6253\u5370\u8f93\u51fa\uff1a"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:'$ lgraph_import --online true -h\nAvailable command line options:\n    --online            Whether to import online.\n    -h, --help          Print this help message. Default=0.\n\nAvailable command line options:\n    --log               Log file to use, empty means stderr. Default="".\n    -v, --verbose       Verbose level to use, higher means more verbose.\n                        Default=1.\n    -c, --config_file   Config file path.\n    -r, --url           DB REST API address.\n    -u, --username      DB username.\n    -p, --password      DB password.\n    -i, --continue_on_error\n                        When we hit a duplicate uid or missing uid, should we\n                        continue or abort. Default=0.\n    -g, --graph         The name of the graph to import into. Default=default.\n    --skip_packages     How many packages should we skip. Default=0.\n    --delimiter         Delimiter used in the CSV files\n    --breakpoint_continue\n                        When the transmission process is interrupted,whether\n                        to re-transmit from zero package next time. Default=false\n    -h, --help          Print this help message. Default=0.\n'})}),"\n",(0,l.jsxs)(n.p,{children:["\u6587\u4ef6\u7684\u76f8\u5173\u914d\u7f6e\u5728\u914d\u7f6e\u6587\u4ef6\u4e2d\u6307\u5b9a\uff0c\u5176\u683c\u5f0f\u4e0e",(0,l.jsx)(n.code,{children:"\u79bb\u7ebf\u6a21\u5f0f"}),"\u5b8c\u5168\u76f8\u540c\u3002\u4f46\u662f\uff0c\u6211\u4eec\u73b0\u5728\u4e0d\u662f\u5c06\u6570\u636e\u5bfc\u5165\u672c\u5730\u6570\u636e\u5e93\uff0c\u800c\u662f\u5c06\u6570\u636e\u53d1\u9001\u5230\u6b63\u5728\u8fd0\u884c\u7684 TuGraph \u5b9e\u4f8b\u4e2d\uff0c\u8be5\u5b9e\u4f8b\u901a\u5e38\u8fd0\u884c\u5728\u4e0e\u8fd0\u884c\u5bfc\u5165\u5de5\u5177\u7684\u5ba2\u6237\u7aef\u8ba1\u7b97\u673a\u4e0d\u540c\u7684\u8ba1\u7b97\u673a\u4e0a\u3002\u56e0\u6b64\uff0c\u6211\u4eec\u9700\u8981\u6307\u5b9a\u8fdc\u7a0b\u8ba1\u7b97\u673a\u7684 HTTP \u5730\u5740\u7684URL\u3001DB\u7528\u6237\u548c\u5bc6\u7801\u3002"]}),"\n",(0,l.jsxs)(n.p,{children:["\u5982\u679c\u7528\u6237\u548c\u5bc6\u7801\u6709\u6548\uff0c\u5e76\u4e14\u6307\u5b9a\u7684\u56fe\u5b58\u5728\uff0c\u5bfc\u5165\u5de5\u5177\u5c06\u5c06\u6570\u636e\u53d1\u9001\u5230\u670d\u52a1\u5668\uff0c\u670d\u52a1\u5668\u968f\u540e\u89e3\u6790\u6570\u636e\u5e76\u5c06\u5176\u5199\u5165\u6307\u5b9a\u7684\u56fe\u3002\u6570\u636e\u5c06\u4ee5\u5927\u7ea6 16MB \u5927\u5c0f\u7684\u5305\u53d1\u9001\uff0c\u5728\u6700\u8fd1\u7684\u6362\u884c\u7b26\u5904\u4e2d\u65ad\u3002\u6bcf\u4e2a\u5305\u90fd\u662f\u4ee5\u539f\u5b50\u65b9\u5f0f\u5bfc\u5165\u7684\uff0c\u8fd9\u610f\u5473\u7740\u5982\u679c\u6210\u529f\u5bfc\u5165\u5305\uff0c\u5219\u6210\u529f\u5bfc\u5165\u6240\u6709\u6570\u636e\uff0c\u5426\u5219\uff0c\u4efb\u4f55\u6570\u636e\u90fd\u4e0d\u4f1a\u8fdb\u5165\u6570\u636e\u5e93\u3002\u5982\u679c\u6307\u5b9a\u4e86",(0,l.jsx)(n.code,{children:"--continue_on_error true"}),"\uff0c\u5219\u5ffd\u7565\u6570\u636e\u5b8c\u6574\u6027\u9519\u8bef\uff0c\u5e76\u5ffd\u7565\u8fdd\u89c4\u884c\u3002\u5426\u5219\uff0c\u5bfc\u5165\u5c06\u5728\u7b2c\u4e00\u4e2a\u9519\u8bef\u5305\u5904\u505c\u6b62\uff0c\u5e76\u6253\u5370\u51fa\u5df2\u5bfc\u5165\u7684\u5305\u6570\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u7528\u6237\u53ef\u4ee5\u4fee\u6539\u6570\u636e\u4ee5\u6d88\u9664\u9519\u8bef\uff0c\u7136\u540e\u4f7f\u7528",(0,l.jsx)(n.code,{children:"--skip_packages N"}),"\u91cd\u505a\u5bfc\u5165\u4ee5\u8df3\u8fc7\u5df2\u5bfc\u5165\u7684\u5305\u3002"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(a,{...e})}):a(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>c,x:()=>d});var l=r(96540);const s={},i=l.createContext(s);function c(e){const n=l.useContext(i);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),l.createElement(i.Provider,{value:n},e.children)}}}]);