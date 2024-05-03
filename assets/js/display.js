const FILES =[
    'about.html',
    //'sponsors.html',
    'past_events.html',
    ]
for(let i=0; i<FILES.length;i++){
    await fetch('assets/sections/' + FILES[i]).then(r => r.text()).then(r => document.body.innerHTML+=r)
}
