
window.addEventListener('DOMContentLoaded', () => {


    getPups();

})


function getPups() {
    const bar = document.getElementById('dog-bar')
    const info = document.getAnimations('dog-info')
    fetch('http://localhost:3000/pups')
    .then(res => res.json())
    .then(data => data.forEach(pup => {
        let span = document.createElement('span')
        span.textContent = pup.name
        span.addEventListener('click', () => {
            clickPup(pup)
        })
        bar.appendChild(span)

    }))

    

}

function goodBad(bool) {
    if (bool === true) {
        return 'Good Dog!'
    }
    return 'Bad Dog!'
}

function clickPup(pup) {
    const container = document.getElementById('dog-summary-container')
    const div = document.createElement('div')
    div.id = 'dog-info'
    div.innerHTML = `
        <img src=${pup.image} />
        <h2>${pup.name}</h2>
        <button>${goodBad(pup.isGoodDog)}</button>      
        `
    
    container.appendChild(div)

    const btn = document.querySelector('#dog-summary-container button')
    
    btn.addEventListener('click', () => {
        if (btn.textContent === 'Good Boy!') {
            btn.textContent = 'Bad Boy!'
        }
        else {
            btn.textContent = 'Good Boy!'
        }
        fetch(`http://localhost:3000/pups/${pup.id}`, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify({'isGoodDog': !pup.isGoodDog})
        })
        .then(res => res.json())
        .then(data => console.log(data))
        

    

    
    })




}


function updatePup(id, bool) {

    if (bool === true){
        
    }
    else {
        fetch(`http://localhost:3000/pups/${id}`, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify({'isGoodDog': true})
    })
    .then(res => res.json())
    .then(data => console.log(data))
    }
    
}