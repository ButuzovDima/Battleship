let td_you = document.querySelectorAll('#table_one > tbody > tr > td:not(:nth-child(1))');
let td_pc = document.querySelectorAll('#table_two > tbody > tr > td:not(:nth-child(1))');
let ship_p;
let ship_1 = 0;
let ship_2 = 0;
let ship_3 = 0;
let ship_4 = 0;
let ship_two = true;
let ship_three = true;
let ship_four = true;


/*--------------------------begin ship_menu-------------------------------*/
let fa_ship = document.getElementsByClassName('fa-ship');
let style_ship = function(a){
    for(let i = 0; i < fa_ship.length; i++){
        console.log(fa_ship[i].style.boxShadow);
        //work from IE!!!
        if(fa_ship[i].style.boxShadow === '0px 0px 6px 3px #454547'){
            fa_ship[i].style.boxShadow = null;
        }
        // work from chrome!!!
        if(fa_ship[i].style.boxShadow === 'rgb(69, 69, 71) 0px 0px 6px 3px'){
            fa_ship[i].style.boxShadow = null;
        }
    }
    a.style.borderRadius = '7px';
    a.style.boxShadow = '0 0 6px 3px #454547';
};

let p_1 = document.getElementById('p1');
style_ship(p_1);
ship_p = 1;

p1.onclick = function(){
    if(ship_two && ship_three && ship_four){
        let p_1 = document.getElementById('p1');
        ship_p = 1;
        style_ship(p_1);
    }
};
p2.onclick = function(){
    if(ship_three && ship_four){
        let p_2 = document.getElementById('p2');
        ship_p = 2;
        style_ship(p_2);
    }
};
p3.onclick = function(){
    if(ship_two && ship_four){
        let p_3 = document.getElementById('p3');
        ship_p = 3;
        style_ship(p_3);
    }

};
p4.onclick = function(){
    if(ship_two && ship_three){
        let p_4 = document.getElementById('p4');
        ship_p = 4;
        style_ship(p_4);
    }
};
/*--------------------------end ship_menu-------------------------------*/

/*------------------------table_one---------------------------------*/

/*-------------------------begin color_ship-------------------------------*/
function color_ship(a){
    td_you[a].style.background = 'brown';
}
/*-------------------------end color_ship-------------------------------*/

/*-------заполняем таблицу 1 И 2 нулями --------*/
for(let i = 0; i < td_you.length; i++){
    td_you[i].value = 0;
}
for(let i = 0; i < td_pc.length; i++){
    td_pc[i].value = 0;
}
/*--------------------end---------------------*/

/*-------------begin ship td_pc---------------*/

/*----------------расставляем 4-х палубные корабли-----------*/

let posRand = Math.floor(Math.random()*2);
if(posRand === 0){
    let rand = Math.floor(Math.random()*70);

    td_pc[rand].style.background = 'brown';
    td_pc[rand].value = 4;
    console.log(rand);
    console.log(td_pc[rand].value);

    td_pc[rand+10].style.background = 'brown';
    td_pc[rand+10].value = 4;
    console.log(rand+10);
    console.log(td_pc[rand+10].value);

    td_pc[rand+20].style.background = 'brown';
    td_pc[rand+20].value = 4;
    console.log(rand+20);
    console.log(td_pc[rand+20].value);

    td_pc[rand+30].style.background = 'brown';
    td_pc[rand+30].value = 4;
    console.log(rand+30);
    console.log(td_pc[rand+30].value);

    if(rand - 10 >= 0){
        td_pc[rand - 10].style.background = 'rgba(192, 192, 192, 0.8)';
        td_pc[rand - 10].value = 5;
    }
    if(rand + 40 < 100){
        td_pc[rand + 40].style.background = 'rgba(192, 192, 192, 0.8)';
        td_pc[rand + 40].value = 5;
    }
    if(rand - 11 >= 0 && (rand - 11 - 9) % 10 !== 0){
        td_pc[rand - 11].style.background = 'rgba(192, 192, 192, 0.8)';
        td_pc[rand - 11].value = 5;
    }
    if(rand - 9 >= 0 && (rand - 9) % 10 !== 0){
        td_pc[rand - 9].style.background = 'rgba(192, 192, 192, 0.8)';
        td_pc[rand - 9].value = 5;
    }
    if(rand - 1 >= 0 && (rand - 1 - 9) % 10 !== 0){
        td_pc[rand - 1].style.background = 'rgba(192, 192, 192, 0.8)';
        td_pc[rand - 1].value = 5;
    }
    if(rand + 1 < 100 && (rand + 1) % 10 !== 0){
        td_pc[rand + 1].style.background = 'rgba(192, 192, 192, 0.8)';
        td_pc[rand + 1].value = 5;
    }
    if(rand + 9 < 100 && (rand + 9 - 9) % 10 !== 0){
        td_pc[rand + 9].style.background = 'rgba(192, 192, 192, 0.8)';
        td_pc[rand + 9].value = 5;
    }
    if(rand + 11 < 100 && (rand + 11) % 10 !== 0){
        td_pc[rand + 11].style.background = 'rgba(192, 192, 192, 0.8)';
        td_pc[rand + 11].value = 5;
    }
    if(rand + 19 < 100 && (rand + 19 - 9) % 10 !== 0){
        td_pc[rand + 19].style.background = 'rgba(192, 192, 192, 0.8)';
        td_pc[rand + 19].value = 5;
    }
    if(rand + 21 < 100 && (rand + 21) % 10 !== 0){
        td_pc[rand + 21].style.background = 'rgba(192, 192, 192, 0.8)';
        td_pc[rand + 21].value = 5;
    }
    if(rand + 29 < 100 && (rand + 29 - 9) % 10 !== 0){
        td_pc[rand + 29].style.background = 'rgba(192, 192, 192, 0.8)';
        td_pc[rand + 29].value = 5;
    }
    if(rand + 31 < 100 && (rand + 31) % 10 !== 0){
        td_pc[rand + 31].style.background = 'rgba(192, 192, 192, 0.8)';
        td_pc[rand + 31].value = 5;
    }
    if(rand + 39 < 100 && (rand + 39 - 9) % 10 !== 0){
        td_pc[rand + 39].style.background = 'rgba(192, 192, 192, 0.8)';
        td_pc[rand + 39].value = 5;
    }
    if(rand + 41 < 100 && (rand + 41) % 10 !== 0){
        td_pc[rand + 41].style.background = 'rgba(192, 192, 192, 0.8)';
        td_pc[rand + 41].value = 5;
    }
}
else{
    let rand;
    let t = true;
    while (t) {
        rand = Math.floor(Math.random() * 100);
        t = false;
        for (let i = 9; i < 100; i += 10) {
            if (rand === i) {
                t = true;
                break;
            }
        }
        for(let i = 8; i < 99; i += 10){
            if (rand === i) {
                t = true;
                break;
            }
        }
        for(let i = 7; i < 98; i += 10){
            if (rand === i) {
                t = true;
                break;
            }
        }
    }

    td_pc[rand].style.background = 'brown';
    td_pc[rand].value = 4;
    console.log(rand);
    console.log(td_pc[rand].value);

    td_pc[rand+1].style.background = 'brown';
    td_pc[rand+1].value = 4;
    console.log(rand+1);
    console.log(td_pc[rand+1].value);

    td_pc[rand+2].style.background = 'brown';
    td_pc[rand+2].value = 4;
    console.log(rand+2);
    console.log(td_pc[rand+2].value);

    td_pc[rand+3].style.background = 'brown';
    td_pc[rand+3].value = 4;
    console.log(rand+3);
    console.log(td_pc[rand+3].value);

    if(rand - 1 >= 0 && (rand - 1 - 9) % 10 !== 0){
        td_pc[rand - 1].style.background = 'rgba(192, 192, 192, 0.8)';
        td_pc[rand - 1].value = 5;
    }
    if(rand - 11 >= 0 && (rand - 11 - 9) % 10 !== 0){
        td_pc[rand - 11].style.background = 'rgba(192, 192, 192, 0.8)';
        td_pc[rand - 11].value = 5;
    }
    if(rand + 9 < 100 && (rand + 9 - 9) % 10 !== 0){
        td_pc[rand + 9].style.background = 'rgba(192, 192, 192, 0.8)';
        td_pc[rand + 9].value = 5;
    }
    if(rand - 10 >= 0){
        td_pc[rand - 10].style.background = 'rgba(192, 192, 192, 0.8)';
        td_pc[rand - 10].value = 5;
    }
    if(rand + 10 < 100){
        td_pc[rand + 10].style.background = 'rgba(192, 192, 192, 0.8)';
        td_pc[rand + 10].value = 5;
    }
    if(rand - 9 >= 0){
        td_pc[rand - 9].style.background = 'rgba(192, 192, 192, 0.8)';
        td_pc[rand - 9].value = 5;
    }
    if(rand + 11 < 100){
        td_pc[rand + 11].style.background = 'rgba(192, 192, 192, 0.8)';
        td_pc[rand + 11].value = 5;
    }
    if(rand + 4 < 100 && (rand + 4) % 10 !== 0){
        td_pc[rand + 4].style.background = 'rgba(192, 192, 192, 0.8)';
        td_pc[rand + 4].value = 5;
    }
    if(rand - 8 >= 0 && (rand - 8) % 10 !== 0){
        td_pc[rand - 8].style.background = 'rgba(192, 192, 192, 0.8)';
        td_pc[rand - 8].value = 5;
    }
    if(rand + 12 < 100 && (rand + 12) % 10 !== 0){
        td_pc[rand + 12].style.background = 'rgba(192, 192, 192, 0.8)';
        td_pc[rand + 12].value = 5;
    }
    if(rand - 7 >= 0 && (rand - 7) % 10 !== 0){
        td_pc[rand - 7].style.background = 'rgba(192, 192, 192, 0.8)';
        td_pc[rand - 7].value = 5;
    }
    if(rand + 13 < 100 && (rand + 13) % 10 !== 0){
        td_pc[rand + 13].style.background = 'rgba(192, 192, 192, 0.8)';
        td_pc[rand + 13].value = 5;
    }
    if(rand + 14 < 100 && (rand + 14) % 10 !== 0){
        td_pc[rand + 14].style.background = 'rgba(192, 192, 192, 0.8)';
        td_pc[rand + 14].value = 5;
    }
    if(rand - 6 >= 0 && (rand - 6) % 10 !== 0){
        td_pc[rand - 6].style.background = 'rgba(192, 192, 192, 0.8)';
        td_pc[rand - 6].value = 5;
    }
}


/*---------------расставляем трехпалубные корабли-----------*/

for(let i = 0; i < 2; i++){
    //0 - ver; 1 - hor;
    let posRand = Math.floor(Math.random()*2);
    //let posRand = 1;
    if(posRand === 0){
        let rand = Math.floor(Math.random()*80);
        if(td_pc[rand].value !== 1 && td_pc[rand].value !== 2 && td_pc[rand].value !== 3 && td_pc[rand].value !== 4 && td_pc[rand].value !== 5 &&
            td_pc[rand+10].value !== 1 && td_pc[rand+10].value !== 2 && td_pc[rand+10].value !== 3 && td_pc[rand+10].value !== 4 && td_pc[rand+10].value !== 5 &&
            td_pc[rand+20].value !== 1 && td_pc[rand+20].value !== 2 && td_pc[rand+20].value !== 3 && td_pc[rand+20].value !== 4 && td_pc[rand+20].value !== 5){

            td_pc[rand].style.background = 'brown';
            td_pc[rand].value = 3;
            console.log(rand);
            console.log(td_pc[rand].value);

            td_pc[rand+10].style.background = 'brown';
            td_pc[rand+10].value = 3;
            console.log(rand+10);
            console.log(td_pc[rand+10].value);

            td_pc[rand+20].style.background = 'brown';
            td_pc[rand+20].value = 3;
            console.log(rand+20);
            console.log(td_pc[rand+20].value);

            if(rand - 10 >= 0){
                td_pc[rand - 10].style.background = 'rgba(192, 192, 192, 0.8)';
                td_pc[rand - 10].value = 5;
            }
            if(rand + 30 < 100){
                td_pc[rand + 30].style.background = 'rgba(192, 192, 192, 0.8)';
                td_pc[rand + 30].value = 5;
            }
            if(rand - 11 >= 0 && (rand - 11 - 9) % 10 !== 0){
                td_pc[rand - 11].style.background = 'rgba(192, 192, 192, 0.8)';
                td_pc[rand - 11].value = 5;
            }
            if(rand - 9 >= 0 && (rand - 9) % 10 !== 0){
                td_pc[rand - 9].style.background = 'rgba(192, 192, 192, 0.8)';
                td_pc[rand - 9].value = 5;
            }
            if(rand - 1 >= 0 && (rand - 1 - 9) % 10 !== 0){
                td_pc[rand - 1].style.background = 'rgba(192, 192, 192, 0.8)';
                td_pc[rand - 1].value = 5;
            }
            if(rand + 1 < 100 && (rand + 1) % 10 !== 0){
                td_pc[rand + 1].style.background = 'rgba(192, 192, 192, 0.8)';
                td_pc[rand + 1].value = 5;
            }
            if(rand + 9 < 100 && (rand + 9 - 9) % 10 !== 0){
                td_pc[rand + 9].style.background = 'rgba(192, 192, 192, 0.8)';
                td_pc[rand + 9].value = 5;
            }
            if(rand + 11 < 100 && (rand + 11) % 10 !== 0){
                td_pc[rand + 11].style.background = 'rgba(192, 192, 192, 0.8)';
                td_pc[rand + 11].value = 5;
            }
            if(rand + 19 < 100 && (rand + 19 - 9) % 10 !== 0){
                td_pc[rand + 19].style.background = 'rgba(192, 192, 192, 0.8)';
                td_pc[rand + 19].value = 5;
            }
            if(rand + 21 < 100 && (rand + 21) % 10 !== 0){
                td_pc[rand + 21].style.background = 'rgba(192, 192, 192, 0.8)';
                td_pc[rand + 21].value = 5;
            }
            if(rand + 29 < 100 && (rand + 29 - 9) % 10 !== 0){
                td_pc[rand + 29].style.background = 'rgba(192, 192, 192, 0.8)';
                td_pc[rand + 29].value = 5;
            }
            if(rand + 31 < 100 && (rand + 31) % 10 !== 0){
                td_pc[rand + 31].style.background = 'rgba(192, 192, 192, 0.8)';
                td_pc[rand + 31].value = 5;
            }
        }
        else{
            i = i - 1;
        }
    }
    else{
        let rand;
        let t = true;
        while (t) {
            rand = Math.floor(Math.random() * 100);
            t = false;
            for (let i = 9; i < 100; i += 10) {
                if (rand === i) {
                    t = true;
                    break;
                }
            }
            for(let i = 8; i < 99; i += 10){
                if (rand === i) {
                    t = true;
                    break;
                }
            }
        }

        if(td_pc[rand].value !== 1 && td_pc[rand].value !== 2 && td_pc[rand].value !== 3 && td_pc[rand].value !== 4 && td_pc[rand].value !== 5 &&
            td_pc[rand+1].value !== 1 && td_pc[rand+1].value !== 2 && td_pc[rand+1].value !== 3 && td_pc[rand+1].value !== 4 && td_pc[rand+1].value !== 5 &&
            td_pc[rand+2].value !== 1 && td_pc[rand+2].value !== 2 && td_pc[rand+2].value !== 3 && td_pc[rand+2].value !== 4 && td_pc[rand+2].value !== 5){

            td_pc[rand].style.background = 'brown';
            td_pc[rand].value = 3;
            console.log(rand);
            console.log(td_pc[rand].value);

            td_pc[rand+1].style.background = 'brown';
            td_pc[rand+1].value = 3;
            console.log(rand+1);
            console.log(td_pc[rand+1].value);

            td_pc[rand+2].style.background = 'brown';
            td_pc[rand+2].value = 3;
            console.log(rand+2);
            console.log(td_pc[rand+2].value);

            if(rand - 1 >= 0 && (rand - 1 - 9) % 10 !== 0){
                td_pc[rand - 1].style.background = 'rgba(192, 192, 192, 0.8)';
                td_pc[rand - 1].value = 5;
            }
            if(rand - 11 >= 0 && (rand - 11 - 9) % 10 !== 0){
                td_pc[rand - 11].style.background = 'rgba(192, 192, 192, 0.8)';
                td_pc[rand - 11].value = 5;
            }
            if(rand + 9 < 100 && (rand + 9 - 9) % 10 !== 0){
                td_pc[rand + 9].style.background = 'rgba(192, 192, 192, 0.8)';
                td_pc[rand + 9].value = 5;
            }
            if(rand - 10 >= 0){
                td_pc[rand - 10].style.background = 'rgba(192, 192, 192, 0.8)';
                td_pc[rand - 10].value = 5;
            }
            if(rand + 10 < 100){
                td_pc[rand + 10].style.background = 'rgba(192, 192, 192, 0.8)';
                td_pc[rand + 10].value = 5;
            }
            if(rand - 9 >= 0){
                td_pc[rand - 9].style.background = 'rgba(192, 192, 192, 0.8)';
                td_pc[rand - 9].value = 5;
            }
            if(rand + 11 < 100){
                td_pc[rand + 11].style.background = 'rgba(192, 192, 192, 0.8)';
                td_pc[rand + 11].value = 5;
            }
            if(rand + 3 < 100 && (rand + 3) % 10 !== 0){
                td_pc[rand + 3].style.background = 'rgba(192, 192, 192, 0.8)';
                td_pc[rand + 3].value = 5;
            }
            if(rand - 8 >= 0 && (rand - 8) % 10 !== 0){
                td_pc[rand - 8].style.background = 'rgba(192, 192, 192, 0.8)';
                td_pc[rand - 8].value = 5;
            }
            if(rand + 12 < 100 && (rand + 12) % 10 !== 0){
                td_pc[rand + 12].style.background = 'rgba(192, 192, 192, 0.8)';
                td_pc[rand + 12].value = 5;
            }
            if(rand - 7 >= 0 && (rand - 7) % 10 !== 0){
                td_pc[rand - 7].style.background = 'rgba(192, 192, 192, 0.8)';
                td_pc[rand - 7].value = 5;
            }
            if(rand + 13 < 100 && (rand + 13) % 10 !== 0){
                td_pc[rand + 13].style.background = 'rgba(192, 192, 192, 0.8)';
                td_pc[rand + 13].value = 5;
            }

        }
        else{
            i = i - 1;
        }
    }
}

