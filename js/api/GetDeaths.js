export default class Deaths {
    
    async getAllDeaths() {
        const deaths = await fetch("https://www.breakingbadapi.com/api/deaths/")
        return deaths.json();
    }
}