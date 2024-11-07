// Ensure that starAnimationData is defined to avoid errors in local development
if (typeof starAnimationData === 'undefined') {
    var starAnimationData = { currentLang: 'en', baseUrl: '' }; // Default to English if not provided
}

const messagesByLanguage = {
    en: [
        "Ticks learn smells. A smell that works today will not work a few days later. This makes a lot of repellents ineffective!",
        "Every worm, every fish, every bird and every tick want to live. If the tick is close to starving, its willingness to take risks increases enormously and a tick repellent becomes less effective.",
        "If you test a good tick repellent, you have to recognize the 4 basic principles: a) smell, b) taste, c) contact and d) distance.",
        "A tick repellent that covers all 4 basic principles will remain effective!",
        "Ticks only breathe eight times a day.",
        "It is very easy to keep your own garden free of ticks.",
        "Where animals mark their territory, ticks will migrate!",
        "The lurking tick, which is common in Europe, recognizes its host from up to 10 m away.",
        "The hunting tick Hyalomma recognizes its host from up to 100 m away and actively pursues it, e.g., horses.",
        "You can keep ticks at a distance of 1 m without touching them.",
        "Ticks learn their surroundings and assess them very precisely.",
        "Ticks create a map of their surroundings and mark their paths.",
        "Lurking ticks don't see, they measure!",
        "Ticks communicate with each other.",
        "Some ticks search for community and stay together, others are loners!",
        "A good tick repellent must cover all 4 areas: 1) smell, 2) taste, 3) contact, and 4) distance and be made from natural raw materials.",
        "A good tick repellent is tailored to the region.",
        "In Germany, around 100,000 people fall ill from a tick bite every year (Robert Koch Institute).",
        "In America, around 300,000 people fall ill from a tick bite every year.",
        "Those who can keep ticks at a distance can also reliably repel mosquitoes, biting midges, and blackflies.",
        "Every year, about 850,000 people die worldwide from a mosquito bite.",
        "Applying the principles of tick repellency could protect thousands of people from the deadly bite of mosquitoes.",
        "Worldwide, ticks are an enormous problem.",
        "If humans consume the natural hosts (cows, goats, deer, rabbits, etc.), the problem with ticks increases massively, and the region loses its natural shield."
    ],
    de: [
        "Zecken lernen Gerüche. Ein Geruch, der heute als Zeckenschutz funktioniert, funktioniert einige Tage später nicht mehr.",
        "Jeder Wurm, jeder Fisch, jeder Vogel und jede Zecke wollen leben. Nähert sich die Zecke dem Verhungern, steigt ihre Risikobereitschaft enorm, und ein Zeckenschutzmittel verliert an Effizienz.",
        "Testet man ein gutes Zeckenschutzmittel, erkennt man die 4 Grundprinzipien: a) Geruch, b) Geschmack, c) Kontakt und d) Distanz.",
        "Ein Zeckenschutzmittel, das alle 4 Grundprinzipien abdeckt, behält seine Wirkung!",
        "Zecken atmen nur achtmal am Tag.",
        "Es ist sehr einfach, den eigenen Garten zeckenfrei zu halten.",
        "Wo Tiere ihre Markierungen setzen oder sich erleichtern, wandern Zecken ein!",
        "Die in Europa übliche Lauerzecke erkennt ihren Wirt in bis zu 10 m Entfernung.",
        "Die Jagdzecke Hyalomma erkennt ihren Wirt bis zu 100 m Entfernung und verfolgt diesen aktiv, z. B. Pferde.",
        "Man kann Zecken auf 1 m Distanz halten, ohne sie zu berühren.",
        "Zecken lernen ihre Umgebung und schätzen diese sehr präzise ein.",
        "Zecken erstellen von ihrer Umgebung eine Landkarte und markieren ihre Wege.",
        "Lauerzecken sehen nicht, sie messen!",
        "Zecken kommunizieren miteinander.",
        "Manche Zecken suchen die Gemeinschaft und bleiben zusammen, andere sind Einzelgänger.",
        "Ein gutes Zeckenschutzmittel muss alle 4 Bereiche abdecken: 1) Geruch, 2) Geschmack, 3) Kontakt und 4) Distanz sowie aus natürlichen Rohstoffen hergestellt sein.",
        "Ein gutes Zeckenschutzmittel ist auf die Region abgestimmt.",
        "Jährlich erkranken in Deutschland ca. 100.000 Menschen an einem Zeckenstich (Robert Koch Institut).",
        "In Amerika erkranken jedes Jahr ca. 300.000 Menschen an einem Zeckenstich.",
        "Wer in der Lage ist, Zecken auf Distanz zu halten und abzuwehren, ist auch in der Lage, Moskitos, Stechmücken und Kriebelmücken verlässlich abzuwehren.",
        "Jedes Jahr sterben weltweit ca. 850.000 Menschen an dem Stich einer Stechmücke.",
        "Überträgt man die Erkenntnisse aus der Distanzwirkung des Zeckenschutzes, könnten tausende Menschen vor dem tödlichen Stich der Stechmücke geschützt sein.",
        "Weltweit sind Zecken ein enormes Problem.",
        "Wenn Menschen die natürlichen Wirte aufessen (Kühe, Ziegen, Hirsche, Hasen usw.), nimmt das Problem mit Zecken massiv zu, und die Region verliert ihren natürlichen Schutzschild."
    ],
    fr: [
        "Les tiques apprennent les odeurs. Un parfum qui est efficace aujourd'hui peut ne plus l'être dans quelques jours, ce qui rend de nombreux répulsifs inefficaces.",
        "Tous les vers, poissons, oiseaux et tiques veulent vivre. Si une tique est sur le point de mourir de faim, sa propension à prendre des risques augmente considérablement, rendant les répulsifs moins efficaces.",
        "Pour tester un bon répulsif à tiques, il faut prendre en compte les quatre principes de base : a) l'odeur, b) le goût, c) le contact et d) la distance.",
        "Un répulsif à tiques qui couvre les quatre principes de base restera efficace !",
        "Les tiques ne respirent que huit fois par jour, ce qui les rend extrêmement résilientes.",
        "Il est très facile de garder son propre jardin exempt de tiques.",
        "Lorsque les animaux marquent leur territoire, les tiques migrent.",
        "La tique tapie, courante en Europe, peut reconnaître son hôte jusqu'à une distance de 10 mètres.",
        "La tique de chasse Hyalomma peut détecter son hôte à une distance allant jusqu'à 100 mètres et le poursuit activement.",
        "Vous pouvez maintenir les tiques à une distance de 1 mètre sans les toucher.",
        "Les tiques apprennent à connaître leur environnement et l'évaluent avec une grande précision.",
        "Les tiques créent une carte de leur environnement et marquent leurs itinéraires.",
        "Les tiques ne voient pas, elles mesurent !",
        "Les tiques communiquent entre elles.",
        "Certaines tiques préfèrent être en groupe et restent ensemble, tandis que d'autres sont solitaires.",
        "Un bon répulsif à tiques doit couvrir les quatre aspects suivants : 1) l'odeur, 2) le goût, 3) le contact et 4) la distance, et être fabriqué à partir de matières premières naturelles.",
        "Un bon répulsif contre les tiques doit être adapté à la région.",
        "En Allemagne, environ 100 000 personnes tombent malades chaque année à cause des piqûres de tiques (Institut Robert Koch).",
        "En Amérique, environ 300 000 personnes se retrouvent malades chaque année en raison de piqûres de tiques.",
        "Ceux qui peuvent maintenir les tiques à distance peuvent également repousser les moustiques, les moucherons piqueurs et les simulies.",
        "Chaque année, environ 850 000 personnes meurent dans le monde à cause d'une piqûre de moustique.",
        "En appliquant les principes de répulsion des tiques, des milliers de personnes pourraient être protégées contre les piqûres mortelles des moustiques.",
        "Les tiques sont un problème énorme dans le monde entier.",
        "Si les humains consomment les hôtes naturels (vaches, chèvres, cerfs, lapins, etc.), le problème des tiques augmente considérablement et la région perd sa couverture naturelle."
    ],
    es: [
        "Las garrapatas aprenden a reconocer olores. Un aroma que las repele hoy puede dejar de ser efectivo en unos días, lo que hace que muchos repelentes pierdan su eficacia.",
        "Todos los gusanos, peces, pájaros y garrapatas desean vivir. Si una garrapata está al borde de morir de hambre, su disposición a asumir riesgos aumenta considerablemente, lo que reduce la eficacia de un repelente.",
        "Para evaluar un buen repelente de garrapatas, es fundamental tener en cuenta cuatro principios básicos: a) olor, b) sabor, c) contacto y d) distancia.",
        "¡Un repelente de garrapatas que aborde los cuatro principios básicos seguirá siendo efectivo!",
        "Las garrapatas solo respiran ocho veces al día, lo que las hace extremadamente resistentes.",
        "Es bastante sencillo mantener tu propio jardín libre de garrapatas.",
        "Cuando los animales marcan su territorio, las garrapatas migran.",
        "La garrapata al acecho, común en Europa, puede detectar a su huésped desde una distancia de hasta 10 metros.",
        "La garrapata cazadora Hyalomma puede detectar a su hospedador desde una distancia de hasta 100 metros y lo persigue de manera activa.",
        "Puede mantener a las garrapatas a una distancia de 1 metro sin necesidad de tocarlas.",
        "Las garrapatas aprenden sobre su entorno y lo evalúan con gran precisión.",
        "Las garrapatas crean un mapa de su entorno y marcan sus rutas.",
        "Las garrapatas al acecho no ven, ¡sino que miden!",
        "Las garrapatas se comunican entre ellas.",
        "Algunas garrapatas buscan estar en grupo y permanecen juntas, mientras que otras son solitarias.",
        "Un buen repelente de garrapatas debe cubrir las cuatro áreas: 1) olor, 2) sabor, 3) contacto y 4) distancia, y estar elaborado con materias primas naturales.",
        "Un buen repelente de garrapatas debe estar adaptado a la región.",
        "En Alemania, aproximadamente 100.000 personas se enferman cada año por picaduras de garrapatas, según el Instituto Robert Koch.",
        "En Estados Unidos, alrededor de 300.000 personas se enferman cada año a causa de picaduras de garrapatas.",
        "Aquellos que pueden mantener las garrapatas a distancia también pueden repeler mosquitos, jejenes y moscas negras de manera confiable.",
        "Cada año, aproximadamente 850.000 personas mueren en todo el mundo por la picadura de un mosquito.",
        "Aplicar los principios de la repulsión de garrapatas podría proteger a miles de personas de la picadura mortal de los mosquitos.",
        "En todo el mundo, las garrapatas son un problema enorme.",
        "Si los humanos consumen a los hospedadores naturales (vacas, cabras, ciervos, conejos, etc.), el problema con las garrapatas aumenta enormemente, y la región pierde su cobertura natural."
    ],
    it: [
        "Le zecche imparano a riconoscere gli odori. Un odore che è efficace oggi potrebbe non esserlo più tra qualche giorno, rendendo molti repellenti inefficaci!",
        "Ogni verme, pesce, uccello e zecca desidera vivere. Quando una zecca è in prossimità della fame, la sua propensione a rischiare aumenta notevolmente, riducendo l'efficacia dei repellenti.",
        "Per valutare un buon repellente per zecche, è essenziale considerare i quattro principi fondamentali: a) odore, b) sapore, c) contatto e d) distanza.",
        "Un repellente per zecche che copra tutti e quattro i principi di base resterà efficace!",
        "Le zecche respirano solo otto volte al giorno, il che le rende estremamente resistenti.",
        "È molto semplice mantenere il proprio giardino libero dalle zecche.",
        "Quando gli animali delimitano il loro territorio, le zecche si spostano.",
        "La zecca vagante, comune in Europa, può riconoscere il suo ospite fino a 10 metri di distanza.",
        "La zecca cacciatrice Hyalomma è capace di individuare il suo ospite fino a 100 metri di distanza e lo segue attivamente.",
        "È possibile mantenere le zecche a una distanza di 1 metro senza doverle toccare.",
        "Le zecche apprendono e valutano con grande precisione il loro ambiente circostante.",
        "Le zecche mappano il loro ambiente e tracciano i loro percorsi.",
        "Le zecche in agguato non vedono, ma misurano!",
        "Le zecche comunicano tra di loro.",
        "Alcune zecche cercano la compagnia e restano insieme, mentre altre sono solitarie.",
        "Un buon repellente per zecche deve coprire tutte e quattro le aree: 1) odore, 2) sapore, 3) contatto e 4) distanza, ed essere prodotto con materie prime naturali.",
        "Un buon repellente per zecche deve essere specifico per la regione.",
        "In Germania, circa 100.000 persone si ammalano ogni anno a causa di punture di zecca (Istituto Robert Koch).",
        "In America, circa 300.000 persone si ammalano annualmente a causa di punture di zecca.",
        "Coloro che possono mantenere le zecche a distanza possono anche respingere zanzare, moscerini e mosche nere in modo affidabile.",
        "Ogni anno, circa 850.000 persone muoiono nel mondo a causa di una puntura di zanzara.",
        "Applicare i principi della repulsione delle zecche potrebbe proteggere migliaia di persone dalla puntura mortale delle zanzare.",
        "Le zecche sono un problema di enormi dimensioni in tutto il mondo.",
        "Se gli esseri umani consumano gli ospiti naturali (mucche, capre, cervi, conigli, ecc.), il problema delle zecche aumenta considerevolmente e la regione perde la sua copertura naturale."
    ]
};

