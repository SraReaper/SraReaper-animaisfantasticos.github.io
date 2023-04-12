export default function initAnimacaoScroll() {
    const sections = document.querySelectorAll('.js-scroll');
    if (sections.length) {
        const windowMetade = window.innerHeight * 0.6;

        function animaScroll() {
            sections.forEach((section) => {
                const sectionTop = section.getBoundingClientRect().top;
                const isSectionVisible = (sectionTop - windowMetade) < 0;
                if (isSectionVisible)
                    section.classList.add('js-scroll-ativo');
                else
                    section.classList.remove('js-scroll-ativo');
            })
        }

        animaScroll();

        window.addEventListener('scroll', animaScroll);
    }
}
