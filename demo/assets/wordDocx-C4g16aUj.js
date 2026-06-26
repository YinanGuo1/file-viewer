const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./docx-preview-rR7HURBr.js","./chunk-CMxvf4Kt.js","./jszip.min-DWCzc6bk.js"])))=>i.map(i=>d[i]);
import{o as e}from"./chunk-CMxvf4Kt.js";import{A as t,C as n,E as r,M as i,O as a,T as o,w as s}from"./package-DMyjk_GW.js";import{o as c,s as l}from"./assets-TfB0CIc-.js";import{t as u}from"./preload-helper-kNaey6uv.js";var d={width:794,height:1123},f=2,p=5e3,m=new Set([`file:`,`about:`,`data:`]),h=.24,g=3,_=.15,v=9525,y=20555,b=(()=>{let e={module:null,async load(){return this.module||=u(()=>import(`./docx-preview-rR7HURBr.js`),__vite__mapDeps([0,1,2]),import.meta.url),this.module}};return async()=>await e.load()})(),x=e=>{if((e.byteLength>=4?new DataView(e).getUint16(0,!1):0)!==y)throw Error(`文件不是有效的 DOCX/OOXML 压缩包，可能下载不完整或被服务端错误内容替换，请重新上传或检查文件源。`)},S=e=>e.ownerDocument.defaultView,C=e=>{let t=[e.ownerDocument.URL,S(e)?.location?.href,globalThis.location?.href].filter(Boolean);for(let e of t)try{return new URL(e).protocol}catch{}return``},w=(e,t)=>t?.worker===!1?!1:t?.worker===!0?!0:S(e)?.Worker??globalThis.Worker?!m.has(C(e)):!1,ee=(e,t,n)=>{let r=t?.options?.docx,i=e.ownerDocument.URL||void 0,a=w(e,r),o=r?.visualPagination===!0;return{debug:!1,experimental:!1,useWorker:a,workerUrl:a?l(r,i):void 0,workerJsZipUrl:a?c(r,i):void 0,workerFallback:!0,workerTimeout:r?.workerTimeout??p,renderPageBatchSize:r?.renderPageBatchSize??(r?.progressive===!1?2**53-1:f),renderYieldEveryMs:r?.renderYieldEveryMs??16,strictWordCompatibility:r?.strictWordCompatibility??!0,paginationTolerance:r?.paginationTolerance??2,breakPages:o,maxDynamicPaginationPasses:o?r?.maxDynamicPaginationPasses??1e3:0,awaitLayout:r?.awaitLayout??o,preserveComplexFieldResults:r?.preserveComplexFieldResults??!0,updatePageReferences:r?.updatePageReferences??!1,hideWebHiddenContent:r?.hideWebHiddenContent??!1,ignoreLastRenderedPageBreak:r?.ignoreLastRenderedPageBreak??!o,progress:e=>{(e.phase===`render`||e.phase===`layout`||e.phase===`done`)&&n()}}},T=(e,t)=>{let n=S(t)?.HTMLElement;return n?e instanceof n:e instanceof HTMLElement},E=e=>e?.options?.docx?.visualPagination===!0,te=`
.docx-fit-viewer {
  box-sizing: border-box;
  height: 100%;
  overflow: auto;
  background: #ececec;
}
.docx-fit-viewer .docx-wrapper {
  box-sizing: border-box;
  min-width: 0 !important;
  width: 100% !important;
  padding: 24px 14px 40px !important;
  background: #e7e9ec !important;
}
.docx-fit-viewer .docx-page-frame {
  position: relative;
  width: 100%;
  min-width: 0;
  margin: 0 auto 24px;
  overflow: visible;
}
.docx-fit-viewer .docx-flow-frame {
  position: relative;
  width: 100%;
  min-width: 0;
  margin: 0 auto 28px;
  overflow: visible;
}
.docx-fit-viewer .docx-page-frame > section.docx,
.docx-fit-viewer .docx-flow-frame > section.docx {
  position: absolute;
  top: 0;
  left: 50%;
  margin: 0 !important;
  background: #ffffff !important;
  box-shadow: 0 2px 14px rgba(25, 35, 48, 0.18);
  box-sizing: border-box;
  color: #111827;
  overflow: hidden;
  transform-origin: top center;
}
.docx-fit-viewer .docx-flow-frame > section.docx {
  height: auto !important;
  min-height: 0 !important;
  overflow: visible !important;
}
.docx-fit-viewer .docx-page-frame > section.docx > article,
.docx-fit-viewer .docx-flow-frame > section.docx > article {
  position: relative;
  z-index: 1;
}
.docx-fit-viewer .docx-vml-watermark {
  position: absolute;
  inset: 0;
  z-index: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.28;
  filter: saturate(0.72) brightness(1.24);
  pointer-events: none;
  user-select: none;
}
.docx-fit-viewer .docx-vml-fallback,
.docx-fit-viewer .docx-chart-fallback {
  display: block;
  max-width: 100%;
  margin: 12px auto;
  break-inside: avoid;
  page-break-inside: avoid;
}
.docx-fit-viewer .docx-vml-fallback {
  text-align: center;
}
.docx-fit-viewer .docx-vml-fallback img {
  display: block;
  max-width: 100%;
  height: auto;
  margin: 0 auto;
}
.docx-fit-viewer .docx-chart-fallback {
  box-sizing: border-box;
  overflow: hidden;
  border: 1px solid #d7dee8;
  border-radius: 8px;
  background: #ffffff;
  box-shadow: 0 1px 6px rgba(15, 23, 42, 0.08);
}
.docx-fit-viewer .docx-chart-fallback svg {
  display: block;
  width: 100%;
  height: auto;
}
`;function D(e){return e.localName||e.tagName.split(`:`).pop()||e.tagName}function O(e,t){return Array.from(e.querySelectorAll(`*`)).filter(e=>D(e)===t)}function k(e,t){return O(e,t)[0]}function A(e,t,n){return(n?e.getAttributeNS(n,t):null)||e.getAttribute(t)||e.getAttribute(`r:${t}`)}function j(e){return e?(e.textContent||``).replace(/\s+/g,` `).trim():``}function M(e,t){let n=e?.parentElement||null;for(;n;){if(D(n)===t)return n;n=n.parentElement}return null}function N(e){let t=D(e)===`p`?e:M(e,`p`);if(!t)return;let n=0,r=t.previousElementSibling;for(;r;)D(r)===`p`&&(n+=1),r=r.previousElementSibling;return n}function P(e,t){let n=S(t)?.DOMParser||globalThis.DOMParser;if(!n)return null;let r=new n().parseFromString(e,`application/xml`);return r.querySelector(`parsererror`)?null:r}function F(e){let t=[];return e.split(`/`).forEach(e=>{if(!(!e||e===`.`)){if(e===`..`){t.pop();return}t.push(e)}}),t.join(`/`)}function I(e){let t=e.lastIndexOf(`/`);return t>=0?e.slice(0,t):``}function ne(e){let t=I(e);return F(`${t}/_rels/${e.slice(t?t.length+1:0)}.rels`)}function L(e,t){return t.startsWith(`/`)?F(t.slice(1)):F(`${I(e)}/${t}`)}function R(e){switch(e.split(`.`).pop()?.toLowerCase()){case`png`:return`image/png`;case`jpg`:case`jpeg`:return`image/jpeg`;case`gif`:return`image/gif`;case`bmp`:return`image/bmp`;case`webp`:return`image/webp`;case`svg`:return`image/svg+xml`;default:return`application/octet-stream`}}function z(e){if(!e)return;let t=e.trim().match(/^(-?\d+(?:\.\d+)?)(px|pt|in|cm|mm)?$/i);if(!t)return;let n=Number(t[1]);if(!(!Number.isFinite(n)||n<=0))switch((t[2]||`px`).toLowerCase()){case`pt`:return n*96/72;case`in`:return n*96;case`cm`:return n*96/2.54;case`mm`:return n*96/25.4;default:return n}}function re(e){let t=new Map;return e&&e.split(`;`).forEach(e=>{let n=e.indexOf(`:`);n<=0||t.set(e.slice(0,n).trim().toLowerCase(),e.slice(n+1).trim())}),t}function ie(e){let t=re(e);return{width:z(t.get(`width`)),height:z(t.get(`height`))}}function ae(e){let t=M(e,`inline`)||M(e,`anchor`),n=t?k(t,`extent`):void 0,r=Number(n?.getAttribute(`cx`)),i=Number(n?.getAttribute(`cy`));return{width:Number.isFinite(r)&&r>0?r/v:void 0,height:Number.isFinite(i)&&i>0?i/v:void 0}}async function B(e,t,n){let r=e.file(ne(t)),i=new Map;if(!r)return i;let a=P(await r.async(`text`),n);return a&&O(a,`Relationship`).forEach(e=>{let t=e.getAttribute(`Id`),n=e.getAttribute(`Target`);!t||!n||i.set(t,{id:t,type:e.getAttribute(`Type`)||``,target:n,targetMode:e.getAttribute(`TargetMode`)||void 0})}),i}async function V(e,t){let n=e.file(t);if(!n)return;let r=await n.async(`base64`);return`data:${R(t)};base64,${r}`}function H(e){return Object.keys(e.files).filter(e=>e===`word/document.xml`||/^word\/header\d+\.xml$/i.test(e)||/^word\/footer\d+\.xml$/i.test(e)).sort((e,t)=>e===`word/document.xml`?-1:t===`word/document.xml`?1:e.localeCompare(t))}function U(e,t,n){let r=`${t?.getAttribute(`id`)||``} ${t?.getAttribute(`o:spid`)||``}`.toLowerCase(),i=(n||``).toLowerCase();return e.includes(`/header`)&&(r.includes(`watermark`)||i.includes(`z-index:-`)||i.includes(`mso-position-horizontal:center`))?`watermark`:t?.getAttribute(`o:ole`)===`t`||t?.getAttribute(`ole`)===`t`?`ole-preview`:`vml-image`}async function W(e,t){let n=[],r=new Set;for(let i of H(e)){let a=e.file(i);if(!a)continue;let o=P(await a.async(`text`),t);if(!o)continue;let s=await B(e,i,t);for(let t of O(o,`imagedata`)){let a=A(t,`id`,`http://schemas.openxmlformats.org/officeDocument/2006/relationships`),o=a?s.get(a):void 0;if(!o||o.targetMode===`External`||!o.type.includes(`/image`))continue;let c=L(i,o.target),l=await V(e,c);if(!l)continue;let u=M(t,`shape`),d=u?.getAttribute(`style`)||void 0,f=U(i,u,d),p=f===`watermark`?`${f}:${c}`:`${f}:${i}:${c}:${N(t)??`end`}`;r.has(p)||(r.add(p),n.push({role:f,key:p,dataUrl:l,sourcePath:c,partPath:i,title:t.getAttribute(`o:title`)||t.getAttribute(`title`)||void 0,style:d,...ie(d),paragraphIndex:i===`word/document.xml`?N(t):void 0}))}}return n}function G(e){return e?O(e,`pt`).sort((e,t)=>Number(e.getAttribute(`idx`)||0)-Number(t.getAttribute(`idx`)||0)).map(e=>j(k(e,`v`))).filter(Boolean):[]}function K(e){let t=G(k(k(e,`tx`)||e,`strCache`))[0]||G(k(k(e,`tx`)||e,`numCache`))[0]||`Series`,n=G(k(k(e,`cat`)||e,`strCache`)),r=G(k(k(e,`cat`)||e,`numCache`)),i=G(k(k(e,`val`)||e,`numCache`)).map(e=>Number(e)).filter(e=>Number.isFinite(e));return{name:t,categories:n.length?n:r,values:i}}function q(e,t,n,r){let i=[`lineChart`,`barChart`,`pieChart`,`areaChart`,`scatterChart`].map(t=>O(e,t)[0]).find(Boolean),a=i?D(i):`chart`,o=j(k(k(e,`title`)||e,`t`))||t.split(`/`).pop()||`Chart`,s=O(i||e,`ser`).map(K).filter(e=>e.values.length),{width:c,height:l}=ae(n);if(s.length)return{key:`chart:${t}:${r??`end`}`,title:o,type:a,sourcePath:t,series:s,width:c,height:l,paragraphIndex:r}}async function oe(e,t){let n=`word/document.xml`,r=e.file(n);if(!r)return[];let i=P(await r.async(`text`),t);if(!i)return[];let a=await B(e,n,t),o=[],s=new Set;for(let r of O(i,`chart`)){let i=A(r,`id`,`http://schemas.openxmlformats.org/officeDocument/2006/relationships`),c=i?a.get(i):void 0;if(!c||c.targetMode===`External`||!c.type.includes(`/chart`))continue;let l=L(n,c.target),u=e.file(l);if(!u)continue;let d=P(await u.async(`text`),t),f=N(r),p=d?q(d,l,r,f):void 0;!p||s.has(p.key)||(s.add(p.key),o.push(p))}return o}function J(e){return e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`)}function se(e){let t=Math.max(360,Math.round(e.width||520)),n=Math.max(220,Math.round(e.height||320)),r={top:52,right:30,bottom:56,left:54},i=t-r.left-r.right,a=n-r.top-r.bottom,o=e.series.flatMap(e=>e.values),s=Math.max(...o,1),c=Math.min(...o,0),l=Math.max(s-c,1),u=[`#2563eb`,`#10b981`,`#f97316`,`#8b5cf6`,`#ef4444`],d=Math.max(...e.series.map(e=>e.values.length),1),f=e=>r.left+(d===1?i/2:e*i/(d-1)),p=e=>r.top+a-(e-c)/l*a,m=e.series.map((e,t)=>{let n=u[t%u.length];return`<polyline points="${e.values.map((e,t)=>`${f(t).toFixed(1)},${p(e).toFixed(1)}`).join(` `)}" fill="none" stroke="${n}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>${e.values.map((t,r)=>`<circle cx="${f(r).toFixed(1)}" cy="${p(t).toFixed(1)}" r="3.5" fill="${n}"><title>${J(e.name)}: ${J(String(t))}</title></circle>`).join(``)}`}).join(``),h=(e.series.find(e=>e.categories.length)?.categories||[]).slice(0,d).map((e,t)=>{let r=f(t),i=e.length>14?`${e.slice(0,13)}...`:e;return`<text x="${r.toFixed(1)}" y="${n-22}" text-anchor="middle" fill="#64748b" font-size="11">${J(i)}</text>`}).join(``),g=e.series.slice(0,5).map((e,t)=>`<g transform="translate(${r.left+t*98} 30)"><rect width="10" height="10" rx="2" fill="${u[t%u.length]}"/><text x="15" y="9" fill="#475569" font-size="11">${J(e.name)}</text></g>`).join(``);return`<svg viewBox="0 0 ${t} ${n}" role="img" aria-label="${J(e.title)}">
    <rect x="0" y="0" width="${t}" height="${n}" rx="8" fill="#ffffff"/>
    <text x="${r.left}" y="22" fill="#0f172a" font-size="15" font-weight="700">${J(e.title)}</text>
    ${g}
    <line x1="${r.left}" y1="${r.top+a}" x2="${r.left+i}" y2="${r.top+a}" stroke="#cbd5e1"/>
    <line x1="${r.left}" y1="${r.top}" x2="${r.left}" y2="${r.top+a}" stroke="#cbd5e1"/>
    <text x="${r.left-8}" y="${r.top+4}" text-anchor="end" fill="#64748b" font-size="11">${J(s.toFixed(1))}</text>
    <text x="${r.left-8}" y="${r.top+a}" text-anchor="end" fill="#64748b" font-size="11">${J(c.toFixed(1))}</text>
    ${m}
    ${h}
  </svg>`}function ce(e){return Array.from(e.querySelectorAll(`section.docx`))}function le(e){return Array.from(e.querySelectorAll(`section.docx > article`))}function ue(e,t){if(t===void 0)return;let n=Array.from(e.querySelectorAll(`section.docx > article p`));return n[Math.min(Math.max(t,0),Math.max(n.length-1,0))]}function Y(e,t,n){let r=ue(e,n);if(r){r.after(t);return}let i=le(e)[0];i&&i.appendChild(t)}function de(e,t){let n=ce(e);n.length&&t.forEach(t=>{if(t.role===`watermark`){n.forEach(n=>{let r=e.ownerDocument.createElement(`img`);r.className=`docx-vml-watermark`,r.src=t.dataUrl,r.alt=t.title||``,r.dataset.docxFallback=t.key,n.prepend(r)});return}let r=e.ownerDocument.createElement(`figure`);r.className=`docx-vml-fallback`,r.dataset.docxFallback=t.key,t.width&&(r.style.width=`${Math.round(t.width)}px`);let i=e.ownerDocument.createElement(`img`);i.src=t.dataUrl,i.alt=t.title||(t.role===`ole-preview`?`Embedded object preview`:`Document image`),t.width&&(i.style.width=`${Math.round(t.width)}px`),t.height&&(i.style.height=`${Math.round(t.height)}px`),r.appendChild(i),Y(e,r,t.paragraphIndex)})}function fe(e,t){t.forEach(t=>{let n=e.ownerDocument.createElement(`figure`);n.className=`docx-chart-fallback`,n.dataset.docxFallback=t.key,t.width&&(n.style.width=`${Math.round(t.width)}px`),n.innerHTML=se(t),Y(e,n,t.paragraphIndex)})}async function pe(t,n){try{let{default:r}=await u(async()=>{let{default:t}=await import(`./jszip.min-DWCzc6bk.js`).then(t=>e(t.t(),1));return{default:t}},__vite__mapDeps([2,1]),import.meta.url),i=await r.loadAsync(t.slice(0)),[a,o]=await Promise.all([W(i,n),oe(i,n)]);a.length&&de(n,a),o.length&&fe(n,o)}catch(e){console.warn(`[file-viewer] DOCX 兼容增强解析失败，已保留 @file-viewer/docx 原始渲染结果。`,e)}}function me(e){let t=e.ownerDocument.createElement(`style`);return t.textContent=te,e.prepend(t),t}function X(e,t,n){let r=e.cloneNode(!1);r.innerHTML=``,r.dataset.docxPaginated=`true`,r.style.minHeight=`${n}px`,r.style.height=`${n}px`,r.style.overflow=`hidden`;let i=t.cloneNode(!1);return r.appendChild(i),Array.from(e.children).forEach(e=>{e!==t&&r.appendChild(e.cloneNode(!0))}),{page:r,article:i}}function he(e){let t=e.ownerDocument.defaultView?.getComputedStyle(e),n=t?parseFloat(t.minHeight):0;return Number.isFinite(n)&&n>0?n:e.offsetHeight}function ge(e){let t=e.querySelector(`.docx-wrapper`);t&&Array.from(t.children).forEach(t=>{if(!T(t,e)||!t.matches(`section.docx`))return;let n=t.querySelector(`:scope > article`);if(!T(n,e))return;let r=he(t),i=Array.from(n.childNodes);if(!r||i.length<2||t.scrollHeight<=r*1.15)return;let a=X(t,n,r);t.before(a.page),i.forEach(e=>{a.article.appendChild(e),!(a.page.scrollHeight<=r+1||a.article.childNodes.length===1)&&(a.article.removeChild(e),a=X(t,n,r),t.before(a.page),a.article.appendChild(e))}),t.remove()})}function _e(e,t){let n=e.querySelector(`.docx-wrapper`);return n?Array.from(n.children).flatMap(n=>{if(!T(n,e)||!n.matches(`section.docx`))return[];let r=e.ownerDocument.createElement(`div`);return r.className=t?`docx-page-frame`:`docx-flow-frame`,n.before(r),r.appendChild(n),[r]}):[]}function ve(e,n){e.classList.add(`docx-fit-viewer`);let r=me(e),o=E(n);o&&ge(e);let s=_e(e,o),c=S(e),l=c?.ResizeObserver,u=0,d=1,f=1,p=1,m=a(),v=e=>Math.min(g,Math.max(h,Number(e.toFixed(2)))),y=()=>{c&&(c.cancelAnimationFrame(u),u=c.requestAnimationFrame(()=>{let t=1;s.forEach(n=>{let r=n.firstElementChild;if(!T(r,e))return;r.style.transform=`translateX(-50%)`;let i=r.offsetWidth,a=o?r.offsetHeight:Math.max(r.scrollHeight,r.offsetHeight);if(!i||!a)return;let s=Math.max(e.clientWidth-28,120),c=Math.min(1,Math.max(h,s/i)),l=v(c*d);t=l,p=c,r.style.transform=`translateX(-50%) scale(${l})`,n.style.width=`${Math.ceil(Math.max(i*l,e.clientWidth-28,120))}px`,n.style.maxWidth=`none`,n.style.height=`${Math.ceil(a*l)}px`}),f=t,m.emit()}))},b=()=>({scale:f,label:`${Math.round(f*100)}%`,canZoomIn:f<g,canZoomOut:f>h,canReset:d!==1,minScale:h,maxScale:g}),x=e=>(d=Math.min(6,Math.max(.2,Number(e.toFixed(2)))),y(),b());e.dataset.viewerZoomProvider=`docx`,t(e,{zoomIn:()=>x(d+_),zoomOut:()=>x(d-_),resetZoom:()=>x(1),setZoom:e=>x(e/Math.max(p,.01)),getState:b,subscribe:m.subscribe});let C=l?new l(y):null;return C?.observe(e),s.forEach(e=>{let t=Z(e);t&&C?.observe(t)}),y(),()=>{c?.cancelAnimationFrame(u),C?.disconnect(),i(e),r.remove(),e.classList.remove(`docx-fit-viewer`)}}function Z(e){let t=e.firstElementChild,n=e.ownerDocument.defaultView?.HTMLElement;return n&&t instanceof n?t:null}function Q(e){return!!e?.classList.contains(`docx-flow-frame`)}function $(e){let t=e?Z(e):null;if(!t)return d;let n=r(t,d);return Q(e)?{width:n.width,height:Math.max(t.scrollHeight||0,t.offsetHeight||0,d.height)}:n}function ye(e,t){let r=Q(e),i=o(t.width),a=o(t.height);n(e,t,{heightMode:r?`min`:`fixed`}),e.style.margin=`0 auto 18px`;let s=Z(e);s&&(s.style.position=`relative`,s.style.top=`auto`,s.style.left=`auto`,s.style.width=i,s.style.maxWidth=`none`,s.style.minHeight=r?`0`:a,s.style.height=r?`auto`:a,s.style.margin=`0 auto`,s.style.transform=`none`,s.style.transformOrigin=`top left`,s.style.overflow=r?`visible`:`hidden`,s.style.boxShadow=`none`)}function be(e){let t=e.querySelector(`.docx-page-frame, .docx-flow-frame`),n=$(t||void 0);return s({selector:t?.classList.contains(`docx-flow-frame`)?`.viewer-export-content .docx-flow-frame`:`.viewer-export-content .docx-page-frame`,width:n.width,height:t?.classList.contains(`docx-flow-frame`)?d.height:n.height,heightMode:t?.classList.contains(`docx-flow-frame`)?`min`:`fixed`})}function xe(e){let t=Array.from(e.querySelectorAll(`.docx-page-frame, .docx-flow-frame`)),n=e.cloneNode(!0),r=e.ownerDocument.createElement(`div`);r.className=`docx-print-document`;let i=Array.from(n.querySelectorAll(`style`)).filter(e=>!e.textContent?.includes(`.docx-fit-viewer`)).map(e=>e.outerHTML).join(``);return n.querySelectorAll(`.docx-page-frame, .docx-flow-frame`).forEach((e,n)=>{ye(e,$(t[n])),r.appendChild(e.cloneNode(!0))}),r.childElementCount?`${i}${r.outerHTML}`:n.innerHTML}async function Se(e,t,n){var r;x(e);let i=!1,a=()=>{var e;i||(i=!0,(e=n?.onProgressiveRender)==null||e.call(n))},o=ee(t,n,a),{defaultOptions:s,renderAsync:c}=await b();t.dataset.docxWorker=o.useWorker?`self`:`false`,await c(e,t,void 0,{...s,...o}),a(),await pe(e,t);let l=ve(t,n);return(r=n?.registerExportAdapter)==null||r.call(n,{includeDocumentStyles:!1,beforeSnapshot:()=>{let e=S(t);e&&e.dispatchEvent(new e.Event(`resize`))},printStyle:()=>be(t),toHtml:()=>xe(t)}),{$el:t,unmount(){var e;(e=n?.registerExportAdapter)==null||e.call(n,null),l(),delete t.dataset.docxWorker,t.innerHTML=``}}}export{Se as default};