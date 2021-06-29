import ScrollSuave from './Modules/scroll-suave.js';
import initialAnimaçãoScroll from './Modules/animacao-scroll.js';
import initialAccordion from './Modules/accordion.js';
import TabNav from './Modules/navegacao-tab.js';
import Modal from './Modules/modal.js';
import initiTooltip from './Modules/tooltip.js';
import initiDropdpwnMenu from './Modules/dropdown-menu.js';
import initiMenuMobile from './Modules/menu-mobile.js';
import initiFuncionamento from './Modules/funcionamento.js';
import fetchAnimais from './Modules/animais-fetch.js';
import fetchBitcoin from './Modules/fetch-bitcoin.js';

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

const tabNav = new TabNav('[data-tab="menu"] li', '[data-tab="content"] section');
tabNav.init();

const modal = new Modal('[data-modal="abrir"]', '[data-modal="fechar"]', '[data-modal="container"]');
modal.init();

initialAnimaçãoScroll();
initialAccordion();
initiTooltip();
initiDropdpwnMenu();
initiMenuMobile();
initiFuncionamento();

fetchAnimais('./animaisapi.json', '.numeros-grid');

fetchBitcoin('https://blockchain.info/ticker', '.btc-preco');
