import GetCharacters from './api/GetCharacters.js'
import GetEpisodes from './api/GetEpisodes.js'
import GetQuotes from './api/GetQuotes.js'
import GetDeaths from './api/GetDeaths.js'

import Character from './Character.js'
import Footer from '../js/api/Footer.js'


const apiCharacters = new GetCharacters();
const apiEpisodes = new GetEpisodes();
const apiQuotes = new GetQuotes();
const apiDeaths = new GetDeaths();


async function initApp(characterId) {
    const characterData = await apiCharacters.getCharacter(characterId)
    const all = await apiCharacters.getAllCharacters();
    const allCharacters  = Object.keys(all).length;
    new Character(characterData, allCharacters)

}

async function printLabels() {
    var labels = [];
    const characters = await apiCharacters.getAllCharacters();
    const charactersLength = Object.keys(characters).length;
    labels.push(charactersLength);

    const episodes = await apiEpisodes.getAllEpisodes();
    const episodesLength = Object.keys(episodes).length;
    labels.push(episodesLength);

    const quotes = await apiQuotes.getAllQuotes();
    const quotesLength = Object.keys(quotes).length;
    labels.push(quotesLength);

    const deaths = await apiDeaths.getAllDeaths();
    const deathsLength = Object.keys(deaths).length;
    labels.push(deathsLength);


    
    return new Footer(labels)
}




initApp(3);
printLabels()