import ScrollSuave from './Modules/scroll-suave.js';
import Accordion from './Modules/accordion.js';
import initiTabNav from './Modules/navegacao-tab.js';
import initiModal from './Modules/modal.js';
import initiTooltip from './Modules/tooltip.js';
import initiDropdpwnMenu from './Modules/dropdown-menu.js';
import initiMenuMobile from './Modules/menu-mobile.js';
import initiFuncionamento from './Modules/funcionamento.js';
import initiFetchAnimais from './Modules/animais-fetch.js';
import initiFetchBitcoin from './Modules/fetch-bitcoin.js';
import initialAnimaçãoScroll from './Modules/animacao-scroll.js';

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();

initiTabNav();
initiModal();
initiTooltip();
initiDropdpwnMenu();
initiMenuMobile();
initiFuncionamento();
initiFetchAnimais();
initiFetchBitcoin();
initialAnimaçãoScroll();
