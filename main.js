const clientWidth = document.documentElement.clientWidth;
const clientHeigth = document.documentElement.clientHeight;

const circles = Array.from(document.querySelectorAll('.item'));
let tempPositions = [];

let innerFigure = 1;

let tempPlayerFigure = 1;

class Circle {
    constructor(dElementId) {
        this.dElement = document.querySelector('#'+dElementId);
        this.dElement.addEventListener('click', (e)=>{
            if (Number(e.target.innerHTML)!=tempPlayerFigure) {
                alert('OrderMistake')
            }
            if (tempPlayerFigure==10) {
                tempPlayerFigure=1;
            } else {
                tempPlayerFigure++;
            }

            if (tempPlayerFigure==9) {
                tempColor = renderRandmColor();
            }

            this.render();
        })
        this.render();
    }


    async render() {

        let newX;
        let newY;
       

        async function rerender() {
            while (true) {
                newX = Math.random()*(clientWidth-circleRadius);
                newY = Math.random()*(clientHeigth-circleRadius);
                
                let validation = true;

                for (let i = 0; i < circles.length; i++) {
                    let circleTop = circles[i].style.top;
                    let circleLeft = circles[i].style.left;
                
                    circleTop = await Number(circleTop.slice(0, circleTop.length-2));
                    circleLeft = await Number(circleLeft.slice(0, circleTop.length-2));
                    
                

                    console.log(Math.abs(newX-circleLeft), ' ', Math.abs(newY-circleTop))
                    if (Math.abs(newX-circleLeft)<circleRadius || Math.abs(newY-circleTop)<circleRadius) {
                        validation = false;
                    }
                }

                if (validation) break; 
                
            }
        }
        await rerender();
        this.dElement.style.left = newX+'px';
        this.dElement.style.top = newY+'px';
        this.dElement.innerHTML = innerFigure;
        this.dElement.style.backgroundColor = tempColor;
        
        if (innerFigure<10) {
            innerFigure++;

        } else {
            innerFigure=1;
        }
    }
}

let gameTimer;

function startGame() {
    document.querySelector('.menu_window').style.zIndex = '-1';

    setTimeout(()=>document.addEventListener('click', (e)=>{
        if (e.target.className != 'item') {
            alert('MissClick')
        }
        clearTimeout(gameTimer);
        gameTimer = setTimeout(()=>{
            alert('Time is out!')
        }, 1500)
        
    }), 0)

    let circle1 = new Circle('first_item')
    let circle2 = new Circle('second_item')
    let circle3 = new Circle('third_item')

}

let tempColor='red';
function renderRandmColor() {
    //let newColor = Math.trunc( (Math.random()*(Math.pow(2, 24)-Math.pow(2, 23))) + Math.pow(2, 23));
    let newColor = [(Math.random()*255), (Math.random()*255), (Math.random()*255)]
    
        return 'rgb(' + newColor[0] + ',' 
        + newColor[1] + ',' + newColor[2] + ')';


}