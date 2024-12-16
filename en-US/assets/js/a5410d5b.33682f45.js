"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[14781],{16233:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var n=t(74848),a=t(28453);const o={},i="TuGraph Java SDK",l={id:"developer-manual/client-tools/java-client",title:"TuGraph Java SDK",description:"1.Compile java client code",source:"@site/versions/version-3.6.0/en-US/source/5.developer-manual/4.client-tools/3.java-client.md",sourceDirName:"5.developer-manual/4.client-tools",slug:"/developer-manual/client-tools/java-client",permalink:"/tugraph-db/en-US/en/3.6.0/developer-manual/client-tools/java-client",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"TuGraph C++ SDK",permalink:"/tugraph-db/en-US/en/3.6.0/developer-manual/client-tools/cpp-client"},next:{title:"TuGraph-OGM",permalink:"/tugraph-db/en-US/en/3.6.0/developer-manual/client-tools/tugraph-ogm"}},c={},d=[{value:"1.Compile java client code",id:"1compile-java-client-code",level:2},{value:"2.Demo",id:"2demo",level:2},{value:"2.1.Instantiate the client object",id:"21instantiate-the-client-object",level:3},{value:"2.1.1.Instantiate a single node client object",id:"211instantiate-a-single-node-client-object",level:4},{value:"2.1.2.Instantiate the HA cluster to directly connect to the client object",id:"212instantiate-the-ha-cluster-to-directly-connect-to-the-client-object",level:4},{value:"2.1.3.Instantiate the HA cluster to indirectly connect to the client object",id:"213instantiate-the-ha-cluster-to-indirectly-connect-to-the-client-object",level:4},{value:"2.2.Call cypher",id:"22call-cypher",level:3},{value:"2.3.Call stored procedure",id:"23call-stored-procedure",level:3},{value:"2.4.Load stored procedure",id:"24load-stored-procedure",level:3},{value:"2.5.List stored procedures",id:"25list-stored-procedures",level:3},{value:"2.6.Delete stored procedure",id:"26delete-stored-procedure",level:3},{value:"2.7.Import from a byte stream schema",id:"27import-from-a-byte-stream-schema",level:3},{value:"2.8.Import node and edge data from a byte stream",id:"28import-node-and-edge-data-from-a-byte-stream",level:3},{value:"2.9.Import schema from a file",id:"29import-schema-from-a-file",level:3},{value:"2.10.Import edge data from a file",id:"210import-edge-data-from-a-file",level:3}];function s(e){const r={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.header,{children:(0,n.jsx)(r.h1,{id:"tugraph-java-sdk",children:"TuGraph Java SDK"})}),"\n",(0,n.jsx)(r.h2,{id:"1compile-java-client-code",children:"1.Compile java client code"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-shell",children:"cd deps/tugraph-db-client-java\nsh local_build.sh\n"})}),"\n",(0,n.jsx)(r.h2,{id:"2demo",children:"2.Demo"}),"\n",(0,n.jsx)(r.h3,{id:"21instantiate-the-client-object",children:"2.1.Instantiate the client object"}),"\n",(0,n.jsx)(r.p,{children:"Introduce dependencies"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-java",children:"import com.alipay.tugraph.TuGraphDbRpcClient;\n"})}),"\n",(0,n.jsx)(r.h4,{id:"211instantiate-a-single-node-client-object",children:"2.1.1.Instantiate a single node client object"}),"\n",(0,n.jsx)(r.p,{children:"When starting the server in single-node mode, the client is instantiated in the following format"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-java",children:'TuGraphDbRpcClient client = new TuGraphDbRpcClient("127.0.0.1:19099", "admin", "73@TuGraph");\n'})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{children:"public TuGraphDbRpcClient(String url, String user, String pass)\n@param url: tugraph host looks like ip:port\n@param user: login user name\n@param password: login password\n"})}),"\n",(0,n.jsx)(r.h4,{id:"212instantiate-the-ha-cluster-to-directly-connect-to-the-client-object",children:"2.1.2.Instantiate the HA cluster to directly connect to the client object"}),"\n",(0,n.jsx)(r.p,{children:"When the HA cluster deployed on the server can be directly connected using the URL configured in ha_conf, the client is instantiated according to the following format"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-java",children:'TuGraphDbRpcClient client = new TuGraphDbRpcClient("127.0.0.1:19099", "admin", "73@TuGraph");\n'})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{children:"public TuGraphDbRpcClient(String url, String user, String pass)\n@param url: tugraph host looks like ip:port\n@param user: login user name\n@param password: login password\n"})}),"\n",(0,n.jsx)(r.p,{children:"The user only needs to pass in the url of any node in the HA cluster, and the client will automatically maintain the connection pool based on the query information returned by the server, and there is no need to manually restart the client when the HA cluster expands horizontally."}),"\n",(0,n.jsx)(r.h4,{id:"213instantiate-the-ha-cluster-to-indirectly-connect-to-the-client-object",children:"2.1.3.Instantiate the HA cluster to indirectly connect to the client object"}),"\n",(0,n.jsx)(r.p,{children:"When the HA cluster deployed on the server cannot use the URL configured in ha_conf to connect directly but must use an indirect URL (such as the Alibaba Cloud public network URL), the client is instantiated according to the following format."}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-java",children:'List<String> urls = new ArrayList<>();\nurls.add("189.33.97.23:9091");\nurls.add("189.33.97.24:9091");\nurls.add("189.33.97.25:9091");\nTuGraphDbRpcClient client = new TuGraphDbRpcClient(urls, "admin", "73@TuGraph");\n'})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{children:"public TuGraphDbRpcClient(List<String> urls, String user, String password)\n@param urls: tugraph host list\n@param user: login user name\n@param password: login password\n"})}),"\n",(0,n.jsx)(r.p,{children:"Because the URL that the user connects to is different from the information configured when the server starts, the client connection pool cannot be automatically updated by sending a request to the cluster, so it is necessary to manually pass in the URLs of all nodes in the cluster when starting the client, and when the cluster node changes Manually restart the client."}),"\n",(0,n.jsx)(r.h3,{id:"22call-cypher",children:"2.2.Call cypher"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-java",children:'    String res = client.callCypher("CALL db.edgeLabels()", "default", 10);\n    log.info("db.edgeLabels() : " + res);\n'})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{children:"    @param cypher: inquire statement.\n    @param graph: the graph to query.\n    @param timeout: Maximum execution time, overruns will be interrupted\n    @param url: (Optional) Node address of calling cypher\n    @return: the result of cypher query execution\n    public String callCypher(String cypher, String graph, double timeout, String url)\n"})}),"\n",(0,n.jsx)(r.p,{children:"Among them, in the client in HA mode, by specifying the url parameter, a read request can be directed to a certain server."}),"\n",(0,n.jsx)(r.h3,{id:"23call-stored-procedure",children:"2.3.Call stored procedure"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-java",children:'    String result = client.callProcedure("CPP", "khop", kHopParamGen(), 1000, false, "default");\n    log.info("testCallProcedure : " + result);\n'})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{children:"    @param procedureType: the procedure type, currently supported CPP and PY\n    @param procedureName: procedure name\n    @param param: the execution parameters\n    @param procedureTimeOut: Maximum execution time, overruns will be interrupted\n    @param inProcess: Running query or not\n    @param graph: the graph to query\n    @param url: (Optional) Node address of calling procedure\n    @return: the result of procedure execution\n    public String callProcedure(String procedureType, String procedureName, String param, double procedureTimeOut,\n            boolean inProcess, String graph, String url)\n"})}),"\n",(0,n.jsx)(r.p,{children:"Among them, in the client in HA mode, by specifying the url parameter, a read request can be directed to a certain server."}),"\n",(0,n.jsx)(r.h3,{id:"24load-stored-procedure",children:"2.4.Load stored procedure"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-java",children:'    boolean result = client.loadProcedure("./test/procedure/khop.so", "CPP", "khop", "SO", "test loadprocedure", true, "v1", "default");\n    log.info("loadProcedure : " + result);\n'})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{children:"    @param sourceFile: the source_file contain procedure code\n    @param procedureType: the procedure type, currently supported CPP and PY\n    @param procedureName: procedure name\n    @param codeType: code type, currently supported PY, SO, CPP, ZIP\n    @param procedureDescription: procedure description\n    @param readOnly: procedure is read only or not\n    @param version: The version of procedure\n    @param graph: the graph to query.\n    @return: the result of procedure execution\n    public boolean loadProcedure(String sourceFile, String procedureType, String procedureName, String codeType,\n                              String procedureDescription, boolean readOnly, String version, String graph) throws Exception\n"})}),"\n",(0,n.jsx)(r.h3,{id:"25list-stored-procedures",children:"2.5.List stored procedures"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-java",children:'    String result = client.listProcedures("CPP", "any", "default");\n    log.info("listProcedures : " + result);\n'})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{children:"    @param procedureType: the procedure type, currently supported CPP and PY\n    @param version: The version of procedure\n    @param graph: the graph to query.\n    @param url: (Optional) Node address of listing procedure\n    @return: the list of procedure\n    public String listProcedures(String procedureType, String version, String graph, String url) throws Exception\n"})}),"\n",(0,n.jsx)(r.p,{children:"Among them, in the client in HA mode, by specifying the url parameter, the request can be directed to a certain server."}),"\n",(0,n.jsx)(r.h3,{id:"26delete-stored-procedure",children:"2.6.Delete stored procedure"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-java",children:'    String result = client.deleteProcedure("CPP", "sortstr", "default");\n    log.info("loadProcedure : " + result);\n'})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{children:"    @param procedureType: the procedure type, currently supported CPP and PY\n    @param procedureName: procedure name\n    @param graph: the graph to query.\n    @return: the result of procedure execution\n    public boolean deleteProcedure(String procedureType, String procedureName, String graph) throws Exception\n"})}),"\n",(0,n.jsx)(r.h3,{id:"27import-from-a-byte-stream-schema",children:"2.7.Import from a byte stream schema"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-java",children:'    boolean ret = client.importSchemaFromContent(schema, "default", 1000);\n    log.info("importSchemaFromContent : " + ret);\n'})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{children:"    @param schema: the schema to be imported\n    @param graph: the graph to query.\n    @param timeout: Maximum execution time, overruns will be interrupted\n    @return: the result of import schema\n    public boolean importSchemaFromContent(String schema, String graph, double timeout) throws UnsupportedEncodingException\n"})}),"\n",(0,n.jsx)(r.h3,{id:"28import-node-and-edge-data-from-a-byte-stream",children:"2.8.Import node and edge data from a byte stream"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-java",children:'    boolean ret = client.importDataFromContent(personDesc, person, ",", true, 16, "default", 1000);\n    log.info("importDataFromContent : " + ret);\n'})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{children:"    @param desc: data format description\n    @param data: the data to be imported\n    @param delimiter: data separator\n    @param continueOnError: whether to continue when importing data fails\n    @param threadNums: maximum number of threads\n    @param graph: the graph to query.\n    @param timeout: Maximum execution time, overruns will be interrupted\n    @return: the result of import data\n    public boolean importDataFromContent(String desc, String data, String delimiter, boolean continueOnError,\n            int threadNums, String graph, double timeout) throws UnsupportedEncodingException\n"})}),"\n",(0,n.jsx)(r.h3,{id:"29import-schema-from-a-file",children:"2.9.Import schema from a file"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-java",children:'    boolean ret = client.importSchemaFromFile("./test/data/yago.conf", "default", 1000);\n    log.info("importSchemaFromFile : " + ret);\n'})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{children:"    @param schemaFile: the schema_file contain schema\n    @param graph: the graph to query.\n    @param timeout: Maximum execution time, overruns will be interrupted\n    @return: the result of import schema\n    public boolean importSchemaFromFile(String schemaFile, String graph, double timeout)\n            throws UnsupportedEncodingException, IOException\n"})}),"\n",(0,n.jsx)(r.h3,{id:"210import-edge-data-from-a-file",children:"2.10.Import edge data from a file"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-java",children:'    boolean ret = client.importDataFromFile("./test/data/yago.conf", ",", true, 16, 0, "default", 1000000000);\n    log.info("importDataFromFile : " + ret);\n'})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{children:"    @param confFile: data file contain format description and data\n    @param delimiter: data separator\n    @param continueOnError: whether to continue when importing data fails\n    @param threadNums: maximum number of threads\n    @param skipPackages: skip packages number\n    @param graph: the graph to query.\n    @param timeout: Maximum execution time, overruns will be interrupted\n    @return: the result of import data\n    public boolean importDataFromFile(String confFile, String delimiter, boolean continueOnError, int threadNums,\n            int skipPackages, String graph, double timeout) throws IOException, UnsupportedEncodingException\n"})})]})}function p(e={}){const{wrapper:r}={...(0,a.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(s,{...e})}):s(e)}},28453:(e,r,t)=>{t.d(r,{R:()=>i,x:()=>l});var n=t(96540);const a={},o=n.createContext(a);function i(e){const r=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),n.createElement(o.Provider,{value:r},e.children)}}}]);