// Acordion list
export default function initialAccordion() {
  const accordionList = document.querySelectorAll('[data-anime="accordion"] dt');

  function activeAccordion() {
    this.classList.toggle('ativo');
    this.nextElementSibling.classList.add('ativo');
  }

  if (accordionList.length) {
    accordionList[0].classList.add('ativo');
    accordionList[0].nextElementSibling.classList.add('ativo');

    accordionList.forEach((item) => {
      item.addEventListener('clcik', activeAccordion);
    });
  }
}
