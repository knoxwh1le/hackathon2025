document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.toggle-btn');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const card = button.closest('.card');
      const fullContent = card.querySelector('.full-content');
      const shortContent = card.querySelector('.short-content');

      // Toggle visibility of full content
      if (fullContent.style.display === 'block') {
        fullContent.style.display = 'none';
        shortContent.style.display = 'block';
        button.textContent = 'Подробнее';
      } else {
        fullContent.style.display = 'block';
        shortContent.style.display = 'none';
        button.textContent = 'Скрыть';
      }
    });
  });
});
