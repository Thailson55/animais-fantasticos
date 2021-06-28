/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./Modules/accordion.js":
/*!******************************!*\
  !*** ./Modules/accordion.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initialAccordion)\n/* harmony export */ });\n// Acordion list\nfunction initialAccordion() {\n  const accordionList = document.querySelectorAll('[data-anime=\"accordion\"] dt');\n\n  function activeAccordion() {\n    this.classList.toggle('ativo');\n    this.nextElementSibling.classList.add('ativo');\n  }\n\n  if (accordionList.length) {\n    accordionList[0].classList.add('ativo');\n    accordionList[0].nextElementSibling.classList.add('ativo');\n\n    accordionList.forEach((item) => {\n      item.addEventListener('clcik', activeAccordion);\n    });\n  }\n}\n\n\n//# sourceURL=webpack://animais-fantasticos/./Modules/accordion.js?");

/***/ }),

/***/ "./Modules/anima-numeros.js":
/*!**********************************!*\
  !*** ./Modules/anima-numeros.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initiAnimaNumeros)\n/* harmony export */ });\nfunction initiAnimaNumeros() {\n  function animaNumeros() {\n    const numeros = document.querySelectorAll('[data-numero]');\n\n    numeros.forEach((numero) => {\n      const total = +numero.innerText;\n      const incremento = Math.floor(total / 100);\n      let start = 0;\n      const timer = setInterval(() => {\n        start += incremento;\n        numero.innerText = start;\n        if (start > total) {\n          numero.innerText = total;\n          clearInterval(timer);\n        }\n      }, 25 * Math.random());\n    });\n  }\n\n  let observer;\n\n  function handleMutation(mutation) {\n    if (mutation[0].target.classList.contains('ativo')) {\n      observer.disconnect();\n      animaNumeros();\n    }\n  }\n\n  observer = new MutationObserver(handleMutation);\n\n  const observerTarget = document.querySelector('.numeros');\n\n  observer.observe(observerTarget, { attributes: true });\n}\n\n\n//# sourceURL=webpack://animais-fantasticos/./Modules/anima-numeros.js?");

/***/ }),

/***/ "./Modules/animacao-scroll.js":
/*!************************************!*\
  !*** ./Modules/animacao-scroll.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initialAnimaçãoScroll)\n/* harmony export */ });\n// Animação ao Scroll\nfunction initialAnimaçãoScroll() {\n  const sections = document.querySelectorAll('[data-anime=\"scroll\"]');\n  const windowMetade = innerHeight * 0.60;\n\n  function animaScroll() {\n    sections.forEach((section) => {\n      const sectionTop = section.getBoundingClientRect().top;\n      const sectionVisible = (sectionTop - windowMetade) < 0;\n\n      if (sectionVisible) {\n        section.classList.add('ativo');\n      } else if (section.classList.contains('ativo')) {\n        section.classList.remove('ativo');\n      }\n    });\n  }\n\n  if (sections.length) {\n    animaScroll();\n    window.addEventListener('scroll', animaScroll);\n  }\n}\n\n\n//# sourceURL=webpack://animais-fantasticos/./Modules/animacao-scroll.js?");

/***/ }),

/***/ "./Modules/animais-fetch.js":
/*!**********************************!*\
  !*** ./Modules/animais-fetch.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initiFetchAnimais)\n/* harmony export */ });\n/* harmony import */ var _anima_numeros_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./anima-numeros.js */ \"./Modules/anima-numeros.js\");\n\n\nfunction initiFetchAnimais() {\n  function createAnimal(animal) {\n    const div = document.createElement('div');\n    div.classList.add('numero-animal');\n    div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span>`;\n    return div;\n  }\n\n  async function fetchAnimais(url) {\n    const animaisResponse = await fetch(url);\n    const animaisJson = await animaisResponse.json();\n    const numerosGrid = document.querySelector('.numeros-grid');\n    animaisJson.forEach((animal) => {\n      const divAnimal = createAnimal(animal);\n      numerosGrid.appendChild(divAnimal);\n    });\n    (0,_anima_numeros_js__WEBPACK_IMPORTED_MODULE_0__.default)();\n  }\n\n  fetchAnimais('./animaisapi.json');\n}\n\n\n//# sourceURL=webpack://animais-fantasticos/./Modules/animais-fetch.js?");

/***/ }),