// Language-specific texts for the tick message
const tickTextsByLanguage = {
    en: "Ticks kill and transmit diseases. Help us stop them!",
    de: "Zecken töten und übertragen Krankheiten. Hilf uns, sie zu stoppen!",
    fr: "Les tiques tuent et transmettent des maladies. Aidez-nous à les arrêter!",
    es: "Las garrapatas matan y transmiten enfermedades. ¡Ayúdanos a detenerlas!",
    it: "Le zecche uccidono e trasmettono malattie. Aiutaci a fermarle!"
};
// Button text translations
const buttonTextByLanguage = {
    en: 'Support our project',
    de: 'Unterstütze unser Projekt',
    fr: 'Soutenez notre projet',
    es: 'Apoya nuestro proyecto',
    it: 'Sostieni il nostro progetto'
};
// Adjust the navbar z-index
function adjustNavbar() {
    const topBar = document.querySelector('#Header_wrapper');
    if (topBar) {
        topBar.style.zIndex = '0';
    }
}

// Load messages based on current language
function loadMessages() {
    adjustNavbar();
    const currentLang = starAnimationData.currentLang || 'en';
    return messagesByLanguage[currentLang] || messagesByLanguage['en'];
}

const messages = loadMessages();
let messagesShown = 0;
let currentMessageIndex = 0;
let pathIndex = 0;
const paths = ['move-star-1', 'move-star-2', 'move-star-3'];

