const express = require('express');
const dotenv = require('dotenv').config();
const { Client } = require('@notionhq/client');

// Init client
const notion = new Client({
  auth: process.env.NOTION_TOKEN
});

const database_id = process.env.NOTION_DATABASE_ID;


/* 
remove at the end (for debugging)

  const listDatabases = async () => {
    const res = await notion.databases.list();
    console.log(res);
  }

  listDatabases();
*/

const getWords = async () => {
  const wordLoad = {
    path: `databases/${database_id}/query`,
    method: 'POST',
  }
  
  const { results } = await notion.request(wordLoad);

  //console.log(results);

  const words = results.map(page => {
    //console.log(page);
    
    return {
      enWords: page.properties.English_word_phrase.title[0],
      ruWords: page.properties.Russian_word_phrase.rich_text[0],
      note: page.properties.Sentence_Note.rich_text[0],
      partSpeech: page.properties.Parts_Speech.multi_select[0],
      typeWords: page.properties.Word_Phrase.select[0],
  }
  
})
return words;
}

;(async () => {
const allWords = await getWords();
console.log(allWords);
})();
//getWords();


const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.static('public'));

app.get('/words', async (req, res) => {
  const words = await getWords();
  res.json(words);
})
app.listen(PORT, console.log(`Server stated on port ${PORT}`));
