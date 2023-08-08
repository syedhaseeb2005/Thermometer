const tempload = ()=>{
    let temp = document.getElementById('temperture')
    // console.log(temp)
    temp.innerHTML =  '<i class="fa-solid fa-temperature-empty"></i>' // || '&#xf2cb'

    setTimeout(() => {
        temp.innerHTML = '<i class="fa-solid fa-temperature-quarter"></i>'
        temp.style.color = "yellow"
    }, 1000);
    setTimeout(() => {
        temp.innerHTML = '<i class="fa-solid fa-temperature-half"></i>'
    }, 2000);
    setTimeout(() => {
        temp.innerHTML = '<i class="fa-solid fa-temperature-three-quarters"></i>'
    }, 3000);
    setTimeout(() => {
        temp.innerHTML = '<i class="fa-solid fa-temperature-full"></i>'
        temp.style.color = "red"
    }, 4000);
}


tempload()

setInterval(tempload, 5000);