let popup1Window = null;
let popup2Window = null;
let popup3Window = null;
let popup4Window = null;
let popup5Window = null;
let popup6Window = null;
let popup7Window = null;
let popup8Window = null;
let popup9Window = null;
let popup10Window = null;
let popup11Window = null;
let popup12Window = null;
let popup13Window = null;
let popup14Window = null;
let nightPopupWindows = [];

const secondGifUrls = [
    'night1.gif',
    'night2.gif', 
    'night3.gif',
    'night4.gif',
    'night5.gif',
    'night6.gif'
];

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
    const minDistance = Math.min(popupWidth, popupHeight) * 0.6; // Minimum distance between popup centers

    let positions = [];
    const maxAttempts = 50; // Maximum attempts to place each popup

    // Add popup6's position to the initial positions array to avoid overlap
    positions.push({
        left: 1150,  // popup6's left position
        top: 190     // popup6's top position
    });

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

        // Add position to positions array before adding random offset
        positions.push(position);
        
        // Add some chaos with slight random offset
        position.left += Math.random() * 30 - 15;
        position.top += Math.random() * 30 - 15;

        const popup = window.open('', `RandomPopup${i}`, 
            `width=${popupWidth},height=${popupHeight},left=${position.left},top=${position.top}, titlebar=yes`
        );
        
        randomPopupWindows.push(popup);
        popup.document.title = `dream fragment`;
        
        popup.document.write(`
            <html>
            <head>
            <title>dream fragment</title>
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
    if (popup6Window) popup6Window.close();
    if (popup7Window) popup7Window.close();
    if (popup8Window) popup8Window.close();
    if (popup9Window) popup9Window.close();
    if (popup10Window) popup10Window.close();
    if (popup11Window) popup11Window.close();
    if (popup12Window) popup12Window.close();
    if (popup13Window) popup13Window.close();
    if (popup14Window) popup14Window.close();

    const width = window.screen.width - 200; // slightly smaller than screen width
    const height = window.screen.height - 230; // slightly smaller than screen height
    const left = 100;
    const top = 70;

                        popup1Window = window.open('', 'Popup1', `width=${width},height=${height},left=${left},top=${top}, titlebar=yes`);
                        popup1Window.document.title = "step inside";
                        
                        popup1Window.document.write(`
                            <html>
                            <head>
                            <title>step inside</title>

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
                                                
    popup2Window = window.open('', 'Popup2', 'width=675,height=550,left=800,top=180, titlebar=yes');
    popup2Window.document.title = "dream talk";
    
    popup2Window.document.write(`
        <html>
        <head>
        <title>dream talk</title>
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
    
    popup3Window = window.open('', 'Popup3', 'width=675,height=550,left=100,top=180, titlebar=yes');
    popup3Window.document.title = "your dream";
    
    popup3Window.document.write(`
        <html>
        <head>
        <title>your dream</title>
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
                }, 5000);

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
                                                
    popup4Window = window.open('', 'Popup4', 'width=675,height=550,left=815,top=155, titlebar=yes');
    popup4Window.document.title = "interpretation";
    
    popup4Window.document.write(`
        <html>
        <head>
        <title>interpretation</title>
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
                    transform: translateY(20px);
                    transition: all 1s ease;
                }
                .button-container.fade-in {
                    opacity: 1;
                    transform: translateY(0);
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
                .text-overlay.fade-in {
                    animation: fadeIn 1s ease forwards;
                }
            </style>
        </head>
        <body>
            <div class="gif-container">
                <img src="swirling.gif" class="gif" id="mainGif">
            </div>
            <div class="text-overlay" id="thoughtText">
                honestly, i couldn’t tell you. but isn’t it scary how hard it is to distinguish between dreams and reality?
            </div>
            <div class="button-container" id="buttonContainer">
                <button onclick="window.opener.openPopup5()" class="nav-button">
                    yeah. i often wake up wondering if certain memories even happened or if i just dreamed them.
                </button>
                <button onclick="window.opener.openPopup5()" class="nav-button">
                    no, i’m always aware of where i am.
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
                        buttonContainer.classList.add('fade-in');
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

    popup5Window = window.open('', 'Popup5', 'width=675,height=550,left=850,top=130, titlebar=yes');
    popup5Window.document.title = "reality check";
    
    popup5Window.document.write(`
        <html>
        <head>
        <title>reality check</title>
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
                how do you know you’re not dreaming right now?
            </div>
            <button onclick="window.opener.openPopup6()" class="nav-button" id="nextButton">
                of course i know i’m not dreaming right now. i’m here in this room, completely aware. my dreams are wild and chaotic – nothing like this.
            </button>

            <script>
                const gif = document.getElementById('mainGif');
                const text = document.getElementById('thoughtText');
                const button = document.getElementById('nextButton');

                const gifDuration = 5840;
                const textDelay = 300;

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

    popup6Window = window.open('', 'Popup6', 'width=340,height=230,left=1150,top=190, titlebar=yes');
    popup6Window.document.title = "are you sure?";
    
    popup6Window.document.write(`
        <html>
        <head>
        <title>are you sure?</title>
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
                    bottom: 30%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    font-size: 15px;
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
                    font-size: 15px;
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
            <button class="nav-button" id="nextButton">
                yes?
            </button>

            <script>
                const gif = document.getElementById('mainGif');
                const text = document.getElementById('thoughtText');
                const button = document.getElementById('nextButton');
                let clickCount = 0;

                const gifDuration = 5840;
                const textDelay = 100;

                button.addEventListener('click', () => {
                    clickCount++;
                    switch(clickCount) {
                        case 1:
                            window.opener.createRandomPopups();
                            button.textContent = 'actually...';
                            break;
                        case 2:
                            window.opener.createRandomPopups();
                            button.textContent = 'i guess not...';
                            break;
                        case 3:
                            window.opener.openPopup7();
                            break;
                    }
                });

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


function openPopup7() {
    if (popup7Window) popup7Window.close();
                                                
    popup7Window = window.open('', 'Popup7', 'width=675,height=550,left=100,top=180, titlebar=yes');
    popup7Window.document.title = "mirror room";
    
    popup7Window.document.write(`
        <html>
        <head>
        <title>mirror room</title>
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
                    transform: translateY(20px);
                    transition: all 1s ease;
                }
                .button-container.fade-in {
                    opacity: 1;
                    transform: translateY(0);
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
                .text-overlay.fade-in {
                    animation: fadeIn 1s ease forwards;
                }
                #videoWrapper {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    display: none;
                    background: rgba(85, 12, 30, 0.1);
                }
                #video {
                    display: none;
                }
                #canvas {
                    width: 100%;
                    height: 100%;
                    display: none;
                }
                #continueButton {
                    position: fixed;
                    bottom: 35px;
                    left: 50%;
                    transform: translateX(-50%);
                    opacity: 0;
                    z-index: 999;
                }
            </style>
        </head>
        <body>
            <div class="gif-container">
                <img src="mirror.gif" class="gif" id="mainGif">
            </div>
            <div class="text-overlay" id="thoughtText">
                they say not to look into mirrors when you come across them in dreams... would you like to take a look?
            </div>
            <div class="button-container" id="buttonContainer">
                <button class="nav-button" id="yesButton">
                    yes, show me
                </button>
                <button class="nav-button" id="noButton">
                    no, i’d rather not see
                </button>
            </div>

            <div id="videoWrapper">
                <video id="video" autoplay playsinline></video>
                <canvas id="canvas"></canvas>
            </div>

            <button class="nav-button" id="continueButton">
                wake up
            </button>

            <script>
                const video = document.getElementById("video");
                const videoWrapper = document.getElementById("videoWrapper");
                const thoughtText = document.getElementById("thoughtText");
                const buttonContainer = document.getElementById("buttonContainer");
                const yesButton = document.getElementById("yesButton");
                const noButton = document.getElementById("noButton");
                const mainGif = document.getElementById("mainGif");
                const canvas = document.getElementById("canvas");
                const continueButton = document.getElementById("continueButton");
                const ctx = canvas.getContext("2d", { willReadFrequently: true });

                const gifDuration = 3120;
                const textDelay = 500;

                let isProcessing = false;
                let time = 0;

                function processFrame() {
                    if (!isProcessing) return;
                    time += 0.01;

                    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
                    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
                    const data = imageData.data;
                    
                    for (let y = 0; y < canvas.height; y++) {
                        for (let x = 0; x < canvas.width; x++) {
                            const index = (y * canvas.width + x) * 4;
                            
                            // Create spiral distortion
                            const distanceFromCenter = Math.sqrt(
                                Math.pow(x - canvas.width/2, 2) + 
                                Math.pow(y - canvas.height/2, 2)
                            );
                            const spiralStrength = 0.003;
                            const spiralAngle = time * 0.5 + distanceFromCenter * spiralStrength;
                            
                            // Dreamlike wave effect
                            const waveX = Math.sin(y * 0.01 + time) * 30 * (Math.sin(time * 0.5) + 1);
                            const waveY = Math.cos(x * 0.01 + time) * 30 * (Math.cos(time * 0.3) + 1);
                            
                            // Combine spiral and wave effects
                            const sourceX = Math.floor(
                                x + waveX + 
                                Math.cos(spiralAngle) * (distanceFromCenter * 0.04)
                            );
                            const sourceY = Math.floor(
                                y + waveY + 
                                Math.sin(spiralAngle) * (distanceFromCenter * 0.04)
                            );
                            
                            // Pulsing effect
                            const pulseIntensity = Math.sin(time) * 0.15 + 0.85;
                            
                            // Get source pixel with bounds checking
                            const sourceIndex = (
                                ((sourceY + canvas.height) % canvas.height) * canvas.width + 
                                ((sourceX + canvas.width) % canvas.width)
                            ) * 4;
                            
                            // Apply burgundy color shift
                            data[index] = data[sourceIndex] * 1.2 * pulseIntensity;     // Enhance red
                            data[index + 1] = data[sourceIndex + 1] * 0.7;              // Reduce green
                            data[index + 2] = data[sourceIndex + 2] * 0.8;              // Reduce blue
                            data[index + 3] = 255;                                      // Full opacity
                        }
                    }
                    
                    ctx.putImageData(imageData, 0, 0);
                    
                    // Apply blur
                    ctx.filter = 'blur(2px) brightness(90%)';
                    ctx.drawImage(canvas, 0, 0);
                    ctx.filter = 'none';
                    
                    // Add burgundy gradient
                    const gradient = ctx.createRadialGradient(
                        canvas.width/2, canvas.height/2, 0,
                        canvas.width/2, canvas.height/2, canvas.width/2
                    );
                    gradient.addColorStop(0, 'rgba(85, 12, 30, 0)');
                    gradient.addColorStop(1, 'rgba(85, 12, 30, 0.3)');
                    ctx.fillStyle = gradient;
                    ctx.fillRect(0, 0, canvas.width, canvas.height);
                    
                    requestAnimationFrame(processFrame);
                }

                async function startCamera() {
                    try {
                        const stream = await navigator.mediaDevices.getUserMedia({ 
                            video: { 
                                facingMode: "user"
                            } 
                        });
                        
                        video.srcObject = stream;
                        mainGif.style.display = "none";
                        thoughtText.style.display = "none";
                        buttonContainer.style.display = "none";
                        videoWrapper.style.display = "block";
                        canvas.style.display = "block";

                        canvas.width = video.videoWidth || 640;
                        canvas.height = video.videoHeight || 480;

                        setTimeout(() => {
                            continueButton.style.opacity = "1";
                        }, 10000);

                        isProcessing = true;
                        processFrame();
                        
                    } catch (err) {
                        console.error("Error:", err);
                        cleanup();
                        if (window.opener && typeof window.opener.openPopup8 === "function") {
                            window.opener.openPopup8();
                        }
                        window.close();
                    }
                }

                function cleanup() {
                    isProcessing = false;
                    if (video.srcObject) {
                        video.srcObject.getTracks().forEach(track => track.stop());
                    }
                }

                async function handleAnimation() {
                    setTimeout(() => {
                        thoughtText.classList.add("fade-in");
                    }, textDelay);

                    setTimeout(() => {
                        buttonContainer.classList.add("fade-in");
                    }, gifDuration + 2000);
                }

                yesButton.addEventListener("click", startCamera);
                noButton.addEventListener("click", () => {
                    cleanup();
                    if (window.opener && typeof window.opener.openPopup8 === "function") {
                        window.opener.openPopup8();
                    }
                    window.close();
                });
                
                continueButton.addEventListener("click", () => {
                    cleanup();
                    if (window.opener && typeof window.opener.openPopup8 === "function") {
                        window.opener.openPopup8();
                    }
                    window.close();
                });

                window.onbeforeunload = cleanup;

                handleAnimation();

                video.addEventListener("loadedmetadata", () => {
                    canvas.width = video.videoWidth;
                    canvas.height = video.videoHeight;
                });
            </script>
        </body>
        </html>
    `);
}



function openPopup8() {
    if (popup8Window) popup8Window.close();

    popup8Window = window.open('', 'Popup8', 'width=675,height=550,left=100,top=180, titlebar=yes');
    popup8Window.document.title = "time?";
    
    popup8Window.document.write(`
        <html>
        <head>
        <title>time?</title>
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
                    font-size: 16px;
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
                    font-size: 16px;
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
                you know what’s strange about dreams? time doesn’t flow the same way. sometimes you can dream an entire lifetime in just a few minutes.
            </div>
            <button onclick="window.opener.openPopup9()" class="nav-button" id="nextButton">
                how long have we been here?
            </button>

            <script>
                const gif = document.getElementById('mainGif');
                const text = document.getElementById('thoughtText');
                const button = document.getElementById('nextButton');

                const gifDuration = 5840;
                const textDelay = 300;

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



