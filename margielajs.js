function getYouTubeEmbedUrl(url) {
    if (!url) return null;
    let videoId;
    
    if (url.includes('youtube.com/watch')) {
        videoId = new URL(url).searchParams.get('v');
    } else if (url.includes('youtu.be')) {
        videoId = url.split('/').pop().split('?')[0];
    } else if (url.includes('youtube.com/embed')) {
        return url;
    }
    
    return videoId ? `https://www.youtube.com/embed/${videoId}` : url;
}

const pageContents = {
    1: {
        left: {
            subheading: "Collection #1",
            title: "Spring/Summer 1989",
            videoUrl: "https://youtu.be/5nsQi9Yz3lo?si=hcw-s4TbgEOBnFgL",
            description: "Martin Margiela's Spring/Summer 1989 debut show laid the foundation for his revolutionary approach to fashion, introducing motifs and techniques that would define his future work. The iconic split-toe Tabi boots made their first appearance, a bold departure from conventional footwear that Margiela would continue to reimagine in future collections. Other groundbreaking elements included a trompe l'oeil tattoo t-shirt, detachable shirtsleeves, and vertical lines drawn on models' legs to mimic nylon stocking seams. Margiela also redefined the silhouette, raising shoulders with sleeve caps while maintaining a narrow, tight fit – challenging the era's preference for wide, padded shoulders. Through his use of darts to emphasize details and his focus on deconstruction, Margiela established themes of transformation and process that would inspire a new generation of designers, reshaping fashion's future."
        },
        right: {
            sections: [
                {
                    content: "In the October of 1988 a few hundred people received an invitation by telegraph informing them that the first Maison Martin Margiela runway show would take place at the Café de la Gare as part of the Paris Fashion Week Spring/Summer 1989 season.",
                    image: "./archives/1989ss/invitation.png"
                },
                {
                    content: "The first look of the first show of Maison Margiela: The model is shirtless, wearing simple unfinished white trousers, a jabot tied into a hand bra, and the iconic black Tabi boots. On her chest is the faint impression of a V-neck tee shirt, made visible by sunburn. The hair and makeup appear undone and unkempt in a perfectly personal way, with stark black eyes and deep red lips.",
                },
                {
                    content: "In the October of 1988 a few hundred people received an invitation by telegraph informing them that the first Maison Martin Margiela runway show would take place at the Café de la Gare as part of the Paris Fashion Week Spring/Summer 1989 season.",
                    image: "./archives/1989ss/invitation.png"
                },
                {
                    content: "In the October of 1988 a few hundred people received an invitation by telegraph informing them that the first Maison Martin Margiela runway show would take place at the Café de la Gare as part of the Paris Fashion Week Spring/Summer 1989 season.",
                    image: "./archives/1989ss/invitation.png"
                },
                {
                    content: "In the October of 1988 a few hundred people received an invitation by telegraph informing them that the first Maison Martin Margiela runway show would take place at the Café de la Gare as part of the Paris Fashion Week Spring/Summer 1989 season.",
                    image: "./archives/1989ss/invitation.png"
                }
            ]
        }
    },
    2: {
        left: {
            subheading: "Collection #2",
            title: "Fall/Winter 1989",
            description: "A vest made out of broken dishes, a faux three-piece pantsuit (replacing the vest with a miniskirt) with the Margiela silhouette of raised shoulders, and patchwork shearling."
        },
        right: {
            sections: [
                {
                    content: "A vest made out of broken dishes, a faux three-piece pantsuit (replacing the vest with a miniskirt) with the Margiela silhouette of raised shoulders, and patchwork shearling.",
                }
            ]
        }
    },
    3: {
        left: {
            subheading: "Collection #3",
            title: "Spring/Summer 1990",
            description: "This is the description for collection 3."
        },
        right: {
            sections: [
                {
                    content: "Collection 3 description",
                },
            ]
        }
    },
    4: {
        left: {
            subheading: "Collection #4",
            title: "Fall/Winter 1990",
            description: "This is the description for collection 4."
        },
        right: {
            sections: [
                {
                    content: "Collection 4 description",
                },
            ]
        }
    },
    
};


