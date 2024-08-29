document.addEventListener('DOMContentLoaded', () => {
    const colorBoxes = document.querySelectorAll('[data-color]');
    const notification = document.getElementById('notification');

    colorBoxes.forEach(box => {
        box.addEventListener('click', () => {
            const color = box.getAttribute('data-color');
            copyToClipboard(color);
            showNotification(color);
        });
    });

    function copyToClipboard(text) {
        const tempInput = document.createElement('input');
        tempInput.value = text;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand('copy');
        document.body.removeChild(tempInput);
    }

    function showNotification(color) {
        notification.textContent = `${color} copied to clipboard!`;
        notification.classList.add('show');
        setTimeout(() => {
            notification.classList.remove('show');
        }, 2000);
    }
});
