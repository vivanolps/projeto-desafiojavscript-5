class Carousel {
    constructor(image, title, url) {
        this.image = image;
        this.title = title;
        this.url = url;
    }

    static Start(arr) {
        if (arr && arr.length > 0) {
            Carousel._carouselArr = arr;
            Carousel._sequence = 0;
            Carousel._size = arr.length;
            Carousel.Next();

            document.getElementById('prev-bnt').addEventListener('click', Carousel.Previous);
            document.getElementById('next-bnt').addEventListener('click', Carousel.Next);
        } else {
            throw "O método Start precisa de um array";
        }
    }

    static Previous() {
        Carousel._sequence = (Carousel._sequence - 1 + Carousel._size) % Carousel._size;
        const item = Carousel._carouselArr[Carousel._sequence];
        Carousel.Show(item);
}

static Next() {
    Carousel._sequence = (Carousel._sequence + 1) % Carousel._size;
    const item = Carousel._carouselArr[Carousel._sequence];
    Carousel.Show(item);
}

static Show(item) {
    const divImage = document.getElementById('carousel');
    const divTitle = document.getElementById('carousel-title');

    divImage.innerHTML = `<img src="img/${item.image}" style="max-width:100%; max-height:100%; object-fit:contain; display:block; margin:auto;">`;
    divTitle.innerHTML = `<a href="${item.url}" style="text-decoration:none; color:#1351d8; font-size:20px;">${item.title}</a>`;
    }
}

//agora vou definir os slides
const carouselArr = [];
carouselArr.push(new Carousel("imagem_1.jpg", "Esta é a nova Ranger Ford 2022. Verifique novidades.", "lancamento.html"));
carouselArr.push(new Carousel("imagem_2.jpg", "Ford a nossa história", "#"));
carouselArr.push(new Carousel("imagem_3.jpg", "Nova Ford Bronco Sport 2022", "lancamento.html"));

window.addEventListener('DOMContentLoaded', () => {
    Carousel.Start(carouselArr);
});