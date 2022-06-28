const button = document.querySelector('.button')
const textDiv = document.querySelector('div')


const getFact = async () => {
    let response = await axios.get(
        `https://cat-fact.herokuapp.com/facts`
    )
    const randomIndex = Math.floor(Math.random()*response.data.length) 
    textDiv.innerText = response.data[randomIndex].text
}

button.addEventListener('click', getFact) 




