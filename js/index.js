import GetCharacters from './GetCharacters.js'
import Character from './Character.js'


const api = new GetCharacters();


async function initApp(characterId) {
    const characterData = await api.getCharacter(characterId)
    console.log(characterData)
    new Character(characterData)

}


initApp(1);