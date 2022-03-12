function lluvia(){
    
    let monto = 10;
    let body = document.querySelector('body');
    let i = 0;
    
    while(i < monto){
        let soltar = document.createElement('i');

        let tamaño = Math.random() * 5;

        let posX = Math.floor(Math.random() * window.innerWidth);

        let retraso = Math.random() * -20;

        let duracion = Math.random() * 5;

        soltar.style.width = 0.2 + tamaño + 'px';

        soltar.style.left = posX + 'px';

        soltar.style.animationDelay = retraso + 's';

        soltar.style.animationDuration = 1 + duracion + 's';

        body.appendChild(soltar);
        i++
    }
}

lluvia();