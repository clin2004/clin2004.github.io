
function closePopup() {
    const popup = document.getElementById('about-popup');
    popup.style.opacity = '0';
    popup.style.transition = 'opacity 0.5s';
    setTimeout(() => {
        popup.style.display = 'none';
    }, 500);
}



function updateBackground(hours, minutes) {
    const skyBackground = document.getElementById('sky-background');
    
    const totalMinutes = hours * 60 + minutes;
    
    const cycleMinutes = totalMinutes % 60;
    
    if (cycleMinutes >= 45) {
        skyBackground.src = 'images/sunrisesky.webp';
    } else if (cycleMinutes >= 30) {
        skyBackground.src = 'images/nightsky.gif';
    } else if (cycleMinutes >= 15) {
        skyBackground.src = 'images/sunsetsky.gif';
    } else {
        skyBackground.src = 'images/bluesky.gif';
    }
}

 let steps = 0;
        let startTime = new Date();

        setInterval(() => {
            steps++;
            document.getElementById('step-counter').textContent = `Steps: ${steps}`;
        }, 600);

        setInterval(() => {
    const elapsed = new Date() - startTime;
    const accelerated = new Date(elapsed * 7);
    const hours = String(accelerated.getUTCHours()).padStart(2, '0');
    const minutes = String(accelerated.getUTCMinutes()).padStart(2, '0');
    const seconds = String(accelerated.getUTCSeconds()).padStart(2, '0');
    document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
    updateBackground(parseInt(hours), parseInt(minutes));
        }, 1000);




const movingElements = [
    { src: 'images/tree.gif', height: '700px', bottom: '-85px' },
    { src: 'images/bird.gif', height: '100px', bottom: '500px' },
    { src: 'images/butterfly.gif', height: '70px', bottom: '250px' },
    { src: 'images/rabbit.gif', height: '200px', bottom: '30px'},
    { src: 'images/quote1.gif', height: '120px', bottom: '400px' },
    { src: 'images/eagle.gif', height: '200px', bottom: '700px' },
    { src: 'images/hum.gif', height: '70px', bottom: '400px' },
    { src: 'images/geese.gif', height: '200px', bottom: '600px' },
    { src: 'images/balloon.gif', height: '200px', bottom: '600px' },
    { src: 'images/flys.gif', height: '120px', bottom: '400px' },
    { src: 'images/rose.gif', height: '120px', bottom: '60px' },
    { src: 'images/rose2.gif', height: '120px', bottom: '60px' },
    { src: 'images/blossoms.gif', height: '900px', bottom: '-70px' },
    { src: 'images/quote2.gif', height: '50px', bottom: '700px' },
    { src: 'images/quote17.gif', height: '70px', bottom: '900px' },
    { src: 'images/quotem.gif', height: '70px', bottom: '200px' },
    { src: 'images/angelright.gif', height: '100px', bottom: '700px' },
    { src: 'images/angelde.gif', height: '50px', bottom: '300px' },
];

function createMovingElement(elementConfig) {
    const movingElement = document.createElement('img');
    movingElement.src = elementConfig.src;
    movingElement.alt = 'Moving Element';
    movingElement.className = 'tree';
    movingElement.style.left = '100%';
    movingElement.style.height = elementConfig.height;
    movingElement.style.bottom = elementConfig.bottom;
    
    document.body.appendChild(movingElement);

    const animateElement = () => {
        const currentLeft = parseFloat(movingElement.style.left);
        const newLeft = currentLeft - 0.3; 
        movingElement.style.left = `${newLeft}%`;
        
        if (newLeft > -50) {  
            requestAnimationFrame(animateElement);
        } else {
            movingElement.remove();
        }
    };
    
    requestAnimationFrame(animateElement);
}

