import{c as O}from"./chunk-LYME6JKK.js";O();var $=class{constructor(){this.queue=[]}add(n){return this.queue.push(new M(n)),this}play(){this.queue.forEach(n=>n.play())}},q={targets:null,duration:1/0,easing:"linear",delay:0,begin:null,update:null,complete:null},T=()=>{let t={linear:()=>r=>r},n={Sine:()=>r=>1-Math.cos(r*Math.PI/2),Circ:()=>r=>1-Math.sqrt(1-r*r),Back:()=>r=>r*r*(3*r-2),Bounce:()=>r=>{let l,a=4;for(;r<((l=Math.pow(2,--a))-1)/11;);return 1/Math.pow(4,3-a)-7.5625*Math.pow((l*3-2)/22-r,2)}};return["Quad","Cubic","Quart","Quint","Expo"].forEach((r,l)=>{n[r]=()=>a=>Math.pow(a,l+2)}),Object.keys(n).forEach(r=>{let l=n[r];t["easeIn"+r]=l,t["easeOut"+r]=()=>a=>1-l()(1-a),t["easeInOut"+r]=()=>a=>a<.5?l()(a*2)/2:1-l()(a*-2+2)/2,t["easeOutIn"+r]=()=>a=>a<.5?(1-l()(1-a*2))/2:(l()(a*2-1)+1)/2}),t},j=["translateX","translateY","translateZ"],x=(t,n)=>t instanceof HTMLElement&&t.style&&"transform"in t.style&&j.includes(n)?"transform":t instanceof HTMLElement&&t.style&&n in t.style?"style":"attribute",F=t=>{let n=Date.now()+t.delay,w=n+t.duration,r=!!t.targets,l=[],a=()=>{if(r){Array.isArray(t.targets)||(t.targets=[t.targets]);for(let s of t.targets){let i={};for(let o in t.dest){let e=t.dest[o];if(Array.isArray(e))if(e.length===2&&typeof e[0]!="object"){switch(x(s,o)){case"transform":typeof e[0]=="string"?s.style.transform=`${o}(${e[0]})`:s.style.transform=`${o}(${e[0]}px)`;break;case"style":s.style[o]=e[0];break;case"attribute":s[o]=e[0];break}i[o]=e[0],t.dest[o]=e[1]}else{let u=0;for(let f of e)f.startTimeStamp=u,u+=f.duration;i[o]=s[o]}else switch(x(s,o)){case"transform":let f=new RegExp(`${o}((w+))`,"g");i[o]=s.style.transform.match(f)[0];break;case"style":i[o]=s.style[o];break;case"attribute":i[o]=s[o]}}l.push(i)}}},p=(s,i,o,e,u,f=!1)=>{let h;if(typeof e=="string")if(e.endsWith("%"))h="%",e=parseFloat(e);else if(e.endsWith("px"))h="px",e=parseFloat(e);else throw new TypeError("string value must ends with '%' or 'px'");let c=f?e:(e-i)*o+i;switch(h&&(c+=h),x(s,u)){case"transform":h?s.style.transform=`${u}(${c})`:s.style.transform=`${u}(${c}px)`;break;case"style":s.style[u]=c;break;case"attribute":s[u]=c}},E=(s,i,o=!1)=>{t.targets.forEach((e,u)=>{Object.keys(t.dest).forEach(f=>{let h=parseFloat(l[u][f]),c=t.dest[f];if(typeof c=="object")if(Array.isArray(c)){let y=0;for(;y<c.length&&!(i-n<c[y].startTimeStamp);y++);let{value:g,duration:b,easing:A,startTimeStamp:I}=c[y-1];i<=n+b+I?(s=T()[A||t.easing]()((i-n)/b),p(e,h,s,g,f)):o&&p(e,h,s,g,f,o)}else{let{value:y,duration:g,easing:b}=c;i<=n+g?(s=T()[b||t.easing]()((i-n)/g),p(e,h,s,y,f)):o&&p(e,h,s,y,f,o)}else typeof c=="function"&&(c=c(e,u)),p(e,h,s,c,f,o)})})},d=()=>{let s=Date.now();if(s>w){E(1,s,!0),typeof t.complete=="function"&&t.complete(t.targets),t.isPlay=!1;return}if(s<n){requestAnimationFrame(d);return}let i=T()[t.easing]()((s-n)/t.duration);r&&E(i,s),typeof t.update=="function"&&t.update(t.targets),requestAnimationFrame(d)};a(),typeof t.begin=="function"&&t.begin(t.targets),d()},M=class{constructor(n=q){n=Object.assign({},q,n);let{targets:w,duration:r,easing:l,delay:a,begin:p,update:E,complete:d,...s}=n;this.targets=w,this.duration=r,this.easing=l,this.delay=a,this.begin=p,this.update=E,this.complete=d,this.dest=s||{},this.tl=null,this.isPlay=!1}timeline(){return this.tl===null&&(this.tl=new $),this.tl}play(){this.isPlay||(this.isPlay=!0,F(this))}},P=t=>new M(t);P.random=function(t,n){return Math.floor(Math.random()*(n-t+1))+t};export{P as a};
/*! For license information please see chunk-ETYUGVIS.js.LEGAL.txt */