const starContainer = document.querySelector('.star-container');
const messageContainer = document.querySelector('.message-container');

let initialGifDisplayed = false;
let initialImageTimeout = null; // Timeout for the initial image
let scheduledTimeouts = []; // Array to store scheduled timeouts

// Variables to track the number of stars created and clicked
let starsCreated = 0;
let starsClicked = 0;
let starIntervalTimeout = null;

// Create a star element
function createStar(autoMove = false, animationType = '') {
    // Prevent creating new stars after all messages are displayed
    if (currentMessageIndex >= messages.length) {
        return;
    }

    // Limit the number of normal stars on the screen to 2
    const existingStars = document.querySelectorAll('.star');
    if (existingStars.length >= 2) {
        return; // Do not create more stars if there are already 2 stars
    }

    starsCreated++;

    const star = document.createElement('div');
    star.classList.add('star');

    const starImg = document.createElement('img');
    // starImg.src = starAnimationData.baseUrl + 'star-image.png';
    starImg.src = './assets/star-image.png';
    starImg.classList.add('star-image');
    star.appendChild(starImg);

    if (autoMove) {
        // Set initial position for the star
        star.style.left = '-50px';
        star.style.top = '-50px';
        star.style.transform = 'none';

        // Use the same animation duration and fall delay for both initial and tick star
        let animationDuration = '18.5s';
        let fallDelay = 15000;

        star.style.animation = `${animationType} ${animationDuration} ease-in-out forwards`;

        let fallTimeout = setTimeout(() => {
            handleStarFall(star, true);
        }, fallDelay);
        star.fallTimeout = fallTimeout;
    } else {
        const currentPath = paths[pathIndex];
        star.style.animation = `${currentPath} 130s linear infinite`;
        pathIndex = (pathIndex + 1) % paths.length;
    }

    // Event handler function
    function starEventHandler(event) {
        event.preventDefault(); // Prevent default touch behavior
        event.stopPropagation(); // Stop event from bubbling up

        // If the first star is clicked, display the initial image immediately
        if (starsCreated === 1 && !initialGifDisplayed) {
            if (initialImageTimeout) {
                clearTimeout(initialImageTimeout);
                initialImageTimeout = null;
            }
            displayInitialGif();
            initialGifDisplayed = true;
        }

        starsClicked++;

        handleStarFall(star, autoMove);
    }

    // Add event listeners for touch and click events
    star.addEventListener('click', starEventHandler);
    star.addEventListener('touchstart', starEventHandler, { passive: false });
    star.addEventListener('mousedown', starEventHandler);

    starContainer.appendChild(star);

    // Set the opacity to a higher value
    requestAnimationFrame(() => {
        star.style.opacity = '0.9'; // Increase the opacity to 0.9 or any value between 0 and 1
    });

    // Handle the first star's initial image display
    if (starsCreated === 1) {
        // Set a timeout to display the initial image after 2 seconds if not clicked
        initialImageTimeout = setTimeout(() => {
            setTimeout(() => {
                displayInitialGif(); // Call the function to display the image
            }, 4000); // 4 seconds
            initialGifDisplayed = true;
        }, 2000); // 2 seconds
    }
}

