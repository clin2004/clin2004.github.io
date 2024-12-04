let popup1Window = null;
let popup2Window = null;
let popup3Window = null;
let popup4Window = null;
let popup5Window = null;
let popup6Window = null;

// First, add these variables and the createRandomPopups function to the main window scope
let randomPopupWindows = [];
const gifUrls = [
    'paprika1.gif',
    'paprika2.gif',
    'paprika3.gif',
    'paprika4.gif',
    'paprika5.gif',
    'paprika6.gif',
    'paprika7.gif',
    'paprika8.gif',
    'paprika9.gif',
    'paprika10.gif',
    'paprika11.gif'
];

function createRandomPopups() {
    // Close any existing random popups
    randomPopupWindows.forEach(popup => {
        if (popup && !popup.closed) popup.close();
    });
    randomPopupWindows = [];

    const screenWidth = window.screen.availWidth;
    const screenHeight = window.screen.availHeight;
    const popupWidth = 340;
    const popupHeight = 230;
    const minDistance = Math.min(popupWidth, popupHeight) * 0.4; // Minimum distance between popup centers

    let positions = [];
    const maxAttempts = 50; // Maximum attempts to place each popup

    // Function to check if a position is too close to existing positions
    function isTooClose(x, y, existingPositions) {
        return existingPositions.some(pos => {
            const distance = Math.sqrt(
                Math.pow(x - pos.left, 2) + 
                Math.pow(y - pos.top, 2)
            );
            return distance < minDistance;
        });
    }

    // Function to get a random position that's not too close to edges
    function getRandomPosition() {
        const margin = 50; // Margin from screen edges
        return {
            left: Math.floor(margin + Math.random() * (screenWidth - popupWidth - margin * 2)),
            top: Math.floor(margin + Math.random() * (screenHeight - popupHeight - margin * 2))
        };
    }

    // Create 11 popups with semi-random positioning
    for (let i = 0; i < 11; i++) {
        let position;
        let attempts = 0;

        // Try to find a position that's not too close to others
        do {
            position = getRandomPosition();
            attempts++;
        } while (
            attempts < maxAttempts && 
            isTooClose(position.left, position.top, positions)
        );

        positions.push(position);
        
        // Add some chaos with slight random offset
        position.left += Math.random() * 30 - 15;
        position.top += Math.random() * 30 - 15;

        const popup = window.open('', `RandomPopup${i}`, 
            `width=${popupWidth},height=${popupHeight},left=${position.left},top=${position.top}`
        );
        
        randomPopupWindows.push(popup);
        
        popup.document.write(`
            <html>
            <head>
                <style>
                    body {
                        margin: 0;
                        padding: 0;
                        background: black;
                        color: white;
                        font-family: monospace, monospace;
                        overflow: hidden;
                        position: relative;
                        width: 100vw;
                        height: 100vh;
                    }
                    .gif-container {
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                    }
                    .gif {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                    }
                    .text-overlay {
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        z-index: 10;
                        color: white;
                        font-size: 16px;
                        text-align: center;
                        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
                        pointer-events: none;
                    }
                </style>
            </head>
            <body>
                <div class="gif-container">
                    <img src="${gifUrls[i]}" class="gif">
                </div>
            </body>
            </html>
        `);
    }
}



