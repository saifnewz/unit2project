const secondButton = document.querySelector('.second-button')
const secondDiv = document.querySelector(".second-div")

const getMeowFact = async () => {
    const response = await axios.get(`https://virtserver.swaggerhub.com/whiterabbit8/meowfacts/1.0.0/`)
    secondDiv.innerText = response.data[0]
}

secondButton.addEventListener('click', getMeowFact) 
