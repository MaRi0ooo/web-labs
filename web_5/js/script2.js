const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
const cartTable = document.querySelector('.table tbody');

cartItems.forEach(item => {
    const { name, price, imageSrc } = item;

    const row = `
        <tr>
            <td>
                <img src="${imageSrc}" alt="${name}" class="product-image">
                <span class="product-name">${name}</span>
            </td>
            <td>$${price}</td>
        </tr>
    `;

    cartTable.insertAdjacentHTML('beforeend', row);
});

const clearButton = document.getElementById("clear-storage");
clearButton.addEventListener('click', () => {
    localStorage.clear();
});

function goToProductPage() {
    window.location.href = "index1.html";
}