// Handle the star falling animation and subsequent actions
function handleStarFall(star, isAutoFalling) {
    if (star.fallTimeout) {
        clearTimeout(star.fallTimeout);
        star.fallTimeout = null;
    }

    star.style.pointerEvents = 'none';
    const rect = star.getBoundingClientRect();
    star.style.left = `${rect.left}px`;
    star.style.top = `${rect.top}px`;
    star.style.transform = 'none';
    star.style.position = 'fixed';
    star.style.animation = 'fall 2s ease-out forwards'; // Trigger the falling animation

    if (!isAutoFalling) {
        // Display message
        if (currentMessageIndex < messages.length) {
            displayMessage();
            messagesShown++;
        }
    }

    // Remove the star after the fall animation completes
    setTimeout(() => {
        star.remove();
        // Create a new star after some delay if less than 2 stars are present and messages are not complete
        setTimeout(() => {
            if (currentMessageIndex < messages.length) {
                createStar();
            }
        }, 2000);
    }, 8000);
}

// Display a message for the stars
function displayMessage() {
    if (currentMessageIndex >= messages.length) {
        return;
    }

    const currentLang = starAnimationData.currentLang || 'en';
    const messageText = messages[currentMessageIndex];

    const message = document.createElement('div');
    message.classList.add('message');
    message.textContent = messageText;
    messageContainer.appendChild(message);

    message.style.position = 'absolute';
    message.style.right = '20px';
    message.style.top = `${messagesShown * 70}px`;
    message.style.opacity = '1';
    message.style.transform = 'translateY(0)';
    message.style.transition = 'opacity 0.5s ease';

    adjustMessagesPosition();

    setTimeout(() => {
        message.style.opacity = '0';
        setTimeout(() => {
            message.remove();
            adjustMessagesPosition();
        }, 500);
    }, 10000);

    currentMessageIndex++;
    messagesShown++;

    // Clear scheduled timeouts when all messages are displayed
    if (currentMessageIndex >= messages.length) {
        scheduledTimeouts.forEach(timeout => clearTimeout(timeout));
        scheduledTimeouts = [];

        // Clear the star interval timeout
        if (starIntervalTimeout) {
            clearTimeout(starIntervalTimeout);
            starIntervalTimeout = null;
        }
    }
}

