let cart = 0;

function buy() {
    cart = cart + 1;
    document.getElementById('cart-counter').innerHTML = cart;
}

document.getElementById('theme-btn').onclick = function() {
    document.body.classList.toggle('dark-theme');
    
    let btn = document.getElementById('theme-btn');
    
    if (document.body.classList.contains('dark-theme')) {
        btn.innerHTML = '☀️ Светлая тема';
    } else {
        btn.innerHTML = '🌙 Темная тема';
    }
}

document.getElementById('form').onsubmit = function(event) {
    event.preventDefault();
    
    let name = document.getElementById('name').value;
    alert('Спасибо, ' + name + '! Опрос отправлен.');
}