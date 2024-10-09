"use strict";(self.webpackChunkstlite=self.webpackChunkstlite||[]).push([[6643],{1813:(e,t,r)=>{r.d(t,{Z:()=>d});r(30969);var o=r(98170),l=r(3146),i=r(83405);const n=r(54470).F4`
  50% {
    color: rgba(0, 0, 0, 0);
  }
`,a=(0,i.Z)("span",{target:"edlqvik0"})((e=>{let{includeDot:t,shouldBlink:r,theme:o}=e;return{...t?{"&::before":{opacity:1,content:'"\u2022"',animation:"none",color:o.colors.gray,margin:"0 5px"}}:{},...r?{color:o.colors.red,animationName:`${n}`,animationDuration:"0.5s",animationIterationCount:5}:{}}}),"");var s=r(37574);const d=e=>{let{dirty:t,value:r,inForm:i,maxLength:n,className:d,type:u="single",allowEnterToSubmit:c=!0}=e;const m=[],p=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];m.push((0,s.jsx)(a,{includeDot:m.length>0,shouldBlink:t,children:e},m.length))};if(t&&c){const e=i?"submit form":"apply";if("multiline"===u){p(`Press ${(0,o.Ge)()?"\u2318":"Ctrl"}+Enter to ${e}`)}else"single"===u&&p(`Press Enter to ${e}`)}return n&&("chat"!==u||t)&&p(`${r.length}/${n}`,t&&r.length>=n),(0,s.jsx)(l.X7,{"data-testid":"InputInstructions",className:d,children:m})}},23083:(e,t,r)=>{r.d(t,{K:()=>i,O:()=>n});var o=r(30969),l=r(98170);class i{constructor(){this.formClearListener=void 0,this.lastWidgetMgr=void 0,this.lastFormId=void 0}manageFormClearListener(e,t,r){(0,l.bb)(this.formClearListener)&&this.lastWidgetMgr===e&&this.lastFormId===t||(this.disconnect(),(0,l.bM)(t)&&(this.formClearListener=e.addFormClearedListener(t,r),this.lastWidgetMgr=e,this.lastFormId=t))}disconnect(){var e;null===(e=this.formClearListener)||void 0===e||e.disconnect(),this.formClearListener=void 0,this.lastWidgetMgr=void 0,this.lastFormId=void 0}}function n(e){let{element:t,widgetMgr:r,onFormCleared:i}=e;(0,o.useEffect)((()=>{if(!(0,l.bM)(t.formId))return;const e=r.addFormClearedListener(t.formId,i);return()=>{e.disconnect()}}),[t,r,i])}},56643:(e,t,r)=>{r.r(t),r.d(t,{default:()=>j});var o=r(30969),l=r(99208),i=r(96857),n=r(3077),a=r(14800),s=r(80543),d=r(88330),u=r.n(d),c=r(98170),m=r(23083),p=r(1561),b=r(91439),g=r(63705),h=r(62606),f=r(77746),v=r(1813),y=r(85668),I=r(3146),w=r(83405);const x=(0,w.Z)("div",{target:"e116k4er3"})((e=>{let{theme:t}=e;return{display:"flex",flexDirection:"row",flexWrap:"nowrap",alignItems:"center",height:t.sizes.minElementHeight,borderWidth:t.sizes.borderWidth,borderStyle:"solid",borderColor:t.colors.widgetBorderColor||t.colors.widgetBackgroundColor||t.colors.bgColor,transitionDuration:"200ms",transitionProperty:"border",transitionTimingFunction:"cubic-bezier(0.2, 0.8, 0.4, 1)",borderRadius:t.radii.default,overflow:"hidden","&.focused":{borderColor:t.colors.primary},input:{MozAppearance:"textfield","&::-webkit-inner-spin-button, &::-webkit-outer-spin-button":{WebkitAppearance:"none",margin:t.spacing.none}}}}),""),C=(0,w.Z)("div",{target:"e116k4er2"})({name:"76z9jo",styles:"display:flex;flex-direction:row;align-self:stretch"}),T=(0,w.Z)("button",{target:"e116k4er1"})((e=>{let{theme:t}=e;return{margin:t.spacing.none,border:"none",height:t.sizes.full,display:"flex",alignItems:"center",width:"32px",justifyContent:"center",color:t.colors.bodyText,transition:"color 300ms, backgroundColor 300ms",backgroundColor:t.colors.widgetBackgroundColor||t.colors.secondaryBg,"&:hover:enabled, &:focus:enabled":{color:t.colors.white,backgroundColor:t.colors.primary,transition:"none",outline:"none"},"&:active":{outline:"none",border:"none"},"&:last-of-type":{borderTopRightRadius:t.radii.default,borderBottomRightRadius:t.radii.default},"&:disabled":{cursor:"not-allowed",color:t.colors.fadedText40}}}),""),k=(0,w.Z)("div",{target:"e116k4er0"})((e=>{let{theme:t,clearable:r}=e;return{position:"absolute",marginRight:t.spacing.twoXS,left:0,right:64+(r?12:0)+"px"}}),"");var R=r(37574);const F=e=>{let{step:t,dataType:r}=e;return t||(r===b.Y2.DataType.INT?1:.01)},D=e=>{let{value:t,format:r,step:o,dataType:l}=e;if((0,c.le)(t))return null;let i=function(e){return(0,c.le)(e)||""===e?void 0:e}(r);if((0,c.le)(i)&&(0,c.bb)(o)){const e=o.toString();if(l===b.Y2.DataType.FLOAT&&0!==o&&e.includes(".")){i=`%0.${e.split(".")[1].length}f`}}if((0,c.le)(i))return t.toString();try{return(0,a.sprintf)(i,t)}catch(n){return(0,p.KE)(`Error in sprintf(${i}, ${t}): ${n}`),String(t)}},j=(0,n.b)((e=>{var t;let{disabled:r,element:n,widgetMgr:a,width:d,theme:p,fragmentId:w}=e;const{dataType:j,id:N,formId:S,default:L,format:W}=n,E=n.hasMin?n.min:-1/0,M=n.hasMax?n.max:1/0,[B,Z]=o.useState(F(n)),$=(e=>{var t;const r=e.element.dataType===b.Y2.DataType.INT?e.widgetMgr.getIntValue(e.element):e.widgetMgr.getDoubleValue(e.element);return null!==(t=null!==r&&void 0!==r?r:e.element.default)&&void 0!==t?t:null})({element:n,widgetMgr:a}),[V,U]=o.useState(!1),[z,A]=o.useState($),[O,Y]=o.useState(D({value:$,...n,step:B})),[K,P]=o.useState(!1),H=o.useRef(null),G=o.useRef(new m.K),X=o.useRef(u()("number_input_")),_=((e,t,r)=>!(0,c.le)(e)&&e-t>=r)(z,B,E),q=((e,t,r)=>!(0,c.le)(e)&&e+t<=r)(z,B,M),J=(0,c.$b)({formId:S}),Q=a.allowFormEnterToSubmit(S);o.useEffect((()=>{Z(F({step:n.step,dataType:n.dataType}))}),[n.dataType,n.step]);const ee=o.useCallback((e=>{let{value:t,source:r}=e;if((0,c.bb)(t)&&(E>t||t>M)){var o;null===(o=H.current)||void 0===o||o.reportValidity()}else{var l;const e=null!==(l=null!==t&&void 0!==t?t:L)&&void 0!==l?l:null;switch(j){case b.Y2.DataType.INT:a.setIntValue({id:N,formId:S},e,r,w);break;case b.Y2.DataType.FLOAT:a.setDoubleValue({id:N,formId:S},e,r,w);break;default:throw new Error("Invalid data type")}U(!1),A(e),Y(D({value:e,dataType:j,format:W,step:B}))}}),[E,M,H,a,w,B,j,N,S,L,W]),te=()=>{const{value:e}=n;n.setValue=!1,A(null!==e&&void 0!==e?e:null),Y(D({value:null!==e&&void 0!==e?e:null,...n,step:B})),ee({value:null!==e&&void 0!==e?e:null,source:{fromUi:!1}})};o.useEffect((()=>{const e=G.current;return n.setValue?te():ee({value:z,source:{fromUi:!1}}),()=>{e.disconnect()}}),[]),n.setValue&&te();const re=(0,c.le)(n.default)&&!r;G.current.manageFormClearListener(a,n.formId,(()=>{var e;A(null!==(e=n.default)&&void 0!==e?e:null),ee({value:z,source:{fromUi:!0}})}));const oe=o.useCallback((()=>{q&&(U(!0),ee({value:(null!==z&&void 0!==z?z:E)+B,source:{fromUi:!0}}))}),[z,E,B,q]),le=o.useCallback((()=>{_&&(U(!0),ee({value:(null!==z&&void 0!==z?z:M)-B,source:{fromUi:!0}}))}),[z,M,B,_]),ie=o.useCallback((e=>{const{key:t}=e;switch(t){case"ArrowUp":e.preventDefault(),oe();break;case"ArrowDown":e.preventDefault(),le()}}),[oe,le]),ne=o.useCallback((e=>{"Enter"===e.key&&(V&&ee({value:z,source:{fromUi:!0}}),Q&&a.submitForm(S,w))}),[V,z,ee,a,S,w,Q]);return(0,R.jsxs)("div",{className:"stNumberInput","data-testid":"stNumberInput",style:{width:d},children:[(0,R.jsx)(y.O,{label:n.label,disabled:r,labelVisibility:(0,c.iF)(null===(t=n.labelVisibility)||void 0===t?void 0:t.value),htmlFor:X.current,children:n.help&&(0,R.jsx)(I.dT,{children:(0,R.jsx)(g.Z,{content:n.help,placement:h.u.TOP_RIGHT})})}),(0,R.jsxs)(x,{className:K?"focused":"","data-testid":"stNumberInputContainer",children:[(0,R.jsx)(s.Z,{type:"number",inputRef:H,value:null!==O&&void 0!==O?O:"",placeholder:n.placeholder,onBlur:()=>(V&&ee({value:z,source:{fromUi:!0}}),void P(!1)),onFocus:()=>{P(!0)},onChange:e=>(e=>{const{value:t}=e.target;if(""===t)U(!0),A(null),Y(null);else{let e;e=n.dataType===b.Y2.DataType.INT?parseInt(t,10):parseFloat(t),U(!0),A(e),Y(t)}})(e),onKeyPress:e=>ne(e),onKeyDown:e=>ie(e),clearable:re,clearOnEscape:re,disabled:r,"aria-label":n.label,id:X.current,overrides:{ClearIcon:{props:{overrides:{Svg:{style:{color:p.colors.darkGray,transform:"scale(1.4)",width:p.spacing.twoXL,marginRight:"-1.25em",":hover":{fill:p.colors.bodyText}}}}}},Input:{props:{"data-testid":"stNumberInputField",step:B,min:E,max:M},style:{lineHeight:p.lineHeights.inputWidget,paddingRight:p.spacing.sm,paddingLeft:p.spacing.sm,paddingBottom:p.spacing.sm,paddingTop:p.spacing.sm}},InputContainer:{style:()=>({borderTopRightRadius:0,borderBottomRightRadius:0})},Root:{style:()=>({borderTopRightRadius:0,borderBottomRightRadius:0,borderLeftWidth:0,borderRightWidth:0,borderTopWidth:0,borderBottomWidth:0})}}}),d>p.breakpoints.hideNumberInputControls&&(0,R.jsxs)(C,{children:[(0,R.jsx)(T,{"data-testid":"stNumberInputStepDown",onClick:le,disabled:!_||r,tabIndex:-1,children:(0,R.jsx)(f.Z,{content:l.W,size:"xs",color:_?"inherit":"disabled"})}),(0,R.jsx)(T,{"data-testid":"stNumberInputStepUp",onClick:oe,disabled:!q||r,tabIndex:-1,children:(0,R.jsx)(f.Z,{content:i.v,size:"xs",color:q?"inherit":"disabled"})})]})]}),d>p.breakpoints.hideWidgetDetails&&(0,R.jsx)(k,{clearable:re,children:(0,R.jsx)(v.Z,{dirty:V,value:null!==O&&void 0!==O?O:"",inForm:J,allowEnterToSubmit:Q||!J})})]})}))}}]);
//# sourceMappingURL=6643.ade23ac7.chunk.js.map