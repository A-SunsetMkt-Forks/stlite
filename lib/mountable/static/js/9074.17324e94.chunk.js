"use strict";(self.webpackChunkstlite=self.webpackChunkstlite||[]).push([[9074],{29074:(e,t,r)=>{r.r(t),r.d(t,{default:()=>d});var n=r(30969),s=r(19186),u=r(37574);function d(e){let{element:t,width:r,endpoints:d}=e;const i=(0,n.useRef)(null),{startTime:a,endTime:c,loop:o}=t;(0,n.useEffect)((()=>{i.current&&(i.current.currentTime=a)}),[a]),(0,n.useEffect)((()=>{const e=i.current,r=()=>{e&&(e.currentTime=t.startTime)};return e&&e.addEventListener("loadedmetadata",r),()=>{e&&e.removeEventListener("loadedmetadata",r)}}),[t]),(0,n.useEffect)((()=>{const e=i.current;if(!e)return;let t=!1;const r=()=>{c>0&&e.currentTime>=c&&(o?(e.currentTime=a||0,e.play()):t||(t=!0,e.pause()))};return c>0&&e.addEventListener("timeupdate",r),()=>{e&&c>0&&e.removeEventListener("timeupdate",r)}}),[c,o,a]),(0,n.useEffect)((()=>{const e=i.current;if(!e)return;const t=()=>{o&&(e.currentTime=a||0,e.play())};return e.addEventListener("ended",t),()=>{e&&e.removeEventListener("ended",t)}}),[o,a]);const l=(0,s.O0)(t.url),m=d.buildMediaURL(l);return(0,u.jsx)("audio",{"data-testid":"stAudio",id:"audio",ref:i,controls:!0,src:m,className:"stAudio",style:{width:r}})}}}]);
//# sourceMappingURL=9074.17324e94.chunk.js.map