import{b as y,e as N,i as A,j as x}from"./chunk-2YXICMYP.js";import{a as u,b}from"./chunk-YF3OF5AX.js";import{b as i,c as w,e as v,i as L,j as k,s as m}from"./chunk-7CEZKU5F.js";import"./chunk-ETYUGVIS.js";import{c as f}from"./chunk-LYME6JKK.js";f();f();var E=r=>{i(r+" .md img")&&(x("fancybox"),x("justifiedGallery"),A("fancybox",()=>{let e=jQuery.noConflict();i.each(r+" p.gallery",t=>{let a=document.createElement("div");a.className="gallery",a.setAttribute("data-height",String(t.getAttribute("data-height")||220)),a.innerHTML=t.innerHTML.replace(/<br>/g,""),t.parentNode.insertBefore(a,t),t.remove()}),i.each(r+" .md img:not(.emoji):not(.vemoji)",t=>{let a=e(t),o=a.attr("data-src")||a.attr("src"),c=a.wrap('<a class="fancybox" href="'+o+'" itemscope itemtype="https://schema.org/ImageObject" itemprop="url"></a>').parent("a"),n,l="image-info";if(a.is("a img")||(a.data("safe-src",o),a.is(".gallery img")?l="jg-caption":c.attr("data-fancybox","default").attr("rel","default")),n=t.getAttribute("title")){c.attr("data-caption",n);let p=document.createElement("span"),s=document.createTextNode(n);p.appendChild(s),p.addClass(l),w(t,p)}}),i.each(r+" div.gallery",(t,a)=>{e(t).justifiedGallery({rowHeight:e(t).data("height")||120,rel:"gallery-"+a}).on("jg.complete",function(){e(this).find("a").each((o,c)=>{c.setAttribute("data-fancybox","gallery-"+a)})})}),e.fancybox.defaults.hash=!1,e(r+" .fancybox").fancybox({loop:!0,helpers:{overlay:{locked:!1}}})},window.jQuery))};var G=()=>{if(!i(".md"))return;E(".post.block"),i(".post.block").oncopy=e=>{if(y(LOCAL.copyright),LOCAL.nocopy){e.preventDefault();return}let t=i("#copyright");if(window.getSelection().toString().length>30&&t){e.preventDefault();let a="# "+t.child(".author").innerText,o="# "+t.child(".link").innerText,c="# "+t.child(".license").innerText,n=a+"<br>"+o+"<br>"+c+"<br><br>"+window.getSelection().toString().replace(/\r\n/g,"<br>"),l=a+`
`+o+`
`+c+`

`+window.getSelection().toString().replace(/\r\n/g,`
`);if(e.clipboardData)e.clipboardData.setData("text/html",n),e.clipboardData.setData("text/plain",l);else if(window.clipboardData)return window.clipboardData.setData("text",l)}},i.each("li ruby",e=>{let t=e.parentNode;e.parentNode.tagName!=="LI"&&(t=e.parentNode.parentNode),t.addClass("ruby")}),i.each("ol[start]",e=>{e.style.counterReset="counter "+parseInt(e.getAttribute("start")-1)}),i.each(".md table",e=>{v(e,{className:"table-container"})}),i.each(".highlight > .table-container",e=>{e.className="code-container"}),i.each("figure.highlight",e=>{let t=e.child(".code-container"),a=e.child("figcaption");e.insertAdjacentHTML("beforeend",'<div class="operation"><span class="breakline-btn"><i class="ic i-align-left"></i></span><span class="copy-btn"><i class="ic i-clipboard"></i></span><span class="fullscreen-btn"><i class="ic i-expand"></i></span></div>');let o=e.child(".copy-btn");LOCAL.nocopy?o.remove():(o.addEventListener("click",s=>{let d=s.currentTarget,h="",C="";t.find("pre").forEach(g=>{C+=h+g.innerText,h=`
`}),N(C,g=>{d.child(".ic").className=g?"ic i-check":"ic i-times",d.blur(),y(LOCAL.copyright)})},{passive:!0}),o.addEventListener("mouseleave",s=>{setTimeout(()=>{s.target.child(".ic").className="ic i-clipboard"},1e3)})),e.child(".breakline-btn").addEventListener("click",s=>{let d=s.currentTarget;e.hasClass("breakline")?(e.removeClass("breakline"),d.child(".ic").className="ic i-align-left"):(e.addClass("breakline"),d.child(".ic").className="ic i-align-justify")});let n=e.child(".fullscreen-btn"),l=()=>{e.removeClass("fullscreen"),e.scrollTop=0,m.removeClass("fullscreen"),n.child(".ic").className="ic i-expand"},p=()=>{if(e.hasClass("fullscreen")){if(l(),t&&t.find("tr").length>15){let s=t.child(".show-btn");t.style.maxHeight="300px",s.removeClass("open")}b(e)}else if(e.addClass("fullscreen"),m.addClass("fullscreen"),n.child(".ic").className="ic i-compress",t&&t.find("tr").length>15){let s=t.child(".show-btn");t.style.maxHeight="",s.addClass("open")}};if(n.addEventListener("click",p),a&&a.addEventListener("click",p),t&&t.find("tr").length>15){t.style.maxHeight="300px",t.insertAdjacentHTML("beforeend",'<div class="show-btn"><i class="ic i-angle-down"></i></div>');let s=t.child(".show-btn"),d=()=>{t.style.maxHeight="300px",s.removeClass("open")},h=()=>{t.style.maxHeight="",s.addClass("open")};s.addEventListener("click",()=>{s.hasClass("open")?(l(),d(),b(t)):h()})}}),i.each("pre.mermaid > svg",e=>{let t=e;t.style.maxWidth=""}),i.each(".reward button",e=>{e.addEventListener("click",t=>{t.preventDefault();let a=i("#qr");L(a)==="inline-flex"?u(a,0):u(a,1,()=>{k(a,"inline-flex")})})}),i.each(".quiz > ul.options li",e=>{e.addEventListener("click",()=>{e.hasClass("correct")?(e.toggleClass("right"),e.parentNode.parentNode.addClass("show")):e.toggleClass("wrong")})}),i.each(".quiz > p",e=>{e.addEventListener("click",()=>{e.parentNode.toggleClass("show")})}),i.each(".quiz > p:first-child",e=>{let t=e.parentNode,a="choice";(t.hasClass("true")||t.hasClass("false"))&&(a="true_false"),t.hasClass("multi")&&(a="multiple"),t.hasClass("fill")&&(a="gap_fill"),t.hasClass("essay")&&(a="essay"),e.setAttribute("data-type",LOCAL.quiz[a])}),i.each(".quiz .mistake",e=>{e.setAttribute("data-type",LOCAL.quiz.mistake)}),i.each("div.tags a",e=>{e.className=["primary","success","info","warning","danger"][Math.floor(Math.random()*5)]});let r=document.querySelectorAll(".show-btn .i-angle-down");if(r.length){let e=new IntersectionObserver(t=>{t.forEach(a=>{a.isIntersecting?r.forEach(o=>{o.classList.remove("stop-animation")}):r.forEach(o=>{o.classList.add("stop-animation")})})},{root:null,threshold:.5});r.forEach(t=>{e.observe(t)})}};export{G as postBeauty};
/*! For license information please see post-L2T3HVOQ.js.LEGAL.txt */
