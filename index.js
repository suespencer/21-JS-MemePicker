import { catsData } from "./data.js";

const emotionRadios = document.getElementById("emotion-radios");
const getImageBtn = document.getElementById('get-image-btn')
const animatedGifs = document.getElementById('gifs-only-option')

getImageBtn.addEventListener('click', getMatchingCatsArray)

function getMatchingCatsArray(){
    
   
    if (document.querySelector('input[type="radio"]:checked')) { 
        const selectedEmotion = document.querySelector('input[type="radio"]:checked').value
        console.log(selectedEmotion)
    }
    
    const isAnimatedGif = animatedGifs.checked
    console.log(isAnimatedGif)

}


emotionRadios.addEventListener('change', highlightCheckedOption)

function highlightCheckedOption(e) {
    const radios = document.getElementsByClassName('radio')
    for (let radio of radios) {
        radio.classList.remove('highlight')
    }
    

    console.log(document.getElementById(e.target.id))
    document.getElementById(e.target.id).parentElement.classList.add('highlight')
}

function getEmotionsArray(cats) {
  const emotionsArray = [];

  for (let cat of cats) {
    for (let emotion of cat.emotionTags) {
      if (!emotionsArray.includes(emotion)) {
        emotionsArray.push(emotion);
      }
    }
  }
  return emotionsArray;
}

// getEmotionsArray(catsData);

function renderEmotionsRadios(cats) {
  const emotions = getEmotionsArray(cats);
  console.log(emotions);
  let radioItems = "";
  for (let emotion of emotions) {
    radioItems += `
        <div class="radio">
        <label for="${emotion}">${emotion}</label>
        <input 
           type="radio"
           id="${emotion}"
           value="${emotion}"
           name="emotions"
           > 
           </div>
     `;
  }
  emotionRadios.innerHTML = radioItems;
}

renderEmotionsRadios(catsData);