// Adjust message positions to avoid overlap
function adjustMessagesPosition() {
    const messages = document.querySelectorAll('.message');
    const gap = 10;
    let totalHeight = 0;

    messages.forEach((msg) => {
        msg.style.top = `${totalHeight}px`;
        totalHeight += msg.offsetHeight + gap;
    });
}

// Display the initial image
function displayInitialGif() {
    const img = document.createElement('img');
    const currentLang = starAnimationData.currentLang || 'en';

    switch (currentLang) {
        case 'de':
            img.src = starAnimationData.baseUrl + 'aaron-de.png';
            break;
        case 'fr':
            img.src = starAnimationData.baseUrl + 'aaron-fr.png';
            break;
        case 'es':
            img.src = starAnimationData.baseUrl + 'aaron-es.png';
            break;
        case 'it':
            img.src = starAnimationData.baseUrl + 'aaron-it.png';
            break;
        case 'en':
        default:
            // img.src = starAnimationData.baseUrl + 'aaron-en.png';
            img.src = './assets/aaron-en.png';
            break;
    }

    img.alt = 'First Message Image';
    img.id = 'first-message-image';
    img.style.position = 'fixed';
    img.style.top = '30%';
    img.style.left = '50%';
    img.style.transform = 'translate(-50%, -50%)';
    img.style.maxWidth = '50%';
    img.style.transition = 'opacity 1.5s ease, transform 1.5s ease';
    img.style.opacity = '0';
    img.style.zIndex = '1002';

    starContainer.appendChild(img);

    setTimeout(() => {
        img.style.opacity = '1';
    }, 100);

    setTimeout(() => {
        img.style.opacity = '0';
        setTimeout(() => {
            img.remove();
        }, 1000);
    }, 6000);
}

