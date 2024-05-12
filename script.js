let myNameDom = document.querySelector("#myName")

let myName = prompt("Adınız nedir?")

myNameDom.innerHTML = `${myName}`

setInterval(function(){
    let now = new Date()
    let options = {hour: 'numeric', minute: 'numeric', second: 'numeric', weekday: 'long'};
    let formattedTimeAndDay = now.toLocaleDateString('tr-TR', options);

    let date = document.querySelector("#myClock")

    date.innerHTML = formattedTimeAndDay
},1000)