const mapsData = [
    {
        name: 'anime',
        bg: 'bg.jpg',
        music: '0.mp3'
    },
    {
        name: 'witcher',
        bg: 'bg.jpg',
        music: '0.mp3'
    },
    {
        name: 'DeathNote',
        bg: 'bg.jpg',
        music: '0.mp3'
    }
]

const audioController = document.querySelector('audio');


//creatingMenu
for (let i = 0; i < mapsData.length; i++) {
    const menuElement = document.createElement('div');
    menuElement.setAttribute('data-src', i);
    menuElement.innerHTML = mapsData[i].name;
    menuElement.className = 'menu_item';
    
    menuElement.addEventListener('click', (e)=>changeMap(e))

    document.querySelector('.menu_wrapper').appendChild(menuElement);
}

function changeMap(e) {
    document.querySelector('.menu_window').style.backgroundImage = 'url("maps/' + e.target.getAttribute('data-src') +  '/bg.jpg")';
    document.querySelector('.window').style.backgroundImage = 'url("maps/' + e.target.getAttribute('data-src') +  '/bg.jpg")';

    audioController.pause();
    audioController.currentTime = 0;  
    audioController.src='maps/' + e.target.getAttribute('data-src') +  '/0.mp3';
    audioController.play();
}


function changeCircleRadius(e, newRadius) {
    Array.from(document.querySelectorAll('.settings_radius__item')).forEach(item=>{
        item.style.boxShadow ='';
    })

    console.log(123)
    e.target.style.boxShadow = '0px 0px 20px white';

    circleRadius = newRadius;
    Array.from(document.querySelectorAll('.item')).forEach(item=>{
        item.style.width = newRadius+'px';
        item.style.height = newRadius+'px';
    })
}