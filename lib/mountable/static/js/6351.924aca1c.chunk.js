"use strict";(self.webpackChunkstlite=self.webpackChunkstlite||[]).push([[6351],{17788:function(e,t,n){n.r(t),n.d(t,{default:function(){return ye}});var i=n(19065),r=n(95764),o=n(30969),a=n(47661),l=n(62276),d=n(24964),u=n(39215),s=n(89541),c=n(98588),h=n(58131),f=n(57994),g=n(98907),m=function(){function e(t){(0,f.Z)(this,e),this.editedCells=new Map,this.addedRows=[],this.deletedRows=[],this.numRows=0,this.numRows=t}return(0,g.Z)(e,[{key:"toJson",value:function(e){var t=new Map;e.forEach((function(e){t.set(e.indexNumber,e)}));var n={edited_cells:{},added_rows:[],deleted_rows:[]};return this.editedCells.forEach((function(e,i,r){e.forEach((function(e,r,o){var a=t.get(r);a&&(n.edited_cells["".concat(i,":").concat(r)]=a.getCellValue(e))}))})),this.addedRows.forEach((function(e){var i={};e.forEach((function(e,n,r){var o=t.get(n);if(o){var a=o.getCellValue(e);(0,h.bb)(a)&&(i[n]=a)}})),n.added_rows.push(i)})),n.deleted_rows=this.deletedRows,JSON.stringify(n,(function(e,t){return void 0===t?null:t}))}},{key:"isAddedRow",value:function(e){return e>=this.numRows}},{key:"getCell",value:function(e,t){if(this.isAddedRow(t))return this.addedRows[t-this.numRows].get(e);var n=this.editedCells.get(t);return void 0!==n?n.get(e):void 0}},{key:"setCell",value:function(e,t,n){if(this.isAddedRow(t)){if(t-this.numRows>=this.addedRows.length)return;this.addedRows[t-this.numRows].set(e,n)}else{void 0===this.editedCells.get(t)&&this.editedCells.set(t,new Map),this.editedCells.get(t).set(e,n)}}},{key:"addRow",value:function(e){this.addedRows.push(e)}},{key:"deleteRows",value:function(e){var t=this;e.sort((function(e,t){return t-e})).forEach((function(e){t.deleteRow(e)}))}},{key:"deleteRow",value:function(e){(0,h.le)(e)||e<0||(this.isAddedRow(e)?this.addedRows.splice(e-this.numRows,1):(this.deletedRows.includes(e)||(this.deletedRows.push(e),this.deletedRows=this.deletedRows.sort((function(e,t){return e-t}))),this.editedCells.delete(e)))}},{key:"getOriginalRowIndex",value:function(e){for(var t=e,n=0;n<this.deletedRows.length&&!(this.deletedRows[n]>t);n++)t+=1;return t}},{key:"getNumRows",value:function(){return this.numRows+this.addedRows.length-this.deletedRows.length}}]),e}(),v=n(41045),b=n(42421);var p=function(){var e=(0,b.u)();return{accentColor:e.colors.primary,accentFg:e.colors.white,accentLight:(0,v.DZ)(e.colors.primary,.9),borderColor:e.colors.fadedText05,horizontalBorderColor:e.colors.fadedText05,fontFamily:e.genericFonts.bodyFont,bgSearchResult:(0,v.DZ)(e.colors.primary,.9),bgIconHeader:e.colors.fadedText60,fgIconHeader:e.colors.white,bgHeader:e.colors.bgMix,bgHeaderHasFocus:e.colors.secondaryBg,bgHeaderHovered:e.colors.bgMix,textHeader:e.colors.fadedText60,textHeaderSelected:e.colors.white,textGroupHeader:e.colors.fadedText60,headerFontStyle:"".concat(e.fontSizes.sm),baseFontStyle:e.fontSizes.sm,editorFontSize:e.fontSizes.sm,textDark:e.colors.bodyText,textMedium:(0,v.DZ)(e.colors.bodyText,.2),textLight:e.colors.fadedText40,textBubble:e.colors.fadedText60,bgCell:e.colors.bgColor,bgCellMedium:e.colors.bgColor,cellHorizontalPadding:8,cellVerticalPadding:3,bgBubble:e.colors.secondaryBg,bgBubbleSelected:e.colors.secondaryBg,linkColor:e.colors.linkText,drilldownBorder:e.colors.darkenedBgMix25,tableBorderRadius:e.radii.md}},w=n(50576),y=n(16874),C=n(59019),x=n(80537),Z=n(27801),M=n.n(Z);function R(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return e="\u26a0\ufe0f ".concat(e),{kind:a.p6.Text,readonly:!0,allowOverlay:!0,data:e+(t?"\n\n".concat(t,"\n"):""),displayData:e,isError:!0}}function E(e){return e.hasOwnProperty("isError")&&e.isError}function k(e){return(0,r.Z)((0,r.Z)({id:e.id,title:e.title,hasMenu:!1,themeOverride:e.themeOverride},e.isStretched&&{grow:e.isIndex?1:3}),e.width&&{width:e.width})}function N(e,t){return(0,h.le)(e)?t||{}:(0,h.le)(t)?e||{}:(0,w.merge)(e,t)}function T(e){if((0,h.le)(e))return[];if("number"===typeof e||"boolean"===typeof e)return[e];if("string"===typeof e){if(""===e)return[];if(!e.trim().startsWith("[")||!e.trim().endsWith("]"))return e.split(",");try{return JSON.parse(e)}catch(n){return[e]}}try{var t=JSON.parse(JSON.stringify(e,(function(e,t){return"bigint"===typeof t?Number(t):t})));return(0,w.isArray)(t)?t.map((function(e){return["string","number","boolean","null"].includes(typeof e)?e:S(e)})):[S(t)]}catch(n){return[S(e)]}}function S(e){try{try{return(0,w.toString)(e)}catch(t){return JSON.stringify(e,(function(e,t){return"bigint"===typeof t?Number(t):t}))}}catch(t){return"[".concat(typeof e,"]")}}function O(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4,n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return!Number.isNaN(e)&&Number.isFinite(e)?(0===t&&(e=Math.round(e)),M()(e).format(n?"0,0.".concat("0".repeat(t)):"0,0.[".concat("0".repeat(t),"]"))):""}function A(e){var t={kind:a.p6.Text,data:"",displayData:"",allowOverlay:!0,contentAlignment:e.contentAlignment,readonly:!0,style:e.isIndex?"faded":"normal"};return(0,r.Z)((0,r.Z)({},e),{},{kind:"object",sortMode:"default",isEditable:!1,getCell:function(e){try{var n=(0,h.bb)(e)?S(e):null,i=(0,h.bb)(n)?n:"";return(0,r.Z)((0,r.Z)({},t),{},{data:n,displayData:i,isMissingValue:(0,h.le)(e)})}catch(o){return R(S(e),"The value cannot be interpreted as a string. Error: ".concat(o))}},getCellValue:function(e){return void 0===e.data?null:e.data}})}A.isEditableType=!1;var D=A;function H(e){var t={kind:a.p6.Text,data:"",displayData:"",allowOverlay:!0,contentAlignment:e.contentAlignment,readonly:!e.isEditable,style:e.isIndex?"faded":"normal"};return(0,r.Z)((0,r.Z)({},e),{},{kind:"text",sortMode:"default",getCell:function(e){try{var n=(0,h.bb)(e)?S(e):null,i=(0,h.bb)(n)?n:"";return(0,r.Z)((0,r.Z)({},t),{},{isMissingValue:(0,h.le)(n),data:n,displayData:i})}catch(o){return R("Incompatible value","The value cannot be interpreted as string. Error: ".concat(o))}},getCellValue:function(e){return void 0===e.data?null:e.data}})}H.isEditableType=!0;var I=H,z=["true","t","yes","y","on","1"],V=["false","f","no","n","off","0"];function W(e){var t={kind:a.p6.Boolean,data:!1,allowOverlay:!1,contentAlign:e.contentAlignment,readonly:!e.isEditable,style:e.isIndex?"faded":"normal"};return(0,r.Z)((0,r.Z)({},e),{},{kind:"boolean",sortMode:"default",getCell:function(e){var n=null;if((0,h.bb)(e))if("boolean"===typeof e)n=e;else{var i=String(e).toLowerCase().trim();if(""===i)n=null;else if(z.includes(i))n=!0;else{if(!V.includes(i))return R(S(e),"The value cannot be interpreted as boolean.");n=!1}}return(0,r.Z)((0,r.Z)({},t),{},{data:n})},getCellValue:function(e){return void 0===e.data?null:e.data}})}W.isEditableType=!0;var L=W;function B(e){var t=N({options:"bool"===x.fu.getTypeName(e.arrowType)?["true","false"]:[]},e.columnTypeMetadata),n={kind:a.p6.Custom,allowOverlay:e.isEditable,copyData:"",contentAlign:e.contentAlignment,data:{kind:"dropdown-cell",allowedValues:[""].concat((0,C.Z)(t.options.filter((function(e){return""!==e})))),value:"",readonly:!e.isEditable}};return(0,r.Z)((0,r.Z)({},e),{},{kind:"categorical",sortMode:"default",getCell:function(e){var t="";return(0,h.bb)(e)&&(t=S(e)),n.data.allowedValues.includes(t)?(0,r.Z)((0,r.Z)({},n),{},{isMissingValue:""===t,copyData:t,data:(0,r.Z)((0,r.Z)({},n.data),{},{value:t})}):R(S(t),"The value is not part of the allowed options.")},getCellValue:function(e){var t,n,i;return void 0===(null===(t=e.data)||void 0===t?void 0:t.value)||""===(null===(n=e.data)||void 0===n?void 0:n.value)?null:null===(i=e.data)||void 0===i?void 0:i.value}})}B.isEditableType=!0;var F=B;function j(e){var t={kind:a.p6.Bubble,data:[],allowOverlay:!0,contentAlign:e.contentAlignment,style:e.isIndex?"faded":"normal"};return(0,r.Z)((0,r.Z)({},e),{},{kind:"list",sortMode:"default",isEditable:!1,getCell:function(e){return(0,r.Z)((0,r.Z)({},t),{},{data:T(e),isMissingValue:(0,h.le)(e)})},getCellValue:function(e){return void 0===e.data?null:e.data}})}j.isEditableType=!1;var P=j;function _(e){var t=x.fu.getTypeName(e.arrowType),n=N({precision:t.startsWith("int")||"range"===t||t.startsWith("uint")?0:void 0,min:t.startsWith("uint")?0:void 0},e.columnTypeMetadata),i=(0,h.le)(n.min)||n.min<0,o=(0,h.bb)(n.precision)?n.precision:void 0,l={kind:a.p6.Number,data:void 0,displayData:"",readonly:!e.isEditable,allowOverlay:!0,contentAlign:e.contentAlignment||"right",style:e.isIndex?"faded":"normal",allowNegative:i,fixedDecimals:o};return(0,r.Z)((0,r.Z)({},e),{},{kind:"number",sortMode:"smart",getCell:function(e){var t=function(e){if((0,h.le)(e))return null;if((0,w.isArray)(e))return NaN;if("string"===typeof e){if(0===e.trim().length)return null;try{var t=M().unformat(e.trim());if((0,h.bb)(t))return t}catch(n){}}else if(e instanceof Int32Array)return Number(e[0]);return Number(e)}(e);if((0,h.bb)(t)){if(Number.isNaN(t))return R(S(e),"The value cannot be interpreted as a number.");(0,h.bb)(n.precision)&&(t=0===n.precision?Math.trunc(t):Math.trunc(t*Math.pow(10,n.precision))/Math.pow(10,n.precision)),(0,h.bb)(n.min)&&(t=Math.max(t,n.min)),(0,h.bb)(n.max)&&(t=Math.min(t,n.max))}return(0,r.Z)((0,r.Z)({},l),{},{data:t,displayData:(0,h.bb)(t)?O(t):"",isMissingValue:(0,h.le)(t)})},getCellValue:function(e){return void 0===e.data?null:e.data}})}_.isEditableType=!0;var J=_,Y=new Map(Object.entries({object:D,text:I,boolean:L,categorical:F,list:P,number:J}));function U(e,t,n){var i=new RegExp("".concat(e,"[,\\s].*{(?:[^}]*[\\s;]{1})?").concat(t,":\\s*([^;}]+)[;]?.*}"),"gm");n=n.replace(/{/g," {");var r=i.exec(n);if(r)return r[1].trim()}function G(e){return e.replace(/(\r\n|\n|\r)/gm," ")}function X(e,t){var n=e.types.index[t],i=e.indexNames[t],r=!0;return"range"===x.fu.getTypeName(n)&&(r=!1),{id:"index-".concat(t),isEditable:r,title:i,arrowType:n,isIndex:!0,isHidden:!1}}function K(e,t){var n,i=e.columns[0][t],r=e.types.data[t];if((0,h.le)(r)&&(r={meta:null,numpy_type:"object",pandas_type:"object"}),"categorical"===x.fu.getTypeName(r)){var o=e.getCategoricalOptions(t);(0,h.bb)(o)&&(n={options:[""].concat((0,C.Z)(o.filter((function(e){return""!==e}))))})}return{id:"column-".concat(i,"-").concat(t),isEditable:!0,title:i,arrowType:r,columnTypeMetadata:n,isIndex:!1,isHidden:!1}}function q(e,t){var n,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0;if(E(n="object"===e.kind?e.getCell((0,h.bb)(t.content)?G(x.fu.format(t.content,t.contentType,t.field)):null):e.getCell(t.content)))return n;if((0,h.bb)(t.displayContent)){var o=G(t.displayContent);(n.kind===a.p6.Text||n.kind===a.p6.Number)&&(n=(0,r.Z)((0,r.Z)({},n),{},{displayData:o}))}return i&&t.cssId&&(n=function(e,t,n){var i={},o=U(t,"color",n);o&&(i.textDark=o);var a=U(t,"background-color",n);return a&&(i.bgCell=a),i?(0,r.Z)((0,r.Z)({},e),{},{themeOverride:i}):e}(n,t.cssId,i)),n}var Q="index",$="col:";function ee(e){var t;return(0,h.bb)(e.customType)&&(Y.has(e.customType)?t=Y.get(e.customType):(0,y.KE)("Unknown column type configured in column configuration: ".concat(e.customType))),(0,h.le)(t)&&(t=function(e){var t=e?x.fu.getTypeName(e):null;return t?(t=t.toLowerCase().trim(),["unicode","empty"].includes(t)?I:["object","date","time","datetime","datetimetz","decimal","bytes"].includes(t)?D:["bool"].includes(t)?L:["int8","int16","int32","int64","uint8","uint16","uint32","uint64","float16","float32","float64","float96","float128","range"].includes(t)?J:"categorical"===t?F:t.startsWith("list")?P:D):D}(e.arrowType)),t}var te=function(e,t,n,a,l){var d=function(e){if(!e.columns)return new Map;try{return new Map(Object.entries(JSON.parse(e.columns)))}catch(t){return(0,y.H)(t),new Map}}(e),u=e.useContainerWidth||(0,h.bb)(e.width)&&e.width>0,s=function(e){var t,n,i,o,a,l,d=[],u=null!==(t=null===(n=e.types)||void 0===n||null===(i=n.index)||void 0===i?void 0:i.length)&&void 0!==t?t:0,s=null!==(o=null===(a=e.columns)||void 0===a||null===(l=a[0])||void 0===l?void 0:l.length)&&void 0!==o?o:0;if(0===u&&0===s)return d.push({id:"empty-index",title:"",indexNumber:0,isEditable:!1,isIndex:!0}),d;for(var c=0;c<u;c++){var h=(0,r.Z)((0,r.Z)({},X(e,c)),{},{indexNumber:c});d.push(h)}for(var f=0;f<s;f++){var g=(0,r.Z)((0,r.Z)({},K(e,f)),{},{indexNumber:f+u});d.push(g)}return d}(t).map((function(t){var n=(0,r.Z)((0,r.Z)((0,r.Z)({},t),function(e,t){var n,i;return t?(t.has(e.title)?i=t.get(e.title):t.has("".concat($).concat(e.indexNumber))?i=t.get("".concat($).concat(e.indexNumber)):e.isIndex&&t.has(Q)&&(i=t.get(Q)),i?(0,w.merge)((0,r.Z)({},e),{title:i.title,width:i.width,customType:null===(n=i.type)||void 0===n?void 0:n.toLowerCase().trim(),isEditable:i.editable,isHidden:i.hidden,columnTypeMetadata:i.metadata,contentAlignment:i.alignment}):e):e}(t,d)),{},{isStretched:u}),i=ee(n);return(e.editingMode===c.Eh.EditingMode.READ_ONLY||a||!1===i.isEditableType)&&(n=(0,r.Z)((0,r.Z)({},n),{},{isEditable:!1})),i(n)})).filter((function(e){return!e.isHidden})),f=s.length>0?s:[D({id:"empty-index",title:"",indexNumber:0,isEditable:!1,isIndex:!0})],g=o.useCallback((function(e){var r=(0,i.Z)(e,2),o=r[0],a=r[1];if(o>f.length-1)return R("Column index out of bounds.","This should never happen. Please report this bug.");if(a>n-1)return R("Row index out of bounds.","This should never happen. Please report this bug.");var d=f[o],u=d.indexNumber,s=l.current.getOriginalRowIndex(a);if(d.isEditable||l.current.isAddedRow(s)){var c=l.current.getCell(u,s);if(void 0!==c)return c}try{return q(d,t.getCell(s+1,u),t.cssStyles)}catch(h){return(0,y.H)(h),R("Error during cell creation.","This should never happen. Please report this bug. \nError: ".concat(h))}}),[f,n,t,l]);return{columns:f,getCellContent:g}},ne=35,ie=52,re=2*ne+3,oe=400;var ae=function(e,t,n,r,a){var l,d=function(e){return Math.max(e*ne+1+2,re)}(t+1+(e.editingMode===c.Eh.EditingMode.DYNAMIC?1:0)),u=Math.min(d,oe);e.height&&(u=Math.max(e.height,re),d=Math.max(e.height,d)),r&&(u=Math.min(u,r),d=Math.min(d,r),e.height||(u=d));var s=n;e.useContainerWidth?l=n:e.width&&(l=Math.min(Math.max(e.width,ie),n),s=Math.min(Math.max(e.width,s),n));var f=o.useState({width:l||"100%",height:u}),g=(0,i.Z)(f,2),m=g[0],v=g[1];return o.useLayoutEffect((function(){e.useContainerWidth&&"100%"===m.width&&v({width:n,height:m.height})}),[n]),o.useLayoutEffect((function(){v({width:m.width,height:u})}),[t]),o.useLayoutEffect((function(){v({width:l||"100%",height:m.height})}),[l]),o.useLayoutEffect((function(){v({width:m.width,height:u})}),[u]),o.useLayoutEffect((function(){if(a){var t=e.useContainerWidth||(0,h.bb)(e.width)&&e.width>0;v({width:t?s:"100%",height:d})}else v({width:l||"100%",height:u})}),[a]),{rowHeight:ne,minHeight:re,maxHeight:d,minWidth:ie,maxWidth:s,resizableSize:m,setResizableSize:v}};var le=function(e,t,n,a,l,d,u){var s=o.useCallback((function(t,o){var d=(0,i.Z)(t,2),s=d[0],c=d[1],h=e[s],f=h.indexNumber,g=n.current.getOriginalRowIndex(l(c)),m=a([s,c]),v=h.getCellValue(m),b=h.getCellValue(o);if(E(m)||b!==v){var p=h.getCell(b);n.current.setCell(f,g,(0,r.Z)((0,r.Z)({},p),{},{lastUpdated:performance.now()})),u()}}),[e,n,l,a,u]),c=o.useCallback((function(){if(!t){var i=new Map;e.forEach((function(e){i.set(e.indexNumber,e.getCell(void 0))})),n.current.addRow(i),u(!1,!1)}}),[e,n,t]),h=o.useCallback((function(i){var r;if(i.rows.length>0){if(t)return!0;var o=i.rows.toArray().map((function(e){return n.current.getOriginalRowIndex(l(e))}));return n.current.deleteRows(o),u(!0),!1}if(null!==(r=i.current)&&void 0!==r&&r.range){for(var a=[],c=i.current.range,h=c.y;h<c.y+c.height;h++)for(var f=c.x;f<c.x+c.width;f++){var g=e[f];g.isEditable&&(a.push({cell:[f,h]}),s([f,h],g.getCell(null)))}return a.length>0&&(u(),d(a)),!1}return!0}),[e,n,t,d,l,u]),f=o.useCallback((function(o,s){for(var h=(0,i.Z)(o,2),f=h[0],g=h[1],m=[],v=0;v<s.length;v++){var b=s[v];if(v+g>=n.current.getNumRows()){if(t)break;c()}for(var p=0;p<b.length;p++){var w=b[p],y=v+g,C=p+f;if(C>=e.length)break;var x=e[C];if(x.isEditable){var Z=x.getCell(w);if(!E(Z)){var M=x.indexNumber,R=n.current.getOriginalRowIndex(l(y)),k=x.getCellValue(a([C,y]));x.getCellValue(Z)!==k&&(n.current.setCell(M,R,(0,r.Z)((0,r.Z)({},Z),{},{lastUpdated:performance.now()})),m.push({cell:[C,y]}))}}}m.length>0&&(u(),d(m))}return!1}),[e,n,t,l,a,c,u,d]);return{onCellEdited:s,onPaste:f,onRowAppended:c,onDelete:h}};var de=function(e){var t=(0,o.useState)((function(){return new Map})),n=(0,i.Z)(t,2),a=n[0],l=n[1],d=o.useCallback((function(e,t,n,i){e.id&&l(new Map(a).set(e.id,i))}),[a]);return{columns:e.map((function(e){return e.id&&a.has(e.id)&&void 0!==a.get(e.id)?(0,r.Z)((0,r.Z)({},e),{},{width:a.get(e.id),grow:0}):e})),onColumnResize:d}},ue=n(4486);var se=function(e,t,n){var a=o.useState(),l=(0,i.Z)(a,2),d=l[0],u=l[1],s=(0,ue.fF)({columns:t.map((function(e){return k(e)})),getCellContent:n,rows:e,sort:d}),c=s.getCellContent,h=s.getOriginalIndex,f=function(e,t){return void 0===t?e:e.map((function(e){return e.id===t.column.id?(0,r.Z)((0,r.Z)({},e),{},{title:"asc"===t.direction?"\u2191 ".concat(e.title):"\u2193 ".concat(e.title)}):e}))}(t,d),g=o.useCallback((function(e){var t="asc",n=f[e];if(d&&d.column.id===n.id){if("asc"!==d.direction)return void u(void 0);t="desc"}u({column:k(n),direction:t,mode:n.sortMode})}),[d,f]);return{columns:f,sortColumn:g,getOriginalIndex:h,getCellContent:c}},ce=n(16798),he=(0,n(13137).Z)("div",{target:"e17g77xh0"})((function(e){var t;return{position:"relative",display:"inline-block","& .glideDataEditor":{height:"100%",minWidth:"100%",borderRadius:e.theme.radii.md},"& .dvn-scroller":(t={scrollbarWidth:"thin"},(0,ce.Z)(t,"overflowX","overlay !important"),(0,ce.Z)(t,"overflowY","overlay !important"),t)}}),""),fe=(n(12574),n(37574)),ge=50,me=1e3,ve=500,be=100,pe=15e4,we=function(e){var t=e.cell,n=e.theme;return!!function(e){return e.hasOwnProperty("isMissingValue")&&e.isMissingValue}(t)&&((0,a.uN)((0,r.Z)((0,r.Z)({},e),{},{theme:(0,r.Z)((0,r.Z)({},n),{},{textDark:n.textLight,textMedium:n.textLight}),spriteManager:{},hyperWrapping:!1}),"None",t.contentAlign),!0)};var ye=(0,s.Z)((function(e){var t=e.element,n=e.data,s=e.width,f=e.height,g=e.disabled,v=e.widgetMgr,b=e.isFullScreen,w=o.useRef(null),y=o.useRef(null),C=(0,l.Bn)(),x=p(),Z=o.useState(!0),M=(0,i.Z)(Z,2),R=M[0],E=M[1],N=o.useState({columns:a.EV.empty(),rows:a.EV.empty(),current:void 0}),T=(0,i.Z)(N,2),S=T[0],O=T[1],A=o.useCallback((function(){O({columns:a.EV.empty(),rows:a.EV.empty(),current:void 0})}),[]),D=o.useCallback((function(e){var t;null===(t=y.current)||void 0===t||t.updateCells(e)}),[]);(0,h.le)(t.editingMode)&&(t.editingMode=c.Eh.EditingMode.READ_ONLY);var H=c.Eh.EditingMode,I=H.READ_ONLY,z=H.DYNAMIC,V=n.dimensions,W=Math.max(0,V.rows-1),L=0===W&&!(t.editingMode===z&&V.dataColumns>0),B=W>pe,F=o.useRef(new m(W)),j=o.useState(F.current.getNumRows()),P=(0,i.Z)(j,2),_=P[0],J=P[1];o.useEffect((function(){F.current=new m(W),J(F.current.getNumRows())}),[W]);var Y=o.useCallback((function(){F.current=new m(W),J(F.current.getNumRows())}),[W]),U=te(t,n,_,g,F),G=U.columns,X=U.getCellContent,K=se(W,G,X),q=K.columns,Q=K.sortColumn,$=K.getOriginalIndex,ee=K.getCellContent,ne=o.useCallback((function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];_!==F.current.getNumRows()&&J(F.current.getNumRows()),e&&A(),n&&(0,h.Ds)(be,(function(){var e=F.current.toJson(q),n=v.getStringValue(t);void 0===n&&(n=new m(0).toJson([])),e!==n&&v.setStringValue(t,e,{fromUi:!0})}))()}),[v,t,_]),ie=le(q,t.editingMode!==z,F,ee,$,D,ne),re=ie.onCellEdited,oe=ie.onPaste,ue=ie.onRowAppended,ce=ie.onDelete,ye=de(q.map((function(e){return k(e)}))),Ce=ye.columns,xe=ye.onColumnResize,Ze=ae(t,_,s,f,b),Me=Ze.rowHeight,Re=Ze.minHeight,Ee=Ze.maxHeight,ke=Ze.minWidth,Ne=Ze.maxWidth,Te=Ze.resizableSize,Se=Ze.setResizableSize,Oe=o.useCallback((function(e){var t=(0,i.Z)(e,2);t[0],t[1];return(0,r.Z)((0,r.Z)({},function(e,t){var n=t?"faded":"normal";return{kind:a.p6.Text,data:"",displayData:"",allowOverlay:!0,readonly:e,style:n}}(!0,!1)),{},{displayData:"empty",contentAlign:"center",allowOverlay:!1,themeOverride:{textDark:x.textLight},span:[0,Math.max(q.length-1,0)]})}),[q]);return o.useEffect((function(){var e=new u.Kz;return e.manageFormClearListener(v,t.formId,Y),function(){e.disconnect()}}),[]),(0,fe.jsx)(he,{className:"stDataFrame",onBlur:function(){R||A()},children:(0,fe.jsx)(d.e,{"data-testid":"stDataFrameResizable",ref:w,defaultSize:Te,style:{border:"1px solid ".concat(x.borderColor),borderRadius:"".concat(x.tableBorderRadius)},minHeight:Re,maxHeight:Ee,minWidth:ke,maxWidth:Ne,size:Te,enable:{top:!1,right:!1,bottom:!1,left:!1,topRight:!1,bottomRight:!0,bottomLeft:!1,topLeft:!1},grid:[1,Me],snapGap:Me/3,onResizeStop:function(e,t,n,i){w.current&&Se({width:w.current.size.width,height:Ee-w.current.size.height===3?w.current.size.height+3:w.current.size.height})},children:(0,fe.jsx)(a.Nd,(0,r.Z)((0,r.Z)({className:"glideDataEditor",ref:y,columns:Ce,rows:L?1:_,minColumnWidth:ge,maxColumnWidth:me,maxColumnAutoWidth:ve,rowHeight:Me,headerHeight:Me,getCellContent:L?Oe:ee,onColumnResize:xe,freezeColumns:L?0:q.filter((function(e){return e.isIndex})).length,smoothScrollX:!0,smoothScrollY:!0,verticalBorder:function(e){return!(e>=q.length&&(t.useContainerWidth||"100%"===Te.width))},getCellsForSelection:!0,rowMarkers:"none",rangeSelect:"rect",columnSelect:"none",rowSelect:"none",keybindings:{search:!0,downFill:!0},onHeaderClicked:L||B?void 0:Q,gridSelection:S,onGridSelectionChange:O,drawCell:we,theme:x,onMouseMove:function(e){"out-of-bounds"===e.kind&&R?E(!1):"out-of-bounds"===e.kind||R||E(!0)},fixedShadowX:!0,fixedShadowY:!0,experimental:{scrollbarWidthOverride:1},customRenderers:C.customRenderers,onPaste:!1},!L&&t.editingMode!==I&&!g&&{fillHandle:!0,onCellEdited:re,onPaste:oe,onDelete:ce}),!L&&t.editingMode===z&&{trailingRowOptions:{sticky:!1,tint:!0},rowMarkerTheme:{bgCell:x.bgHeader,bgCellMedium:x.bgHeader},rowMarkers:"checkbox",rowSelectionMode:"auto",rowSelect:g?"none":"multi",onRowAppended:g?void 0:ue,onHeaderClicked:void 0}))})})}))}}]);
//# sourceMappingURL=6351.924aca1c.chunk.js.map