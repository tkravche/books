function e(e,o,t,n){Object.defineProperty(e,o,{get:t,set:n,enumerable:!0,configurable:!0})}function o(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},s={},l=t.parcelRequire0688;null==l&&((l=function(e){if(e in n)return n[e].exports;if(e in s){var o=s[e];delete s[e];var t={id:e,exports:{}};return n[e]=t,o.call(t.exports,t,t.exports),t.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,o){s[e]=o},t.parcelRequire0688=l),l.register("kyEFX",(function(o,t){var n,s;e(o.exports,"register",(function(){return n}),(function(e){return n=e})),e(o.exports,"resolve",(function(){return s}),(function(e){return s=e}));var l={};n=function(e){for(var o=Object.keys(e),t=0;t<o.length;t++)l[o[t]]=e[o[t]]},s=function(e){var o=l[e];if(null==o)throw new Error("Could not resolve bundle with id "+e);return o}})),l("kyEFX").register(JSON.parse('{"5ZPII":"index.e41bbcf3.js","7aOuY":"amazon1.c9513f1c.png","7AMlp":"amazon2.468bb970.png","3AlIy":"amazon3.25420e04.png","5HT3z":"apple1.99f5b86b.png","cf7y6":"apple2.ceabda8c.png","5lC0O":"apple3.8096cc16.png","kzWVK":"bookshop1.579c7059.png","6o20O":"bookshop2.b7dbaeb3.png","c7yZ9":"bookshop3.1927bef9.png","8sfzT":"sprite.3e83a086.svg","j0lCj":"index.4e3db9ef.js"}')),l("2MwmQ"),l("krGWQ");var r=l("2MwmQ"),a=l("krGWQ");(0,r.getAllCategoriesList)().then((e=>{var o;o=e,a.refs.categoriesList.innerHTML=o.map((e=>`<li class="category-item" data-category="${e.list_name}">\n    ${e.list_name}</li>`)).join("")}));r=l("2MwmQ");const i=(a=l("krGWQ")).refs.bookshelfTitle;function c(e){a.refs.categoryBookshelf.innerHTML=function(e){return e.map((({list_name:e,books:o})=>`\n    <li class="bookshelf-item">\n    <h3 class="bookshelf-category">${e}</h3>\n    <ul class="bookshelf-books">${o.map((({_id:e,book_image:o,title:t,author:n})=>`<li class="bookshelf-book" id="${e}">\n                <div class="overlay-container">\n        <img src="${o}" alt="${t}" width="180"\n        height="256" data-img-id="${e}" loading="lazy" class="book-img">\n        <div class="overlay">\n    <div class="overlay-text">Quick view</div>\n  </div>\n  </div>\n        <div class="book-info"><p class="book-title">${t}</p>\n        <p class="book-author">${n}</p></div></li>`)).join("")}</ul>\n    <button class="see-more-btn" data-category="${e}">See More</button>\n     </li>`)).join("")}(e)}function d(e){a.refs.categoryBookshelf.innerHTML=function(e){return e.map((e=>`<li class="bookshelf-book" id="${e._id}" data-category="${e.list_name}">\n        <div class="overlay-container">\n<img src="${e.book_image}" alt="${e.title}" width="180"\nheight="256" data-img-id="${e._id}" loading="lazy" class="book-img">\n<div class="overlay">\n<div class="overlay-text">Quick view</div>\n</div>\n</div>\n<div class="book-info"><p class="book-title">${e.title}</p><p class="book-author">${e.author}</p></div></li>`)).join("")+'<div><button class="all-categories-btn">All Categories</button></div>'}(e),a.refs.categoryBookshelf.classList.add("clicked-category"),window.scrollTo({top:0,behavior:"smooth"})}function p(e){document.querySelector(".current").classList.remove("current"),document.querySelector(`li[data-category="${e}"]`).classList.add("current")}(0,r.getBestSellers)().then((e=>{c(e)})),a.refs.categoriesList.addEventListener("click",(e=>{if(e.target.classList.contains("category-item")){const o=e.target.dataset.category,t=o.split(" "),n=t.slice(0,t.length-1).join(" "),s=t.slice(t.length-1);(0,r.getBooksByCategory)(o).then((e=>{d(e),p(o),i.innerHTML=`<span class="bookshelf-title">${n}</span><span class="bookshelf-title-accent"> ${s}</span>`,window.scrollTo({top:0,behavior:"smooth"})}))}})),a.refs.categoryBookshelf.addEventListener("click",(e=>{if(e.target.classList.contains("see-more-btn")){const o=e.target.dataset.category,t=o.split(" "),n=t.slice(0,t.length-1).join(" "),s=t.slice(t.length-1);(0,r.getBooksByCategory)(o).then((e=>{d(e),p(o),i.innerHTML=`<span class="bookshelf-title">${n}</span><span class="bookshelf-title-accent"> ${s}</span>`,window.scrollTo({top:0,behavior:"smooth"})}))}})),a.refs.categoryBookshelf.addEventListener("click",(e=>{e.target.classList.contains("all-categories-btn")&&(0,r.getBestSellers)().then((e=>{c(e),document.querySelector(".current").classList.remove("current"),a.refs.allCategories.classList.add("current"),i.innerHTML='<h2 class="bookshelf-title">\n      Best Sellers <span class="bookshelf-title-accent">Books</span>\n    </h2>',window.scrollTo({top:0,behavior:"smooth"})}))})),a.refs.allCategories.addEventListener("click",(e=>{(0,r.getBestSellers)().then((e=>{c(e),i.innerHTML='<h2 class="bookshelf-title">\n  Best Sellers <span class="bookshelf-title-accent">Books</span>\n</h2>',document.querySelector(".current").classList.remove("current"),a.refs.allCategories.classList.add("current"),window.scrollTo({top:0,behavior:"smooth"})}))}));var u;a=l("krGWQ"),r=l("2MwmQ");u=new URL(l("kyEFX").resolve("7aOuY"),import.meta.url).toString();var g;g=new URL(l("kyEFX").resolve("7AMlp"),import.meta.url).toString();var f;f=new URL(l("kyEFX").resolve("3AlIy"),import.meta.url).toString();var h;h=new URL(l("kyEFX").resolve("5HT3z"),import.meta.url).toString();var b;b=new URL(l("kyEFX").resolve("cf7y6"),import.meta.url).toString();var k;k=new URL(l("kyEFX").resolve("5lC0O"),import.meta.url).toString();var m;m=new URL(l("kyEFX").resolve("kzWVK"),import.meta.url).toString();var v;v=new URL(l("kyEFX").resolve("6o20O"),import.meta.url).toString();var y;y=new URL(l("kyEFX").resolve("c7yZ9"),import.meta.url).toString();var _;_=new URL(l("kyEFX").resolve("8sfzT"),import.meta.url).toString();let L=[];function w(e){(0,r.getBookById)(e).then((t=>{a.refs.modalBookInfo.innerHTML=function({_id:e,book_image:t,title:n,description:s,author:l,buy_links:r}){return`<div class="modal-wrapper"><button class="close-modalbtn js-close-modalbtn" aria-label="Close modal">\n  <svg class="popup-about-book__close-btn-iconbtn js-close-modalbtn" width="24" height="24"><use class="js-close-modalbtn" href="${o(_)}#icon-close"></use></svg></button>\n  \n  <div class='popup__wrapper'>\n     <img class="popup__book-image" src="${t}" alt="cover" width="192" height="281">\n<div class="popup__text-content">\n  <h2 class="popup__book_title">${n}</h2>\n  <h3 class="popup__book_author">${l}</h3>\n  <p class="popup__book_description">${s}</p>\n  <ul class="popup__shopping-links-container">\n    <li>\n      <a href="${r[0].url}" target="blank" rel="nofollow noopener noreferrer" aria-label="Link to shop"\n        class="popup__shopping-links-icon">\n        <img src="${o(u)}" srcset="${o(g)} 2x, ${o(f)} 3x" alt="Logo of shop" width="62">\n      </a>\n    </li>\n    <li>\n      <a href="${r[1].url}" target="blank" rel="nofollow noopener noreferrer" aria-label="Link to shop"\n        class="popup__shopping-links-icon">\n        <img src="${o(h)}" srcset="${o(b)} 2x, ${o(k)} 3x" alt="Logo of shop" width="33">\n      </a>\n    </li>\n    <li>\n      <a href="${r[2].url}" target="blank" rel="nofollow noopener noreferrer" aria-label="Link to shop"\n        class="popup__shopping-links-icon">\n        <img src="${o(m)}" srcset="${o(v)} 2x, ${o(y)} 3x" alt="Logo of shop" width="30">\n                  </a>\n    </li>\n  </ul>\n</div>\n</div>\n<button type="button" data-id ="${e}"class="add-bookBtn" >Add to shopping list</button>\n</div>`}(t),function(e){if(JSON.parse(localStorage.getItem("shoppingList")).includes(e)){document.querySelector(".add-bookBtn").textContent="remove from the shopping list"}else{document.querySelector(".add-bookBtn").textContent="add to the shopping list"}}(e)}))}a.refs.categoryBookshelf.addEventListener("click",(e=>{const o=e.target.closest(".bookshelf-book");if(o){w(o.getAttribute("id")),modal.style.display="block"}})),a.refs.modal.addEventListener("click",(function(e){e.target.classList.contains("js-close-modalbtn")&&(a.refs.modalBookInfo.innerHTML="",modal.style.display="none")})),window.addEventListener("click",(e=>{e.target===modal&&(modal.style.display="none",a.refs.modalBookInfo.innerHTML="")})),document.addEventListener("keydown",(function(e){"Escape"===e.key&&(modal.style.display="none",a.refs.modalBookInfo.innerHTML="")})),a.refs.modal.addEventListener("click",(e=>{const o=JSON.parse(localStorage.getItem("shoppingList"));if(e.target.classList.contains("add-bookBtn")){const t=e.target.dataset.id;if(o.includes(t)){const e=L.findIndex((e=>e===t));L.splice(e,1);document.querySelector(".add-bookBtn").textContent="add to the shopping list",localStorage.setItem("shoppingList",JSON.stringify(L))}else{L.push(t);document.querySelector(".add-bookBtn").textContent="remove from the shopping list",localStorage.setItem("shoppingList",JSON.stringify(L))}}}));const S=document.querySelector(".scroll-btn");S.addEventListener("click",(()=>{window.scrollTo({top:0,behavior:"smooth"})})),document.addEventListener("scroll",(()=>{window.scrollY>100?S.classList.add("show-scroll-btn"):S.classList.remove("show-scroll-btn")}));
//# sourceMappingURL=index.e41bbcf3.js.map