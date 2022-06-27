const images = [
    'https://cdn.photographycourse.net/wp-content/uploads/2022/04/Portrait-vs-Landscape-Featured-Image-3.jpg',
    'https://i.natgeofe.com/n/2a832501-483e-422f-985c-0e93757b7d84/6.jpg',
    'https://cdn.photographycourse.net/wp-content/uploads/2014/11/Landscape-Photography-steps.jpg',
    'https://www.adorama.com/alc/wp-content/uploads/2018/11/landscape-photography-tips-yosemite-valley-feature.jpg',
    'https://iso.500px.com/wp-content/uploads/2021/02/Torres-Del-Paine-Sunset-By-Paul-Reiffer-2-1500x1000.jpg',
    'https://mymodernmet.com/wp/wp-content/uploads/2020/02/Landscape-Photographer-of-the-Year-Sander-Grefte.jpg'
    ];


let indexElemento=0;

const imgContainer = document.getElementById('contenitore-immagini');
const listImg = imgContainer.children;



    const newImg= document.createElement('img');
    newImg.classList.add('d-block', 'stile-css', 'w-100','rounded-3');
    newImg.setAttribute('src', images[0]);
    imgContainer.append(newImg);

for(let i=1; i<images.length; i++){
    const newImg= document.createElement('img');
    newImg.classList.add('d-none', 'stile-css', 'w-100', 'rounded-3');
    newImg.setAttribute('src', images[i]);
    imgContainer.append(newImg);
}
// * inseriamo i thumbnail //

const thumbnail= document.getElementById('container-thumbnail');
const list= thumbnail.children;

for(let i=0; i<images.length; i++){
    const newImg= document.createElement('img');
    newImg.classList.add('d-block', 'posizione', 'rounded-3');
    newImg.setAttribute('src', images[i]);
    thumbnail.append(newImg)
}

const btnNext= document.getElementById('next-button');
const btnPrev= document.getElementById('previous-button');

btnNext.addEventListener('click', function(){
    
    listImg[indexElemento].classList.remove('d-block');
    listImg[indexElemento].classList.add('d-none');
    indexElemento++;

    if(indexElemento===images.length){
    indexElemento=0;
    }

    listImg[indexElemento].classList.remove('d-none');
    listImg[indexElemento].classList.add('d-block');  
});

const clock= setInterval(funzioneNext, 2000);

function funzioneNext() {
    listImg[indexElemento].classList.remove('d-block');
    listImg[indexElemento].classList.add('d-none');
    indexElemento++;

    if(indexElemento===images.length){
    indexElemento=0;
    }

    listImg[indexElemento].classList.remove('d-none');
    listImg[indexElemento].classList.add('d-block');  
}    

btnPrev.addEventListener('click', function(){
    listImg[indexElemento].classList.remove('d-block');
    listImg[indexElemento].classList.add('d-none');
    
    if(indexElemento==0){
    indexElemento=images.length;
    }

    indexElemento--;
    listImg[indexElemento].classList.remove('d-none');
    listImg[indexElemento].classList.add('d-block');
});

