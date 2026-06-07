try {
    var tg = window.Telegram.WebApp;
    tg.ready();
    tg.expand();
} catch (e) {
    // Fallback for browser testing
    console.warn('Telegram WebApp not available');
}

document.querySelectorAll('.choice-btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
        var choice = this.dataset.choice;
        document.getElementById('status').textContent = 'Выбрано! Отправляем...';
        document.getElementById('result').classList.remove('hidden');
        document.querySelectorAll('.choice-btn').forEach(function(b) { b.style.opacity = '0.5'; });
        this.style.opacity = '1';

        try {
            tg.sendData(JSON.stringify({ choice: choice }));
        } catch (e) {
            document.getElementById('status').textContent = 'Ошибка отправки';
        }
    });
});
