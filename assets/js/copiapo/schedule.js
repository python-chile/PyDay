export default () => {
    const tbody = document.getElementById('schedule').tBodies[0];
    [
    {
        block: '09:00 - 09:15',
        author: 'Milowan Martinez & Willy Bown',
        title: 'Métodos de aprendizaje para entrar a Python',
        photos: ['Milowan_Martinez.jpeg', 'Willy_Bown.jpeg'],
        category: 'Aprendizaje'},
    {
        block: '09:15 - 09:30',
        author: 'Luciano Berrios & Matias Rojas',
        title: 'Python como primer lenguaje de programación',
        photos: ['Luciano_Berrios.jpeg'],
        category: 'Aprendizaje'},
    {
        block: '09:30 - 09:45',
        author: 'Daylan Collado',
        title: 'Mis errores programando',
        photos: ['Daylan_Collado.jpeg'],
        category: 'Experiencias'},
    {
        block: '09:45 - 10:00',
        author: 'Sondra Guerra',
        title: 'Cómo python cambió mi perspectiva de la carrera',
        photos: ['Sondra_Guerra.jpeg'],
        category: 'Experiencias'},
    {
        block: '10:00 - 10:15',
        author: 'Martín Gómez',
        title: 'Jugando con Python',
        photos: ['Martin_Gomez.jpeg']},
    {
        block: '10:15 - 10:30',
        author: 'Michael Lopez & Ricardo Valdes',
        title: 'Aproximaciones al uso \'ético\' de chat gpt en el estudio',
        photos: ['Michael_Lopez.jpeg', 'Ricardo_Valdes.jpeg'],
        category: 'Inteligencia Artificial'},
    {
        block: '10:30 - 10:45',
        author: 'Javiera Collinao',
        title: 'Mi experiencia aprendiendo Python',
        photos: ['Javiera_Collinao.jpeg'],
        category: 'Experiencias'},
    {
        block: '10:45 - 11:00',
        author: 'Rodrigo Vera',
        title: 'La lógica en programación',
        photos: ['Rodrigo_Vera.jpeg'],
        category: 'Aprendizaje'},
    {
        block: '11:00 - 11:15',
        author: 'Francisca Muñoz',
        title: 'Optimizando el desarrollo de software con Python y metodologías ágiles',
        photos: ['Francisca_Munoz.jpeg'],
        category: 'Optimización'},
    {
        block: '11:25 - 11:40',
        author: 'Gabriela López',
        title: 'Creación de ambientes digitales de aprendizaje',
        photos: ['Gabriela_Lopez.jpeg'],
        category: 'Aprendizaje'},
    {
        block: '11:40 - 11:55',
        author: 'Andrés Ibañez',
        title: 'Ciencia de datos y python',
        photos: ['Andres_Ibanez.jpeg'],
        category: 'Data'},
    {
        block: '11:55 - 12:10',
        author: 'Eduardo Espinoza Norambuena',
        title: 'Aplicaciones móviles en Python',
        photos: ['Eduardo_Espinoza.jpeg'],
        category: 'Aplicaciones'},
    {
        block: '12:10 - 12:25',
        author: 'Victor Valenzuela',
        title: 'Representación de conocimiento en IA',
        photos: ['Victor_Valenzuela.jpeg'],
        category: 'Inteligencia Artificial'},
    {
        block: '12:25 - 12:45',
        author: 'Lidia Moreno',
        title: 'Sql injections, ¿qué son y cómo evitarlas?',
        photos: ['Lidia_Moreno.jpeg'],
        category: 'Base de datos'},
    {
        block: '12:45 - 13:00',
        author: 'Luis Rojas',
        title: 'Redes convolucionales y Python',
        photos: ['Luis_Rojas.jpeg'],
        category: 'Redes'},
    {
        block: '13:00 - 13:15',
        author: 'Franco Morales',
        title: 'Test unitarios y su papel en CI/CD',
        photos: ['Franco_Morales.jpeg'],
        category: 'Tests'},
    {
        block: '13:15 - 13:30',
        author: 'Marco Arévalo',
        title: 'Python aplicado a IA generativa usando Google Vertex IA',
        photos: ['Marco_Arevalo.jpeg'],
        category: 'Inteligencia Artificial'},
    {
        block: '13:30 - 14:15',
        author: 'Mauro Perez & Carlos Pizarro',
        title: 'Workshop Videojuegos y Python',
        photos: ['Mauro_Perez.jpeg', 'Carlos_Pizarro.jpeg'],
        category: 'Videojuegos'},

    ].forEach(obj=>{
        const row = tbody.insertRow();
        const blockCell = row.insertCell();
        blockCell.innerHTML = obj.block;
        const eventCell = row.insertCell();
        eventCell.className = "content"

        const profileDiv = document.createElement("div");
        profileDiv.className = "d-flex align-items-center";

        const photosDiv = document.createElement("div");
        photosDiv.className = "photo-speaker-container col-md-2";

        const mediaDiv = document.createElement("div");

        const eventDiv = document.createElement("div");
        eventDiv.className = 'event ml-3';
        
        obj.photos.forEach(photo => {
            const img = document.createElement('img')
            img.className='photo-speaker';
            img.src= 'assets/speakers/copiapo/'+ photo;
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
            categoryDiv.className = 'category ' + (['Data', 'Web'].includes(obj.category) ? obj.category : 'Auto') ;
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
            linkedin: 'https://www.linkedin.com/',
            twitch: 'https://www.twitch.com/',
            discord: 'https://discord.gg/',
        }
        Object.keys(urls).forEach(key=>{
            if (key in obj){
                link = document.createElement("a");
                link.href = `${urls[key]}${obj[key]}`;
                link.target = '_blank'
                icon = document.createElement("i");
                icon.className = `bi bi-${key}`
                link.appendChild(icon);
                mediaDiv.appendChild(link);
            }
            })
        profileDiv.appendChild(photosDiv)
        profileDiv.appendChild(mediaDiv)
        profileDiv.appendChild(eventDiv)
        eventCell.appendChild(profileDiv)
        
    })
}