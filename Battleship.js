let td_you = document.querySelectorAll('#table_one > tbody > tr > td:not(:nth-child(1))');
let td_pc = document.querySelectorAll('#table_two > tbody > tr > td:not(:nth-child(1))');
let ship_p = 1;
let ship_1 = 0;
/*------------------------table_one---------------------------------*/

/*-------заполняем таблицу_1 нулями --------*/
for(let i = 0; i < td_you.length; i++){
    td_you[i].value = 0;
}
/*-----------------------------------------*/

for(let i = 0; i < td_you.length; i++){
    td_you[i].onclick = function(){
        if(ship_p === 1){
            if(ship_1 < 4){
                if(td_you[i].style.background === 'rgba(192, 192, 192, 0.8)'){
                    alert('Error');
                    console.log(td_you[i].style.background);
                }
                else{
                    if(i === 0){
                        td_you[i].style.background = 'brown';
                        td_you[i+1].style.background = 'rgba(192, 192, 192, 0.8)';
                        td_you[i+10].style.background = 'rgba(192, 192, 192, 0.8)';
                        td_you[i+11].style.background = 'rgba(192, 192, 192, 0.8)';
                        td_you[i].value = 1;
                        console.log(i);
                        console.log(td_you[i].value);
                        ship_1++;
                    } else if(i === 9){
                        td_you[i].style.background = 'brown';
                        td_you[i-1].style.background = 'rgba(192, 192, 192, 0.8)';
                        td_you[i+10].style.background = 'rgba(192, 192, 192, 0.8)';
                        td_you[i+9].style.background = 'rgba(192, 192, 192, 0.8)';
                        td_you[i].value = 1;
                        console.log(i);
                        console.log(td_you[i].value);
                        ship_1++;
                    } else if(i === 90){
                        td_you[i].style.background = 'brown';
                        td_you[i+1].style.background = 'rgba(192, 192, 192, 0.8)';
                        td_you[i-10].style.background = 'rgba(192, 192, 192, 0.8)';
                        td_you[i-9].style.background = 'rgba(192, 192, 192, 0.8)';
                        td_you[i].value = 1;
                        console.log(i);
                        console.log(td_you[i].value);
                        ship_1++;
                    } else if(i === 99){
                        td_you[i].style.background = 'brown';
                        td_you[i-1].style.background = 'rgba(192, 192, 192, 0.8)';
                        td_you[i-10].style.background = 'rgba(192, 192, 192, 0.8)';
                        td_you[i-11].style.background = 'rgba(192, 192, 192, 0.8)';
                        td_you[i].value = 1;
                        console.log(i);
                        console.log(td_you[i].value);
                        ship_1++;
                    } else{
                        let gr = true;
                        for(let a = 2; a < 9; a++){
                            if(i === a){
                                td_you[i].style.background = 'brown';
                                td_you[i+1].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i-1].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i+10].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i+11].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i+9].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i].value = 1;
                                ship_1++;
                                gr = false;
                            }
                        }
                        for(let b = 19; b < 99; b += 10){
                            if(i === b){
                                td_you[i].style.background = 'brown';
                                td_you[i+10].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i-10].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i-1].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i-11].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i+9].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i].value = 1;
                                console.log(i);
                                console.log(td_you[i].value);
                                ship_1++;
                                gr = false;
                            }
                        }
                        for(let c = 91; c < 99; c++){
                            if(i === c){
                                td_you[i].style.background = 'brown';
                                td_you[i+1].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i-1].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i-10].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i-11].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i-9].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i].value = 1;
                                console.log(i);
                                console.log(td_you[i].value);
                                ship_1++;
                                gr = false;
                            }
                        }
                        for(let d = 10; d < 90; d += 10){
                            if(i === d){
                                td_you[i].style.background = 'brown';
                                td_you[i+1].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i-10].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i+10].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i+11].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i-9].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i].value = 1;
                                console.log(i);
                                console.log(td_you[i].value);
                                ship_1++;
                                gr = false;
                            }
                        }
                        if(gr){
                            td_you[i].style.background = 'brown';
                            td_you[i+1].style.background = 'rgba(192, 192, 192, 0.8)';
                            td_you[i-1].style.background = 'rgba(192, 192, 192, 0.8)';
                            td_you[i+10].style.background = 'rgba(192, 192, 192, 0.8)';
                            td_you[i-10].style.background = 'rgba(192, 192, 192, 0.8)';
                            td_you[i-9].style.background = 'rgba(192, 192, 192, 0.8)';
                            td_you[i+9].style.background = 'rgba(192, 192, 192, 0.8)';
                            td_you[i-11].style.background = 'rgba(192, 192, 192, 0.8)';
                            td_you[i+11].style.background = 'rgba(192, 192, 192, 0.8)';
                            td_you[i].value = 1;
                            ship_1++;
                            console.log(i);
                            console.log(td_you[i].value);
                        }

                    }

                }
            }
            else{
                alert('ship = 4!')
            }
        }
    }
}

let m = [];
start.onclick = function(){
    for(let i = 0; i < td_you.length; i++){
        m[i] = td_you[i].value;
    }
    console.log(m);
};
