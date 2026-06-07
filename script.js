const tg = window.Telegram.WebApp;
tg.ready();
tg.expand();

document.querySelectorAll('.choice-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const choice = btn.dataset.choice;
        document.getElementById('status').textContent = 'Выбрано! Отправляем...';
        document.getElementById('result').classList.remove('hidden');
        document.querySelectorAll('.choice-btn').forEach(b => b.style.opacity = '0.5');
        btn.style.opacity = '1';

        tg.sendData(JSON.stringify({ choice }));
    });
});
