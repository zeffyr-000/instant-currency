import{a as o,j as l}from"./chunk-HQ3FPIOJ.js";var y=(E,i)=>{var t,a,r;let s="40px",c="0px",m=i.direction==="back",f=i.enteringEl,d=i.leavingEl,g=l(f),b=g.querySelector("ion-toolbar"),n=o();if(n.addElement(g).fill("both").beforeRemoveClass("ion-page-invisible"),m?n.duration(((t=i.duration)!==null&&t!==void 0?t:0)||200).easing("cubic-bezier(0.47,0,0.745,0.715)"):n.duration(((a=i.duration)!==null&&a!==void 0?a:0)||280).easing("cubic-bezier(0.36,0.66,0.04,1)").fromTo("transform",`translateY(${s})`,`translateY(${c})`).fromTo("opacity",.01,1),b){let e=o();e.addElement(b),n.addAnimation(e)}if(d&&m){n.duration(((r=i.duration)!==null&&r!==void 0?r:0)||200).easing("cubic-bezier(0.47,0,0.745,0.715)");let e=o();e.addElement(l(d)).onFinish(u=>{u===1&&e.elements.length>0&&e.elements[0].style.setProperty("display","none")}).fromTo("transform",`translateY(${c})`,`translateY(${s})`).fromTo("opacity",1,0),n.addAnimation(e)}return n};export{y as a};
