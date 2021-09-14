(()=>{"use strict";class t{constructor({id:t,title:e,urlToImage:s,tags:a,...i}){this.id=t,this.title=e,this.urlToImage=s,this.tags=a}generateArticle(){let t="",e=document.createElement("article");return e.className="strategy block-shadowed",e.setAttribute("data-id",this.id),this.urlToImage&&(t+=`<img class="strategy_image" src=${this.urlToImage} alt="strategy">`),(this.title||this.tags)&&(t+='<div class="strategy_content">',this.title&&(t+=`<h3 class="strategy_name">${this.title}</h3>`),this.tags&&(t+='<div class="strategy_tags tags">',this.tags.map((e=>{t+=`<span class="tag tag_colored">${e}</span>`})),t+="</div>"),t+="</div>"),e.innerHTML=t,e}}class e{constructor(t){this.classes=t,this.modal="",this.modalContent="",this.modalCloseBtn="",this.overlay=""}buildModal(t){this.overlay=this.createDomNode(this.overlay,"div","overlay","overlay_modal"),this.modal=this.createDomNode(this.modal,"div","modal",this.classes),this.modalContent=this.createDomNode(this.modalContent,"div","modal_content"),this.modalCloseBtn=this.createDomNode(this.modalCloseBtn,"span","modal_close-icon"),this.modalCloseBtn.innerHTML=this.setContent(t),this.appendModalElements(),this.openModal()}createDomNode(t,e,...s){return(t=document.createElement(e)).classList.add(...s),t}setContent(t){"string"==typeof t?this.modalContent.innerHTML=t:(this.modalContent.innerHTML="",this.modalContent.appendChild(t))}appendModalElements(){this.modal.append(this.modalCloseBtn),this.modal.append(this.modalContent),this.overlay.append(this.modal)}openModal(){document.body.append(this.overlay)}}const s=[{id:1,title:"Increasing Prosperity With Positive Thinking",urlToImage:"./image/image1.jpg",tags:["Art","Design"],content:"Knowing yourself is the first, and a very critical step in the process of planing your future",data:"01.01.2021"},{id:2,title:"Motivation Is The First Step To Success",urlToImage:"./image/image2.jpg",tags:["Culture"],content:"Knowing yourself is the first, and a very critical step in the process of planing your future",data:"01.01.2021"},{id:3,title:"Success Steps For Your Personal Or Business Life",urlToImage:"./image/image3.jpg",tags:["Culture","Design","Art"],content:"Knowing yourself is the first, and a very critical step in the process of planing your future",data:"01.01.2021"},{id:4,title:"Success Steps For Your Personal Or Business Life Plus Funny Image on the Back",urlToImage:"./image/image4.jpg",tags:["Culture","Design","Art"],content:"Knowing yourself is the first, and a very critical step in the process of planing your future",data:"01.01.2021"},{id:5,title:"Increasing Prosperity With Positive Thinking",urlToImage:"./image/image5.jpg",tags:["Design"],content:"Knowing yourself is the first, and a very critical step in the process of planing your future",data:"01.01.2021"}];window.onload=function(){s&&l(),a(),g()};const a=()=>{document.querySelector(".strategies_tags").addEventListener("click",(t=>{if(t.target.classList.contains("tag")){let e=t.target;i(),o(e),"All"===e.innerText?r():n(e.innerText)}}))},i=()=>{document.querySelectorAll(".strategies_tags .tag").forEach((t=>{t.classList.remove("tag_selected"),t.classList.add("tag_bordered")}))},o=t=>{t.classList.add("tag_selected"),t.classList.remove("tag_bordered")},r=()=>{document.querySelectorAll(".strategy-wrapper .strategy").forEach((t=>{t.classList.remove("strategy_hidden")}))},n=t=>{document.querySelectorAll(".strategy-wrapper .strategy").forEach((e=>{e.classList.add("strategy_hidden"),e.querySelectorAll(".tag").forEach((s=>{s.innerText===t&&e.classList.remove("strategy_hidden")}))}))},l=()=>{let t=d();c(s).forEach((e=>{t.append(e.generateArticle())}))},d=()=>{const t=document.querySelector(".strategy-wrapper");return t.innerHTML="",t},c=e=>{let s=[];return e.forEach((e=>{s.push(new t(e))})),s},g=()=>{document.querySelector(".tools_button .button").addEventListener("click",(()=>{h()}))},h=()=>{u("Test")},u=t=>{new e("tools-modal").buildModal(t)}})();