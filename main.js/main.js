(()=>{"use strict";function t(t,e,o){const n=document.documentElement,i="data-outside";function a(s){t.contains(s.target)||(t.removeAttribute(i),e.forEach((t=>{n.removeEventListener(t,a)})),o())}t.hasAttribute(i)||(e.forEach((t=>{setTimeout((()=>{n.addEventListener(t,a)}))})),t.setAttribute(i,""))}class e{constructor(t,e,o){this.numeros=document.querySelectorAll(t),this.observerTarget=document.querySelector(e),this.observerClass=o,this.handleMutation=this.handleMutation.bind(this)}static incrementarNumero(t){const e=+t.innerText,o=Math.floor(e/100);let n=0;const i=setInterval((()=>{n+=o,t.innerText=n,n>e&&(t.innerText=e,clearInterval(i))}),25*Math.random())}animaNumeros(){this.numeros.forEach((t=>{this.constructor.incrementarNumero(t)}))}handleMutation(t){t[0].target.classList.contains(this.observerClass)&&(this.observer.disconnect(),this.animaNumeros())}addMutationObserver(){this.observer=new MutationObserver(this.handleMutation),this.observer.observe(this.observerTarget,{attributes:!0})}init(){return this.numeros.length&&this.observerTarget&&this.addMutationObserver(),this}}new class{constructor(t,e){this.linksInternos=document.querySelectorAll(t),this.options=void 0===e?{behavior:"smooth",block:"start"}:e,this.scrollToSection=this.scrollToSection.bind(this)}scrollToSection(t){t.preventDefault();const e=t.currentTarget.getAttribute("href");document.querySelector(e).scrollIntoView(this.options)}addLinkEvent(){this.linksInternos.forEach((t=>{t.addEventListener("click",this.scrollToSection)}))}init(){return this.linksInternos.length&&this.addLinkEvent(),this}}('[data-menu="suave"] a[href^="#"]').init(),new class{constructor(t,e){this.tabMenu=document.querySelectorAll(t),this.tabContent=document.querySelectorAll(e),this.activeClass="ativo"}activeTab(t){this.tabContent.forEach((t=>{t.classList.remove(this.activeClass)}));const e=this.tabContent[t].dataset.anime;this.tabContent[t].classList.add(this.activeClass,e)}addTabNavEvent(){this.tabMenu.forEach(((t,e)=>{t.addEventListener("click",(()=>this.activeTab(e)))}))}init(){return this.tabMenu.length&&this.tabContent.length&&(this.activeTab(0),this.addTabNavEvent()),this}}('[data-tab="menu"] li','[data-tab="content"] section').init(),new class{constructor(t,e,o){this.botaoAbrir=document.querySelector(t),this.botaoFechar=document.querySelector(e),this.containerModal=document.querySelector(o),this.eventToggleModal=this.eventToggleModal.bind(this),this.clickForaModal=this.clickForaModal.bind(this)}toggleModal(){this.containerModal.classList.toggle("ativo")}eventToggleModal(t){t.preventDefault(),this.toggleModal()}clickForaModal(t){t.target===this.containerModal&&this.toggleModal()}addModalEvents(){this.botaoAbrir.addEventListener("click",this.eventToggleModal),this.botaoFechar.addEventListener("click",this.eventToggleModal),this.containerModal.addEventListener("click",this.clickForaModal)}init(){return this.botaoAbrir&&this.botaoFechar&&this.containerModal&&this.addModalEvents(),this}}('[data-modal="abrir"]','[data-modal="fechar"]','[data-modal="container"]').init(),function(){const t=document.querySelectorAll('[data-anime="scroll"]'),e=.6*innerHeight;function o(){t.forEach((t=>{t.getBoundingClientRect().top-e<0?t.classList.add("ativo"):t.classList.contains("ativo")&&t.classList.remove("ativo")}))}t.length&&(o(),window.addEventListener("scroll",o))}(),function(){const t=document.querySelectorAll('[data-anime="accordion"] dt');function e(){this.classList.toggle("ativo"),this.nextElementSibling.classList.add("ativo")}t.length&&(t[0].classList.add("ativo"),t[0].nextElementSibling.classList.add("ativo"),t.forEach((t=>{t.addEventListener("clcik",e)})))}(),function(){const t=document.querySelectorAll("[data-tooltip]"),e={handleEvent(t){this.tooltipBox.style.top=`${t.pageY+20}px`,this.tooltipBox.style.left=`${t.pageX+20}px`}},o={handleEvent(){this.tooltipBox.remove(),this.element.removeEventListener("mouseleave",o),this.element.removeEventListener("mousemove",e)}};function n(){const t=function(t){const e=document.createElement("div"),o=t.getAttribute("aria-label");return e.classList.add("tooltip"),e.innerText=o,document.body.appendChild(e),e}(this);e.tooltipBox=t,this.addEventListener("mousemove",e),o.tooltipBox=t,o.element=this,this.addEventListener("mouseleave",o)}t.forEach((t=>{t.addEventListener("mouseover",n)}))}(),function(){function e(e){e.preventDefault(),this.classList.add("active"),t(this,["touchstart","click"],(()=>{this.classList.remove("active")}))}document.querySelectorAll("[data-dropdown").forEach((t=>{["touchstart","click"].forEach((o=>{t.addEventListener(o,e)}))}))}(),function(){const e=document.querySelector('[data-menu="button"]'),o=document.querySelector('[data-menu="list"]'),n=["click","touchstart"];function i(){o.classList.add("active"),e.classList.add("active"),t(o,n,(()=>{o.classList.remove("active"),e.classList.remove("active")}))}e&&n.forEach((t=>{e.addEventListener(t,i)}))}(),function(){const t=document.querySelector("[data-semana"),e=t.dataset.semana.split(",").map(Number),o=t.dataset.horario.split(",").map(Number),n=new Date,i=n.getDay(),a=n.getHours(),s=-1!==e.indexOf(i),r=a>=o[0]&&a<o[1];s&&r&&t.classList.add("aberto")}(),async function(t){const o=await fetch("./animaisapi.json"),n=await o.json(),i=document.querySelector(".numeros-grid");n.forEach((t=>{const e=function(t){const e=document.createElement("div");return e.classList.add("numero-animal"),e.innerHTML=`<h3>${t.specie}</h3><span data-numero>${t.total}</span>`,e}(t);i.appendChild(e)})),new e("[data-numero]",".numeros","ativo").init()}(),fetch("https://blockchain.info/ticker").then((t=>t.json())).then((t=>{document.querySelector(".btc-preco").innerText=(1e3/t.BRL.sell).toFixed(4)})).catch((t=>{console.log(Error(t))}))})();