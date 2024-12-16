"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[45773],{30067:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=t(74848),a=t(28453);const i={},o="Bootstrap program",s={id:"olap&procedure/olap/tutorial",title:"Bootstrap program",description:"This document is a bootstrap program designed for TuGraph users. Before reading the detailed documents, users should read this document first to have a general understanding of TuGraph's graph computing operation process, and it will be more convenient to read the detailed documents later. The bootstrap program is a simple instance of a bfs (breadth-first search) program based on Tugraph, and we will focus on how it is used.",source:"@site/versions/version-4.3.2/en-US/source/9.olap&procedure/2.olap/1.tutorial.md",sourceDirName:"9.olap&procedure/2.olap",slug:"/olap&procedure/olap/tutorial",permalink:"/tugraph-db/en-US/en/4.3.2/olap&procedure/olap/tutorial",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Rust Stored Procedures",permalink:"/tugraph-db/en-US/en/4.3.2/olap&procedure/procedure/Rust-procedure"},next:{title:"OlapBase API",permalink:"/tugraph-db/en-US/en/4.3.2/olap&procedure/olap/olap-base-api"}},d={},l=[{value:"1.Introduction to TuGraph-Graph Analysis Engine",id:"1introduction-to-tugraph-graph-analysis-engine",level:2},{value:"2.Procedure compile and run",id:"2procedure-compile-and-run",level:2},{value:"2.1.C++",id:"21c",level:3},{value:"2.2.Python",id:"22python",level:3},{value:"3.Embed compile and run",id:"3embed-compile-and-run",level:2},{value:"3.1.C++",id:"31c",level:3},{value:"3.2.Python",id:"32python",level:3},{value:"4.Standalone compile and run",id:"4standalone-compile-and-run",level:2},{value:"4.1.C++",id:"41c",level:3},{value:"4.2.Python",id:"42python",level:3}];function h(e){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"bootstrap-program",children:"Bootstrap program"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"This document is a bootstrap program designed for TuGraph users. Before reading the detailed documents, users should read this document first to have a general understanding of TuGraph's graph computing operation process, and it will be more convenient to read the detailed documents later. The bootstrap program is a simple instance of a bfs (breadth-first search) program based on Tugraph, and we will focus on how it is used."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"1introduction-to-tugraph-graph-analysis-engine",children:"1.Introduction to TuGraph-Graph Analysis Engine"}),"\n",(0,r.jsx)(n.p,{children:"TuGraph's graph analysis engine is mainly used for full graph/full data analysis tasks. With the help of TuGraph's C++ / Python graph analysis engine API, users can quickly derive a complex subgraph from different data sources, and then run iterative graph algorithms such as PageRank, LPA, WCC on the subgraph, and finally make corresponding countermeasures according to the running results."}),"\n",(0,r.jsx)(n.p,{children:"In TuGraph, the process of both exporting and computing can be accelerated by in-memory parallel processing, resulting in near-real-time processing and analysis. Compared to traditional methods, this approach can avoid the overhead of data export and disk drop, and can achieve ideal performance by using a compact graph data structure."}),"\n",(0,r.jsx)(n.p,{children:"TuGraph has 6 built-in algorithms in the community version and 25 built-in algorithms in the commercial version. Users hardly need to implement the specific graph calculation process themselves. For details, please refer to algorithms.md."}),"\n",(0,r.jsx)(n.p,{children:"According to different data sources and implementations, it can be divided into Procedure, Embed and Standalone, which all inherit from OlapBase API. OlapBase API interface documentation can be found in OlAPBase-APi.md."}),"\n",(0,r.jsx)(n.p,{children:"The data source of Procedure and Embed is the db data preloaded in the graph database, which can be compiled to generate the.so file used by TuGraph-Web loading and the embed file used by the background terminal respectively. The input graph data are loaded in the form of db. The interface document can refer to olapondb-api.md."}),"\n",(0,r.jsx)(n.p,{children:"Standalone is used to compile and generate a standalone file. Different from the former, the input graph data of the file is loaded in the form of txt, binary, and ODPS files, and the interface document can refer to olapondisk-api.md."}),"\n",(0,r.jsx)(n.h2,{id:"2procedure-compile-and-run",children:"2.Procedure compile and run"}),"\n",(0,r.jsx)(n.p,{children:"This mode is mainly used for visual loading and running on the TuGraph-web interface. The usage method is as follows:"}),"\n",(0,r.jsx)(n.h3,{id:"21c",children:"2.1.C++"}),"\n",(0,r.jsx)(n.p,{children:"Run bash make_so.sh bfs in the TuGraph/procedures directory to the BFs.so file in the TuGraph/procedures directory, upload the file as a plug-in to Tugraph-web, input parameters and then execute."}),"\n",(0,r.jsx)(n.h3,{id:"22python",children:"2.2.Python"}),"\n",(0,r.jsx)(n.p,{children:"Upload the python file as a plugin to TuGraph-web, and execute it after inputting parameters."}),"\n",(0,r.jsxs)(n.p,{children:["Example:\nCompile the.so algorithm file at TuGraph/procedures\n",(0,r.jsx)(n.code,{children:"bash make_so.sh bfs"})]}),"\n",(0,r.jsx)(n.p,{children:"After loading the bfs.so (or TuGraph/procedures/algo_cython/bfs.py) file as a plug-in to TuGraph-web, enter the following json parameters:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "root": "10",\n  "label": "user",\n  "field": "id"\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"The following result"}),"\n",(0,r.jsx)(n.p,{children:'result:"{"core_cost":0.013641119003295898,\n"found_vertices":3829,\n"num_edges":88234,\n"num_vertices":4039,\n"output_cost":8.821487426757813e-06,\n"prepare_cost":0.03479194641113281,\n"total_cost":0.04844188690185547}"'}),"\n",(0,r.jsx)(n.p,{children:"The output \uff1a"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"num_edges: the number of edges in the graph"}),"\n",(0,r.jsx)(n.li,{children:"num_vertices: the number of nodes in the graph"}),"\n",(0,r.jsx)(n.li,{children:"prepare_cost: Represents the time required for the preprocessing phase. The preprocessing phase works: loading parameters, graph data loading, index initialization."}),"\n",(0,r.jsx)(n.li,{children:"core_cost: Represents the time required for the algorithm to run."}),"\n",(0,r.jsx)(n.li,{children:"found_vertices: Number of vertices found."}),"\n",(0,r.jsx)(n.li,{children:"output_cost: the time it takes for the algorithm result to be written back to db.\u3002"}),"\n",(0,r.jsx)(n.li,{children:"total_cost: The overall running time of the algorithm is executed."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"make_so.sh This file is used to compile the graph algorithm files involved in TuGraph-OLAP into a.so file available for TuGraph-web."}),"\n",(0,r.jsx)(n.h2,{id:"3embed-compile-and-run",children:"3.Embed compile and run"}),"\n",(0,r.jsx)(n.p,{children:"This way is mainly used for TuGraph in the background program on the preloaded db graph data algorithm analysis. Its use method is as follows:"}),"\n",(0,r.jsx)(n.p,{children:"To complete the embed_main.cpp file in TuGraph/procedures directory, add the data name, input parameters, data path and other information, as shown in the following example:"}),"\n",(0,r.jsx)(n.h3,{id:"31c",children:"3.1.C++"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-C++",children:'#include <iostream>\n#include "lgraph/lgraph.h"\n#include "lgraph/olap_base.h"\nusing namespace std;\n\nextern "C" bool Process(lgraph_api::GraphDB &db, const std::string &request, std::string &response);\n\nint main(int argc, char **argv) {\n    // db_path Specifies the path for saving the preloaded graph data\n    std::string db_path = "../fb_db/";\n    if (argc > 1)\n        db_path = argv[1];\n    lgraph_api::Galaxy g(db_path);\n    g.SetCurrentUser("admin", "73@TuGraph");\n    // Specifies the name of the graph\n    lgraph_api::GraphDB db = g.OpenGraph("fb_db");\n    std::string resp;\n    // Enter the algorithm parameters in json format\n    bool r = Process(db, "{\\"root_id\\":\\"0\\", \\"label\\":\\"node\\",\\"field\\":\\"id\\"}", resp);\n    cout << r << endl;\n    cout << resp << endl;\n    return 0;\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Run bash make_so.sh bfs in TuGraph/procedures to bfs_procedure in TuGraph/procedures/algo_cpp.\n",(0,r.jsx)(n.code,{children:"bash make_embed.sh bfs"})]}),"\n",(0,r.jsxs)(n.p,{children:["Do this in the TuGraph/procedures folder\n",(0,r.jsx)(n.code,{children:"./algo_cpp/bfs_procedure"}),"\nThe result is returned."]}),"\n",(0,r.jsx)(n.p,{children:'Input: {"root_id":"0", "label":"node","field":"id"}\nfound_vertices = 3829\n{"core_cost":0.025603055953979492,\n"found_vertices":3829,\n"num_edges":88234,\n"num_vertices":4039,\n"output_cost":9.059906005859375e-06,\n"prepare_cost":0.056738853454589844,\n"total_cost":0.0823509693145752}'}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Input"})," indicates the input parameters.The other parameters are described as above."]}),"\n",(0,r.jsx)(n.h3,{id:"32python",children:"3.2.Python"}),"\n",(0,r.jsxs)(n.p,{children:["To compile bfs.so, run ",(0,r.jsx)(n.code,{children:"bash make_so_cython.sh bfs"})," in TuGraph/procedures or ",(0,r.jsx)(n.code,{children:"python3 setup.py build_ext -i"})," in TuGraph/procedures/algo_cython."]}),"\n",(0,r.jsx)(n.p,{children:"After obtaining bfs.so, it can be imported and used in Python, as shown in TuGraph/procedures/run_embed.py:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'# TuGraph/procedures/run_embed.py\nfrom lgraph_db_python import *\n\nimport bfs as python_plugin\n\nif __name__ == "__main__":\n    galaxy = PyGalaxy("../build/output/lgraph_db")\n    galaxy.SetCurrentUser("admin", "73@TuGraph")\n    db = galaxy.OpenGraph("default", False)\n    res = python_plugin.Process(db, "{\\"root_id\\":\\"0\\", \\"label\\":\\"node\\",\\"field\\":\\"id\\"}".encode(\'utf-8\'))\n    print(res)\n    del db\n    del galaxy\n\n# shell\npython3 run_embed.py\n'})}),"\n",(0,r.jsx)(n.p,{children:"The output is the same as C++"}),"\n",(0,r.jsx)(n.h2,{id:"4standalone-compile-and-run",children:"4.Standalone compile and run"}),"\n",(0,r.jsx)(n.p,{children:"This file is mainly used to load the graph data directly at the terminal and run the printout results. Here's how to use it:"}),"\n",(0,r.jsxs)(n.p,{children:["In TuGraph/build directory ",(0,r.jsx)(n.code,{children:"make bfs_standalone"})," (need to include boost/sort/sort.hpp in the g++ default include path) can get bfs_standalone file, the file is generated with TuGraph/build/output/algo folder."]}),"\n",(0,r.jsxs)(n.p,{children:["Run: Go to the TuGraph/build directory and do",(0,r.jsx)(n.code,{children:"./output/algo/bfs_standalone -- type [type] -- input_dir [input_dir] --id_mapping [id_mapping] -- vertices [vertices] --root (root) - output_dir [output_dir]"})]}),"\n",(0,r.jsx)(n.p,{children:"Ready to run."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"[type]"})," : indicates the type source of the input graph file, including text file, BINARY_FILE binary file, and ODPS source."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"[input_dir]"})," : indicates the path of the input graph file folder, which may contain one or more input files. TuGraph will read all the files under [input_dir] when reading the input file. It is required that [input_dir] can only contain the input file and cannot contain other files. Parameters cannot be omitted."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"[id_mapping]"}),"\uff1aWhen reading the side table, whether to do id mapping for the input data to make it conform to the form of algorithm operation. 1 is required for id mapping, 0 is not required. This process will take some time. The parameter can be omitted, and the default value is 0."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"[vertices]"})," : represents the number of vertices in the graph. 0 indicates the number of vertices that the user wants the system to automatically recognize. When is non-zero, it indicates the number of vertices that the user wants to customize. The number of user-defined vertices must be greater than the maximum vertex ID. This parameter can be omitted. The default value is 0."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"[root]"})," : indicates the starting vertex id for bfs. The argument cannot be omitted."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"[output_dir]"})," : indicates the path of the folder where the output data is saved. The output content is saved to this file, and the parameter cannot be omitted."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Example"}),"\n",(0,r.jsx)(n.h3,{id:"41c",children:"4.1.C++"}),"\n",(0,r.jsx)(n.p,{children:"Compile the standalone algorithm program at TuGraph/build"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"make bfs_standalone\n"})}),"\n",(0,r.jsx)(n.p,{children:"Run the text source file in TuGraph/build/output"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"    ./output/algo/bfs_standalone --type text --input_dir ../test/integration/data/algo/fb_unweighted --root 0\n"})}),"\n",(0,r.jsx)(n.p,{children:"Result\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"prepare_cost = 0.10(s)\ncore_cost = 0.02(s)\nfound_vertices = 3829\noutput_cost = 0.00(s)\ntotal_cost = 0.11(s)\nDONE.\n"})}),"\n",(0,r.jsx)(n.p,{children:"Result Parameter description is the same as above."}),"\n",(0,r.jsxs)(n.p,{children:["If you do not know the required parameters of a new algorithm, run the",(0,r.jsx)(n.code,{children:"./output/algo/bfs_standalone -h"})," to view the parameters."]}),"\n",(0,r.jsx)(n.h3,{id:"42python",children:"4.2.Python"}),"\n",(0,r.jsxs)(n.p,{children:["The bfs extension compilation process of the Python language is the same as that of the embed mode. It is called through the ",(0,r.jsx)(n.code,{children:"Standalone"})," interface at runtime. The example is as follows:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'# TuGraph/procedures/run_standalone.py\nimport bfs as python_plugin\n\nif __name__ == "__main__":\n    python_plugin.Standalone(\n        input_dir="../test/integration/data/algo/fb_unweighted",\n        root=0)\n\n# shell\npython3 run_standalone.py\n'})}),"\n",(0,r.jsx)(n.p,{children:"At this point, the process of bfs operation on the figure above by TuGraph is complete."})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>s});var r=t(96540);const a={},i=r.createContext(a);function o(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);