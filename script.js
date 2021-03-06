import ScrollSuave from './Modules/scroll-suave.js';
import initialAccordion from './Modules/accordion.js';
import TabNav from './Modules/navegacao-tab.js';
import Modal from './Modules/modal.js';
import initiTooltip from './Modules/tooltip.js';
import DropdpwnMenu from './Modules/dropdown-menu.js';
import MenuMobile from './Modules/menu-mobile.js';
import Funcionamento from './Modules/funcionamento.js';
import fetchAnimais from './Modules/animais-fetch.js';
import fetchBitcoin from './Modules/fetch-bitcoin.js';
import ScrollAnima from './Modules/animacao-scroll.js';
import SlidesNav from './Modules/slide.js';

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

const tabNav = new TabNav('[data-tab="menu"] li', '[data-tab="content"] section');
tabNav.init();

const modal = new Modal('[data-modal="abrir"]', '[data-modal="fechar"]', '[data-modal="container"]');
modal.init();

const scrollAnima = new ScrollAnima('[data-anime="scroll"]');
scrollAnima.init();

const dropdownMenu = new DropdpwnMenu('[data-dropdown');
dropdownMenu.init();

const menuMobile = new MenuMobile('[data-menu="button"]', '[data-menu="list"]');
menuMobile.init();

const funcionamento = new Funcionamento('[data-semana', 'aberto');
funcionamento.init();

initialAccordion();
initiTooltip();

fetchAnimais('./animaisapi.json', '.numeros-grid');

fetchBitcoin('https://blockchain.info/ticker', '.btc-preco');

const slide = new SlidesNav('.slide', '.slide-wrapper');
slide.init();
slide.addControl('.custom-controls');
