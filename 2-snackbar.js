import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{i as r}from"./assets/vendor-BbbuE1sJ.js";const o=document.querySelector(".form"),m=o.querySelector('[name="delay"]'),l=o.querySelectorAll('[name="state"]');o.querySelector("button");o.addEventListener("submit",n=>{var i;n.preventDefault();const t=parseInt(m.value,10),s=(i=[...l].find(e=>e.checked))==null?void 0:i.value;if(!s||isNaN(t))return;new Promise((e,a)=>{setTimeout(()=>{s==="fulfilled"?e(`Fulfilled promise in ${t}ms`):a(`Rejected promise in ${t}ms`)},t)}).then(e=>{r.success({message:e,position:"topRight"})}).catch(e=>{r.error({message:e,position:"topRight"})})});
//# sourceMappingURL=2-snackbar.js.map
