const button = document.querySelector(".first-button")
const secondButton = document.querySelector(".second-button")
const textDiv = document.querySelector('div')
const secondDiv = document.querySelector(".second-div")

const getFact = async () => {
    let response = await axios.get(
        `https://cat-fact.herokuapp.com/facts`
    )
    for (let i = 0; i < response.data.length; i++) {
        let catFact = response.data[i].text
        textDiv.innerHTML = catFact
    }
}

const anotherFact = async () => {
    let response = await axios.get(
        `https://cat-fact.herokuapp.com/facts`
    )
    for (let i = 0; i < response.data.length; i++) {
        let catFact = response.data[i].text
        textDiv.innerHTML = catFact
    }
}

button.addEventListener('click', getFact) 

secondButton.addEventListener('click', anotherFact) 

