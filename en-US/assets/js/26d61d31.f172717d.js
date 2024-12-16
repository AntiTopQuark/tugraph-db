"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[55726],{49565:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>a,contentTitle:()=>d,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var t=n(74848),s=n(28453);const o={},d="TuGraph Stored Procedure Guide",i={id:"developer-manual/interface/procedure/procedure",title:"TuGraph Stored Procedure Guide",description:"This document mainly explains the instructions for using the TuGraph stored procedure.",source:"@site/versions/version-3.6.0/en-US/source/5.developer-manual/6.interface/3.procedure/1.procedure.md",sourceDirName:"5.developer-manual/6.interface/3.procedure",slug:"/developer-manual/interface/procedure/procedure",permalink:"/tugraph-db/en-US/en/3.6.0/developer-manual/interface/procedure/procedure",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"TuGraph Built-in Algorithm Description",permalink:"/tugraph-db/en-US/en/3.6.0/developer-manual/interface/olap/algorithms"},next:{title:"Traversal API",permalink:"/tugraph-db/en-US/en/3.6.0/developer-manual/interface/procedure/traversal"}},a={},l=[{value:"1. Introduction",id:"1-introduction",level:2},{value:"2. Stored Procedure Version",id:"2-stored-procedure-version",level:2},{value:"3. Supported Languages",id:"3-supported-languages",level:2},{value:"4. Procedure v1 Interface",id:"4-procedure-v1-interface",level:2},{value:"4.1.Write stored procedures",id:"41write-stored-procedures",level:2},{value:"4.1.1.Write C++ stored procedure",id:"411write-c-stored-procedure",level:3},{value:"4.1.2 Writing Python stored procedures",id:"412-writing-python-stored-procedures",level:3},{value:"4.2.How to use stored procedures",id:"42how-to-use-stored-procedures",level:2},{value:"4.2.1.Install Stored Procedures",id:"421install-stored-procedures",level:3},{value:"4.2.2.List Stored Procedures",id:"422list-stored-procedures",level:3},{value:"4.2.3.Retrieve Stored Procedures Detail",id:"423retrieve-stored-procedures-detail",level:3},{value:"4.2.4.Call stored procedure",id:"424call-stored-procedure",level:3},{value:"4.2.5.Uninstall Stored Procedures",id:"425uninstall-stored-procedures",level:3},{value:"4.2.6.Upgrade Stored Procedures",id:"426upgrade-stored-procedures",level:3},{value:"5. Procedure v2 Interface",id:"5-procedure-v2-interface",level:2},{value:"5.1.Writing stored procedures",id:"51writing-stored-procedures",level:3},{value:"5.2.Load stored procedure",id:"52load-stored-procedure",level:3},{value:"5.2.1.List loaded stored procedures",id:"521list-loaded-stored-procedures",level:4},{value:"5.2.2.Get stored procedure details",id:"522get-stored-procedure-details",level:4},{value:"5.2.3.Call stored procedure",id:"523call-stored-procedure",level:4},{value:"5.2.4.Delete stored procedure",id:"524delete-stored-procedure",level:4},{value:"5.2.5.Update stored procedure",id:"525update-stored-procedure",level:4}];function c(e){const r={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.header,{children:(0,t.jsx)(r.h1,{id:"tugraph-stored-procedure-guide",children:"TuGraph Stored Procedure Guide"})}),"\n",(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsx)(r.p,{children:"This document mainly explains the instructions for using the TuGraph stored procedure."}),"\n"]}),"\n",(0,t.jsx)(r.h2,{id:"1-introduction",children:"1. Introduction"}),"\n",(0,t.jsx)(r.p,{children:"When the query/update logic that users need to express is more complex (such as cannot be described by Cypher or has high performance requirements), compared to calling multiple requests and completing the entire processing flow on the client, the stored procedure provided by TuGraph is a more concise and efficient choice."}),"\n",(0,t.jsx)(r.p,{children:"Similar to traditional databases, the TuGraph stored procedure runs on the server side. Users can encapsulate the processing logic (i.e., multiple operations) into a procedure call, and further improve performance by parallel processing (such as using relevant C++ OLAP interfaces and built-in algorithms) during implementation."}),"\n",(0,t.jsxs)(r.p,{children:["There is a special type of API in the stored procedure for parallel data operations, which we call the Traversal API. Please refer to the ",(0,t.jsx)(r.a,{href:"/tugraph-db/en-US/en/3.6.0/developer-manual/interface/procedure/traversal",children:"documentation"})," for more information."]}),"\n",(0,t.jsx)(r.h2,{id:"2-stored-procedure-version",children:"2. Stored Procedure Version"}),"\n",(0,t.jsx)(r.p,{children:"Currently, TuGraph supports two versions of stored procedures, which are suitable for different scenarios. Version 3.5 only supports v1, which can be directly called through the REST or RPC interface. Starting from version 3.5, v2 is supported, which allows embedding calls in graph query languages \u200b\u200b(such as Cypher). We call it POG (Procedure On Graph query language, APOC)."}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{}),(0,t.jsx)(r.th,{children:"Procedure v1"}),(0,t.jsx)(r.th,{children:"Procedure v2"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Applicable Scenarios"}),(0,t.jsx)(r.td,{children:"Extreme performance or complex multi-transaction management scenarios"}),(0,t.jsx)(r.td,{children:"General scenarios, highly integrated with Cypher"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Transaction"}),(0,t.jsx)(r.td,{children:"Created internally in the function, multiple transactions"}),(0,t.jsx)(r.td,{children:"can be freely controlled\tPassed into the external function, single transaction"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Signature (parameter definition)"}),(0,t.jsx)(r.td,{children:"Not required"}),(0,t.jsx)(r.td,{children:"Required"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Input and output parameter types"}),(0,t.jsx)(r.td,{children:"Not required to specify"}),(0,t.jsx)(r.td,{children:"Need to specify parameter types"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Cypher Standalone Call"}),(0,t.jsx)(r.td,{children:"Supported"}),(0,t.jsx)(r.td,{children:"Supported"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Cypher Embeded Call"}),(0,t.jsx)(r.td,{children:"Not supported"}),(0,t.jsx)(r.td,{children:"Supported"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Language"}),(0,t.jsx)(r.td,{children:"C++/Python/Rust"}),(0,t.jsx)(r.td,{children:"C++"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Calling mode"}),(0,t.jsx)(r.td,{children:"Directly pass the string, usually in JSON format"}),(0,t.jsx)(r.td,{children:"Through variables in Cypher statements"})]})]})]}),"\n",(0,t.jsx)(r.p,{children:"In TuGraph, stored procedures v1 and v2 are managed separately, and support for create, delete, and query operations is provided. However, it is still not recommended to have the same name for multiple stored procedures."}),"\n",(0,t.jsx)(r.h2,{id:"3-supported-languages",children:"3. Supported Languages"}),"\n",(0,t.jsx)(r.p,{children:"In TuGraph, users can dynamically load, update, and delete stored procedures. TuGraph supports the use of C++, Python, and Rust languages to write stored procedures. Among them, C++ language has the most complete support and the best performance."}),"\n",(0,t.jsx)(r.p,{children:"Note that the stored procedure is the logic compiled and executed on the server side, which is independent of the language support on the client side."}),"\n",(0,t.jsx)(r.h2,{id:"4-procedure-v1-interface",children:"4. Procedure v1 Interface"}),"\n",(0,t.jsx)(r.h2,{id:"41write-stored-procedures",children:"4.1.Write stored procedures"}),"\n",(0,t.jsx)(r.h3,{id:"411write-c-stored-procedure",children:"4.1.1.Write C++ stored procedure"}),"\n",(0,t.jsx)(r.p,{children:"Users can write C stored procedures by using core API or Traversal API. An example of a simple C stored procedure is as follows:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:'#include <iostream>\n#include "lgraph.h"\nusing namespace lgraph_api;\n\nextern "C" LGAPI bool Process(GraphDB& db, const std::string& request, std::string& response) {\n\tauto txn = db.CreateReadTxn();\n\tsize_t n = 0;\n\tfor (auto vit = txn.GetVertexIterator(); vit.IsValid(); vit.Next()) {\n        if (vit.GetLabel() == "student") {\n            auto age = vit.GetField("age");\n            if (!age.is_null() && age.integer() == 10) n++; ## Count all students whose age is 10\n        }\n\t}\n    output = std::to_string(n);\n    return true;\n}\n'})}),"\n",(0,t.jsxs)(r.p,{children:["From the code, we can see the entry of a TuGraph C++ stored procedure is the ",(0,t.jsx)(r.code,{children:"Process"})," function, with three parameters:"]}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.code,{children:"db"}),": the TuGraph database instance"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.code,{children:"request"}),": the input data, which can be a binary byte array, or any other format such as JSON string."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.code,{children:"response"}),": the output data, which can be a string or directly return binary data."]}),"\n"]}),"\n",(0,t.jsxs)(r.p,{children:["The return value of the ",(0,t.jsx)(r.code,{children:"Process"})," function is a boolean value. When it returns ",(0,t.jsx)(r.code,{children:"true"}),", it means that the request is successfully completed, otherwise it means that the stored procedure found an error during execution, and the user can return an error message through ",(0,t.jsx)(r.code,{children:"response"})," to facilitate debugging."]}),"\n",(0,t.jsxs)(r.p,{children:["After the C++ stored procedure is written, it needs to be compiled into a dynamic link library. TuGraph provides ",(0,t.jsx)(r.code,{children:"compile.sh"})," script to help users automatically compile stored procedures. The ",(0,t.jsx)(r.code,{children:"compile.sh"})," script has only one parameter, which is the name of the stored procedure, which is ",(0,t.jsx)(r.code,{children:"age_10"})," in the above example. Compile and call the command line as follows:"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"g++ -fno-gnu-unique -fPIC -g --std=c++14 -I/usr/local/include/lgraph -rdynamic -O3 -fopenmp -o age_10.so age_10.cpp /usr/local/lib64/liblgraph.so -shared\n"})}),"\n",(0,t.jsx)(r.p,{children:"If the compilation goes well, age_10.so will be generated, which can then be loaded into the server by the user."}),"\n",(0,t.jsx)(r.h3,{id:"412-writing-python-stored-procedures",children:"4.1.2 Writing Python stored procedures"}),"\n",(0,t.jsx)(r.p,{children:"The following snippet does the same thing as the above C++ stored procedure, but via TuGraph Python API:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-python",children:"def Process(db, input):\n    txn = db.CreateReadTxn()\n    it = txn.GetVertexIterator()\n    n = 0\n    while it.IsValid():\n        if it.GetLabel() == 'student' and it['age'] and it['age'] == 10:\n            n = n + 1\n        it.Next()\n    return (True, str(nv))\n"})}),"\n",(0,t.jsxs)(r.p,{children:["The Python stored procedure returns a tuple, the first element of which is a Boolean value indicating whether the stored procedure was successfully executed; the second element is a ",(0,t.jsx)(r.code,{children:"str"}),", which contains the result to be returned."]}),"\n",(0,t.jsx)(r.p,{children:"Python stored procedures do not need to be compiled and can be loaded directly."}),"\n",(0,t.jsx)(r.h2,{id:"42how-to-use-stored-procedures",children:"4.2.How to use stored procedures"}),"\n",(0,t.jsx)(r.h3,{id:"421install-stored-procedures",children:"4.2.1.Install Stored Procedures"}),"\n",(0,t.jsxs)(r.p,{children:["Users can load stored procedures through REST API and RPC. Taking the REST API as an example, the C++ code to load ",(0,t.jsx)(r.code,{children:"age_10.so"})," is as follows:"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-python",children:"import requests\nimport json\nimport base64\n\ndata = {'name':'age_10'}\nf = open('./age_10.so','rb')\ncontent = f.read()\ndata['code_base64'] = base64.b64encode(content).decode()\ndata['description'] = 'Custom Page Rank Procedure'\ndata['read_only'] = true\ndata['code_type'] = 'so'\njs = json.dumps(data)\nr = requests.post(url='http://127.0.0.1:7071/db/school/cpp_plugin', data=js,\n                  headers={'Content-Type':'application/json'})\nprint(r.status_code)    ## \u6b63\u5e38\u65f6\u8fd4\u56de200\n"})}),"\n",(0,t.jsxs)(r.p,{children:["It should be noted that ",(0,t.jsx)(r.code,{children:"data['code']"})," at this time is a base64-processed string, and the binary code in ",(0,t.jsx)(r.code,{children:"age_10.so"})," cannot be directly transmitted through JSON. In addition, the loading and deletion of stored procedures can only be operated by users with administrator privileges."]}),"\n",(0,t.jsx)(r.p,{children:"After the stored procedure is loaded, it will be saved in the database, and it will be automatically loaded after the server restarts. Also, if an update to the stored procedure is required, the same REST API is called. It is recommended that users update the corresponding descriptions when updating stored procedures, so as to distinguish stored procedures of different versions."}),"\n",(0,t.jsx)(r.h3,{id:"422list-stored-procedures",children:"4.2.2.List Stored Procedures"}),"\n",(0,t.jsx)(r.p,{children:"During the running of the server, the user can obtain the list of stored procedures at any time. Its call is as follows:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-python",children:'>>> r = requests.get(\'http://127.0.0.1:7071/db/school/cpp_plugin\')\n>>> r.status_code\n200\n>>> r.text\n\'{"plugins":[{"description":"Custom Page Rank Procedure", "name":"age_10", "read_only":true}]}\'\n'})}),"\n",(0,t.jsx)(r.h3,{id:"423retrieve-stored-procedures-detail",children:"4.2.3.Retrieve Stored Procedures Detail"}),"\n",(0,t.jsx)(r.p,{children:"While the server is running, users can obtain the details of a single stored procedure, including codes, at any time. Its call is as follows:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-python",children:'>>> r = requests.get(\'http://127.0.0.1:7071/db/school/cpp_plugin/age_10\')\n>>> r.status_code\n200\n>>> r.text\n\'{"description":"Custom Page Rank Procedure", "name":"age_10", "read_only":true, "code_base64":<CODE>, "code_type":"so"}\'\n'})}),"\n",(0,t.jsx)(r.h3,{id:"424call-stored-procedure",children:"4.2.4.Call stored procedure"}),"\n",(0,t.jsx)(r.p,{children:"An example code for calling a stored procedure is as follows:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:">>> r = requests.post(url='http://127.0.0.1:7071/db/school/cpp_plugin/age_10', data='',\n                headers={'Content-Type':'application/json'})\n>>> r.status_code\n200\n>>> r.text\n9\n"})}),"\n",(0,t.jsx)(r.h3,{id:"425uninstall-stored-procedures",children:"4.2.5.Uninstall Stored Procedures"}),"\n",(0,t.jsx)(r.p,{children:"Deleting a stored procedure requires only the following call:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-python",children:">>> r = requests.delete(url='http://127.0.0.1:7071/db/school/cpp_plugin/age_10')\n>>> r.status_code\n200\n"})}),"\n",(0,t.jsx)(r.p,{children:"Similar to loading stored procedures, only admin users can delete stored procedures."}),"\n",(0,t.jsx)(r.h3,{id:"426upgrade-stored-procedures",children:"4.2.6.Upgrade Stored Procedures"}),"\n",(0,t.jsx)(r.p,{children:"You can upgrade a stored procedure with the following two steps:"}),"\n",(0,t.jsxs)(r.ol,{children:["\n",(0,t.jsx)(r.li,{children:"Uninstall the existing one."}),"\n",(0,t.jsx)(r.li,{children:"Install the new on."}),"\n"]}),"\n",(0,t.jsx)(r.p,{children:"TuGraph carefully manages the concurrency of stored procedure operations. Upgrading stored procedures will not affect concurrent runs of existing ones."}),"\n",(0,t.jsx)(r.h2,{id:"5-procedure-v2-interface",children:"5. Procedure v2 Interface"}),"\n",(0,t.jsx)(r.h3,{id:"51writing-stored-procedures",children:"5.1.Writing stored procedures"}),"\n",(0,t.jsx)(r.p,{children:"Users can write C++ stored procedures by using lgraph API. A simple C++ stored procedure example is as follows:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-c++",children:'// peek_some_node_salt.cpp\n#include <cstdlib>\n#include "lgraph/lgraph.h"\n#include "lgraph/lgraph_types.h"\n#include "lgraph/lgraph_result.h"\n\n#include "tools/json.hpp"\n\nusing json = nlohmann::json;\nusing namespace lgraph_api;\n\nextern "C" LGAPI bool GetSignature(SigSpec &sig_spec) {\n    sig_spec.input_list = {\n        {.name = "limit", .index = 0, .type = LGraphType::INTEGER},\n    };\n    sig_spec.result_list = {\n        {.name = "node", .index = 0, .type = LGraphType::NODE},\n        {.name = "salt", .index = 1, .type = LGraphType::FLOAT}\n    };\n    return true;\n}\n\nextern "C" LGAPI bool ProcessInTxn(Transaction &txn,\n                                   const std::string &request,\n                                   std::string &response) {\n    int64_t limit;\n    try {\n        json input = json::parse(request);\n        limit = input["limit"].get<int64_t>();\n    } catch (std::exception &e) {\n        response = std::string("error parsing json: ") + e.what();\n        return false;\n    }\n\n    Result result({{"node", LGraphType::NODE},\n                   {"salt", LGraphType::FLOAT},\n                   });\n    for (size_t i = 0; i < limit; i++) {\n        auto r = result.MutableRecord();\n        auto vit = txn.GetVertexIterator(i);\n        r->Insert("node", vit);\n        r->Insert("salt", FieldData::Float(20.23*float(i)));\n    }\n    response = result.Dump();\n    return true;\n}\n'})}),"\n",(0,t.jsx)(r.p,{children:"From the code we can see:"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsxs)(r.p,{children:["The stored procedure defines a method ",(0,t.jsx)(r.code,{children:"GetSignature"})," to get the signature. This method returns the signature of the stored procedure, which includes input parameter names and their types, and return parameters and their types. This enables the Cypher query statement to use the signature information to verify whether the input data and the returned data are reasonable when calling the stored procedure."]}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsxs)(r.p,{children:["The entry function is the ",(0,t.jsx)(r.code,{children:"ProcessInTxn"})," function, which has three parameters, which are:"]}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.code,{children:"txn"}),": The transaction of the stored procedure, generally speaking, the transaction of the Cypher statement that calls the stored procedure."]}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.code,{children:"request"}),": input data, its content is the string of the input parameter type defined in ",(0,t.jsx)(r.code,{children:"GetSignature"})," and the value passed in the Cypher query statement after json serialization. e.g. ",(0,t.jsx)(r.code,{children:"{num_iteration: 10}"})]}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.code,{children:"response"}),": output data, in order to ensure compatibility in the Cypher language, users can write the data processed by the stored procedure to ",(0,t.jsx)(r.code,{children:"lgraph_api::Result"}),", and finally use ",(0,t.jsx)(r.code,{children:"lgraph_api::Result::Dump"})," to serialize it into data in json format."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(r.p,{children:["The return value of the ",(0,t.jsx)(r.code,{children:"ProcessInTxn"})," function is a boolean value. When it returns ",(0,t.jsx)(r.code,{children:"true"}),", it means that the request was successfully completed, otherwise it means that the stored procedure found an error during execution."]}),"\n",(0,t.jsxs)(r.p,{children:["After the C++ stored procedure is written, it needs to be compiled into a dynamic link library. TuGraph provides ",(0,t.jsx)(r.code,{children:"compile.sh"})," script to help users automatically compile stored procedures. The ",(0,t.jsx)(r.code,{children:"compile.sh"})," script has only one parameter, which is the name of the stored procedure, which in the above example is ",(0,t.jsx)(r.code,{children:"custom_pagerank"}),". Compile and call the command line as follows:"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"g++ -fno-gnu-unique -fPIC -g --std=c++14 -I/usr/local/include/lgraph -rdynamic -O3 -fopenmp -o custom_pagerank.so custom_pagerank.cpp /usr/local/lib64/liblgraph.so -shared\n"})}),"\n",(0,t.jsx)(r.p,{children:"If the compilation goes well, custom_pagerank.so will be generated, which can then be loaded into the server by the user."}),"\n",(0,t.jsx)(r.h3,{id:"52load-stored-procedure",children:"5.2.Load stored procedure"}),"\n",(0,t.jsxs)(r.p,{children:["Users can load stored procedures through REST API and RPC. Taking the REST API as an example, the C++ code to load ",(0,t.jsx)(r.code,{children:"custom_pagerank.so"})," is as follows:"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-python",children:"import requests\nimport json\nimport base64\n\ndata = {'name':'custom_pagerank'}\nf = open('./custom_pagerank.so','rb')\ncontent = f.read()\ndata['code_base64'] = base64.b64encode(content).decode()\ndata['description'] = 'Custom Page Rank Procedure'\ndata['read_only'] = true\ndata['code_type'] = 'so'\njs = json.dumps(data)\nr = requests.post(url='http://127.0.0.1:7071/db/school/cpp_plugin', data=js,\n            headers={'Content-Type':'application/json'})\nprint(r.status_code)    ## \u6b63\u5e38\u65f6\u8fd4\u56de200\n"})}),"\n",(0,t.jsxs)(r.p,{children:["It should be noted that ",(0,t.jsx)(r.code,{children:"data['code']"})," at this time is a base64-processed string, and the binary code in ",(0,t.jsx)(r.code,{children:"custom_pagerank.so"})," cannot be directly transmitted through JSON. In addition, the loading and deletion of stored procedures can only be operated by users with administrator privileges."]}),"\n",(0,t.jsx)(r.p,{children:"After the stored procedure is loaded, it will be saved in the database, and it will be automatically loaded after the server restarts. Also, if an update to the stored procedure is required, the same REST API is called. It is recommended that users update the corresponding descriptions when updating stored procedures, so as to distinguish stored procedures of different versions."}),"\n",(0,t.jsx)(r.h4,{id:"521list-loaded-stored-procedures",children:"5.2.1.List loaded stored procedures"}),"\n",(0,t.jsx)(r.p,{children:"During the running of the server, the user can obtain the list of stored procedures at any time. Its call is as follows:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-python",children:'>>> r = requests.get(\'http://127.0.0.1:7071/db/school/cpp_plugin\')\n>>> r.status_code\n200\n>>> r.text\n\'{"plugins":[{"description":"Custom Page Rank Procedure", "name":"custom_pagerank", "read_only":true}]}\'\n'})}),"\n",(0,t.jsx)(r.h4,{id:"522get-stored-procedure-details",children:"5.2.2.Get stored procedure details"}),"\n",(0,t.jsx)(r.p,{children:"While the server is running, users can obtain the details of a single stored procedure, including codes, at any time. Its call is as follows:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-python",children:'>>> r = requests.get(\'http://127.0.0.1:7071/db/school/cpp_plugin/custom_pagerank\')\n>>> r.status_code\n200\n>>> r.text\n\'{"description":"Custom Page Rank Procedure", "name":"custom_pagerank", "read_only":true, "code_base64":<CODE>, "code_type":"so"}\'\n'})}),"\n",(0,t.jsx)(r.h4,{id:"523call-stored-procedure",children:"5.2.3.Call stored procedure"}),"\n",(0,t.jsx)(r.p,{children:"An example code for calling a stored procedure is as follows:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-Cypher",children:"CALL plugin.cpp.custom_pagerank(10)\nYIELD node, pr WITH node, pr\nMATCH(node)-[r]->(n) RETURN node, r, n, pr\n"})}),"\n",(0,t.jsx)(r.h4,{id:"524delete-stored-procedure",children:"5.2.4.Delete stored procedure"}),"\n",(0,t.jsx)(r.p,{children:"Deleting a stored procedure requires only the following call:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-python",children:">>> r = requests.delete(url='http://127.0.0.1:7071/db/school/cpp_plugin/custom_pagerank')\n>>> r.status_code\n200\n"})}),"\n",(0,t.jsx)(r.p,{children:"Similar to loading stored procedures, only admin users can delete stored procedures."}),"\n",(0,t.jsx)(r.h4,{id:"525update-stored-procedure",children:"5.2.5.Update stored procedure"}),"\n",(0,t.jsx)(r.p,{children:"Updating a stored procedure requires the following two steps:"}),"\n",(0,t.jsxs)(r.ol,{children:["\n",(0,t.jsx)(r.li,{children:"Delete the existing stored procedure"}),"\n",(0,t.jsx)(r.li,{children:"Install the new stored procedure"}),"\n"]}),"\n",(0,t.jsx)(r.p,{children:"TuGraph carefully manages the concurrency of stored procedure operations, and updating stored procedures will not affect the operation of existing stored procedures."})]})}function u(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},28453:(e,r,n)=>{n.d(r,{R:()=>d,x:()=>i});var t=n(96540);const s={},o=t.createContext(s);function d(e){const r=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),t.createElement(o.Provider,{value:r},e.children)}}}]);