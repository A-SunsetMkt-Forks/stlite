(self.webpackChunkstlite=self.webpackChunkstlite||[]).push([[8727],{17822:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>h});var s=n(30969),i=n(85229),o=n(51856),r=n(1561),d=n(2313);const l=(0,n(83405).Z)("div",{target:"e1uym6o70"})((e=>{let{theme:t,isFullScreen:n}=e;return{"& *":{fontFamily:t.genericFonts.bodyFont,fontSize:"9.6px"},"& svg":{maxWidth:"100%",width:n?"100%":"auto",height:n?"100%":"auto"},width:n?"100%":"auto",height:n?"100%":"auto"}}),"");var a=n(37574);const h=(0,d.Z)((function(e){let{element:t,isFullScreen:n}=e;const d=`st-graphviz-chart-${t.elementId}`;return(0,s.useEffect)((()=>{try{if((0,o.graphviz)(`#${d}`).zoom(!1).fit(!0).scale(1).engine(t.engine).renderDot(t.spec),n||t.useContainerWidth){const e=(0,i.Ys)(`#${d} > svg`).node();e.removeAttribute("width"),e.removeAttribute("height")}}catch(e){(0,r.H)(e)}}),[d,t.engine,t.spec,t.useContainerWidth,n]),(0,a.jsx)(l,{className:"stGraphVizChart","data-testid":"stGraphVizChart",id:d,isFullScreen:n})}))},2313:(e,t,n)=>{"use strict";n.d(t,{Z:()=>f});var s=n(30969),i=n(47814),o=n.n(i),r=n(3077),d=n(63973),l=n(50797),a=n(77746),h=n(64756),c=n(83405);const u=(0,c.Z)("button",{target:"e1vs0wn31"})((e=>{let{isExpanded:t,theme:n}=e;const s=t?{right:"0.4rem",top:"0.5rem",backgroundColor:"transparent"}:{right:"-3.0rem",top:"-0.375rem",opacity:0,transform:"scale(0)",backgroundColor:n.colors.lightenedBg05};return{position:"absolute",display:"flex",alignItems:"center",justifyContent:"center",zIndex:n.zIndices.sidebar+1,height:"2.5rem",width:"2.5rem",transition:"opacity 300ms 150ms, transform 300ms 150ms",border:"none",color:n.colors.fadedText60,borderRadius:"50%",...s,"&:focus":{outline:"none"},"&:active, &:focus-visible, &:hover":{opacity:1,outline:"none",transform:"scale(1)",color:n.colors.bodyText,transition:"none"}}}),""),p=(0,c.Z)("div",{target:"e1vs0wn30"})((e=>{let{theme:t,isExpanded:n}=e;return{"&:hover":{[u]:{opacity:1,transform:"scale(1)",transition:"none"}},...n?{position:"fixed",top:0,left:0,bottom:0,right:0,background:t.colors.bgColor,zIndex:t.zIndices.fullscreenWrapper,padding:t.spacing.md,paddingTop:t.sizes.fullScreenHeaderHeight,overflow:["auto","overlay"],display:"flex",alignItems:"center",justifyContent:"center"}:{}}}),"");var m=n(37574);class g extends s.PureComponent{constructor(e){super(e),this.context=void 0,this.controlKeys=e=>{const{expanded:t}=this.state;27===e.keyCode&&t&&this.zoomOut()},this.zoomIn=()=>{document.body.style.overflow="hidden",this.context.setFullScreen(!0),this.setState({expanded:!0})},this.zoomOut=()=>{document.body.style.overflow="unset",this.context.setFullScreen(!1),this.setState({expanded:!1})},this.convertScssRemValueToPixels=e=>parseFloat(e)*parseFloat(getComputedStyle(document.documentElement).fontSize),this.getWindowDimensions=()=>{const e=this.convertScssRemValueToPixels(this.props.theme.spacing.md),t=this.convertScssRemValueToPixels(this.props.theme.sizes.fullScreenHeaderHeight);return{fullWidth:window.innerWidth-2*e,fullHeight:window.innerHeight-(e+t)}},this.updateWindowDimensions=()=>{this.setState(this.getWindowDimensions())},this.state={expanded:!1,...this.getWindowDimensions()}}componentDidMount(){window.addEventListener("resize",this.updateWindowDimensions),document.addEventListener("keydown",this.controlKeys,!1)}componentWillUnmount(){window.removeEventListener("resize",this.updateWindowDimensions),document.removeEventListener("keydown",this.controlKeys,!1)}render(){const{expanded:e,fullWidth:t,fullHeight:n}=this.state,{children:s,width:i,height:o,disableFullscreenMode:r}=this.props;let h=d.d,c=this.zoomIn,g="View fullscreen";return e&&(h=l.m,c=this.zoomOut,g="Exit fullscreen"),(0,m.jsxs)(p,{isExpanded:e,"data-testid":"stFullScreenFrame",children:[!r&&(0,m.jsx)(u,{"data-testid":"StyledFullScreenButton",onClick:c,title:g,isExpanded:e,children:(0,m.jsx)(a.Z,{content:h})}),s(e?{width:t,height:n,expanded:e,expand:this.zoomIn,collapse:this.zoomOut}:{width:i,height:o,expanded:e,expand:this.zoomIn,collapse:this.zoomOut})]})}}g.contextType=h.E;const x=(0,r.b)(g);const f=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];class n extends s.PureComponent{constructor(){super(...arguments),this.render=()=>{const{width:n,height:s,disableFullscreenMode:i}=this.props;return(0,m.jsx)(x,{width:n,height:s,disableFullscreenMode:t||i,children:t=>{let{width:n,height:s,expanded:i,expand:o,collapse:r}=t;return(0,m.jsx)(e,{...this.props,width:n,height:s,isFullScreen:i,expand:o,collapse:r})}})}}}return n.displayName=`withFullScreenWrapper(${e.displayName||e.name})`,o()(n,e)}},63778:()=>{},32725:()=>{},14966:()=>{}}]);
//# sourceMappingURL=8727.c7323d08.chunk.js.map