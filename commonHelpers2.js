/* empty css                      */import{S as r,N as l,P as a}from"./assets/vendor-0d4ab8a2.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const c of e)if(c.type==="childList")for(const s of c.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function d(e){const c={};return e.integrity&&(c.integrity=e.integrity),e.referrerPolicy&&(c.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?c.credentials="include":e.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function o(e){if(e.ep)return;e.ep=!0;const c=d(e);fetch(e.href,c)}})();document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelectorAll(".guest-carrousel-content"),n=document.querySelector(".guest-carrousel-btn-left"),d=document.querySelector(".guest-carrousel-btn-right");let o=0;function e(c){t.forEach((s,i)=>{s.classList.toggle("active",i===c)})}e(o),n.addEventListener("click",()=>{o=(o-1+t.length)%t.length,e(o)}),d.addEventListener("click",()=>{o=(o+1)%t.length,e(o)})});document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector("#modal-cookies"),n=document.querySelector(".modal-cookies-accept"),d=document.querySelector(".modal-cookies-decline"),o=document.querySelector("[data-backdrop]");localStorage.getItem("cookiesAccepted")||c();function c(){t.classList.remove("is-hidden")}function s(){t.classList.add("is-hidden"),localStorage.setItem("cookiesAccepted","true")}n.addEventListener("click",s),d.addEventListener("click",s),o.addEventListener("click",i=>{i.target===o&&s()})});new r(".reviewsSwiper",{modules:[l,a],slidesPerView:1.2,spaceBetween:20,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0},allowTouchMove:!0,breakpoints:{1440:{slidesPerView:4.2,spaceBetween:30,allowTouchMove:!1}}});(()=>{const t={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]"),backdrop:document.querySelector("[data-backdrop]"),links:document.querySelectorAll(".modal-nav-link")};t.openModalBtn.addEventListener("click",d),t.closeModalBtn.addEventListener("click",d),t.backdrop.addEventListener("click",n),t.links.forEach(o=>{o&&o.addEventListener("click",n)});function n(){t.modal.classList.add("is-hidden"),t.closeModalBtn.classList.add("is-hidden"),t.backdrop.classList.add("is-hidden")}function d(){t.modal.classList.toggle("is-hidden"),t.closeModalBtn.classList.toggle("is-hidden"),t.backdrop.classList.toggle("is-hidden")}})();
//# sourceMappingURL=commonHelpers2.js.map
