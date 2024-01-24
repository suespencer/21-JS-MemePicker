import { catsData } from "./data.js";

const emotionRadios = document.getElementById("emotion-radios");
const getImageBtn = document.getElementById("get-image-btn");
const gifsOnlyOption = document.getElementById("gifs-only-option");
const memeModalInner = document.getElementById("meme-modal-inner");
const memeModal = document.getElementById("meme-modal");
const memeModalCloseBtn = document.getElementById("meme-modal-close-btn")


emotionRadios.addEventListener("change", highlightCheckedOption);
getImageBtn.addEventListener("click", renderCat);


function highlightCheckedOption(e) {
  const radios = document.getElementsByClassName("radio");
  for (let radio of radios) {
    radio.classList.remove("highlight");
  }

  // console.log(document.getElementById(e.target.id));
  document.getElementById(e.target.id).parentElement.classList.add("highlight");
}

function getMatchingCatsArray() {
  if (document.querySelector('input[type="radio"]:checked')) {
    const selectedEmotion = document.querySelector(
      'input[type="radio"]:checked'
    ).value;
    console.log(selectedEmotion);
    const isGif = gifsOnlyOption.checked;

    const matchingCatArray = catsData.filter(function (cat) {
      if (isGif) {
        // console.log("yes");
        return cat.emotionTags.includes(selectedEmotion) && cat.isGif;
      } else {
        return cat.emotionTags.includes(selectedEmotion);
      }
    });
    // console.log(matchingCatArray);
    return matchingCatArray;
  }
}

function getSingleCatObject() {
  const catsArray = getMatchingCatsArray();
  if (catsArray.length === 1) {
    return catsArray[0];
  } else {
    return catsArray[Math.floor(Math.random() * catsArray.length)];
  }
}


function renderCat() {
  const catObject = getSingleCatObject();
  memeModalInner.innerHTML = `<img 
    class="cat-img" 
    src="./images/${catObject.image}"
    alt="${catObject.alt}"
>`;

  memeModal.style.display = "flex";
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

memeModalCloseBtn.addEventListener('click', function(){
  memeModal.style.display = "none"
})
