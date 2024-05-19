const FILES =[
    'header.html',
    'about.html',
    'location.html',
    //'schedule.html',
    'gallery.html',
    '../footer.html'
    ]
for(let i=0; i<FILES.length;i++){
    await fetch('assets/sections/valparaiso/' + FILES[i] + '?v=1.0').then(r => r.text()).then(r => document.body.innerHTML+=r)
}
