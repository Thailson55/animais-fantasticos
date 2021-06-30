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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ AnimaNumeros)\n/* harmony export */ });\nclass AnimaNumeros {\n  constructor(numeros, observerTarget, observerClass) {\n    this.numeros = document.querySelectorAll(numeros);\n    this.observerTarget = document.querySelector(observerTarget);\n    this.observerClass = observerClass;\n\n    this.handleMutation = this.handleMutation.bind(this);\n  }\n\n  // recebe um elemento do dom com número em seu texto\n  // incrementa apartir de 0 até o número final\n  static incrementarNumero(numero) {\n    const total = +numero.innerText;\n    const incremento = Math.floor(total / 100);\n    let start = 0;\n    const timer = setInterval(() => {\n      start += incremento;\n      numero.innerText = start;\n      if (start > total) {\n        numero.innerText = total;\n        clearInterval(timer);\n      }\n    }, 25 * Math.random());\n  }\n\n  // ativa incrementar búmero para cada número selecionado no dom\n  animaNumeros() {\n    this.numeros.forEach((numero) => {\n      this.constructor.incrementarNumero(numero);\n    });\n  }\n\n  // funão que ocorre quando a mutação ocorrer\n  handleMutation(mutation) {\n    if (mutation[0].target.classList.contains(this.observerClass)) {\n      this.observer.disconnect();\n      this.animaNumeros();\n    }\n  }\n\n  // adiciona o mutationObserver p/ verificar quando a classe ativo é ads ao elemento target\n  addMutationObserver() {\n    this.observer = new MutationObserver(this.handleMutation);\n    this.observer.observe(this.observerTarget, { attributes: true });\n  }\n\n  init() {\n    if (this.numeros.length && this.observerTarget) {\n      this.addMutationObserver();\n    }\n    return this;\n  }\n}\n\n\n//# sourceURL=webpack://animais-fantasticos/./Modules/anima-numeros.js?");

/***/ }),

/***/ "./Modules/animacao-scroll.js":
/*!************************************!*\
  !*** ./Modules/animacao-scroll.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ScrollAnima)\n/* harmony export */ });\n/* harmony import */ var _debounce_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./debounce.js */ \"./Modules/debounce.js\");\n\n\nclass ScrollAnima {\n  constructor(sections) {\n    this.sections = document.querySelectorAll(sections);\n    this.windowMetade = window.innerHeight * 0.6;\n\n    this.checkDistance = (0,_debounce_js__WEBPACK_IMPORTED_MODULE_0__.default)(this.checkDistance.bind(this), 50);\n  }\n\n  // Pega a distância de cada item em relação\n  // ao topo do site\n  getDistance() {\n    this.distance = [...this.sections].map((section) => {\n      const offset = section.offsetTop;\n      return {\n        element: section,\n        offset: Math.floor(offset - this.windowMetade),\n      };\n    });\n  }\n\n  // Verifica a distância em cada objeto\n  // em relação ao scroll do site\n  checkDistance() {\n    this.distance.forEach((item) => {\n      if (window.pageYOffset > item.offset) {\n        item.element.classList.add('ativo');\n      } else if (item.element.classList.contains('ativo')) {\n        item.element.classList.remove('ativo');\n      }\n    });\n  }\n\n  init() {\n    if (this.sections.length) {\n      this.getDistance();\n      this.checkDistance();\n      window.addEventListener('scroll', this.checkDistance);\n    }\n    return this;\n  }\n\n  // Remove o event de scroll\n  stop() {\n    window.removeEventListener('scroll', this.checkDistance);\n  }\n}\n\n\n//# sourceURL=webpack://animais-fantasticos/./Modules/animacao-scroll.js?");

/***/ }),

