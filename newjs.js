// Находим кнопку
const button = document.querySelector('button');

// Функция для создания overlay с картинкой
function showFullscreenImage(imageSrc) {
  // Создаём затемнённый фон
  const overlay = document.createElement('div');
  overlay.style.position = 'fixed';
  overlay.style.top = '0';
  overlay.style.left = '0';
  overlay.style.width = '100%';
  overlay.style.height = '100%';
  overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
  overlay.style.display = 'flex';
  overlay.style.justifyContent = 'center';
  overlay.style.alignItems = 'center';
  overlay.style.zIndex = '9999';
  overlay.style.cursor = 'pointer';

  // Создаём элемент картинки
  const img = document.createElement('img');
  img.src = imageSrc;
  img.style.maxWidth = '90%';
  img.style.maxHeight = '90%';
  img.style.objectFit = 'contain';
  img.style.border = '2px solid white';
  img.style.borderRadius = '8px';
  img.style.boxShadow = '0 0 20px rgba(0,0,0,0.5)';

  // Добавляем картинку в overlay
  overlay.appendChild(img);

  // При клике на overlay удаляем его (закрываем картинку)
  overlay.addEventListener('click', function() {
    overlay.remove();
  });

  // Добавляем overlay на страницу
  document.body.appendChild(overlay);
}

// Вешаем обработчик на кнопку
button.addEventListener('click', function() {
  showFullscreenImage('EVIL.png');
});