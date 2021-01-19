const $squares = document.querySelectorAll('.magical');

let outerCount = 1;
function outerCounter() {
    return () => { return outerCount++; }
};
const theOuterCounter = outerCounter();

$squares.forEach(square => {
    let count = 1;
    function counter() {
        return () => { return count++; } 
    };
    const theCounter = counter();
    
    square.addEventListener('click', function() {
        let theCount = theCounter();

        if (theCount % 3 === 1) {
            square.classList.add('blue');
            square.classList.remove('green');            
            square.classList.remove('yellow');
        } else if (theCount % 3 === 2) {
            square.classList.add('green');        
            square.classList.remove('yellow');    
            square.classList.remove('blue');
        } else if (theCount % 3 === 0) {
            square.classList.add('yellow');            
            square.classList.remove('blue');            
            square.classList.remove('green');
        };
        square.style.order = theOuterCounter();
    });
});

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
