import outsideClick from './outsideClick.js';

export default class DropdpwnMenu {
  constructor(dropdownMenus, events) {
    this.dropdownMenus = document.querySelectorAll(dropdownMenus);
    // define touchstart e click como argumento padrão
    // de vents caso o usuário não defina
    if (events === undefined) {
      this.events = ['touchstart', 'click'];
    } else {
      this.events = events;
    }
    this.activeClass = 'active';

    this.activeDropdownMenu = this.activeDropdownMenu.bind(this);
  }

  // ativa o dropdown menu e adiciona function que observa o clock fora
  activeDropdownMenu(event) {
    event.preventDefault();
    const element = event.currentTarget;
    element.classList.add(this.activeClass);
    outsideClick(element, this.events, () => {
      element.classList.remove('active');
    });
  }

  // adiciona os eventos ao dropdownmenu
  addDropdownMenusEvent() {
    this.dropdownMenus.forEach((menu) => {
      this.events.forEach((userEvent) => {
        menu.addEventListener(userEvent, this.activeDropdownMenu);
      });
    });
  }

  init() {
    if (this.dropdownMenus.length) {
      this.addDropdownMenusEvent();
    }
    return this;
  }
}