// Start stars at regular intervals
function startStars() {
    function createNextStar() {
        if (currentMessageIndex >= messages.length) {
            return;
        }

        createStar();
        // Store the timeout ID
        starIntervalTimeout = setTimeout(createNextStar, 5000); // Adjust interval as needed
    }

    createNextStar();
}

// Schedule stars to appear at specific times after the first star
function scheduleStars() {
    // Times in milliseconds from when the first star appears
    const starTimes = [4000, 8000, 12000]; // Second, third, and fourth stars

    starTimes.forEach((time) => {
        const timeout = setTimeout(() => {
            if (currentMessageIndex < messages.length) {
                createStar();
            }
        }, time);
        scheduledTimeouts.push(timeout);
    });
}

// Initialize the first star and start the schedule
function initStars() {
    setTimeout(() => {
        createStar(); // Create the first star after 10 seconds
        scheduleStars(); // Schedule other stars after the first star appears
    }, 21000); // 10 seconds
}

// Start the animation
initStars();

// ------------------- Code for the tick image --------------------

// Variables to store the tick image container and text container elements
let tickImageContainer = null;
let textContainer = null;
let tickImageElement = null; // Store the image element for later use

// Display the tick image on page load
function displayTickImageOnLoad() {
    // Create a container for the image and title
    const container = document.createElement('div');
    container.style.position = 'fixed';
    container.style.left = '50%';
    container.style.bottom = '20px'; // Slightly above bottom to mimic grass level
    container.style.transform = 'translateX(-50%)'; // Center horizontally
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.alignItems = 'center';
    container.style.zIndex = '10010';
    container.style.opacity = '1';
    container.style.transition = 'transform 1.5s ease-in-out';

    // Create the tick image
    const img = document.createElement('img');
    img.classList.add('tick-message');
    // img.src = starAnimationData.baseUrl + "tick-logo1.png"
    img.src = './assets/tick-logo1.png';
    img.alt = 'Tick Image';
    img.style.width = '25px'; // Start small to look like it's in the grass
    img.style.height = 'auto';
    img.style.transition = 'width 1.5s ease-in-out'; // Smooth enlargement on scroll

    // Append the image to the container
    container.appendChild(img);
    tickImageElement = img; // Store the image element

    // Create the text container for the title
    textContainer = document.createElement('div');
    textContainer.id = 'typing-text-container';
    textContainer.style.opacity = '0'; // Initially hidden

    // Append the text container to the main container
    container.appendChild(textContainer);

    // Add the container to the body
    document.body.appendChild(container);

    // Store the container element for later use
    tickImageContainer = container;
}


// Function to create typing animation
function typeText(text, container, speed = 10) {
    let index = 0;

    // Clear previous content
    container.innerHTML = '';

    // Decrease the interval time by 30% to make typing faster
    speed = speed * 0.4;

    // Set up an interval to type characters
    const intervalId = setInterval(() => {
        if (index < text.length) {
            // Check for a full stop followed by a space
            if (text.substring(index, index + 2) === '. ') {
                container.innerHTML += '.<br>'; // Add line break
                index += 2; // Move past the full stop and space
            } else {
                container.innerHTML += text.charAt(index);
                index++;
            }
        } else {
            clearInterval(intervalId); // Stop the interval when done
        }
    }, speed); // Adjusted speed is used here
}