/***/ "./Modules/dropdown-menu.js":
/*!**********************************!*\
  !*** ./Modules/dropdown-menu.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initiDropdpwnMenu)\n/* harmony export */ });\n/* harmony import */ var _outsideClick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outsideClick.js */ \"./Modules/outsideClick.js\");\n\n\nfunction initiDropdpwnMenu() {\n  const dropdownMenus = document.querySelectorAll('[data-dropdown');\n\n  function handleClick(event) {\n    event.preventDefault();\n    this.classList.add('active');\n    (0,_outsideClick_js__WEBPACK_IMPORTED_MODULE_0__.default)(this, ['touchstart', 'click'], () => {\n      this.classList.remove('active');\n    });\n  }\n\n  dropdownMenus.forEach((menu) => {\n    ['touchstart', 'click'].forEach((userEvent) => {\n      menu.addEventListener(userEvent, handleClick);\n    });\n  });\n}\n\n\n//# sourceURL=webpack://animais-fantasticos/./Modules/dropdown-menu.js?");

/***/ }),

/***/ "./Modules/fetch-bitcoin.js":
/*!**********************************!*\
  !*** ./Modules/fetch-bitcoin.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initiFetchBitcoin)\n/* harmony export */ });\nfunction initiFetchBitcoin() {\n  fetch('https://blockchain.info/ticker')\n    .then((r) => r.json())\n    .then((bitcoin) => {\n      const btc = document.querySelector('.btc-preco');\n\n      btc.innerText = (1000 / bitcoin.BRL.sell).toFixed(4);\n    }).catch((erro) => {\n      console.log(Error(erro));\n    });\n}\n\n\n//# sourceURL=webpack://animais-fantasticos/./Modules/fetch-bitcoin.js?");

/***/ }),

/***/ "./Modules/funcionamento.js":
/*!**********************************!*\
  !*** ./Modules/funcionamento.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initiFuncionamento)\n/* harmony export */ });\nfunction initiFuncionamento() {\n  const funcionamento = document.querySelector('[data-semana');\n  const diasSemana = funcionamento.dataset.semana.split(',').map(Number);\n  const horarioSemana = funcionamento.dataset.horario.split(',').map(Number);\n\n  const dataAgora = new Date();\n  const diaAgora = dataAgora.getDay();\n  const horarioAgora = dataAgora.getHours();\n\n  const semanaAberta = diasSemana.indexOf(diaAgora) !== -1;\n\n  const horarioAberto = (horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1]);\n\n  if (semanaAberta && horarioAberto) {\n    funcionamento.classList.add('aberto');\n  }\n}\n\n\n//# sourceURL=webpack://animais-fantasticos/./Modules/funcionamento.js?");

/***/ }),

/***/ "./Modules/menu-mobile.js":
/*!********************************!*\
  !*** ./Modules/menu-mobile.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initiMenuMobile)\n/* harmony export */ });\n/* harmony import */ var _outsideClick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outsideClick.js */ \"./Modules/outsideClick.js\");\n\n\nfunction initiMenuMobile() {\n  const menuButton = document.querySelector('[data-menu=\"button\"]');\n  const menuList = document.querySelector('[data-menu=\"list\"]');\n  const eventos = ['click', 'touchstart'];\n\n  function openMenu() {\n    menuList.classList.add('active');\n    menuButton.classList.add('active');\n\n    (0,_outsideClick_js__WEBPACK_IMPORTED_MODULE_0__.default)(menuList, eventos, () => {\n      menuList.classList.remove('active');\n      menuButton.classList.remove('active');\n    });\n  }\n\n  if (menuButton) {\n    eventos.forEach((event) => {\n      menuButton.addEventListener(event, openMenu);\n    });\n  }\n}\n\n\n//# sourceURL=webpack://animais-fantasticos/./Modules/menu-mobile.js?");

/***/ }),

/***/ "./Modules/modal.js":
/*!**************************!*\
  !*** ./Modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initiModal)\n/* harmony export */ });\nclass initiModal {\n  constructor(botaoAbrir, botaoFechar, containerModal) {\n    this.botaoAbrir = document.querySelector(botaoAbrir);\n    this.botaoFechar = document.querySelector(botaoFechar);\n    this.containerModal = document.querySelector(containerModal);\n\n    // bind this ao callback para\n    // fazer referência ao objeto da classe\n    this.eventToggleModal = this.eventToggleModal.bind(this);\n    this.clickForaModal = this.clickForaModal.bind(this);\n  }\n\n  // abre ou fecha o modal\n  toggleModal() {\n    this.containerModal.classList.toggle('ativo');\n  }\n\n  // adiciona o evento de toggle ao modal\n  eventToggleModal(event) {\n    event.preventDefault();\n    this.toggleModal();\n  }\n\n  // fecha o modal ao clicar do lado de fora\n  clickForaModal(event) {\n    if (event.target === this.containerModal) {\n      this.toggleModal();\n    }\n  }\n\n  // adiciona o eventos aos elementos do modal\n  addModalEvents() {\n    this.botaoAbrir.addEventListener('click', this.eventToggleModal);\n\n    this.botaoFechar.addEventListener('click', this.eventToggleModal);\n\n    this.containerModal.addEventListener('click', this.clickForaModal);\n  }\n\n  init() {\n    if (this.botaoAbrir && this.botaoFechar && this.containerModal) {\n      this.addModalEvents();\n    }\n    return this;\n  }\n}\n\n\n//# sourceURL=webpack://animais-fantasticos/./Modules/modal.js?");

/***/ }),

