const faqItems = Array.from(document.querySelectorAll('[data-faq-item]'))
const faqItemOpenedClass = 'opened'

faqItems.forEach(faq => {
  const header = faq.querySelector('[data-faq-item-header]')

  header.addEventListener('click', function(){
    faq.classList.toggle(faqItemOpenedClass)
  })
})



document.querySelectorAll('[data-footer-animation-items]').forEach(container => {
  const content = container.innerHTML;
  container.innerHTML = content + content; // дублируем один раз
});



/*----------------------------------------------pdf-----------------------------------------------*/
document.querySelectorAll('.pdfViewer').forEach((viewer, i) => {
    const input = document.querySelectorAll('.pdfInput')[i];

    viewer.addEventListener('click', () => {
        input.click(); // Открыть диалог выбора файла
    });

    input.addEventListener('change', function(e) {
        const file = e.target.files[0];
        if (file) {
            const fileURL = URL.createObjectURL(file);
            viewer.innerHTML = `<iframe src="${fileURL}" width="100%" height="100%" style="border:none;"></iframe>`;
            viewer.style.border = "none";
            viewer.style.cursor = "default";
        }
    });
});