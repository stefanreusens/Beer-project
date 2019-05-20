// Fetch Generation 1
const init = () => {
    fetch('https://api.punkapi.com/v2/beers')
        .then(response => response.json())
        .then(json => showBeers(json))
    //  .catch(error => alert(`Error: foutje`, error));


}

const showBeers = (data) => {
    // HTML STRUCTURE
    /* const cardColumns = document.createElement('div');
    cardColumns.classList.add('card-columns'); */

    const row = document.querySelector('.row');
    /* container.appendChild(cardColumns); */

    // FOR EACH
    data.forEach((e) => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.classList.add('col-12');
        card.classList.add('col-sm-6');
        card.classList.add('col-lg-4');
        row.appendChild(card);

        const cardImgTop = document.createElement('img');
        cardImgTop.classList.add('card-img-top');
        card.appendChild(cardImgTop);

        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');
        card.appendChild(cardBody);

        const cardTitle = document.createElement('h5');
        cardTitle.classList.add('card-title');
        cardBody.appendChild(cardTitle);

        const tagline = document.createElement('h6');
        cardBody.appendChild(tagline);

        const year = document.createElement('p');
        cardBody.appendChild(year);

        //CONTENT
        cardImgTop.src = e.image_url;
        cardTitle.textContent = e.name;
        tagline.textContent = e.tagline;
        year.textContent = `Since ${e.first_brewed}`;
    })
}

// INITIALIZE FUNCTIONS
init();