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