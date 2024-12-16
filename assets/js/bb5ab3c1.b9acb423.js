"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[89432],{86338:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>h});var r=t(74848),o=t(28453);const s={},a="Heterogeneous Graph",i={id:"olap&procedure/learn/heterogeneous_graph",title:"Heterogeneous Graph",description:"This document describes how to use heterogeneous graphs for training.",source:"@site/versions/version-4.2.0/en-US/source/9.olap&procedure/3.learn/4.heterogeneous_graph.md",sourceDirName:"9.olap&procedure/3.learn",slug:"/olap&procedure/learn/heterogeneous_graph",permalink:"/tugraph-db/en/4.2.0/olap&procedure/learn/heterogeneous_graph",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Training",permalink:"/tugraph-db/en/4.2.0/olap&procedure/learn/training"},next:{title:"Privilege",permalink:"/tugraph-db/en/4.2.0/permission/privilege"}},d={},h=[{value:"1. Introduction to Heterogeneous Graph",id:"1-introduction-to-heterogeneous-graph",level:2},{value:"2. Creating a Heterogeneous Graph",id:"2-creating-a-heterogeneous-graph",level:2},{value:"3. Heterogeneous graph query interface",id:"3-heterogeneous-graph-query-interface",level:2},{value:"3.1 Querying Node Types",id:"31-querying-node-types",level:3},{value:"3.2 Querying Edge Types",id:"32-querying-edge-types",level:3},{value:"3.3 Querying Node and Edge Types",id:"33-querying-node-and-edge-types",level:3},{value:"4 Heterogeneous graph output format",id:"4-heterogeneous-graph-output-format",level:2},{value:"5. Training Heterogeneous Graphs",id:"5-training-heterogeneous-graphs",level:2}];function l(e){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"heterogeneous-graph",children:"Heterogeneous Graph"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"This document describes how to use heterogeneous graphs for training."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"1-introduction-to-heterogeneous-graph",children:"1. Introduction to Heterogeneous Graph"}),"\n",(0,r.jsx)(n.p,{children:"A heterogeneous graph is a graph structure composed of nodes and edges of different types. In a heterogeneous graph, nodes and edges can have diverse attributes and relationships, representing different entities and their complex associations."}),"\n",(0,r.jsx)(n.p,{children:"In a heterogeneous graph, node types can represent different entities such as users, products, topics, etc., while edge types represent the relationships between different entities, such as the follow relationship between users, or the purchase relationship between users and products. Nodes and edges can have different attributes."}),"\n",(0,r.jsx)(n.p,{children:"Heterogeneous graphs provide a powerful graph model that can better express and analyze real-world systems with multiple entity types and complex relationships. They have broad application prospects and research value in various fields of data analysis and applications."}),"\n",(0,r.jsx)(n.h2,{id:"2-creating-a-heterogeneous-graph",children:"2. Creating a Heterogeneous Graph"}),"\n",(0,r.jsx)(n.p,{children:"In TuGraph, a heterogeneous graph is composed of a series of edge relationships. Each relationship is defined by a triplet of strings: (source node type, edge type, target node type). The creation of a heterogeneous graph is similar to that of a homogeneous graph, but the triplet definition needs to be specified when creating the graph. The following example demonstrates:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'    olapondb = PyOlapOnDB(\'Empty\', db, txn, [("node", "edge", "node")])\n'})}),"\n",(0,r.jsx)(n.p,{children:"In the code snippet above, the fourth parameter is the edge relationship definition of the heterogeneous graph. By specifying this parameter, you can select specific node and edge types for graph construction and training. If this parameter is not specified, all node and edge types will be used for graph construction by default."}),"\n",(0,r.jsx)(n.h2,{id:"3-heterogeneous-graph-query-interface",children:"3. Heterogeneous graph query interface"}),"\n",(0,r.jsx)(n.p,{children:"To facilitate user usage, TuGraph provides interfaces for querying node and edge types when the fourth parameter is given. The following examples demonstrate these interfaces:"}),"\n",(0,r.jsx)(n.h3,{id:"31-querying-node-types",children:"3.1 Querying Node Types"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"olapondb.ntypes()\n"})}),"\n",(0,r.jsx)(n.p,{children:"The return value is a list of node types, such as ['node1', 'node2', 'node3']."}),"\n",(0,r.jsx)(n.h3,{id:"32-querying-edge-types",children:"3.2 Querying Edge Types"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"olapondb.etypes()\n"})}),"\n",(0,r.jsx)(n.p,{children:"The return value is a list of edge types, such as ['edge1', 'edge2', 'edge3']."}),"\n",(0,r.jsx)(n.h3,{id:"33-querying-node-and-edge-types",children:"3.3 Querying Node and Edge Types"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"olapondb.metagraph()\n"})}),"\n",(0,r.jsx)(n.p,{children:"The return value is a list of string triplets (source node type, edge type, target node type), such as\n[('node1', 'edge1', 'node2'), ('node2', 'edge2', 'node3')]."}),"\n",(0,r.jsx)(n.h2,{id:"4-heterogeneous-graph-output-format",children:"4 Heterogeneous graph output format"}),"\n",(0,r.jsx)(n.p,{children:"The same as the homogeneous graph, the sampling data results of the heterogeneous graph are also stored in NodeInfo and EdgeInfo.\nOutput data can be obtained in the following ways."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"    NodeInfo = []\n    EdgeInfo = []\n    getdb.Process(db, olapondb, feature_len, NodeInfo, EdgeInfo)\n"})}),"\n",(0,r.jsx)(n.p,{children:"The result of its stored information is as follows:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Graph Data"}),(0,r.jsx)(n.th,{children:"Storage Location"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Edge Source"}),(0,r.jsx)(n.td,{children:"EdgeInfo[0]"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Edge Destination"}),(0,r.jsx)(n.td,{children:"EdgeInfo[1]"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Edge Type"}),(0,r.jsx)(n.td,{children:"EdgeInfo[2]"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Vertex ID"}),(0,r.jsx)(n.td,{children:"NodeInfo[0]"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Vertex Feature"}),(0,r.jsx)(n.td,{children:"NodeInfo[1]"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Vertex Label"}),(0,r.jsx)(n.td,{children:"NodeInfo[2]"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Vertex Type"}),(0,r.jsx)(n.td,{children:"NodeInfo[3]"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"5-training-heterogeneous-graphs",children:"5. Training Heterogeneous Graphs"}),"\n",(0,r.jsx)(n.p,{children:"The goal of training a heterogeneous graph is to learn the representation of nodes and edges in the graph for subsequent tasks such as node classification, link prediction, and graph clustering. To achieve this goal, researchers have proposed a variety of models based on graph neural networks (GNNs). These models update the representation of nodes by aggregating the information of neighboring nodes, thereby capturing the complex relationships in the graph structure."}),"\n",(0,r.jsx)(n.p,{children:"Since heterogeneous graphs contain nodes and edges of multiple types, it is necessary to consider how to process these different types of information when designing GNN models. One common approach is to design different aggregation functions to process different types of neighboring nodes. In addition, it is also necessary to consider how to integrate these different types of information together so that the model can effectively learn the representation of nodes and edges."}),"\n",(0,r.jsx)(n.p,{children:"TuGraph provides a method for training heterogeneous graphs using the ogbn-mag dataset, which can be used for reference."}),"\n",(0,r.jsx)(n.p,{children:"The official docker provided by TuGraph does not yet provide an environment for heterogeneous graph training, so users need to install relevant dependency packages by themselves.\nBefore training, you need to download the ogb and pandas packages. The specific installation method is as follows:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"pip3 install ogb\npip3 install pandas==0.24.2\n"})}),"\n",(0,r.jsx)(n.p,{children:"The training code looks like this:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"def train(graph, model, model_save_path):\n    optimizer = torch.optim.Adam(model.parameters(), lr=1e-2, weight_decay=5e-4)\n    model.train()\n    s = time.time()\n    load_time = time.time()\n    graph = dgl.add_self_loop(graph)\n    logits = model(graph, graph.ndata['feat'])\n    loss = loss_fcn(logits, graph.ndata['label'])\n    optimizer.zero_grad()\n    loss.backward()\n    optimizer.step()\n    train_time = time.time()\n    # print('load time', load_time - s, 'train_time', train_time - load_time)\n    current_loss = float(loss)\n    if model_save_path != \"\":\n        if 'min_loss' not in train.__dict__:\n            train.min_loss = current_loss\n        elif current_loss < train.min_loss:\n            train.min_loss = current_loss\n            model_save_path = 'best_model.pth'\n        torch.save(model.state_dict(), model_save_path)\n    return current_loss\n"})}),"\n",(0,r.jsx)(n.p,{children:"The complete training code can be found in tugraph/learn/examples/train_full_mag.py."})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>i});var r=t(96540);const o={},s=r.createContext(o);function a(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);