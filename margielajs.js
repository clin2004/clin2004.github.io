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
                    elements: [
                        {
                            type: 'text',
                            content: "In the October of 1988 a few hundred people received an ",
                            style: 'regular'
                        },
                        {
                            type: 'text',
                            content: "invitation by telegraph",
                            style: 'bold'
                        },
                        {
                            type: 'text',
                            content: " informing them that the first Maison Martin Margiela runway show would take place at the Café de la Gare as part of the Paris Fashion Week Spring/Summer 1989 season."
                        },
                        {
                            type: 'image',
                            src: './archives/1989ss/invitation.png',
                            alt: 'Show Invitation'
                        }
                    ]
                },
                {
                    elements: [
                        {
                            type: 'text',
                            content: "The first look of the first show: ",
                            style: 'bold'
                        },
                        {
                            type: 'text',
                            content: "The model is shirtless, wearing simple unfinished white trousers, a jabot tied into a hand bra, and the ",
                        },
                        {
                            type: 'text',
                            content: "iconic black Tabi boots",
                            style: 'italic'
                        },
                        {
                            type: 'text',
                            content: ". On her chest is the faint impression of a V-neck tee shirt, made visible by sunburn."
                        },
                        {
                            type: 'image',
                            src: './archives/1989ss/look1.png',
                            alt: 'First Look'
                        },
                        {
                            type: 'text',
                            content: "This very first, simple look holds an enormous amount of the Margiela universe.",
                            style: 'bold'
                        }
                    ]
                },
                {
                    elements: [
                        {
                            type: 'image',
                            src: './archives/1989ss/face.png',
                            alt: 'First Look'
                        },
                        {
                            type: 'text',
                            content: "In 1992, Margiela told Dépêche Mode magazine, ",
                        },
                        {
                            type: 'text',
                            content: "“My clothes appeal to women of a certain mindset rather than of a specific age or physique.”",
                            style: 'bold'
                        }
                    ]
                },
                {
                    elements: [
                        {
                            type: 'text',
                            content: "Anonymity: ",
                            style: 'bold'
                        },
                        {
                            type: 'text',
                            content: " concealment of identity in Margiela’s debut show sets the tone for a motif that would resonate throughout future collections. Concealed identities through veils, stark makeup obscuring facial features, and the de-emphasizing of individual models allowed the focus to shift from the wearer to the garment itself. This anonymous presentation, coupled with Margiela’s own reluctance to embrace personal fame, disrupted the celebrity-driven fashion culture of the time.",
                        },
                        {
                            type: 'image-pair',
                            images: [
                                {
                                    src: './archives/1989ss/jabot.png',
                                    alt: 'Jabot'
                                },
                                {
                                    src: './archives/1989ss/mjabot.png',
                                    alt: 'MargielaJabot'
                                }
                            ]
                        }
                    ]
                },
                { elements: [

                  {
                            type: 'text',
                            content: "Objects repurposed as garments: ",
                            style: 'bold'
                        },
                        {
                            type: 'text',
                            content: "Wrapped around both wrists is a 18th century men’s accessory called a jabot – typically a jabot is wrapped around the neck, but she has two which are wrapped around each wrist. The jabots and her arms form a bra on the model’s body, which is another theme continued for decades with Margiela’s work – making clothing out of unconventional objects.",
                        },


                  ]},
                { elements: [

                  {
                            type: 'text',
                            content: "References to history: ",
                            style: 'bold'
                        },
                        {
                            type: 'text',
                            content: "Margiela recontextualizes this classic piece within a modern, avant-garde framework. This blending of historical references with contemporary deconstruction became a recurring theme in Margiela’s work, as he continuously reimagined the past to challenge the present.",
                        },


                  ]}

            ]
        }
    },
    2: {
        left: {
            subheading: "Collection #2",
            title: "Fall/Winter 1989",
            videoUrl: "https://youtu.be/IcpSvvGO890?si=60oJhS-x8O5RXy9w",
            description: "Description of second show."
        },
        right: {
            sections: [
                {
                    elements: [
                        {
                            type: 'text',
                            content: "In the October of 1988 a few hundred people received an ",
                            style: 'regular'
                        },
                        {
                            type: 'text',
                            content: "invitation by telegraph",
                            style: 'bold'
                        },
                        {
                            type: 'text',
                            content: " informing them that the first Maison Martin Margiela runway show would take place at the Café de la Gare as part of the Paris Fashion Week Spring/Summer 1989 season."
                        },
                        {
                            type: 'image',
                            src: './archives/1989ss/invitation.png',
                            alt: 'Show Invitation'
                        }
                    ]
                },
                
            ]
        }
    }
};


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