// Call displayTickImageOnLoad() when the page loads
displayTickImageOnLoad();

// Listen for scroll events to handle enlargement and message
window.addEventListener('scroll', handleTickImageOnScroll);
// Set a threshold for the scroll amount (e.g., 100px)
const SCROLL_THRESHOLD = 180;
function handleTickImageOnScroll() {
    // Get the current scroll position
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;

    // Check if the scroll position has reached the threshold
    if (scrollPosition >= SCROLL_THRESHOLD) {
        // Remove the scroll event listener to prevent multiple triggers
        window.removeEventListener('scroll', handleTickImageOnScroll);

        // Enlarge the tick image by adding a CSS class
        if (tickImageContainer) {
            tickImageContainer.classList.add('tick-message-enlarge');
            console.log('tick-message-enlarge class added'); // Debugging line
        }

        // Show the text container and start the typing animation
        if (textContainer) {
            setTimeout(() => {
                textContainer.style.opacity = '1'; // Make text visible
                const currentLang = starAnimationData.currentLang || 'en';
                const textLines = tickTextsByLanguage[currentLang] || tickTextsByLanguage['en'];
                typeText(textLines, textContainer, 100); // Adjust typing speed as needed
            }, 1500); // Delay to match the enlargement animation
        }

        // After enlargement, proceed to transform into donation button
        setTimeout(() => {
            transformTickGifToButton(tickImageContainer);
        }, 8000); // Adjust timing as needed
    }
}

// Inside the transformTickGifToButton function
function transformTickGifToButton(container) {
    const rect = container.getBoundingClientRect();
    const buttonLeft = rect.left + rect.width / 2 - 70;
    const buttonTop = rect.top + rect.height / 2 - 20;

    const button = document.createElement('button');
    button.classList.add('donate-button');

    const currentLang = starAnimationData.currentLang || 'en';
    let buttonText = buttonTextByLanguage[currentLang];

    switch (currentLang) {
        case 'en':
            buttonText = 'Support Our<br>Project';
            break;
        case 'de':
            buttonText = 'Unterstütze Unser<br>Projekt';
            break;
        case 'fr':
            buttonText = 'Soutenez Notre<br>Projet';
            break;
        case 'es':
            buttonText = 'Apoya Nuestro<br>Proyecto';
            break;
        case 'it':
            buttonText = 'Sostieni Il Nostro<br>Progetto';
            break;
        default:
            buttonText = 'Support Our<br>Project';
    }

    button.innerHTML = `<span>${buttonText}</span>`;
    button.style.position = 'fixed';
    button.style.left = `${buttonLeft}px`;
    button.style.top = `${buttonTop}px`;
    button.style.opacity = '0';
    button.style.transition = 'opacity 2s ease-in-out, left 2s ease-in-out, top 2s ease-in-out';
    button.style.zIndex = '1002';
    button.style.width = 'auto';
    button.style.height = 'auto';

    document.body.appendChild(button);

    container.style.transition = 'opacity 2s ease-in-out, transform 2s ease-in-out';
    container.style.opacity = '0';
    container.style.transformOrigin = 'center center';
    container.style.left = '50%';
    container.style.transform = 'translate(-50%, 0) scale(0.5)';

    if (textContainer) {
        textContainer.style.transition = 'opacity 2s ease-in-out';
        textContainer.style.opacity = '0';
    }

    setTimeout(() => {
        button.style.opacity = '1';
    }, 1000);

    button.onclick = function (event) {
        event.stopPropagation(); // Prevent event propagation to avoid unintended restarts
        window.open('https://buy.stripe.com/6oEaIE38W2se4N2145', '_blank'); // Open in a new tab
    };

    setTimeout(() => {
        container.remove();
        moveButtonToLeft(button);

        // Delay the flying logo (stars) by 10 seconds after the tick message is read
        setTimeout(() => {
            initStars(); // Start the stars animation
        }, 10000); // 10-second delay after tick message
    }, 4000);
}

function moveButtonToLeft(button) {
    button.style.transition = 'left 2s ease-in-out, top 2s ease-in-out';
    button.style.left = '10px';
    button.style.top = '85%';
}
