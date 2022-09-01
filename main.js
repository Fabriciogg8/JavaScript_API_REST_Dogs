const URL = 'https://api.thedogapi.com/v1/images/search';

const URL_RANDOM = 'https://api.thedogapi.com/v1/images/search?limit=4&api_key=ef221a41-feef-4518-8e2d-9704ee9a9f5a';

const URL_FAVOURITES = 'https://api.thedogapi.com/v1/favourites';

const URL_ERROR = 'https://api.thedogapi.com/v1/favourites?limit=1'

const URL_FAVOURITES_DELETE = (id) => 
`https://api.thedogapi.com/v1/favourites/${id}?api_key=ef221a41-feef-4518-8e2d-9704ee9a9f5a`;

const URL_UPLOAD = 'https://api.thedogapi.com/v1/images/upload'

const spanError = document.getElementById('error');

document.addEventListener('DOMContentLoaded', (getRandomDog(), getFavouritesDog()))

async function getRandomDog() {
        const response = await fetch(URL_RANDOM);
        const data = await response.json();
        console.log('heloo1');
        console.log(data);

        if(response.status !== 200) {
            spanError.innerHTML = " Hubo un error " + response.status;
        } else {
            
            const image1 = document.getElementById('img1');
            const image2 = document.getElementById('img2');
            const image3 = document.getElementById('img3');
            const image4 = document.getElementById('img4');

            const btn1 = document.getElementById('btn1');
            const btn2 = document.getElementById('btn2');
            const btn3 = document.getElementById('btn3');
            // const btn4 = document.getElementById('btn4');

            image1.src = data[0].url;
            image2.src = data[1].url;
            image3.src = data[2].url;
            
            btn1.onclick = () => saveFavoriteDog(data[0].id)
            btn2.onclick = () => saveFavoriteDog(data[1].id)
            btn3.onclick = () => saveFavoriteDog(data[2].id)
        }
}

const reload = document.querySelector('#reload')
reload.onclick = getRandomDog;


async function getFavouritesDog() {
        const response = await fetch(URL_FAVOURITES, {
            method: 'GET',
            headers: {
                'X-API-KEY': 'ef221a41-feef-4518-8e2d-9704ee9a9f5a',
            },
        });
        const data = await response.json();
        console.log('heloo');
        console.log(data);
        if(response.status !== 200) {
            spanError.innerHTML = " Hubo un error " + response.status + data.message;
        } else {
            const section = document.getElementById('favoritesDog');
            section.innerHTML = ""
            
            const h2 = document.createElement('h2');
            const h2Text = document.createTextNode('Perros favoritos');
            h2.appendChild(h2Text);
            section.appendChild(h2);

            data.forEach(myDogs => {
                const article = document.createElement('article');
                const img = document.createElement('img');
                const btn = document.createElement('button');
                const btnText = document.createTextNode('Sacar perro de favoritos');
        
                btn.appendChild(btnText); 
                btn.onclick = () => deleteFavoriteDog(myDogs.id)
                // La source para la imagen es la que viene desde data, en cada objeto que nosotros llamamos myDogs
                img.src = myDogs.image.url
        
                article.appendChild(img);
                article.appendChild(btn);
                section.appendChild(article);
            });
        } 
}


async function saveFavoriteDog(id) {
    const res = await fetch(URL_FAVOURITES, {
        method: 'POST',
        headers: {
            'Content-Type':'application/json',
            'X-API-KEY': 'ef221a41-feef-4518-8e2d-9704ee9a9f5a',
        },
        body: JSON.stringify({
            image_id: id,
        }),
    });

    const data = await res.json();
    if(res.status !== 200) {
        spanError.innerHTML = " Hubo un error " + res.status + data.message;
    } else {
        console.log('Perro guardado')
        getFavouritesDog()
    }
}


async function deleteFavoriteDog(id) {
    const res = await fetch(URL_FAVOURITES_DELETE(id), {
        method: 'DELETE',
    });

    const data = await res.json();
    if(res.status !== 200) {
        spanError.innerHTML = " Hubo un error " + res.status + data.message;
    } else {
        console.log('Perro eliminado')
        getFavouritesDog()
    }
}


async function uploadPhoto() {
    const myForm = document.getElementById('uploadingForm');
    const myFormData = new FormData(myForm);

    console.log(myFormData.get('file'))

    const res = await fetch(URL_UPLOAD, {
        method: 'POST', 
        headers: {
            // 'Content-Type': 'multipart/form-data',
            'X-API-KEY': 'ef221a41-feef-4518-8e2d-9704ee9a9f5a',
        },
        body: myFormData,
    })

    const data = await res.json();
    
    if(res.status !== 201) {
        spanError.innerHTML = " Hubo un error " + res.status + data.message;
    } else {
        console.log('Perro cargado')
        saveFavoriteDog(data.id)
    }
}


