const thirdButton = document.querySelector(".third-button")
const thirdDiv = document.querySelector(".third-div")

const getFact = async () => {
    let response = await axios.get(
        `https://cat-fact.herokuapp.com/facts`
    )
    const randomIndex = Math.floor(Math.random()*response.data.length) 
    thirdDiv.innerText = response.data[randomIndex].text
}

getFact()
