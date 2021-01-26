const $box = document.querySelector('.box');
let count = 0;

$box.addEventListener('click', function(e) {
    count++;
    let target = e.target.closest('.magical');

    if (!target) return;
    
    repaint(target);
    move(target);
});

function move(el) {
    el.style.order = count;
}

function repaint(el) {
    if (el.classList.contains('blue')) {
        el.classList.remove('blue');
        el.classList.add('green');
    } else if (el.classList.contains('green')) {
        el.classList.remove('green');
        el.classList.add('yellow');
    } else if (el.classList.contains('yellow')) {
        el.classList.remove('yellow');
        el.classList.add('blue');
    } else {
        el.classList.add('blue');
    }
}


function classToggle(element, classToToggle) {
    const $el = document.querySelector(element);
    const classArray = $el.className.split(' ');

    if (classArray.includes(classToToggle)) {        
        const indexToRemove = classArray.findIndex((item) => item === classToToggle);
        classArray.splice(indexToRemove, 1);
    } else {
        classArray.push(classToToggle);
    }
    
    $el.className = classArray.join(' ');
}

// FOR TESTING
// classToggle('.box', 'classy');