import{a as y,S as L,i as c}from"./assets/vendor-b11e2a50.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const m of o.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&s(m)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}})();async function u(r,t){try{const i="https://pixabay.com/api/",s=new URLSearchParams({key:"44040015-64d065a912d04f3627622b428",q:r,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:15,page:t}),e=`${i}?${s}`;return(await y.get(e)).data}catch{iziToast.error({position:"topRight",message:"Error"})}}function f(r){return r.map(t=>`<li class="gallery-list"><div class="gallery"><a href="${t.largeImageURL}"><img src="${t.webformatURL}" alt="${t.tags}" width="360px" height="100px"></a>
      <ul class="img-cont-list">
      <li class="img-cont-item">Likes<p class="img-cont-descr">${t.likes}</p></li>
      <li class="img-cont-item">Views<p class="img-cont-descr">${t.views}</p></li>
      <li class="img-cont-item">Comments<p class="img-cont-descr">${t.comments}</p></li>
      <li class="img-cont-item">Downloads<p class="img-cont-descr">${t.downloads}</p></li>
      </ul>
      </div>
      </li>`).join("")}function h(){new L(".gallery a",{navText:["&#5176;","&#5171;"],captionsData:"alt",captionDelay:250}).refresh()}const d=document.querySelector(".btn"),g=document.querySelector(".find-form"),n=document.querySelector(".galleriesBox"),p=document.querySelector("#load");let l=1,a="";g.addEventListener("submit",r=>{r.preventDefault(),l=1,n.innerHTML="",a=new FormData(g).get("find-text"),a!==""&&(n.innerHTML='<div class="loader"></div>',u(a,l).then(i=>{if(i.hits.length===0){c.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}),n.innerHTML="";return}const s=f(i.hits);n.innerHTML=s,i.hits.length===15&&d.classList.remove("hidden"),h()}).catch(i=>c.error({position:"topRight",message:"Error2"})).finally(()=>{r.target.reset()}))});d.addEventListener("click",async()=>{try{l+=1,p.innerHTML='<div class="loader"></div>';const r=await u(a,l);r.hits.length===0&&(d.classList.add("hidden"),c.info({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"})),p.innerHTML="";const t=f(r.hits);n.insertAdjacentHTML("beforeend",t),h(),window.scrollBy({top:720,behavior:"smooth"})}catch(r){console.log(r),c.error({position:"topRight",message:"Error1"})}});
//# sourceMappingURL=commonHelpers.js.map