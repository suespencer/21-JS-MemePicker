import { catsData } from "./data.js"

const emotionRadios = document.getElementById("emotion-radios")


const emotionsArray = []
function getEmotionsArray(cats) {
    const emotionsArray = []
    
  for (let cat of cats) {
    for (let emotion of cat.emotionTags) {
        emotionsArray.push(emotion)
    }

  }return emotionsArray
}

// getEmotionsArray(catsData);

function renderEmotionsRadios(cats) {
    const emotions = getEmotionsArray(cats)
    console.log(emotions)
    let radioItems = ""
    for (let emotion of emotions) {
        radioItems += `<p>${emotion}</p>`
    }
    emotionRadios.innerHTML=radioItems
}

renderEmotionsRadios(catsData)



