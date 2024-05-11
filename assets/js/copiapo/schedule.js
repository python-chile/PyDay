export default () => {
    const tbody = document.getElementById('schedule').tBodies[0];
    [
    {block: ' 08:45 - 09:00', author: 'Milowan Martinez - Willy Bown', title: 'Métodos de aprendizaje para entrar a Python', photos: ['copiapo.svg'], level: '', category: 'Aprendizaje en Python'},
    {block: ' 09:00 - 09:15', author: 'Luciano Berrios - Matias Rojas', title: 'Python como primer lenguaje de programación', photos: ['copiapo.svg'], level: '', category: 'Aprendizaje en Python'},
    {block: ' 09:15 - 09:30 ', author: 'Daylan Collado', title: 'Mis errores programando', photos: ['copiapo.svg'], level: '', category: 'Experiencias personales'},
    {block: ' 09:30 - 09:45 ', author: 'Sondra Guerra', title: 'Cómo python cambió mi perspectiva de la carrera', photos: ['copiapo.svg'], level: '', category: 'Experiencias personales'},
    {block: ' 09:45 - 10:00 ', author: 'Michael Lopez - Ricardo Valdes', title: 'Aproximaciones al uso \'ético\' de chat gpt en el estudio', photos: ['copiapo.svg'], level: '', category: 'Ética & IA'},
    {block: ' 10:00 - 10:15 ', author: 'Javiera Collinao - Constanza Tapia', title: 'Mi experiencia aprendiendo Python', photos: ['copiapo.svg'], level: '', category: 'Experiencias personales'},
    {block: ' 10:15 - 10:30 ', author: 'Rodrigo Vera', title: 'La lógica en programación', photos: ['copiapo.svg'], level: '', category: 'Experiencias personales'},
    {block: ' 10:30 - 10:45 ', author: 'Mauro Perez - Carlos Pizarro', title: 'Workshop videojuegos y Python', photos: ['copiapo.svg'], level: '', category: 'Python aplicado'},
    {block: ' 10:45 - 11:00 ', author: 'Andres Ibañez', title: 'Ciencia de datos y python', photos: ['copiapo.svg'], level: '', category: 'Python aplicado'},
    {block: ' 11:00 - 11:15 ', author: 'Katherina Ulloa', title: 'Por Definir', photos: ['copiapo.svg'], level: '', category: 'Experiencias personales'},
    {block: ' 11:15 - 12:00 ', author: 'Luis Rojas', title: 'Redes convolucionales y Python', photos: ['copiapo.svg'], level: '', category: 'IA'},
    {block: ' 12:00 - 12:45 ', author: 'Marco Arévalo', title: 'Python aplicado a IA generativa usando Google Vertex IA', photos: ['copiapo.svg'], level: '', category: 'IA'},

    ].forEach(obj=>{
        const row = tbody.insertRow();
        const blockCell = row.insertCell();
        blockCell.innerHTML = obj.block;
        const eventCell = row.insertCell();
        obj.photos.forEach(photo => {
            const img = document.createElement('img')
            img.className='photo-speaker';
            img.src= 'assets/speakers/copiapo/'+ photo;
            eventCell.appendChild(img)
        });
        const eventDiv = document.createElement("div");
        eventDiv.className='event'
        const titleDiv = document.createElement("div");
        titleDiv.className = 'title';
        titleDiv.innerHTML=obj.title;
        eventDiv.appendChild(titleDiv);
        const authorDiv = document.createElement("div");
        authorDiv.className = 'author';
        authorDiv.innerHTML=obj.author;
        eventDiv.appendChild(authorDiv);
        const levelDiv = document.createElement("div");
        levelDiv.className = 'level ' + obj.level;
        levelDiv.innerHTML=obj.level;
        eventDiv.appendChild(levelDiv);
        const categoryDiv = document.createElement("div");
        categoryDiv.className = 'category ' + (['Data', 'Web'].includes(obj.category) ? obj.category : 'Auto') ;
        categoryDiv.innerHTML=obj.category;
        eventDiv.appendChild(categoryDiv);
        eventCell.appendChild(eventDiv)
    })
}