function openPopup1() {
    if (popup1Window) popup1Window.close();
    if (popup2Window) popup2Window.close();
    if (popup3Window) popup3Window.close();
    if (popup4Window) popup4Window.close();
    if (popup5Window) popup5Window.close();
    if (popup6Window) popup5Window.close();

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
                                            }, 500);
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
                    }, gifDuration + 1000);
                }

                handleAnimation();
            </script>
        </body>
        </html>
    `);
}

function openPopup3() {
    if (popup3Window) popup3Window.close();
    
    popup3Window = window.open('', 'Popup3', 'width=675,height=550,left=100,top=180');
    
    popup3Window.document.write(`
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
                .dream-input {
                    position: absolute;
                    width: 400px;
                    height: 120px;
                    background: transparent;
                    border: none;
                    padding: 16px;
                    color: transparent;
                    font-family: monospace, monospace;
                    resize: none;
                    font-size: 16px;
                    line-height: 24px;
                    caret-color: white;
                    z-index: 2;
                    left: 50%;
                    top: 50%;
                    transform: translate(-50%, -50%);
                    word-wrap: break-word;
                    white-space: pre-wrap;
                    overflow-wrap: break-word;
                }
                .dream-input:focus {
                    outline: none;
                }
                .dream-input::placeholder {
                    color: rgba(255, 255, 255, 0.5);
                }
                .typing-container {
                    position: absolute;
                    width: 400px;
                    height: 120px;
                    left: 50%;
                    top: 50%;
                    transform: translate(-50%, -50%);
                    padding: 16px;
                    z-index: 1;
                }
                .typing-letter {
                    position: absolute;
                    color: white;
                    font-family: monospace, monospace;
                    font-size: 16px;
                    line-height: 24px;
                    text-shadow: 0 0 10px white;
                }
                @keyframes float-away {
                    0%, 50% {
                        opacity: 1;
                        transform: translate(0, 0) rotate(0deg);
                    }
                    100% {
                        opacity: 0;
                        transform: translate(var(--tx), var(--ty)) rotate(var(--tr));
                    }
                }
                .floating {
                    animation: float-away 4s ease-out forwards;
                }
                .text-overlay {
                    position: absolute;
                    top: 25%;
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
            <div class="text-overlay" id="thoughtText">
                what was your last dream?
            </div>
            
            <div class="typing-container" id="typingContainer"></div>
            
            <textarea 
                class="dream-input" 
                id="dreamInput" 
                placeholder="type your dream here..."
                wrap="hard"
                maxlength="400"></textarea>

            <button onclick="window.opener.openPopup4()" class="nav-button" id="nextButton">
                what does this mean?
            </button>

            <script>
                const dreamInput = document.getElementById('dreamInput');
                const typingContainer = document.getElementById('typingContainer');
                const nextButton = document.getElementById('nextButton');
                const thoughtText = document.getElementById('thoughtText');

                thoughtText.classList.add('fade-in');

                setTimeout(() => {
                    nextButton.style.opacity = '1';
                }, 15000);

                function measureText(text) {
                    const measurer = document.createElement('div');
                    measurer.style.font = getComputedStyle(dreamInput).font;
                    measurer.style.position = 'absolute';
                    measurer.style.visibility = 'hidden';
                    measurer.style.whiteSpace = 'pre-wrap';
                    measurer.style.width = '400px'; // Same as input width
                    measurer.textContent = text;
                    document.body.appendChild(measurer);
                    
                    const lines = Math.floor(measurer.offsetHeight / 24); // 24px line height
                    const lastLineWidth = measurer.offsetWidth;
                    
                    document.body.removeChild(measurer);
                    return { lines, lastLineWidth };
                }

                function createFloatingLetter(letter, input) {
                    const element = document.createElement('div');
                    element.classList.add('typing-letter');
                    element.textContent = letter;

                    const cursorPos = input.selectionStart;
                    const textBeforeCursor = input.value.slice(0, cursorPos);
                    const measurements = measureText(textBeforeCursor);
                    
                    const containerRect = typingContainer.getBoundingClientRect();
                    const lines = measurements.lines;
                    
                    // If we're at the start of a new line
                    if (textBeforeCursor.endsWith('\\n')) {
                        element.style.left = (containerRect.left) + 'px';
                        element.style.top = (containerRect.top + (lines * 24)) + 'px';
                    } else {
                        // Get the last line's text
                        const lastNewline = textBeforeCursor.lastIndexOf('\\n');
                        const lastLine = textBeforeCursor.slice(lastNewline + 1);
                        
                        // Measure the width of the last line
                        const temp = document.createElement('span');
                        temp.style.font = getComputedStyle(input).font;
                        temp.style.visibility = 'hidden';
                        temp.style.position = 'absolute';
                        temp.textContent = lastLine;
                        document.body.appendChild(temp);
                        const width = temp.offsetWidth;
                        document.body.removeChild(temp);
                        
                        element.style.left = (containerRect.left + width) + 'px';
                        element.style.top = (containerRect.top + ((lines - 1) * 24)) + 'px';
                    }
                    
                    const tx = (Math.random() - 0.5) * 400;
                    const ty = -Math.random() * 300;
                    const tr = (Math.random() - 0.5) * 720;
                    
                    element.style.setProperty('--tx', \`\${tx}px\`);
                    element.style.setProperty('--ty', \`\${ty}px\`);
                    element.style.setProperty('--tr', \`\${tr}deg\`);
                    
                    document.body.appendChild(element);
                    
                    setTimeout(() => {
                        element.classList.add('floating');
                    }, 1000);

                    element.addEventListener('animationend', () => {
                        element.remove();
                    });
                }

                dreamInput.addEventListener('input', (e) => {
                    const newChar = e.target.value[e.target.value.length - 1];
                    if (newChar) {
                        createFloatingLetter(newChar, e.target);
                    }
                });

                // Handle automatic line breaks
                dreamInput.addEventListener('keyup', (e) => {
                    const text = e.target.value;
                    const lines = text.split('\\n');
                    const modifiedLines = lines.map(line => {
                        if (line.length > 50) { // Adjust this number for desired line length
                            const lastSpace = line.lastIndexOf(' ', 50);
                            if (lastSpace !== -1) {
                                return line.substring(0, lastSpace) + '\\n' + line.substring(lastSpace + 1);
                            }
                        }
                        return line;
                    });
                    const modifiedText = modifiedLines.join('\\n');
                    if (modifiedText !== text) {
                        e.target.value = modifiedText;
                    }
                });

                dreamInput.focus();
            </script>
        </body>
        </html>
    `);
}

function openPopup4() {
    if (popup4Window) popup4Window.close();
                                                
    popup4Window = window.open('', 'Popup4', 'width=675,height=550,left=815,top=155');
    
    popup4Window.document.write(`
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
                    top: 20%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    font-size: 16px;
                    text-align: center;
                    max-width: 80%;
                    opacity: 0;
                    z-index: 10;
                    font-weight: 400;
                    font-style: normal;
                }
                .button-container {
                    position: absolute;
                    bottom: 35px;
                    display: flex;
                    justify-content: center;
                    gap: 20px;
                    width: 100%;
                    opacity: 0;
                    z-index: 10;
                }
                .nav-button {
                    padding: 8px 16px;
                    margin: 5px;
                    cursor: pointer;
                    background: none;
                    border: none;
                    color: white;
                    transition: all 0.3s ease;
                    font-family: monospace, monospace;
                    font-size: 16px;
                    font-weight: 400;
                    font-style: normal;
                    text-shadow: 0 0 10px white;
                    max-width: 300px;
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
                <img src="swirling.gif" class="gif" id="mainGif">
            </div>
            <div class="text-overlay" id="thoughtText">
                honestly, i couldn't tell you. but isn't it scary how hard it is to distinguish between dreams and reality?
            </div>
            <div class="button-container" id="buttonContainer">
                <button onclick="window.opener.openPopup5()" class="nav-button">
                    yeah. i often wake up wondering if certain memories even happened or if i just dreamed them.
                </button>
                <button onclick="window.opener.openPopup5()" class="nav-button">
                    no, i'm always aware of where i am.
                </button>
            </div>

            <script>
                const gif = document.getElementById('mainGif');
                const text = document.getElementById('thoughtText');
                const buttonContainer = document.getElementById('buttonContainer');

                const gifDuration = 3120;
                const textDelay = 500;

                async function handleAnimation() {
                    setTimeout(() => {
                        text.classList.add('fade-in');
                    }, textDelay);

                    setTimeout(() => {
                        buttonContainer.style.opacity = '1';
                    }, gifDuration + 2000);
                }

                handleAnimation();
            </script>
        </body>
        </html>
    `);
}







function openPopup5() {
    if (popup5Window) popup5Window.close();

    popup5Window = window.open('', 'Popup5', 'width=675,height=550,left=850,top=130');
    
    popup5Window.document.write(`
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
                how do you know you're not dreaming right now?
            </div>
            <button onclick="window.opener.openPopup6()" class="nav-button" id="nextButton">
                of course i know i'm not dreaming right now. i’m here in this room, completely aware. my dreams are wild and chaotic – nothing like this.
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

function openPopup6() {
    if (popup6Window) popup6Window.close();

    popup6Window = window.open('', 'Popup6', 'width=340,height=230,left=1150,top=190');
    
    popup6Window.document.write(`
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
                    top: 20%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    font-size: 14px;
                    text-align: center;
                    max-width: 80%;
                    opacity: 0;
                    z-index: 10;
                    font-weight: 400;
                    font-style: normal;
                }
                .nav-button {
                    position: absolute;
                    bottom: 10%;
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
                    font-size: 14px;
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
                are you sure?
            </div>
            <button onclick="window.opener.createRandomPopups()" class="nav-button" id="nextButton">
                yes?
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
                    }, gifDuration + 1000);
                }

                handleAnimation();
            </script>
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
