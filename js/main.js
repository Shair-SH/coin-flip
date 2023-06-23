console.log('main loaded');

let head = 0;
let tails = 0;

 let coin = document.querySelector('.coins');
 let flipBtn = document.querySelector('#flip-button');
 let resetBtn = document.querySelector('#reset-button');


 flipBtn.addEventListener('click', ()=>{
    let i = Math.floor(Math.random() * 2);
    coin.style.animation = 'none';
    if(i){
        setTimeout (function(){
            coin.style.animation = 'spin-heads 3s forwards';
        }, 100);
        head++;
    } else {
        setTimeout (function(){
            coin.style.animation = 'spin-tails 3s forwards';
        }, 100);
        tails++;   
    }
    setTimeout(updateStats, 3000);
    disableButton();
 })

 function updateStats(){
     document.querySelector('.head-count').textContent = `Heads: ${head}`;
     document.querySelector('.tails-count').textContent = `Tails: ${tails}`;
    }

    function disableButton(){
        flipBtn.disabled = true;
        setTimeout(function (){
            flipBtn.disabled = false;
        }, 3000)
    }
 
resetBtn.addEventListener('.click', () => {
    coin.style.animation = 'none';
    head = 0;
    tails = 0;
    updateStats();
})