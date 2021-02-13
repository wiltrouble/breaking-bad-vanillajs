export default class Footer {

    constructor([characters, episodes, quotes, deaths]) {
        this.characters = characters;
        this.episodes = episodes;
        this.quotes = quotes;
        this.deaths = deaths;
        this.labelsContainer = document.querySelector('#label-container');
        this.render();

    }

    buidLabels() {
        return `
            <p class="label-item">Characters: ${this.characters}</p>
            <p class="label-item">Episodes: ${this.episodes}</p>
            <p class="label-item">Quotes: ${this.quotes}</p>
            <p class="label-item">Deaths Count: ${this.deaths}</p>
        `
    }

    render() {
        this.labelsContainer.innerHTML = this.buidLabels();
    }
}