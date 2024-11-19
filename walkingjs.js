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
        }, 1000);

                function createTree() {
            const tree = document.createElement('img');
            tree.src = 'images/tree.gif';
            tree.alt = 'Tree';
            tree.className = 'tree';
            tree.style.left = '100%';  
            document.body.appendChild(tree);

  
            const animateTree = () => {
                const currentLeft = parseFloat(tree.style.left);
                const newLeft = currentLeft - 0.3; 
                tree.style.left = `${newLeft}%`;
                
                if (newLeft > -15) {  
                    requestAnimationFrame(animateTree);
                } else {
                    tree.remove();
                }
            };
            
            requestAnimationFrame(animateTree);
        }

        function scheduleNextTree() {
            const minDelay = 500;
            const maxDelay = 10000;
            const randomDelay = Math.random() * (maxDelay - minDelay) + minDelay;
            
            setTimeout(() => {
                createTree();
                scheduleNextTree();
            }, randomDelay);
        }

        scheduleNextTree();




// Add this to your walkingjs.js file

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

// Update the createThought function in your walkingjs.js

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
    
    // Get cat element position
    const cat = document.getElementById('cat');
    const catRect = cat.getBoundingClientRect();
    
    // Calculate safe zones for thought placement
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    
    // Determine if thought should go left, right, or above cat
    const position = Math.random() < 0.6 ? 'above' : (Math.random() < 0.5 ? 'left' : 'right');
    
    let left, top;
    
    switch(position) {
        case 'above':
            left = catRect.left + (Math.random() * catRect.width * 0.8);
            top = Math.max(50, catRect.top - 100 - (Math.random() * 50));
            break;
        case 'left':
            left = Math.max(20, catRect.left - 250 - (Math.random() * 50));
            top = catRect.top - (Math.random() * 100);
            break;
        case 'right':
            left = catRect.right + 50 + (Math.random() * 50);
            top = catRect.top - (Math.random() * 100);
            break;
    }
    
    // Convert to percentage for responsive positioning
    const leftPercent = (left / screenWidth) * 100;
    const topPercent = (top / screenHeight) * 100;
    
    thoughtElement.style.setProperty('--thoughtLeft', `${leftPercent}%`);
    thoughtElement.style.setProperty('--thoughtTop', `${topPercent}%`);
    
    document.body.appendChild(thoughtElement);

    const duration = 10000 + Math.random() * 10000;
    setTimeout(() => {
        thoughtElement.remove();
        setTimeout(createThought, 5000 + Math.random() * 5000);
    }, duration);
}
// Start the thought cycle
createThought();