/*---------------расставляем двухпалобные корабли----------*/

for(let i = 0; i < 3; i++){
    //0 - ver; 1 - hor;
    let posRand = Math.floor(Math.random()*2);
    if(posRand === 0){
        let rand = Math.floor(Math.random()*90);
        if(td_pc[rand].value !== 1 && td_pc[rand].value !== 2 && td_pc[rand].value !== 3 && td_pc[rand].value !== 4 && td_pc[rand].value !== 5 &&
            td_pc[rand+10].value !== 1 && td_pc[rand+10].value !== 2 && td_pc[rand+10].value !== 3 && td_pc[rand+10].value !== 4 && td_pc[rand+10].value !== 5){

            td_pc[rand].style.background = 'brown';
            td_pc[rand].value = 2;
            console.log(rand);
            console.log(td_pc[rand].value);

            td_pc[rand+10].style.background = 'brown';
            td_pc[rand+10].value = 2;
            console.log(rand+10);
            console.log(td_pc[rand+10].value);

            if(rand - 10 >= 0){
                td_pc[rand - 10].style.background = 'rgba(192, 192, 192, 0.8)';
                td_pc[rand - 10].value = 5;
            }
            if(rand + 20 < 100){
                td_pc[rand + 20].style.background = 'rgba(192, 192, 192, 0.8)';
                td_pc[rand + 20].value = 5;
            }
            if(rand - 11 >= 0 && (rand - 11 - 9) % 10 !== 0){
                td_pc[rand - 11].style.background = 'rgba(192, 192, 192, 0.8)';
                td_pc[rand - 11].value = 5;
            }
            if(rand - 9 >= 0 && (rand - 9) % 10 !== 0){
                td_pc[rand - 9].style.background = 'rgba(192, 192, 192, 0.8)';
                td_pc[rand - 9].value = 5;
            }
            if(rand - 1 >= 0 && (rand - 1 - 9) % 10 !== 0){
                td_pc[rand - 1].style.background = 'rgba(192, 192, 192, 0.8)';
                td_pc[rand - 1].value = 5;
            }
            if(rand + 1 < 100 && (rand + 1) % 10 !== 0){
                td_pc[rand + 1].style.background = 'rgba(192, 192, 192, 0.8)';
                td_pc[rand + 1].value = 5;
            }
            if(rand + 9 < 100 && (rand + 9 - 9) % 10 !== 0){
                td_pc[rand + 9].style.background = 'rgba(192, 192, 192, 0.8)';
                td_pc[rand + 9].value = 5;
            }
            if(rand + 11 < 100 && (rand + 11) % 10 !== 0){
                td_pc[rand + 11].style.background = 'rgba(192, 192, 192, 0.8)';
                td_pc[rand + 11].value = 5;
            }
            if(rand + 19 < 100 && (rand + 19 - 9) % 10 !== 0){
                td_pc[rand + 19].style.background = 'rgba(192, 192, 192, 0.8)';
                td_pc[rand + 19].value = 5;
            }
            if(rand + 21 < 100 && (rand + 21) % 10 !== 0){
                td_pc[rand + 21].style.background = 'rgba(192, 192, 192, 0.8)';
                td_pc[rand + 21].value = 5;
            }
        }
        else{
            i = i - 1;
        }
    }
    else {
        let rand;
        let t = true;
        while (t) {
            rand = Math.floor(Math.random() * 100);
            t = false;
            for (let i = 9; i < 100; i += 10) {
                if (rand === i) {
                    t = true;
                    break;
                }
            }
        }
        if (td_pc[rand].value !== 1 && td_pc[rand].value !== 2 && td_pc[rand].value !== 3 && td_pc[rand].value !== 4 && td_pc[rand].value !== 5 &&
            td_pc[rand + 1].value !== 1 && td_pc[rand + 1].value !== 2 && td_pc[rand + 1].value !== 3 && td_pc[rand + 1].value !== 4 && td_pc[rand + 1].value !== 5) {

            td_pc[rand].style.background = 'brown';
            td_pc[rand].value = 2;
            console.log(rand);
            console.log(td_pc[rand].value);

            td_pc[rand+1].style.background = 'brown';
            td_pc[rand+1].value = 2;
            console.log(rand+1);
            console.log(td_pc[rand+1].value);

            if(rand - 1 >= 0 && (rand - 1 - 9) % 10 !== 0){
                td_pc[rand - 1].style.background = 'rgba(192, 192, 192, 0.8)';
                td_pc[rand - 1].value = 5;
            }
            if(rand - 11 >= 0 && (rand - 11 - 9) % 10 !== 0){
                td_pc[rand - 11].style.background = 'rgba(192, 192, 192, 0.8)';
                td_pc[rand - 11].value = 5;
            }
            if(rand + 9 < 100 && (rand + 9 - 9) % 10 !== 0){
                td_pc[rand + 9].style.background = 'rgba(192, 192, 192, 0.8)';
                td_pc[rand + 9].value = 5;
            }
            if(rand - 10 >= 0){
                td_pc[rand - 10].style.background = 'rgba(192, 192, 192, 0.8)';
                td_pc[rand - 10].value = 5;
            }
            if(rand + 10 < 100){
                td_pc[rand + 10].style.background = 'rgba(192, 192, 192, 0.8)';
                td_pc[rand + 10].value = 5;
            }
            if(rand - 9 >= 0){
                td_pc[rand - 9].style.background = 'rgba(192, 192, 192, 0.8)';
                td_pc[rand - 9].value = 5;
            }
            if(rand + 11 < 100){
                td_pc[rand + 11].style.background = 'rgba(192, 192, 192, 0.8)';
                td_pc[rand + 11].value = 5;
            }
            if(rand + 2 < 100 && (rand + 2) % 10 !== 0){
                td_pc[rand + 2].style.background = 'rgba(192, 192, 192, 0.8)';
                td_pc[rand + 2].value = 5;
            }
            if(rand - 8 >= 0 && (rand - 8) % 10 !== 0){
                td_pc[rand - 8].style.background = 'rgba(192, 192, 192, 0.8)';
                td_pc[rand - 8].value = 5;
            }
            if(rand + 12 < 100 && (rand + 12) % 10 !== 0){
                td_pc[rand + 12].style.background = 'rgba(192, 192, 192, 0.8)';
                td_pc[rand + 12].value = 5;
            }
        }
        else{
            i = i -1;
        }
    }
}

/*-----------расставляем однопалубные корабли--------------*/
for(let i = 0; i < 4; i++){
    let rand = Math.floor(Math.random()*100);
    if(td_pc[rand].value !== 1 && td_pc[rand].value !== 2 && td_pc[rand].value !== 3 && td_pc[rand].value !== 4 && td_pc[rand].value !== 5 ){

        td_pc[rand].style.background = 'brown';
        td_pc[rand].value = 1;
        console.log(rand);
        console.log(td_pc[rand].value);

        if(rand + 1 < 100 && (rand + 1) % 10 !== 0){
            td_pc[rand + 1].style.background = 'rgba(192, 192, 192, 0.8)';
            td_pc[rand + 1].value = 5;
        }
        if(rand - 1 >= 0 && (rand - 1 - 9) % 10 !== 0 ){
            td_pc[rand - 1].style.background = 'rgba(192, 192, 192, 0.8)';
            td_pc[rand - 1].value = 5;
        }
        if(rand + 10 < 100){
            td_pc[rand + 10].style.background = 'rgba(192, 192, 192, 0.8)';
            td_pc[rand + 10].value = 5;
        }
        if(rand - 10 >= 0){
            td_pc[rand - 10].style.background = 'rgba(192, 192, 192, 0.8)';
            td_pc[rand - 10].value = 5;
        }
        if(rand - 11 >= 0 && (rand - 11 - 9) % 10 !== 0){
            td_pc[rand - 11].style.background = 'rgba(192, 192, 192, 0.8)';
            td_pc[rand - 11].value = 5;
        }
        if(rand + 11 < 100 && (rand + 11) % 10 !== 0){
            td_pc[rand + 11].style.background = 'rgba(192, 192, 192, 0.8)';
            td_pc[rand + 11].value = 5;
        }
        if(rand + 9 < 100 && (rand + 9 - 9) % 10 !== 0){
            td_pc[rand + 9].style.background = 'rgba(192, 192, 192, 0.8)';
            td_pc[rand + 9].value = 5;
        }
        if(rand - 9 >= 0 && (rand - 9) % 10 !== 0){
            td_pc[rand - 9].style.background = 'rgba(192, 192, 192, 0.8)';
            td_pc[rand - 9].value = 5;
        }
    }
    else{
        rand = 0;
        rand = Math.floor(Math.random()*100);
        i = i - 1;
    }
}



