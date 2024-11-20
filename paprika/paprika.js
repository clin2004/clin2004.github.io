let popup1Window = null;
let popup2Window = null;
let popup3Window = null;

function openPopup1() {
    if (popup1Window) popup1Window.close();
    if (popup2Window) popup2Window.close();
    if (popup3Window) popup3Window.close();

    popup1Window = window.open('', 'Popup1', 'width=300,height=200,left=100,top=100');
    
    popup1Window.document.write(`
        <html>
        <head>
            <style>
                body { 
                    font-family: Arial, sans-serif; 
                    padding: 20px;
                    background: black;
                    color: white;
                }
                button {
                    padding: 8px 16px;
                    margin: 5px;
                    cursor: pointer;
                    background: none;
                    border: none;
                    color: white;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    transition: all 0.3s ease;
                }
                button:hover {
                    color: rgba(255, 255, 255, 1);
                    text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
                    transform: scale(1.1);
                }
            </style>
        </head>
        <body>
            <h3>Popup 1</h3>
            <p>This is the first popup window!</p>
            <button onclick="window.opener.openPopup2()">Open Popup 2</button>
        </body>
        </html>
    `);
}

function openPopup2() {
    if (popup2Window) popup2Window.close();
    popup2Window = window.open('', 'Popup2', 'width=300,height=200,left=200,top=200');
    popup2Window.document.write(`
        <html>
        <head>
            <style>
                body { 
                    font-family: Arial, sans-serif; 
                    padding: 20px;
                    background: black;
                    color: white;
                }
                button {
                    padding: 8px 16px;
                    margin: 5px;
                    cursor: pointer;
                    background: none;
                    border: none;
                    color: white;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    transition: all 0.3s ease;
                }
                button:hover {
                    color: rgba(255, 255, 255, 1);
                    text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
                    transform: scale(1.1);
                }
            </style>
        </head>
        <body>
            <h3>Popup 2</h3>
            <p>This is the second popup window!</p>
            <button onclick="window.opener.openPopup1()">Back to Popup 1</button>
            <button onclick="window.opener.openPopup3()">Open Popup 3</button>
        </body>
        </html>
    `);
}

function openPopup3() {
    if (popup3Window) popup3Window.close();
    popup3Window = window.open('', 'Popup3', 'width=300,height=200,left=300,top=300');
    popup3Window.document.write(`
        <html>
        <head>
            <style>
                body { 
                    font-family: Arial, sans-serif; 
                    padding: 20px;
                    background: black;
                    color: white;
                }
                button {
                    padding: 8px 16px;
                    margin: 5px;
                    cursor: pointer;
                    background: none;
                    border: none;
                    color: white;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    transition: all 0.3s ease;
                }
                button:hover {
                    color: rgba(255, 255, 255, 1);
                    text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
                    transform: scale(1.1);
                }
            </style>
        </head>
        <body>
            <h3>Popup 3</h3>
            <p>This is the third popup window!</p>
            <button onclick="window.opener.openPopup2()">Back to Popup 2</button>
        </body>
        </html>
    `);
}

const landingContainer = document.getElementById('landing-container');
const gifContainer = document.getElementById('gif-container');
const enterButton = document.getElementById('enter-button');
const popupButton = document.getElementById('popup-button');

[enterButton, popupButton].forEach(button => {
    button.addEventListener('click', function() {
        this.classList.add('clicked');
        setTimeout(() => this.classList.remove('clicked'), 500);
    });
});

enterButton.addEventListener('click', () => {
    landingContainer.classList.add('hidden');
    gifContainer.classList.remove('hidden');
    
    const gif = gifContainer.querySelector('img');
    const topText = document.getElementById('top-text');
    
    const gifDuration = 3000;
    const buttonDelay = 1000; // 1 second delay for the button
    
    setTimeout(() => {
        topText.classList.remove('hidden');
        topText.classList.add('fade-in');
        
        // Add delay for the button
        setTimeout(() => {
            popupButton.classList.remove('hidden');
            popupButton.classList.add('fade-in');
        }, buttonDelay);
        
    }, gifDuration);
});

popupButton.addEventListener('click', openPopup1);
