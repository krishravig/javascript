console.log('Hello javascript');

/*
HTML Element
    id (uniquely identify element), class(apply the style names), dataset, name, style(inline style) attributes(name=value pairs)
    The stored (custom) data can then be used in the page's JavaScript to create a more engaging user experience (without any Ajax calls or server-side database queries).
 */
const body = document.body;

// create element
const header = document.createElement('h2');
header.innerText = 'DOM manipulation';

// add element
body.append(header);

// update element value
const h1Tag = document.querySelector('h1');
h1Tag.innerHTML += 'Welcome';

// remove element
//h1Tag.remove();

const row2 = document.querySelector('#row2');
row2.dataset.second = 'Modified second row';
console.log(row2.dataset.second);
console.log(row2.classList);

const row1 = document.querySelector('.record');
console.log(row1.dataset.first);