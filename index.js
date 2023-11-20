// Находим все ссылки с классом "nav__link"
const links = document.querySelectorAll('.nav__link, .btn');

// Обходим каждую ссылку и добавляем обработчик события клика
links.forEach(link => {
  link.addEventListener('click', smoothScroll);
});

// Функция для плавного скролла к элементу по его id
function smoothScroll(e) {
  e.preventDefault();
  
  const targetId = this.getAttribute('href'); // Получаем id элемента, к которому нужно прокрутить
  
  const targetPosition = document.querySelector(targetId).offsetTop; // Получаем позицию элемента относительно верхней части страницы
  
  window.scrollTo({
    top: targetPosition,
    behavior: 'smooth' // Делаем скролл плавным
  });
}




