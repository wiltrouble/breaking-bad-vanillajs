export default class Character {
    constructor([{name, nickname, img}]) {
        this.name = name;
        this.nickname = nickname;
        this.img = img;
        this.nameContainer = document.querySelector('#name');
        this.imageContainer = document.querySelector('#image');
        this.nicknameContainer = document.querySelector('#nickname');
        this.render();
    }

    buildCharacterData() {
        return `
            <h2>${this.name}</h2>
        `
    }

    buildCharacterAvatar() {
        return `
            <img class="avatar" src=${this.img} width="350"></img>
        `
    }

    buildCharacterNickname() {
        return `
            <h2>${this.nickname}</h2>
        `
    }

    render() {
        this.nameContainer.innerHTML = this.buildCharacterData();
        this.imageContainer.innerHTML = this.buildCharacterAvatar();
        // this.nicknameContainer.innerHTML = this.buildCharacterNickname();
    }

}