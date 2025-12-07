import{a as p,S as f,i}from"./assets/vendor-CNqCr-V-.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const y="53393760-f5a058fb9e0a87143d2aaec84",g="https://pixabay.com/api/";async function h(o){try{return(await p.get(g,{params:{key:y,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}catch(t){throw console.error(t),t}}const l=document.querySelector(".gallery");let L=new f(".gallery a");function b(o){const t=o.map(({webformatURL:s,largeImageURL:n,tags:e,likes:r,views:a,comments:d,downloads:m})=>`
      <li class="gallery-item">
        <a href="${n}" class="gallery-link">
          <img src="${s}" alt="${e}" loading="lazy" />
        </a>
        <div class="info">
          <p><span class="item-descr-item">Likes:</span> ${r}</p>
          <p><span class="item-descr-item">Views:</span> ${a}</p>
          <p><span class="item-descr-item">Comments:</span> ${d}</p>
          <p><span class="item-descr-item">Downloads:</span> ${m}</p>
        </div>
      </li>`).join("");l.insertAdjacentHTML("beforeend",t),L.refresh()}function w(){l.innerHTML=""}function S(){document.body.classList.add("loading")}function c(){document.body.classList.remove("loading")}const u=document.querySelector(".form"),q=u.querySelector('input[name="search-text"]');u.addEventListener("submit",async o=>{o.preventDefault();const t=q.value.trim();if(!t){i.error({title:"Error",message:"Please enter a search query."});return}w(),S();try{const s=await h(t);if(s.hits.length===0){i.info({message:"Sorry, there are no images matching your search query. Please, try again!",class:"custom-toast"}),c();return}b(s.hits)}catch{i.error({title:"Error",message:"Something went wrong! Try again later."})}finally{c()}});
//# sourceMappingURL=index.js.map
