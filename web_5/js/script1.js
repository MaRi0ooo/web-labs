const addToCartButtons = document.querySelectorAll('#products button[data-name][data-price]');

addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        const name = button.getAttribute('data-name');
        const price = parseFloat(button.getAttribute('data-price'));
        const imageSrc = button.parentNode.querySelector('img').getAttribute('src');

        let cart = JSON.parse(localStorage.getItem('cart')) || [];

        cart.push({
            name,
            price,
            imageSrc
        });

        localStorage.setItem('cart', JSON.stringify(cart));
    });
});

function goToCartPage() {
    window.location.href = "index2.html";
}
