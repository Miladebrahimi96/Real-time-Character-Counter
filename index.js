const textAria = document.querySelector('#text-aria');
const totalChars = document.querySelector('.total-chars');
const remainingChars = document.querySelector('.remaining-chars');



textAria.addEventListener('keyup', e => {
    const text = e.target.value;
    totalChars.innerText = text.length;
    remainingChars.innerText = textAria.maxLength - totalChars.innerText;
})