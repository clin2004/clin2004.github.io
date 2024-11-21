let popup1Window = null;
let popup2Window = null;
let popup3Window = null;

function openPopup1() {
    if (popup1Window) popup1Window.close();
    if (popup2Window) popup2Window.close();
    if (popup3Window) popup3Window.close();

    const width = window.screen.width - 200; // slightly smaller than screen width
    const height = window.screen.height - 230; // slightly smaller than screen height
    const left = 100;
    const top = 70;

                        popup1Window = window.open('', 'Popup1', `width=${width},height=${height},left=${left},top=${top}`);
                        
                        popup1Window.document.write(`
                            <html>
                            <head>

                                <style>
                                    body { 
                                        margin: 0;
                                        padding: 0;
                                        font-family: monospace, monospace;
                                        background: black;
                                        color: white;
                                        overflow: hidden;
                                        display: flex;
                                        flex-direction: column;
                                        align-items: center;
                                        justify-content: center;
                                        height: 100vh;
                                        position: relative;
                                    }
                                    .gif-container {
                                        width: 100%;
                                        height: 100%;
                                        position: absolute;
                                        top: 0;
                                        left: 0;
                                    }
                                    .gif, .png {
                                        width: 100%;
                                        height: 100%;
                                        object-fit: cover;
                                        position: absolute;
                                        top: 0;
                                        left: 0;
                                    }
                                    .png {
                                        opacity: 0;
                                    }
                                    .text-overlay {
                                        position: absolute;
                                        top: 80%;
                                        left: 50%;
                                        transform: translate(-50%, -50%);
                                        font-size: 18px;
                                        text-align: center;
                                        max-width: 60%;
                                        opacity: 0;
                                        z-index: 10;
                                        font-weight: 400;
                                        font-style: normal;
                                    }
                                    .nav-button {
                                        position: absolute;
                                        bottom: 55px;
                                        padding: 8px 16px;
                                        margin: 5px;
                                        cursor: pointer;
                                        background: none;
                                        border: none;
                                        color: white;
                                        transition: all 0.3s ease;
                                        opacity: 0;
                                        z-index: 10;
                                        font-family: monospace, monospace;
                                        font-size: 18px;
                                        font-weight: 400;
                                        font-style: normal;
                                        text-shadow: 0 0 10px white;
                                    }
                                    .nav-button:hover {
                                        color: rgba(255, 255, 255, 1);
                                        text-shadow: 0 0 20px white;
                                        transform: scale(1.05);
                                    }
                                    @keyframes fadeIn {
                                        from { 
                                            opacity: 0;
                                            transform: translate(-50%, -40%);
                                        }
                                        to { 
                                            opacity: 1;
                                            transform: translate(-50%, -50%);
                                        }
                                    }
                                    .fade-in {
                                        animation: fadeIn 1s ease forwards;
                                    }
                                </style>
                            </head>
                            <body>
                                <div class="gif-container">
                                    <img src="stepinside.gif" class="gif" id="mainGif">
                                    <img src="stepinside.jpg" class="png" id="staticImage">
                                </div>
                                <div class="text-overlay" id="thoughtText">
                                    i bet you’ve never thought about it, but the internet and dreams are similar. they’re areas where the repressed conscious mind escapes.
                                </div>
                                <button onclick="window.opener.openPopup2()" class="nav-button" id="nextButton">
                                    my dreams don’t feel like an escape. they feel like messages.
                                </button>

                                <script>
                                    const gif = document.getElementById('mainGif');
                                    const staticImage = document.getElementById('staticImage');
                                    const text = document.getElementById('thoughtText');
                                    const button = document.getElementById('nextButton');

                                    const gifDuration = 8080;
                                    const textDelay = 7000; // Text appears 1 second before GIF ends

                                    async function handleAnimation() {
                                        // Show text earlier
                                        setTimeout(() => {
                                            text.classList.add('fade-in');
                                        }, textDelay);

                                        // Switch to PNG instantly when GIF ends
                                        setTimeout(() => {
                                            staticImage.style.opacity = '1';
                                            gif.style.display = 'none';
                                            
                                            // Show button after a delay
                                            setTimeout(() => {
                                                button.style.opacity = '1';
                                            }, 3000);
                                        }, gifDuration);
                                    }

                                    handleAnimation();
                                </script>
                            </body>
                            </html>
                        `);
                    }

function openPopup2() {
    if (popup2Window) popup2Window.close();

    popup2Window = window.open('', 'Popup2', 'width=675,height=550,left=800,top=180');
    
    popup2Window.document.write(`
        <html>
        <head>
            <style>
                body { 
                    margin: 0;
                    padding: 0;
                    font-family: monospace, monospace;
                    background: black;
                    color: white;
                    overflow: hidden;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    height: 100vh;
                    position: relative;
                }
                .gif-container {
                    width: 100%;
                    height: 100%;
                    position: absolute;
                    top: 0;
                    left: 0;
                }
                .gif {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    position: absolute;
                    top: 0;
                    left: 0;
                }
                .text-overlay {
                    position: absolute;
                    top: 75%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    font-size: 18px;
                    text-align: center;
                    max-width: 80%;
                    opacity: 0;
                    z-index: 10;
                    font-weight: 400;
                    font-style: normal;
                }
                .nav-button {
                    position: absolute;
                    bottom: 35px;
                    padding: 8px 16px;
                    margin: 5px;
                    cursor: pointer;
                    background: none;
                    border: none;
                    color: white;
                    transition: all 0.3s ease;
                    opacity: 0;
                    z-index: 10;
                    font-family: monospace, monospace;
                    font-size: 18px;
                    font-weight: 400;
                    font-style: normal;
                    text-shadow: 0 0 10px white;
                }
                .nav-button:hover {
                    color: rgba(255, 255, 255, 1);
                    text-shadow: 0 0 20px white;
                    transform: scale(1.05);
                }
                @keyframes fadeIn {
                    from { 
                        opacity: 0;
                        transform: translate(-50%, -40%);
                    }
                    to { 
                        opacity: 1;
                        transform: translate(-50%, -50%);
                    }
                }
                .fade-in {
                    animation: fadeIn 1s ease forwards;
                }
            </style>
        </head>
        <body>
            <div class="gif-container">
                <img src="talking.gif" class="gif" id="mainGif">
            </div>
            <div class="text-overlay" id="thoughtText">
                messages from whom? from yourself? or from the collective unconscious of everyone dreaming right now?
            </div>
            <button onclick="window.opener.openPopup3()" class="nav-button" id="nextButton">
                let me tell you my last dream...
            </button>

            <script>
                const gif = document.getElementById('mainGif');
                const text = document.getElementById('thoughtText');
                const button = document.getElementById('nextButton');

                const gifDuration = 5840;
                const textDelay = 500;

                async function handleAnimation() {
                    setTimeout(() => {
                        text.classList.add('fade-in');
                    }, textDelay);

                    setTimeout(() => {
                        button.style.opacity = '1';
                    }, gifDuration + 2000);
                }

                handleAnimation();
            </script>
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