/***/ "./Modules/animais-fetch.js":
/*!**********************************!*\
  !*** ./Modules/animais-fetch.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ fetchAnimais)\n/* harmony export */ });\n/* harmony import */ var _anima_numeros_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./anima-numeros.js */ \"./Modules/anima-numeros.js\");\n\n\nfunction fetchAnimais(url, target) {\n  // cria a div contendo informações com o total de animais\n  function createAnimal(animal) {\n    const div = document.createElement('div');\n    div.classList.add('numero-animal');\n    div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span>`;\n    return div;\n  }\n\n  // preenche cada animal no dom\n  const numerosGrid = document.querySelector(target);\n  function preencherAnimais(animal) {\n    const divAnimal = createAnimal(animal);\n    numerosGrid.appendChild(divAnimal);\n  }\n  // anima os números de cada animal\n  function animaAnimaisNumeros() {\n    const animaNumeros = new _anima_numeros_js__WEBPACK_IMPORTED_MODULE_0__.default('[data-numero]', '.numeros', 'ativo');\n    animaNumeros.init();\n  }\n\n  // puxa os animais através de um arquivo json\n  // e cria cada animal usando create animal\n  async function criarAnimais() {\n    // fetch e espera resposta e transforma em json\n    const animaisResponse = await fetch(url);\n    const animaisJson = await animaisResponse.json();\n    // Após transformar ativa as funções para preencher e animar\n    animaisJson.forEach((animal) => {\n      preencherAnimais(animal);\n      animaAnimaisNumeros();\n    });\n  }\n  return criarAnimais();\n}\n\n\n//# sourceURL=webpack://animais-fantasticos/./Modules/animais-fetch.js?");

/***/ }),

/***/ "./Modules/debounce.js":
/*!*****************************!*\
  !*** ./Modules/debounce.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ debounce)\n/* harmony export */ });\nfunction debounce(callback, delay) {\n  let timer;\n  return (...args) => {\n    if (timer) clearTimeout(timer);\n    timer = setTimeout(() => {\n      callback(...args);\n      timer = null;\n    }, delay);\n  };\n}\n\n\n//# sourceURL=webpack://animais-fantasticos/./Modules/debounce.js?");

/***/ }),

/***/ "./Modules/dropdown-menu.js":
/*!**********************************!*\
  !*** ./Modules/dropdown-menu.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ DropdpwnMenu)\n/* harmony export */ });\n/* harmony import */ var _outsideClick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outsideClick.js */ \"./Modules/outsideClick.js\");\n\n\nclass DropdpwnMenu {\n  constructor(dropdownMenus, events) {\n    this.dropdownMenus = document.querySelectorAll(dropdownMenus);\n    // define touchstart e click como argumento padrão\n    // de vents caso o usuário não defina\n    if (events === undefined) {\n      this.events = ['touchstart', 'click'];\n    } else {\n      this.events = events;\n    }\n    this.activeClass = 'active';\n\n    this.activeDropdownMenu = this.activeDropdownMenu.bind(this);\n  }\n\n  // ativa o dropdown menu e adiciona function que observa o clock fora\n  activeDropdownMenu(event) {\n    event.preventDefault();\n    const element = event.currentTarget;\n    element.classList.add(this.activeClass);\n    (0,_outsideClick_js__WEBPACK_IMPORTED_MODULE_0__.default)(element, this.events, () => {\n      element.classList.remove('active');\n    });\n  }\n\n  // adiciona os eventos ao dropdownmenu\n  addDropdownMenusEvent() {\n    this.dropdownMenus.forEach((menu) => {\n      this.events.forEach((userEvent) => {\n        menu.addEventListener(userEvent, this.activeDropdownMenu);\n      });\n    });\n  }\n\n  init() {\n    if (this.dropdownMenus.length) {\n      this.addDropdownMenusEvent();\n    }\n    return this;\n  }\n}\n\n\n//# sourceURL=webpack://animais-fantasticos/./Modules/dropdown-menu.js?");

/***/ }),

/***/ "./Modules/fetch-bitcoin.js":
/*!**********************************!*\
  !*** ./Modules/fetch-bitcoin.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ fetchBitcoin)\n/* harmony export */ });\nfunction fetchBitcoin(url, target) {\n  fetch(url)\n    .then((r) => r.json())\n    .then((bitcoin) => {\n      const btc = document.querySelector(target);\n\n      btc.innerText = (1000 / bitcoin.BRL.sell).toFixed(4);\n    }).catch((erro) => {\n      console.log(Error(erro));\n    });\n}\n\n\n//# sourceURL=webpack://animais-fantasticos/./Modules/fetch-bitcoin.js?");

/***/ }),

