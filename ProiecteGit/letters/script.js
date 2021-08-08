const h1 = document.querySelector("#header");
let text = h1.innerText;
let letters = [...text];

let spans = letters.map((element) => `<span class="modify">${element}</span>`);
spans.reverse();
spans.forEach(e => h1.insertAdjacentHTML('afterbegin', e))


