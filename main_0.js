const URL = 'https://api.thedogapi.com/v1/images/search';

// fetch(URL)
//     .then(res => res.json() )
//     .then(data => {
//         const image = document.querySelector('img');
//         image.src = data[0].url;
//     });

const URL_RANDOM = 'https://api.thedogapi.com/v1/images/search?limit=4&api_key=ef221a41-feef-4518-8e2d-9704ee9a9f5a';

document.addEventListener('DOMContentLoaded', getRandomDog)

async function getRandomDog() {
    try{
        const response = await fetch(URL_RANDOM);
        const data = await response.json();
        const image1 = document.getElementById('img1');
        const image2 = document.getElementById('img2');
        const image3 = document.getElementById('img3');
        const image4 = document.getElementById('img4');
        image1.src = data[0].url;
        image2.src = data[1].url;
        image3.src = data[2].url;
        image4.src = data[3].url;
    } 
    catch (error){
        console.log(error)
    }
}

const reload = document.querySelector('#reload')
reload.onclick = getRandomDog;