/***/ "./Modules/funcionamento.js":
/*!**********************************!*\
  !*** ./Modules/funcionamento.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Funcionamento)\n/* harmony export */ });\nclass Funcionamento {\n  constructor(funcionamento, activeClass) {\n    this.funcionamento = document.querySelector(funcionamento);\n    this.activeClass = activeClass;\n  }\n\n  dadosFuncionamento() {\n    this.diasSemana = this.funcionamento.dataset.semana.split(',').map(Number);\n    this.horarioSemana = this.funcionamento.dataset.horario.split(',').map(Number);\n  }\n\n  dadosAgora() {\n    this.dataAgora = new Date();\n    this.diaAgora = this.dataAgora.getDay();\n    this.horarioAgora = this.dataAgora.getUTCHours() - 3;\n  }\n\n  estaAberto() {\n    const semanaAberta = this.diasSemana.indexOf(this.diaAgora) !== -1;\n\n    const horarioAberto = (this.horarioAgora >= this.horarioSemana[0]\n      && this.horarioAgora < this.horarioSemana[1]);\n\n    return semanaAberta && horarioAberto;\n  }\n\n  ativaAberto() {\n    if (this.estaAberto()) {\n      this.funcionamento.classList.add(this.activeClass);\n    }\n  }\n\n  init() {\n    if (this.funcionamento) {\n      this.dadosFuncionamento();\n      this.dadosAgora();\n      this.ativaAberto();\n    }\n    return this;\n  }\n}\n\n\n//# sourceURL=webpack://animais-fantasticos/./Modules/funcionamento.js?");

/***/ }),

/***/ "./Modules/menu-mobile.js":
/*!********************************!*\
  !*** ./Modules/menu-mobile.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MenuMobile)\n/* harmony export */ });\n/* harmony import */ var _outsideClick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outsideClick.js */ \"./Modules/outsideClick.js\");\n\n\nclass MenuMobile {\n  constructor(menuButton, menuList, events) {\n    this.menuButton = document.querySelector(menuButton);\n    this.menuList = document.querySelector(menuList);\n    this.activeClass = 'active';\n\n    if (events === undefined) {\n      this.events = ['touchstart', 'click'];\n    } else {\n      this.events = events;\n    }\n\n    this.openMenu = this.openMenu.bind(this);\n  }\n\n  openMenu() {\n    this.menuList.classList.add(this.activeClass);\n    this.menuButton.classList.add(this.activeClass);\n\n    (0,_outsideClick_js__WEBPACK_IMPORTED_MODULE_0__.default)(this.menuList, this.events, () => {\n      this.menuList.classList.remove(this.activeClass);\n      this.menuButton.classList.remove(this.activeClass);\n    });\n  }\n\n  addMenuMobileEvents() {\n    this.events.forEach((event) => {\n      this.menuButton.addEventListener(event, this.openMenu);\n    });\n  }\n\n  init() {\n    if (this.menuButton && this.menuList) {\n      this.addMenuMobileEvents();\n    }\n    return this;\n  }\n}\n\n\n//# sourceURL=webpack://animais-fantasticos/./Modules/menu-mobile.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TabNav)\n/* harmony export */ });\nclass TabNav {\n  constructor(menu, content) {\n    this.tabMenu = document.querySelectorAll(menu);\n    this.tabContent = document.querySelectorAll(content);\n    this.activeClass = 'ativo';\n  }\n\n  // Ativa a tab de acordo com o index da mesma\n  activeTab(index) {\n    this.tabContent.forEach((section) => {\n      section.classList.remove(this.activeClass);\n    });\n    const direcao = this.tabContent[index].dataset.anime;\n    this.tabContent[index].classList.add(this.activeClass, direcao);\n  }\n\n  // Adiciona os eventos nas tabs\n  addTabNavEvent() {\n    this.tabMenu.forEach((itemMenu, index) => {\n      itemMenu.addEventListener('click', () => this.activeTab(index));\n    });\n  }\n\n  init() {\n    if (this.tabMenu.length && this.tabContent.length) {\n      // ativar primeiro item\n      this.activeTab(0);\n      this.addTabNavEvent();\n    }\n    return this;\n  }\n}\n\n\n//# sourceURL=webpack://animais-fantasticos/./Modules/navegacao-tab.js?");

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

