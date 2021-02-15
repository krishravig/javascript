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

/* DOM Traversal
parent to down elements - querySelector
child to top level elements - closest
. children - lists all child elements
.parentElement - show the parent
.nextElementSibling - next side element ( Right side)
.previousSibling - previous side (Left side)
 */

const grantparent = document.querySelector('.grandparent');
changeColor(grantparent.children[1]);

const child = document.querySelector('.child');
console.log(child.textContent);

const sibling = child.nextElementSibling;
changeColor(sibling);

const lastChild = document.querySelector('#child4');
const parent2 = lastChild.closest('.parent');
console.log(parent2.textContent);
changeColor(parent2);

function changeColor(element) {
    element.style.backgroundColor = "#500";
}

/* Event Bubbling - child is embedded into parent and its embedded into grand parent
// child is clicked then it executes the event listener function and propagates through all the way up.
- addEventListener
- Capture phase
- Bubble phase - e.stopPropagation()
- removeEventListener
- Event delegation */

const sayHi = () => console.log('Hi from Parent');

const parent = document.querySelector('.parent');
grantparent.addEventListener('click', e => console.log('grand parent capture'), {capture : true});
parent.addEventListener('click', e => console.log('parent1 capture'), {capture : true});
child.addEventListener('click', e => { e.stopImmediatePropagation(); console.log('child1 capture')}, {capture : true});

grantparent.addEventListener('click', e => console.log('grand parent Bubble'));
parent.addEventListener('click', sayHi);
child.addEventListener('click', e => console.log('child1 Bubble'));

setTimeout( ()=> {
    parent.removeEventListener('click', sayHi)
}, 2000);

/* this will take care of adding event listeners for dynamically created elements */

const addGlobalEventListener = (type, selector) => {
    document.addEventListener(type, e => {
        if ( e.target.matches(selector))
            console.log('Its clicked');
    })
};

addGlobalEventListener('click', 'div')