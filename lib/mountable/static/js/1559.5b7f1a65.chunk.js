"use strict";(self.webpackChunkstlite=self.webpackChunkstlite||[]).push([[1559],{91559:(e,t,r)=>{r.r(t),r.d(t,{default:()=>c});var n=r(30969),s=r(91439),a=r(69016),i=r(19186),d=r(37574);const o=528;function c(e){let{element:t,width:r,endpoints:c}=e;const l=(0,n.useRef)(null),{type:u,url:m,startTime:p,subtitles:f,endTime:h,loop:v}=t,E=(0,i.O0)(m),T=(0,i.KA)(f);(0,n.useEffect)((()=>{l.current&&(l.current.currentTime=p)}),[p]),(0,n.useEffect)((()=>{const e=l.current,r=()=>{e&&(e.currentTime=t.startTime)};return e&&e.addEventListener("loadedmetadata",r),()=>{e&&e.removeEventListener("loadedmetadata",r)}}),[t]),(0,n.useEffect)((()=>{const e=l.current;if(!e)return;let t=!1;const r=()=>{h>0&&e.currentTime>=h&&(v?(e.currentTime=p||0,e.play()):t||(t=!0,e.pause()))};return h>0&&e.addEventListener("timeupdate",r),()=>{e&&h>0&&e.removeEventListener("timeupdate",r)}}),[h,v,p]),(0,n.useEffect)((()=>{const e=l.current;if(!e)return;const t=()=>{v&&(e.currentTime=p||0,e.play())};return e.addEventListener("ended",t),()=>{e&&e.removeEventListener("ended",t)}}),[v,p]);const y=e=>{const{startTime:r,endTime:n,loop:s}=t,a=new URL(e);if(r&&!isNaN(r)&&a.searchParams.append("start",r.toString()),n&&!isNaN(n)&&a.searchParams.append("end",n.toString()),s){a.searchParams.append("loop","1");const e=a.pathname.split("/").pop();e&&a.searchParams.append("playlist",e)}return a.toString()};if(u===s.nk.Type.YOUTUBE_IFRAME){const e=0!==r?.75*r:o;return(0,d.jsx)("iframe",{"data-testid":"stVideo",title:E,src:y(E),width:r,height:e,style:{colorScheme:"normal"},frameBorder:"0",allow:"autoplay; encrypted-media",allowFullScreen:!0})}return(0,d.jsx)("video",{"data-testid":"stVideo",ref:l,controls:!0,src:c.buildMediaURL(E),className:"stVideo",style:{width:r,height:0===r?o:void 0},crossOrigin:a.td&&T.length>0?"anonymous":void 0,children:T&&T.map(((e,t)=>(0,d.jsx)("track",{kind:"captions",src:c.buildMediaURL(e.url),label:e.label,default:0===t},t)))})}}}]);
//# sourceMappingURL=1559.5b7f1a65.chunk.js.map