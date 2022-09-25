// Dark mode toggle
const checkbox = document.getElementById('darkmode');
const content = document.getElementById('content');
const balance = document.getElementById('balance');

document.addEventListener('DOMContentLoaded', function () {
    checkbox.addEventListener('change', (event) => {
        if (event.currentTarget.checked) {
            document.body.style.backgroundColor = 'rgb(1, 4, 9)';
            content.style.setProperty('color', 'white');
        } else {
            document.body.style.backgroundColor = 'transparent';
            content.style.setProperty('color', 'black');
        }
    })
});

function clicked() {
    var currentbalance = parseInt(document.getElementById('balance').innerHTML);
    balance.innerHTML = currentbalance + 1;
}