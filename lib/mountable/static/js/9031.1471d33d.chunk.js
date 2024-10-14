"use strict";(self.webpackChunkstlite=self.webpackChunkstlite||[]).push([[9031],{27171:(e,t,i)=>{i.d(t,{$:()=>p,Z:()=>c});var s=i(30969),n=i(3077),l=i(66821),r=i(70692),a=i(36599),o=i(64756),d=i(37574);let p=function(e){return e.EXTRASMALL="xs",e.SMALL="sm",e.MEDIUM="md",e.LARGE="lg",e.EXTRALARGE="xl",e}({});const c=function(e){let{value:t,width:i,size:c=p.SMALL,overrides:g}=e;const h=(0,n.u)(),u={xs:h.spacing.twoXS,sm:h.spacing.sm,md:h.spacing.lg,lg:h.spacing.xl,xl:h.spacing.twoXL},{activeTheme:m}=s.useContext(o.E),f=!(0,a.MJ)(m),x={BarContainer:{style:{marginTop:h.spacing.none,marginBottom:h.spacing.none,marginRight:h.spacing.none,marginLeft:h.spacing.none}},Bar:{style:e=>{let{$theme:t}=e;return{width:i?i.toString():void 0,marginTop:h.spacing.none,marginBottom:h.spacing.none,marginRight:h.spacing.none,marginLeft:h.spacing.none,height:u[c],backgroundColor:t.colors.progressbarTrackFill,borderTopLeftRadius:h.spacing.twoXS,borderTopRightRadius:h.spacing.twoXS,borderBottomLeftRadius:h.spacing.twoXS,borderBottomRightRadius:h.spacing.twoXS}}},BarProgress:{style:()=>({backgroundColor:f?h.colors.primary:h.colors.blue70,borderTopLeftRadius:h.spacing.twoXS,borderTopRightRadius:h.spacing.twoXS,borderBottomLeftRadius:h.spacing.twoXS,borderBottomRightRadius:h.spacing.twoXS})}};return(0,d.jsx)(l.Z,{value:t,overrides:(0,r.aO)(x,g)})}},59841:(e,t,i)=>{i.d(t,{R:()=>s});class s{setStatus(e){return new s(this.name,this.size,this.id,e)}constructor(e,t,i,s){this.name=void 0,this.size=void 0,this.status=void 0,this.id=void 0,this.name=e,this.size=t,this.id=i,this.status=s}}},59031:(e,t,i)=>{i.r(t),i.d(t,{default:()=>he});var s=i(30969),n=i(13524),l=i(15888),r=i.n(l),a=i(10275),o=i.n(a),d=i(98170),p=i(91439),c=i(23083);let g=function(e){return e.Gigabyte="gb",e.Megabyte="mb",e.Kilobyte="kb",e.Byte="b",e}({});const h=(0,d.rA)()?1024:1e3,u=[g.Gigabyte,g.Megabyte,g.Kilobyte,g.Byte],m=function(e,t){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;if(t||(t=g.Byte),i<0&&(i=0),e<0)throw new Error("Size must be greater than or equal to 0");const s=u.indexOf(t);return s&&e>h/2?m(e/h,u[s-1],i):`${e.toFixed(i)}${t.toUpperCase()}`};var f=i(85668),x=i(3146),w=i(63705),b=i(62606),F=i(74336),y=i(64372),S=i(1454),v=i(83405);const I=(0,v.Z)("section",{target:"e1b2p2ww15"})((e=>{let{isDisabled:t,theme:i}=e;return{display:"flex",alignItems:"center",padding:i.spacing.lg,backgroundColor:i.colors.secondaryBg,borderRadius:i.radii.default,":focus":{outline:"none"},":focus-visible":{boxShadow:`0 0 0 1px ${i.colors.primary}`},color:t?i.colors.gray:i.colors.bodyText}}),""),j=(0,v.Z)("div",{target:"e1b2p2ww14"})((()=>({marginRight:"auto",alignItems:"center",display:"flex"})),""),U=(0,v.Z)("span",{target:"e1b2p2ww13"})((e=>{let{theme:t}=e;return{color:t.colors.darkenedBgMix100,marginRight:t.spacing.lg}}),""),M=(0,v.Z)("span",{target:"e1b2p2ww12"})((e=>{let{theme:t}=e;return{marginBottom:t.spacing.twoXS}}),""),z=(0,v.Z)("div",{target:"e1b2p2ww11"})({name:"1fttcpj",styles:"display:flex;flex-direction:column"}),L=(0,v.Z)("div",{target:"e1b2p2ww10"})((e=>{let{theme:t}=e;return{left:0,right:0,lineHeight:t.lineHeights.tight,paddingTop:t.spacing.md,paddingLeft:t.spacing.lg,paddingRight:t.spacing.lg}}),""),C=(0,v.Z)("ul",{target:"e1b2p2ww9"})((e=>{let{theme:t}=e;return{listStyleType:"none",marginBottom:t.spacing.none}}),""),B=(0,v.Z)("li",{target:"e1b2p2ww8"})((e=>{let{theme:t}=e;return{margin:t.spacing.none,padding:t.spacing.none}}),""),R=(0,v.Z)("div",{target:"e1b2p2ww7"})((e=>{let{theme:t}=e;return{display:"flex",alignItems:"baseline",flex:1,paddingLeft:t.spacing.lg,overflow:"hidden"}}),""),Z=(0,v.Z)("div",{target:"e1b2p2ww6"})((e=>{let{theme:t}=e;return{marginRight:t.spacing.sm,marginBottom:t.spacing.twoXS,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}),""),k=(0,v.Z)("div",{target:"e1b2p2ww5"})((e=>{let{theme:t}=e;return{display:"flex",alignItems:"center",marginBottom:t.spacing.twoXS}}),""),D=(0,v.Z)("span",{target:"e1b2p2ww4"})((e=>{let{theme:t}=e;return{marginRight:t.spacing.twoXS}}),""),T=(0,v.Z)("div",{target:"e1b2p2ww3"})((e=>{let{theme:t}=e;return{display:"flex",padding:t.spacing.twoXS,color:t.colors.darkenedBgMix100}}),""),E=(0,v.Z)("small",{target:"e1b2p2ww2"})((e=>{let{theme:t}=e;return{color:t.colors.danger,fontSize:t.fontSizes.sm,height:t.fontSizes.sm,lineHeight:t.fontSizes.sm,display:"flex",alignItems:"center",whiteSpace:"nowrap"}}),""),X=(0,v.Z)("span",{target:"e1b2p2ww1"})({name:"0",styles:""}),P=e=>({[I]:{display:"flex",flexDirection:"column",alignItems:"flex-start"},[j]:{marginBottom:e.spacing.lg},[U]:{display:"none"},[L]:{paddingRight:e.spacing.lg},[k]:{maxWidth:"inherit",flex:1,alignItems:"flex-start",marginBottom:e.spacing.sm},[Z]:{width:e.sizes.full},[R]:{flexDirection:"column"},[E]:{height:"auto",whiteSpace:"initial"},[X]:{display:"none"},[B]:{margin:e.spacing.none,padding:e.spacing.none}}),A=(0,v.Z)("div",{target:"e1b2p2ww0"})((e=>{let{theme:t}=e;return t.inSidebar?P(t):{[`@media (max-width: ${t.breakpoints.sm})`]:P(t)}}),"");var V=i(91488),W=i(77746),$=i(89976),N=i(37574);const O=e=>{let{multiple:t,acceptedExtensions:i,maxSizeBytes:s}=e;return(0,N.jsxs)(j,{"data-testid":"stFileUploaderDropzoneInstructions",children:[(0,N.jsx)(U,{children:(0,N.jsx)(W.Z,{content:V.n,size:"threeXL"})}),(0,N.jsxs)(z,{children:[(0,N.jsxs)(M,{children:["Drag and drop file",t?"s":""," here"]}),(0,N.jsxs)($.x,{children:[`Limit ${m(s,g.Byte,0)} per file`,i.length?` \u2022 ${i.map((e=>e.replace(/^\./,"").toUpperCase())).join(", ")}`:null]})]})]})},H=e=>{let{onDrop:t,multiple:i,acceptedExtensions:s,maxSizeBytes:n,disabled:l,label:r}=e;return(0,N.jsx)(F.ZP,{onDrop:t,multiple:i,accept:s.length?s:void 0,maxSize:n,disabled:l,useFsAccessApi:!1,children:e=>{let{getRootProps:t,getInputProps:a}=e;return(0,N.jsxs)(I,{...t(),"data-testid":"stFileUploaderDropzone",isDisabled:l,"aria-label":r,children:[(0,N.jsx)("input",{"data-testid":"stFileUploaderDropzoneInput",...a()}),(0,N.jsx)(O,{multiple:i,acceptedExtensions:s,maxSizeBytes:n}),(0,N.jsx)(y.ZP,{kind:S.nW.SECONDARY,disabled:l,size:S.V5.SMALL,children:"Browse files"})]})}})};var G=i(47814),K=i.n(G),_=i(8089),q=i(52791),J=i(71999);const Y=(0,v.Z)("div",{target:"e1nlpozb1"})((e=>{let{theme:t}=e;return{display:"flex",alignItems:"center",justifyContent:"space-between",paddingBottom:t.spacing.twoXS,marginBottom:t.spacing.twoXS}}),""),Q=(0,v.Z)("div",{target:"e1nlpozb0"})((e=>{let{theme:t}=e;return{display:"flex",alignItems:"center",justifyContent:"center",color:t.colors.fadedText40}}),""),ee=e=>{let{currentPage:t,totalPages:i,onNext:s,onPrevious:n}=e;return(0,N.jsxs)(Y,{"data-testid":"stFileUploaderPagination",children:[(0,N.jsx)($.x,{children:`Showing page ${t} of ${i}`}),(0,N.jsxs)(Q,{children:[(0,N.jsx)(y.ZP,{onClick:n,kind:S.nW.MINIMAL,children:(0,N.jsx)(W.Z,{content:q.s,size:"xl"})}),(0,N.jsx)(y.ZP,{onClick:s,kind:S.nW.MINIMAL,children:(0,N.jsx)(W.Z,{content:J._,size:"xl"})})]})]})},te=(e,t)=>Math.ceil(e.length/t),ie=e=>K()((t=>{let{pageSize:i,items:n,resetOnAdd:l,...r}=t;const[a,o]=(0,s.useState)(0),[d,p]=(0,s.useState)(te(n,i)),c=(0,_.D)(n);(0,s.useEffect)((()=>{c&&c.length!==n.length&&p(te(n,i)),c&&c.length<n.length?l&&o(0):a+1>=d&&o(d-1)}),[n,a,i,c,l,d]);const g=n.slice(a*i,a*i+i);return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(e,{items:g,...r}),n.length>i?(0,N.jsx)(ee,{pageSize:i,totalPages:d,currentPage:a+1,onNext:()=>{o(Math.min(a+1,d-1))},onPrevious:()=>{o(Math.max(0,a-1))}}):null]})}),e);var se=i(93151),ne=i(3479),le=i(65711),re=i(27171);const ae=e=>{let{fileInfo:t}=e;return"uploading"===t.status.type?(0,N.jsx)(re.Z,{value:t.status.progress,size:re.$.SMALL,overrides:{Bar:{style:{marginLeft:0,marginTop:"4px"}}}}):"error"===t.status.type?(0,N.jsxs)(E,{children:[(0,N.jsx)(D,{"data-testid":"stFileUploaderFileErrorMessage",children:t.status.errorMessage}),(0,N.jsx)(X,{children:(0,N.jsx)(W.Z,{content:se.j,size:"lg"})})]}):"uploaded"===t.status.type?(0,N.jsx)($.x,{children:m(t.size,g.Byte)}):null},oe=e=>{let{fileInfo:t,onDelete:i}=e;return(0,N.jsxs)(k,{className:"stFileUploaderFile","data-testid":"stFileUploaderFile",children:[(0,N.jsx)(T,{children:(0,N.jsx)(W.Z,{content:ne.h,size:"twoXL"})}),(0,N.jsxs)(R,{className:"stFileUploaderFileData",children:[(0,N.jsx)(Z,{className:"stFileUploaderFileName","data-testid":"stFileUploaderFileName",title:t.name,children:t.name}),(0,N.jsx)(ae,{fileInfo:t})]}),(0,N.jsx)("div",{"data-testid":"stFileUploaderDeleteBtn",children:(0,N.jsx)(y.ZP,{onClick:()=>i(t.id),kind:S.nW.MINIMAL,children:(0,N.jsx)(W.Z,{content:le.U,size:"lg"})})})]})},de=ie((e=>{let{items:t,onDelete:i}=e;return(0,N.jsx)(C,{children:t.map((e=>(0,N.jsx)(B,{children:(0,N.jsx)(oe,{fileInfo:e,onDelete:i})},e.id)))})})),pe=e=>(0,N.jsx)(L,{children:(0,N.jsx)(de,{...e})});var ce=i(59841);class ge extends s.PureComponent{constructor(e){super(e),this.formClearHelper=new c.K,this.localFileIdCounter=1,this.forceUpdatingStatus=!1,this.componentDidUpdate=()=>{if("ready"!==this.status)return;const e=this.createWidgetValue(),{element:t,widgetMgr:i,fragmentId:s}=this.props,n=i.getFileUploaderStateValue(t);r()(e,n)||i.setFileUploaderStateValue(t,e,{fromUi:!0},s)},this.reset=()=>{this.setState({files:[]})},this.dropHandler=(e,t)=>{const{element:i}=this.props,{multipleFiles:s}=i;if(!s&&0===e.length&&t.length>1){const i=t.findIndex((e=>1===e.errors.length&&"too-many-files"===e.errors[0].code));i>=0&&(e.push(t[i].file),t.splice(i,1))}if(this.props.uploadClient.fetchFileURLs(e).then((t=>{if(!s&&e.length>0){const e=this.state.files.find((e=>"error"!==e.status.type));e&&(this.forceUpdatingStatus=!0,this.deleteFile(e.id),this.forceUpdatingStatus=!1)}o()(t,e).forEach((e=>{let[t,i]=e;this.uploadFile(t,i)}))})).catch((t=>{this.addFiles(e.map((e=>new ce.R(e.name,e.size,this.nextLocalFileId(),{type:"error",errorMessage:t}))))})),t.length>0){const e=t.map((e=>{const{file:t}=e;return new ce.R(t.name,t.size,this.nextLocalFileId(),{type:"error",errorMessage:this.getErrorMessage(e.errors[0].code,e.file)})}));this.addFiles(e)}},this.uploadFile=(e,t)=>{const i=n.Z.CancelToken.source(),s=new ce.R(t.name,t.size,this.nextLocalFileId(),{type:"uploading",cancelToken:i,progress:1});this.addFile(s),this.props.uploadClient.uploadFile(this.props.element,e.uploadUrl,t,(e=>this.onUploadProgress(e,s.id)),i.token).then((()=>this.onUploadComplete(s.id,e))).catch((e=>{n.Z.isCancel(e)||this.updateFile(s.id,s.setStatus({type:"error",errorMessage:e?e.toString():"Unknown error"}))}))},this.onUploadComplete=(e,t)=>{const i=this.getFile(e);(0,d.le)(i)||"uploading"!==i.status.type||this.updateFile(i.id,i.setStatus({type:"uploaded",fileId:t.fileId,fileUrls:t}))},this.getErrorMessage=(e,t)=>{switch(e){case"file-too-large":return`File must be ${m(this.maxUploadSizeInBytes,g.Byte)} or smaller.`;case"file-invalid-type":return`${t.type} files are not allowed.`;case"file-too-small":return"File size is too small.";case"too-many-files":return"Only one file is allowed.";default:return"Unexpected error. Please try again."}},this.deleteFile=e=>{const t=this.getFile(e);(0,d.le)(t)||("uploading"===t.status.type&&t.status.cancelToken.cancel(),"uploaded"===t.status.type&&t.status.fileUrls.deleteUrl&&this.props.uploadClient.deleteFile(t.status.fileUrls.deleteUrl),this.removeFile(e))},this.addFile=e=>{this.setState((t=>({files:[...t.files,e]})))},this.addFiles=e=>{this.setState((t=>({files:[...t.files,...e]})))},this.removeFile=e=>{this.setState((t=>({files:t.files.filter((t=>t.id!==e))})))},this.getFile=e=>this.state.files.find((t=>t.id===e)),this.updateFile=(e,t)=>{this.setState((i=>({files:i.files.map((i=>i.id===e?t:i))})))},this.onUploadProgress=(e,t)=>{const i=this.getFile(t);if((0,d.le)(i)||"uploading"!==i.status.type)return;const s=Math.round(100*e.loaded/e.total);i.status.progress!==s&&this.updateFile(t,i.setStatus({type:"uploading",cancelToken:i.status.cancelToken,progress:s}))},this.onFormCleared=()=>{this.setState({files:[]},(()=>{const e=this.createWidgetValue();if((0,d.le)(e))return;const{widgetMgr:t,element:i,fragmentId:s}=this.props;t.setFileUploaderStateValue(i,e,{fromUi:!0},s)}))},this.state=this.initialValue}get initialValue(){const e={files:[],newestServerFileId:0},{widgetMgr:t,element:i}=this.props,s=t.getFileUploaderStateValue(i);if((0,d.le)(s))return e;const{uploadedFileInfo:n}=s;return(0,d.le)(n)||0===n.length?e:{files:n.map((e=>{const t=e.name,i=e.size,s=e.fileId,n=e.fileUrls;return new ce.R(t,i,this.nextLocalFileId(),{type:"uploaded",fileId:s,fileUrls:n})}))}}componentWillUnmount(){this.formClearHelper.disconnect()}get maxUploadSizeInBytes(){return((e,t,i)=>{if(e<0)throw Error("Size must be 0 or greater");const s=u.findIndex((e=>e===t)),n=u.findIndex((e=>e===i));if(-1===s||-1===n)throw Error("Unexpected byte unit provided");if(s===n)return e;const l=Math.abs(s-n),r=h**l;return s>n?e/r:e*r})(this.props.element.maxUploadSizeMb,g.Megabyte,g.Byte)}get status(){return this.state.files.some((e=>"uploading"===e.status.type))||this.forceUpdatingStatus?"updating":"ready"}componentDidMount(){const e=this.createWidgetValue(),{element:t,widgetMgr:i,fragmentId:s}=this.props;void 0===i.getFileUploaderStateValue(t)&&i.setFileUploaderStateValue(t,e,{fromUi:!1},s)}createWidgetValue(){const e=this.state.files.filter((e=>"uploaded"===e.status.type)).map((e=>{const{name:t,size:i,status:s}=e,{fileId:n,fileUrls:l}=s;return new p.jM({fileId:n,fileUrls:l,name:t,size:i})}));return new p.xO({uploadedFileInfo:e})}render(){var e;const{files:t}=this.state,{element:i,disabled:s,widgetMgr:n}=this.props,l=i.type;this.formClearHelper.manageFormClearListener(n,i.formId,this.onFormCleared);const r=t.slice().reverse();return(0,N.jsxs)(A,{className:"stFileUploader","data-testid":"stFileUploader",children:[(0,N.jsx)(f.O,{label:i.label,disabled:s,labelVisibility:(0,d.iF)(null===(e=i.labelVisibility)||void 0===e?void 0:e.value),children:i.help&&(0,N.jsx)(x.dT,{children:(0,N.jsx)(w.Z,{content:i.help,placement:b.u.TOP_RIGHT})})}),(0,N.jsx)(H,{onDrop:this.dropHandler,multiple:i.multipleFiles,acceptedExtensions:l,maxSizeBytes:this.maxUploadSizeInBytes,label:i.label,disabled:s}),r.length>0&&(0,N.jsx)(pe,{items:r,pageSize:3,onDelete:this.deleteFile,resetOnAdd:!0})]})}nextLocalFileId(){return this.localFileIdCounter++}}const he=ge},23083:(e,t,i)=>{i.d(t,{K:()=>l,O:()=>r});var s=i(30969),n=i(98170);class l{constructor(){this.formClearListener=void 0,this.lastWidgetMgr=void 0,this.lastFormId=void 0}manageFormClearListener(e,t,i){(0,n.bb)(this.formClearListener)&&this.lastWidgetMgr===e&&this.lastFormId===t||(this.disconnect(),(0,n.bM)(t)&&(this.formClearListener=e.addFormClearedListener(t,i),this.lastWidgetMgr=e,this.lastFormId=t))}disconnect(){var e;null===(e=this.formClearListener)||void 0===e||e.disconnect(),this.formClearListener=void 0,this.lastWidgetMgr=void 0,this.lastFormId=void 0}}function r(e){let{element:t,widgetMgr:i,onFormCleared:l}=e;(0,s.useEffect)((()=>{if(!(0,n.bM)(t.formId))return;const e=i.addFormClearedListener(t.formId,l);return()=>{e.disconnect()}}),[t,i,l])}},8089:(e,t,i)=>{i.d(t,{D:()=>n});var s=i(30969);const n=e=>{const t=(0,s.useRef)();return(0,s.useEffect)((()=>{t.current=e}),[e]),t.current}}}]);
//# sourceMappingURL=9031.1471d33d.chunk.js.map