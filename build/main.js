const closeBtn = document.querySelector('.closeBtn');
const searchBtn = document.querySelector('.searchBtn');
const textChange = document.querySelector('.textChange');
const searchWords = document.querySelector('.searchWords');
const answerSection = document.querySelector('.answerSection');
const closeAnswer = document.querySelector('.closeAnswer');
const inputSection = document.querySelector('.inputSection');
const inputValue = document.getElementById('inputValue');
const clear = document.querySelector('.clear');
const displayMessage = document.querySelector('.displayMessage');
const sample = document.querySelector('.sample');
const para1 = document.querySelector('.para1');
const para2 = document.querySelector('.para2');
const ans1 = document.querySelector('.ans1');
const ans2 = document.querySelector('.ans2');
const playButton = document.querySelector('.playButton');
const datetime = document.querySelector('.datetime');

const year = new Date();
const date = year.toLocaleDateString('en-us', {
    weekday: 'long',
    month: 'long',
    day: '2-digit',
    year: 'numeric'
});
datetime.textContent = date;

searchBtn.addEventListener('click', ()=>{

    if(searchBtn.classList.contains('searchClose')) {
        searchBtn.classList.remove('searchClose');
        searchBtn.classList.add('searchShow');
        closeBtn.classList.add('after:afterOpacity');
        closeBtn.classList.add('before:beforeOpacity');
        textChange.textContent = 'Search Words';
        inputSection.classList.remove('inputSectionShow');
        inputSection.classList.add('inputSectionHide');
        inputValue.value = '';
    } else {
        searchBtn.classList.remove('searchShow');
        searchBtn.classList.add('searchClose');
        closeBtn.classList.remove('after:afterOpacity');
        closeBtn.classList.remove('before:beforeOpacity');
        textChange.textContent = 'Close Page';
        inputSection.classList.remove('inputSectionHide');
        inputSection.classList.add('inputSectionShow');
    }

});

searchWords.addEventListener('click', ()=>{
    answerSection.style.transform = "translateY(0)";
    answerSection.style.opacity = "1";
    fetchData();
});

clear.addEventListener('click', ()=>{
    inputValue.value = '';
    displayMessage.textContent = 'Search Words Meanings Above.';
});

closeAnswer.addEventListener('click', ()=>{
    answerSection.style.transform = 'origin-top';
    answerSection.style.transform = "translateY(-12rem)";
    answerSection.style.opacity = "0";
    displayMessage.textContent = 'Search Words Meanings Above.';
});

const fetchData = async () => {
    const word = inputValue.value.trim();
    if(!word) {
        displayMessage.textContent = 'Please Enter A Word!';
        answerSection.style.transform = 'origin-top';
        answerSection.style.transform = "translateY(-12rem)";
        answerSection.style.opacity = "0";
        return;
    } else {

        try {
        
        const API_URL = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
        const response = await fetch(API_URL);

        if(response.ok) {
            const data = await response.json();
            console.log(data);

            inputSection.classList.remove('inputSectionLeftBorderShow');
            inputSection.classList.remove('inputSectionRightBorderShow');
            inputSection.classList.add('inputSectionLeftBorderhide');
            inputSection.classList.add('inputSectionRightBorderhide');
            
            sample.textContent = data[0].word;
            para1.textContent = data[0].meanings[0].partOfSpeech;
            para2.textContent = data[0].phonetic;
            ans1.textContent = data[0].meanings[0].definitions[0].definition;

            if(!data[0].meanings[0].definitions[0].example){
                ans2.textContent = "Sorry, example not found."
                inputSection.classList.add('inputSectionLeftBorderShow');
                inputSection.classList.add('inputSectionRightBorderShow');
                inputSection.classList.remove('inputSectionLeftBorderhide');
                inputSection.classList.remove('inputSectionRightBorderhide');
            } else {
                ans2.textContent = data[0].meanings[0].definitions[0].example;
            }
            displayMessage.textContent = 'Congratulation You Have Got The word!'

            const validAudio = data[0].phonetics.find(p=>p.audio);

            if(validAudio && validAudio.audio) {
                playButton.setAttribute('src', validAudio.audio)
            } else {
                playButton.removeAttribute('src');
            }
            

        } else {
            displayMessage.textContent = 'Sorry, word is not found!';
            answerSection.style.transform = 'origin-top';
            answerSection.style.transform = "translateY(-12rem)";
            answerSection.style.opacity = "0";
            inputSection.classList.add('inputSectionLeftBorderShow');
            inputSection.classList.add('inputSectionRightBorderShow');
            inputSection.classList.remove('inputSectionLeftBorderhide');
            inputSection.classList.remove('inputSectionRightBorderhide');
        }
    } catch(err) {
        displayMessage.textContent = 'Sorry, API URL is not working!';
        answerSection.style.transform = 'origin-top';
        answerSection.style.transform = "translateY(-12rem)";
        answerSection.style.opacity = "0";
        inputSection.classList.add('inputSectionLeftBorderShow');
        inputSection.classList.add('inputSectionRightBorderShow');
        inputSection.classList.remove('inputSectionLeftBorderhide');
        inputSection.classList.remove('inputSectionRightBorderhide');
        console.log(err.message);
    }


    }
};

const playSound = () => {
    playButton.play();
}

inputValue.addEventListener('keydown', (e)=>{
    if(e.key === 'Enter') {
        answerSection.style.transform = "translateY(0)";
        answerSection.style.opacity = "1";
        fetchData();
    }
});