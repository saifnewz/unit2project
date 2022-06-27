const secondDiv = document.querySelector(".second-div")

const getFact = async () => {
    let response = await axios.get(
        `https://cat-fact.herokuapp.com/facts`
    )
    const randomIndex = Math.floor(Math.random()*response.data.length) 
    secondDiv.innerText = response.data[randomIndex].text
}

secondButton.addEventListener('click', getFact) 