function loadPageContent(pageNum) {
    const content = pageContents[pageNum];
    
    if (!content) {
        console.warn(`Content for page ${pageNum} not found`);
        return;
    }

    document.getElementById('leftContent').classList.add('fade-out');
    document.getElementById('rightContent').classList.add('fade-out');

    setTimeout(() => {
        // Left panel content remains the same
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

        // New dynamic right panel content rendering
        const rightHTML = content.right.sections.map(section => {
            const sectionContent = section.elements.map(element => {
                if (element.type === 'image') {
                    return `<img src="${element.src}" alt="${element.alt || ''}" class="content-image">`;
                } else if (element.type === 'image-pair') {
                    return `
                        <div class="image-pair">
                            <img src="${element.images[0].src}" alt="${element.images[0].alt || ''}" class="content-image">
                            <img src="${element.images[1].src}" alt="${element.images[1].alt || ''}" class="content-image">
                        </div>
                    `;
                } else if (element.type === 'text') {
                    let textContent = element.content;
                    if (element.style === 'bold') {
                        textContent = `<strong>${textContent}</strong>`;
                    } else if (element.style === 'italic') {
                        textContent = `<em>${textContent}</em>`;
                    }
                    return textContent;
                }
                return '';
            }).join('');

            return `
                <div class="content-section">
                    <p>${sectionContent}</p>
                </div>
            `;
        }).join('') + (pageNum < 33 ? '<a href="#" class="next-button">Next Collection</a>' : '');
        
        
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


const carouselImages = [
    './archives/carousel/e1ce86_ccccee3df04746679b358ee3d1f4d89e~mv2.webp',
    './archives/carousel/e1ce86_daa907c1e0264476aa2c7b23c413bbff~mv2.webp',
    './archives/carousel/e1ce86_01aa72aa92804d0898f9f1303690ddeb~mv2.webp',
    './archives/carousel/e1ce86_1d716fa5e8474cf8b18fd1fe887cf7e4~mv2.webp',
    './archives/carousel/e1ce86_3fd5fc5a37544ca0b4e1cd2c58a3c608~mv2.webp',
    './archives/carousel/e1ce86_7afe7ce0a1744ceeb40ef55129a08289~mv2.webp',
    './archives/carousel/e1ce86_25f9a10434304735b47484803fed5de5~mv2.webp',
    './archives/carousel/e1ce86_552a1e801eae43e9b069f47b7a31eb2b~mv2.webp',
    './archives/carousel/e1ce86_570ac0dd42d64118822e9399b6167d2c~mv2.webp',
    './archives/carousel/e1ce86_783ca51b36a14e1c902e690a2423ca70~mv2.webp',
    './archives/carousel/e1ce86_859d984a46ed43ca9fa469a70e74d238~mv2.webp',
    './archives/carousel/e1ce86_2824f798d20b4f3090aa4bf2c0034e5a~mv2.webp',
    './archives/carousel/e1ce86_5077ee1dfb6f436e9151e8fb1e47b8cb~mv2.webp',
    './archives/carousel/e1ce86_7236a27ceb2343d1b9ad31fcde6ce057~mv2.webp',
    './archives/carousel/e1ce86_9017aa07c3f142a3bd8ac464de28492a~mv2.webp',
    './archives/carousel/e1ce86_9541ed543a0541e6bc421af5d7556f7e~mv2.webp',
    './archives/carousel/e1ce86_9554de28adba451d9473a32209352f5f~mv2.webp',
    './archives/carousel/e1ce86_80980dfa5a694650b2fd37e25fd2f08f~mv2.webp',
    './archives/carousel/e1ce86_98568a5dd1594ca9b62e27056f215502~mv2.webp',
    './archives/carousel/e1ce86_bd4587e2ee074ec8ba91db41cc624b0b~mv2.webp',
    './archives/carousel/e1ce86_e6d6563d8ec640418a22fcb568dbf475~mv2.webp',

];

function initializeCarousel() {
    const container = document.querySelector('.carousel-container');
    if (!container) return;

    container.innerHTML = '';

    // Create image elements
    carouselImages.forEach((src, index) => {
        const img = document.createElement('img');
        img.src = src;
        img.className = `carousel-image ${index === 0 ? 'active' : ''}`;
        img.alt = `Margiela Archive Image ${index + 1}`;
        container.appendChild(img);
    });

    let currentIndex = 0;
    
    function rotateImages() {
        const images = container.querySelectorAll('.carousel-image');
        images[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add('active');
    }

    setInterval(rotateImages, 2000);
}

document.addEventListener('DOMContentLoaded', () => {
    initializeCarousel();
});