/***/ "./Modules/slide.js":
/*!**************************!*\
  !*** ./Modules/slide.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Slide\": () => (/* binding */ Slide),\n/* harmony export */   \"default\": () => (/* binding */ SlidesNav)\n/* harmony export */ });\n/* harmony import */ var _debounce_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./debounce.js */ \"./Modules/debounce.js\");\n\n\nclass Slide {\n  constructor(slide, wrapper) {\n    this.slide = document.querySelector(slide);\n    this.wrapper = document.querySelector(wrapper);\n\n    this.dist = {\n      finalPosition: 0, startX: 0, movement: 0,\n    };\n    this.activeClass = 'active';\n    this.changeEvent = new Event('changeEvent');\n  }\n\n  transition(active) {\n    this.slide.style.transition = active ? 'transform .3s' : '';\n  }\n\n  moveSlide(distX) {\n    this.dist.movePosition = distX;\n    this.slide.style.transform = `translate3d(${distX}px, 0, 0)`;\n  }\n\n  updatePosition(clientX) {\n    this.dist.movement = (this.dist.startX - clientX) * 1.6;\n    return this.dist.finalPosition - this.dist.movement;\n  }\n\n  onStart(event) {\n    let moveType;\n    if (event.type === 'mousedown') {\n      event.preventDefault();\n      this.dist.startX = event.clientX;\n      moveType = 'mousemove';\n    } else {\n      this.dist.startX = event.changedTouches[0].clientX;\n      moveType = 'touchmove';\n    }\n    this.wrapper.addEventListener(moveType, this.onMove);\n    this.transition(false);\n  }\n\n  onMove(event) {\n    const pointerPosition = (event.type === 'mousemove') ? event.clientX : event.changedTouches[0].clientX;\n    const finalPosition = this.updatePosition(pointerPosition);\n    this.moveSlide(finalPosition);\n  }\n\n  onEnd(event) {\n    const moveType = (event.type === 'mouseup') ? 'mousemove' : 'touchmove';\n    this.wrapper.removeEventListener(moveType, this.onMove);\n    this.dist.finalPosition = this.dist.movePosition;\n    this.transition(true);\n    this.changeSlideOnEnd();\n  }\n\n  changeSlideOnEnd() {\n    if (this.dist.movement > 120 && this.index.next !== undefined) {\n      this.activeNextSlide();\n    } else if (this.dist.movement < -120 && this.index.prev !== undefined) {\n      this.activePrevSlide();\n    } else {\n      this.changeSlide(this.index.active);\n    }\n  }\n\n  addSlideEvents() {\n    this.wrapper.addEventListener('mousedown', this.onStart);\n    this.wrapper.addEventListener('touchstart', this.onStart);\n    this.wrapper.addEventListener('mouseup', this.onEnd);\n    this.wrapper.addEventListener('touchend', this.onEnd);\n  }\n\n  slidePosition(slide) {\n    const margin = (this.wrapper.offsetWidth - slide.offsetWidth) / 2;\n    return -(slide.offsetLeft - margin);\n  }\n\n  // slides config\n  slidesConfigs() {\n    this.slideArray = [...this.slide.children].map((element) => {\n      const position = this.slidePosition(element);\n      return { position, element };\n    });\n  }\n\n  slidesIndexNav(index) {\n    const last = this.slideArray.length - 1;\n    this.index = {\n      prev: index ? index - 1 : undefined,\n      active: index,\n      next: index === last ? undefined : index + 1,\n    };\n  }\n\n  changeSlide(index) {\n    const activeSlide = this.slideArray[index];\n    this.moveSlide(activeSlide.position);\n    this.slidesIndexNav(index);\n    this.dist.finalPosition = activeSlide.position;\n    this.changeActiveClass();\n    this.wrapper.dispatchEvent(this.changeEvent);\n  }\n\n  changeActiveClass() {\n    this.slideArray.forEach((item) => {\n      item.element.classList.remove(this.activeClass);\n    });\n    this.slideArray[this.index.active].element.classList.add(this.activeClass);\n  }\n\n  activePrevSlide() {\n    if (this.index.prev !== undefined) {\n      this.changeSlide(this.index.prev);\n    }\n  }\n\n  activeNextSlide() {\n    if (this.index.next !== undefined) {\n      this.changeSlide(this.index.next);\n    }\n  }\n\n  onResize() {\n    setTimeout(() => {\n      this.slidesConfigs();\n      this.changeSlide(this.index.active);\n    }, 1000);\n  }\n\n  addResizeEvent() {\n    window.addEventListener('resize', this.onResize);\n  }\n\n  bindEvents() {\n    this.onStart = this.onStart.bind(this);\n    this.onMove = this.onMove.bind(this);\n    this.onEnd = this.onEnd.bind(this);\n    this.activePrevSlide = this.activePrevSlide.bind(this);\n    this.activeNextSlide = this.activeNextSlide.bind(this);\n\n    this.onResize = (0,_debounce_js__WEBPACK_IMPORTED_MODULE_0__.default)(this.onResize.bind(this), 200);\n  }\n\n  init() {\n    this.bindEvents();\n    this.transition(true);\n    this.addSlideEvents();\n    this.slidesConfigs();\n    this.addResizeEvent();\n    this.changeSlide(0);\n    return this;\n  }\n}\n\nclass SlidesNav extends Slide {\n  constructor(slide, wrapper) {\n    super(slide, wrapper);\n    this.bindControlEvent();\n  }\n\n  addArrow(prev, next) {\n    this.prevElement = document.querySelector(prev);\n    this.nextElement = document.querySelector(next);\n    this.addArrowEvent();\n  }\n\n  addArrowEvent() {\n    this.prevElement.addEventListener('click', this.activePrevSlide);\n    this.nextElement.addEventListener('click', this.activeNextSlide);\n  }\n\n  createControl() {\n    const control = document.createElement('ul');\n    control.dataset.control = 'slide';\n\n    this.slideArray.forEach((item, index) => {\n      control.innerHTML += `<li><a href=\"#slide${index + 1}\">${index}</a></li>`;\n    });\n    this.wrapper.appendChild(control);\n    return control;\n  }\n\n  eventControl(item, index) {\n    item.addEventListener('click', (event) => {\n      event.preventDefault();\n      this.changeSlide(index);\n    });\n    this.wrapper.addEventListener('changeEvent', this.activeControlItem);\n  }\n\n  activeControlItem() {\n    this.controlArray.forEach((item) => {\n      item.classList.remove(this.activeClass);\n    });\n    this.controlArray[this.index.active].classList.add(this.activeClass);\n  }\n\n  addControl(customControl) {\n    this.control = document.querySelector(customControl) || this.createControl();\n    this.controlArray = [...this.control.children];\n\n    this.activeControlItem();\n    this.controlArray.forEach(this.eventControl);\n  }\n\n  bindControlEvent() {\n    this.eventControl = this.eventControl.bind(this);\n    this.activeControlItem = this.activeControlItem.bind(this);\n  }\n}\n\n\n//# sourceURL=webpack://animais-fantasticos/./Modules/slide.js?");

