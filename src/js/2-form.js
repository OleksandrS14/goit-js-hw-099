// Функція для збереження значень полів у локальне сховище
const form = document.querySelector('.feedback-form');

// Відновлення значень полів з локального сховища при завантаженні сторінки
document.addEventListener('DOMContentLoaded', () => {
    const savedEmail = localStorage.getItem('email');
    const savedMessage = localStorage.getItem('message');

    if (savedEmail) {
        form.email.value = savedEmail;
    }
    if (savedMessage) {
        form.message.value = savedMessage;
    }
});

// Збереження значень полів у локальне сховище при введенні
form.addEventListener('input', () => {
    localStorage.setItem('email', form.email.value);
    localStorage.setItem('message', form.message.value);
});

// Очистка локального сховища при відправленні форми
form.addEventListener('submit', (event) => {
    event.preventDefault(); // Запобігання перезавантаженню сторінки
    console.log('Form submitted:', {
        email: form.email.value,
        message: form.message.value,
    });

    // Очищення локального сховища після відправлення
    localStorage.removeItem('email');
    localStorage.removeItem('message');

    // Очищення полів форми
    form.reset();
});