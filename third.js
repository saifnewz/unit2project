const fourthButton = document.querySelector('.fourth-button')
const thirdDiv = document.querySelector(".third-div")

const getCatPic = async () => {
    let response = await axios.get(
        `https://api.thecatapi.com/v1/images/search`
    )
    console.log(response.data[0].url)
    thirdDiv.src = response.data[0].url
}

fourthButton.addEventListener('click', getCatPic) 