/***/ }),

/***/ "./Modules/tooltip.js":
/*!****************************!*\
  !*** ./Modules/tooltip.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initTooltip)\n/* harmony export */ });\nfunction initTooltip() {\n  const tooltips = document.querySelectorAll('[data-tooltip]');\n\n  const onMouseMove = {\n    handleEvent(event) {\n      this.tooltipBox.style.top = `${event.pageY + 20}px`;\n      this.tooltipBox.style.left = `${event.pageX + 20}px`;\n    },\n  };\n\n  const onMouseLeave = {\n    handleEvent() {\n      this.tooltipBox.remove();\n      this.element.removeEventListener('mouseleave', onMouseLeave);\n      this.element.removeEventListener('mousemove', onMouseMove);\n    },\n  };\n\n  function criarTooltipBox(element) {\n    const tooltipBox = document.createElement('div');\n    const text = element.getAttribute('aria-label');\n    tooltipBox.classList.add('tooltip');\n    tooltipBox.innerText = text;\n    document.body.appendChild(tooltipBox);\n    return tooltipBox;\n  }\n\n  function onMouseOver() {\n    const tooltipBox = criarTooltipBox(this);\n\n    onMouseMove.tooltipBox = tooltipBox;\n    this.addEventListener('mousemove', onMouseMove);\n\n    onMouseLeave.tooltipBox = tooltipBox;\n    onMouseLeave.element = this;\n    this.addEventListener('mouseleave', onMouseLeave);\n  }\n\n  tooltips.forEach((item) => {\n    item.addEventListener('mouseover', onMouseOver);\n  });\n}\n\n\n//# sourceURL=webpack://animais-fantasticos/./Modules/tooltip.js?");

