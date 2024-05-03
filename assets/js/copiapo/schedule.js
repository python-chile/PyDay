export default () => {
    const tbody = document.getElementById('schedule').tBodies[0];
    [
    //{block: ' - ', author: 'AUTH', title: '', photos: [''], level: '', category: ''},
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