function openPopup9() {
    if (popup9Window) popup9Window.close();

    popup9Window = window.open('', 'Popup9', 'width=340,height=230,left=1150,top=190, titlebar=yes');
    popup9Window.document.title = "losing time...";
    
    popup9Window.document.write(`
        <html>
        <head>
        <title>losing time...</title>
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
                    bottom: 30%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    font-size: 15px;
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
                    font-size: 15px;
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
                <img src="swirling.gif" class="gif" id="mainGif">
            </div>
            <div class="text-overlay" id="thoughtText">
                i don’t know... what time did you start?
            </div>
            <button class="nav-button" id="nextButton">
                let me check...
            </button>

            <script>
                const gif = document.getElementById('mainGif');
                const text = document.getElementById('thoughtText');
                const button = document.getElementById('nextButton');
                let clickCount = 0;

                const gifDuration = 5840;
                const textDelay = 100;

                button.addEventListener('click', () => {
                    clickCount++;
                    switch(clickCount) {
                        case 1:
                            window.opener.createRandomPopups();
                            text.textContent = "the clock... it’s moving strangely...";
                            button.textContent = "what’s happening?";
                            break;
                        case 2:
                            window.opener.createRandomPopups();
                            text.textContent = "time is folding in on itself...";
                            button.textContent = "make it stop";
                            break;
                        case 3:
                            window.opener.createRandomPopups();
                            text.textContent = "maybe we’ve always been here...";
                            button.textContent = "i need to wake up";
                            break;
                        case 4:
                            window.opener.openPopup10();
                            break;
                    }
                });

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

function openPopup10() {
    if (popup10Window) popup10Window.close();

    popup10Window = window.open('', 'Popup10', 'width=340,height=230,left=200,top=200, titlebar=yes');
    popup10Window.document.title = "messages...";
    
    popup10Window.document.write(`
        <html>
        <head>
        <title>messages...</title>
            <style>
                body { 
                    margin: 0;
                    padding: 0;
                    font-family: monospace, monospace;
                    background: black;
                    color: white;
                    text-shadow: 0 0 10px white;
                    overflow: hidden;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    height: 100vh;
                    position: relative;
                }
                .text-container {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    text-align: center;
                    width: 80%;
                    cursor: pointer;
                }
                .text-overlay {
                    font-size: 15px;
                    text-align: center;
                    max-width: 100%;
                    opacity: 0;
                    font-weight: 400;
                    font-style: normal;
                    line-height: 1.5;
                    transition: opacity 0.5s ease;
                }
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                .fade-in {
                    animation: fadeIn 1s ease forwards;
                }
            </style>
        </head>
        <body>
            <div class="text-container" id="textContainer">
                <div class="text-overlay" id="thoughtText">
                    the sun during midday will light up the dark night.
                </div>
            </div>

            <script>
                const text = document.getElementById('thoughtText');
                const container = document.getElementById('textContainer');
                let clickCount = 0;

                const messages = [
                    "night dreams of day.",
                    "light dreams of darkness."
                ];

                container.addEventListener('click', () => {
                    clickCount++;
                    if (clickCount <= messages.length) {
                        text.style.opacity = 0;
                        setTimeout(() => {
                            text.textContent = messages[clickCount - 1];
                            text.style.opacity = 1;
                        }, 500);
                    } else {
                        if (window.opener && typeof window.opener.openPopup11 === "function") {
                            window.opener.openPopup11();
                        }
                    }
                });

                setTimeout(() => {
                    text.classList.add('fade-in');
                }, 100);
            </script>
        </body>
        </html>
    `);
}

function openPopup11() {
    if (popup11Window) popup11Window.close();

    popup11Window = window.open('', 'Popup11', 'width=340,height=230,left=400,top=400, titlebar=yes');
    popup11Window.document.title = "darkness...";
    
    popup11Window.document.write(`
        <html>
        <head>
        <title>darkness...</title>
            <style>
                body { 
                    margin: 0;
                    padding: 0;
                    font-family: monospace, monospace;
                    background: black;
                    color: white;

                    text-shadow: 0 0 10px white;
                    overflow: hidden;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    height: 100vh;
                    position: relative;
                }
                .text-container {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    text-align: center;
                    width: 80%;
                    cursor: pointer;
                }
                .text-overlay {
                    font-size: 15px;
                    text-align: center;
                    max-width: 100%;
                    opacity: 0;
                    font-weight: 400;
                    font-style: normal;
                    line-height: 1.5;
                    transition: opacity 0.5s ease;
                }
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                .fade-in {
                    animation: fadeIn 1s ease forwards;
                }
            </style>
        </head>
        <body>
            <div class="text-container" id="textContainer">
                <div class="text-overlay" id="thoughtText">
                    but the ignorant sun will chase away the darkness,
                </div>
            </div>

            <script>
                const text = document.getElementById('thoughtText');
                const container = document.getElementById('textContainer');
                let clickCount = 0;

                const messages = [
                    "and burn the shadows,",
                    "eventually burning itself!"
                ];

                container.addEventListener('click', () => {
                    clickCount++;
                    if (clickCount <= messages.length) {
                        text.style.opacity = 0;
                        setTimeout(() => {
                            text.textContent = messages[clickCount - 1];
                            text.style.opacity = 1;
                        }, 500);
                    } else {
                        if (window.opener && typeof window.opener.openPopup12 === "function") {
                            window.opener.openPopup12();
                        }
                    }
                });

                setTimeout(() => {
                    text.classList.add('fade-in');
                }, 100);
            </script>
        </body>
        </html>
    `);
}

function openPopup12() {
    if (popup12Window) popup12Window.close();

    popup12Window = window.open('', 'Popup12', 'width=340,height=230,left=600,top=600, titlebar=yes');
    popup12Window.document.title = "bloom...";
    
    popup12Window.document.write(`
        <html>
        <head>
        <title>bloom</title>
            <style>
                body { 
                    margin: 0;
                    padding: 0;
                    font-family: monospace, monospace;
                    background: black;
                    color: white;
                    overflow: hidden;
                    text-shadow: 0 0 10px white;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    height: 100vh;
                    position: relative;
                }
                .text-container {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    text-align: center;
                    width: 80%;
                    cursor: pointer;
                }
                .text-overlay {
                    font-size: 15px;
                    text-align: center;
                    max-width: 100%;
                    opacity: 0;
                    font-weight: 400;
                    font-style: normal;
                    line-height: 1.5;
                    transition: opacity 0.5s ease;
                }
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                .fade-in {
                    animation: fadeIn 1s ease forwards;
                }
            </style>
        </head>
        <body>
            <div class="text-container" id="textContainer">
                <div class="text-overlay" id="thoughtText">
                    the shade of the tree with the flowers that bloom at night
                </div>
            </div>

            <script>
                const text = document.getElementById('thoughtText');
                const container = document.getElementById('textContainer');
                let clickCount = 0;
                let hasTriggeredFirstTime = false;

                const messages = [
                    "is where the residents of darkness rest.",
                    "the people of daytime are not allowed!"
                ];

                container.addEventListener('click', () => {
                    if (clickCount < messages.length) {
                        clickCount++;
                        text.style.opacity = 0;
                        
                        setTimeout(() => {
                            text.textContent = messages[clickCount - 1];
                            text.style.opacity = 1;
                            
                            if (clickCount === messages.length && !hasTriggeredFirstTime) {
                                hasTriggeredFirstTime = true;
                                setTimeout(() => {
                                    if (window.opener) {
                                        window.opener.createNightPopups();
                                        window.opener.openPopup13();
                                    }
                                }, 1000);
                            }
                        }, 500);
                    } else if (hasTriggeredFirstTime) {
                        // Subsequent clicks after showing all messages
                        if (window.opener) {
                            window.opener.createNightPopups();
                        }
                    }
                });

                setTimeout(() => {
                    text.classList.add('fade-in');
                }, 100);
            </script>
        </body>
        </html>
    `);
}

function openPopup13() {
    if (popup13Window) popup13Window.close();

    // Position relative to popup12's position
    popup13Window = window.open('', 'Popup13', 'width=340,height=230,left=850,top=500, titlebar=yes');
    popup12Window.document.title = "escape";
    
    popup13Window.document.write(`
        <html>
        <head>
        <title>escape</title>
            <style>
                body { 
                    margin: 0;
                    padding: 0;
                    font-family: monospace, monospace;
                    background: black;
                    color: white;
                    overflow: hidden;
                    text-shadow: 0 0 10px white;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    height: 100vh;
                    position: relative;
                }
                .text-container {
                    text-align: center;
                    cursor: pointer;
                    opacity: 0;
                    transition: opacity 1s ease;
                }
                .text {
                    font-size: 16px;
                    line-height: 1.5;
                }
            </style>
        </head>
        <body>
            <div class="text-container" id="textContainer">
                <div class="text">
                    this dream has turned into a nightmare... how do i get out?
                </div>
            </div>

            <script>
                const textContainer = document.getElementById('textContainer');
                
                setTimeout(() => {
                    textContainer.style.opacity = '1';
                }, 2000);

                textContainer.addEventListener('click', () => {
                    if (window.opener && typeof window.opener.openPopup14 === "function") {
                        window.opener.openPopup14();
                    }
                });
            </script>
        </body>
        </html>
    `);
}

// In createNightPopups, let's modify the quadrants to avoid popup13's position
function createNightPopups() {
    // Close existing popups
    if (nightPopupWindows) {
        nightPopupWindows.forEach(popup => {
            if (popup && !popup.closed) {
                popup.close();
            }
        });
    }
    
    nightPopupWindows = [];
    
    const screenWidth = window.screen.availWidth;
    const screenHeight = window.screen.availHeight;
    const popupWidth = 340;
    const popupHeight = 230;
    const minDistance = Math.min(screenWidth, screenHeight) * 0.25;
    
    const positions = [];
    
    // Defining safe quadrants that avoid popup12 and popup13 areas
    const quadrants = [
        { x: 0, y: 0 },                    // Top left
        { x: screenWidth/2, y: 0 },        // Top right
        { x: 0, y: screenHeight/2 },       // Bottom left
        { x: screenWidth/4, y: screenHeight/4 }, // Mid-left
        { x: screenWidth*3/4, y: screenHeight/4 }, // Mid-right
        { x: screenWidth/4, y: screenHeight*3/4 }  // Bottom-left-ish
    ];

    // Create a function to check if a position is too close to popup12 or popup13
    function isTooCloseToFixedPopups(x, y) {
        const popup12Pos = { x: 600, y: 600 };
        const popup13Pos = { x: 850, y: 500 };
        const minDistanceToFixed = 300;

        const distToPopup12 = Math.sqrt(
            Math.pow(x - popup12Pos.x, 2) + Math.pow(y - popup12Pos.y, 2)
        );
        const distToPopup13 = Math.sqrt(
            Math.pow(x - popup13Pos.x, 2) + Math.pow(y - popup13Pos.y, 2)
        );

        return distToPopup12 < minDistanceToFixed || distToPopup13 < minDistanceToFixed;
    }
    
    for (let i = 0; i < 6; i++) {
        const baseX = quadrants[i].x;
        const baseY = quadrants[i].y;
        
        let position;
        let attempts = 0;
        
        do {
            // Add some randomness within the quadrant
            const randomX = Math.random() * (screenWidth/3 - popupWidth);
            const randomY = Math.random() * (screenHeight/3 - popupHeight);
            
            position = {
                left: Math.max(0, Math.min(screenWidth - popupWidth, baseX + randomX)),
                top: Math.max(0, Math.min(screenHeight - popupHeight, baseY + randomY))
            };
            
            attempts++;
        } while (isTooCloseToFixedPopups(position.left, position.top) && attempts < 10);
        
        positions.push(position);
        
        try {
            const popup = window.open(
                '', 
                `NightPopup${i}`,
                `width=${popupWidth},height=${popupHeight},left=${position.left},top=${position.top}, titlebar=yes`
            );
            
            if (popup) {
                nightPopupWindows.push(popup);
                popup.document.title = `nightmares`;
                
                popup.document.write(`
                    <html>
                    <head>
                    <title>nightmares</title>
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
                        </style>
                    </head>
                    <body>
                        <div class="gif-container">
                            <img src="${secondGifUrls[i]}" class="gif">
                        </div>
                    </body>
                    </html>
                `);
            }
        } catch (err) {
            console.error('Error creating popup:', err);
        }
    }
}

function closeAllPopups() {
    // Collect all popups in the order we want to close them
    const popupGroups = [
        // First close random popups in small batches
        ...randomPopupWindows.map((popup, i) => ({
            popup,
            delay: i * 50  // 50ms between each random popup
        })),
        
        // Then close night popups
        ...nightPopupWindows.map((popup, i) => ({
            popup,
            delay: (randomPopupWindows.length * 50) + (i * 50)
        })),
        
        // Finally close the numbered popups in reverse order (except 14 which closes last)
        ...[
            popup13Window,
            popup12Window,
            popup11Window,
            popup10Window,
            popup9Window,
            popup8Window,
            popup7Window,
            popup6Window,
            popup5Window,
            popup4Window,
            popup3Window,
            popup2Window,
            popup1Window
        ].map((popup, i) => ({
            popup,
            delay: (randomPopupWindows.length * 50) + 
                   (nightPopupWindows.length * 50) + 
                   (i * 100)  // 100ms between each numbered popup
        }))
    ];

    // Close each popup with its calculated delay
    popupGroups.forEach(({popup, delay}) => {
        if (popup && !popup.closed) {
            setTimeout(() => {
                try {
                    popup.close();
                } catch (e) {
                    console.log("Couldn't close a popup:", e);
                }
            }, delay);
        }
    });
}

function openPopup14() {
    if (popup14Window) popup14Window.close();

    const width = 800;
    const height = 600;
    const left = (window.screen.width - width) / 2;
    const top = (window.screen.height - height) / 2;

    popup14Window = window.open('', 'Popup14', `width=${width},height=${height},left=${left},top=${top}, titlebar=yes`);
    popup14Window.document.title = "awakening";
    
    popup14Window.document.write(`
        <html>
        <head>
        <title>awakening</title>
            <style>
                @keyframes textGlow {
                    0% { text-shadow: 0 0 10px rgba(0, 0, 0, 0.5); }
                    50% { text-shadow: 0 0 20px rgba(0, 0, 0, 0.8); }
                    100% { text-shadow: 0 0 10px rgba(0, 0, 0, 0.5); }
                }

                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }

                body { 
                    margin: 0;
                    padding: 0;
                    font-family: monospace, monospace;
                    background: white;
                    color: black;
                    overflow: hidden;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    height: 100vh;
                    cursor: pointer;
                }

                .content {
                    text-align: center;
                    opacity: 0;
                    animation: fadeIn 3s ease forwards;
                }

                .text {
                    font-size: 24px;
                    line-height: 1.5;
                    animation: textGlow 3s ease-in-out infinite;
                }

                .close-text {
                    margin-top: 40px;
                    font-size: 16px;
                    opacity: 0;
                    transition: opacity 1s ease;
                }
            </style>
        </head>
        <body>
            <div class="content">
                <div class="text">
                    wake up...
                </div>
                <div class="close-text" id="closeText">
                    click anywhere to end the dream
                </div>
            </div>

            <script>
                const body = document.body;
                const closeText = document.getElementById('closeText');
                
                setTimeout(() => {
                    closeText.style.opacity = '1';
                }, 3000);

                body.addEventListener('click', () => {
                    // First close all other windows sequentially
                    window.opener.closeAllPopups();
                    // Close this window last, after all others have closed
                    setTimeout(() => {
                        window.close();
                    }, 2000); // Wait 2 seconds after starting the closing sequence
                });
            </script>
        </body>
        </html>
    `);
}




const landingContainer = document.getElementById('landing-container');
const gifContainer = document.getElementById('gif-container');
const enterButton = document.getElementById('enter-button');
const popupButton = document.getElementById('popup-button');


    
    



const backgroundMusic = new Audio('lounge.mp3'); // Replace with your audio file path
backgroundMusic.loop = true;

[enterButton, popupButton].forEach(button => {
    button.addEventListener('click', function() {
        this.classList.add('clicked');
        setTimeout(() => this.classList.remove('clicked'), 500);
    });
});

enterButton.addEventListener('click', () => {
    // Start playing music
    backgroundMusic.play().catch(e => console.log("Audio autoplay was prevented"));
    
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