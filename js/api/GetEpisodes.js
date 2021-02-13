export default class Episodes {

    async getAllEpisodes() {
        const episodes = await fetch("https://www.breakingbadapi.com/api/episodes/")
        return await episodes.json();
    }

}