/***/ "./Modules/navegacao-tab.js":
/*!**********************************!*\
  !*** ./Modules/navegacao-tab.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TabNav)\n/* harmony export */ });\nclass TabNav {\n  constructor(menu, content) {\n    this.tabMenu = document.querySelectorAll(menu);\n    this.tabContent = document.querySelectorAll(content);\n    this.activeClass = 'ativo';\n  }\n\n  // Ativa a tab de acordo com o index da mesma\n  activeTab(index) {\n    this.tabContent.forEach((section) => {\n      section.classList.remove(this.activeClass);\n    });\n    const direcao = this.tabContent[index].dataset.anime;\n    this.tabContent[index].classList.add(this.activeClass, direcao);\n  }\n\n  // Adiciona os eventos nas tabs\n  addTabNavEvent() {\n    this.tabMenu.forEach((itemMenu, index) => {\n      itemMenu.addEventListener('click', () => this.activeTab(index));\n    });\n  }\n\n  init() {\n    if (this.tabMenu.length && this.tabContent.length) {\n      // ativar primeiro item\n      this.activeTab(0);\n      this.addTabNavEvent();\n    }\n  }\n}\n\n\n//# sourceURL=webpack://animais-fantasticos/./Modules/navegacao-tab.js?");

/***/ }),

/***/ "./Modules/outsideClick.js":
/*!*********************************!*\
  !*** ./Modules/outsideClick.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ outsideClick)\n/* harmony export */ });\nfunction outsideClick(element, events, callback) {\n  const html = document.documentElement;\n  const outside = 'data-outside';\n\n  function handleOutsideClick(event) {\n    if (!element.contains(event.target)) {\n      element.removeAttribute(outside);\n      events.forEach((userEvent) => {\n        html.removeEventListener(userEvent, handleOutsideClick);\n      });\n      callback();\n    }\n  }\n\n  if (!element.hasAttribute(outside)) {\n    events.forEach((userEvent) => {\n      setTimeout(() => { html.addEventListener(userEvent, handleOutsideClick); });\n    });\n    element.setAttribute(outside, '');\n  }\n}\n\n\n//# sourceURL=webpack://animais-fantasticos/./Modules/outsideClick.js?");

/***/ }),

/***/ "./Modules/scroll-suave.js":
/*!*********************************!*\
  !*** ./Modules/scroll-suave.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ScrollSuave)\n/* harmony export */ });\n// Scroll suave link interno\nclass ScrollSuave {\n  constructor(links, options) {\n    this.linksInternos = document.querySelectorAll(links);\n    if (options === undefined) {\n      this.options = { behavior: 'smooth', block: 'start' };\n    } else {\n      this.options = options;\n    }\n\n    this.scrollToSection = this.scrollToSection.bind(this);\n  }\n\n  scrollToSection(event) {\n    event.preventDefault();\n    const href = event.currentTarget.getAttribute('href');\n    const section = document.querySelector(href);\n\n    section.scrollIntoView(this.options);\n    // Forma alternativa\n    // const topo = section.offsetTop\n    // window.scrollTo({\n    // top: topo,\n    // behavior:'smooth'\n    // })\n  }\n\n  addLinkEvent() {\n    this.linksInternos.forEach((link) => {\n      link.addEventListener('click', this.scrollToSection);\n    });\n  }\n\n  init() {\n    if (this.linksInternos.length) {\n      this.addLinkEvent();\n    }\n    return this;\n  }\n}\n\n\n//# sourceURL=webpack://animais-fantasticos/./Modules/scroll-suave.js?");

/***/ }),

