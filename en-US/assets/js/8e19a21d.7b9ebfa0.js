"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[98646],{92764:(e,n,d)=>{d.r(n),d.d(n,{assets:()=>h,contentTitle:()=>s,default:()=>a,frontMatter:()=>i,metadata:()=>c,toc:()=>t});var l=d(74848),r=d(28453);const i={},s="\u4e1a\u52a1\u5f00\u53d1\u6307\u5357",c={id:"development_guide",title:"\u4e1a\u52a1\u5f00\u53d1\u6307\u5357",description:"\u8fde\u63a5tugraph-db",source:"@site/versions/version-4.5.1/zh-CN/source/development_guide.md",sourceDirName:".",slug:"/development_guide",permalink:"/tugraph-db/en-US/zh/4.5.1/development_guide",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u53ef\u89c6\u5316\u64cd\u4f5c\u624b\u518c\uff08\u65e7\u7248\uff09",permalink:"/tugraph-db/en-US/zh/4.5.1/user-guide/tugraph-browser-legacy"},next:{title:"\u73af\u5883\u51c6\u5907",permalink:"/tugraph-db/en-US/zh/4.5.1/installation&running/environment"}},h={},t=[{value:"\u8fde\u63a5tugraph-db",id:"\u8fde\u63a5tugraph-db",level:2},{value:"\u9a71\u52a8\u8fde\u63a5",id:"\u9a71\u52a8\u8fde\u63a5",level:3},{value:"\u7ec8\u7aef\u8fde\u63a5",id:"\u7ec8\u7aef\u8fde\u63a5",level:3},{value:"\u5b50\u56fe\u64cd\u4f5c",id:"\u5b50\u56fe\u64cd\u4f5c",level:2},{value:"\u521b\u5efa\u5b50\u56fe",id:"\u521b\u5efa\u5b50\u56fe",level:3},{value:"\u5220\u9664\u5b50\u56fe",id:"\u5220\u9664\u5b50\u56fe",level:3},{value:"\u6e05\u7a7a\u5b50\u56fe",id:"\u6e05\u7a7a\u5b50\u56fe",level:3},{value:"\u5220\u9664\u6240\u6709\u7684\u70b9\u8fb9\u6570\u636e\u548c\u56feschema",id:"\u5220\u9664\u6240\u6709\u7684\u70b9\u8fb9\u6570\u636e\u548c\u56feschema",level:4},{value:"\u53ea\u5220\u9664\u6240\u6709\u70b9\u8fb9\u6570\u636e, \u4fdd\u7559\u56feschema",id:"\u53ea\u5220\u9664\u6240\u6709\u70b9\u8fb9\u6570\u636e-\u4fdd\u7559\u56feschema",level:4},{value:"\u67e5\u770b\u56feschema",id:"\u67e5\u770b\u56feschema",level:3},{value:"\u5217\u51fa\u6240\u6709\u5b50\u56fe",id:"\u5217\u51fa\u6240\u6709\u5b50\u56fe",level:3},{value:"\u5237\u65b0\u5b50\u56fe\u6587\u4ef6\u7cfb\u7edf\u7f13\u5b58\u6570\u636e",id:"\u5237\u65b0\u5b50\u56fe\u6587\u4ef6\u7cfb\u7edf\u7f13\u5b58\u6570\u636e",level:3},{value:"\u70b9\u7c7b\u578b\u64cd\u4f5c",id:"\u70b9\u7c7b\u578b\u64cd\u4f5c",level:2},{value:"\u521b\u5efa\u70b9\u7c7b\u578b",id:"\u521b\u5efa\u70b9\u7c7b\u578b",level:3},{value:"\u67e5\u770b\u70b9\u7c7b\u578bschema",id:"\u67e5\u770b\u70b9\u7c7b\u578bschema",level:3},{value:"\u5220\u9664\u70b9\u7c7b\u578b",id:"\u5220\u9664\u70b9\u7c7b\u578b",level:3},{value:"\u70b9\u7c7b\u578b\u6dfb\u52a0\u5b57\u6bb5",id:"\u70b9\u7c7b\u578b\u6dfb\u52a0\u5b57\u6bb5",level:3},{value:"\u70b9\u7c7b\u578b\u5220\u9664\u5b57\u6bb5",id:"\u70b9\u7c7b\u578b\u5220\u9664\u5b57\u6bb5",level:3},{value:"\u70b9\u7c7b\u578b\u6dfb\u52a0\u7d22\u5f15",id:"\u70b9\u7c7b\u578b\u6dfb\u52a0\u7d22\u5f15",level:3},{value:"\u70b9\u7c7b\u578b\u5220\u9664\u7d22\u5f15",id:"\u70b9\u7c7b\u578b\u5220\u9664\u7d22\u5f15",level:3},{value:"\u8fb9\u7c7b\u578b\u64cd\u4f5c",id:"\u8fb9\u7c7b\u578b\u64cd\u4f5c",level:2},{value:"\u521b\u5efa\u8fb9\u7c7b\u578b",id:"\u521b\u5efa\u8fb9\u7c7b\u578b",level:3},{value:"\u67e5\u770b\u8fb9\u7c7b\u578bschema",id:"\u67e5\u770b\u8fb9\u7c7b\u578bschema",level:3},{value:"\u5220\u9664\u8fb9\u7c7b\u578b",id:"\u5220\u9664\u8fb9\u7c7b\u578b",level:3},{value:"\u8fb9\u7c7b\u578b\u6dfb\u52a0\u5b57\u6bb5",id:"\u8fb9\u7c7b\u578b\u6dfb\u52a0\u5b57\u6bb5",level:3},{value:"\u8fb9\u7c7b\u578b\u5220\u9664\u5b57\u6bb5",id:"\u8fb9\u7c7b\u578b\u5220\u9664\u5b57\u6bb5",level:3},{value:"\u8fb9\u7c7b\u578b\u6dfb\u52a0\u7d22\u5f15",id:"\u8fb9\u7c7b\u578b\u6dfb\u52a0\u7d22\u5f15",level:3},{value:"\u8fb9\u7c7b\u578b\u5220\u9664\u7d22\u5f15",id:"\u8fb9\u7c7b\u578b\u5220\u9664\u7d22\u5f15",level:3},{value:"\u5b9e\u65f6\u67e5\u770b\u5f53\u524d\u70b9\u8fb9\u6570\u636e\u91cf",id:"\u5b9e\u65f6\u67e5\u770b\u5f53\u524d\u70b9\u8fb9\u6570\u636e\u91cf",level:2},{value:"\u5bfc\u5165\u6570\u636e",id:"\u5bfc\u5165\u6570\u636e",level:2},{value:"\u6279\u91cfupsert\u70b9\u6570\u636e",id:"\u6279\u91cfupsert\u70b9\u6570\u636e",level:3},{value:"\u6279\u91cfupsert\u8fb9\u6570\u636e",id:"\u6279\u91cfupsert\u8fb9\u6570\u636e",level:3},{value:"\u6279\u91cfupsert\u8fb9\u6570\u636e-\u6839\u636e\u8fb9\u7684\u5c5e\u6027\u786e\u5b9a\u552f\u4e00",id:"\u6279\u91cfupsert\u8fb9\u6570\u636e-\u6839\u636e\u8fb9\u7684\u5c5e\u6027\u786e\u5b9a\u552f\u4e00",level:3},{value:"DataX",id:"datax",level:3},{value:"\u79bb\u7ebf\u8131\u673a\u5bfc\u5165\u6570\u636e",id:"\u79bb\u7ebf\u8131\u673a\u5bfc\u5165\u6570\u636e",level:3},{value:"\u5bfc\u51fa\u6570\u636e",id:"\u5bfc\u51fa\u6570\u636e",level:2},{value:"\u5728\u7ebf\u8fdc\u7a0b\u6d41\u5f0f\u5bfc\u51fa\u6570\u636e",id:"\u5728\u7ebf\u8fdc\u7a0b\u6d41\u5f0f\u5bfc\u51fa\u6570\u636e",level:3},{value:"\u672c\u5730\u5bfc\u51fa\u6574\u4e2a\u56fe\u7684\u6240\u6709\u6570\u636e",id:"\u672c\u5730\u5bfc\u51fa\u6574\u4e2a\u56fe\u7684\u6240\u6709\u6570\u636e",level:3},{value:"\u8de8\u7248\u672c\u8fc1\u79fb\u6570\u636e",id:"\u8de8\u7248\u672c\u8fc1\u79fb\u6570\u636e",level:3}];function o(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.header,{children:(0,l.jsx)(n.h1,{id:"\u4e1a\u52a1\u5f00\u53d1\u6307\u5357",children:"\u4e1a\u52a1\u5f00\u53d1\u6307\u5357"})}),"\n",(0,l.jsx)(n.h2,{id:"\u8fde\u63a5tugraph-db",children:"\u8fde\u63a5tugraph-db"}),"\n",(0,l.jsx)(n.h3,{id:"\u9a71\u52a8\u8fde\u63a5",children:"\u9a71\u52a8\u8fde\u63a5"}),"\n",(0,l.jsx)(n.p,{children:"tugraph-db\u517c\u5bb9neo4j\u7684\u901a\u8baf\u534f\u8bae\uff0c\u56e0\u6b64\u53ef\u4ee5\u4f7f\u7528neo4j\u7684\u9a71\u52a8\u8fde\u63a5tugraph-db\u7684server\u3002"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.a,{href:"/tugraph-db/en-US/zh/4.5.1/client-tools/bolt-client",children:"bolt driver \u4f7f\u7528\u4ecb\u7ecd"})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.a,{href:"https://github.com/TuGraph-family/tugraph-db/tree/master/demo/Bolt",children:"bolt driver \u4f7f\u7528\u4f8b\u5b50"})}),"\n",(0,l.jsx)(n.h3,{id:"\u7ec8\u7aef\u8fde\u63a5",children:"\u7ec8\u7aef\u8fde\u63a5"}),"\n",(0,l.jsx)(n.p,{children:"\u9a71\u52a8\u662f\u4e1a\u52a1\u4ee3\u7801\u91cc\u9762\u4f7f\u7528\u7684\uff0c\u5bf9\u4e8e\u670d\u52a1\u5668\u4e0a\u7ec8\u7aef\u8bbf\u95ee\uff0c\u53ef\u4ee5\u4f7f\u7528cli\u5ba2\u6237\u7aef\u3002"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.a,{href:"/tugraph-db/en-US/zh/4.5.1/client-tools/bolt-console-client",children:"console client \u4f7f\u7528\u4ecb\u7ecd"})}),"\n",(0,l.jsx)(n.h2,{id:"\u5b50\u56fe\u64cd\u4f5c",children:"\u5b50\u56fe\u64cd\u4f5c"}),"\n",(0,l.jsx)(n.h3,{id:"\u521b\u5efa\u5b50\u56fe",children:"\u521b\u5efa\u5b50\u56fe"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"CALL dbms.graph.createGraph('graph1')\n"})}),"\n",(0,l.jsx)(n.h3,{id:"\u5220\u9664\u5b50\u56fe",children:"\u5220\u9664\u5b50\u56fe"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"CALL dbms.graph.deleteGraph('graph1')\n"})}),"\n",(0,l.jsx)(n.h3,{id:"\u6e05\u7a7a\u5b50\u56fe",children:"\u6e05\u7a7a\u5b50\u56fe"}),"\n",(0,l.jsx)(n.h4,{id:"\u5220\u9664\u6240\u6709\u7684\u70b9\u8fb9\u6570\u636e\u548c\u56feschema",children:"\u5220\u9664\u6240\u6709\u7684\u70b9\u8fb9\u6570\u636e\u548c\u56feschema"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"CALL db.dropDB()\n"})}),"\n",(0,l.jsx)(n.h4,{id:"\u53ea\u5220\u9664\u6240\u6709\u70b9\u8fb9\u6570\u636e-\u4fdd\u7559\u56feschema",children:"\u53ea\u5220\u9664\u6240\u6709\u70b9\u8fb9\u6570\u636e, \u4fdd\u7559\u56feschema"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"CALL db.dropAllVertex()\n"})}),"\n",(0,l.jsx)(n.h3,{id:"\u67e5\u770b\u56feschema",children:"\u67e5\u770b\u56feschema"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"CALL dbms.graph.getGraphSchema()\n"})}),"\n",(0,l.jsx)(n.h3,{id:"\u5217\u51fa\u6240\u6709\u5b50\u56fe",children:"\u5217\u51fa\u6240\u6709\u5b50\u56fe"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"CALL dbms.graph.listGraphs()\n"})}),"\n",(0,l.jsx)(n.h3,{id:"\u5237\u65b0\u5b50\u56fe\u6587\u4ef6\u7cfb\u7edf\u7f13\u5b58\u6570\u636e",children:"\u5237\u65b0\u5b50\u56fe\u6587\u4ef6\u7cfb\u7edf\u7f13\u5b58\u6570\u636e"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"CALL db.flushDB()\n"})}),"\n",(0,l.jsx)(n.h2,{id:"\u70b9\u7c7b\u578b\u64cd\u4f5c",children:"\u70b9\u7c7b\u578b\u64cd\u4f5c"}),"\n",(0,l.jsx)(n.h3,{id:"\u521b\u5efa\u70b9\u7c7b\u578b",children:"\u521b\u5efa\u70b9\u7c7b\u578b"}),"\n",(0,l.jsxs)(n.p,{children:["\u5982\u4e0bjson\u5b9a\u4e49\u4e86\u4e00\u4e2a\u70b9\u7c7b\u578b\uff0c\u540d\u5b57\u662f",(0,l.jsx)(n.code,{children:"node1"}),"\u3002"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-json",children:'{\n\t"label": "node1",\n\t"primary": "id",\n\t"type": "VERTEX",\n\t"detach_property": true,\n\t"properties": [{\n\t\t"name": "id",\n\t\t"type": "INT32",\n\t\t"optional": false\n\t}, {\n\t\t"name": "name",\n\t\t"type": "STRING",\n\t\t"optional": false,\n\t\t"index": true\n\t}, {\n\t\t"name": "num",\n\t\t"type": "INT32",\n\t\t"optional": false,\n\t\t"index": true,\n\t\t"unique": true\n\t}, {\n\t\t"name": "desc",\n\t\t"type": "STRING",\n\t\t"optional": true\n\t}]\n}\n\n'})}),"\n",(0,l.jsx)(n.p,{children:"\u628a\u4e0a\u9762\u8fd9\u4e2ajson\u5e8f\u5217\u5316\u6210\u5b57\u7b26\u4e32\uff0c\u4f5c\u4e3a\u53c2\u6570\u4f20\u5165\uff0c\u5efa\u8bae\u4f7f\u7528\u9a71\u52a8\u7684\u53c2\u6570\u5316\u7279\u6027\uff0c\u907f\u514d\u81ea\u5df1\u62fc\u63a5\u8bed\u53e5\u3002"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"CALL db.createVertexLabelByJson($json_data)\n"})}),"\n",(0,l.jsx)(n.h3,{id:"\u67e5\u770b\u70b9\u7c7b\u578bschema",children:"\u67e5\u770b\u70b9\u7c7b\u578bschema"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"CALL db.getVertexSchema('node1')\n"})}),"\n",(0,l.jsx)(n.h3,{id:"\u5220\u9664\u70b9\u7c7b\u578b",children:"\u5220\u9664\u70b9\u7c7b\u578b"}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"\u8be5\u64cd\u4f5c\u4f1a\u540c\u6b65\u5220\u9664\u6240\u6709\u8be5\u7c7b\u578b\u7684\u70b9\u6570\u636e\uff0c\u6570\u636e\u91cf\u5927\u7684\u65f6\u5019\uff0c\u6709\u65f6\u95f4\u6d88\u8017\u3002"}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["\u5982\u4e0b\u4f8b\u5b50\u5220\u9664\u70b9\u7c7b\u578b",(0,l.jsx)(n.code,{children:"node1"}),"\u4ee5\u53ca\u8be5\u7c7b\u578b\u7684\u6240\u6709\u70b9\u6570\u636e\u3002"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"CALL db.deleteLabel('vertex', 'node1')\n"})}),"\n",(0,l.jsx)(n.h3,{id:"\u70b9\u7c7b\u578b\u6dfb\u52a0\u5b57\u6bb5",children:"\u70b9\u7c7b\u578b\u6dfb\u52a0\u5b57\u6bb5"}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"\u8be5\u64cd\u4f5c\u4f1a\u540c\u6b65\u53d8\u66f4\u6240\u6709\u8be5\u7c7b\u578b\u70b9\u7684\u5c5e\u6027\u6570\u636e\uff0c\u6570\u636e\u91cf\u5927\u7684\u65f6\u5019\uff0c\u6709\u65f6\u95f4\u6d88\u8017\u3002"}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["\u5982\u4e0b\u4f8b\u5b50\uff0c\u5bf9\u4e8e\u70b9\u7c7b\u578b",(0,l.jsx)(n.code,{children:"node1"}),"\uff0c\u4e00\u6b21\u6dfb\u52a0\u4e86\u4e24\u4e2a\u5b57\u6bb5\uff1a",(0,l.jsx)(n.code,{children:"field1"}),"\uff0c\u5b57\u7b26\u4e32\u7c7b\u578b\uff0c\u53ef\u9009\uff0c\u9ed8\u8ba4\u503c\u662f ",(0,l.jsx)(n.code,{children:"null"}),"; ",(0,l.jsx)(n.code,{children:"field2"}),"\uff0c",(0,l.jsx)(n.code,{children:"int64"}),"\u7c7b\u578b\uff0c\u5fc5\u9009\uff0c\u9ed8\u8ba4\u503c\u662f0."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"CALL db.alterLabelAddFields('vertex', 'node1', ['field1', string, null ,true], ['field2', int64, 0, false])\n"})}),"\n",(0,l.jsx)(n.h3,{id:"\u70b9\u7c7b\u578b\u5220\u9664\u5b57\u6bb5",children:"\u70b9\u7c7b\u578b\u5220\u9664\u5b57\u6bb5"}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"\u8be5\u64cd\u4f5c\u4f1a\u540c\u6b65\u53d8\u66f4\u6240\u6709\u8be5\u7c7b\u578b\u70b9\u7684\u5c5e\u6027\u6570\u636e\uff0c\u6570\u636e\u91cf\u5927\u7684\u65f6\u5019\uff0c\u6709\u65f6\u95f4\u6d88\u8017\u3002"}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["\u5982\u4e0b\u4f8b\u5b50\uff0c\u5bf9\u4e8e\u70b9\u7c7b\u578b",(0,l.jsx)(n.code,{children:"node1"}),"\uff0c\u4e00\u6b21\u5220\u9664\u4e86\u4e24\u4e2a\u5b57\u6bb5: ",(0,l.jsx)(n.code,{children:"field1"})," \u548c ",(0,l.jsx)(n.code,{children:"field2"}),"\u3002"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"CALL db.alterLabelDelFields('vertex', 'node1', ['field1', 'field2'])\n"})}),"\n",(0,l.jsx)(n.h3,{id:"\u70b9\u7c7b\u578b\u6dfb\u52a0\u7d22\u5f15",children:"\u70b9\u7c7b\u578b\u6dfb\u52a0\u7d22\u5f15"}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"\u8be5\u64cd\u4f5c\u4f1a\u540c\u6b65\u6784\u5efa\u7d22\u5f15\u6570\u636e\uff0c\u6570\u636e\u91cf\u5927\u7684\u65f6\u5019\uff0c\u6709\u65f6\u95f4\u6d88\u8017\u3002"}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["\u5982\u4e0b\u4f8b\u5b50\uff0c\u5bf9\u4e8e\u70b9\u7c7b\u578b",(0,l.jsx)(n.code,{children:"node1"}),"\uff0c\u7ed9",(0,l.jsx)(n.code,{children:"field1"}),"\u5b57\u6bb5\u6dfb\u52a0\u4e86\u4e00\u4e2a\u975e\u552f\u4e00\u7d22\u5f15\u3002"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"CALL db.addIndex('node1', 'field1', false)\n"})}),"\n",(0,l.jsxs)(n.p,{children:["\u5982\u4e0b\u4f8b\u5b50\uff0c\u5bf9\u4e8e\u70b9\u7c7b\u578b",(0,l.jsx)(n.code,{children:"node1"}),"\uff0c\u7ed9",(0,l.jsx)(n.code,{children:"field2"}),"\u5b57\u6bb5\u6dfb\u52a0\u4e86\u4e00\u4e2a\u552f\u4e00\u7d22\u5f15\u3002"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"CALL db.addIndex('node1', 'field2', true)\n"})}),"\n",(0,l.jsx)(n.h3,{id:"\u70b9\u7c7b\u578b\u5220\u9664\u7d22\u5f15",children:"\u70b9\u7c7b\u578b\u5220\u9664\u7d22\u5f15"}),"\n",(0,l.jsxs)(n.p,{children:["\u5982\u4e0b\u4f8b\u5b50\uff0c\u5bf9\u4e8e\u70b9\u7c7b\u578b",(0,l.jsx)(n.code,{children:"node1"}),"\uff0c\u5220\u9664\u5b57\u6bb5",(0,l.jsx)(n.code,{children:"field1"}),"\u4e0a\u7684\u7d22\u5f15\u3002"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"CALL db.deleteIndex('node1', 'field1')\n"})}),"\n",(0,l.jsx)(n.h2,{id:"\u8fb9\u7c7b\u578b\u64cd\u4f5c",children:"\u8fb9\u7c7b\u578b\u64cd\u4f5c"}),"\n",(0,l.jsx)(n.h3,{id:"\u521b\u5efa\u8fb9\u7c7b\u578b",children:"\u521b\u5efa\u8fb9\u7c7b\u578b"}),"\n",(0,l.jsxs)(n.p,{children:["\u5982\u4e0bjson\u5b9a\u4e49\u4e86\u4e00\u4e2a\u8fb9\u7684schema\uff0c\u540d\u5b57\u662f",(0,l.jsx)(n.code,{children:"edge1"}),"\u3002"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-json",children:'{\n  "label": "edge1",\n  "type": "EDGE",\n  "detach_property": true,\n  "constraints": [\n    ["node1", "node2"]\n  ],\n  "properties": [{\n    "name": "id",\n    "type": "INT32",\n    "optional": false\n  }, {\n    "name": "name",\n    "type": "STRING",\n    "optional": false,\n    "index": true\n  }, {\n    "name": "num",\n    "type": "INT32",\n    "optional": false,\n    "index": true,\n    "unique": true\n  }, {\n    "name": "desc",\n    "type": "STRING",\n    "optional": true\n  }]\n}\n'})}),"\n",(0,l.jsx)(n.p,{children:"\u628a\u4e0a\u9762\u8fd9\u4e2ajson\u5e8f\u5217\u5316\u6210\u5b57\u7b26\u4e32\uff0c\u4f5c\u4e3a\u53c2\u6570\u4f20\u5165\uff0c\u5efa\u8bae\u4f7f\u7528\u9a71\u52a8\u7684\u53c2\u6570\u5316\u7279\u6027\uff0c\u907f\u514d\u81ea\u5df1\u62fc\u63a5\u8bed\u53e5\u3002"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"CALL db.createEdgeLabelByJson($json_data)\n"})}),"\n",(0,l.jsx)(n.h3,{id:"\u67e5\u770b\u8fb9\u7c7b\u578bschema",children:"\u67e5\u770b\u8fb9\u7c7b\u578bschema"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"CALL db.getEdgeSchema('edge1')\n"})}),"\n",(0,l.jsx)(n.h3,{id:"\u5220\u9664\u8fb9\u7c7b\u578b",children:"\u5220\u9664\u8fb9\u7c7b\u578b"}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"\u8be5\u64cd\u4f5c\u4f1a\u540c\u6b65\u5220\u9664\u6240\u6709\u8be5\u7c7b\u578b\u7684\u8fb9\uff0c\u6570\u636e\u91cf\u5927\u7684\u65f6\u5019\uff0c\u6709\u65f6\u95f4\u6d88\u8017\u3002"}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["\u5982\u4e0b\u4f8b\u5b50\uff0c\u5220\u9664\u8fb9\u7c7b\u578b",(0,l.jsx)(n.code,{children:"edge1"}),"\u4ee5\u53ca\u8be5\u7c7b\u578b\u7684\u6240\u6709\u8fb9\u6570\u636e\u3002"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"CALL db.deleteLabel('edge', 'edge1')\n"})}),"\n",(0,l.jsx)(n.h3,{id:"\u8fb9\u7c7b\u578b\u6dfb\u52a0\u5b57\u6bb5",children:"\u8fb9\u7c7b\u578b\u6dfb\u52a0\u5b57\u6bb5"}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"\u8be5\u64cd\u4f5c\u4f1a\u540c\u6b65\u53d8\u66f4\u6240\u6709\u8be5\u7c7b\u578b\u8fb9\u7684\u5c5e\u6027\u6570\u636e\uff0c\u6570\u636e\u91cf\u5927\u7684\u65f6\u5019\uff0c\u6709\u65f6\u95f4\u6d88\u8017\u3002"}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["\u5982\u4e0b\u4f8b\u5b50\uff0c\u5bf9\u4e8e\u8fb9\u7c7b\u578b",(0,l.jsx)(n.code,{children:"edge1"}),"\uff0c\u4e00\u6b21\u6dfb\u52a0\u4e86\u4e24\u4e2a\u5b57\u6bb5: ",(0,l.jsx)(n.code,{children:"field1"}),"\uff0c\u5b57\u7b26\u4e32\u7c7b\u578b\uff0c\u53ef\u9009\uff0c\u9ed8\u8ba4\u503c\u662f ",(0,l.jsx)(n.code,{children:"null"}),"; ",(0,l.jsx)(n.code,{children:"field2"}),"\uff0c",(0,l.jsx)(n.code,{children:"int64"}),"\u7c7b\u578b\uff0c\u5fc5\u9009\uff0c\u9ed8\u8ba4\u503c\u662f",(0,l.jsx)(n.code,{children:"0"}),"."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"CALL db.alterLabelAddFields('edge', 'edge1', ['field1', string, null ,true], ['field2', int64, 0, false])\n"})}),"\n",(0,l.jsx)(n.h3,{id:"\u8fb9\u7c7b\u578b\u5220\u9664\u5b57\u6bb5",children:"\u8fb9\u7c7b\u578b\u5220\u9664\u5b57\u6bb5"}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"\u8be5\u64cd\u4f5c\u4f1a\u540c\u6b65\u53d8\u66f4\u6240\u6709\u8be5\u7c7b\u578b\u8fb9\u7684\u5c5e\u6027\u6570\u636e\uff0c\u6570\u636e\u91cf\u5927\u7684\u65f6\u5019\uff0c\u6709\u65f6\u95f4\u6d88\u8017\u3002"}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["\u5982\u4e0b\u64cd\u4f5c\uff0c\u5bf9\u4e8e\u8fb9\u7c7b\u578b",(0,l.jsx)(n.code,{children:"edge1"}),"\uff0c\u4e00\u6b21\u5220\u9664\u4e86\u4e24\u4e2a\u5b57\u6bb5: ",(0,l.jsx)(n.code,{children:"field1"})," \u548c ",(0,l.jsx)(n.code,{children:"field2"}),"\u3002"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"CALL db.alterLabelDelFields('edge', 'edge1', ['field1', 'field2'])\n"})}),"\n",(0,l.jsx)(n.h3,{id:"\u8fb9\u7c7b\u578b\u6dfb\u52a0\u7d22\u5f15",children:"\u8fb9\u7c7b\u578b\u6dfb\u52a0\u7d22\u5f15"}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"\u8be5\u64cd\u4f5c\u4f1a\u540c\u6b65\u6784\u5efa\u7d22\u5f15\u6570\u636e\uff0c\u6570\u636e\u91cf\u5927\u7684\u65f6\u5019\uff0c\u6709\u65f6\u95f4\u6d88\u8017\u3002"}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["\u5982\u4e0b\u4f8b\u5b50\uff0c\u5bf9\u4e8e\u8fb9\u7c7b\u578b",(0,l.jsx)(n.code,{children:"edge1"}),"\uff0c\u7ed9\u5b57\u6bb5",(0,l.jsx)(n.code,{children:"field1"}),"\u6dfb\u52a0\u4e86\u4e00\u4e2a\u975e\u552f\u4e00\u7d22\u5f15\u3002"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"CALL db.addEdgeIndex('edge1', 'field1', false, false)\n"})}),"\n",(0,l.jsxs)(n.p,{children:["\u5982\u4e0b\u4f8b\u5b50\uff0c\u5bf9\u4e8e\u8fb9\u7c7b\u578b",(0,l.jsx)(n.code,{children:"edge1"}),"\uff0c\u7ed9\u5b57\u6bb5",(0,l.jsx)(n.code,{children:"field2"}),"\u6dfb\u52a0\u4e86\u4e00\u4e2a\u552f\u4e00\u7d22\u5f15\u3002"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"CALL db.addEdgeIndex('edge1', 'field2', true, false)\n"})}),"\n",(0,l.jsx)(n.h3,{id:"\u8fb9\u7c7b\u578b\u5220\u9664\u7d22\u5f15",children:"\u8fb9\u7c7b\u578b\u5220\u9664\u7d22\u5f15"}),"\n",(0,l.jsxs)(n.p,{children:["\u5982\u4e0b\u4f8b\u5b50\uff0c\u5bf9\u4e8e\u8fb9\u7c7b\u578b",(0,l.jsx)(n.code,{children:"edge1"}),"\uff0c\u5220\u9664\u5b57\u6bb5",(0,l.jsx)(n.code,{children:"field1"}),"\u4e0a\u7684\u7d22\u5f15\u3002"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"CALL db.deleteEdgeIndex('edge1', 'field1')\n"})}),"\n",(0,l.jsx)(n.h2,{id:"\u5b9e\u65f6\u67e5\u770b\u5f53\u524d\u70b9\u8fb9\u6570\u636e\u91cf",children:"\u5b9e\u65f6\u67e5\u770b\u5f53\u524d\u70b9\u8fb9\u6570\u636e\u91cf"}),"\n",(0,l.jsx)(n.p,{children:"\u5982\u4e0b\u4f8b\u5b50\u8fd4\u56de\u6240\u6709\u7684\u70b9\u8fb9\u7c7b\u578b\uff0c\u4ee5\u53ca\u6bcf\u79cd\u7c7b\u578b\u5f53\u524d\u7684\u6570\u636e\u91cf\u662f\u591a\u5c11\u3002"}),"\n",(0,l.jsx)(n.p,{children:"\u8bfb\u7684\u662f\u7edf\u8ba1\u6570\u636e\uff0c\u8f7b\u64cd\u4f5c\u3002"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"CALL dbms.meta.countDetail()\n"})}),"\n",(0,l.jsx)(n.h2,{id:"\u5bfc\u5165\u6570\u636e",children:"\u5bfc\u5165\u6570\u636e"}),"\n",(0,l.jsx)(n.h3,{id:"\u6279\u91cfupsert\u70b9\u6570\u636e",children:"\u6279\u91cfupsert\u70b9\u6570\u636e"}),"\n",(0,l.jsx)(n.p,{children:"\u5982\u679c\u4e0d\u5b58\u5728\u5c31\u63d2\u5165\u70b9\uff0c\u5982\u679c\u5b58\u5728\u5c31\u66f4\u65b0\u70b9\u7684\u5c5e\u6027\uff0c\u6839\u636e\u70b9\u7684\u4e3b\u952e\u5b57\u6bb5\u503c\u5224\u65ad\u662f\u5426\u5b58\u5728\u3002"}),"\n",(0,l.jsxs)(n.p,{children:["\u7b2c\u4e8c\u4e2a\u53c2\u6570\u662f\u4e00\u4e2a",(0,l.jsx)(n.code,{children:"list"}),"\u7c7b\u578b\uff0c\u6bcf\u4e2a",(0,l.jsx)(n.code,{children:"list"}),"\u91cc\u9762\u7684\u5143\u7d20\u662f\u4e2a",(0,l.jsx)(n.code,{children:"map"}),"\u7c7b\u578b\uff0c\u6bcf\u4e2a",(0,l.jsx)(n.code,{children:"map"}),"\u91cc\u9762\u662f\u70b9\u7684\u5b57\u6bb5\u548c\u5bf9\u5e94\u7684\u503c\u3002"]}),"\n",(0,l.jsxs)(n.p,{children:["\u63a8\u8350\u4f7f\u7528driver\u91cc\u9762\u7684\u53c2\u6570\u5316\u7279\u6027\uff0c\u7b2c\u4e8c\u4e2a\u53c2\u6570\u76f4\u63a5\u4f20\u5165\u4e00\u4e2a ",(0,l.jsx)(n.code,{children:"list"}),"\u7ed3\u6784\u4f53\uff0c\u907f\u514d\u81ea\u5df1\u6784\u9020\u8bed\u53e5\u3002"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"CALL db.upsertVertex('node1', [{id:1, name:'name1'},{id:2, name:'name2'}])\n"})}),"\n",(0,l.jsx)(n.h3,{id:"\u6279\u91cfupsert\u8fb9\u6570\u636e",children:"\u6279\u91cfupsert\u8fb9\u6570\u636e"}),"\n",(0,l.jsx)(n.p,{children:"\u5982\u679c\u4e24\u70b9\u4e4b\u95f4\u4e0d\u5b58\u5728\u67d0\u6761\u7c7b\u578b\u7684\u8fb9\u5c31\u63d2\u5165\uff0c\u5982\u679c\u5b58\u5728\u5c31\u66f4\u65b0\u8be5\u8fb9\u7684\u5c5e\u6027\uff0c\u4e5f\u5c31\u662f\u4e24\u70b9\u4e4b\u95f4\u540c\u7c7b\u578b\u7684\u8fb9\u53ea\u80fd\u6709\u4e00\u6761\u3002"}),"\n",(0,l.jsxs)(n.p,{children:["\u7b2c\u56db\u4e2a\u53c2\u6570\u662f\u4e00\u4e2a",(0,l.jsx)(n.code,{children:"list"}),"\u7c7b\u578b\uff0c\u6bcf\u4e2a\u6570\u7ec4\u91cc\u9762\u7684\u5143\u7d20\u662f\u4e2a",(0,l.jsx)(n.code,{children:"map"}),"\u7c7b\u578b\uff0c\u6bcf\u4e2a",(0,l.jsx)(n.code,{children:"map"}),"\u91cc\u9762\u662f\uff1a\u8fb9\u7684\u8d77\u70b9\u7c7b\u578b\u4e3b\u952e\u5b57\u6bb5\u548c\u5bf9\u5e94\u7684\u503c\u3001\u8fb9\u7684\u7ec8\u70b9\u7c7b\u578b\u4e3b\u952e\u5b57\u6bb5\u548c\u5bf9\u5e94\u7684\u503c\u3001\u8fb9\u7c7b\u578b\u81ea\u8eab\u7684\u5c5e\u6027\u5b57\u6bb5\u548c\u503c\u3002\u6bcf\u4e2amap\u91cc\u9762\u81f3\u5c11\u6709\u4e24\u4e2a\u5143\u7d20\u3002"]}),"\n",(0,l.jsx)(n.p,{children:"\u7b2c\u4e8c\u4e2a\u53c2\u6570\u548c\u7b2c\u4e09\u4e2a\u53c2\u6570\u662f\u4e3a\u7b2c\u56db\u4e2a\u53c2\u6570\u670d\u52a1\u7684\u3002\u5206\u522b\u8bf4\u660e\u4e86\u8d77\u70b9\u548c\u7ec8\u70b9\u7684\u7c7b\u578b\u662f\u4ec0\u4e48\uff0c\u4ee5\u53ca\u7b2c\u56db\u4e2a\u53c2\u6570\u4e2d\u90a3\u4e2a\u5b57\u6bb5\u4ee3\u8868\u8d77\u70b9\u4e3b\u952e\u5b57\u6bb5\u503c\uff0c\u90a3\u4e2a\u5b57\u6bb5\u4ee3\u8868\u7ec8\u70b9\u4e3b\u952e\u5b57\u6bb5\u503c\u3002"}),"\n",(0,l.jsx)(n.p,{children:"\u6ce8\uff1a\u7b2c\u4e8c\u4e2a\u53c2\u6570\u548c\u7b2c\u4e09\u4e2a\u53c2\u6570\u4e2d\u914d\u7f6e\u7684\u8d77\u70b9\u548c\u7ec8\u70b9\u7684\u4e3b\u952e\u5b57\u6bb5\u5e76\u4e0d\u662f\u8d77\u70b9\u548c\u7ec8\u70b9schema\u4e2d\u7684\u4e3b\u952e\u5b57\u6bb5\u540d\uff0c\u53ea\u662f\u8d77\u4e00\u4e2a\u5360\u4f4d\u548c\u533a\u522b\u7684\u4f5c\u7528\uff0c\u65b9\u4fbf\u8bc6\u522b\u7b2c\u56db\u4e2a\u53c2\u6570\u4e2d\u54ea\u4e2a\u5b57\u6bb5\u4ee3\u8868\u8d77\u70b9\u548c\u7ec8\u70b9\u7684\u4e3b\u952e\u5b57\u6bb5\u3002"}),"\n",(0,l.jsx)(n.p,{children:"\u63a8\u8350\u4f7f\u7528driver\u91cc\u9762\u7684\u53c2\u6570\u5316\u7279\u6027\uff0c\u907f\u514d\u81ea\u5df1\u6784\u9020\u8bed\u53e5\u3002"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"CALL db.upsertEdge('edge1',{type:'node1',key:'node1_id'}, {type:'node2',key:'node2_id'}, [{node1_id:1,node2_id:2,score:10},{node1_id:3,node2_id:4,score:20}])\n"})}),"\n",(0,l.jsx)(n.h3,{id:"\u6279\u91cfupsert\u8fb9\u6570\u636e-\u6839\u636e\u8fb9\u7684\u5c5e\u6027\u786e\u5b9a\u552f\u4e00",children:"\u6279\u91cfupsert\u8fb9\u6570\u636e-\u6839\u636e\u8fb9\u7684\u5c5e\u6027\u786e\u5b9a\u552f\u4e00"}),"\n",(0,l.jsx)(n.p,{children:"\u4e0a\u9762\u63cf\u8ff0\u7684upsert\u903b\u8f91\u662f\u4e24\u70b9\u4e4b\u95f4\u540c\u7c7b\u578b\u7684\u8fb9\u53ea\u80fd\u6709\u4e00\u6761\uff0c\u5982\u679c\u8981\u6c42\u4e24\u70b9\u4e4b\u95f4\u540c\u7c7b\u578b\u7684\u8fb9\u53ef\u4ee5\u6709\u591a\u6761\uff0c\u5e76\u4e14\u6839\u636e\u8fb9\u4e0a\u7684\u67d0\u4e2a\u5c5e\u6027\u6765\u786e\u5b9a\u552f\u4e00\uff0c\u9700\u8981\u5728\u539f\u6765\u7684\u57fa\u7840\u4e0a\u591a\u52a0\u4e00\u4e2a\u5b57\u6bb5\uff0c\u5982\u4e0b\uff1a"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"CALL db.upsertEdge('edge1',{type:'node1',key:'node1_id'}, {type:'node2',key:'node2_id'}, [{node1_id:1,node2_id:2,score:10},{node1_id:3,node2_id:4,score:20}], 'score')\n"})}),"\n",(0,l.jsxs)(n.p,{children:["\u5728\u6700\u540e\u591a\u4e86\u4e00\u4e2a\u5b57\u6bb5",(0,l.jsx)(n.code,{children:"score"}),", \u903b\u8f91\u53d8\u6210\uff1a\u5982\u679c\u4e24\u70b9\u4e4b\u95f4\u4e0d\u5b58\u5728\u4e00\u6761",(0,l.jsx)(n.code,{children:"edge1"}),"\u7c7b\u578b\u7684\u8fb9\uff0c\u5e76\u4e14",(0,l.jsx)(n.code,{children:"score"}),"\u503c\u7b49\u4e8e\u67d0\u4e2a\u503c\uff0c\u5c31\u63d2\u5165\uff1b\u5426\u5219\u5c31\u66f4\u65b0\u6539\u8fb9\u7684\u5c5e\u6027\u3002\n\u8fb9\u4e0a\u7684",(0,l.jsx)(n.code,{children:"score"}),"\u5b57\u6bb5\u9700\u8981\u63d0\u524d\u52a0\u4e0a\u4e00\u4e2a\u7279\u6b8a\u7684",(0,l.jsx)(n.code,{children:"pair unique"}),"\u7d22\u5f15\uff0c\u5982\u4e0b\uff1a"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"CALL db.addEdgeIndex('edge1', 'score', false, true)\n"})}),"\n",(0,l.jsx)(n.h3,{id:"datax",children:"DataX"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.a,{href:"https://github.com/ljcui/DataX/tree/bolt",children:"https://github.com/ljcui/DataX/tree/bolt"})," \u81ea\u884c\u7f16\u8bd1\u3002"]}),"\n",(0,l.jsxs)(n.p,{children:["\u8fd9\u4e2aDataX\u5b9e\u73b0\u7684 tugraph writer \u5185\u90e8\u8c03\u7528\u7684\u662f\u4e0a\u9762\u63cf\u8ff0\u7684",(0,l.jsx)(n.code,{children:"db.upsertVertex"}),"\u548c",(0,l.jsx)(n.code,{children:"db.upsertEdge"}),"\uff0c\ntugraph reader \u5185\u90e8\u8c03\u7528\u7684\u662fTuGraph \u7684 bolt client\uff0c\u652f\u6301\u6d41\u5f0f\u8bfb\u53d6\uff0c\n\u5177\u4f53\u4f7f\u7528\u65b9\u5f0f\u89c1",(0,l.jsx)(n.a,{href:"/tugraph-db/en-US/zh/4.5.1/utility-tools/tugraph-datax",children:"TuGraph-DataX \u4f7f\u7528\u4ecb\u7ecd"})]}),"\n",(0,l.jsx)(n.h3,{id:"\u79bb\u7ebf\u8131\u673a\u5bfc\u5165\u6570\u636e",children:"\u79bb\u7ebf\u8131\u673a\u5bfc\u5165\u6570\u636e"}),"\n",(0,l.jsxs)(n.p,{children:["\u5982\u679c\u4f60\u6709\u5b50\u56fe\u7684schema\u4ee5\u53ca\u5b50\u56fe\u91cc\u9762\u6240\u6709\u7684\u70b9\u8fb9\u6570\u636e\uff08csv\u6216\u8005json\u683c\u5f0f\uff09\uff0c\u53ef\u4ee5\u5229\u7528",(0,l.jsx)(n.code,{children:"lgraph_import"}),"\u5de5\u5177\u79bb\u7ebf\u5c06\u8fd9\u4e9b\u6570\u636e\u751f\u6210\u56fe\u6570\u636e\u3002"]}),"\n",(0,l.jsx)(n.p,{children:"\u8be5\u65b9\u5f0f\u9002\u5408\u521d\u59cb\u9636\u6bb5\uff0c\u5148\u704c\u8fdb\u53bb\u4e00\u6279\u5168\u91cf\u6570\u636e\u3002\u6ce8\u610fserver\u8981\u505c\u673a\uff0c\u5bfc\u5165\u5b8c\u518d\u542f\u52a8server\uff0c\u53ef\u4ee5\u770b\u5230\u751f\u6210\u7684\u5b50\u56fe\u6570\u636e\u3002"}),"\n",(0,l.jsxs)(n.p,{children:["\u53c2\u8003 ",(0,l.jsx)(n.a,{href:"/tugraph-db/en-US/zh/4.5.1/utility-tools/data-import",children:"lgraph_import \u4f7f\u7528\u4ecb\u7ecd"})," \u4e2d\u7684",(0,l.jsx)(n.strong,{children:"\u79bb\u7ebf\u5168\u91cf\u5bfc\u5165"}),"\u90e8\u5206"]}),"\n",(0,l.jsx)(n.h2,{id:"\u5bfc\u51fa\u6570\u636e",children:"\u5bfc\u51fa\u6570\u636e"}),"\n",(0,l.jsx)(n.h3,{id:"\u5728\u7ebf\u8fdc\u7a0b\u6d41\u5f0f\u5bfc\u51fa\u6570\u636e",children:"\u5728\u7ebf\u8fdc\u7a0b\u6d41\u5f0f\u5bfc\u51fa\u6570\u636e"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.a,{href:"/tugraph-db/en-US/zh/4.5.1/client-tools/bolt-console-client",children:"lgraph_cli \u4f7f\u7528\u4ecb\u7ecd"})}),"\n",(0,l.jsx)(n.p,{children:"CSV \u683c\u5f0f"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:'echo "match(n:person) return n.id, n.name;" | lgraph_cli --ip 127.0.0.1 --port 7687 --graph default --user admin --password 73@TuGraph --format csv > output.txt\n'})}),"\n",(0,l.jsx)(n.p,{children:"JSON \u683c\u5f0f"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:'echo "match(n:person) return n.id, n.name;" | lgraph_cli --ip 127.0.0.1 --port 7687 --graph default --user admin --password 73@TuGraph --format json > output.txt\n\n'})}),"\n",(0,l.jsx)(n.h3,{id:"\u672c\u5730\u5bfc\u51fa\u6574\u4e2a\u56fe\u7684\u6240\u6709\u6570\u636e",children:"\u672c\u5730\u5bfc\u51fa\u6574\u4e2a\u56fe\u7684\u6240\u6709\u6570\u636e"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.a,{href:"/tugraph-db/en-US/zh/4.5.1/utility-tools/data-export",children:"lgraph_export \u4f7f\u7528\u4ecb\u7ecd"})}),"\n",(0,l.jsx)(n.p,{children:"CSV \u683c\u5f0f"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"lgraph_export -d your_db_path -e export_data -g default -f json -u admin -p 73@TuGraph\n"})}),"\n",(0,l.jsx)(n.p,{children:"JSON \u683c\u5f0f"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"lgraph_export -d your_db_path -e export_data -g default -f json -u admin -p 73@TuGraph\n"})}),"\n",(0,l.jsx)(n.h3,{id:"\u8de8\u7248\u672c\u8fc1\u79fb\u6570\u636e",children:"\u8de8\u7248\u672c\u8fc1\u79fb\u6570\u636e"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.a,{href:"/tugraph-db/en-US/zh/4.5.1/utility-tools/data-export",children:"lgraph_export \u4f7f\u7528\u4ecb\u7ecd"})}),"\n",(0,l.jsxs)(n.p,{children:["\u5bf9\u4e8e\u4e0d\u517c\u5bb9\u7684\u7248\u672c\u4e4b\u95f4\u8fc1\u79fb\u6570\u636e\uff0c\u53ef\u4ee5\u4f7f\u7528",(0,l.jsx)(n.code,{children:"lgraph_export"}),"\u5c06\u65e7\u7248\u672cserver\u91cc\u9762\u7684\u6570\u636e\u5168\u90e8\u5bfc\u51fa\u6210\u6587\u672c\uff08\u91cc\u9762\u5305\u542b\u56feschema\u4ee5\u53ca\u6240\u6709\u7684\u70b9\u8fb9\u6570\u636e\uff09\uff0c\u7136\u540e\u518d\u9009\u62e9\u5408\u9002\u7684\u65b9\u6cd5\u5c06\u8fd9\u4e9b\u6587\u672c\u6570\u636e\u5bfc\u5165\u5230\u65b0\u7248\u672c\u3002"]})]})}function a(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},28453:(e,n,d)=>{d.d(n,{R:()=>s,x:()=>c});var l=d(96540);const r={},i=l.createContext(r);function s(e){const n=l.useContext(i);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),l.createElement(i.Provider,{value:n},e.children)}}}]);