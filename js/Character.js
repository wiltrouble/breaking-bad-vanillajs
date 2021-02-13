export default class Character {
    constructor([{name, nickname}]) {
        this.name = name;
        this.nickname = nickname;
        this.nameContainer = document.querySelector('#name');
        
        this.render();

        console.log(name)
    }

    buildCharacterData() {
        return `
            <h2>${this.name}</h2>
            <h2>${this.nickname}</h2>
        `
    }

    render() {
        this.nameContainer.innerHTML = this.buildCharacterData();
    }

}