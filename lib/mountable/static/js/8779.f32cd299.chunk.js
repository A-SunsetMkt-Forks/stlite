var stlite;(()=>{"use strict";var e={22523:e=>{function t(e){if("string"!==typeof e)throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}function n(e,t){for(var n,r="",o=0,s=-1,a=0,i=0;i<=e.length;++i){if(i<e.length)n=e.charCodeAt(i);else{if(47===n)break;n=47}if(47===n){if(s===i-1||1===a);else if(s!==i-1&&2===a){if(r.length<2||2!==o||46!==r.charCodeAt(r.length-1)||46!==r.charCodeAt(r.length-2))if(r.length>2){var l=r.lastIndexOf("/");if(l!==r.length-1){-1===l?(r="",o=0):o=(r=r.slice(0,l)).length-1-r.lastIndexOf("/"),s=i,a=0;continue}}else if(2===r.length||1===r.length){r="",o=0,s=i,a=0;continue}t&&(r.length>0?r+="/..":r="..",o=2)}else r.length>0?r+="/"+e.slice(s+1,i):r=e.slice(s+1,i),o=i-s-1;s=i,a=0}else 46===n&&-1!==a?++a:a=-1}return r}var r={resolve:function(){for(var e,r="",o=!1,s=arguments.length-1;s>=-1&&!o;s--){var a;s>=0?a=arguments[s]:(void 0===e&&(e=process.cwd()),a=e),t(a),0!==a.length&&(r=a+"/"+r,o=47===a.charCodeAt(0))}return r=n(r,!o),o?r.length>0?"/"+r:"/":r.length>0?r:"."},normalize:function(e){if(t(e),0===e.length)return".";var r=47===e.charCodeAt(0),o=47===e.charCodeAt(e.length-1);return 0!==(e=n(e,!r)).length||r||(e="."),e.length>0&&o&&(e+="/"),r?"/"+e:e},isAbsolute:function(e){return t(e),e.length>0&&47===e.charCodeAt(0)},join:function(){if(0===arguments.length)return".";for(var e,n=0;n<arguments.length;++n){var o=arguments[n];t(o),o.length>0&&(void 0===e?e=o:e+="/"+o)}return void 0===e?".":r.normalize(e)},relative:function(e,n){if(t(e),t(n),e===n)return"";if((e=r.resolve(e))===(n=r.resolve(n)))return"";for(var o=1;o<e.length&&47===e.charCodeAt(o);++o);for(var s=e.length,a=s-o,i=1;i<n.length&&47===n.charCodeAt(i);++i);for(var l=n.length-i,c=a<l?a:l,g=-1,d=0;d<=c;++d){if(d===c){if(l>c){if(47===n.charCodeAt(i+d))return n.slice(i+d+1);if(0===d)return n.slice(i+d)}else a>c&&(47===e.charCodeAt(o+d)?g=d:0===d&&(g=0));break}var p=e.charCodeAt(o+d);if(p!==n.charCodeAt(i+d))break;47===p&&(g=d)}var u="";for(d=o+g+1;d<=s;++d)d!==s&&47!==e.charCodeAt(d)||(0===u.length?u+="..":u+="/..");return u.length>0?u+n.slice(i+g):(i+=g,47===n.charCodeAt(i)&&++i,n.slice(i))},_makeLong:function(e){return e},dirname:function(e){if(t(e),0===e.length)return".";for(var n=e.charCodeAt(0),r=47===n,o=-1,s=!0,a=e.length-1;a>=1;--a)if(47===(n=e.charCodeAt(a))){if(!s){o=a;break}}else s=!1;return-1===o?r?"/":".":r&&1===o?"//":e.slice(0,o)},basename:function(e,n){if(void 0!==n&&"string"!==typeof n)throw new TypeError('"ext" argument must be a string');t(e);var r,o=0,s=-1,a=!0;if(void 0!==n&&n.length>0&&n.length<=e.length){if(n.length===e.length&&n===e)return"";var i=n.length-1,l=-1;for(r=e.length-1;r>=0;--r){var c=e.charCodeAt(r);if(47===c){if(!a){o=r+1;break}}else-1===l&&(a=!1,l=r+1),i>=0&&(c===n.charCodeAt(i)?-1===--i&&(s=r):(i=-1,s=l))}return o===s?s=l:-1===s&&(s=e.length),e.slice(o,s)}for(r=e.length-1;r>=0;--r)if(47===e.charCodeAt(r)){if(!a){o=r+1;break}}else-1===s&&(a=!1,s=r+1);return-1===s?"":e.slice(o,s)},extname:function(e){t(e);for(var n=-1,r=0,o=-1,s=!0,a=0,i=e.length-1;i>=0;--i){var l=e.charCodeAt(i);if(47!==l)-1===o&&(s=!1,o=i+1),46===l?-1===n?n=i:1!==a&&(a=1):-1!==n&&(a=-1);else if(!s){r=i+1;break}}return-1===n||-1===o||0===a||1===a&&n===o-1&&n===r+1?"":e.slice(n,o)},format:function(e){if(null===e||"object"!==typeof e)throw new TypeError('The "pathObject" argument must be of type Object. Received type '+typeof e);return function(e,t){var n=t.dir||t.root,r=t.base||(t.name||"")+(t.ext||"");return n?n===t.root?n+r:n+e+r:r}("/",e)},parse:function(e){t(e);var n={root:"",dir:"",base:"",ext:"",name:""};if(0===e.length)return n;var r,o=e.charCodeAt(0),s=47===o;s?(n.root="/",r=1):r=0;for(var a=-1,i=0,l=-1,c=!0,g=e.length-1,d=0;g>=r;--g)if(47!==(o=e.charCodeAt(g)))-1===l&&(c=!1,l=g+1),46===o?-1===a?a=g:1!==d&&(d=1):-1!==a&&(d=-1);else if(!c){i=g+1;break}return-1===a||-1===l||0===d||1===d&&a===l-1&&a===i+1?-1!==l&&(n.base=n.name=0===i&&s?e.slice(1,l):e.slice(i,l)):(0===i&&s?(n.name=e.slice(1,a),n.base=e.slice(1,l)):(n.name=e.slice(i,a),n.base=e.slice(i,l)),n.ext=e.slice(a,l)),i>0?n.dir=e.slice(0,i-1):s&&(n.dir="/"),n},sep:"/",delimiter:":",win32:null,posix:null};r.posix=r,e.exports=r}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var s=t[r]={exports:{}};return e[r](s,s.exports,n),s.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);(()=>{new RegExp("[".concat("[(<=>!~;@","]"));class e{constructor(){this.promise=new Promise(((e,t)=>{this.resolveInternal=e,this.rejectInternal=t}))}resolve(e){this.resolveInternal(e)}reject(e){this.rejectInternal(e)}}var t=n(22523),r=n.n(t);function o(e,t){const n=r().normalize(t),o=r().dirname(n).split("/"),s=[];for(const r of o){s.push(r);const t=s.join("/");if(e.FS.analyzePath(t).exists){if(e.FS.isDir(t))throw new Error('"'.concat(t,'" already exists and is not a directory.'))}else try{e.FS.mkdir(t)}catch(a){throw console.error('Failed to create a directory "'.concat(t,'"')),a}}}function s(e,t,n,r){o(e,t),e.FS.writeFile(t,n,r)}const a=new RegExp("[".concat("[(<=>!~;@","]"));function i(e){e.forEach((e=>{let t;try{t=new URL(e)}catch{return}if("emfs:"===t.protocol||"file:"===t.protocol)throw new Error('"emfs:" and "file:" protocols are not allowed for the requirement ('.concat(e,")"))}));return e.filter((e=>{const t="streamlit"===function(e){return e.split(a)[0].trim()}(e);return!t||(console.warn('Streamlit is specified in the requirements ("'.concat(e,'"), but it will be ignored. A built-in version of Streamlit will be used.')),!1)}))}function l(e){e.runPython('\nimport micropip\nmicropip.add_mock_package(\n    "pyarrow", "0.0.1",\n    modules={\n        "pyarrow": """\n__version__ = \'0.0.1\'  # TODO: Update when releasing\n\n\nclass Table:\n    @classmethod\n    def from_pandas(*args, **kwargs):\n        raise NotImplementedError("stlite is not supporting this method.")\n"""\n    }\n)\n')}var c=function(e,t,n,r){return new(n||(n=Promise))((function(o,s){function a(e){try{l(r.next(e))}catch(t){s(t)}}function i(e){try{l(r.throw(e))}catch(t){s(t)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,i)}l((r=r.apply(e,t||[])).next())}))};const g=n.g;self.onmessage=function(t,n,r){function a(e){n({type:"event:progress",data:{message:e}})}let d,p;const u=new e,h=function(){var e,o;return c(this,void 0,void 0,(function*(){const h=yield u.promise,f=Object.assign(Object.assign({},r),h);console.debug("Initial data",f);const{entrypoint:m,files:_,archives:y,requirements:b,prebuiltPackageNames:v,wheels:w,mountedSitePackagesSnapshotFilePath:k,pyodideUrl:S=t,streamlitConfig:A,idbfsMountpoints:P,nodefsMountpoints:C}=f,F=i(b);a("Loading Pyodide."),console.debug("Loading Pyodide"),d=yield function(e,t){return c(this,void 0,void 0,(function*(){const n=e.slice(0,e.lastIndexOf("/")+1);let r;return e.endsWith(".mjs")?r=(yield import(e)).loadPyodide:(importScripts(e),r=g.loadPyodide),r(Object.assign(Object.assign({},t),{indexURL:n}))}))}(S,{stdout:console.log,stderr:console.error}),console.debug("Loaded Pyodide");let O=!1;if(P&&(O=!0,P.forEach((e=>{d.FS.mkdir(e),d.FS.mount(d.FS.filesystems.IDBFS,{},e)})),yield new Promise(((e,t)=>{d.FS.syncfs(!0,(n=>{n?t(n):e()}))}))),C&&Object.entries(C).forEach((e=>{let[t,n]=e;d.FS.mkdir(t),d.FS.mount(d.FS.filesystems.NODEFS,{root:n},t)})),a("Mounting files."),yield Promise.all(Object.keys(_).map((e=>c(this,void 0,void 0,(function*(){const t=_[e];let n;"url"in t?(console.debug("Fetch a file from ".concat(t.url)),n=yield fetch(t.url).then((e=>e.arrayBuffer())).then((e=>new Uint8Array(e)))):n=t.data;const{opts:r}=_[e];console.debug('Write a file "'.concat(e,'"')),s(d,e,n,r)}))))),a("Unpacking archives."),yield Promise.all(y.map((e=>c(this,void 0,void 0,(function*(){let t;"url"in e?(console.debug("Fetch an archive from ".concat(e.url)),t=yield fetch(e.url).then((e=>e.arrayBuffer()))):t=e.buffer;const{format:n,options:r}=e;console.debug("Unpack an archive",{format:n,options:r}),d.unpackArchive(t,n,r)}))))),!k&&!w)throw new Error("Neither snapshot nor wheel files are provided.");k&&(a("Restoring the snapshot."),yield d.runPythonAsync("import tarfile, shutil, site"),yield d.runPythonAsync("\nsite_packages_dirs = site.getsitepackages()\nfor site_packages in site_packages_dirs:\n    shutil.rmtree(site_packages)\n"),console.debug("Unarchive ".concat(k)),yield d.runPythonAsync('\nwith tarfile.open("'.concat(k,'", "r") as tar_gz_file:\n    tar_gz_file.extractall("/")\n')),console.debug("Restored the snapshot"),a("Mocking some packages."),console.debug("Mock pyarrow"),l(d),console.debug("Mocked pyarrow")),a("Installing packages."),console.debug("Installing the prebuilt packages:",v),yield d.loadPackage(v),console.debug("Installed the prebuilt packages"),yield d.loadPackage("micropip");const j=d.pyimport("micropip");w?(console.debug("Installing the wheels:",w,"and the requirements:",F),yield j.install.callKwargs([w.stliteServer,w.streamlit,...F],{keep_going:!0}),console.debug("Installed the wheels and the requirements"),a("Mocking some packages."),console.debug("Mock pyarrow"),l(d),console.debug("Mocked pyarrow")):(console.debug("Installing the requirements:",F),yield j.install.callKwargs(F,{keep_going:!0}),console.debug("Installed the requirements")),yield d.runPythonAsync("\nimport importlib\nimportlib.invalidate_caches()\n"),a("Loading streamlit package."),console.debug("Loading the Streamlit package"),yield d.runPythonAsync("\nimport streamlit.runtime\n    "),console.debug("Loaded the Streamlit package"),a("Setting up the loggers."),console.debug("Setting the loggers"),yield d.runPythonAsync('\nimport logging\nimport streamlit.logger\n\nstreamlit.logger.get_logger = logging.getLogger\nstreamlit.logger.setup_formatter = None\nstreamlit.logger.update_formatter = lambda *a, **k: None\nstreamlit.logger.set_log_level = lambda *a, **k: None\n\nfor name in streamlit.logger._loggers.keys():\n    if name == "root":\n        name = "streamlit"\n    logger = logging.getLogger(name)\n    logger.propagate = True\n    logger.handlers.clear()\n    logger.setLevel(logging.NOTSET)\n\nstreamlit.logger._loggers = {}\n');g.__logCallback__=(e,t)=>{e>=40?console.error(t):e>=30?console.warn(t):e>=20?console.info(t):console.debug(t)},yield d.runPythonAsync('\ndef setup_loggers(streamlit_level, streamlit_message_format):\n    from js import __logCallback__\n\n\n    class JsHandler(logging.Handler):\n        def emit(self, record):\n            msg = self.format(record)\n            __logCallback__(record.levelno, msg)\n\n\n    root_message_format = "%(levelname)s:%(name)s:%(message)s"\n\n    root_logger = logging.getLogger()\n    root_logger.handlers.clear()\n    root_formatter = logging.Formatter(root_message_format)\n    root_handler = JsHandler()\n    root_handler.setFormatter(root_formatter)\n    root_logger.addHandler(root_handler)\n    root_logger.setLevel(logging.DEBUG)\n\n    streamlit_logger = logging.getLogger("streamlit")\n    streamlit_logger.propagate = False\n    streamlit_logger.handlers.clear()\n    streamlit_formatter = logging.Formatter(streamlit_message_format)\n    streamlit_handler = JsHandler()\n    streamlit_handler.setFormatter(streamlit_formatter)\n    streamlit_logger.addHandler(streamlit_handler)\n    streamlit_logger.setLevel(streamlit_level.upper())\n');const x=(null!==(e=null===A||void 0===A?void 0:A["logger.level"])&&void 0!==e?e:"INFO").toString(),I=null!==(o=null===A||void 0===A?void 0:A["logger.messageFormat"])&&void 0!==o?o:"%(asctime)s %(message)s";if(d.globals.get("setup_loggers")(x,I),console.debug("Set the loggers"),a("Mocking some Streamlit functions for the browser environment."),console.debug("Mocking some Streamlit functions"),yield d.runPythonAsync("\nimport streamlit\n\ndef is_cacheable_msg(msg):\n    return False\n\nstreamlit.runtime.runtime.is_cacheable_msg = is_cacheable_msg\n"),console.debug("Mocked some Streamlit functions"),O){a("Setting up the IndexedDB filesystem synchronizer."),console.debug("Setting up the IndexedDB filesystem synchronizer");let e=!1;g.__scriptFinishedCallback__=()=>{console.debug("The script has finished. Syncing the filesystem."),e||(e=!0,d.FS.syncfs(!1,(t=>{e=!1,t&&console.error(t)})))},yield d.runPythonAsync('\nfrom streamlit.runtime.app_session import AppSession\nfrom streamlit.runtime.scriptrunner import ScriptRunnerEvent\nfrom js import __scriptFinishedCallback__\n\ndef wrap_app_session_on_scriptrunner_event(original_method):\n    def wrapped(self, *args, **kwargs):\n        if "event" in kwargs:\n            event = kwargs["event"]\n            if event == ScriptRunnerEvent.SCRIPT_STOPPED_WITH_SUCCESS or event == ScriptRunnerEvent.SCRIPT_STOPPED_FOR_RERUN or event == ScriptRunnerEvent.SHUTDOWN:\n                __scriptFinishedCallback__()\n        return original_method(self, *args, **kwargs)\n    return wrapped\n\nAppSession._on_scriptrunner_event = wrap_app_session_on_scriptrunner_event(AppSession._on_scriptrunner_event)\n'),console.debug("Set up the IndexedDB filesystem synchronizer")}a("Booting up the Streamlit server."),console.debug("Booting up the Streamlit server"),g.__streamlitFlagOptions__=Object.assign(Object.assign({"browser.gatherUsageStats":!1},A),{"runner.fastReruns":!1}),yield d.runPythonAsync('\nfrom stlite_server.bootstrap import load_config_options, prepare\nfrom stlite_server.server import Server\nfrom js import __streamlitFlagOptions__\n\nflag_options = __streamlitFlagOptions__.to_py()\nload_config_options(flag_options)\n\nmain_script_path = "'.concat(m,'"\nargs = []\n\nprepare(main_script_path, args)\n\nserver = Server(main_script_path)\nserver.start()\n')),console.debug("Booted up the Streamlit server"),console.debug("Setting up the HTTP server"),p=d.globals.get("server").copy(),console.debug("Set up the HTTP server"),n({type:"event:loaded"})}))}().catch((e=>{throw n({type:"event:error",data:{error:e}}),e}));return n({type:"event:start"}),e=>c(this,void 0,void 0,(function*(){const t=e.data;if("initData"===t.type)return void u.resolve(t.data);yield h;const r=e.ports[0];try{switch(t.type){case"websocket:connect":{console.debug("websocket:connect",t.data);const{path:e}=t.data;p.start_websocket(e,((e,t)=>{if(t){const t=e,r=t.getBuffer("u8");t.destroy();const o=new Uint8ClampedArray(r.data.buffer,r.data.byteOffset,r.data.byteLength);n({type:"websocket:message",data:{payload:new Uint8Array(o)}})}else{n({type:"websocket:message",data:{payload:e}})}})),r.postMessage({type:"reply"});break}case"websocket:send":{console.debug("websocket:send",t.data);const{payload:e}=t.data;p.receive_websocket_from_js(e);break}case"http:request":{console.debug("http:request",t.data);const{request:e}=t.data,n=(e,t,n)=>{const o=new Map(t.toJs()),s=n.toJs();console.debug({statusCode:e,headers:o,body:s});const a={type:"http:response",data:{response:{statusCode:e,headers:o,body:s}}};r.postMessage(a)};p.receive_http_from_js(e.method,decodeURIComponent(e.path),e.headers,e.body,n);break}case"file:write":{const{path:e,data:n,opts:o}=t.data;console.debug('Write a file "'.concat(e,'"')),s(d,e,n,o),r.postMessage({type:"reply"});break}case"file:rename":{const{oldPath:e,newPath:n}=t.data;console.debug('Rename "'.concat(e,'" to ').concat(n)),function(e,t,n){o(e,n),e.FS.rename(t,n)}(d,e,n),r.postMessage({type:"reply"});break}case"file:unlink":{const{path:e}=t.data;console.debug('Remove "'.concat(e)),d.FS.unlink(e),r.postMessage({type:"reply"});break}case"install":{const{requirements:e}=t.data,n=d.pyimport("micropip"),o=i(e);console.debug("Install the requirements:",o),yield n.install.callKwargs(o,{keep_going:!0}).then((()=>{console.debug("Successfully installed"),r.postMessage({type:"reply"})}))}}}catch(a){if(console.error(a),!(a instanceof Error))throw a;const e=new Error(a.message);e.name=a.name,e.stack=a.stack,r.postMessage({type:"reply",error:e})}}))}("https://cdn.jsdelivr.net/pyodide/v0.26.0/full/pyodide.js",self.postMessage)})(),stlite={}})();
//# sourceMappingURL=8779.f32cd299.chunk.js.map