const wordContainer = document.querySelector('#word-container');
const enText = document.querySelector('#word');
const translateText = document.querySelector('#word-translate');
const prevWordBtn = document.querySelector('#prev-word');
const nextWordBtn = document.querySelector('#new-word');
const noteText = document.querySelector('#note');
const partSpeechText = document.querySelector('#partspeech');
const typeWordsText = document.querySelector('#typeword');
const img = document.querySelector('#image img');
const loader = document.querySelector('#loader');


function showLoadingSpinner() {
    loader.hidden = false;
    wordContainer.hidden = true;
}

// Hide Loading
function removeLoadingSpinner() {
    if (!loader.hidden) {
        wordContainer.hidden = false;
        loader.hidden = true;
    }
}


const getWordFromNotionBD = async () => {

    showLoadingSpinner();

    const res = await fetch('http://localhost:5000/words');
    const words = await res.json();

    removeLoadingSpinner();

    return words;
}

const addWordsToDom = async () => {



    const words = await getWordFromNotionBD();

    words.forEach(() => {

        function initialVariable(i = 0) {



            enText.innerText = words[i].enWords ? words[i].enWords.text.content : null;

            translateText.innerText = words[i].ruWords ? words[i].ruWords.text.content : null;

            noteText.innerText = words[i].note ? words[i].note.text.content : null;

            partSpeechText.innerText = words[i].partSpeech ? words[i].partSpeech.name : null;

            typeWordsText.innerText = words[i].typeWords ? words[i].typeWords : null;

            if (words[i].pic && words[i].pic.name.indexOf("http") == 0) {

                img.src = words[i].pic.name;

            } else if (words[i].pic && words[i].pic.name.indexOf("http") == -1) {

                img.src = words[i].pic.file.url;

            } else {

                img.src = ' ';

            }


            return
            enText.innerText,
                translateText.innerText,
                noteText.innerText,
                partSpeechText.innerText,
                typeWordsText.innerText,
                img.src;

        }



        if (!!nextWordBtn.onclick) {


            initialVariable(i = 0);




        } else {

            nextWordBtn.onclick = function () {

                if (i < words.length - 1) {
                    initialVariable(++i);
                }



            }

            prevWordBtn.onclick = function () {

                if (i > 0) {
                    initialVariable(--i);
                }



            }

        }

    })




}

addWordsToDom();