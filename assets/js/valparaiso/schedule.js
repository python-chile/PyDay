export default () => {
    const tbody = document.getElementById('schedule').tBodies[0];
    [
        {
        block: '10:00 - 10:15',
        title: '🎫 Registro',
        },
        {
        block: '10:15 - 10:30',
        title: '🌄 Bienvenida',
        },
    {
        block: '10:30 - 11:00',
        author: 'Alejando Weinstein',
        title: 'Procesando señales definidas sobre grafos usando Python',
        photos: ['alejandro-weinstein.jpg'],
        level: 'Intermedio',
        category: 'Datos',
        twitter: 'ajweinstein',
        linkedin: 'alejandro-weinstein-8610a43',
        instagram: 'ajweinsteino'
        },
    {
        block: '11:15 - 11:45',
        author: 'Jorge Marin & Mario Romero',
        title: 'Diseño de chips analógicos asistida con Python',
        photos: ['jorge-marin.png', 'mario-romero.png'],
        level: 'Intermedio',
        category: 'Diseño',
        linkedin: 'jorge-mar%C3%ADn-a1258417',
    },
    {
        block: '12:00 - 12:30',
        author: 'Francisco Alfaro',
        title: 'Potenciando tu Perfil en GitHub: Estrategias y Herramientas para Destacar como Desarrollador',
        photos: ['francisco-alfaro.png'],
        level: 'Principiante',
        category: 'Comunidades',
        linkedin: 'faam'},
    {
        block: '12:30 - 14:00',
        title: '🍝 Almuerzo'},
    {
        block: '14:00 - 14:30',
        author: 'Jesús Henríquez',
        title: 'Construyendo un game engine en Python',
        photos: ['jesus-henriquez.jpg'],
        level: 'Intermedio',
        category: 'Juegos',
        twitter: 'xhenryx14',
        linkedin: 'hernaldo-henriquez'},
    {
        block: '14:45 - 15:15',
        author: 'Oscar Cariceo',
        title: 'Inteligencia Artificial Generativa con LangChain y Python',
        photos: ['oscar-cariceo.png'],
        level: 'Intermedio',
        category: 'Inteligencia Artificial',
        linkedin: 'ocariceo',
        instagram: 'kintuai',
        },
    {
        block: '15:30 - 16:00',
        author: 'Elizabeth Fuentes',
        title: 'Prompt engineering: la llave maestra para aprovechar al máximo la generative IA',
        photos: ['elizabeth-fuentes.jpg'],
        level: 'Principiante',
        category: 'Inteligencia Artificial',
        linkedin: 'lizfue',
        twitter: 'ElizabethFue12',
        instagram: 'elifue.tech'},
    {
        block: '16:00 - 16:20',
        title: '⚡ Charlas Relámpagos y 🎲 Trivia',
        },
    {
        block: '16:00 - 16:20',
        title: '🌅 Cierre',
        },

    ].forEach(obj=>{
        const row = tbody.insertRow();
        const blockCell = row.insertCell();

        blockCell.className = "text-center py-5 fw-bolder"
        blockCell.innerHTML = obj.block;
        const eventCell = row.insertCell();
        if (!('author' in obj)){
            eventCell.className = 'special-event'
            eventCell.innerHTML = obj.title;
            return null;
        }
        eventCell.className = "d-flex align-items-center"
        const profileDiv = document.createElement("div");

        const photosDiv = document.createElement("div");
        photosDiv.className = "photo-speaker-container";

        const mediaDiv = document.createElement("div");

        const eventDiv = document.createElement("div");
        eventDiv.className = 'event ml-3';
        
        obj.photos.forEach(photo => {
            const img = document.createElement('img')
            img.className='photo-speaker';
            img.src= 'assets/speakers/valparaiso/'+ photo;
            photosDiv.appendChild(img)
        });
        const titleDiv = document.createElement("div");
        titleDiv.className = 'title';
        titleDiv.innerHTML = obj.title;
        eventDiv.appendChild(titleDiv);
        const authorDiv = document.createElement("div");
        authorDiv.className = 'author';
        authorDiv.innerHTML = obj.author;
        eventDiv.appendChild(authorDiv);
        if (obj.level) {
            const levelDiv = document.createElement("div");
            levelDiv.className = 'level ' + obj.level;
            levelDiv.innerHTML = obj.level;
            eventDiv.appendChild(levelDiv);
        }
        if (obj.category) {
            const categoryDiv = document.createElement("div");
            categoryDiv.className = 'category ' + (['Datos', 'Web'].includes(obj.category) ? obj.category : 'Auto') ;
            categoryDiv.innerHTML = obj.category;
            eventDiv.appendChild(categoryDiv);
        }
        let link, icon
        const urls = {
            github: 'https://github.com/',
            facebook: 'https://www.facebook.com/',
            instagram: 'https://www.instagram.com/',
            youtube: 'https://www.youtube.com/',
            twitter: 'https://x.com/',
            linkedin: 'https://www.linkedin.com/in/',
            twitch: 'https://www.twitch.com/',
            discord: 'https://discord.gg/',
        }
        Object.keys(urls).forEach(key=>{
            if (key in obj){
                link = document.createElement("a");
                link.href = `${urls[key]}${obj[key]}`;
                link.target = '_blank'
                icon = document.createElement("i");
                icon.className = `media-icon bi bi-${key} ` + key;
                link.appendChild(icon);
                mediaDiv.appendChild(link);
            }
            })
        profileDiv.appendChild(photosDiv)
        profileDiv.appendChild(mediaDiv)
        eventCell.appendChild(profileDiv)
        eventCell.appendChild(eventDiv)
        
    })
}