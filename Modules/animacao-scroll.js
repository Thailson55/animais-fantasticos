// Animação ao Scroll
export default function initialAnimaçãoScroll() {
  const sections = document.querySelectorAll('[data-anime="scroll"]');
  const windowMetade = innerHeight * 0.60;

  function animaScroll() {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const sectionVisible = (sectionTop - windowMetade) < 0;

      if (sectionVisible) {
        section.classList.add('ativo');
      } else if (section.classList.contains('ativo')) {
        section.classList.remove('ativo');
      }
    });
  }

  if (sections.length) {
    animaScroll();
    window.addEventListener('scroll', animaScroll);
  }
}