/*-------------begin ship td_you---------------*/
for(let i = 0; i < td_you.length; i++){
    td_you[i].onclick = function(){
        if(ship_p === 1){
            if(ship_1 < 4){
                if(td_you[i].style.background === 'rgba(192, 192, 192, 0.8)' || td_you[i].value === 1){
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
                                console.log(i);
                                console.log(td_you[i].value);
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
        } else if(ship_p === 2){
            if(ship_2 < 6){
                if(td_you[i].style.background === 'rgba(192, 192, 192, 0.8)' || td_you[i].value === 2){
                    alert('Error');
                    console.log(td_you[i].style.background);
                }
                else{
                    if(i === 0 && ship_two){
                        ship_two = false;
                        td_you[i].style.background = 'brown';
                        td_you[i+11].style.background = 'rgba(192, 192, 192, 0.8)';
                        td_you[i].value = 2;
                        ship_2++;

                        console.log(i);
                        console.log(td_you[i].value);

                        td_you[i + 1].onclick = function () {
                            if(td_you[i + 1].style.background === 'rgba(192, 192, 192, 0.8)' || td_you[i + 1].value === 2){
                                alert('Error');
                            }
                            else {
                                td_you[i + 1].style.background = 'brown';
                                td_you[i + 2].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i + 10].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i + 12].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i + 1].value = 2;
                                ship_2++;
                                ship_two = true;
                            }
                        };

                        td_you[i + 10].onclick = function(){
                            if(td_you[i + 10].style.background === 'rgba(192, 192, 192, 0.8)' || td_you[i + 10].value === 2){
                                alert('Error');
                            }
                            else {
                                td_you[i + 10].style.background = 'brown';
                                td_you[i + 1].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i + 11].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i + 20].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i + 21].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i + 10].value = 2;
                                ship_2++;
                                ship_two = true;
                            }
                        };

                    } else if(i === 9 && ship_two){
                        ship_two = false;
                        td_you[i].style.background = 'brown';
                        td_you[i + 9].style.background = 'rgba(192, 192, 192, 0.8)';
                        td_you[i].value = 2;

                        ship_2++;

                        console.log(i);
                        console.log(td_you[i].value);

                        td_you[i - 1].onclick = function () {
                            if(td_you[i - 1].style.background === 'rgba(192, 192, 192, 0.8)' || td_you[i - 1].value === 2){
                                alert('Error');
                            }
                            else {
                                td_you[i - 1].style.background = 'brown';
                                td_you[i - 2].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i + 8].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i + 10].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i + 1].value = 2;
                                ship_2++;
                                ship_two = true;
                            }
                        };

                        td_you[i + 10].onclick = function(){
                            if(td_you[i + 10].style.background === 'rgba(192, 192, 192, 0.8)' || td_you[i + 10].value === 2){
                                alert('Error');
                            }
                            else {
                                td_you[i + 10].style.background = 'brown';
                                td_you[i - 1].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i + 19].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i + 20].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i + 10].value = 2;
                                ship_2++;
                                ship_two = true;
                            }
                        };
                    } else if(i === 99 && ship_two){
                        ship_two = false;
                        td_you[i].style.background = 'brown';
                        td_you[i - 11].style.background = 'rgba(192, 192, 192, 0.8)';
                        td_you[i].value = 2;

                        ship_2++;

                        console.log(i);
                        console.log(td_you[i].value);

                        td_you[i - 1].onclick = function () {
                            if(td_you[i - 1].style.background === 'rgba(192, 192, 192, 0.8)' || td_you[i - 1].value === 2){
                                alert('Error');
                            }
                            else {
                                td_you[i - 1].style.background = 'brown';
                                td_you[i - 2].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i - 10].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i - 12].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i - 1].value = 2;
                                ship_2++;
                                ship_two = true;
                            }
                        };

                        td_you[i - 10].onclick = function(){
                            if(td_you[i - 10].style.background === 'rgba(192, 192, 192, 0.8)' || td_you[i - 10].value === 2){
                                alert('Error');
                            }
                            else {
                                td_you[i - 10].style.background = 'brown';
                                td_you[i - 1].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i - 20].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i - 21].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i - 10].value = 2;
                                ship_2++;
                                ship_two = true;
                            }
                        };
                    } else if(i === 90 && ship_two){
                        ship_two = false;
                        td_you[i].style.background = 'brown';
                        td_you[i - 9].style.background = 'rgba(192, 192, 192, 0.8)';
                        td_you[i].value = 2;

                        ship_2++;

                        console.log(i);
                        console.log(td_you[i].value);

                        td_you[i + 1].onclick = function () {
                            if(td_you[i + 1].style.background === 'rgba(192, 192, 192, 0.8)' || td_you[i + 1].value === 2){
                                alert('Error');
                            }
                            else {
                                td_you[i + 1].style.background = 'brown';
                                td_you[i + 2].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i - 10].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i - 8].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i - 1].value = 2;

                                ship_2++;
                                ship_two = true;
                            }
                        };

                        td_you[i - 10].onclick = function(){
                            if(td_you[i - 10].style.background === 'rgba(192, 192, 192, 0.8)' || td_you[i - 10].value === 2){
                                alert('Error');
                            }
                            else {
                                td_you[i - 10].style.background = 'brown';
                                td_you[i + 1].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i - 20].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i - 19].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i - 10].value = 2;

                                ship_2++;
                                ship_two = true;
                            }
                        };
                    } else if(i === 1 && ship_two) {
                        ship_two = false;
                        td_you[i].style.background = 'brown';
                        td_you[i + 9].style.background = 'rgba(192, 192, 192, 0.8)';
                        td_you[i + 11].style.background = 'rgba(192, 192, 192, 0.8)';
                        td_you[i].value = 2;

                        ship_2++;
                        console.log(i);
                        console.log(td_you[i].value);

                        td_you[i + 1].onclick = function () {
                            if(td_you[i + 1].style.background === 'rgba(192, 192, 192, 0.8)' || td_you[i + 1].value === 2){
                                alert('Error');
                            }
                            else {
                                td_you[i + 1].style.background = 'brown';
                                td_you[i + 2].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i - 1].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i + 10].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i + 12].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i + 1].value = 2;

                                ship_2++;
                                ship_two = true;

                                console.log(i + 1);
                                console.log(td_you[i + 1].value);
                            }
                        };

                        td_you[i - 1].onclick = function(){
                            if(td_you[i - 1].style.background === 'rgba(192, 192, 192, 0.8)' || td_you[i - 1].value === 2){
                                alert('Error');
                            }
                            else {
                                td_you[i - 1].style.background = 'brown';
                                td_you[i + 1].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i + 10].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i - 1].value = 2;

                                ship_2++;
                                ship_two = true;

                                console.log(i - 1);
                                console.log(td_you[i - 1].value);
                            }
                        };

                        td_you[i + 10].onclick = function(){
                            if(td_you[i + 10].style.background === 'rgba(192, 192, 192, 0.8)' || td_you[i + 10].value === 2){
                                alert('Error');
                            }
                            else {
                                td_you[i + 10].style.background = 'brown';
                                td_you[i - 1].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i + 1].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i + 19].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i + 20].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i + 21].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i + 10].value = 2;

                                ship_2++;
                                ship_two = true;

                                console.log(i + 10);
                                console.log(td_you[i + 10].value);
                            }
                        };

                    } else if(i === 10 && ship_two){
                        ship_two = false;
                        td_you[i].style.background = 'brown';
                        td_you[i - 9].style.background = 'rgba(192, 192, 192, 0.8)';
                        td_you[i + 11].style.background = 'rgba(192, 192, 192, 0.8)';
                        td_you[i].value = 2;

                        ship_2++;
                        console.log(i);
                        console.log(td_you[i].value);

                        td_you[i + 1].onclick = function () {
                            if(td_you[i + 1].style.background === 'rgba(192, 192, 192, 0.8)' || td_you[i + 1].value === 2){
                                alert('Error');
                            }
                            else {
                                td_you[i + 1].style.background = 'brown';
                                td_you[i + 2].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i - 10].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i - 8].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i + 10].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i + 12].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i + 1].value = 2;

                                ship_2++;
                                ship_two = true;

                                console.log(i + 1);
                                console.log(td_you[i + 1].value);
                            }
                        };

                        td_you[i - 10].onclick = function(){
                            if(td_you[i - 10].style.background === 'rgba(192, 192, 192, 0.8)' || td_you[i - 10].value === 2){
                                alert('Error');
                            }
                            else {
                                td_you[i - 10].style.background = 'brown';
                                td_you[i + 1].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i - 9].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i + 10].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i + 11].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i - 1].value = 2;

                                ship_2++;
                                ship_two = true;

                                console.log(i - 1);
                                console.log(td_you[i - 1].value);
                            }
                        };

                        td_you[i + 10].onclick = function(){
                            if(td_you[i + 10].style.background === 'rgba(192, 192, 192, 0.8)' || td_you[i + 10].value === 2){
                                alert('Error');
                            }
                            else {
                                td_you[i + 10].style.background = 'brown';
                                td_you[i - 10].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i + 1].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i + 20].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i + 21].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i + 10].value = 2;

                                ship_2++;
                                ship_two = true;

                                console.log(i + 10);
                                console.log(td_you[i + 10].value);
                            }
                        };
                    } else if(i === 8 && ship_two){
                        ship_two = false;
                        td_you[i].style.background = 'brown';
                        td_you[i + 9].style.background = 'rgba(192, 192, 192, 0.8)';
                        td_you[i + 11].style.background = 'rgba(192, 192, 192, 0.8)';
                        td_you[i].value = 2;

                        ship_2++;
                        console.log(i);
                        console.log(td_you[i].value);

                        td_you[i + 1].onclick = function () {
                            if(td_you[i + 1].style.background === 'rgba(192, 192, 192, 0.8)' || td_you[i + 1].value === 2){
                                alert('Error');
                            }
                            else {
                                td_you[i + 1].style.background = 'brown';
                                td_you[i - 1].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i + 10].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i + 1].value = 2;

                                ship_2++;
                                ship_two = true;

                                console.log(i + 1);
                                console.log(td_you[i + 1].value);
                            }
                        };

                        td_you[i + 10].onclick = function(){
                            if(td_you[i + 10].style.background === 'rgba(192, 192, 192, 0.8)' || td_you[i + 10].value === 2){
                                alert('Error');
                            }
                            else {
                                td_you[i + 10].style.background = 'brown';
                                td_you[i + 1].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i - 1].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i + 19].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i + 20].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i + 21].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i + 10].value = 2;

                                ship_2++;
                                ship_two = true;

                                console.log(i + 10);
                                console.log(td_you[i + 10].value);
                            }
                        };

                        td_you[i - 1].onclick = function(){
                            if(td_you[i - 1].style.background === 'rgba(192, 192, 192, 0.8)' || td_you[i - 1].value === 2){
                                alert('Error');
                            }
                            else {
                                td_you[i - 1].style.background = 'brown';
                                td_you[i + 1].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i + 10].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i - 2].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i + 8].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i - 1].value = 2;

                                ship_2++;
                                ship_two = true;

                                console.log(i - 1);
                                console.log(td_you[i - 1].value);
                            }
                        };
                    } else if(i === 19 && ship_two){
                        ship_two = false;
                        td_you[i].style.background = 'brown';
                        td_you[i + 9].style.background = 'rgba(192, 192, 192, 0.8)';
                        td_you[i - 11].style.background = 'rgba(192, 192, 192, 0.8)';
                        td_you[i].value = 2;

                        ship_2++;
                        console.log(i);
                        console.log(td_you[i].value);

                        td_you[i - 10].onclick = function () {
                            if(td_you[i - 10].style.background === 'rgba(192, 192, 192, 0.8)' || td_you[i - 10].value === 2){
                                alert('Error');
                            }
                            else {
                                td_you[i - 10].style.background = 'brown';
                                td_you[i - 1].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i + 10].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i - 10].value = 2;

                                ship_2++;
                                ship_two = true;

                                console.log(i - 10);
                                console.log(td_you[i - 10].value);
                            }
                        };

                        td_you[i + 10].onclick = function(){
                            if(td_you[i + 10].style.background === 'rgba(192, 192, 192, 0.8)' || td_you[i + 10].value === 2){
                                alert('Error');
                            }
                            else {
                                td_you[i + 10].style.background = 'brown';
                                td_you[i - 1].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i - 10].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i + 19].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i + 20].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i + 19].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i + 10].value = 2;

                                ship_2++;
                                ship_two = true;

                                console.log(i + 10);
                                console.log(td_you[i + 10].value);
                            }
                        };

                        td_you[i - 1].onclick = function(){
                            if(td_you[i - 1].style.background === 'rgba(192, 192, 192, 0.8)' || td_you[i - 1].value === 2){
                                alert('Error');
                            }
                            else {
                                td_you[i - 1].style.background = 'brown';
                                td_you[i + 10].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i - 10].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i - 12].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i - 2].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i + 8].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i - 1].value = 2;

                                ship_2++;
                                ship_two = true;

                                console.log(i - 1);
                                console.log(td_you[i - 1].value);
                            }
                        };
                    } else if(i === 89 && ship_two){
                        ship_two = false;
                        td_you[i].style.background = 'brown';
                        td_you[i + 9].style.background = 'rgba(192, 192, 192, 0.8)';
                        td_you[i - 11].style.background = 'rgba(192, 192, 192, 0.8)';
                        td_you[i].value = 2;

                        ship_2++;
                        console.log(i);
                        console.log(td_you[i].value);

                        td_you[i - 10].onclick = function () {
                            if(td_you[i - 10].style.background === 'rgba(192, 192, 192, 0.8)' || td_you[i - 10].value === 2){
                                alert('Error');
                            }
                            else {
                                td_you[i - 10].style.background = 'brown';
                                td_you[i - 1].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i + 10].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i - 20].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i - 21].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i - 10].value = 2;

                                ship_2++;
                                ship_two = true;

                                console.log(i - 10);
                                console.log(td_you[i - 10].value);
                            }
                        };

                        td_you[i + 10].onclick = function(){
                            if(td_you[i + 10].style.background === 'rgba(192, 192, 192, 0.8)' || td_you[i + 10].value === 2){
                                alert('Error');
                            }
                            else {
                                td_you[i + 10].style.background = 'brown';
                                td_you[i - 1].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i - 10].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i + 10].value = 2;

                                ship_2++;
                                ship_two = true;

                                console.log(i + 10);
                                console.log(td_you[i + 10].value);
                            }
                        };

                        td_you[i - 1].onclick = function(){
                            if(td_you[i - 1].style.background === 'rgba(192, 192, 192, 0.8)' || td_you[i - 1].value === 2){
                                alert('Error');
                            }
                            else {
                                td_you[i - 1].style.background = 'brown';
                                td_you[i + 10].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i - 10].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i - 12].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i - 2].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i + 8].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i - 1].value = 2;

                                ship_2++;
                                ship_two = true;

                                console.log(i - 1);
                                console.log(td_you[i - 1].value);
                            }
                        };
                    } else if(i === 98 && ship_two){
                        ship_two = false;
                        td_you[i].style.background = 'brown';
                        td_you[i - 9].style.background = 'rgba(192, 192, 192, 0.8)';
                        td_you[i - 11].style.background = 'rgba(192, 192, 192, 0.8)';
                        td_you[i].value = 2;

                        ship_2++;
                        console.log(i);
                        console.log(td_you[i].value);

                        td_you[i - 10].onclick = function () {
                            if(td_you[i - 10].style.background === 'rgba(192, 192, 192, 0.8)' || td_you[i - 10].value === 2){
                                alert('Error');
                            }
                            else {
                                td_you[i - 10].style.background = 'brown';
                                td_you[i - 1].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i + 1].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i - 20].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i - 21].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i - 19].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i - 10].value = 2;

                                ship_2++;
                                ship_two = true;

                                console.log(i - 10);
                                console.log(td_you[i - 10].value);
                            }
                        };

                        td_you[i + 1].onclick = function(){
                            if(td_you[i + 1].style.background === 'rgba(192, 192, 192, 0.8)' || td_you[i + 1].value === 2){
                                alert('Error');
                            }
                            else {
                                td_you[i + 1].style.background = 'brown';
                                td_you[i - 1].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i - 10].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i + 1].value = 2;

                                ship_2++;
                                ship_two = true;

                                console.log(i + 1);
                                console.log(td_you[i + 1].value);
                            }
                        };

                        td_you[i - 1].onclick = function(){
                            if(td_you[i - 1].style.background === 'rgba(192, 192, 192, 0.8)' || td_you[i - 1].value === 2){
                                alert('Error');
                            }
                            else {
                                td_you[i - 1].style.background = 'brown';
                                td_you[i + 1].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i - 10].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i - 12].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i - 2].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i - 1].value = 2;

                                ship_2++;
                                ship_two = true;

                                console.log(i - 1);
                                console.log(td_you[i - 1].value);
                            }
                        };
                    } else if(i === 91 && ship_two){
                        ship_two = false;
                        td_you[i].style.background = 'brown';
                        td_you[i - 9].style.background = 'rgba(192, 192, 192, 0.8)';
                        td_you[i - 11].style.background = 'rgba(192, 192, 192, 0.8)';
                        td_you[i].value = 2;

                        ship_2++;
                        console.log(i);
                        console.log(td_you[i].value);

                        td_you[i - 10].onclick = function () {
                            if(td_you[i - 10].style.background === 'rgba(192, 192, 192, 0.8)' || td_you[i - 10].value === 2){
                                alert('Error');
                            }
                            else {
                                td_you[i - 10].style.background = 'brown';
                                td_you[i - 1].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i + 1].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i - 20].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i - 21].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i - 19].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i - 10].value = 2;

                                ship_2++;
                                ship_two = true;

                                console.log(i - 10);
                                console.log(td_you[i - 10].value);
                            }
                        };

                        td_you[i + 1].onclick = function(){
                            if(td_you[i + 1].style.background === 'rgba(192, 192, 192, 0.8)' || td_you[i + 1].value === 2){
                                alert('Error');
                            }
                            else {
                                td_you[i + 1].style.background = 'brown';
                                td_you[i - 1].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i - 10].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i - 8].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i + 2].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i + 1].value = 2;

                                ship_2++;
                                ship_two = true;

                                console.log(i + 1);
                                console.log(td_you[i + 1].value);
                            }
                        };

                        td_you[i - 1].onclick = function(){
                            if(td_you[i - 1].style.background === 'rgba(192, 192, 192, 0.8)' || td_you[i - 1].value === 2){
                                alert('Error');
                            }
                            else {
                                td_you[i - 1].style.background = 'brown';
                                td_you[i + 1].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i - 10].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i - 1].value = 2;

                                ship_2++;
                                ship_two = true;

                                console.log(i - 1);
                                console.log(td_you[i - 1].value);
                            }
                        };
                    } else if(i === 80 && ship_two){
                        ship_two = false;
                        td_you[i].style.background = 'brown';
                        td_you[i - 9].style.background = 'rgba(192, 192, 192, 0.8)';
                        td_you[i + 11].style.background = 'rgba(192, 192, 192, 0.8)';
                        td_you[i].value = 2;

                        ship_2++;
                        console.log(i);
                        console.log(td_you[i].value);

                        td_you[i - 10].onclick = function () {
                            if(td_you[i - 10].style.background === 'rgba(192, 192, 192, 0.8)' || td_you[i - 10].value === 2){
                                alert('Error');
                            }
                            else {
                                td_you[i - 10].style.background = 'brown';
                                td_you[i + 1].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i + 10].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i - 20].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i - 19].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i - 10].value = 2;

                                ship_2++;
                                ship_two = true;

                                console.log(i - 10);
                                console.log(td_you[i - 10].value);
                            }
                        };

                        td_you[i + 10].onclick = function(){
                            if(td_you[i + 10].style.background === 'rgba(192, 192, 192, 0.8)' || td_you[i + 10].value === 2){
                                alert('Error');
                            }
                            else {
                                td_you[i + 10].style.background = 'brown';
                                td_you[i + 1].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i - 10].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i + 10].value = 2;

                                ship_2++;
                                ship_two = true;

                                console.log(i + 10);
                                console.log(td_you[i + 10].value);
                            }
                        };

                        td_you[i + 1].onclick = function(){
                            if(td_you[i + 1].style.background === 'rgba(192, 192, 192, 0.8)' || td_you[i + 1].value === 2){
                                alert('Error');
                            }
                            else {
                                td_you[i + 1].style.background = 'brown';
                                td_you[i + 10].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i - 10].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i + 12].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i + 2].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i - 8].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i + 1].value = 2;

                                ship_2++;
                                ship_two = true;

                                console.log(i + 1);
                                console.log(td_you[i + 1].value);
                            }
                        };
                    } else if(i === 11 && ship_two){
                        ship_two = false;
                        td_you[i].style.background = 'brown';
                        td_you[i - 11].style.background = 'rgba(192, 192, 192, 0.8)';
                        td_you[i - 9].style.background = 'rgba(192, 192, 192, 0.8)';
                        td_you[i + 9].style.background = 'rgba(192, 192, 192, 0.8)';
                        td_you[i + 11].style.background = 'rgba(192, 192, 192, 0.8)';
                        td_you[i].value = 2;

                        ship_2++;
                        console.log(i);
                        console.log(td_you[i].value);

                        td_you[i - 10].onclick = function () {
                            if(td_you[i - 10].style.background === 'rgba(192, 192, 192, 0.8)' || td_you[i - 10].value === 2){
                                alert('Error');
                            }
                            else {
                                td_you[i - 10].style.background = 'brown';
                                td_you[i + 1].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i - 1].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i + 10].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i - 10].value = 2;

                                ship_2++;
                                ship_two = true;

                                console.log(i - 10);
                                console.log(td_you[i - 10].value);
                            }
                        };

                        td_you[i - 1].onclick = function () {
                            if(td_you[i - 1].style.background === 'rgba(192, 192, 192, 0.8)' || td_you[i - 1].value === 2){
                                alert('Error');
                            }
                            else {
                                td_you[i - 1].style.background = 'brown';
                                td_you[i + 10].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i - 10].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i + 1].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i - 1].value = 2;

                                ship_2++;
                                ship_two = true;

                                console.log(i - 1);
                                console.log(td_you[i - 1].value);
                            }
                        };

                        td_you[i + 1].onclick = function () {
                            if(td_you[i + 1].style.background === 'rgba(192, 192, 192, 0.8)' || td_you[i + 1].value === 2){
                                alert('Error');
                            }
                            else {
                                td_you[i + 1].style.background = 'brown';
                                td_you[i - 1].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i - 10].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i + 10].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i + 2].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i + 12].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i - 8].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i + 1].value = 2;

                                ship_2++;
                                ship_two = true;

                                console.log(i + 1);
                                console.log(td_you[i + 1].value);
                            }
                        };

                        td_you[i + 10].onclick = function () {
                            if(td_you[i + 10].style.background === 'rgba(192, 192, 192, 0.8)' || td_you[i + 10].value === 2){
                                alert('Error');
                            }
                            else {
                                td_you[i + 10].style.background = 'brown';
                                td_you[i - 1].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i - 10].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i + 1].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i + 19].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i + 20].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i + 21].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i + 10].value = 2;

                                ship_2++;
                                ship_two = true;

                                console.log(i + 10);
                                console.log(td_you[i + 10].value);
                            }
                        };

                    } else if(i === 18 && ship_two){
                        ship_two = false;
                        td_you[i].style.background = 'brown';
                        td_you[i - 11].style.background = 'rgba(192, 192, 192, 0.8)';
                        td_you[i - 9].style.background = 'rgba(192, 192, 192, 0.8)';
                        td_you[i + 9].style.background = 'rgba(192, 192, 192, 0.8)';
                        td_you[i + 11].style.background = 'rgba(192, 192, 192, 0.8)';
                        td_you[i].value = 2;

                        ship_2++;
                        console.log(i);
                        console.log(td_you[i].value);

                        td_you[i - 10].onclick = function () {
                            if(td_you[i - 10].style.background === 'rgba(192, 192, 192, 0.8)' || td_you[i - 10].value === 2){
                                alert('Error');
                            }
                            else {
                                td_you[i - 10].style.background = 'brown';
                                td_you[i + 1].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i - 1].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i + 10].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i - 10].value = 2;

                                ship_2++;
                                ship_two = true;

                                console.log(i - 10);
                                console.log(td_you[i - 10].value);
                            }
                        };

                        td_you[i - 1].onclick = function () {
                            if(td_you[i - 1].style.background === 'rgba(192, 192, 192, 0.8)' || td_you[i - 1].value === 2){
                                alert('Error');
                            }
                            else {
                                td_you[i - 1].style.background = 'brown';
                                td_you[i + 10].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i - 10].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i + 1].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i - 12].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i - 2].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i + 8].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i - 1].value = 2;

                                ship_2++;
                                ship_two = true;

                                console.log(i - 1);
                                console.log(td_you[i - 1].value);
                            }
                        };

                        td_you[i + 1].onclick = function () {
                            if(td_you[i + 1].style.background === 'rgba(192, 192, 192, 0.8)' || td_you[i + 1].value === 2){
                                alert('Error');
                            }
                            else {
                                td_you[i + 1].style.background = 'brown';
                                td_you[i - 1].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i - 10].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i + 10].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i + 1].value = 2;

                                ship_2++;
                                ship_two = true;

                                console.log(i + 1);
                                console.log(td_you[i + 1].value);
                            }
                        };

                        td_you[i + 10].onclick = function () {
                            if(td_you[i + 10].style.background === 'rgba(192, 192, 192, 0.8)' || td_you[i + 10].value === 2){
                                alert('Error');
                            }
                            else {
                                td_you[i + 10].style.background = 'brown';
                                td_you[i - 1].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i - 10].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i + 1].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i + 19].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i + 20].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i + 21].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i + 10].value = 2;

                                ship_2++;
                                ship_two = true;

                                console.log(i + 10);
                                console.log(td_you[i + 10].value);
                            }
                        };
                    } else if(i === 81 && ship_two){
                        ship_two = false;
                        td_you[i].style.background = 'brown';
                        td_you[i - 11].style.background = 'rgba(192, 192, 192, 0.8)';
                        td_you[i - 9].style.background = 'rgba(192, 192, 192, 0.8)';
                        td_you[i + 9].style.background = 'rgba(192, 192, 192, 0.8)';
                        td_you[i + 11].style.background = 'rgba(192, 192, 192, 0.8)';
                        td_you[i].value = 2;

                        ship_2++;
                        console.log(i);
                        console.log(td_you[i].value);

                        td_you[i - 10].onclick = function () {
                            if(td_you[i - 10].style.background === 'rgba(192, 192, 192, 0.8)' || td_you[i - 10].value === 2){
                                alert('Error');
                            }
                            else {
                                td_you[i - 10].style.background = 'brown';
                                td_you[i + 1].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i - 1].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i + 10].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i - 20].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i - 21].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i - 19].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i - 10].value = 2;

                                ship_2++;
                                ship_two = true;

                                console.log(i - 10);
                                console.log(td_you[i - 10].value);
                            }
                        };

                        td_you[i - 1].onclick = function () {
                            if(td_you[i - 1].style.background === 'rgba(192, 192, 192, 0.8)' || td_you[i - 1].value === 2){
                                alert('Error');
                            }
                            else {
                                td_you[i - 1].style.background = 'brown';
                                td_you[i + 10].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i - 10].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i + 1].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i - 1].value = 2;

                                ship_2++;
                                ship_two = true;

                                console.log(i - 1);
                                console.log(td_you[i - 1].value);
                            }
                        };

                        td_you[i + 1].onclick = function () {
                            if(td_you[i + 1].style.background === 'rgba(192, 192, 192, 0.8)' || td_you[i + 1].value === 2){
                                alert('Error');
                            }
                            else {
                                td_you[i + 1].style.background = 'brown';
                                td_you[i - 1].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i - 10].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i + 10].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i + 2].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i + 12].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i - 8].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i + 1].value = 2;

                                ship_2++;
                                ship_two = true;

                                console.log(i + 1);
                                console.log(td_you[i + 1].value);
                            }
                        };

                        td_you[i + 10].onclick = function () {
                            if(td_you[i + 10].style.background === 'rgba(192, 192, 192, 0.8)' || td_you[i + 10].value === 2){
                                alert('Error');
                            }
                            else {
                                td_you[i + 10].style.background = 'brown';
                                td_you[i - 1].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i - 10].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i + 1].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i + 10].value = 2;

                                ship_2++;
                                ship_two = true;

                                console.log(i + 10);
                                console.log(td_you[i + 10].value);
                            }
                        };
                    } else if(i === 88 && ship_two){
                        ship_two = false;
                        td_you[i].style.background = 'brown';
                        td_you[i - 11].style.background = 'rgba(192, 192, 192, 0.8)';
                        td_you[i - 9].style.background = 'rgba(192, 192, 192, 0.8)';
                        td_you[i + 9].style.background = 'rgba(192, 192, 192, 0.8)';
                        td_you[i + 11].style.background = 'rgba(192, 192, 192, 0.8)';
                        td_you[i].value = 2;

                        ship_2++;
                        console.log(i);
                        console.log(td_you[i].value);

                        td_you[i - 10].onclick = function () {
                            if(td_you[i - 10].style.background === 'rgba(192, 192, 192, 0.8)' || td_you[i - 10].value === 2){
                                alert('Error');
                            }
                            else {
                                td_you[i - 10].style.background = 'brown';
                                td_you[i + 1].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i - 1].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i + 10].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i - 20].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i - 21].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i - 19].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i - 10].value = 2;

                                ship_2++;
                                ship_two = true;

                                console.log(i - 10);
                                console.log(td_you[i - 10].value);
                            }
                        };

                        td_you[i - 1].onclick = function () {
                            if(td_you[i - 1].style.background === 'rgba(192, 192, 192, 0.8)' || td_you[i - 1].value === 2){
                                alert('Error');
                            }
                            else {
                                td_you[i - 1].style.background = 'brown';
                                td_you[i + 10].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i - 10].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i + 1].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i - 12].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i - 2].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i + 8].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i - 1].value = 2;

                                ship_2++;
                                ship_two = true;

                                console.log(i - 1);
                                console.log(td_you[i - 1].value);
                            }
                        };

                        td_you[i + 1].onclick = function () {
                            if(td_you[i + 1].style.background === 'rgba(192, 192, 192, 0.8)' || td_you[i + 1].value === 2){
                                alert('Error');
                            }
                            else {
                                td_you[i + 1].style.background = 'brown';
                                td_you[i - 1].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i - 10].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i + 10].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i + 1].value = 2;

                                ship_2++;
                                ship_two = true;

                                console.log(i + 1);
                                console.log(td_you[i + 1].value);
                            }
                        };

                        td_you[i + 10].onclick = function () {
                            if(td_you[i + 10].style.background === 'rgba(192, 192, 192, 0.8)' || td_you[i + 10].value === 2){
                                alert('Error');
                            }
                            else {
                                td_you[i + 10].style.background = 'brown';
                                td_you[i - 1].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i - 10].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i + 1].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i + 10].value = 2;

                                ship_2++;
                                ship_two = true;

                                console.log(i + 10);
                                console.log(td_you[i + 10].value);
                            }
                        };
                    } else {
                        let gr = true;
                        for(let a = 2; a < 8; a++){
                            if(i === a && ship_two){
                                ship_two = false;
                                td_you[i].style.background = 'brown';
                                td_you[i + 9].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i + 11].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i].value = 2;

                                ship_2++;
                                console.log(i);
                                console.log(td_you[i].value);

                                td_you[i + 1].onclick = function () {
                                    if(td_you[i + 1].style.background === 'rgba(192, 192, 192, 0.8)' || td_you[i + 1].value === 2){
                                        alert('Error');
                                    }
                                    else {
                                        td_you[i + 1].style.background = 'brown';
                                        td_you[i + 2].style.background = 'rgba(192, 192, 192, 0.8)';
                                        td_you[i - 1].style.background = 'rgba(192, 192, 192, 0.8)';
                                        td_you[i + 10].style.background = 'rgba(192, 192, 192, 0.8)';
                                        td_you[i + 12].style.background = 'rgba(192, 192, 192, 0.8)';
                                        td_you[i + 1].value = 2;

                                        ship_2++;
                                        ship_two = true;
                                        gr = false;

                                        console.log(i + 1);
                                        console.log(td_you[i + 1].value);
                                    }
                                };

                                td_you[i - 1].onclick = function(){
                                    if(td_you[i - 1].style.background === 'rgba(192, 192, 192, 0.8)' || td_you[i - 1].value === 2){
                                        alert('Error');
                                    }
                                    else {
                                        td_you[i - 1].style.background = 'brown';
                                        td_you[i + 1].style.background = 'rgba(192, 192, 192, 0.8)';
                                        td_you[i + 10].style.background = 'rgba(192, 192, 192, 0.8)';
                                        td_you[i + 8].style.background = 'rgba(192, 192, 192, 0.8)';
                                        td_you[i - 2].style.background = 'rgba(192, 192, 192, 0.8)';
                                        td_you[i - 1].value = 2;

                                        ship_2++;
                                        ship_two = true;
                                        gr = false;

                                        console.log(i - 1);
                                        console.log(td_you[i - 1].value);
                                    }
                                };

                                td_you[i + 10].onclick = function(){
                                    if(td_you[i + 10].style.background === 'rgba(192, 192, 192, 0.8)' || td_you[i + 10].value === 2){
                                        alert('Error');
                                    }
                                    else {
                                        td_you[i + 10].style.background = 'brown';
                                        td_you[i - 1].style.background = 'rgba(192, 192, 192, 0.8)';
                                        td_you[i + 1].style.background = 'rgba(192, 192, 192, 0.8)';
                                        td_you[i + 19].style.background = 'rgba(192, 192, 192, 0.8)';
                                        td_you[i + 20].style.background = 'rgba(192, 192, 192, 0.8)';
                                        td_you[i + 21].style.background = 'rgba(192, 192, 192, 0.8)';
                                        td_you[i + 10].value = 2;

                                        ship_2++;
                                        ship_two = true;
                                        gr = false;

                                        console.log(i + 10);
                                        console.log(td_you[i + 10].value);
                                    }
                                };
                            }
                        }
                        for(let b = 29; b < 89; b += 10){
                            if(i === b && ship_two){
                                ship_two = false;
                                td_you[i].style.background = 'brown';
                                td_you[i + 9].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i - 11].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i].value = 2;

                                ship_2++;
                                console.log(i);
                                console.log(td_you[i].value);

                                td_you[i - 1].onclick = function () {
                                    if(td_you[i - 1].style.background === 'rgba(192, 192, 192, 0.8)' || td_you[i - 1].value === 2){
                                        alert('Error');
                                    }
                                    else {
                                        td_you[i - 1].style.background = 'brown';
                                        td_you[i + 10].style.background = 'rgba(192, 192, 192, 0.8)';
                                        td_you[i - 10].style.background = 'rgba(192, 192, 192, 0.8)';
                                        td_you[i - 12].style.background = 'rgba(192, 192, 192, 0.8)';
                                        td_you[i - 2].style.background = 'rgba(192, 192, 192, 0.8)';
                                        td_you[i + 8].style.background = 'rgba(192, 192, 192, 0.8)';
                                        td_you[i - 1].value = 2;

                                        ship_2++;
                                        ship_two = true;
                                        gr = false;

                                        console.log(i - 1);
                                        console.log(td_you[i - 1].value);
                                    }
                                };

                                td_you[i - 10].onclick = function(){
                                    if(td_you[i - 10].style.background === 'rgba(192, 192, 192, 0.8)' || td_you[i - 10].value === 2){
                                        alert('Error');
                                    }
                                    else {
                                        td_you[i - 10].style.background = 'brown';
                                        td_you[i - 1].style.background = 'rgba(192, 192, 192, 0.8)';
                                        td_you[i + 10].style.background = 'rgba(192, 192, 192, 0.8)';
                                        td_you[i - 20].style.background = 'rgba(192, 192, 192, 0.8)';
                                        td_you[i - 21].style.background = 'rgba(192, 192, 192, 0.8)';
                                        td_you[i - 10].value = 2;

                                        ship_2++;
                                        ship_two = true;
                                        gr = false;

                                        console.log(i - 10);
                                        console.log(td_you[i - 10].value);
                                    }
                                };

                                td_you[i + 10].onclick = function(){
                                    if(td_you[i + 10].style.background === 'rgba(192, 192, 192, 0.8)' || td_you[i + 10].value === 2){
                                        alert('Error');
                                    }
                                    else {
                                        td_you[i + 10].style.background = 'brown';
                                        td_you[i - 1].style.background = 'rgba(192, 192, 192, 0.8)';
                                        td_you[i - 10].style.background = 'rgba(192, 192, 192, 0.8)';
                                        td_you[i + 9].style.background = 'rgba(192, 192, 192, 0.8)';
                                        td_you[i + 20].style.background = 'rgba(192, 192, 192, 0.8)';
                                        td_you[i + 19].style.background = 'rgba(192, 192, 192, 0.8)';
                                        td_you[i + 10].value = 2;

                                        ship_2++;
                                        ship_two = true;
                                        gr = false;

                                        console.log(i + 10);
                                        console.log(td_you[i + 10].value);
                                    }
                                };
                            }
                        }
                        for(let c = 92; c < 98; c++){
                            if(i === c && ship_two){
                                ship_two = false;
                                td_you[i].style.background = 'brown';
                                td_you[i - 9].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i - 11].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i].value = 2;

                                ship_2++;
                                console.log(i);
                                console.log(td_you[i].value);

                                td_you[i - 1].onclick = function () {
                                    if(td_you[i - 1].style.background === 'rgba(192, 192, 192, 0.8)' || td_you[i - 1].value === 2){
                                        alert('Error');
                                    }
                                    else {
                                        td_you[i - 1].style.background = 'brown';
                                        td_you[i - 10].style.background = 'rgba(192, 192, 192, 0.8)';
                                        td_you[i + 1].style.background = 'rgba(192, 192, 192, 0.8)';
                                        td_you[i - 12].style.background = 'rgba(192, 192, 192, 0.8)';
                                        td_you[i - 2].style.background = 'rgba(192, 192, 192, 0.8)';
                                        td_you[i - 12].style.background = 'rgba(192, 192, 192, 0.8)';
                                        td_you[i - 1].value = 2;

                                        ship_2++;
                                        ship_two = true;
                                        gr = false;

                                        console.log(i - 1);
                                        console.log(td_you[i - 1].value);
                                    }
                                };

                                td_you[i - 10].onclick = function(){
                                    if(td_you[i - 10].style.background === 'rgba(192, 192, 192, 0.8)' || td_you[i - 10].value === 2){
                                        alert('Error');
                                    }
                                    else {
                                        td_you[i - 10].style.background = 'brown';
                                        td_you[i - 1].style.background = 'rgba(192, 192, 192, 0.8)';
                                        td_you[i + 1].style.background = 'rgba(192, 192, 192, 0.8)';
                                        td_you[i - 20].style.background = 'rgba(192, 192, 192, 0.8)';
                                        td_you[i - 21].style.background = 'rgba(192, 192, 192, 0.8)';
                                        td_you[i - 19].style.background = 'rgba(192, 192, 192, 0.8)';
                                        td_you[i - 10].value = 2;

                                        ship_2++;
                                        ship_two = true;
                                        gr = false;

                                        console.log(i - 10);
                                        console.log(td_you[i - 10].value);
                                    }
                                };

                                td_you[i + 1].onclick = function(){
                                    if(td_you[i + 1].style.background === 'rgba(192, 192, 192, 0.8)' || td_you[i + 1].value === 2){
                                        alert('Error');
                                    }
                                    else {
                                        td_you[i + 1].style.background = 'brown';
                                        td_you[i - 1].style.background = 'rgba(192, 192, 192, 0.8)';
                                        td_you[i - 10].style.background = 'rgba(192, 192, 192, 0.8)';
                                        td_you[i - 8].style.background = 'rgba(192, 192, 192, 0.8)';
                                        td_you[i + 2].style.background = 'rgba(192, 192, 192, 0.8)';
                                        td_you[i + 1].value = 2;

                                        ship_2++;
                                        ship_two = true;
                                        gr = false;

                                        console.log(i + 1);
                                        console.log(td_you[i + 1].value);
                                    }
                                };
                            }
                        }
                        for(let d = 20; d < 80; d += 10){
                            if(i === d && ship_two){
                                ship_two = false;
                                td_you[i].style.background = 'brown';
                                td_you[i - 9].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i + 11].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i].value = 2;

                                ship_2++;
                                console.log(i);
                                console.log(td_you[i].value);

                                td_you[i - 10].onclick = function () {
                                    if(td_you[i - 10].style.background === 'rgba(192, 192, 192, 0.8)' || td_you[i - 10].value === 2){
                                        alert('Error');
                                    }
                                    else {
                                        td_you[i - 10].style.background = 'brown';
                                        td_you[i + 10].style.background = 'rgba(192, 192, 192, 0.8)';
                                        td_you[i + 1].style.background = 'rgba(192, 192, 192, 0.8)';
                                        td_you[i - 20].style.background = 'rgba(192, 192, 192, 0.8)';
                                        td_you[i - 19].style.background = 'rgba(192, 192, 192, 0.8)';
                                        td_you[i - 10].value = 2;

                                        ship_2++;
                                        ship_two = true;
                                        gr = false;

                                        console.log(i - 10);
                                        console.log(td_you[i - 10].value);
                                    }
                                };

                                td_you[i + 10].onclick = function(){
                                    if(td_you[i + 10].style.background === 'rgba(192, 192, 192, 0.8)' || td_you[i + 10].value === 2){
                                        alert('Error');
                                    }
                                    else {
                                        td_you[i + 10].style.background = 'brown';
                                        td_you[i - 10].style.background = 'rgba(192, 192, 192, 0.8)';
                                        td_you[i + 1].style.background = 'rgba(192, 192, 192, 0.8)';
                                        td_you[i + 20].style.background = 'rgba(192, 192, 192, 0.8)';
                                        td_you[i + 21].style.background = 'rgba(192, 192, 192, 0.8)';
                                        td_you[i + 10].value = 2;

                                        ship_2++;
                                        ship_two = true;
                                        gr = false;

                                        console.log(i + 10);
                                        console.log(td_you[i + 10].value);
                                    }
                                };

                                td_you[i + 1].onclick = function(){
                                    if(td_you[i + 1].style.background === 'rgba(192, 192, 192, 0.8)' || td_you[i + 1].value === 2){
                                        alert('Error');
                                    }
                                    else {
                                        td_you[i + 1].style.background = 'brown';
                                        td_you[i - 10].style.background = 'rgba(192, 192, 192, 0.8)';
                                        td_you[i + 10].style.background = 'rgba(192, 192, 192, 0.8)';
                                        td_you[i - 8].style.background = 'rgba(192, 192, 192, 0.8)';
                                        td_you[i + 12].style.background = 'rgba(192, 192, 192, 0.8)';
                                        td_you[i + 2].style.background = 'rgba(192, 192, 192, 0.8)';
                                        td_you[i + 1].value = 2;

                                        ship_2++;
                                        ship_two = true;
                                        gr = false;

                                        console.log(i + 1);
                                        console.log(td_you[i + 1].value);
                                    }
                                };
                            }
                        }
                        for(let a = 12; a < 18; a++){
                            if(i === a && ship_two){
                                ship_two = false;
                                td_you[i].style.background = 'brown';
                                td_you[i - 11].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i - 9].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i + 9].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i + 11].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i].value = 2;

                                ship_2++;
                                console.log(i);
                                console.log(td_you[i].value);

                                td_you[i - 10].onclick = function () {
                                    if(td_you[i - 10].style.background === 'rgba(192, 192, 192, 0.8)' || td_you[i - 10].value === 2){
                                        alert('Error');
                                    }
                                    else {
                                        td_you[i - 10].style.background = 'brown';
                                        td_you[i + 1].style.background = 'rgba(192, 192, 192, 0.8)';
                                        td_you[i - 1].style.background = 'rgba(192, 192, 192, 0.8)';
                                        td_you[i + 10].style.background = 'rgba(192, 192, 192, 0.8)';
                                        td_you[i - 10].value = 2;

                                        ship_2++;
                                        ship_two = true;
                                        gr = false;

                                        console.log(i - 10);
                                        console.log(td_you[i - 10].value);
                                    }
                                };

                                td_you[i - 1].onclick = function () {
                                    if(td_you[i - 1].style.background === 'rgba(192, 192, 192, 0.8)' || td_you[i - 1].value === 2){
                                        alert('Error');
                                    }
                                    else {
                                        td_you[i - 1].style.background = 'brown';
                                        td_you[i + 10].style.background = 'rgba(192, 192, 192, 0.8)';
                                        td_you[i - 10].style.background = 'rgba(192, 192, 192, 0.8)';
                                        td_you[i + 1].style.background = 'rgba(192, 192, 192, 0.8)';
                                        td_you[i - 12].style.background = 'rgba(192, 192, 192, 0.8)';
                                        td_you[i - 2].style.background = 'rgba(192, 192, 192, 0.8)';
                                        td_you[i + 8].style.background = 'rgba(192, 192, 192, 0.8)';
                                        td_you[i - 1].value = 2;

                                        ship_2++;
                                        ship_two = true;
                                        gr = false;

                                        console.log(i - 1);
                                        console.log(td_you[i - 1].value);
                                    }
                                };

                                td_you[i + 1].onclick = function () {
                                    if(td_you[i + 1].style.background === 'rgba(192, 192, 192, 0.8)' || td_you[i + 1].value === 2){
                                        alert('Error');
                                    }
                                    else {
                                        td_you[i + 1].style.background = 'brown';
                                        td_you[i - 1].style.background = 'rgba(192, 192, 192, 0.8)';
                                        td_you[i - 10].style.background = 'rgba(192, 192, 192, 0.8)';
                                        td_you[i + 10].style.background = 'rgba(192, 192, 192, 0.8)';
                                        td_you[i + 2].style.background = 'rgba(192, 192, 192, 0.8)';
                                        td_you[i + 12].style.background = 'rgba(192, 192, 192, 0.8)';
                                        td_you[i - 8].style.background = 'rgba(192, 192, 192, 0.8)';
                                        td_you[i + 1].value = 2;

                                        ship_2++;
                                        ship_two = true;
                                        gr = false;

                                        console.log(i + 1);
                                        console.log(td_you[i + 1].value);
                                    }
                                };

                                td_you[i + 10].onclick = function () {
                                    if(td_you[i + 10].style.background === 'rgba(192, 192, 192, 0.8)' || td_you[i + 10].value === 2){
                                        alert('Error');
                                    }
                                    else {
                                        td_you[i + 10].style.background = 'brown';
                                        td_you[i - 1].style.background = 'rgba(192, 192, 192, 0.8)';
                                        td_you[i - 10].style.background = 'rgba(192, 192, 192, 0.8)';
                                        td_you[i + 1].style.background = 'rgba(192, 192, 192, 0.8)';
                                        td_you[i + 19].style.background = 'rgba(192, 192, 192, 0.8)';
                                        td_you[i + 20].style.background = 'rgba(192, 192, 192, 0.8)';
                                        td_you[i + 21].style.background = 'rgba(192, 192, 192, 0.8)';
                                        td_you[i + 10].value = 2;

                                        ship_2++;
                                        ship_two = true;
                                        gr = false;

                                        console.log(i + 10);
                                        console.log(td_you[i + 10].value);
                                    }
                                };
                            }
                        }
                        for(let b = 28; b < 88; b += 10){
                            if(i === b && ship_two){
                                ship_two = false;
                                td_you[i].style.background = 'brown';
                                td_you[i - 11].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i - 9].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i + 9].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i + 11].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i].value = 2;

                                ship_2++;
                                console.log(i);
                                console.log(td_you[i].value);

                                td_you[i - 10].onclick = function () {
                                    if(td_you[i - 10].style.background === 'rgba(192, 192, 192, 0.8)' || td_you[i - 10].value === 2){
                                        alert('Error');
                                    }
                                    else {
                                        td_you[i - 10].style.background = 'brown';
                                        td_you[i + 1].style.background = 'rgba(192, 192, 192, 0.8)';
                                        td_you[i - 1].style.background = 'rgba(192, 192, 192, 0.8)';
                                        td_you[i + 10].style.background = 'rgba(192, 192, 192, 0.8)';
                                        td_you[i - 20].style.background = 'rgba(192, 192, 192, 0.8)';
                                        td_you[i - 21].style.background = 'rgba(192, 192, 192, 0.8)';
                                        td_you[i - 19].style.background = 'rgba(192, 192, 192, 0.8)';
                                        td_you[i - 10].value = 2;

                                        ship_2++;
                                        ship_two = true;
                                        gr = false;

                                        console.log(i - 10);
                                        console.log(td_you[i - 10].value);
                                    }
                                };

                                td_you[i - 1].onclick = function () {
                                    if(td_you[i - 1].style.background === 'rgba(192, 192, 192, 0.8)' || td_you[i - 1].value === 2){
                                        alert('Error');
                                    }
                                    else {
                                        td_you[i - 1].style.background = 'brown';
                                        td_you[i + 10].style.background = 'rgba(192, 192, 192, 0.8)';
                                        td_you[i - 10].style.background = 'rgba(192, 192, 192, 0.8)';
                                        td_you[i + 1].style.background = 'rgba(192, 192, 192, 0.8)';
                                        td_you[i - 12].style.background = 'rgba(192, 192, 192, 0.8)';
                                        td_you[i - 2].style.background = 'rgba(192, 192, 192, 0.8)';
                                        td_you[i + 8].style.background = 'rgba(192, 192, 192, 0.8)';
                                        td_you[i - 1].value = 2;

                                        ship_2++;
                                        ship_two = true;
                                        gr = false;

                                        console.log(i - 1);
                                        console.log(td_you[i - 1].value);
                                    }
                                };

                                td_you[i + 1].onclick = function () {
                                    if(td_you[i + 1].style.background === 'rgba(192, 192, 192, 0.8)' || td_you[i + 1].value === 2){
                                        alert('Error');
                                    }
                                    else {
                                        td_you[i + 1].style.background = 'brown';
                                        td_you[i - 1].style.background = 'rgba(192, 192, 192, 0.8)';
                                        td_you[i - 10].style.background = 'rgba(192, 192, 192, 0.8)';
                                        td_you[i + 10].style.background = 'rgba(192, 192, 192, 0.8)';
                                        td_you[i + 1].value = 2;

                                        ship_2++;
                                        ship_two = true;
                                        gr = false;

                                        console.log(i + 1);
                                        console.log(td_you[i + 1].value);
                                    }
                                };

                                td_you[i + 10].onclick = function () {
                                    if(td_you[i + 10].style.background === 'rgba(192, 192, 192, 0.8)' || td_you[i + 10].value === 2){
                                        alert('Error');
                                    }
                                    else {
                                        td_you[i + 10].style.background = 'brown';
                                        td_you[i - 1].style.background = 'rgba(192, 192, 192, 0.8)';
                                        td_you[i - 10].style.background = 'rgba(192, 192, 192, 0.8)';
                                        td_you[i + 1].style.background = 'rgba(192, 192, 192, 0.8)';
                                        td_you[i + 19].style.background = 'rgba(192, 192, 192, 0.8)';
                                        td_you[i + 20].style.background = 'rgba(192, 192, 192, 0.8)';
                                        td_you[i + 21].style.background = 'rgba(192, 192, 192, 0.8)';
                                        td_you[i + 10].value = 2;

                                        ship_2++;
                                        ship_two = true;
                                        gr = false;

                                        console.log(i + 10);
                                        console.log(td_you[i + 10].value);
                                    }
                                };
                            }
                        }
                        for(let c = 82; c < 88; c++){
                            if(i === c && ship_two){
                                ship_two = false;
                                td_you[i].style.background = 'brown';
                                td_you[i - 11].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i - 9].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i + 9].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i + 11].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i].value = 2;

                                ship_2++;
                                console.log(i);
                                console.log(td_you[i].value);

                                td_you[i - 10].onclick = function () {
                                    if(td_you[i - 10].style.background === 'rgba(192, 192, 192, 0.8)' || td_you[i - 10].value === 2){
                                        alert('Error');
                                    }
                                    else {
                                        td_you[i - 10].style.background = 'brown';
                                        td_you[i + 1].style.background = 'rgba(192, 192, 192, 0.8)';
                                        td_you[i - 1].style.background = 'rgba(192, 192, 192, 0.8)';
                                        td_you[i + 10].style.background = 'rgba(192, 192, 192, 0.8)';
                                        td_you[i - 20].style.background = 'rgba(192, 192, 192, 0.8)';
                                        td_you[i - 21].style.background = 'rgba(192, 192, 192, 0.8)';
                                        td_you[i - 19].style.background = 'rgba(192, 192, 192, 0.8)';
                                        td_you[i - 10].value = 2;

                                        ship_2++;
                                        ship_two = true;
                                        gr = false;

                                        console.log(i - 10);
                                        console.log(td_you[i - 10].value);
                                    }
                                };

                                td_you[i - 1].onclick = function () {
                                    if(td_you[i - 1].style.background === 'rgba(192, 192, 192, 0.8)' || td_you[i - 1].value === 2){
                                        alert('Error');
                                    }
                                    else {
                                        td_you[i - 1].style.background = 'brown';
                                        td_you[i + 10].style.background = 'rgba(192, 192, 192, 0.8)';
                                        td_you[i - 10].style.background = 'rgba(192, 192, 192, 0.8)';
                                        td_you[i + 1].style.background = 'rgba(192, 192, 192, 0.8)';
                                        td_you[i - 12].style.background = 'rgba(192, 192, 192, 0.8)';
                                        td_you[i - 2].style.background = 'rgba(192, 192, 192, 0.8)';
                                        td_you[i + 8].style.background = 'rgba(192, 192, 192, 0.8)';
                                        td_you[i - 1].value = 2;

                                        ship_2++;
                                        ship_two = true;
                                        gr = false;

                                        console.log(i - 1);
                                        console.log(td_you[i - 1].value);
                                    }
                                };

                                td_you[i + 1].onclick = function () {
                                    if(td_you[i + 1].style.background === 'rgba(192, 192, 192, 0.8)' || td_you[i + 1].value === 2){
                                        alert('Error');
                                    }
                                    else {
                                        td_you[i + 1].style.background = 'brown';
                                        td_you[i - 1].style.background = 'rgba(192, 192, 192, 0.8)';
                                        td_you[i - 10].style.background = 'rgba(192, 192, 192, 0.8)';
                                        td_you[i + 10].style.background = 'rgba(192, 192, 192, 0.8)';
                                        td_you[i + 2].style.background = 'rgba(192, 192, 192, 0.8)';
                                        td_you[i + 12].style.background = 'rgba(192, 192, 192, 0.8)';
                                        td_you[i - 8].style.background = 'rgba(192, 192, 192, 0.8)';
                                        td_you[i + 1].value = 2;

                                        ship_2++;
                                        ship_two = true;
                                        gr = false;

                                        console.log(i + 1);
                                        console.log(td_you[i + 1].value);
                                    }
                                };

                                td_you[i + 10].onclick = function () {
                                    if(td_you[i + 10].style.background === 'rgba(192, 192, 192, 0.8)' || td_you[i + 10].value === 2){
                                        alert('Error');
                                    }
                                    else {
                                        td_you[i + 10].style.background = 'brown';
                                        td_you[i - 1].style.background = 'rgba(192, 192, 192, 0.8)';
                                        td_you[i - 10].style.background = 'rgba(192, 192, 192, 0.8)';
                                        td_you[i + 1].style.background = 'rgba(192, 192, 192, 0.8)';
                                        td_you[i + 10].value = 2;

                                        ship_2++;
                                        ship_two = true;
                                        gr = false;

                                        console.log(i + 10);
                                        console.log(td_you[i + 10].value);
                                    }
                                };
                            }
                        }
                        for(let d = 21; d < 81; d += 10){
                            if(i === d && ship_two){
                                ship_two = false;
                                td_you[i].style.background = 'brown';
                                td_you[i - 11].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i - 9].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i + 9].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i + 11].style.background = 'rgba(192, 192, 192, 0.8)';
                                td_you[i].value = 2;

                                ship_2++;
                                console.log(i);
                                console.log(td_you[i].value);

                                td_you[i - 10].onclick = function () {
                                    if(td_you[i - 10].style.background === 'rgba(192, 192, 192, 0.8)' || td_you[i - 10].value === 2){
                                        alert('Error');
                                    }
                                    else {
                                        td_you[i - 10].style.background = 'brown';
                                        td_you[i + 1].style.background = 'rgba(192, 192, 192, 0.8)';
                                        td_you[i - 1].style.background = 'rgba(192, 192, 192, 0.8)';
                                        td_you[i + 10].style.background = 'rgba(192, 192, 192, 0.8)';
                                        td_you[i - 20].style.background = 'rgba(192, 192, 192, 0.8)';
                                        td_you[i - 21].style.background = 'rgba(192, 192, 192, 0.8)';
                                        td_you[i - 19].style.background = 'rgba(192, 192, 192, 0.8)';
                                        td_you[i - 10].value = 2;

                                        ship_2++;
                                        ship_two = true;
                                        gr = false;

                                        console.log(i - 10);
                                        console.log(td_you[i - 10].value);
                                    }
                                };

                                td_you[i - 1].onclick = function () {
                                    if(td_you[i - 1].style.background === 'rgba(192, 192, 192, 0.8)' || td_you[i - 1].value === 2){
                                        alert('Error');
                                    }
                                    else {
                                        td_you[i - 1].style.background = 'brown';
                                        td_you[i + 10].style.background = 'rgba(192, 192, 192, 0.8)';
                                        td_you[i - 10].style.background = 'rgba(192, 192, 192, 0.8)';
                                        td_you[i + 1].style.background = 'rgba(192, 192, 192, 0.8)';
                                        td_you[i - 1].value = 2;

                                        ship_2++;
                                        ship_two = true;
                                        gr = false;

                                        console.log(i - 1);
                                        console.log(td_you[i - 1].value);
                                    }
                                };

                                td_you[i + 1].onclick = function () {
                                    if(td_you[i + 1].style.background === 'rgba(192, 192, 192, 0.8)' || td_you[i + 1].value === 2){
                                        alert('Error');
                                    }
                                    else {
                                        td_you[i + 1].style.background = 'brown';
                                        td_you[i - 1].style.background = 'rgba(192, 192, 192, 0.8)';
                                        td_you[i - 10].style.background = 'rgba(192, 192, 192, 0.8)';
                                        td_you[i + 10].style.background = 'rgba(192, 192, 192, 0.8)';
                                        td_you[i + 2].style.background = 'rgba(192, 192, 192, 0.8)';
                                        td_you[i + 12].style.background = 'rgba(192, 192, 192, 0.8)';
                                        td_you[i - 8].style.background = 'rgba(192, 192, 192, 0.8)';
                                        td_you[i + 1].value = 2;

                                        ship_2++;
                                        ship_two = true;
                                        gr = false;

                                        console.log(i + 1);
                                        console.log(td_you[i + 1].value);
                                    }
                                };

                                td_you[i + 10].onclick = function () {
                                    if(td_you[i + 10].style.background === 'rgba(192, 192, 192, 0.8)' || td_you[i + 10].value === 2){
                                        alert('Error');
                                    }
                                    else {
                                        td_you[i + 10].style.background = 'brown';
                                        td_you[i - 1].style.background = 'rgba(192, 192, 192, 0.8)';
                                        td_you[i - 10].style.background = 'rgba(192, 192, 192, 0.8)';
                                        td_you[i + 1].style.background = 'rgba(192, 192, 192, 0.8)';
                                        td_you[i + 20].style.background = 'rgba(192, 192, 192, 0.8)';
                                        td_you[i + 19].style.background = 'rgba(192, 192, 192, 0.8)';
                                        td_you[i + 21].style.background = 'rgba(192, 192, 192, 0.8)';
                                        td_you[i + 10].value = 2;

                                        ship_2++;
                                        ship_two = true;
                                        gr = false;

                                        console.log(i + 10);
                                        console.log(td_you[i + 10].value);
                                    }
                                };
                            }
                        }
                        if(gr && ship_two){
                            ship_two = false;
                            td_you[i].style.background = 'brown';
                            td_you[i - 11].style.background = 'rgba(192, 192, 192, 0.8)';
                            td_you[i - 9].style.background = 'rgba(192, 192, 192, 0.8)';
                            td_you[i + 9].style.background = 'rgba(192, 192, 192, 0.8)';
                            td_you[i + 11].style.background = 'rgba(192, 192, 192, 0.8)';
                            td_you[i].value = 2;

                            ship_2++;
                            console.log(i);
                            console.log(td_you[i].value);

                            td_you[i - 10].onclick = function () {
                                if(td_you[i - 10].style.background === 'rgba(192, 192, 192, 0.8)' || td_you[i - 10].value === 2){
                                    alert('Error');
                                }
                                else {
                                    td_you[i - 10].style.background = 'brown';
                                    td_you[i + 1].style.background = 'rgba(192, 192, 192, 0.8)';
                                    td_you[i - 1].style.background = 'rgba(192, 192, 192, 0.8)';
                                    td_you[i + 10].style.background = 'rgba(192, 192, 192, 0.8)';
                                    td_you[i - 20].style.background = 'rgba(192, 192, 192, 0.8)';
                                    td_you[i - 21].style.background = 'rgba(192, 192, 192, 0.8)';
                                    td_you[i - 19].style.background = 'rgba(192, 192, 192, 0.8)';
                                    td_you[i - 10].value = 2;

                                    ship_2++;
                                    ship_two = true;
                                    gr = false;

                                    console.log(i - 10);
                                    console.log(td_you[i - 10].value);
                                }
                            };

                            td_you[i - 1].onclick = function () {
                                if(td_you[i - 1].style.background === 'rgba(192, 192, 192, 0.8)' || td_you[i - 1].value === 2){
                                    alert('Error');
                                }
                                else {
                                    td_you[i - 1].style.background = 'brown';
                                    td_you[i + 10].style.background = 'rgba(192, 192, 192, 0.8)';
                                    td_you[i - 10].style.background = 'rgba(192, 192, 192, 0.8)';
                                    td_you[i + 1].style.background = 'rgba(192, 192, 192, 0.8)';
                                    td_you[i - 2].style.background = 'rgba(192, 192, 192, 0.8)';
                                    td_you[i - 12].style.background = 'rgba(192, 192, 192, 0.8)';
                                    td_you[i + 8].style.background = 'rgba(192, 192, 192, 0.8)';
                                    td_you[i - 1].value = 2;

                                    ship_2++;
                                    ship_two = true;
                                    gr = false;

                                    console.log(i - 1);
                                    console.log(td_you[i - 1].value);
                                }
                            };

                            td_you[i + 1].onclick = function () {
                                if(td_you[i + 1].style.background === 'rgba(192, 192, 192, 0.8)' || td_you[i + 1].value === 2){
                                    alert('Error');
                                }
                                else {
                                    td_you[i + 1].style.background = 'brown';
                                    td_you[i - 1].style.background = 'rgba(192, 192, 192, 0.8)';
                                    td_you[i - 10].style.background = 'rgba(192, 192, 192, 0.8)';
                                    td_you[i + 10].style.background = 'rgba(192, 192, 192, 0.8)';
                                    td_you[i + 2].style.background = 'rgba(192, 192, 192, 0.8)';
                                    td_you[i + 12].style.background = 'rgba(192, 192, 192, 0.8)';
                                    td_you[i - 8].style.background = 'rgba(192, 192, 192, 0.8)';
                                    td_you[i + 1].value = 2;

                                    ship_2++;
                                    ship_two = true;
                                    gr = false;

                                    console.log(i + 1);
                                    console.log(td_you[i + 1].value);
                                }
                            };

                            td_you[i + 10].onclick = function () {
                                if(td_you[i + 10].style.background === 'rgba(192, 192, 192, 0.8)' || td_you[i + 10].value === 2){
                                    alert('Error');
                                }
                                else {
                                    td_you[i + 10].style.background = 'brown';
                                    td_you[i - 1].style.background = 'rgba(192, 192, 192, 0.8)';
                                    td_you[i - 10].style.background = 'rgba(192, 192, 192, 0.8)';
                                    td_you[i + 1].style.background = 'rgba(192, 192, 192, 0.8)';
                                    td_you[i + 20].style.background = 'rgba(192, 192, 192, 0.8)';
                                    td_you[i + 19].style.background = 'rgba(192, 192, 192, 0.8)';
                                    td_you[i + 21].style.background = 'rgba(192, 192, 192, 0.8)';
                                    td_you[i + 10].value = 2;

                                    ship_2++;
                                    ship_two = true;
                                    gr = false;

                                    console.log(i + 10);
                                    console.log(td_you[i + 10].value);
                                }
                            };
                        }
                    }
                }
            }
            else{
                alert('ship = 3');
            }
        } else if(ship_p === 3){
            if(ship_3 < 6){
                if(td_you[i].style.background === 'rgba(192, 192, 192, 0.8)' || td_you[i].value === 3){
                    alert('Error');
                    console.log(td_you[i].style.background);
                }
                else{
                    if(ship_three){
                        ship_three = false;

                        color_ship(i);
                        if( i - 11 >= 0 && ((i-11)-9)%10!==0){
                            td_you[i-11].style.background = 'rgba(192, 192, 192, 0.8)';
                        }
                        if( i - 9 >= 0 && (i-9)%10 !== 0){
                            td_you[i-9].style.background = 'rgba(192, 192, 192, 0.8)';
                        }
                        if( i + 9 < 100 && i % 10 !== 0){
                            td_you[i+9].style.background = 'rgba(192, 192, 192, 0.8)';
                        }
                        if( i + 11 < 100 && (i + 11) % 10 !== 0){
                            td_you[i+11].style.background = 'rgba(192, 192, 192, 0.8)';
                        }

                        td_you[i].value = 3;
                        ship_3++;

                        console.log(i);
                        console.log(td_you[i].value);


                        if(i - 10 >= 0 ){
                            let td_you_i_a = document.querySelectorAll('#table_one > tbody > tr > td:not(:nth-child(1))');
                            td_you_i_a[i-10].onclick = function(){
                                if(td_you_i_a[i - 10].style.background === 'rgba(192, 192, 192, 0.8)' || td_you_i_a[i - 10].value === 3){
                                    alert('Error');
                                }
                                else{

                                    color_ship(i-10);

                                    if(i + 1 < 100 && (i + 1) % 10 !== 0){
                                        td_you[i+1].style.background = 'rgba(192, 192, 192, 0.8)';
                                    }
                                    if(i - 1 >= 0 && ((i-1)-9) % 10 !== 0){
                                        td_you[i-1].style.background = 'rgba(192, 192, 192, 0.8)';
                                    }
                                    if(i - 21 >= 0 && i % 10 !== 0){
                                        td_you[i-21].style.background = 'rgba(192, 192, 192, 0.8)';
                                    }
                                    if(i - 19 >= 0 && (i - 19) % 10 !== 0){
                                        td_you[i-19].style.background = 'rgba(192, 192, 192, 0.8)';
                                    }

                                    td_you[i-10].value = 3;
                                    ship_3++;

                                    console.log(i-10);
                                    console.log(td_you[i-10].value);

                                    if(i - 20 >= 0  ){
                                        td_you_i_a[i-20].onclick = function(){
                                            if(td_you_i_a[i - 20].style.background === 'rgba(192, 192, 192, 0.8)' || td_you_i_a[i - 20].value === 3){
                                                alert('Error');
                                            }
                                            else{
                                                color_ship(i-20);

                                                if(i - 30 >= 0){
                                                    td_you[i - 30].style.background = 'rgba(192, 192, 192, 0.8)';
                                                }
                                                if(i - 31 >= 0 && i % 10 !== 0 ){
                                                    td_you[i - 31].style.background = 'rgba(192, 192, 192, 0.8)';
                                                }
                                                if(i - 29 >= 0 && (i - 29) % 10 !== 0){
                                                    td_you[i - 29].style.background = 'rgba(192, 192, 192, 0.8)';
                                                }
                                                if(i + 10 < 100){
                                                    td_you[i + 10].style.background = 'rgba(192, 192, 192, 0.8)';
                                                }

                                                td_you[i-20].value = 3;
                                                ship_3++;

                                                console.log(i-20);
                                                console.log(td_you[i-20].value);

                                                ship_three = true;
                                            }

                                        };
                                    }

                                    if(i + 10 < 100 ){
                                        td_you_i_a[i+10].onclick = function (){
                                            if(td_you_i_a[i + 10].style.background === 'rgba(192, 192, 192, 0.8)' || td_you_i_a[i+10].value === 3){
                                                alert('Error');
                                            }
                                            else{
                                                color_ship(i+10);

                                                if(i - 20 >= 0){
                                                    td_you[i - 20].style.background = 'rgba(192, 192, 192, 0.8)';
                                                }
                                                if( i + 19 < 100 && i % 10 !== 0){
                                                    td_you[i+19].style.background = 'rgba(192, 192, 192, 0.8)';
                                                }
                                                if( i + 21 < 100 && (i + 21) % 10 !== 0){
                                                    td_you[i+21].style.background = 'rgba(192, 192, 192, 0.8)';
                                                }
                                                if(i + 20 < 100){
                                                    td_you[i + 20].style.background = 'rgba(192, 192, 192, 0.8)';
                                                }

                                                td_you[i+10].value = 3;
                                                ship_3++;

                                                console.log(i+10);
                                                console.log(td_you[i+10].value);

                                                ship_three = true;
                                            }
                                        };
                                    }
                                }
                            };
                        }
                        if(i + 10 < 100 ){
                            let td_you_i_b = document.querySelectorAll('#table_one > tbody > tr > td:not(:nth-child(1))');
                            td_you_i_b[i+10].onclick = function(){
                                if(td_you_i_b[i + 10].style.background === 'rgba(192, 192, 192, 0.8)' || td_you_i_b[i+10].value === 3 ){
                                    alert('Error');
                                }
                                else{
                                    color_ship(i+10);

                                    if(i + 1 < 100 && (i + 1) % 10 !== 0){
                                        td_you_i_b[i+1].style.background = 'rgba(192, 192, 192, 0.8)';
                                    }
                                    if(i - 1 >= 0 && ((i-1)-9) % 10 !== 0){
                                        td_you_i_b[i-1].style.background = 'rgba(192, 192, 192, 0.8)';
                                    }
                                    if( i + 19 < 100 && i % 10 !== 0){
                                        td_you_i_b[i+19].style.background = 'rgba(192, 192, 192, 0.8)';
                                    }
                                    if( i + 21 < 100 && (i + 21) % 10 !== 0){
                                        td_you_i_b[i+21].style.background = 'rgba(192, 192, 192, 0.8)';
                                    }

                                    td_you[i+10].value = 3;
                                    ship_3++;

                                    console.log(i+10);
                                    console.log(td_you[i+10].value);

                                    if(i - 10 >= 0 ){
                                        td_you_i_b[i - 10].onclick = function(){
                                            if(td_you_i_b[i - 10].style.background === 'rgba(192, 192, 192, 0.8)' || td_you_i_b[i-10].value === 3){
                                                alert('Error');
                                            }
                                            else{
                                                color_ship(i-10);

                                                if(i - 20 >= 0){
                                                    td_you_i_b[i - 20].style.background = 'rgba(192, 192, 192, 0.8)';
                                                }
                                                if(i - 21 >= 0 && i % 10 !== 0 ){
                                                    td_you_i_b[i - 21].style.background = 'rgba(192, 192, 192, 0.8)';
                                                }
                                                if(i - 19 >= 0 && (i - 29) % 10 !== 0){
                                                    td_you_i_b[i - 19].style.background = 'rgba(192, 192, 192, 0.8)';
                                                }
                                                if(i + 20 < 100){
                                                    td_you_i_b[i+20].style.background = 'rgba(192, 192, 192, 0.8)';
                                                }

                                                td_you[i-10].value = 3;
                                                ship_3++;

                                                console.log(i-10);
                                                console.log(td_you[i-10].value);

                                                ship_three = true;
                                            }
                                        };
                                    }

                                    if(i + 20 < 100 ){
                                        td_you_i_b[i + 20].onclick = function(){
                                            if(td_you_i_b[i + 20].style.background === 'rgba(192, 192, 192, 0.8)' || td_you_i_b[i+20].value === 3){
                                                alert('Error');
                                            }
                                            else{
                                                color_ship(i+20);

                                                if(i - 10 >= 0){
                                                    td_you_i_b[i-10].style.background = 'rgba(192, 192, 192, 0.8)';
                                                }
                                                if(i + 30 < 100){
                                                    td_you_i_b[i+30].style.background = 'rgba(192, 192, 192, 0.8)';
                                                }
                                                if(i + 29 < 100 && i % 10 !== 0){
                                                    td_you_i_b[i+29].style.background = 'rgba(192, 192, 192, 0.8)';
                                                }
                                                if(i + 31 < 100 && (i + 31) % 10 !== 0){
                                                    td_you_i_b[i+31].style.background = 'rgba(192, 192, 192, 0.8)';
                                                }

                                                td_you[i+20].value = 3;
                                                ship_3++;

                                                console.log(i+20);
                                                console.log(td_you[i+20].value);

                                                ship_three = true;
                                            }
                                        };
                                    }
                                }

                            };
                        }

                        if(i - 1 >= 0){
                            let td_you_i_c = document.querySelectorAll('#table_one > tbody > tr > td:not(:nth-child(1))');
                            td_you_i_c[i-1].onclick = function(){
                                if(td_you_i_c[i - 1].style.background === 'rgba(192, 192, 192, 0.8)' || td_you_i_c[i-1].value === 3 ){
                                    alert('Error');
                                }
                                else{
                                    color_ship(i-1);

                                    if(i - 10 >= 0){
                                        td_you_i_c[i-10].style.background = 'rgba(192, 192, 192, 0.8)';
                                    }
                                    if(i + 10 < 100){
                                        td_you_i_c[i+10].style.background = 'rgba(192, 192, 192, 0.8)';
                                    }
                                    if(i - 12 >= 0 && (i - 1) % 10 !== 0){
                                        td_you_i_c[i-12].style.background = 'rgba(192, 192, 192, 0.8)';
                                    }
                                    if(i + 8 < 100 && (i - 1) % 10 !== 0){
                                        td_you_i_c[i+8].style.background = 'rgba(192, 192, 192, 0.8)';
                                    }

                                    td_you[i-1].value = 3;
                                    ship_3++;

                                    console.log(i-1);
                                    console.log(td_you[i-1].value);

                                    if(i - 2 >= 0){
                                        td_you_i_c[i-2].onclick = function(){
                                            if(td_you_i_c[i-2].style.background === 'rgba(192, 192, 192, 0.8)' || td_you_i_c[i-2].value === 3){
                                                alert('Error');
                                            }
                                            else{

                                                color_ship(i-2);

                                                if(i + 1 < 100 && (i - 9) % 10 !== 0){
                                                    td_you_i_c[i+1].style.background = 'rgba(192, 192, 192, 0.8)';
                                                }
                                                if(i - 3 >=0 && (i-3 - 9) % 10 !== 0){
                                                    td_you_i_c[i-3].style.background = 'rgba(192, 192, 192, 0.8)';
                                                }
                                                if(i - 13 >= 0 && (i-13-9) % 10 !== 0){
                                                    td_you_i_c[i-13].style.background = 'rgba(192, 192, 192, 0.8)';
                                                }
                                                if(i + 7 < 100 && (i + 7 - 9) % 10 !== 0){
                                                    td_you_i_c[i+7].style.background = 'rgba(192, 192, 192, 0.8)';
                                                }

                                                td_you[i-2].value = 3;
                                                ship_3++;

                                                console.log(i-2);
                                                console.log(td_you[i-2].value);

                                                ship_three = true;
                                            }
                                        };
                                    }

                                    if(i + 1 < 100){
                                        td_you_i_c[i+1].onclick = function(){
                                            if(td_you_i_c[i+1].style.background === 'rgba(192, 192, 192, 0.8)' || td_you_i_c[i+1].value === 3){
                                                alert('Error');
                                            }
                                            else{
                                                color_ship(i+1);

                                                if(i - 2 >= 0 && (i-2-9) % 10 !== 0){
                                                    td_you_i_c[i-2].style.background = 'rgba(192, 192, 192, 0.8)';
                                                }
                                                if(i - 8 >= 0 && (i - 8) % 10 !== 0){
                                                    td_you_i_c[i-8].style.background = 'rgba(192, 192, 192, 0.8)';
                                                }
                                                if(i + 12 < 100 && (i + 12) % 10 !== 0){
                                                    td_you_i_c[i+12].style.background = 'rgba(192, 192, 192, 0.8)';
                                                }
                                                if(i + 2 < 100 && (i + 2) % 10 !== 0){
                                                    td_you_i_c[i+2].style.background = 'rgba(192, 192, 192, 0.8)';
                                                }

                                                td_you[i+1].value = 3;
                                                ship_3++;

                                                console.log(i+1);
                                                console.log(td_you[i+1].value);

                                                ship_three = true;
                                            }
                                        };
                                    }
                                }
                            };
                        }

                        if(i + 1 < 100){
                            let td_you_i_d = document.querySelectorAll('#table_one > tbody > tr > td:not(:nth-child(1))');
                            td_you_i_d[i+1].onclick = function(){
                                if(td_you_i_d[i + 1].style.background === 'rgba(192, 192, 192, 0.8)' || td_you_i_d[i+1].value === 3 ){
                                    alert('Error');
                                }
                                else{
                                    color_ship(i+1);

                                    if(i - 10 >= 0){
                                        td_you_i_d[i-10].style.background = 'rgba(192, 192, 192, 0.8)';
                                    }
                                    if(i + 10 < 100){
                                        td_you_i_d[i+10].style.background = 'rgba(192, 192, 192, 0.8)';
                                    }
                                    if(i - 8 >= 0 && (i - 8) % 10 !== 0){
                                        td_you_i_d[i-8].style.background = 'rgba(192, 192, 192, 0.8)';
                                    }
                                    if(i + 12 < 100 && (i + 12) % 10 !== 0){
                                        td_you_i_d[i+12].style.background = 'rgba(192, 192, 192, 0.8)';
                                    }

                                    td_you[i+1].value = 3;
                                    ship_3++;

                                    console.log(i+1);
                                    console.log(td_you[i+1].value);

                                    if(i - 1 >= 0){
                                        td_you_i_d[i-1].onclick = function(){
                                            if(td_you_i_d[i-1].style.background === 'rgba(192, 192, 192, 0.8)' || td_you_i_d[i-1].value === 3){
                                                alert('Error');
                                            }
                                            else{
                                                color_ship(i-1);

                                                if(i - 2 >= 0 && (i - 2 - 9) % 10 !== 0){
                                                    td_you_i_d[i-2].style.background = 'rgba(192, 192, 192, 0.8)';
                                                }
                                                if(i + 2 < 100 && (i + 2) % 10 !== 0){
                                                    td_you_i_d[i+2].style.background = 'rgba(192, 192, 192, 0.8)';
                                                }
                                                if(i - 12 >= 0 && (i - 1) % 10 !== 0){
                                                    td_you_i_d[i-12].style.background = 'rgba(192, 192, 192, 0.8)';
                                                }
                                                if(i + 8 < 100 && (i - 1) % 10 !== 0){
                                                    td_you_i_d[i+8].style.background = 'rgba(192, 192, 192, 0.8)';
                                                }

                                                td_you[i-1].value = 3;
                                                ship_3++;

                                                console.log(i-1);
                                                console.log(td_you[i-1].value);

                                                ship_three = true;
                                            }
                                        };
                                    }

                                    if(i + 2 < 100){
                                        td_you_i_d[i+2].onclick = function(){
                                            if(td_you_i_d[i+2].style.background === 'rgba(192, 192, 192, 0.8)' || td_you_i_d[i+2].value === 3){
                                                alert('Error');
                                            }
                                            else{
                                                color_ship(i+2);

                                                if(i - 1 >= 0 && (i - 1 - 9) % 10 !== 0){
                                                    td_you_i_d[i-1].style.background = 'rgba(192, 192, 192, 0.8)';
                                                }
                                                if(i + 3 < 100 && (i + 3) % 10 !== 0){
                                                    td_you_i_d[i+3].style.background = 'rgba(192, 192, 192, 0.8)';
                                                }
                                                if(i - 7 >= 0 && (i - 7) % 10 !== 0){
                                                    td_you_i_d[i-7].style.background = 'rgba(192, 192, 192, 0.8)';
                                                }
                                                if(i + 13 < 100 && (i + 13) % 10 !== 0){
                                                    td_you_i_d[i+13].style.background = 'rgba(192, 192, 192, 0.8)';
                                                }

                                                td_you[i+2].value = 3;
                                                ship_3++;

                                                console.log(i+2);
                                                console.log(td_you[i+2].value);

                                                ship_three = true;
                                            }
                                        };
                                    }
                                }
                            };
                        }
                    }
                }
            }
            else{
                alert('ship_3 = 2');
            }
        } else if(ship_p === 4){
            if(ship_4 < 4){
                if(td_you[i].style.background === 'rgba(192, 192, 192, 0.8)' || td_you[i].value === 4){
                    alert('Error');
                    console.log(td_you[i].style.background);
                }
                else{
                    if(ship_four){
                        ship_four = false;

                        color_ship(i);

                        if( i - 11 >= 0 && ((i-11)-9)%10!==0){
                            td_you[i-11].style.background = 'rgba(192, 192, 192, 0.8)';
                        }
                        if( i - 9 >= 0 && (i-9)%10 !== 0){
                            td_you[i-9].style.background = 'rgba(192, 192, 192, 0.8)';
                        }
                        if( i + 9 < 100 && i % 10 !== 0){
                            td_you[i+9].style.background = 'rgba(192, 192, 192, 0.8)';
                        }
                        if( i + 11 < 100 && (i + 11) % 10 !== 0){
                            td_you[i+11].style.background = 'rgba(192, 192, 192, 0.8)';
                        }

                        td_you[i].value = 4;
                        ship_4++;

                        console.log(i);
                        console.log(td_you[i].value);

                        if(i - 10 >= 0){
                            let td_you_n_a = document.querySelectorAll('#table_one > tbody > tr > td:not(:nth-child(1))');
                            td_you_n_a[i-10].onclick = function(){
                                if(td_you_n_a[i - 10].style.background === 'rgba(192, 192, 192, 0.8)' || td_you_n_a[i - 10].value === 4){
                                    alert('Error');
                                }
                                else{
                                    color_ship(i-10);

                                    if(i + 1 < 100 && (i + 1) % 10 !== 0){
                                        td_you_n_a[i+1].style.background = 'rgba(192, 192, 192, 0.8)';
                                    }
                                    if(i - 1 >= 0 && ((i-1)-9) % 10 !== 0){
                                        td_you_n_a[i-1].style.background = 'rgba(192, 192, 192, 0.8)';
                                    }
                                    if(i - 21 >= 0 && i % 10 !== 0){
                                        td_you_n_a[i-21].style.background = 'rgba(192, 192, 192, 0.8)';
                                    }
                                    if(i - 19 >= 0 && (i - 19) % 10 !== 0){
                                        td_you_n_a[i-19].style.background = 'rgba(192, 192, 192, 0.8)';
                                    }

                                    td_you[i-10].value = 4;
                                    ship_4++;

                                    console.log(i-10);
                                    console.log(td_you[i-10].value);

                                    if(i - 20 >= 0){
                                        let td_you_k_a = document.querySelectorAll('#table_one > tbody > tr > td:not(:nth-child(1))');
                                        td_you_k_a[i-20].onclick = function(){
                                            if(td_you_k_a[i - 20].style.background === 'rgba(192, 192, 192, 0.8)' || td_you_k_a[i - 20].value === 4){
                                                alert('Error');
                                            }
                                            else{
                                                color_ship(i-20);

                                                if(i - 31 >= 0 && i % 10 !== 0 ){
                                                    td_you_k_a[i - 31].style.background = 'rgba(192, 192, 192, 0.8)';
                                                }
                                                if(i - 29 >= 0 && (i - 29) % 10 !== 0){
                                                    td_you_k_a[i - 29].style.background = 'rgba(192, 192, 192, 0.8)';
                                                }

                                                td_you[i-20].value = 4;
                                                ship_4++;

                                                console.log(i-20);
                                                console.log(td_you[i-20].value);

                                                if(i - 30 >= 0){
                                                    td_you_k_a[i-30].onclick = function(){
                                                        if(td_you_k_a[i - 30].style.background === 'rgba(192, 192, 192, 0.8)' || td_you_k_a[i - 30].value === 4){
                                                            alert('Error');
                                                        }
                                                        else{
                                                            color_ship(i-30);

                                                            if(i - 41 >= 0 && i % 10 !== 0 ){
                                                                td_you_k_a[i - 41].style.background = 'rgba(192, 192, 192, 0.8)';
                                                            }
                                                            if(i - 39 >= 0 && (i - 39) % 10 !== 0){
                                                                td_you_k_a[i - 39].style.background = 'rgba(192, 192, 192, 0.8)';
                                                            }
                                                            if(i - 40 >= 0){
                                                                td_you_k_a[i - 40].style.background = 'rgba(192, 192, 192, 0.8)';
                                                            }
                                                            if(i + 10 < 100){
                                                                td_you_k_a[i + 10].style.background = 'rgba(192, 192, 192, 0.8)';
                                                            }

                                                            td_you[i-30].value = 4;
                                                            ship_4++;

                                                            console.log(i-30);
                                                            console.log(td_you[i-30].value);

                                                            ship_four = true;
                                                        }
                                                    };
                                                }

                                                if(i + 10 < 100){
                                                    td_you_k_a[i+10].onclick = function(){
                                                        if(td_you_k_a[i + 10].style.background === 'rgba(192, 192, 192, 0.8)' || td_you_k_a[i + 10].value === 4){
                                                            alert('Error');
                                                        }
                                                        else{
                                                            color_ship(i+10);

                                                            if(i-30 >= 0){
                                                                td_you_k_a[i-30].style.background = 'rgba(192, 192, 192, 0.8)';
                                                            }
                                                            if(i+20 < 100){
                                                                td_you_k_a[i+20].style.background = 'rgba(192, 192, 192, 0.8)';
                                                            }
                                                            if( i + 19 < 100 && i % 10 !== 0){
                                                                td_you[i+19].style.background = 'rgba(192, 192, 192, 0.8)';
                                                            }
                                                            if( i + 21 < 100 && (i + 21) % 10 !== 0){
                                                                td_you[i+21].style.background = 'rgba(192, 192, 192, 0.8)';
                                                            }

                                                            td_you[i+10].value = 4;
                                                            ship_4++;

                                                            console.log(i+10);
                                                            console.log(td_you[i+10].value);

                                                            ship_four = true;
                                                        }
                                                    };
                                                }
                                            }
                                        };
                                    }

                                    if(i + 10 < 100){
                                        let td_you_k_b = document.querySelectorAll('#table_one > tbody > tr > td:not(:nth-child(1))');
                                        td_you_k_b[i+10].onclick = function(){
                                            if(td_you_k_b[i + 10].style.background === 'rgba(192, 192, 192, 0.8)' || td_you_k_b[i + 10].value === 4){
                                                alert('Error');
                                            }
                                            else{
                                                color_ship(i+10);

                                                if( i + 19 < 100 && i % 10 !== 0){
                                                    td_you_k_b[i+19].style.background = 'rgba(192, 192, 192, 0.8)';
                                                }
                                                if( i + 21 < 100 && (i + 21) % 10 !== 0){
                                                    td_you_k_b[i+21].style.background = 'rgba(192, 192, 192, 0.8)';
                                                }

                                                td_you[i+10].value = 4;
                                                ship_4++;

                                                console.log(i+10);
                                                console.log(td_you[i+10].value);

                                                if(i - 20 >= 0){
                                                    td_you_k_b[i-20].onclick = function(){
                                                        if(td_you_k_b[i - 20].style.background === 'rgba(192, 192, 192, 0.8)' || td_you_k_b[i - 20].value === 4){
                                                            alert('Error');
                                                        }
                                                        else{
                                                            color_ship(i-20);

                                                            if(i - 31 >= 0 && i % 10 !== 0 ){
                                                                td_you_k_b[i - 31].style.background = 'rgba(192, 192, 192, 0.8)';
                                                            }
                                                            if(i - 29 >= 0 && (i - 29) % 10 !== 0){
                                                                td_you_k_b[i - 29].style.background = 'rgba(192, 192, 192, 0.8)';
                                                            }
                                                            if(i - 30 >= 0){
                                                                td_you_k_b[i - 30].style.background = 'rgba(192, 192, 192, 0.8)';
                                                            }
                                                            if(i + 20 < 100){
                                                                td_you_k_b[i+20].style.background = 'rgba(192, 192, 192, 0.8)';
                                                            }

                                                            td_you[i-20].value = 4;
                                                            ship_4++;

                                                            console.log(i-20);
                                                            console.log(td_you[i-20].value);

                                                            ship_four = true;
                                                        }
                                                    };
                                                }

                                                if(i + 20 < 100){
                                                    td_you_k_b[i+20].onclick = function(){
                                                        if(td_you_k_b[i + 20].style.background === 'rgba(192, 192, 192, 0.8)' || td_you_k_b[i + 20].value === 4){
                                                            alert('Error');
                                                        }
                                                        else{
                                                            color_ship(i+20);

                                                            if(i - 20 >= 0){
                                                                td_you_k_b[i-20].style.background = 'rgba(192, 192, 192, 0.8)';
                                                            }
                                                            if( i + 29 < 100 && i % 10 !== 0){
                                                                td_you_k_b[i+29].style.background = 'rgba(192, 192, 192, 0.8)';
                                                            }
                                                            if( i + 31 < 100 && (i + 21) % 10 !== 0){
                                                                td_you_k_b[i+31].style.background = 'rgba(192, 192, 192, 0.8)';
                                                            }
                                                            if(i + 30 < 100){
                                                                td_you_k_b[i+30].style.background = 'rgba(192, 192, 192, 0.8)';
                                                            }

                                                            td_you[i+20].value = 4;
                                                            ship_4++;

                                                            console.log(i+20);
                                                            console.log(td_you[i+20].value);

                                                            ship_four = true;

                                                        }
                                                    };
                                                }

                                            }
                                        };
                                    }

                                }
                            };
                        }

                        if(i + 10 < 100){
                            let td_you_n_b = document.querySelectorAll('#table_one > tbody > tr > td:not(:nth-child(1))');
                            td_you_n_b[i+10].onclick = function(){
                                if(td_you_n_b[i + 10].style.background === 'rgba(192, 192, 192, 0.8)' || td_you_n_b[i + 10].value === 4){
                                    alert('Error');
                                }
                                else{
                                    color_ship(i+10);

                                    if(i + 1 < 100 && (i + 1) % 10 !== 0){
                                        td_you_n_b[i+1].style.background = 'rgba(192, 192, 192, 0.8)';
                                    }
                                    if(i - 1 >= 0 && ((i-1)-9) % 10 !== 0){
                                        td_you_n_b[i-1].style.background = 'rgba(192, 192, 192, 0.8)';
                                    }
                                    if( i + 19 < 100 && i % 10 !== 0){
                                        td_you_n_b[i+19].style.background = 'rgba(192, 192, 192, 0.8)';
                                    }
                                    if( i + 21 < 100 && (i + 21) % 10 !== 0){
                                        td_you_n_b[i+21].style.background = 'rgba(192, 192, 192, 0.8)';
                                    }

                                    td_you[i+10].value = 4;
                                    ship_4++;

                                    console.log(i+10);
                                    console.log(td_you[i+10].value);

                                    if(i - 10 >= 0){
                                        let td_you_k_a_i = document.querySelectorAll('#table_one > tbody > tr > td:not(:nth-child(1))');
                                        td_you_k_a_i[i-10].onclick = function(){
                                            if(td_you_k_a_i[i - 10].style.background === 'rgba(192, 192, 192, 0.8)' || td_you_k_a_i[i - 10].value === 4){
                                                alert('Error');
                                            }
                                            else{
                                                color_ship(i-10);

                                                if(i - 21 >= 0 && i % 10 !== 0){
                                                    td_you_k_a_i[i-21].style.background = 'rgba(192, 192, 192, 0.8)';
                                                }
                                                if(i - 19 >= 0 && (i - 19) % 10 !== 0){
                                                    td_you_k_a_i[i-19].style.background = 'rgba(192, 192, 192, 0.8)';
                                                }

                                                td_you[i-10].value = 4;
                                                ship_4++;

                                                console.log(i-10);
                                                console.log(td_you[i-10].value);

                                                if(i - 20 >= 0){
                                                    td_you_k_a_i[i-20].onclick = function(){
                                                        if(td_you_k_a_i[i - 20].style.background === 'rgba(192, 192, 192, 0.8)' || td_you_k_a_i[i - 20].value === 4){
                                                            alert('Error');
                                                        }
                                                        else{
                                                            color_ship(i-20);

                                                            if(i - 31 >= 0 && i % 10 !== 0 ){
                                                                td_you_k_a_i[i - 31].style.background = 'rgba(192, 192, 192, 0.8)';
                                                            }
                                                            if(i - 29 >= 0 && (i - 29) % 10 !== 0){
                                                                td_you_k_a_i[i - 29].style.background = 'rgba(192, 192, 192, 0.8)';
                                                            }
                                                            if(i - 30 >= 0){
                                                                td_you_k_a_i[i - 30].style.background = 'rgba(192, 192, 192, 0.8)';
                                                            }
                                                            if(i + 20 < 100){
                                                                td_you_k_a_i[i + 20].style.background = 'rgba(192, 192, 192, 0.8)';
                                                            }

                                                            td_you[i-20].value = 4;
                                                            ship_4++;

                                                            console.log(i-20);
                                                            console.log(td_you[i-20].value);

                                                            ship_four = true;
                                                        }
                                                    };
                                                }

                                                if(i + 20 < 100){
                                                    td_you_k_a_i[i+20].onclick = function(){
                                                        if(td_you_k_a_i[i + 20].style.background === 'rgba(192, 192, 192, 0.8)' || td_you_k_a_i[i + 20].value === 4){
                                                            alert('Error');
                                                        }
                                                        else{
                                                            color_ship(i+20);

                                                            if(i-20 >= 0){
                                                                td_you_k_a_i[i-20].style.background = 'rgba(192, 192, 192, 0.8)';
                                                            }
                                                            if( i + 29 < 100 && i % 10 !== 0){
                                                                td_you_k_a_i[i+29].style.background = 'rgba(192, 192, 192, 0.8)';
                                                            }
                                                            if( i + 31 < 100 && (i + 31) % 10 !== 0){
                                                                td_you_k_a_i[i+31].style.background = 'rgba(192, 192, 192, 0.8)';
                                                            }
                                                            if(i + 30 < 100){
                                                                td_you_k_a_i[i + 30].style.background = 'rgba(192, 192, 192, 0.8)';
                                                            }

                                                            td_you[i+20].value = 4;
                                                            ship_4++;

                                                            console.log(i+20);
                                                            console.log(td_you[i+20].value);

                                                            ship_four = true;
                                                        }
                                                    };
                                                }
                                            }
                                        };
                                    }

                                    if(i + 20 < 100){
                                        let td_you_k_b_i = document.querySelectorAll('#table_one > tbody > tr > td:not(:nth-child(1))');
                                        td_you_k_b_i[i+20].onclick = function(){
                                            if(td_you_k_b_i[i + 20].style.background === 'rgba(192, 192, 192, 0.8)' || td_you_k_b_i[i + 20].value === 4){
                                                alert('Error');
                                            }
                                            else{
                                                color_ship(i+20);

                                                if( i + 29 < 100 && i % 10 !== 0){
                                                    td_you_n_b[i+29].style.background = 'rgba(192, 192, 192, 0.8)';
                                                }
                                                if( i + 31 < 100 && (i + 21) % 10 !== 0){
                                                    td_you_n_b[i+31].style.background = 'rgba(192, 192, 192, 0.8)';
                                                }

                                                td_you[i+20].value = 4;
                                                ship_4++;

                                                console.log(i+20);
                                                console.log(td_you[i+20].value);

                                                if(i + 30 < 100){
                                                    td_you_k_b_i[i+30].onclick = function(){
                                                        if(td_you_k_b_i[i + 30].style.background === 'rgba(192, 192, 192, 0.8)' || td_you_k_b_i[i + 30].value === 4){
                                                            alert('Error');
                                                        }
                                                        else{
                                                            color_ship(i+30);

                                                            if( i + 39 < 100 && i % 10 !== 0){
                                                                td_you_n_b[i+39].style.background = 'rgba(192, 192, 192, 0.8)';
                                                            }
                                                            if( i + 41 < 100 && (i + 21) % 10 !== 0){
                                                                td_you_n_b[i+41].style.background = 'rgba(192, 192, 192, 0.8)';
                                                            }
                                                            if(i + 40 < 100){
                                                                td_you_n_b[i+40].style.background = 'rgba(192, 192, 192, 0.8)';
                                                            }
                                                            if(i - 10 >= 0){
                                                                td_you_n_b[i-10].style.background = 'rgba(192, 192, 192, 0.8)';
                                                            }

                                                            td_you[i+30].value = 4;
                                                            ship_4++;

                                                            console.log(i+30);
                                                            console.log(td_you[i+30].value);

                                                            ship_four = true;
                                                        }
                                                    };
                                                }

                                                if(i - 10 >= 0){
                                                    td_you_k_b_i[i-10].onclick = function(){
                                                        if(td_you_k_b_i[i - 10].style.background === 'rgba(192, 192, 192, 0.8)' || td_you_k_b_i[i - 10].value === 4){
                                                            alert('Error');
                                                        }
                                                        else{
                                                            color_ship(i-10);

                                                            if(i - 21 >= 0 && i % 10 !== 0 ){
                                                                td_you_k_b_i[i - 21].style.background = 'rgba(192, 192, 192, 0.8)';
                                                            }
                                                            if(i - 19 >= 0 && (i - 29) % 10 !== 0){
                                                                td_you_k_b_i[i - 19].style.background = 'rgba(192, 192, 192, 0.8)';
                                                            }
                                                            if(i - 20 >= 0){
                                                                td_you_k_b_i[i - 20].style.background = 'rgba(192, 192, 192, 0.8)';
                                                            }
                                                            if(i + 30 < 100){
                                                                td_you_k_b_i[i + 30].style.background = 'rgba(192, 192, 192, 0.8)';
                                                            }

                                                            td_you[i-10].value = 4;
                                                            ship_4++;

                                                            console.log(i-10);
                                                            console.log(td_you[i-10].value);

                                                            ship_four = true;
                                                        }
                                                    };

                                                }
                                            }
                                        };
                                    }

                                }
                            };
                        }

                        if(i - 1 >= 0){
                            let td_you_n_c = document.querySelectorAll('#table_one > tbody > tr > td:not(:nth-child(1))');
                            td_you_n_c[i-1].onclick = function(){
                                if(td_you_n_c[i - 1].style.background === 'rgba(192, 192, 192, 0.8)' || td_you_n_c[i - 1].value === 4){
                                    alert('Error');
                                }
                                else{
                                    color_ship(i-1);

                                    if(i - 10 >= 0){
                                        td_you_n_c[i-10].style.background = 'rgba(192, 192, 192, 0.8)';
                                    }
                                    if(i + 10 < 100){
                                        td_you_n_c[i + 10].style.background = 'rgba(192, 192, 192, 0.8)';
                                    }
                                    if(i - 12 >= 0 && (i - 12 - 9) % 10 !== 0){
                                        td_you_n_c[i-12].style.background = 'rgba(192, 192, 192, 0.8)';
                                    }
                                    if(i + 8 < 100 && (i + 8 - 9) % 10 !== 0){
                                        td_you_n_c[i+8].style.background = 'rgba(192, 192, 192, 0.8)';
                                    }

                                    td_you[i-1].value = 4;
                                    ship_4++;

                                    console.log(i-1);
                                    console.log(td_you[i-1].value);

                                    if(i - 2 >= 0){
                                        let td_you_k_c = document.querySelectorAll('#table_one > tbody > tr > td:not(:nth-child(1))');
                                        td_you_k_c[i-2].onclick = function(){
                                            if(td_you_k_c[i - 2].style.background === 'rgba(192, 192, 192, 0.8)' || td_you_k_c[i - 2].value === 4){
                                                alert('Error');
                                            }
                                            else{
                                                color_ship(i-2);

                                                if(i - 13 >= 0 && (i - 13 - 9) % 10 !== 0){
                                                    td_you_k_c[i-13].style.background = 'rgba(192, 192, 192, 0.8)';
                                                }
                                                if(i + 7 < 100 && (i + 7 - 9) % 10 !== 0){
                                                    td_you_k_c[i+7].style.background = 'rgba(192, 192, 192, 0.8)';
                                                }

                                                td_you[i-2].value = 4;
                                                ship_4++;

                                                console.log(i-2);
                                                console.log(td_you[i-2].value);

                                                if(i - 3 >= 0){
                                                    td_you_k_c[i-3].onclick = function() {
                                                        if (td_you_k_c[i - 3].style.background === 'rgba(192, 192, 192, 0.8)' || td_you_k_c[i - 3].value === 4) {
                                                            alert('Error');
                                                        }
                                                        else {
                                                            color_ship(i-3);

                                                            if(i + 1 < 100 && (i+1) % 10 !== 0){
                                                                td_you_k_c[i+1].style.background = 'rgba(192, 192, 192, 0.8)';
                                                            }
                                                            if(i - 14 >= 0 && (i - 14 - 9) % 10 !== 0){
                                                                td_you_k_c[i-14].style.background = 'rgba(192, 192, 192, 0.8)';
                                                            }
                                                            if(i + 6 < 100 && (i + 6 - 9) % 10 !== 0){
                                                                td_you_k_c[i+6].style.background = 'rgba(192, 192, 192, 0.8)';
                                                            }
                                                            if(i - 4 >= 0 && (i - 4 - 9) % 10 !== 0){
                                                                td_you_k_c[i-4].style.background = 'rgba(192, 192, 192, 0.8)';
                                                            }

                                                            td_you[i-3].value = 4;
                                                            ship_4++;

                                                            console.log(i-3);
                                                            console.log(td_you[i-3].value);

                                                            ship_four = true;
                                                        }
                                                    };
                                                }

                                                if(i + 1 < 100){
                                                    td_you_k_c[i+1].onclick = function() {
                                                        if (td_you_k_c[i + 1].style.background === 'rgba(192, 192, 192, 0.8)' || td_you_k_c[i + 1].value === 4) {
                                                            alert('Error');
                                                        }
                                                        else {
                                                            color_ship(i+1);

                                                            if(i - 3 >= 0 && (i - 3 - 9) % 10 !== 0){
                                                                td_you_k_c[i-3].style.background = 'rgba(192, 192, 192, 0.8)';
                                                            }
                                                            if(i - 8 >= 0 && (i - 8) % 10 !== 0){
                                                                td_you_k_c[i-8].style.background = 'rgba(192, 192, 192, 0.8)';
                                                            }
                                                            if(i + 12 < 100 && (i + 12) % 10 !== 0){
                                                                td_you_k_c[i+12].style.background = 'rgba(192, 192, 192, 0.8)';
                                                            }
                                                            if(i + 2 < 100 && (i + 2) % 10 !== 0){
                                                                td_you_k_c[i+2].style.background = 'rgba(192, 192, 192, 0.8)';
                                                            }


                                                            td_you[i+1].value = 4;
                                                            ship_4++;

                                                            console.log(i+1);
                                                            console.log(td_you[i+1].value);

                                                            ship_four = true;
                                                        }
                                                    }
                                                }
                                            }
                                        };
                                    }

                                    if(i + 1 < 100){
                                        let td_you_k_d = document.querySelectorAll('#table_one > tbody > tr > td:not(:nth-child(1))');
                                        td_you_k_d[i+1].onclick = function(){
                                            if(td_you_k_d[i + 1].style.background === 'rgba(192, 192, 192, 0.8)' || td_you_k_d[i + 1].value === 4){
                                                alert('Error');
                                            }
                                            else{
                                                color_ship(i+1);

                                                if(i - 8 >= 0 && (i - 8) % 10 !== 0){
                                                    td_you_k_d[i-8].style.background = 'rgba(192, 192, 192, 0.8)';
                                                }
                                                if(i + 12 < 100 && (i + 12) % 10 !== 0){
                                                    td_you_k_d[i+12].style.background = 'rgba(192, 192, 192, 0.8)';
                                                }

                                                td_you[i+1].value = 4;
                                                ship_4++;

                                                console.log(i+1);
                                                console.log(td_you[i+1].value);

                                                if(i - 2 >= 0){
                                                    td_you_k_d[i-2].onclick = function() {
                                                        if (td_you_k_d[i - 2].style.background === 'rgba(192, 192, 192, 0.8)' || td_you_k_d[i - 2].value === 4) {
                                                            alert('Error');
                                                        }
                                                        else {
                                                            color_ship(i-2);

                                                            if(i + 2 < 100 && (i + 2) % 10 !==0){
                                                                td_you_k_d[i+2].style.background = 'rgba(192, 192, 192, 0.8)';
                                                            }
                                                            if(i - 3 >= 0 && (i - 3 - 9) % 10 !== 0){
                                                                td_you_k_d[i - 3].style.background = 'rgba(192, 192, 192, 0.8)';
                                                            }
                                                            if(i - 13 >= 0 && (i - 13 - 9) % 10 !== 0){
                                                                td_you_k_d[i-13].style.background = 'rgba(192, 192, 192, 0.8)';
                                                            }
                                                            if(i + 7 < 100 && (i + 7 - 9) % 10 !== 0){
                                                                td_you_k_d[i+7].style.background = 'rgba(192, 192, 192, 0.8)';
                                                            }

                                                            td_you[i-2].value = 4;
                                                            ship_4++;

                                                            console.log(i-2);
                                                            console.log(td_you[i-2].value);

                                                            ship_four = true;
                                                        }
                                                    };
                                                }
                                                if(i + 2 < 100){
                                                    td_you_k_d[i+2].onclick = function() {
                                                        if (td_you_k_d[i + 2].style.background === 'rgba(192, 192, 192, 0.8)' || td_you_k_d[i + 2].value === 4) {
                                                            alert('Error');
                                                        }
                                                        else {
                                                            color_ship(i+2);

                                                            if(i - 2 >= 0 && (i - 2 - 9) % 10 !== 0){
                                                                td_you_k_d[i-2].style.background = 'rgba(192, 192, 192, 0.8)';
                                                            }
                                                            if(i + 3 >= 0 && (i + 3) % 10 !== 0){
                                                                td_you_k_d[i+3].style.background = 'rgba(192, 192, 192, 0.8)';
                                                            }
                                                            if(i - 7 >= 0 && (i - 7) % 10 !== 0){
                                                                td_you_k_d[i-7].style.background = 'rgba(192, 192, 192, 0.8)';
                                                            }
                                                            if(i + 13 < 100 && (i + 13) % 10 !== 0){
                                                                td_you_k_d[i+13].style.background = 'rgba(192, 192, 192, 0.8)';
                                                            }

                                                            td_you[i+2].value = 4;
                                                            ship_4++;

                                                            console.log(i+2);
                                                            console.log(td_you[i+2].value);

                                                            ship_four = true;
                                                        }
                                                    };
                                                }
                                            }
                                        };
                                    }

                                }
                            };
                        }

                        if(i + 1 < 100){
                            let td_you_n_d = document.querySelectorAll('#table_one > tbody > tr > td:not(:nth-child(1))');
                            td_you_n_d[i+1].onclick = function(){
                                if(td_you_n_d[i + 1].style.background === 'rgba(192, 192, 192, 0.8)' || td_you_n_d[i + 1].value === 4){
                                    alert('Error');
                                }
                                else{
                                    color_ship(i+1);

                                    if(i - 10 >= 0){
                                        td_you_n_d[i-10].style.background = 'rgba(192, 192, 192, 0.8)';
                                    }
                                    if(i + 10 < 100){
                                        td_you_n_d[i+10].style.background = 'rgba(192, 192, 192, 0.8)';
                                    }
                                    if(i - 8 >= 0 && (i - 8) % 10 !== 0){
                                        td_you_n_d[i-8].style.background = 'rgba(192, 192, 192, 0.8)';
                                    }
                                    if(i + 12 < 100 && (i + 12) % 10 !== 0){
                                        td_you_n_d[i+12].style.background = 'rgba(192, 192, 192, 0.8)';
                                    }

                                    td_you[i+1].value = 4;
                                    ship_4++;

                                    console.log(i+1);
                                    console.log(td_you[i+1].value);

                                    if(i - 1 >= 0){
                                        let td_you_k_d_i = document.querySelectorAll('#table_one > tbody > tr > td:not(:nth-child(1))');
                                        td_you_k_d_i[i-1].onclick = function(){
                                            if(td_you_k_d_i[i - 1].style.background === 'rgba(192, 192, 192, 0.8)' || td_you_k_d_i[i - 1].value === 4){
                                                alert('Error');
                                            }
                                            else{
                                                color_ship(i-1);

                                                if(i - 12 >= 0 && (i - 12 - 9) % 10 !== 0){
                                                    td_you_k_d_i[i-12].style.background = 'rgba(192, 192, 192, 0.8)';
                                                }
                                                if(i + 8 < 100 && (i + 8 - 9) % 10 !== 0){
                                                    td_you_k_d_i[i+8].style.background = 'rgba(192, 192, 192, 0.8)';
                                                }

                                                td_you[i-1].value = 4;
                                                ship_4++;

                                                console.log(i-1);
                                                console.log(td_you[i-1].value);

                                                if(i - 2 >= 0){
                                                    td_you_k_d_i[i-2].onclick = function() {
                                                        if (td_you_k_d_i[i - 2].style.background === 'rgba(192, 192, 192, 0.8)' || td_you_k_d_i[i - 2].value === 4) {
                                                            alert('Error');
                                                        }
                                                        else {
                                                            color_ship(i-2);

                                                            if(i + 2 < 100 && (i + 2) % 10 !==0){
                                                                td_you_k_d_i[i+2].style.background = 'rgba(192, 192, 192, 0.8)';
                                                            }
                                                            if(i - 3 >= 0 && (i - 3 - 9) % 10 !== 0){
                                                                td_you_k_d_i[i - 3].style.background = 'rgba(192, 192, 192, 0.8)';
                                                            }
                                                            if(i - 13 >= 0 && (i - 13 - 9) % 10 !== 0){
                                                                td_you_k_d_i[i-13].style.background = 'rgba(192, 192, 192, 0.8)';
                                                            }
                                                            if(i + 7 < 100 && (i + 7 - 9) % 10 !== 0){
                                                                td_you_k_d_i[i+7].style.background = 'rgba(192, 192, 192, 0.8)';
                                                            }

                                                            td_you[i-2].value = 4;
                                                            ship_4++;

                                                            console.log(i-2);
                                                            console.log(td_you[i-2].value);

                                                            ship_four = true;
                                                        }
                                                    };
                                                }
                                                if(i + 2 < 100){
                                                    td_you_k_d_i[i+2].onclick = function() {
                                                        if (td_you_k_d_i[i + 2].style.background === 'rgba(192, 192, 192, 0.8)' || td_you_k_d_i[i + 2].value === 4) {
                                                            alert('Error');
                                                        }
                                                        else{
                                                            color_ship(i+2);

                                                            if(i - 2 >= 0 && (i - 2 - 9) % 10 !== 0){
                                                                td_you_k_d_i[i-2].style.background = 'rgba(192, 192, 192, 0.8)';
                                                            }
                                                            if(i + 3 >= 0 && (i + 3) % 10 !== 0){
                                                                td_you_k_d_i[i+3].style.background = 'rgba(192, 192, 192, 0.8)';
                                                            }
                                                            if(i - 7 >= 0 && (i - 7) % 10 !== 0){
                                                                td_you_k_d_i[i-7].style.background = 'rgba(192, 192, 192, 0.8)';
                                                            }
                                                            if(i + 13 < 100 && (i + 13) % 10 !== 0){
                                                                td_you_k_d_i[i+13].style.background = 'rgba(192, 192, 192, 0.8)';
                                                            }

                                                            td_you[i+2].value = 4;
                                                            ship_4++;

                                                            console.log(i+2);
                                                            console.log(td_you[i+2].value);

                                                            ship_four = true;
                                                        }
                                                    };
                                                }
                                            }
                                        };
                                    }
                                    if(i + 2 < 100){
                                        let td_you_k_c_i = document.querySelectorAll('#table_one > tbody > tr > td:not(:nth-child(1))');
                                        td_you_k_c_i[i+2].onclick = function(){
                                            if(td_you_k_c_i[i + 2].style.background === 'rgba(192, 192, 192, 0.8)' || td_you_k_c_i[i + 2].value === 4){
                                                alert('Error');
                                            }
                                            else{
                                                color_ship(i+2);

                                                if(i - 7 >= 0 && (i - 7) % 10 !== 0){
                                                    td_you_k_c_i[i-7].style.background = 'rgba(192, 192, 192, 0.8)';
                                                }
                                                if(i + 13 < 100 && (i + 13) % 10 !== 0){
                                                    td_you_k_c_i[i+13].style.background = 'rgba(192, 192, 192, 0.8)';
                                                }

                                                td_you[i+2].value = 4;
                                                ship_4++;

                                                console.log(i+2);
                                                console.log(td_you[i+2].value);

                                                if(i - 1 >= 0){
                                                    td_you_k_c_i[i-1].onclick = function(){
                                                        if (td_you_k_c_i[i - 1].style.background === 'rgba(192, 192, 192, 0.8)' || td_you_k_c_i[i - 1].value === 4) {
                                                            alert('Error');
                                                        }
                                                        else {
                                                            color_ship(i-1);

                                                            if(i + 3 >= 0 && (i + 3) % 10 !== 0){
                                                                td_you_k_c_i[i+3].style.background = 'rgba(192, 192, 192, 0.8)';
                                                            }
                                                            if(i - 12 >= 0 && (i - 12 - 9) % 10 !== 0){
                                                                td_you_k_c_i[i-12].style.background = 'rgba(192, 192, 192, 0.8)';
                                                            }
                                                            if(i + 8 < 100 && (i + 8 - 9) % 10 !== 0){
                                                                td_you_k_c_i[i+8].style.background = 'rgba(192, 192, 192, 0.8)';
                                                            }
                                                            if(i - 2 >= 0 && (i - 2 - 9) % 10 !== 0){
                                                                td_you_k_c_i[i-2].style.background = 'rgba(192, 192, 192, 0.8)';
                                                            }

                                                            td_you[i-1].value = 4;
                                                            ship_4++;

                                                            console.log(i-1);
                                                            console.log(td_you[i-1].value);

                                                            ship_four = true;
                                                        }
                                                    };
                                                }

                                                if(i + 3 < 100){
                                                    td_you_k_c_i[i+3].onclick = function() {
                                                        if (td_you_k_c_i[i + 3].style.background === 'rgba(192, 192, 192, 0.8)' || td_you_k_c_i[i + 3].value === 4) {
                                                            alert('Error');
                                                        }
                                                        else {
                                                            color_ship(i+3);

                                                            if(i - 1 >= 0 && (i - 1 - 9) % 10 !== 0){
                                                                td_you_k_c_i[i-1].style.background = 'rgba(192, 192, 192, 0.8)';
                                                            }
                                                            if(i - 6 >= 0 && (i - 6) % 10 !== 0){
                                                                td_you_k_c_i[i-6].style.background = 'rgba(192, 192, 192, 0.8)';
                                                            }
                                                            if(i + 14 < 100 && (i + 14) % 10 !== 0){
                                                                td_you_k_c_i[i+14].style.background = 'rgba(192, 192, 192, 0.8)';
                                                            }
                                                            if(i + 4 < 100 && (i + 4) % 10 !== 0){
                                                                td_you_k_c_i[i+4].style.background = 'rgba(192, 192, 192, 0.8)';
                                                            }

                                                            td_you[i+3].value = 4;
                                                            ship_4++;

                                                            console.log(i+3);
                                                            console.log(td_you[i+3].value);

                                                            ship_four = true;
                                                        }
                                                    };
                                                }
                                            }
                                        };
                                    }
                                }
                            };
                        }
                    }
                }
            }
            else{
                alert('ship_4 = 1');
            }
        }
    };
}
/*-------------end ship td_you---------------*/


let m = [];
start.onclick = function(){
    for(let i = 0; i < td_you.length; i++){
        m[i] = td_you[i].value;
    }
    console.log(m);

};