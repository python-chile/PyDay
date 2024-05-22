const FILES =[
    'header.html',
    'about.html',
    'schedule.html',
    'location.html',
    'gallery.html',
    '../footer.html'
    ]
for(let i=0; i<FILES.length;i++){
    await fetch('assets/sections/copiapo/' + FILES[i] + '?v=1.0').then(r => r.text()).then(r => document.body.innerHTML+=r)
}
import schedule from '/assets/js/copiapo/schedule.js?v=1.0';
schedule()
