(()=>{"use strict";const e=document.querySelector("#count-value"),t=document.querySelector("#increment-button"),n=document.querySelector("#decrement-button");t.addEventListener("click",(()=>{const t=parseInt(e.innerText);var n;e.innerText=(n=t,++n).toString()})),n.addEventListener("click",(()=>{const t=parseInt(e.innerText);var n;e.innerText=(n=t,--n).toString()}))})();