
let result = document.querySelector(".result");
let fin_res = document.querySelector(".fin-res");
let ress = document.querySelector(".ress")
let resultt = {
    Won : 0,
    Lose : 0,
    Tie : 0
}

function resett(){
    resultt.Won = 0;
    resultt.Lose = 0;
    resultt.Tie = 0;
    fin_res.innerHTML = `Won : ${resultt.Won}  Lose : ${resultt.Lose}  Tie : ${resultt.Tie}`;
}
function res(op){
    let option = op;
    let com_op = Math.ceil(Math.random()*3);
    let dis;
    switch(com_op){
        case 1 : dis = "Stone";
                    break;
        case 2 : dis = "Paper";
                    break;
        case 3 : dis = "Scissor";
                    break;
    }
    let re = `You chose ${op} and Computer chose ${dis}`;
    if(option === 'Stone'){
        if(dis === 'Scissor'){
        ress.innerHTML = 'You Won';
        resultt.Won += 1;
        }
        else if(dis === 'Stone'){
            ress.innerHTML='Tie';
            resultt.Tie += 1;
        }
        else{
            ress.innerHTML = 'You Lose';
            resultt.Lose += 1;
        }
    }
    else if(option === 'Paper'){
        if(dis === 'Stone'){
        ress.innerHTML = 'You Won';
        resultt.Won += 1;
        }
        else if(dis === 'Paper'){
            ress.innerHTML = 'Tie';
            resultt.Tie += 1;
        }
        else{
            ress.innerHTML = 'You Lose';
            resultt.Lose += 1;
        }
    }
    else{
        if(dis === 'Paper'){
        ress.innerHTML = 'You Won';
        resultt.Won += 1;
        }
        else if(dis === 'Scissor'){
            ress.innerHTML = 'Tie';
            resultt.Tie += 1;
        }
        else{
            ress.innerHTML = 'You Lose';
            resultt.Lose += 1;
        }
    }
    
    result.innerHTML = re;
    fin_res.innerHTML = `Won : ${resultt.Won}  Lose : ${resultt.Lose}  Tie : ${resultt.Tie}`;
}

const st_but = document.querySelector('.stone-but');