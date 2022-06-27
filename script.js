const button = document.querySelector(".first-button")
const secondButton = document.querySelector(".second-button")
const textDiv = document.querySelector('div')
const secondDiv = document.querySelector(".second-div")

const getFact = async () => {
    let response = await axios.get(
        `https://cat-fact.herokuapp.com/facts`
    )
    const randomIndex = Math.floor(Math.random()*response.data.length) 
    textDiv.innerText = response.data[randomIndex].text
}

button.addEventListener('click', getFact) 

secondButton.addEventListener('click', getFact) 

