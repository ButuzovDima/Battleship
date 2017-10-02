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

    //td_pc[rand].style.background = 'brown';
    td_pc[rand].value = 4;
    console.log(rand);
    console.log(td_pc[rand].value);

    //td_pc[rand+10].style.background = 'brown';
    td_pc[rand+10].value = 4;
    console.log(rand+10);
    console.log(td_pc[rand+10].value);

    //td_pc[rand+20].style.background = 'brown';
    td_pc[rand+20].value = 4;
    console.log(rand+20);
    console.log(td_pc[rand+20].value);

    //td_pc[rand+30].style.background = 'brown';
    td_pc[rand+30].value = 4;
    console.log(rand+30);
    console.log(td_pc[rand+30].value);

    if(rand - 10 >= 0){
    //    td_pc[rand - 10].style.background = 'rgba(192, 192, 192, 0.8)';
        td_pc[rand - 10].value = 5;
    }
    if(rand + 40 < 100){
    //    td_pc[rand + 40].style.background = 'rgba(192, 192, 192, 0.8)';
        td_pc[rand + 40].value = 5;
    }
    if(rand - 11 >= 0 && (rand - 11 - 9) % 10 !== 0){
    //    td_pc[rand - 11].style.background = 'rgba(192, 192, 192, 0.8)';
        td_pc[rand - 11].value = 5;
    }
    if(rand - 9 >= 0 && (rand - 9) % 10 !== 0){
     //   td_pc[rand - 9].style.background = 'rgba(192, 192, 192, 0.8)';
        td_pc[rand - 9].value = 5;
    }
    if(rand - 1 >= 0 && (rand - 1 - 9) % 10 !== 0){
    //    td_pc[rand - 1].style.background = 'rgba(192, 192, 192, 0.8)';
        td_pc[rand - 1].value = 5;
    }
    if(rand + 1 < 100 && (rand + 1) % 10 !== 0){
    //    td_pc[rand + 1].style.background = 'rgba(192, 192, 192, 0.8)';
        td_pc[rand + 1].value = 5;
    }
    if(rand + 9 < 100 && (rand + 9 - 9) % 10 !== 0){
    //    td_pc[rand + 9].style.background = 'rgba(192, 192, 192, 0.8)';
        td_pc[rand + 9].value = 5;
    }
    if(rand + 11 < 100 && (rand + 11) % 10 !== 0){
    //    td_pc[rand + 11].style.background = 'rgba(192, 192, 192, 0.8)';
        td_pc[rand + 11].value = 5;
    }
    if(rand + 19 < 100 && (rand + 19 - 9) % 10 !== 0){
     //   td_pc[rand + 19].style.background = 'rgba(192, 192, 192, 0.8)';
        td_pc[rand + 19].value = 5;
    }
    if(rand + 21 < 100 && (rand + 21) % 10 !== 0){
    //    td_pc[rand + 21].style.background = 'rgba(192, 192, 192, 0.8)';
        td_pc[rand + 21].value = 5;
    }
    if(rand + 29 < 100 && (rand + 29 - 9) % 10 !== 0){
    //    td_pc[rand + 29].style.background = 'rgba(192, 192, 192, 0.8)';
        td_pc[rand + 29].value = 5;
    }
    if(rand + 31 < 100 && (rand + 31) % 10 !== 0){
    //    td_pc[rand + 31].style.background = 'rgba(192, 192, 192, 0.8)';
        td_pc[rand + 31].value = 5;
    }
    if(rand + 39 < 100 && (rand + 39 - 9) % 10 !== 0){
    //    td_pc[rand + 39].style.background = 'rgba(192, 192, 192, 0.8)';
        td_pc[rand + 39].value = 5;
    }
    if(rand + 41 < 100 && (rand + 41) % 10 !== 0){
    //    td_pc[rand + 41].style.background = 'rgba(192, 192, 192, 0.8)';
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

    //td_pc[rand].style.background = 'brown';
    td_pc[rand].value = 4;
    console.log(rand);
    console.log(td_pc[rand].value);

    //td_pc[rand+1].style.background = 'brown';
    td_pc[rand+1].value = 4;
    console.log(rand+1);
    console.log(td_pc[rand+1].value);

    //td_pc[rand+2].style.background = 'brown';
    td_pc[rand+2].value = 4;
    console.log(rand+2);
    console.log(td_pc[rand+2].value);

    //td_pc[rand+3].style.background = 'brown';
    td_pc[rand+3].value = 4;
    console.log(rand+3);
    console.log(td_pc[rand+3].value);

    if(rand - 1 >= 0 && (rand - 1 - 9) % 10 !== 0){
    //    td_pc[rand - 1].style.background = 'rgba(192, 192, 192, 0.8)';
        td_pc[rand - 1].value = 5;
    }
    if(rand - 11 >= 0 && (rand - 11 - 9) % 10 !== 0){
    //    td_pc[rand - 11].style.background = 'rgba(192, 192, 192, 0.8)';
        td_pc[rand - 11].value = 5;
    }
    if(rand + 9 < 100 && (rand + 9 - 9) % 10 !== 0){
    //    td_pc[rand + 9].style.background = 'rgba(192, 192, 192, 0.8)';
        td_pc[rand + 9].value = 5;
    }
    if(rand - 10 >= 0){
    //    td_pc[rand - 10].style.background = 'rgba(192, 192, 192, 0.8)';
        td_pc[rand - 10].value = 5;
    }
    if(rand + 10 < 100){
    //    td_pc[rand + 10].style.background = 'rgba(192, 192, 192, 0.8)';
        td_pc[rand + 10].value = 5;
    }
    if(rand - 9 >= 0){
    //    td_pc[rand - 9].style.background = 'rgba(192, 192, 192, 0.8)';
        td_pc[rand - 9].value = 5;
    }
    if(rand + 11 < 100){
    //    td_pc[rand + 11].style.background = 'rgba(192, 192, 192, 0.8)';
        td_pc[rand + 11].value = 5;
    }
    if(rand + 4 < 100 && (rand + 4) % 10 !== 0){
    //    td_pc[rand + 4].style.background = 'rgba(192, 192, 192, 0.8)';
        td_pc[rand + 4].value = 5;
    }
    if(rand - 8 >= 0 && (rand - 8) % 10 !== 0){
    //    td_pc[rand - 8].style.background = 'rgba(192, 192, 192, 0.8)';
        td_pc[rand - 8].value = 5;
    }
    if(rand + 12 < 100 && (rand + 12) % 10 !== 0){
    //    td_pc[rand + 12].style.background = 'rgba(192, 192, 192, 0.8)';
        td_pc[rand + 12].value = 5;
    }
    if(rand - 7 >= 0 && (rand - 7) % 10 !== 0){
    //    td_pc[rand - 7].style.background = 'rgba(192, 192, 192, 0.8)';
        td_pc[rand - 7].value = 5;
    }
    if(rand + 13 < 100 && (rand + 13) % 10 !== 0){
    //    td_pc[rand + 13].style.background = 'rgba(192, 192, 192, 0.8)';
        td_pc[rand + 13].value = 5;
    }
    if(rand + 14 < 100 && (rand + 14) % 10 !== 0){
    //    td_pc[rand + 14].style.background = 'rgba(192, 192, 192, 0.8)';
        td_pc[rand + 14].value = 5;
    }
    if(rand - 6 >= 0 && (rand - 6) % 10 !== 0){
    //    td_pc[rand - 6].style.background = 'rgba(192, 192, 192, 0.8)';
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

           // td_pc[rand].style.background = 'brown';
            td_pc[rand].value = 3;
            console.log(rand);
            console.log(td_pc[rand].value);

           // td_pc[rand+10].style.background = 'brown';
            td_pc[rand+10].value = 3;
            console.log(rand+10);
            console.log(td_pc[rand+10].value);

           // td_pc[rand+20].style.background = 'brown';
            td_pc[rand+20].value = 3;
            console.log(rand+20);
            console.log(td_pc[rand+20].value);

            if(rand - 10 >= 0){
               // td_pc[rand - 10].style.background = 'rgba(192, 192, 192, 0.8)';
                td_pc[rand - 10].value = 5;
            }
            if(rand + 30 < 100){
              //  td_pc[rand + 30].style.background = 'rgba(192, 192, 192, 0.8)';
                td_pc[rand + 30].value = 5;
            }
            if(rand - 11 >= 0 && (rand - 11 - 9) % 10 !== 0){
              //  td_pc[rand - 11].style.background = 'rgba(192, 192, 192, 0.8)';
                td_pc[rand - 11].value = 5;
            }
            if(rand - 9 >= 0 && (rand - 9) % 10 !== 0){
              //  td_pc[rand - 9].style.background = 'rgba(192, 192, 192, 0.8)';
                td_pc[rand - 9].value = 5;
            }
            if(rand - 1 >= 0 && (rand - 1 - 9) % 10 !== 0){
              //  td_pc[rand - 1].style.background = 'rgba(192, 192, 192, 0.8)';
                td_pc[rand - 1].value = 5;
            }
            if(rand + 1 < 100 && (rand + 1) % 10 !== 0){
             //   td_pc[rand + 1].style.background = 'rgba(192, 192, 192, 0.8)';
                td_pc[rand + 1].value = 5;
            }
            if(rand + 9 < 100 && (rand + 9 - 9) % 10 !== 0){
             //   td_pc[rand + 9].style.background = 'rgba(192, 192, 192, 0.8)';
                td_pc[rand + 9].value = 5;
            }
            if(rand + 11 < 100 && (rand + 11) % 10 !== 0){
             //   td_pc[rand + 11].style.background = 'rgba(192, 192, 192, 0.8)';
                td_pc[rand + 11].value = 5;
            }
            if(rand + 19 < 100 && (rand + 19 - 9) % 10 !== 0){
            //    td_pc[rand + 19].style.background = 'rgba(192, 192, 192, 0.8)';
                td_pc[rand + 19].value = 5;
            }
            if(rand + 21 < 100 && (rand + 21) % 10 !== 0){
             //   td_pc[rand + 21].style.background = 'rgba(192, 192, 192, 0.8)';
                td_pc[rand + 21].value = 5;
            }
            if(rand + 29 < 100 && (rand + 29 - 9) % 10 !== 0){
             //   td_pc[rand + 29].style.background = 'rgba(192, 192, 192, 0.8)';
                td_pc[rand + 29].value = 5;
            }
            if(rand + 31 < 100 && (rand + 31) % 10 !== 0){
            //    td_pc[rand + 31].style.background = 'rgba(192, 192, 192, 0.8)';
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

           // td_pc[rand].style.background = 'brown';
            td_pc[rand].value = 3;
            console.log(rand);
            console.log(td_pc[rand].value);

           // td_pc[rand+1].style.background = 'brown';
            td_pc[rand+1].value = 3;
            console.log(rand+1);
            console.log(td_pc[rand+1].value);

           // td_pc[rand+2].style.background = 'brown';
            td_pc[rand+2].value = 3;
            console.log(rand+2);
            console.log(td_pc[rand+2].value);

            if(rand - 1 >= 0 && (rand - 1 - 9) % 10 !== 0){
            //    td_pc[rand - 1].style.background = 'rgba(192, 192, 192, 0.8)';
                td_pc[rand - 1].value = 5;
            }
            if(rand - 11 >= 0 && (rand - 11 - 9) % 10 !== 0){
            //    td_pc[rand - 11].style.background = 'rgba(192, 192, 192, 0.8)';
                td_pc[rand - 11].value = 5;
            }
            if(rand + 9 < 100 && (rand + 9 - 9) % 10 !== 0){
            //    td_pc[rand + 9].style.background = 'rgba(192, 192, 192, 0.8)';
                td_pc[rand + 9].value = 5;
            }
            if(rand - 10 >= 0){
             //   td_pc[rand - 10].style.background = 'rgba(192, 192, 192, 0.8)';
                td_pc[rand - 10].value = 5;
            }
            if(rand + 10 < 100){
            //    td_pc[rand + 10].style.background = 'rgba(192, 192, 192, 0.8)';
                td_pc[rand + 10].value = 5;
            }
            if(rand - 9 >= 0){
            //    td_pc[rand - 9].style.background = 'rgba(192, 192, 192, 0.8)';
                td_pc[rand - 9].value = 5;
            }
            if(rand + 11 < 100){
            //    td_pc[rand + 11].style.background = 'rgba(192, 192, 192, 0.8)';
                td_pc[rand + 11].value = 5;
            }
            if(rand + 3 < 100 && (rand + 3) % 10 !== 0){
             //   td_pc[rand + 3].style.background = 'rgba(192, 192, 192, 0.8)';
                td_pc[rand + 3].value = 5;
            }
            if(rand - 8 >= 0 && (rand - 8) % 10 !== 0){
            //    td_pc[rand - 8].style.background = 'rgba(192, 192, 192, 0.8)';
                td_pc[rand - 8].value = 5;
            }
            if(rand + 12 < 100 && (rand + 12) % 10 !== 0){
            //    td_pc[rand + 12].style.background = 'rgba(192, 192, 192, 0.8)';
                td_pc[rand + 12].value = 5;
            }
            if(rand - 7 >= 0 && (rand - 7) % 10 !== 0){
            //    td_pc[rand - 7].style.background = 'rgba(192, 192, 192, 0.8)';
                td_pc[rand - 7].value = 5;
            }
            if(rand + 13 < 100 && (rand + 13) % 10 !== 0){
            //    td_pc[rand + 13].style.background = 'rgba(192, 192, 192, 0.8)';
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

           // td_pc[rand].style.background = 'brown';
            td_pc[rand].value = 2;
            console.log(rand);
            console.log(td_pc[rand].value);

           // td_pc[rand+10].style.background = 'brown';
            td_pc[rand+10].value = 2;
            console.log(rand+10);
            console.log(td_pc[rand+10].value);

            if(rand - 10 >= 0){
            //    td_pc[rand - 10].style.background = 'rgba(192, 192, 192, 0.8)';
                td_pc[rand - 10].value = 5;
            }
            if(rand + 20 < 100){
            //    td_pc[rand + 20].style.background = 'rgba(192, 192, 192, 0.8)';
                td_pc[rand + 20].value = 5;
            }
            if(rand - 11 >= 0 && (rand - 11 - 9) % 10 !== 0){
            //    td_pc[rand - 11].style.background = 'rgba(192, 192, 192, 0.8)';
                td_pc[rand - 11].value = 5;
            }
            if(rand - 9 >= 0 && (rand - 9) % 10 !== 0){
             //   td_pc[rand - 9].style.background = 'rgba(192, 192, 192, 0.8)';
                td_pc[rand - 9].value = 5;
            }
            if(rand - 1 >= 0 && (rand - 1 - 9) % 10 !== 0){
            //    td_pc[rand - 1].style.background = 'rgba(192, 192, 192, 0.8)';
                td_pc[rand - 1].value = 5;
            }
            if(rand + 1 < 100 && (rand + 1) % 10 !== 0){
            //    td_pc[rand + 1].style.background = 'rgba(192, 192, 192, 0.8)';
                td_pc[rand + 1].value = 5;
            }
            if(rand + 9 < 100 && (rand + 9 - 9) % 10 !== 0){
            //    td_pc[rand + 9].style.background = 'rgba(192, 192, 192, 0.8)';
                td_pc[rand + 9].value = 5;
            }
            if(rand + 11 < 100 && (rand + 11) % 10 !== 0){
            //    td_pc[rand + 11].style.background = 'rgba(192, 192, 192, 0.8)';
                td_pc[rand + 11].value = 5;
            }
            if(rand + 19 < 100 && (rand + 19 - 9) % 10 !== 0){
            //    td_pc[rand + 19].style.background = 'rgba(192, 192, 192, 0.8)';
                td_pc[rand + 19].value = 5;
            }
            if(rand + 21 < 100 && (rand + 21) % 10 !== 0){
            //    td_pc[rand + 21].style.background = 'rgba(192, 192, 192, 0.8)';
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

           // td_pc[rand].style.background = 'brown';
            td_pc[rand].value = 2;
            console.log(rand);
            console.log(td_pc[rand].value);

           // td_pc[rand+1].style.background = 'brown';
            td_pc[rand+1].value = 2;
            console.log(rand+1);
            console.log(td_pc[rand+1].value);

            if(rand - 1 >= 0 && (rand - 1 - 9) % 10 !== 0){
             //   td_pc[rand - 1].style.background = 'rgba(192, 192, 192, 0.8)';
                td_pc[rand - 1].value = 5;
            }
            if(rand - 11 >= 0 && (rand - 11 - 9) % 10 !== 0){
             //   td_pc[rand - 11].style.background = 'rgba(192, 192, 192, 0.8)';
                td_pc[rand - 11].value = 5;
            }
            if(rand + 9 < 100 && (rand + 9 - 9) % 10 !== 0){
            //    td_pc[rand + 9].style.background = 'rgba(192, 192, 192, 0.8)';
                td_pc[rand + 9].value = 5;
            }
            if(rand - 10 >= 0){
             //   td_pc[rand - 10].style.background = 'rgba(192, 192, 192, 0.8)';
                td_pc[rand - 10].value = 5;
            }
            if(rand + 10 < 100){
            //    td_pc[rand + 10].style.background = 'rgba(192, 192, 192, 0.8)';
                td_pc[rand + 10].value = 5;
            }
            if(rand - 9 >= 0){
            //    td_pc[rand - 9].style.background = 'rgba(192, 192, 192, 0.8)';
                td_pc[rand - 9].value = 5;
            }
            if(rand + 11 < 100){
             //   td_pc[rand + 11].style.background = 'rgba(192, 192, 192, 0.8)';
                td_pc[rand + 11].value = 5;
            }
            if(rand + 2 < 100 && (rand + 2) % 10 !== 0){
            //    td_pc[rand + 2].style.background = 'rgba(192, 192, 192, 0.8)';
                td_pc[rand + 2].value = 5;
            }
            if(rand - 8 >= 0 && (rand - 8) % 10 !== 0){
            //    td_pc[rand - 8].style.background = 'rgba(192, 192, 192, 0.8)';
                td_pc[rand - 8].value = 5;
            }
            if(rand + 12 < 100 && (rand + 12) % 10 !== 0){
            //    td_pc[rand + 12].style.background = 'rgba(192, 192, 192, 0.8)';
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

       // td_pc[rand].style.background = 'brown';
        td_pc[rand].value = 1;
        console.log(rand);
        console.log(td_pc[rand].value);

        if(rand + 1 < 100 && (rand + 1) % 10 !== 0){
         //   td_pc[rand + 1].style.background = 'rgba(192, 192, 192, 0.8)';
            td_pc[rand + 1].value = 5;
        }
        if(rand - 1 >= 0 && (rand - 1 - 9) % 10 !== 0 ){
         //   td_pc[rand - 1].style.background = 'rgba(192, 192, 192, 0.8)';
            td_pc[rand - 1].value = 5;
        }
        if(rand + 10 < 100){
        //   td_pc[rand + 10].style.background = 'rgba(192, 192, 192, 0.8)';
            td_pc[rand + 10].value = 5;
        }
        if(rand - 10 >= 0){
         //   td_pc[rand - 10].style.background = 'rgba(192, 192, 192, 0.8)';
            td_pc[rand - 10].value = 5;
        }
        if(rand - 11 >= 0 && (rand - 11 - 9) % 10 !== 0){
         //   td_pc[rand - 11].style.background = 'rgba(192, 192, 192, 0.8)';
            td_pc[rand - 11].value = 5;
        }
        if(rand + 11 < 100 && (rand + 11) % 10 !== 0){
        //    td_pc[rand + 11].style.background = 'rgba(192, 192, 192, 0.8)';
            td_pc[rand + 11].value = 5;
        }
        if(rand + 9 < 100 && (rand + 9 - 9) % 10 !== 0){
         //   td_pc[rand + 9].style.background = 'rgba(192, 192, 192, 0.8)';
            td_pc[rand + 9].value = 5;
        }
        if(rand - 9 >= 0 && (rand - 9) % 10 !== 0){
        //    td_pc[rand - 9].style.background = 'rgba(192, 192, 192, 0.8)';
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
                        for(let a = 1; a < 9; a++){
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

/*---------------start game-------------------*/
let shotShipColor = function(n){
    td_pc[n].style.background = 'rgba(230, 0, 0, 0.8)';
};
let shotColor = function(n){
    td_pc[n].style.background = 'rgba(89, 89, 89, 0.8)';
};
let shotShipColorPC = function(n){
    td_you[n].style.background = 'rgba(230, 0, 0, 0.8)';
};
let shotColorPC = function(n){
    td_you[n].style.background = 'rgba(89, 89, 89, 0.8)';
};
let youWin = function(n){
    if(n === 20){
        alert('Вы выиграли');
    }
};
let pcWin = function(n){
    if(n === 20){
        alert('Вы проиграли!');
    }
};
let slip = function(n){ //время выстрела ????
    td_you[n].style.background = 'rgb(51, 10, 0, 0.8)';
};
let sort = function(m){
    let p;
    for(let i = 1; i < m.length; i++){
        for(let j = i; j > 0; j--){
            if(m[j-1] > m[j]){
                p = m[j];
                m[j] = m[j-1];
                m[j-1] = p;
            }
        }
    }
    return m;
};

let shotShipPC = 0;
let shotShipYou = 0;
let arr2 = [];
let arr3 = [];
let arr4 = [];
let cross = [1, -1, 10, -10];
let lineX = [1, -1];
let lineY = [10, -10];


let game = false;
start.onclick = function(){
    if(ship_1 !== 4 || ship_2 !== 6 || ship_3 !== 6 || ship_4 !== 4){
        alert('Расставте все корабли');
    }
    else{
        game = true;
        alert('В атаку!');
        return game;
    }

};

for(let i = 0; i < td_pc.length; i++){
    td_pc[i].onclick = function(){
        if(shotShipYou === 20){
            alert('Вы выиграли!');
        }
        else if(shotShipPC === 20){
            alert('Вы проиграли!');
        }
        else if(game && shotShipYou < 21 && shotShipPC < 21){
            if(td_pc[i].value === 6 || td_pc[i].value === 7 || td_pc[i].value === 8 || td_pc[i].value === 9 || td_pc[i].value === 10){
                alert('Выстрел уже произведен');
            }
            else if(td_pc[i].value === 1){
                td_pc[i].value = 7;
                shotShipColor(i);
                console.log(td_pc[i]);

                shotShipYou++;

                if(i + 1 < 100 && (i + 1) % 10 !== 0){
                    shotColor(i+1);
                    td_pc[i + 1].value = 6;
                }
                if(i - 1 >= 0 && (i - 1 - 9) % 10 !== 0 ){
                    shotColor(i-1);
                    td_pc[i - 1].value = 6;
                }
                if(i + 10 < 100){
                    shotColor(i+10);
                    td_pc[i + 10].value = 6;
                }
                if(i - 10 >= 0){
                    shotColor(i-10);
                    td_pc[i - 10].value = 6;
                }
                if(i - 11 >= 0 && (i - 11 - 9) % 10 !== 0){
                    shotColor(i-11);
                    td_pc[i - 11].value = 6;
                }
                if(i + 11 < 100 && (i + 11) % 10 !== 0){
                    shotColor(i+11);
                    td_pc[i + 11].value = 6;
                }
                if(i + 9 < 100 && (i + 9 - 9) % 10 !== 0){
                    shotColor(i+9);
                    td_pc[i + 9].value = 6;
                }
                if(i - 9 >= 0 && (i - 9) % 10 !== 0){
                    shotColor(i-9);
                    td_pc[i - 9].value = 6;
                }
                alert('Однопалубный корабль потоплен!');

                youWin(shotShipYou);
            }
            else if(td_pc[i].value === 2){
                td_pc[i].value = 8;
                shotShipColor(i);
                console.log(td_pc[i]);

                if(i+1 < 100 && (i + 1) % 10 !== 0 && td_pc[i+1].value === 8){

                    if(i - 1 >= 0 && (i - 1 - 9) % 10 !== 0 ){
                        shotColor(i-1);
                        td_pc[i - 1].value = 6;
                    }
                    if(i + 10 < 100){
                        shotColor(i+10);
                        td_pc[i + 10].value = 6;
                    }
                    if(i - 10 >= 0){
                        shotColor(i-10);
                        td_pc[i - 10].value = 6;
                    }
                    if(i - 11 >= 0 && (i - 11 - 9) % 10 !== 0){
                        shotColor(i-11);
                        td_pc[i - 11].value = 6;
                    }
                    if(i + 11 < 100 && (i + 11) % 10 !== 0){
                        shotColor(i+11);
                        td_pc[i + 11].value = 6;
                    }
                    if(i + 9 < 100 && (i + 9 - 9) % 10 !== 0){
                        shotColor(i+9);
                        td_pc[i + 9].value = 6;
                    }
                    if(i - 9 >= 0 && (i - 9) % 10 !== 0){
                        shotColor(i-9);
                        td_pc[i - 9].value = 6;
                    }
                    if(i - 8 >= 0 && (i - 8) % 10 !== 0){
                        shotColor(i-8);
                        td_pc[i - 8].value = 6;
                    }
                    if(i + 12 < 100 && (i + 12) % 10 !== 0){
                        shotColor(i+12);
                        td_pc[i + 12].value = 6;
                    }
                    if(i + 2 < 100 && (i + 2) % 10 !== 0){
                        shotColor(i+2);
                        td_pc[i + 2].value = 6;
                    }

                    alert('Двухпалобный корабль потоплен!');
                }
                if(i-1 >= 0 && (i - 1 - 9) % 10 !== 0 && td_pc[i-1].value === 8){

                    if(i - 2 >= 0 && (i - 2 - 9) % 10 !== 0 ){
                        shotColor(i-2);
                        td_pc[i - 2].value = 6;
                    }
                    if(i + 9 < 100){
                        shotColor(i+9);
                        td_pc[i + 9].value = 6;
                    }
                    if(i - 11 >= 0){
                        shotColor(i-11);
                        td_pc[i - 11].value = 6;
                    }
                    if(i - 12 >= 0 && (i - 12 - 9) % 10 !== 0){
                        shotColor(i-12);
                        td_pc[i - 12].value = 6;
                    }
                    if(i + 10 < 100 && (i + 10) % 10 !== 0){
                        shotColor(i+10);
                        td_pc[i + 10].value = 6;
                    }
                    if(i + 8 < 100 && (i + 8 - 9) % 10 !== 0){
                        shotColor(i+8);
                        td_pc[i + 8].value = 6;
                    }
                    if(i - 10 >= 0 && (i - 10) % 10 !== 0){
                        shotColor(i-10);
                        td_pc[i - 10].value = 6;
                    }
                    if(i - 9 >= 0 && (i - 9) % 10 !== 0){
                        shotColor(i-9);
                        td_pc[i - 9].value = 6;
                    }
                    if(i + 11 < 100 && (i + 11) % 10 !== 0){
                        shotColor(i+11);
                        td_pc[i + 11].value = 6;
                    }
                    if(i + 1 < 100 && (i + 1) % 10 !== 0){
                        shotColor(i+1);
                        td_pc[i + 1].value = 6;
                    }

                    alert('Двухпалобный корабль потоплен!');
                }
                if(i-10 >= 0 && td_pc[i-10].value === 8){
                    if(i - 20 >= 0){
                        shotColor(i-20);
                        td_pc[i - 20].value = 6;
                    }
                    if(i + 10 < 100){
                        shotColor(i+10);
                        td_pc[i + 10].value = 6;
                    }
                    if(i - 21 >= 0 && (i - 21 - 9) % 10 !== 0){
                        shotColor(i-21);
                        td_pc[i - 21].value = 6;
                    }
                    if(i - 19 >= 0 && (i - 19) % 10 !== 0){
                        shotColor(i-19);
                        td_pc[i - 19].value = 6;
                    }
                    if(i - 11 >= 0 && (i - 11 - 9) % 10 !== 0){
                        shotColor(i-11);
                        td_pc[i - 11].value = 6;
                    }
                    if(i - 9 >= 0 && (i - 9) % 10 !== 0){
                        shotColor(i-9);
                        td_pc[i - 9].value = 6;
                    }
                    if(i - 1 >= 0 && (i - 1 - 9) % 10 !== 0){
                        shotColor(i-1);
                        td_pc[i - 1].value = 6;
                    }
                    if(i + 1 < 100 && (i + 1) % 10 !== 0){
                        shotColor(i+1);
                        td_pc[i + 1].value = 6;
                    }
                    if(i + 9 < 100 && (i + 9 - 9) % 10 !== 0){
                        shotColor(i+9);
                        td_pc[i + 9].value = 6;
                    }
                    if(i + 11 < 100 && (i + 11) % 10 !== 0){
                        shotColor(i+11);
                        td_pc[i + 11].value = 6;
                    }

                    alert('Двухпалобный корабль потоплен!');
                }

                if(i+10 < 100 && td_pc[i+10].value === 8){
                    if(i - 10 >= 0){
                        shotColor(i-10);
                        td_pc[i - 10].value = 6;
                    }
                    if(i + 20 < 100){
                        shotColor(i+20);
                        td_pc[i + 20].value = 6;
                    }
                    if(i - 11 >= 0 && (i - 11 - 9) % 10 !== 0){
                        shotColor(i-11);
                        td_pc[i - 11].value = 6;
                    }
                    if(i - 9 >= 0 && (i - 9) % 10 !== 0){
                        shotColor(i-9);
                        td_pc[i - 9].value = 6;
                    }
                    if(i - 1 >= 0 && (i - 1 - 9) % 10 !== 0){
                        shotColor(i-1);
                        td_pc[i - 1].value = 6;
                    }
                    if(i + 1 < 100 && (i + 1) % 10 !== 0){
                        shotColor(i+1);
                        td_pc[i + 1].value = 6;
                    }
                    if(i + 9 < 100 && (i + 9 - 9) % 10 !== 0){
                        shotColor(i+9);
                        td_pc[i + 9].value = 6;
                    }
                    if(i + 11 < 100 && (i + 11) % 10 !== 0){
                        shotColor(i+11);
                        td_pc[i + 11].value = 6;
                    }
                    if(i + 19 < 100 && (i + 19 - 9) % 10 !== 0){
                        shotColor(i+19);
                        td_pc[i + 19].value = 6;
                    }
                    if(i + 21 < 100 && (i + 21) % 10 !== 0){
                        shotColor(i+21);
                        td_pc[i + 21].value = 6;
                    }

                    alert('Двухпалобный корабль потоплен!');
                }

                shotShipYou++;
                youWin(shotShipYou);
            }
            else if(td_pc[i].value === 3){
                td_pc[i].value = 9;
                shotShipColor(i);
                console.log(td_pc[i]);

                //переделать алгоритм
                for(let k = 0; k < 3; k++){
                    if(i + 1 - (2*k - (k*2)%(k+1)) < 100 && i + 1 - (2*k - (k*2)%(k+1)) >= 0 &&
                        i + 2 - (2*k - k%2 - (2*k)%(k+1)) < 100 && i + 2 - (2*k - k%2 - (2*k)%(k+1)) >= 0 &&
                        td_pc[i + 1 - (2*k - (k*2)%(k+1))].value === 9 && td_pc[i + 2 - (2*k - k%2 - (2*k)%(k+1))].value === 9){

                        if(i - 1 - k >= 0 && (i - 1 - 9 - k) % 10 !== 0){
                            shotColor(i-1-k);
                            td_pc[i - 1 - k].value = 6;
                        }
                        if(i - 11 - k >= 0 && (i - 11 - 9 - k) % 10 !== 0){
                            shotColor(i-11-k);
                            td_pc[i - 11 - k].value = 6;
                        }
                        if(i + 9 - k < 100 && (i + 9 - 9 - k) % 10 !== 0){
                            shotColor(i+9-k);
                            td_pc[i + 9 - k].value = 6;
                        }
                        if(i - 10 - k >= 0){
                            shotColor(i-10-k);
                            td_pc[i - 10 - k].value = 6;
                        }
                        if(i + 10 - k < 100){
                            shotColor(i+10-k);
                            td_pc[i + 10 - k].value = 6;
                        }
                        if(i - 9 - k >= 0){
                            shotColor(i-9-k);
                            td_pc[i - 9 - k].value = 6;
                        }
                        if(i + 11 - k < 100){
                            shotColor(i+11-k);
                            td_pc[i + 11 - k].value = 6;
                        }
                        if(i + 3 - k < 100 && (i + 3 - k) % 10 !== 0){
                            shotColor(i+3-k);
                            td_pc[i + 3].value = 6;
                        }
                        if(i - 8 - k >= 0 && (i - 8 - k) % 10 !== 0){
                            shotColor(i-8-k);
                            td_pc[i - 8 - k].value = 6;
                        }
                        if(i + 12 - k < 100 && (i + 12 - k) % 10 !== 0){
                            shotColor(i+12-k);
                            td_pc[i + 12 - k].value = 6;
                        }
                        if(i - 7 - k >= 0 && (i - 7 - k) % 10 !== 0){
                            shotColor(i-7-k);
                            td_pc[i - 7 - k].value = 6;
                        }
                        if(i + 13 - k < 100 && (i + 13 - k) % 10 !== 0){
                            shotColor(i+13-k);
                            td_pc[i + 13 - k].value = 6;
                        }

                        alert('Трехпалубный корабль потоплен!');
                    }

                    if(i + 10 - 10*(2*k - (k*2)%(k+1)) < 100 && i + 10 - 10*(2*k - (k*2)%(k+1)) >= 0 &&
                        i + 20 - 10*(2*k - k%2 - (2*k)%(k+1)) < 100 && i + 20 - 10*(2*k - k%2 - (2*k)%(k+1)) >= 0 &&
                        td_pc[i + 10 - 10*(2*k - (k*2)%(k+1))].value === 9 && td_pc[i + 20 - 10*(2*k - k%2 - (2*k)%(k+1))].value === 9){

                        if(i - 10 - 10*k >= 0){
                            shotColor(i - 10 - 10*k);
                            td_pc[i - 10 - 10*k].value = 6;
                        }
                        if(i + 30 - 10*k < 100){
                            shotColor(i + 30 - 10*k);
                            td_pc[i + 30 - 10*k].value = 6;
                        }
                        if(i - 11 - 10*k >= 0 && (i - 11 - 10*k - 9) % 10 !== 0){
                            shotColor(i - 11 - 10*k);
                            td_pc[i - 11 - 10*k].value = 6;
                        }
                        if(i - 9 - 10*k >= 0 && (i - 9 - 10*k) % 10 !== 0){
                            shotColor(i - 9 - 10*k);
                            td_pc[i - 9 - 10*k].value = 6;
                        }
                        if(i - 1 - 10*k >= 0 && (i - 1 - 10*k - 9) % 10 !== 0){
                            shotColor(i - 1 - 10*k);
                            td_pc[i - 1 - 10*k].value = 6;
                        }
                        if(i + 1 - 10*k < 100 && i + 1 - 10*k >=0 && (i + 1 - 10*k) % 10 !== 0){
                            shotColor(i + 1 - 10*k);
                            td_pc[i + 1 - 10*k].value = 6;
                        }
                        if(i + 9 - 10*k < 100 && i + 9 - 10*k >=0 && (i + 9 - 10*k - 9) % 10 !== 0){
                            shotColor(i + 9 - 10*k);
                            td_pc[i + 9 - 10*k].value = 6;
                        }
                        if(i + 11 - 10*k < 100 && i + 11 - 10*k >= 0 && (i + 11 - 10*k) % 10 !== 0){
                            shotColor(i + 11 - 10*k);
                            td_pc[i + 11 - 10*k].value = 6;
                        }
                        if(i + 19 - 10*k < 100 && i + 19 - 10*k >=0 && (i + 19 - 9) % 10 !== 0){
                            shotColor(i+19-10*k);
                            td_pc[i + 19 - 10*k].value = 6;
                        }
                        if(i + 21 - 10*k < 100 && i + 21 - 10*k >= 0 && (i + 21 - 10*k) % 10 !== 0){
                            shotColor(i + 21 - 10*k);
                            td_pc[i + 21 - 10*k].value = 6;
                        }
                        if(i + 29 - 10*k < 100 && (i + 29 - 10*k - 9) % 10 !== 0){
                            shotColor(i+29-10*k);
                            td_pc[i + 29 - 10*k].value = 6;
                        }
                        if(i + 31 - 10*k < 100 && (i + 31 - 10*k) % 10 !== 0){
                            shotColor(i+31-10*k);
                            td_pc[i + 31 - 10*k].value = 6;
                        }

                        alert('Трехпалубный корабль потоплен!');
                    }
                }

                shotShipYou++;
                youWin(shotShipYou);
            }
            else if(td_pc[i].value === 4){
                td_pc[i].value = 10;
                shotShipColor(i);
                console.log(td_pc[i]);

                if(i + 1 < 100 && td_pc[i+1].value === 10 && i + 2 < 100 && td_pc[i+2].value === 10 && i + 3 < 100 && td_pc[i+3].value === 10){
                    if(i - 1 >= 0 && (i - 1 - 9) % 10 !== 0){
                        shotColor(i-1);
                        td_pc[i - 1].value = 6;
                    }
                    if(i - 11 >= 0 && (i - 11 - 9) % 10 !== 0){
                        shotColor(i-11);
                        td_pc[i - 11].value = 6;
                    }
                    if(i + 9 < 100 && (i + 9 - 9) % 10 !== 0){
                        shotColor(i+9);
                        td_pc[i + 9].value = 6;
                    }
                    if(i - 10 >= 0){
                        shotColor(i-10);
                        td_pc[i - 10].value = 6;
                    }
                    if(i + 10 < 100){
                        shotColor(i+10);
                        td_pc[i + 10].value = 6;
                    }
                    if(i - 9 >= 0){
                        shotColor(i-9);
                        td_pc[i - 9].value = 6;
                    }
                    if(i + 11 < 100){
                        shotColor(i+11);
                        td_pc[i + 11].value = 6;
                    }
                    if(i + 4 < 100 && (i + 4) % 10 !== 0){
                        shotColor(i+4);
                        td_pc[i + 4].value = 6;
                    }
                    if(i - 8 >= 0 && (i - 8) % 10 !== 0){
                        shotColor(i-8);
                        td_pc[i - 8].value = 6;
                    }
                    if(i + 12 < 100 && (i + 12) % 10 !== 0){
                        shotColor(i+12);
                        td_pc[i + 12].value = 6;
                    }
                    if(i - 7 >= 0 && (i - 7) % 10 !== 0){
                        shotColor(i-7);
                        td_pc[i - 7].value = 6;
                    }
                    if(i + 13 < 100 && (i + 13) % 10 !== 0){
                        shotColor(i+13);
                        td_pc[i + 13].value = 6;
                    }
                    if(i + 14 < 100 && (i + 14) % 10 !== 0){
                        shotColor(i+14);
                        td_pc[i + 14].value = 6;
                    }
                    if(i - 6 >= 0 && (i - 6) % 10 !== 0){
                        shotColor(i-6);
                        td_pc[i - 6].value = 6;
                    }

                    alert('Четырехпалубный корабль потоплен!');
                }
                if(i - 1 >= 0 && td_pc[i-1].value === 10 && i + 1 < 100 && td_pc[i+1].value === 10 && i + 2 < 100 && td_pc[i+2].value === 10){
                    if(i - 1 - 1>= 0 && (i - 1 - 1 - 9) % 10 !== 0){
                        shotColor(i-1-1);
                        td_pc[i - 1 - 1].value = 6;
                    }
                    if(i - 11 - 1 >= 0 && (i - 11 - 1 - 9) % 10 !== 0){
                        shotColor(i-11-1);
                        td_pc[i - 11 - 1].value = 6;
                    }
                    if(i + 9 - 1 < 100 && (i + 9 - 1 - 9) % 10 !== 0){
                        shotColor(i+9-1);
                        td_pc[i + 9 - 1].value = 6;
                    }
                    if(i - 10 - 1 >= 0){
                        shotColor(i-10-1);
                        td_pc[i - 10 - 1].value = 6;
                    }
                    if(i + 10 - 1 < 100){
                        shotColor(i+10-1);
                        td_pc[i + 10 - 1].value = 6;
                    }
                    if(i - 9 - 1 >= 0){
                        shotColor(i-9-1);
                        td_pc[i - 9 - 1].value = 6;
                    }
                    if(i + 11 - 1 < 100){
                        shotColor(i+11-1);
                        td_pc[i + 11 - 1].value = 6;
                    }
                    if(i + 4 - 1 < 100 && (i + 4 - 1) % 10 !== 0){
                        shotColor(i+4-1);
                        td_pc[i + 4 - 1].value = 6;
                    }
                    if(i - 8 - 1 >= 0 && (i - 8 - 1) % 10 !== 0){
                        shotColor(i-8-1);
                        td_pc[i - 8 - 1].value = 6;
                    }
                    if(i + 12 - 1 < 100 && (i + 12 - 1) % 10 !== 0){
                        shotColor(i+12-1);
                        td_pc[i + 12 - 1].value = 6;
                    }
                    if(i - 7 - 1 >= 0 && (i - 7 - 1) % 10 !== 0){
                        shotColor(i-7-1);
                        td_pc[i - 7 - 1].value = 6;
                    }
                    if(i + 13 - 1 < 100 && (i + 13 - 1) % 10 !== 0){
                        shotColor(i+13-1);
                        td_pc[i + 13 - 1].value = 6;
                    }
                    if(i + 14 - 1 < 100 && (i + 14 - 1) % 10 !== 0){
                        shotColor(i+14-1);
                        td_pc[i + 14 - 1].value = 6;
                    }
                    if(i - 6 - 1 >= 0 && (i - 6 - 1) % 10 !== 0){
                        shotColor(i-6-1);
                        td_pc[i - 6 - 1].value = 6;
                    }

                    alert('Четырехпалубный корабль потоплен!');
                }
                if(i - 2 >= 0 && td_pc[i-2].value === 10 && i - 1 >= 0 && td_pc[i-1].value === 10 && i + 1 < 100 && td_pc[i+1].value === 10){
                    if(i - 1 - 2>= 0 && (i - 1 - 2 - 9) % 10 !== 0){
                        shotColor(i-1-2);
                        td_pc[i - 1 - 2].value = 6;
                    }
                    if(i - 11 - 2 >= 0 && (i - 11 - 2 - 9) % 10 !== 0){
                        shotColor(i-11-2);
                        td_pc[i - 11 - 2].value = 6;
                    }
                    if(i + 9 - 2 < 100 && (i + 9 - 2 - 9) % 10 !== 0){
                        shotColor(i+9-2);
                        td_pc[i + 9 - 2].value = 6;
                    }
                    if(i - 10 - 2 >= 0){
                        shotColor(i-10-2);
                        td_pc[i - 10 - 2].value = 6;
                    }
                    if(i + 10 - 2 < 100){
                        shotColor(i+10-2);
                        td_pc[i + 10 - 2].value = 6;
                    }
                    if(i - 9 - 2 >= 0){
                        shotColor(i-9-2);
                        td_pc[i - 9 - 2].value = 6;
                    }
                    if(i + 11 - 2 < 100){
                        shotColor(i+11-2);
                        td_pc[i + 11 - 2].value = 6;
                    }
                    if(i + 4 - 2 < 100 && (i + 4 - 2) % 10 !== 0){
                        shotColor(i+4-2);
                        td_pc[i + 4 - 2].value = 6;
                    }
                    if(i - 8 - 2 >= 0 && (i - 8 - 2) % 10 !== 0){
                        shotColor(i-8-2);
                        td_pc[i - 8 - 2].value = 6;
                    }
                    if(i + 12 - 2 < 100 && (i + 12 - 2) % 10 !== 0){
                        shotColor(i+12-2);
                        td_pc[i + 12 - 2].value = 6;
                    }
                    if(i - 7 - 2 >= 0 && (i - 7 - 2) % 10 !== 0){
                        shotColor(i-7-2);
                        td_pc[i - 7 - 2].value = 6;
                    }
                    if(i + 13 - 2 < 100 && (i + 13 - 2) % 10 !== 0){
                        shotColor(i+13-2);
                        td_pc[i + 13 - 2].value = 6;
                    }
                    if(i + 14 - 2 < 100 && (i + 14 - 2) % 10 !== 0){
                        shotColor(i+14-2);
                        td_pc[i + 14 - 2].value = 6;
                    }
                    if(i - 6 - 2 >= 0 && (i - 6 - 2) % 10 !== 0){
                        shotColor(i-6-2);
                        td_pc[i - 6 - 2].value = 6;
                    }

                    alert('Четырехпалубный корабль потоплен!');
                }
                if(i - 3 >= 0 && td_pc[i-3].value === 10 && i - 2 >= 0 && td_pc[i-2].value === 10 && i - 1 >= 0 && td_pc[i-1].value === 10){
                    if(i - 1 - 3>= 0 && (i - 1 - 3 - 9) % 10 !== 0){
                        shotColor(i-1-3);
                        td_pc[i - 1 - 3].value = 6;
                    }
                    if(i - 11 - 3 >= 0 && (i - 11 - 3 - 9) % 10 !== 0){
                        shotColor(i-11-3);
                        td_pc[i - 11 - 3].value = 6;
                    }
                    if(i + 9 - 3 < 100 && (i + 9 - 3 - 9) % 10 !== 0){
                        shotColor(i+9-3);
                        td_pc[i + 9 - 3].value = 6;
                    }
                    if(i - 10 - 3 >= 0){
                        shotColor(i-10-3);
                        td_pc[i - 10 - 3].value = 6;
                    }
                    if(i + 10 - 3 < 100){
                        shotColor(i+10-3);
                        td_pc[i + 10 - 3].value = 6;
                    }
                    if(i - 9 - 3 >= 0){
                        shotColor(i-9-3);
                        td_pc[i - 9 - 3].value = 6;
                    }
                    if(i + 11 - 3 < 100){
                        shotColor(i+11-3);
                        td_pc[i + 11 - 3].value = 6;
                    }
                    if(i + 4 - 3 < 100 && (i + 4 - 3) % 10 !== 0){
                        shotColor(i+4-3);
                        td_pc[i + 4 - 3].value = 6;
                    }
                    if(i - 8 - 3 >= 0 && (i - 8 - 3) % 10 !== 0){
                        shotColor(i-8-3);
                        td_pc[i - 8 - 3].value = 6;
                    }
                    if(i + 12 - 3 < 100 && (i + 12 - 3) % 10 !== 0){
                        shotColor(i+12-3);
                        td_pc[i + 12 - 3].value = 6;
                    }
                    if(i - 7 - 3 >= 0 && (i - 7 - 3) % 10 !== 0){
                        shotColor(i-7-3);
                        td_pc[i - 7 - 3].value = 6;
                    }
                    if(i + 13 - 3 < 100 && (i + 13 - 3) % 10 !== 0){
                        shotColor(i+13-3);
                        td_pc[i + 13 - 3].value = 6;
                    }
                    if(i + 14 - 3 < 100 && (i + 14 - 3) % 10 !== 0){
                        shotColor(i+14-3);
                        td_pc[i + 14 - 3].value = 6;
                    }
                    if(i - 6 - 3 >= 0 && (i - 6 - 3) % 10 !== 0){
                        shotColor(i-6-3);
                        td_pc[i - 6 - 3].value = 6;
                    }

                    alert('Четырехпалубный корабль потоплен!');
                }

                if(i + 10 < 100 && td_pc[i+10].value === 10 && i + 20 < 100 && td_pc[i+20].value === 10 && i + 30 < 100 && td_pc[i+30].value === 10){
                    if(i - 10 >= 0){
                        shotColor(i-10);
                        td_pc[i - 10].value = 6;
                    }
                    if(i + 40 < 100){
                        shotColor(i+40);
                        td_pc[i + 40].value = 6;
                    }
                    if(i - 11 >= 0 && (i - 11 - 9) % 10 !== 0){
                        shotColor(i-11);
                        td_pc[i - 11].value = 6;
                    }
                    if(i - 9 >= 0 && (i - 9) % 10 !== 0){
                        shotColor(i-9);
                        td_pc[i - 9].value = 6;
                    }
                    if(i - 1 >= 0 && (i - 1 - 9) % 10 !== 0){
                        shotColor(i-1);
                        td_pc[i - 1].value = 6;
                    }
                    if(i + 1 < 100 && (i + 1) % 10 !== 0){
                        shotColor(i+1);
                        td_pc[i + 1].value = 6;
                    }
                    if(i + 9 < 100 && (i + 9 - 9) % 10 !== 0){
                        shotColor(i+9);
                        td_pc[i + 9].value = 6;
                    }
                    if(i + 11 < 100 && (i + 11) % 10 !== 0){
                        shotColor(i+11);
                        td_pc[i + 11].value = 6;
                    }
                    if(i + 19 < 100 && (i + 19 - 9) % 10 !== 0){
                        shotColor(i+19);
                        td_pc[i + 19].value = 6;
                    }
                    if(i + 21 < 100 && (i + 21) % 10 !== 0){
                        shotColor(i+21);
                        td_pc[i + 21].value = 6;
                    }
                    if(i + 29 < 100 && (i + 29 - 9) % 10 !== 0){
                        shotColor(i+29);
                        td_pc[i + 29].value = 6;
                    }
                    if(i + 31 < 100 && (i + 31) % 10 !== 0){
                        shotColor(i+31);
                        td_pc[i + 31].value = 6;
                    }
                    if(i + 39 < 100 && (i + 39 - 9) % 10 !== 0){
                        shotColor(i+39);
                        td_pc[i + 39].value = 6;
                    }
                    if(i + 41 < 100 && (i + 41) % 10 !== 0){
                        shotColor(i+41);
                        td_pc[i + 41].value = 6;
                    }
                    alert('Четырехпалубный корабль потоплен!');
                }

                if(i - 10 >= 0 && td_pc[i-10].value === 10 && i + 10 < 100 && td_pc[i+10].value === 10 && i + 20 < 100 && td_pc[i+20].value === 10){
                    if(i - 10 - 10 >= 0){
                        shotColor(i-10-10);
                        td_pc[i - 10 - 10].value = 6;
                    }
                    if(i + 40 - 10 < 100){
                        shotColor(i+40-10);
                        td_pc[i + 40 - 10].value = 6;
                    }
                    if(i - 11 - 10 >= 0 && (i - 11 - 10 - 9) % 10 !== 0){
                        shotColor(i-11-10);
                        td_pc[i - 11 - 10].value = 6;
                    }
                    if(i - 9 - 10 >= 0 && (i - 9 - 10) % 10 !== 0){
                        shotColor(i-9-10);
                        td_pc[i - 9 - 10].value = 6;
                    }
                    if(i - 1 - 10 >= 0 && (i - 1 - 10 - 9) % 10 !== 0){
                        shotColor(i-1-10);
                        td_pc[i - 1 - 10].value = 6;
                    }
                    if(i + 1 - 10 < 100 && (i + 1 - 10) % 10 !== 0){
                        shotColor(i+1-10);
                        td_pc[i + 1 - 10].value = 6;
                    }
                    if(i + 9 - 10 < 100 && (i + 9 - 10 - 9) % 10 !== 0){
                        shotColor(i+9-10);
                        td_pc[i + 9 - 10].value = 6;
                    }
                    if(i + 11 - 10 < 100 && (i + 11 - 10) % 10 !== 0){
                        shotColor(i+11-10);
                        td_pc[i + 11 - 10].value = 6;
                    }
                    if(i + 19 - 10 < 100 && (i + 19 - 10 - 9) % 10 !== 0){
                        shotColor(i+19-10);
                        td_pc[i + 19 - 10].value = 6;
                    }
                    if(i + 21 - 10 < 100 && (i + 21 - 10) % 10 !== 0){
                        shotColor(i+21-10);
                        td_pc[i + 21 - 10].value = 6;
                    }
                    if(i + 29 - 10 < 100 && (i + 29 - 10 - 9) % 10 !== 0){
                        shotColor(i+29-10);
                        td_pc[i + 29 - 10].value = 6;
                    }
                    if(i + 31 - 10 < 100 && (i + 31 - 10) % 10 !== 0){
                        shotColor(i+31-10);
                        td_pc[i + 31 - 10].value = 6;
                    }
                    if(i + 39 - 10 < 100 && (i + 39 - 10 - 9) % 10 !== 0){
                        shotColor(i+39-10);
                        td_pc[i + 39 - 10].value = 6;
                    }
                    if(i + 41 - 10 < 100 && (i + 41 - 10) % 10 !== 0){
                        shotColor(i+41-10);
                        td_pc[i + 41 - 10].value = 6;
                    }
                    alert('Четырехпалубный корабль потоплен!');
                }
                if(i - 20 >= 0 && td_pc[i-20].value === 10 && i - 10 > 0 && td_pc[i-10].value === 10 && i + 10 < 100 && td_pc[i+10].value === 10){
                    if(i - 10 - 20 >= 0){
                        shotColor(i-10-20);
                        td_pc[i - 10 - 20].value = 6;
                    }
                    if(i + 40 - 20 < 100){
                        shotColor(i+40-20);
                        td_pc[i + 40 - 20].value = 6;
                    }
                    if(i - 11 - 20 >= 0 && (i - 11 - 20 - 9) % 10 !== 0){
                        shotColor(i-11-20);
                        td_pc[i - 11 - 20].value = 6;
                    }
                    if(i - 9 - 20 >= 0 && (i - 9 - 20) % 10 !== 0){
                        shotColor(i-9-20);
                        td_pc[i - 9 - 20].value = 6;
                    }
                    if(i - 1 - 20 >= 0 && (i - 1 - 20 - 9) % 10 !== 0){
                        shotColor(i-1-20);
                        td_pc[i - 1 - 20].value = 6;
                    }
                    if(i + 1 - 20 < 100 && (i + 1 - 20) % 10 !== 0){
                        shotColor(i+1-20);
                        td_pc[i + 1 - 20].value = 6;
                    }
                    if(i + 9 - 20 < 100 && (i + 9 - 20 - 9) % 10 !== 0){
                        shotColor(i+9-20);
                        td_pc[i + 9 - 20].value = 6;
                    }
                    if(i + 11 - 20 < 100 && (i + 11 - 20) % 10 !== 0){
                        shotColor(i+11-20);
                        td_pc[i + 11 - 20].value = 6;
                    }
                    if(i + 19 - 20 < 100 && (i + 19 - 20 - 9) % 10 !== 0){
                        shotColor(i+19-20);
                        td_pc[i + 19 - 20].value = 6;
                    }
                    if(i + 21 - 20 < 100 && (i + 21 - 20) % 10 !== 0){
                        shotColor(i+21-20);
                        td_pc[i + 21 - 20].value = 6;
                    }
                    if(i + 29 - 20 < 100 && (i + 29 - 20 - 9) % 10 !== 0){
                        shotColor(i+29-20);
                        td_pc[i + 29 - 20].value = 6;
                    }
                    if(i + 31 - 20 < 100 && (i + 31 - 20) % 10 !== 0){
                        shotColor(i+31-20);
                        td_pc[i + 31 - 20].value = 6;
                    }
                    if(i + 39 - 20 < 100 && (i + 39 - 20 - 9) % 10 !== 0){
                        shotColor(i+39-20);
                        td_pc[i + 39 - 20].value = 6;
                    }
                    if(i + 41 - 20 < 100 && (i + 41 - 20) % 10 !== 0){
                        shotColor(i+41-20);
                        td_pc[i + 41 - 20].value = 6;
                    }
                    alert('Четырехпалубный корабль потоплен!');
                }
                if(i - 30 >= 0 && td_pc[i-30].value === 10 && i - 20 >= 0 && td_pc[i-20].value === 10 && i - 10 >= 0 && td_pc[i-10].value === 10){
                    if(i - 10 - 30 >= 0){
                        shotColor(i-10-30);
                        td_pc[i - 10 - 30].value = 6;
                    }
                    if(i + 40 - 30 < 100){
                        shotColor(i+40-30);
                        td_pc[i + 40 - 30].value = 6;
                    }
                    if(i - 11 - 30 >= 0 && (i - 11 - 30 - 9) % 10 !== 0){
                        shotColor(i-11-30);
                        td_pc[i - 11 - 30].value = 6;
                    }
                    if(i - 9 - 30 >= 0 && (i - 9 - 30) % 10 !== 0){
                        shotColor(i-9-30);
                        td_pc[i - 9 - 30].value = 6;
                    }
                    if(i - 1 - 30 >= 0 && (i - 1 - 30 - 9) % 10 !== 0){
                        shotColor(i-1-30);
                        td_pc[i - 1 - 30].value = 6;
                    }
                    if(i + 1 - 30 < 100 && (i + 1 - 30) % 10 !== 0){
                        shotColor(i+1-30);
                        td_pc[i + 1 - 30].value = 6;
                    }
                    if(i + 9 - 30 < 100 && (i + 9 - 30 - 9) % 10 !== 0){
                        shotColor(i+9-30);
                        td_pc[i + 9 - 30].value = 6;
                    }
                    if(i + 11 - 30 < 100 && (i + 11 - 30) % 10 !== 0){
                        shotColor(i+11-30);
                        td_pc[i + 11 - 30].value = 6;
                    }
                    if(i + 19 - 30 < 100 && (i + 19 - 30 - 9) % 10 !== 0){
                        shotColor(i+19-30);
                        td_pc[i + 19 - 30].value = 6;
                    }
                    if(i + 21 - 30 < 100 && (i + 21 - 30) % 10 !== 0){
                        shotColor(i+21-30);
                        td_pc[i + 21 - 30].value = 6;
                    }
                    if(i + 29 - 30 < 100 && (i + 29 - 30 - 9) % 10 !== 0){
                        shotColor(i+29-30);
                        td_pc[i + 29 - 30].value = 6;
                    }
                    if(i + 31 - 30 < 100 && (i + 31 - 30) % 10 !== 0){
                        shotColor(i+31-30);
                        td_pc[i + 31 - 30].value = 6;
                    }
                    if(i + 39 - 30 < 100 && (i + 39 - 30 - 9) % 10 !== 0){
                        shotColor(i+39-30);
                        td_pc[i + 39 - 30].value = 6;
                    }
                    if(i + 41 - 30 < 100 && (i + 41 - 30) % 10 !== 0){
                        shotColor(i+41-30);
                        td_pc[i + 41 - 30].value = 6;
                    }
                    alert('Четырехпалубный корабль потоплен!');
                }

                shotShipYou++;
                youWin(shotShipYou);
            }
            else if(td_pc[i].value === 5 || td_pc[i].value === 0){
                td_pc[i].value = 6;
                shotColor(i);

                let shotPC = function(){
                    let randShot;
                    let trandShot = true;

                    sort(arr2);
                    sort(arr3);
                    sort(arr4);

                    if(arr2.length === 1){
                        trandShot = false;
                        let randCross;
                        let trandCross = true;

                        while(trandCross){
                            trandCross = false;
                            randCross = Math.floor(Math.random()*4);
                            randShot = arr2[0] + cross[randCross];
                            if( (cross[randCross] === 1 && randShot < 100 && randShot % 10 === 0) ||
                                (cross[randCross] === 1 && randShot > 99) ||
                                (cross[randCross] === -1 && randShot >= 0 && (randShot - 9) % 10 === 0) ||
                                (cross[randCross] === -1 && randShot < 0) ||
                                (cross[randCross] === 10 && randShot > 99) ||
                                (cross[randCross] === -10 && randShot < 0) ||
                                td_you[randShot].value === 6 || td_you[randShot].value === 7 || td_you[randShot].value === 8 || td_you[randShot].value === 9 || td_you[randShot].value === 10){
                                trandCross = true;
                            }
                        }
                    }

                    if(arr3.length === 1){
                        trandShot = false;
                        let randCross;
                        let trandCross = true;

                        while(trandCross){
                            trandCross = false;
                            randCross = Math.floor(Math.random()*4);
                            randShot = arr3[0] + cross[randCross];
                            if( (cross[randCross] === 1 && randShot < 100 && randShot % 10 === 0) ||
                                (cross[randCross] === 1 && randShot > 99) ||
                                (cross[randCross] === -1 && randShot >= 0 && (randShot - 9) % 10 === 0) ||
                                (cross[randCross] === -1 && randShot < 0) ||
                                (cross[randCross] === 10 && randShot > 99) ||
                                (cross[randCross] === -10 && randShot < 0) ||
                                td_you[randShot].value === 6 || td_you[randShot].value === 7 || td_you[randShot].value === 8 || td_you[randShot].value === 9 || td_you[randShot].value === 10){
                                trandCross = true;
                            }
                        }
                    }

                    if(arr3.length === 2){
                        trandShot = false;

                        sort(arr3);

                        console.log(trandShot);
                        console.log(arr3);

                        if(arr3[1] - arr3[0] === 1){
                            let randLineX;
                            let trandLineX = true;

                            while (trandLineX) {
                                trandLineX = false;
                                randLineX = Math.floor(Math.random()*2);
                                if(lineX[randLineX] === 1){
                                    randShot = arr3[1] + lineX[randLineX];

                                    if((randShot < 100 && randShot % 10 === 0) ||
                                        randShot > 99 ||
                                        td_you[randShot].value === 6 || td_you[randShot].value === 7 || td_you[randShot].value === 8 || td_you[randShot].value === 9 || td_you[randShot].value === 10){
                                        trandLineX = true;
                                    }

                                }
                                if(lineX[randLineX] === -1){
                                    randShot = arr3[0] + lineX[randLineX];

                                    if((randShot >= 0 && (randShot - 9) % 10 === 0) ||
                                        randShot < 0 ||
                                        td_you[randShot].value === 6 || td_you[randShot].value === 7 || td_you[randShot].value === 8 || td_you[randShot].value === 9 || td_you[randShot].value === 10){
                                        trandLineX = true;
                                    }
                                }
                            }

                        }
                        if(arr3[1] - arr3[0] === 10){
                            let randLineY;
                            let trandLineY = true;

                            while (trandLineY) {
                                trandLineY = false;
                                randLineY = Math.floor(Math.random()*2);

                                if(lineY[randLineY] === 10){
                                    randShot = arr3[1] + lineY[randLineY];

                                    if(randShot > 99 ||
                                        td_you[randShot].value === 6 || td_you[randShot].value === 7 || td_you[randShot].value === 8 || td_you[randShot].value === 9 || td_you[randShot].value === 10){
                                        trandLineY = true;
                                    }

                                }
                                if(lineY[randLineY] === -10){
                                    randShot = arr3[0] - 10;

                                    if(randShot < 0 ||
                                        td_you[randShot].value === undefined ||
                                        td_you[randShot].value === 6 || td_you[randShot].value === 7 || td_you[randShot].value === 8 || td_you[randShot].value === 9 || td_you[randShot].value === 10){
                                        trandLineY = true;
                                    }
                                }
                            }
                            console.log(randShot);
                        }
                    }

                    if(arr4.length === 1){
                        trandShot = false;
                        let randCross;
                        let trandCross = true;

                        while(trandCross){
                            trandCross = false;
                            randCross = Math.floor(Math.random()*4);
                            randShot = arr4[0] + cross[randCross];
                            if( (cross[randCross] === 1 && randShot < 100 && randShot % 10 === 0) ||
                                (cross[randCross] === 1 && randShot > 99) ||
                                (cross[randCross] === -1 && randShot >= 0 && (randShot - 9) % 10 === 0) ||
                                (cross[randCross] === -1 && randShot < 0) ||
                                (cross[randCross] === 10 && randShot > 99) ||
                                (cross[randCross] === -10 && randShot < 0) ||
                                td_you[randShot].value === 6 || td_you[randShot].value === 7 || td_you[randShot].value === 8 || td_you[randShot].value === 9 || td_you[randShot].value === 10){
                                trandCross = true;
                            }
                        }
                    }

                    if(arr4.length === 2){
                        trandShot = false;

                        sort(arr4);
                        console.log(trandShot);
                        console.log(arr4);

                        if(arr4[1] - arr4[0] === 1){
                            let randLineX;
                            let trandLineX = true;

                            while (trandLineX) {
                                trandLineX = false;
                                randLineX = Math.floor(Math.random()*2);
                                if(lineX[randLineX] === 1){
                                    randShot = arr4[1] + lineX[randLineX];

                                    if((randShot < 100 && randShot % 10 === 0) ||
                                        randShot > 99 ||
                                        td_you[randShot].value === 6 || td_you[randShot].value === 7 || td_you[randShot].value === 8 || td_you[randShot].value === 9 || td_you[randShot].value === 10){
                                        trandLineX = true;
                                    }

                                }
                                if(lineX[randLineX] === -1){
                                    randShot = arr4[0] + lineX[randLineX];

                                    if((randShot >= 0 && (randShot - 9) % 10 === 0) ||
                                        randShot < 0 ||
                                        td_you[randShot].value === 6 || td_you[randShot].value === 7 || td_you[randShot].value === 8 || td_you[randShot].value === 9 || td_you[randShot].value === 10){
                                        trandLineX = true;
                                    }
                                }
                            }
                        }
                        if(arr4[1] - arr4[0] === 10){
                            let randLineY;
                            let trandLineY = true;

                            while (trandLineY) {
                                trandLineY = false;
                                randLineY = Math.floor(Math.random()*2);

                                if(lineY[randLineY] === 10){
                                    randShot = arr4[1] + lineY[randLineY];

                                    if(randShot > 99 ||
                                        td_you[randShot].value === 6 || td_you[randShot].value === 7 || td_you[randShot].value === 8 || td_you[randShot].value === 9 || td_you[randShot].value === 10){
                                        trandLineY = true;
                                    }

                                }
                                if(lineY[randLineY] === -10){
                                    randShot = arr4[0] - 10;

                                    if(randShot < 0 ||
                                        td_you[randShot].value === undefined ||
                                        td_you[randShot].value === 6 || td_you[randShot].value === 7 || td_you[randShot].value === 8 || td_you[randShot].value === 9 || td_you[randShot].value === 10){
                                        trandLineY = true;
                                    }
                                }
                            }
                            console.log(randShot);
                        }
                    }

                    if(arr4.length === 3){
                        trandShot = false;

                        sort(arr4);
                        console.log(trandShot);
                        console.log(arr4);

                        if(arr4[1] - arr4[0] === 1){
                            let randLineX;
                            let trandLineX = true;

                            while (trandLineX) {
                                trandLineX = false;
                                randLineX = Math.floor(Math.random()*2);
                                if(lineX[randLineX] === 1){
                                    randShot = arr4[2] + lineX[randLineX];

                                    if((randShot < 100 && randShot % 10 === 0) ||
                                        randShot > 99 ||
                                        td_you[randShot].value === 6 || td_you[randShot].value === 7 || td_you[randShot].value === 8 || td_you[randShot].value === 9 || td_you[randShot].value === 10){
                                        trandLineX = true;
                                    }

                                }
                                if(lineX[randLineX] === -1){
                                    randShot = arr4[0] + lineX[randLineX];

                                    if((randShot >= 0 && (randShot - 9) % 10 === 0) ||
                                        randShot < 0 ||
                                        td_you[randShot].value === 6 || td_you[randShot].value === 7 || td_you[randShot].value === 8 || td_you[randShot].value === 9 || td_you[randShot].value === 10){
                                        trandLineX = true;
                                    }
                                }
                            }

                        }
                        if(arr4[1] - arr4[0] === 10){
                            let randLineY;
                            let trandLineY = true;

                            while (trandLineY) {
                                trandLineY = false;
                                randLineY = Math.floor(Math.random()*2);

                                if(lineY[randLineY] === 10){
                                    randShot = arr4[2] + lineY[randLineY];

                                    if(randShot > 99 ||
                                        td_you[randShot].value === 6 || td_you[randShot].value === 7 || td_you[randShot].value === 8 || td_you[randShot].value === 9 || td_you[randShot].value === 10){
                                        trandLineY = true;
                                    }

                                }
                                if(lineY[randLineY] === -10){
                                    randShot = arr4[0] - 10;

                                    if(randShot < 0 ||
                                        td_you[randShot].value === undefined ||
                                        td_you[randShot].value === 6 || td_you[randShot].value === 7 || td_you[randShot].value === 8 || td_you[randShot].value === 9 || td_you[randShot].value === 10){
                                        trandLineY = true;
                                    }
                                }
                            }
                            console.log(randShot);
                        }
                    }

                    while (trandShot) {
                        randShot = Math.floor(Math.random()*100);
                        trandShot = false;
                        if(td_you[randShot].value === 6 || td_you[randShot].value === 7 || td_you[randShot].value === 8 || td_you[randShot].value === 9 || td_you[randShot].value === 10){
                            trandShot = true;
                        }
                    }

                    if(td_you[randShot].value === 1){
                        td_you[randShot].value = 7;
                        shotShipColorPC(randShot);

                        if(randShot + 1 < 100 && (randShot + 1) % 10 !== 0){
                            shotColorPC(randShot + 1);
                            td_you[randShot + 1].value = 6;
                        }
                        if(randShot - 1 >= 0 && (randShot - 1 - 9) % 10 !== 0 ){
                            shotColorPC(randShot - 1);
                            td_you[randShot - 1].value = 6;
                        }
                        if(randShot + 10 < 100){
                            shotColorPC(randShot + 10);
                            td_you[randShot + 10].value = 6;
                        }
                        if(randShot - 10 >= 0){
                            shotColorPC(randShot - 10);
                            td_you[randShot - 10].value = 6;
                        }
                        if(randShot - 11 >= 0 && (randShot - 11 - 9) % 10 !== 0){
                            shotColorPC(randShot - 11);
                            td_you[randShot - 11].value = 6;
                        }
                        if(randShot + 11 < 100 && (randShot + 11) % 10 !== 0){
                            shotColorPC(randShot + 11);
                            td_you[randShot + 11].value = 6;
                        }
                        if(randShot + 9 < 100 && (randShot + 9 - 9) % 10 !== 0){
                            shotColorPC(randShot + 9);
                            td_you[randShot + 9].value = 6;
                        }
                        if(randShot - 9 >= 0 && (randShot - 9) % 10 !== 0){
                            shotColorPC(randShot - 9);
                            td_you[randShot - 9].value = 6;
                        }

                        shotShipPC++;
                        pcWin(shotShipPC);
                        if(shotShipPC < 20){
                            setTimeout(shotPC, 1000);
                        }
                    }

                    if(td_you[randShot].value === 2){
                        td_you[randShot].value = 8;
                        shotShipColorPC(randShot);
                        arr2.push(randShot);
                        sort(arr2);

                        shotShipPC++;
                        pcWin(shotShipPC);
                        console.log(arr2.length);

                        if(arr2.length === 2){
                            sort(arr2);
                            if(arr2[1] - arr2[0] === 1){
                                if(arr2[0] - 1 >= 0 && (arr2[0] - 1 - 9) % 10 !== 0){
                                    shotColorPC(arr2[0] - 1);
                                    td_you[arr2[0] - 1].value = 6;
                                }
                                if(arr2[0] - 11 >= 0 && (arr2[0] - 11 - 9) % 10 !== 0){
                                    shotColorPC(arr2[0] - 11);
                                    td_you[arr2[0] - 11].value = 6;
                                }
                                if(arr2[0] + 9 < 100 && (arr2[0] + 9 - 9) % 10 !== 0){
                                    shotColorPC(arr2[0] + 9);
                                    td_you[arr2[0] + 9].value = 6;
                                }
                                if(arr2[0] - 10 >= 0){
                                    shotColorPC(arr2[0] - 10);
                                    td_you[arr2[0] - 10].value = 6;
                                }
                                if(arr2[0] + 10 < 100){
                                    shotColorPC(arr2[0] + 10);
                                    td_you[arr2[0] + 10].value = 6;
                                }
                                if(arr2[0] - 9 >= 0){
                                    shotColorPC(arr2[0] - 9);
                                    td_you[arr2[0] - 9].value = 6;
                                }
                                if(arr2[0] + 11 < 100){
                                    shotColorPC(arr2[0] + 11);
                                    td_you[arr2[0] + 11].value = 6;
                                }
                                if(arr2[0] + 2 < 100 && (arr2[0] + 2) % 10 !== 0){
                                    shotColorPC(arr2[0] + 2);
                                    td_you[arr2[0] + 2].value = 6;
                                }
                                if(arr2[0] - 8 >= 0 && (arr2[0] - 8) % 10 !== 0){
                                    shotColorPC(arr2[0] - 8);
                                    td_you[arr2[0] - 8].value = 6;
                                }
                                if(arr2[0] + 12 < 100 && (arr2[0] + 12) % 10 !== 0){
                                    shotColorPC(arr2[0] + 12);
                                    td_you[arr2[0] + 12].value = 6;
                                }

                            }
                            else if(arr2[1] - arr2[0] === 10){
                                if(arr2[0] - 10 >= 0){
                                    shotColorPC(arr2[0] - 10);
                                    td_you[arr2[0] - 10].value = 6;
                                }
                                if(arr2[0] + 20 < 100){
                                    shotColorPC(arr2[0] + 20);
                                    td_you[arr2[0] + 20].value = 6;
                                }
                                if(arr2[0] - 11 >= 0 && (arr2[0] - 11 - 9) % 10 !== 0){
                                    shotColorPC(arr2[0] - 11);
                                    td_you[arr2[0] - 11].value = 6;
                                }
                                if(arr2[0] - 9 >= 0 && (arr2[0] - 9) % 10 !== 0){
                                    shotColorPC(arr2[0] - 9);
                                    td_you[arr2[0] - 9].value = 6;
                                }
                                if(arr2[0] - 1 >= 0 && (arr2[0] - 1 - 9) % 10 !== 0){
                                    shotColorPC(arr2[0] - 1);
                                    td_you[arr2[0] - 1].value = 6;
                                }
                                if(arr2[0] + 1 < 100 && (arr2[0] + 1) % 10 !== 0){
                                    shotColorPC(arr2[0] + 1);
                                    td_you[arr2[0] + 1].value = 6;
                                }
                                if(arr2[0] + 9 < 100 && (arr2[0] + 9 - 9) % 10 !== 0){
                                    shotColorPC(arr2[0] + 9);
                                    td_you[arr2[0] + 9].value = 6;
                                }
                                if(arr2[0] + 11 < 100 && (arr2[0] + 11) % 10 !== 0){
                                    shotColorPC(arr2[0] + 11);
                                    td_you[arr2[0] + 11].value = 6;
                                }
                                if(arr2[0] + 19 < 100 && (arr2[0] + 19 - 9) % 10 !== 0){
                                    shotColorPC(arr2[0] + 19);
                                    td_you[arr2[0] + 19].value = 6;
                                }
                                if(arr2[0] + 21 < 100 && (arr2[0] + 21) % 10 !== 0){
                                    shotColorPC(arr2[0] + 21);
                                    td_you[arr2[0] + 21].value = 6;
                                }
                            }
                            arr2 = [];
                            console.log(arr2);
                            console.log('crash ship 2');
                        }

                        if(shotShipPC < 20){
                            setTimeout(shotPC, 1000);
                        }
                    }

                    if(td_you[randShot].value === 3){
                        td_you[randShot].value = 9;
                        shotShipColorPC(randShot);
                        arr3.push(randShot);
                        sort(arr3);

                        shotShipPC++;
                        pcWin(shotShipPC);
                        console.log(arr3.length);

                        if(arr3.length === 3){
                            sort(arr3);

                            if(arr3[1] - arr3[0] === 1){
                                if(arr3[0] - 1 >= 0 && (arr3[0] - 1 - 9) % 10 !== 0){
                                    shotColorPC(arr3[0] - 1);
                                    td_you[arr3[0] - 1].value = 6;
                                }
                                if(arr3[0] - 11 >= 0 && (arr3[0] - 11 - 9) % 10 !== 0){
                                    shotColorPC(arr3[0] - 11);
                                    td_you[arr3[0] - 11].value = 6;
                                }
                                if(arr3[0] + 9 < 100 && (arr3[0] + 9 - 9) % 10 !== 0){
                                    shotColorPC(arr3[0] + 9);
                                    td_you[arr3[0] + 9].value = 6;
                                }
                                if(arr3[0] - 10 >= 0){
                                    shotColorPC(arr3[0] - 10);
                                    td_you[arr3[0] - 10].value = 6;
                                }
                                if(arr3[0] + 10 < 100){
                                    shotColorPC(arr3[0] + 10);
                                    td_you[arr3[0] + 10].value = 6;
                                }
                                if(arr3[0] - 9 >= 0){
                                    shotColorPC(arr3[0] - 9);
                                    td_you[arr3[0] - 9].value = 6;
                                }
                                if(arr3[0] + 11 < 100){
                                    shotColorPC(arr3[0] + 11);
                                    td_you[arr3[0] + 11].value = 6;
                                }
                                if(arr3[0] + 3 < 100 && (arr3[0] + 3) % 10 !== 0){
                                    shotColorPC(arr3[0] + 3);
                                    td_you[arr3[0] + 3].value = 6;
                                }
                                if(arr3[0] - 8 >= 0 && (arr3[0] - 8) % 10 !== 0){
                                    shotColorPC(arr3[0] - 8);
                                    td_you[arr3[0] - 8].value = 6;
                                }
                                if(arr3[0] + 12 < 100 && (arr3[0] + 12) % 10 !== 0){
                                    shotColorPC(arr3[0] + 12);
                                    td_you[arr3[0] + 12].value = 6;
                                }
                                if(arr3[0] - 7 >= 0 && (arr3[0] - 7) % 10 !== 0){
                                    shotColorPC(arr3[0] - 7);
                                    td_you[arr3[0] - 7].value = 6;
                                }
                                if(arr3[0] + 13 < 100 && (arr3[0] + 13) % 10 !== 0){
                                    shotColorPC(arr3[0] + 13);
                                    td_you[arr3[0] + 13].value = 6;
                                }
                            }
                            else if(arr3[1] - arr3[0] === 10){
                                if(arr3[0] - 10 >= 0){
                                    shotColorPC(arr3[0] - 10);
                                    td_you[arr3[0] - 10].value = 6;
                                }
                                if(arr3[0] + 30 < 100){
                                    shotColorPC(arr3[0] + 30);
                                    td_you[arr3[0] + 30].value = 6;
                                }
                                if(arr3[0] - 11 >= 0 && (arr3[0] - 11 - 9) % 10 !== 0){
                                    shotColorPC(arr3[0] - 11);
                                    td_you[arr3[0] - 11].value = 6;
                                }
                                if(arr3[0] - 9 >= 0 && (arr3[0] - 9) % 10 !== 0){
                                    shotColorPC(arr3[0] - 9);
                                    td_you[arr3[0] - 9].value = 6;
                                }
                                if(arr3[0] - 1 >= 0 && (arr3[0] - 1 - 9) % 10 !== 0){
                                    shotColorPC(arr3[0] - 1);
                                    td_you[arr3[0] - 1].value = 6;
                                }
                                if(arr3[0] + 1 < 100 && (arr3[0] + 1) % 10 !== 0){
                                    shotColorPC(arr3[0] + 1);
                                    td_you[arr3[0] + 1].value = 6;
                                }
                                if(arr3[0] + 9 < 100 && (arr3[0] + 9 - 9) % 10 !== 0){
                                    shotColorPC(arr3[0] + 9);
                                    td_you[arr3[0] + 9].value = 6;
                                }
                                if(arr3[0] + 11 < 100 && (arr3[0] + 11) % 10 !== 0){
                                    shotColorPC(arr3[0] + 11);
                                    td_you[arr3[0] + 11].value = 6;
                                }
                                if(arr3[0] + 19 < 100 && (arr3[0] + 19 - 9) % 10 !== 0){
                                    shotColorPC(arr3[0] + 19);
                                    td_you[arr3[0] + 19].value = 6;
                                }
                                if(arr3[0] + 21 < 100 && (arr3[0] + 21) % 10 !== 0){
                                    shotColorPC(arr3[0] + 21);
                                    td_you[arr3[0] + 21].value = 6;
                                }
                                if(arr3[0] + 29 < 100 && (arr3[0] + 29 - 9) % 10 !== 0){
                                    shotColorPC(arr3[0] + 29);
                                    td_you[arr3[0] + 29].value = 6;
                                }
                                if(arr3[0] + 31 < 100 && (arr3[0] + 31) % 10 !== 0){
                                    shotColorPC(arr3[0] + 31);
                                    td_you[arr3[0] + 31].value = 6;
                                }
                            }
                            arr3 = [];
                            console.log(arr3);
                            console.log('crash ship 3');
                        }

                        if(shotShipPC < 20){
                            setTimeout(shotPC, 1000);
                        }
                    }

                    if(td_you[randShot].value === 4){
                        td_you[randShot].value = 10;
                        shotShipColorPC(randShot);
                        arr4.push(randShot);
                        sort(arr4);

                        shotShipPC++;
                        pcWin(shotShipPC);
                        console.log(arr4.length);

                        if(arr4.length === 4){
                            sort(arr4);
                            console.log(arr4);

                            if(arr4[1] - arr4[0] === 1){
                                if(arr4[0] - 1 >= 0 && (arr4[0] - 1 - 9) % 10 !== 0){
                                    shotColorPC(arr4[0] - 1);
                                    td_you[arr4[0] - 1].value = 6;
                                }
                                if(arr4[0] - 11 >= 0 && (arr4[0] - 11 - 9) % 10 !== 0){
                                    shotColorPC(arr4[0] - 11);
                                    td_you[arr4[0] - 11].value = 6;
                                }
                                if(arr4[0] + 9 < 100 && (arr4[0] + 9 - 9) % 10 !== 0){
                                    shotColorPC(arr4[0] + 9);
                                    td_you[arr4[0] + 9].value = 6;
                                }
                                if(arr4[0] - 10 >= 0){
                                    shotColorPC(arr4[0] - 10);
                                    td_you[arr4[0] - 10].value = 6;
                                }
                                if(arr4[0] + 10 < 100){
                                    shotColorPC(arr4[0] + 10);
                                    td_you[arr4[0] + 10].value = 6;
                                }
                                if(arr4[0] - 9 >= 0){
                                    shotColorPC(arr4[0] - 9);
                                    td_you[arr4[0] - 9].value = 6;
                                }
                                if(arr4[0] + 11 < 100){
                                    shotColorPC(arr4[0] + 11);
                                    td_you[arr4[0] + 11].value = 6;
                                }
                                if(arr4[0] + 4 < 100 && (arr4[0] + 4) % 10 !== 0){
                                    shotColorPC(arr4[0] + 4);
                                    td_you[arr4[0] + 4].value = 6;
                                }
                                if(arr4[0] - 8 >= 0 && (arr4[0] - 8) % 10 !== 0){
                                    shotColorPC(arr4[0] - 8);
                                    td_you[arr4[0] - 8].value = 6;
                                }
                                if(arr4[0] + 12 < 100 && (arr4[0] + 12) % 10 !== 0){
                                    shotColorPC(arr4[0] + 12);
                                    td_you[arr4[0] + 12].value = 6;
                                }
                                if(arr4[0] - 7 >= 0 && (arr4[0] - 7) % 10 !== 0){
                                    shotColorPC(arr4[0] - 7);
                                    td_you[arr4[0] - 7].value = 6;
                                }
                                if(arr4[0] + 13 < 100 && (arr4[0] + 13) % 10 !== 0){
                                    shotColorPC(arr4[0] + 13);
                                    td_you[arr4[0] + 13].value = 6;
                                }
                                if(arr4[0] + 14 < 100 && (arr4[0] + 14) % 10 !== 0){
                                    shotColorPC(arr4[0] + 14);
                                    td_you[arr4[0] + 14].value = 6;
                                }
                                if(arr4[0] - 6 >= 0 && (arr4[0] - 6) % 10 !== 0){
                                    shotColorPC(arr4[0] - 6);
                                    td_you[arr4[0] - 6].value = 6;
                                }
                            }
                            else if(arr4[1] - arr4[0] === 10){
                                if(arr4[0] - 10 >= 0){
                                    shotColorPC(arr4[0] - 10);
                                    td_you[arr4[0] - 10].value = 6;
                                }
                                if(arr4[0] + 40 < 100){
                                    shotColorPC(arr4[0] + 40);
                                    td_you[arr4[0] + 40].value = 6;
                                }
                                if(arr4[0] - 11 >= 0 && (arr4[0] - 11 - 9) % 10 !== 0){
                                    shotColorPC(arr4[0] - 11);
                                    td_you[arr4[0] - 11].value = 6;
                                }
                                if(arr4[0] - 9 >= 0 && (arr4[0] - 9) % 10 !== 0){
                                    shotColorPC(arr4[0] - 9);
                                    td_you[arr4[0] - 9].value = 6;
                                }
                                if(arr4[0] - 1 >= 0 && (arr4[0] - 1 - 9) % 10 !== 0){
                                    shotColorPC(arr4[0] - 1);
                                    td_you[arr4[0] - 1].value = 6;
                                }
                                if(arr4[0] + 1 < 100 && (arr4[0] + 1) % 10 !== 0){
                                    shotColorPC(arr4[0] + 1);
                                    td_you[arr4[0] + 1].value = 6;
                                }
                                if(arr4[0] + 9 < 100 && (arr4[0] + 9 - 9) % 10 !== 0){
                                    shotColorPC(arr4[0] + 9);
                                    td_you[arr4[0] + 9].value = 6;
                                }
                                if(arr4[0] + 11 < 100 && (arr4[0] + 11) % 10 !== 0){
                                    shotColorPC(arr4[0] + 11);
                                    td_you[arr4[0] + 11].value = 6;
                                }
                                if(arr4[0] + 19 < 100 && (arr4[0] + 19 - 9) % 10 !== 0){
                                    shotColorPC(arr4[0] + 19);
                                    td_you[arr4[0] + 19].value = 6;
                                }
                                if(arr4[0] + 21 < 100 && (arr4[0] + 21) % 10 !== 0){
                                    shotColorPC(arr4[0] + 21);
                                    td_you[arr4[0] + 21].value = 6;
                                }
                                if(arr4[0] + 29 < 100 && (arr4[0] + 29 - 9) % 10 !== 0){
                                    shotColorPC(arr4[0] + 29);
                                    td_you[arr4[0] + 29].value = 6;
                                }
                                if(arr4[0] + 31 < 100 && (arr4[0] + 31) % 10 !== 0){
                                    shotColorPC(arr4[0] + 31);
                                    td_you[arr4[0] + 31].value = 6;
                                }
                                if(arr4[0] + 39 < 100 && (arr4[0] + 39 - 9) % 10 !== 0){
                                    shotColorPC(arr4[0] + 39);
                                    td_you[arr4[0] + 39].value = 6;
                                }
                                if(arr4[0] + 41 < 100 && (arr4[0] + 41) % 10 !== 0){
                                    shotColorPC(arr4[0] + 41);
                                    td_you[arr4[0] + 41].value = 6;
                                }
                            }
                            arr4 = [];
                            console.log(arr4);
                            console.log('crash ship 4');
                        }

                        if(shotShipPC < 20){
                            setTimeout(shotPC, 1000);
                        }
                    }

                    if(td_you[randShot].value === 0){
                        td_you[randShot].value = 6;

                        shotColorPC(randShot);
                    }
                };

                setTimeout(shotPC, 1000);
               // shotPC();

            }
        }
        else if(!game){
            alert('Расставте все корабли!');
        }

    };
}


