export default class Characters {
    
    async getCharacter(id) {
        const response = await fetch(`https://www.breakingbadapi.com/api/characters/${id}`)
        return await response.json();
    }

    async getAllCharacters() {
        const response = await fetch("https://www.breakingbadapi.com/api/characters/");
        return await response.json()
    }
}