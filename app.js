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
        input.click();
    });

    input.addEventListener('change', function (e) {
        handleFile(e.target.files[0], viewer);
    });

    viewer.addEventListener('dragover', (e) => {
        e.preventDefault();
        viewer.style.border = "2px dashed #4CAF50";
    });

    viewer.addEventListener('dragleave', () => {
        viewer.style.border = "";
    });

    viewer.addEventListener('drop', (e) => {
        e.preventDefault();
        viewer.style.border = "";
        const file = e.dataTransfer.files[0];
        handleFile(file, viewer);
    });

    function handleFile(file, viewer) {
        if (!file) return;

        if (file.type !== "application/pdf") {
            alert("Пожалуйста, загрузите PDF файл.");
            return;
        }

        const fileURL = URL.createObjectURL(file);
        viewer.innerHTML = `<iframe src="${fileURL}" width="100%" height="100%" style="border:none;"></iframe>`;
        viewer.style.border = "none";
        viewer.style.cursor = "default";
    }
});



/*----------------------------------burger-button------------------------------*/

const burgerButton = document.getElementById('burger-button')
const sidebar = document.getElementById('sidebar')

const burgerButtonActiveClass = 'active'
const sidebarActiveClass = 'opened'
const bodyFixedClass = 'body--fixed'

burgerButton.addEventListener('click', function(){
  burgerButton.classList.toggle(burgerButtonActiveClass)
  sidebar.classList.toggle(sidebarActiveClass)
  document.body.classList.toggle(bodyFixedClass)
})


const sidebarItems = document.querySelectorAll('.sidebar-menu-item')

sidebarItems.forEach(item => {
  item.addEventListener('click', () => {

    console.log('heroih')

    sidebar.classList.remove(sidebarActiveClass)
    burgerButton.classList.remove(burgerButtonActiveClass)
    document.body.classList.remove(bodyFixedClass)
  })
})