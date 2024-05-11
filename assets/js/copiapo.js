const FILES =[
    'schedule.html',
    'location.html'
    ]
for(let i=0; i<FILES.length;i++){
    await fetch('assets/sections/copiapo/' + FILES[i]).then(r => r.text()).then(r => document.body.innerHTML+=r)
}
import schedule from '/assets/js/copiapo/schedule.js';
schedule()