/***/ }),

/***/ "./script.js":
/*!*******************!*\
  !*** ./script.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Modules_scroll_suave_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Modules/scroll-suave.js */ \"./Modules/scroll-suave.js\");\n/* harmony import */ var _Modules_accordion_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Modules/accordion.js */ \"./Modules/accordion.js\");\n/* harmony import */ var _Modules_navegacao_tab_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Modules/navegacao-tab.js */ \"./Modules/navegacao-tab.js\");\n/* harmony import */ var _Modules_modal_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Modules/modal.js */ \"./Modules/modal.js\");\n/* harmony import */ var _Modules_tooltip_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Modules/tooltip.js */ \"./Modules/tooltip.js\");\n/* harmony import */ var _Modules_dropdown_menu_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Modules/dropdown-menu.js */ \"./Modules/dropdown-menu.js\");\n/* harmony import */ var _Modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Modules/menu-mobile.js */ \"./Modules/menu-mobile.js\");\n/* harmony import */ var _Modules_funcionamento_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Modules/funcionamento.js */ \"./Modules/funcionamento.js\");\n/* harmony import */ var _Modules_animais_fetch_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Modules/animais-fetch.js */ \"./Modules/animais-fetch.js\");\n/* harmony import */ var _Modules_fetch_bitcoin_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Modules/fetch-bitcoin.js */ \"./Modules/fetch-bitcoin.js\");\n/* harmony import */ var _Modules_animacao_scroll_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Modules/animacao-scroll.js */ \"./Modules/animacao-scroll.js\");\n/* harmony import */ var _Modules_slide_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Modules/slide.js */ \"./Modules/slide.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst scrollSuave = new _Modules_scroll_suave_js__WEBPACK_IMPORTED_MODULE_0__.default('[data-menu=\"suave\"] a[href^=\"#\"]');\nscrollSuave.init();\n\nconst tabNav = new _Modules_navegacao_tab_js__WEBPACK_IMPORTED_MODULE_2__.default('[data-tab=\"menu\"] li', '[data-tab=\"content\"] section');\ntabNav.init();\n\nconst modal = new _Modules_modal_js__WEBPACK_IMPORTED_MODULE_3__.default('[data-modal=\"abrir\"]', '[data-modal=\"fechar\"]', '[data-modal=\"container\"]');\nmodal.init();\n\nconst scrollAnima = new _Modules_animacao_scroll_js__WEBPACK_IMPORTED_MODULE_10__.default('[data-anime=\"scroll\"]');\nscrollAnima.init();\n\nconst dropdownMenu = new _Modules_dropdown_menu_js__WEBPACK_IMPORTED_MODULE_5__.default('[data-dropdown');\ndropdownMenu.init();\n\nconst menuMobile = new _Modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_6__.default('[data-menu=\"button\"]', '[data-menu=\"list\"]');\nmenuMobile.init();\n\nconst funcionamento = new _Modules_funcionamento_js__WEBPACK_IMPORTED_MODULE_7__.default('[data-semana', 'aberto');\nfuncionamento.init();\n\n(0,_Modules_accordion_js__WEBPACK_IMPORTED_MODULE_1__.default)();\n(0,_Modules_tooltip_js__WEBPACK_IMPORTED_MODULE_4__.default)();\n\n(0,_Modules_animais_fetch_js__WEBPACK_IMPORTED_MODULE_8__.default)('./animaisapi.json', '.numeros-grid');\n\n(0,_Modules_fetch_bitcoin_js__WEBPACK_IMPORTED_MODULE_9__.default)('https://blockchain.info/ticker', '.btc-preco');\n\nconst slide = new _Modules_slide_js__WEBPACK_IMPORTED_MODULE_11__.default('.slide', '.slide-wrapper');\nslide.init();\nslide.addControl('.custom-controls');\n\n\n//# sourceURL=webpack://animais-fantasticos/./script.js?");

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