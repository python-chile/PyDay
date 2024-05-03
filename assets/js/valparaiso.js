const FILES =[
    'location.html',
    //'schedule.html'
    ]
for(let i=0; i<FILES.length;i++){
    await fetch('assets/sections/valparaiso/' + FILES[i]).then(r => r.text()).then(r => document.body.innerHTML+=r)
}
