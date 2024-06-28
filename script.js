let cards_data = [
    {
        title: 'Мальчик',
        description: 'Мальчик проводит время с вернувшимся из тюрьмы отцом, постепенно осознавая, что он не герой',
        image: 'movies/boy.jpg'
    },
    {
        title: 'Кролик Джоджо',
        description: 'Лучший воображаемый друг - Гитлер, мама прячет дома еврейку и другие проблемы в десять лет',
        image: 'movies/jojo.jpg'
    },
    {
        title: 'Реальные упыри',
        description: 'Они реально упыри (съёмочная группа пострадает)',
        image: 'movies/wwdits.jpg'
    },
    {
        title: 'Тор: Рагнарёк',
        description: 'Тор теряет отца и себя, зато находит сестру, которая хочет его убить',
        image: 'movies/thor.jpg'
    },
    {
        title: 'Охота на дикарей',
        description: 'Душевная комедия про сироту и его приёмного отца, который половину фильма хочет вернуть мальчика органам опеки',
        image: 'movies/wild.jpg'
    },
    {
        title: 'Мальчик',
        description: 'Мальчик проводит время с вернувшимся из тюрьмы отцом, постепенно осознавая, что он не герой',
        image: 'movies/boy.jpg'
    },
    {
        title: 'Кролик Джоджо',
        description: 'Лучший воображаемый друг - Гитлер, мама прячет дома еврейку и другие проблемы в десять лет',
        image: 'movies/jojo.jpg'
    },
    {
        title: 'Реальные упыри',
        description: 'Они реально упыри (съёмочная группа пострадает)',
        image: 'movies/wwdits.jpg'
    },
    {
        title: 'Тор: Рагнарёк',
        description: 'Тор теряет отца и себя, зато находит сестру, которая хочет его убить',
        image: 'movies/thor.jpg'
    },
    {
        title: 'Охота на дикарей',
        description: 'Душевная комедия про сироту и его приёмного отца, который половину фильма хочет вернуть мальчика органам опеки',
        image: 'movies/wild.jpg'
    },
]

let createEl = (tag, className, text) => {
    let element = document.createElement(tag);
    if (className) {
        element.classList.add(className);
    }
    if (text) {
        element.textContent = text;
    }
    return element;
}

let createCard = (data) => {
    let card = createEl('div');

    let title = createEl('p', 'title', data.title);
    let desc = createEl('p', 'description', data.description);

    let img = createEl('img');
    img.src = data.image;

    card.appendChild(title);
    card.appendChild(img);
    card.appendChild(desc);

    card.classList.add("card");

    return card;
}

let buttons = document.querySelectorAll(".button");
let cards_list = document.querySelector(".cards");
let movies_button = document.getElementById('movies-button');

for (let card of cards_data) {
    cards_list.appendChild(createCard(card));
}

for (let button of buttons) {
    button.onmouseover = () => {
        button.classList.add("dark-text");
    }
    button.onmouseout = () => {
        button.classList.remove("dark-text");
    }
    button.onclick = () => {
        if (button == movies_button) {
            cards_list.style.display = 'grid';
        }
        else {
            console.log(button);
            cards_list.style.display = 'none';
        }
    }
}

let cards = cards_list.querySelectorAll('.card');

for (let card of cards) {
    card.onmouseover = () => {
        card.classList.add("light-back");
    }
    card.onmouseout = () => {
        card.classList.remove("light-back");
    }
}