function createScheduler(elementConfig) {
    function scheduleNext() {
        let minDelay, maxDelay;
        
        switch(elementConfig.src) {
            case 'images/tree.gif':
                minDelay = 500; 
                maxDelay = 10000;
                break;
            case 'images/bird.gif':
                minDelay = 3000;
                maxDelay = 20000;
                break;
            case 'images/hum.gif':
                minDelay = 3000;     
                maxDelay = 20000;
                break;
            case 'images/butterfly.gif':
                minDelay = 5000;
                maxDelay = 25000;
                break;
            case 'images/flys.gif':
                minDelay = 5000;     
                maxDelay = 25000;
                break;
            case 'images/rabbit.gif':
                minDelay = 8000;
                maxDelay = 30000;
                break;
            case 'images/eagle.gif':
                minDelay = 9000;    
                maxDelay = 100000;
                break;
            case 'images/quote1.gif':
                minDelay = 10000;
                maxDelay = 40000;
                break;
            case 'images/geese.gif':
                minDelay = 20000;   
                maxDelay = 40000;
                break;
            case 'images/balloon.gif':
                minDelay = 10000; 
                maxDelay = 40000;
                break;
            case 'images/blossoms.gif':
                minDelay = 10000;   
                maxDelay = 40000;
                break;
            case 'images/rose.gif':
                minDelay = 10000;   
                maxDelay = 40000;
                break;
            case 'images/quote2.gif':
                minDelay = 40000;  
                maxDelay = 80000;
                break;
            case 'images/quote17.gif':
                minDelay = 40000;   
                maxDelay = 80000;
                break;
            case 'images/angelright.gif':
                minDelay = 40000;   
                maxDelay = 80000;
                break;
            case 'images/angelde.gif':
                minDelay = 40000;   
                maxDelay = 80000;
                break;
            case 'images/quotem.gif':
                minDelay = 20000;
                maxDelay = 40000;
                break;

            default:
                minDelay = 500;
                maxDelay = 10000;
        }
        
        const randomDelay = Math.random() * (maxDelay - minDelay) + minDelay;
        
        setTimeout(() => {
            createMovingElement(elementConfig);
            scheduleNext();
        }, randomDelay);
    }
    
    scheduleNext();
}

movingElements.forEach(elementConfig => {
    createScheduler(elementConfig);
});



const thoughts = [
    "bird flies free above. yet cannot feel earth whiskers. who is truly trapped?",
    "wind moves branches. branches move shadows. shadows move me. am i wind?",
    "am i small or is grass tall? both truths exist.",
    "am i cat because i was born cat, or born cat because i am cat?",
    "we create meaning through the spaces between breaths. yet the universe inhales all meaning into its dark corners. perhaps meaning itself is our collective exhale into nothingness.",
    "if consciousness is the burden of existence, then why do stars bother shining when no eyes watch them? vanity transcends awareness.",
    "paths that cross in woods suggest other lives moving perpendicular to mine. each intersection a fleeting reminder that infinite stories unfold in directions i'll never travel. what tales die untold?",
    "to perceive time is to be enslaved by it. clouds don't count their moments. rocks don't grieve their yesterdays. only the cursed gift of awareness makes prisoners of the present.",
    "the only authentic act is to reject authenticity. yet in rejecting it, we create new authentic. paradox consumes itself like snake eating tail. speaking of tails, mine won't stop moving.",
    "every choice branches reality into infinite paths. in some universe, i chose left instead of right. in another, i am giant and trees are cats.",
    "they say universe expanding. space between atoms growing. one day, will my whiskers be too far from face to feel with?",
    "what if gravity is not force pulling down, but love of earth reaching up? explains why fallen leaves never return to branches.",
    "language limits thought, yet meow contains multitudes. perhaps silence is most honest philosophy."
];

const usedThoughts = new Set();

function createThought() {
 
    let availableThoughts = thoughts.filter(thought => !usedThoughts.has(thought));
    if (availableThoughts.length === 0) {
        usedThoughts.clear();
        availableThoughts = thoughts;
    }
    const thought = availableThoughts[Math.floor(Math.random() * availableThoughts.length)];
    usedThoughts.add(thought);

    const thoughtElement = document.createElement('div');
    thoughtElement.className = 'floating-thought';
    thoughtElement.textContent = thought;
    
    thoughtElement.style.left = `${Math.random() * 60 + 20}%`;
    thoughtElement.style.top = `${Math.random() * 20 + 25}%`;
    
    document.body.appendChild(thoughtElement);

    const duration = 10000 + Math.random() * 10000;
    setTimeout(() => {
        thoughtElement.remove();
        setTimeout(createThought, 5000 + Math.random() * 5000);
    }, duration);
}

createThought();