function loadPageContent(pageNum) {
    const content = pageContents[pageNum];
    
    if (!content) {
        console.warn(`Content for page ${pageNum} not found`);
        return;
    }

    document.getElementById('leftContent').classList.add('fade-out');
    document.getElementById('rightContent').classList.add('fade-out');

    setTimeout(() => {
        const leftHTML = `
            <h2>${content.left.subheading}</h2>
            <h1>${content.left.title}</h1>
            ${content.left.videoUrl ? `
                <div class="video-container">
                    <iframe 
                        src="${getYouTubeEmbedUrl(content.left.videoUrl)}"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen>
                    </iframe>
                </div>
            ` : ''}
            <p class="description">${content.left.description}</p>
        `;
        document.getElementById('leftContent').innerHTML = leftHTML;

        const rightHTML = content.right.sections.map(section => `
            <div class="content-section">
                <p>${section.content}</p>
                ${section.image ? `<img src="${section.image}" alt="${section.title || ''}">` : ''}
            </div>
        `).join('') + (pageNum < 33 ? '<a href="#" class="next-button">Next Collection</a>' : '');
        
        document.getElementById('rightContent').innerHTML = rightHTML;

        document.getElementById('leftContent').classList.remove('fade-out');
        document.getElementById('rightContent').classList.remove('fade-out');

        document.getElementById('currentPage').textContent = pageNum;
        timelineHandle.textContent = pageNum;

        const nextButton = document.querySelector('.next-button');
        if (nextButton) {
            nextButton.addEventListener('click', handleNextPage);
        }
    }, 300);
}

function handleNextPage(e) {
  e.preventDefault();
  if (currentPage < totalPages) {
    currentPage++;
    timelineHandle.style.top = `${((currentPage - 1) / (totalPages - 1)) * 100}%`;
    loadPageContent(currentPage);
  }
}

const timelineHandle = document.getElementById('timelineHandle');
const container = document.querySelector('.container');
const timeline = document.querySelector('.timeline');
let isDragging = false;
let currentPage = 1;
const totalPages = 33;

for (let i = 0; i < totalPages; i++) {
  const marker = document.createElement('div');
  marker.className = 'timeline-markers';
  marker.style.top = `${(i / (totalPages - 1)) * 100}%`;
  marker.setAttribute('data-page', `Collection #${i + 1}`);
  timeline.appendChild(marker);
}

timelineHandle.addEventListener('mousedown', (e) => {
  isDragging = true;
  document.addEventListener('mousemove', handleDrag);
  document.addEventListener('mouseup', () => {
    isDragging = false;
    document.removeEventListener('mousemove', handleDrag);
  });
});

function handleDrag(e) {
  if (!isDragging) return;
  
  const timelineRect = timeline.getBoundingClientRect();
  const timelineTop = timelineRect.top;
  const timelineHeight = timelineRect.height;
  const mouseY = e.clientY - timelineTop;
  
  let percentage = (mouseY / timelineHeight) * 100;
  percentage = Math.min(Math.max(percentage, 0), 100);
  
  const newPage = Math.round((percentage / 100) * (totalPages - 1)) + 1;
  if (newPage !== currentPage) {
    currentPage = newPage;
    loadPageContent(currentPage);
  }
  
  timelineHandle.style.top = `${((currentPage - 1) / (totalPages - 1)) * 100}%`;
}

document.querySelectorAll('.timeline-markers').forEach((marker, index) => {
  marker.addEventListener('click', () => {
    currentPage = index + 1;
    timelineHandle.style.top = marker.style.top;
    loadPageContent(currentPage);
  });
});

timelineHandle.style.top = '0%';
loadPageContent(1);

const homeTab = document.getElementById('homeTab');
const aboutTab = document.getElementById('aboutTab');
const homePage = document.getElementById('homePage');
const aboutPage = document.getElementById('aboutPage');
const enterStoryBtn = document.getElementById('enterStoryBtn');
const pageIndicator = document.querySelector('.page-indicator');

function closeHomePage() {
    homePage.classList.remove('active');
    pageIndicator.classList.remove('hidden');
}

function closeAboutPage() {
    aboutPage.classList.remove('active');
}

function updatePageIndicator() {
    if (homePage.classList.contains('active') || aboutPage.classList.contains('active')) {
        pageIndicator.classList.add('hidden');
    } else {
        pageIndicator.classList.remove('hidden');
    }
}

homeTab.addEventListener('click', () => {
    if (homePage.classList.contains('active')) {
        closeHomePage();
    } else {
        homePage.classList.add('active');
        if (aboutPage.classList.contains('active')) {
            closeAboutPage();
        }
    }
    updatePageIndicator();
});

aboutTab.addEventListener('click', () => {
    if (aboutPage.classList.contains('active')) {
        closeAboutPage();
    } else {
        aboutPage.classList.add('active');
        if (homePage.classList.contains('active')) {
            closeHomePage();
        }
    }
    updatePageIndicator();
});

enterStoryBtn.addEventListener('click', () => {
    closeHomePage();
    updatePageIndicator();
});





document.addEventListener('click', (e) => {
    if (homePage.classList.contains('active') && 
        !homePage.contains(e.target) && 
        !homeTab.contains(e.target)) {
        closeHomePage();
        updatePageIndicator();
    }
    if (aboutPage.classList.contains('active') && 
        !aboutPage.contains(e.target) && 
        !aboutTab.contains(e.target)) {
        closeAboutPage();
        updatePageIndicator();
    }
});

homePage.addEventListener('click', (e) => e.stopPropagation());
aboutPage.addEventListener('click', (e) => e.stopPropagation());
