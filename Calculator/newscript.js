let display = document.getElementById('inputbox');
let buttons = document.querySelectorAll('button');
let buttonsArray = Array.from(buttons);
let string = '';

// Event listener for keyboard keydown event
document.addEventListener('keydown', (event) => {
    const key = event.key;

    // Map keyboard keys to calculator button actions
    const keyMappings = {
        'Backspace': 'DEL',
        'Delete': 'AC',
        'Enter': '=',
        '+': '+',
        '-': '-',
        '*': '*',
        '/': '/',
        '.': '.',
        '0': '0',
        '1': '1',
        '2': '2',
        '3': '3',
        '4': '4',
        '5': '5',
        '6': '6',
        '7': '7',
        '8': '8',
        '9': '9'
    };

    // Find the corresponding button based on the pressed key
    const pressedButton = buttonsArray.find(btn => btn.innerHTML === keyMappings[key]);

    if (pressedButton) {
        // Simulate a click on the corresponding button
        pressedButton.click();
    }
});

buttonsArray.forEach(btn => {
    btn.addEventListener('click',(e)=>{
        if(e.target.innerHTML == 'DEL'){
            string = string.substring(0,string.length-1);
            display.value = string;
        }
        else if(e.target.innerHTML == 'AC'){
            string = '';
            display.value = string;
        }
        else if(e.target.innerHTML == '='){
            string = eval(string);
            display.value = string;
        }
        else{
            string += e.target.innerHTML
            display.value = string;
        }
    });
});