/***/ "./Modules/tooltip.js":
/*!****************************!*\
  !*** ./Modules/tooltip.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initiTooltip)\n/* harmony export */ });\nfunction initiTooltip() {\n  const toolTips = document.querySelectorAll('[data-tooltip]');\n\n  const onMouseMove = {\n    handleEvent(event) {\n      this.tooltipBox.style.top = `${event.pageY + 20}px`;\n      this.tooltipBox.style.left = `${event.pageX + 20}px`;\n    },\n  };\n\n  const onMouseLeave = {\n    handleEvent() {\n      this.tooltipBox.remove();\n      this.element.removeEventListener('mouseleave', onMouseLeave);\n      this.element.removeEventListener('mousemove', onMouseMove);\n    },\n  };\n\n  function criarTolltipBox(element) {\n    const tooltipBox = document.createElement('div');\n    const text = element.getAttribute('aria-label');\n    tooltipBox.classList.add('tooltip');\n    tooltipBox.innerText = text;\n    document.body.appendChild(tooltipBox);\n    return tooltipBox;\n  }\n\n  function onMouseOver(event) {\n    const tooltipBox = criarTolltipBox(this);\n    tooltipBox.style.top = `${event.pageY}px`;\n    tooltipBox.style.left = `${event.pageX}px`;\n\n    onMouseMove.tooltipBox = tooltipBox;\n    this.addEventListener('mousemove', onMouseMove);\n\n    onMouseLeave.tooltipBox = tooltipBox;\n    onMouseLeave.element = this;\n    this.addEventListener('mouseleave', onMouseLeave);\n  }\n\n  toolTips.forEach((item) => {\n    item.addEventListener('mouseover', onMouseOver);\n  });\n}\n\n\n//# sourceURL=webpack://animais-fantasticos/./Modules/tooltip.js?");

/***/ }),

/***/ "./script.js":
/*!*******************!*\
  !*** ./script.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Modules_scroll_suave_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Modules/scroll-suave.js */ \"./Modules/scroll-suave.js\");\n/* harmony import */ var _Modules_animacao_scroll_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Modules/animacao-scroll.js */ \"./Modules/animacao-scroll.js\");\n/* harmony import */ var _Modules_accordion_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Modules/accordion.js */ \"./Modules/accordion.js\");\n/* harmony import */ var _Modules_navegacao_tab_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Modules/navegacao-tab.js */ \"./Modules/navegacao-tab.js\");\n/* harmony import */ var _Modules_modal_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Modules/modal.js */ \"./Modules/modal.js\");\n/* harmony import */ var _Modules_tooltip_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Modules/tooltip.js */ \"./Modules/tooltip.js\");\n/* harmony import */ var _Modules_dropdown_menu_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Modules/dropdown-menu.js */ \"./Modules/dropdown-menu.js\");\n/* harmony import */ var _Modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Modules/menu-mobile.js */ \"./Modules/menu-mobile.js\");\n/* harmony import */ var _Modules_funcionamento_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Modules/funcionamento.js */ \"./Modules/funcionamento.js\");\n/* harmony import */ var _Modules_animais_fetch_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Modules/animais-fetch.js */ \"./Modules/animais-fetch.js\");\n/* harmony import */ var _Modules_fetch_bitcoin_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Modules/fetch-bitcoin.js */ \"./Modules/fetch-bitcoin.js\");\n\n\n\n\n\n\n\n\n\n\n\n\nconst scrollSuave = new _Modules_scroll_suave_js__WEBPACK_IMPORTED_MODULE_0__.default('[data-menu=\"suave\"] a[href^=\"#\"]');\nscrollSuave.init();\n\nconst tabNav = new _Modules_navegacao_tab_js__WEBPACK_IMPORTED_MODULE_3__.default('[data-tab=\"menu\"] li', '[data-tab=\"content\"] section');\ntabNav.init();\n\nconst modal = new _Modules_modal_js__WEBPACK_IMPORTED_MODULE_4__.default('[data-modal=\"abrir\"]', '[data-modal=\"fechar\"]', '[data-modal=\"container\"]');\nmodal.init();\n\n(0,_Modules_animacao_scroll_js__WEBPACK_IMPORTED_MODULE_1__.default)();\n(0,_Modules_accordion_js__WEBPACK_IMPORTED_MODULE_2__.default)();\n(0,_Modules_tooltip_js__WEBPACK_IMPORTED_MODULE_5__.default)();\n(0,_Modules_dropdown_menu_js__WEBPACK_IMPORTED_MODULE_6__.default)();\n(0,_Modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_7__.default)();\n(0,_Modules_funcionamento_js__WEBPACK_IMPORTED_MODULE_8__.default)();\n(0,_Modules_animais_fetch_js__WEBPACK_IMPORTED_MODULE_9__.default)();\n(0,_Modules_fetch_bitcoin_js__WEBPACK_IMPORTED_MODULE_10__.default)();\n\n\n//# sourceURL=webpack://animais-fantasticos/./script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./script.js");
/******/ 	
/******/ })()
;