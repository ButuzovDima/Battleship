let td_you = document.querySelectorAll('#table_one > tbody > tr > td:not(:nth-child(1))');
let td_pc = document.querySelectorAll('#table_two > tbody > tr > td:not(:nth-child(1))');
let ship_p;
let ship_1 = 0;
let ship_2 = 0;
let ship_3 = 0;
let ship_4 = 0;
let ship_two = true;
let ship_three = true;

/*--------------------------ship_menu-------------------------------*/
let fa_ship = document.getElementsByClassName('fa-ship');
let style_ship = function(a){
    for(let i = 0; i < fa_ship.length; i++){
        console.log(fa_ship[i].style.boxShadow);
        //work from IE!!!
        if(fa_ship[i].style.boxShadow === '0px 0px 6px 3px #454547'){
            fa_ship[i].style.boxShadow = null;
        }
        // work from chrome!!!
        if(fa_ship[i].style.boxShadow = 'rgb(69, 69, 71) 0px 0px 6px 3px'){
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
    ship_p = 1;
    style_ship(p_1);
};
p2.onclick = function(){
    let p_2 = document.getElementById('p2');
    ship_p = 2;
    style_ship(p_2);
};
p3.onclick = function(){
    let p_3 = document.getElementById('p3');
    ship_p = 3;
    style_ship(p_3);
};
p4.onclick = function(){
    let p_4 = document.getElementById('p4');
    ship_p = 4;
    style_ship(p_4);
};
/*------------------------table_one---------------------------------*/

/*-------------------------color_ship-------------------------------*/
function color_ship(a){
    td_you[a].style.background = 'brown';
}

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
        } else if(ship_p === 2){
            if(ship_2 < 6){
                if(td_you[i].style.background === 'rgba(192, 192, 192, 0.8)'){
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
                            if(td_you[i + 1].style.background === 'rgba(192, 192, 192, 0.8)'){
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
                            if(td_you[i + 10].style.background === 'rgba(192, 192, 192, 0.8)'){
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
                            if(td_you[i - 1].style.background === 'rgba(192, 192, 192, 0.8)'){
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
                            if(td_you[i + 10].style.background === 'rgba(192, 192, 192, 0.8)'){
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
                            if(td_you[i - 1].style.background === 'rgba(192, 192, 192, 0.8)'){
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
                            if(td_you[i - 10].style.background === 'rgba(192, 192, 192, 0.8)'){
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
                            if(td_you[i + 1].style.background === 'rgba(192, 192, 192, 0.8)'){
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
                            if(td_you[i - 10].style.background === 'rgba(192, 192, 192, 0.8)'){
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
                            if(td_you[i + 1].style.background === 'rgba(192, 192, 192, 0.8)'){
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
                            if(td_you[i - 1].style.background === 'rgba(192, 192, 192, 0.8)'){
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
                            if(td_you[i + 10].style.background === 'rgba(192, 192, 192, 0.8)'){
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
                            if(td_you[i + 1].style.background === 'rgba(192, 192, 192, 0.8)'){
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
                            if(td_you[i - 10].style.background === 'rgba(192, 192, 192, 0.8)'){
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
                            if(td_you[i + 10].style.background === 'rgba(192, 192, 192, 0.8)'){
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
                            if(td_you[i + 1].style.background === 'rgba(192, 192, 192, 0.8)'){
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
                            if(td_you[i + 10].style.background === 'rgba(192, 192, 192, 0.8)'){
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
                            if(td_you[i - 1].style.background === 'rgba(192, 192, 192, 0.8)'){
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
                            if(td_you[i - 10].style.background === 'rgba(192, 192, 192, 0.8)'){
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
                            if(td_you[i + 10].style.background === 'rgba(192, 192, 192, 0.8)'){
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
                            if(td_you[i - 1].style.background === 'rgba(192, 192, 192, 0.8)'){
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
                            if(td_you[i - 10].style.background === 'rgba(192, 192, 192, 0.8)'){
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
                            if(td_you[i + 10].style.background === 'rgba(192, 192, 192, 0.8)'){
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
                            if(td_you[i - 1].style.background === 'rgba(192, 192, 192, 0.8)'){
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
                            if(td_you[i - 10].style.background === 'rgba(192, 192, 192, 0.8)'){
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
                            if(td_you[i + 1].style.background === 'rgba(192, 192, 192, 0.8)'){
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
                            if(td_you[i - 1].style.background === 'rgba(192, 192, 192, 0.8)'){
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
                            if(td_you[i - 10].style.background === 'rgba(192, 192, 192, 0.8)'){
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
                            if(td_you[i + 1].style.background === 'rgba(192, 192, 192, 0.8)'){
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
                            if(td_you[i - 1].style.background === 'rgba(192, 192, 192, 0.8)'){
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
                            if(td_you[i - 10].style.background === 'rgba(192, 192, 192, 0.8)'){
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
                            if(td_you[i + 10].style.background === 'rgba(192, 192, 192, 0.8)'){
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
                            if(td_you[i + 1].style.background === 'rgba(192, 192, 192, 0.8)'){
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
                            if(td_you[i - 10].style.background === 'rgba(192, 192, 192, 0.8)'){
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
                            if(td_you[i - 1].style.background === 'rgba(192, 192, 192, 0.8)'){
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
                            if(td_you[i + 1].style.background === 'rgba(192, 192, 192, 0.8)'){
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
                            if(td_you[i + 10].style.background === 'rgba(192, 192, 192, 0.8)'){
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
                            if(td_you[i - 10].style.background === 'rgba(192, 192, 192, 0.8)'){
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
                            if(td_you[i - 1].style.background === 'rgba(192, 192, 192, 0.8)'){
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
                            if(td_you[i + 1].style.background === 'rgba(192, 192, 192, 0.8)'){
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
                            if(td_you[i + 10].style.background === 'rgba(192, 192, 192, 0.8)'){
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
                            if(td_you[i - 10].style.background === 'rgba(192, 192, 192, 0.8)'){
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
                            if(td_you[i - 1].style.background === 'rgba(192, 192, 192, 0.8)'){
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
                            if(td_you[i + 1].style.background === 'rgba(192, 192, 192, 0.8)'){
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
                            if(td_you[i + 10].style.background === 'rgba(192, 192, 192, 0.8)'){
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
                            if(td_you[i - 10].style.background === 'rgba(192, 192, 192, 0.8)'){
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
                            if(td_you[i - 1].style.background === 'rgba(192, 192, 192, 0.8)'){
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
                            if(td_you[i + 1].style.background === 'rgba(192, 192, 192, 0.8)'){
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
                            if(td_you[i + 10].style.background === 'rgba(192, 192, 192, 0.8)'){
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
                                    if(td_you[i + 1].style.background === 'rgba(192, 192, 192, 0.8)'){
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
                                    if(td_you[i - 1].style.background === 'rgba(192, 192, 192, 0.8)'){
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
                                    if(td_you[i + 10].style.background === 'rgba(192, 192, 192, 0.8)'){
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
                                    if(td_you[i - 1].style.background === 'rgba(192, 192, 192, 0.8)'){
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
                                    if(td_you[i - 10].style.background === 'rgba(192, 192, 192, 0.8)'){
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
                                    if(td_you[i + 10].style.background === 'rgba(192, 192, 192, 0.8)'){
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
                                    if(td_you[i - 1].style.background === 'rgba(192, 192, 192, 0.8)'){
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
                                    if(td_you[i - 10].style.background === 'rgba(192, 192, 192, 0.8)'){
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
                                    if(td_you[i + 1].style.background === 'rgba(192, 192, 192, 0.8)'){
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
                                    if(td_you[i - 10].style.background === 'rgba(192, 192, 192, 0.8)'){
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
                                    if(td_you[i + 10].style.background === 'rgba(192, 192, 192, 0.8)'){
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
                                    if(td_you[i + 1].style.background === 'rgba(192, 192, 192, 0.8)'){
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
                                    if(td_you[i - 10].style.background === 'rgba(192, 192, 192, 0.8)'){
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
                                    if(td_you[i - 1].style.background === 'rgba(192, 192, 192, 0.8)'){
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
                                    if(td_you[i + 1].style.background === 'rgba(192, 192, 192, 0.8)'){
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
                                    if(td_you[i + 10].style.background === 'rgba(192, 192, 192, 0.8)'){
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
                                    if(td_you[i - 10].style.background === 'rgba(192, 192, 192, 0.8)'){
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
                                    if(td_you[i - 1].style.background === 'rgba(192, 192, 192, 0.8)'){
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
                                    if(td_you[i + 1].style.background === 'rgba(192, 192, 192, 0.8)'){
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
                                    if(td_you[i + 10].style.background === 'rgba(192, 192, 192, 0.8)'){
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
                                    if(td_you[i - 10].style.background === 'rgba(192, 192, 192, 0.8)'){
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
                                    if(td_you[i - 1].style.background === 'rgba(192, 192, 192, 0.8)'){
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
                                    if(td_you[i + 1].style.background === 'rgba(192, 192, 192, 0.8)'){
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
                                    if(td_you[i + 10].style.background === 'rgba(192, 192, 192, 0.8)'){
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
                                    if(td_you[i - 10].style.background === 'rgba(192, 192, 192, 0.8)'){
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
                                    if(td_you[i - 1].style.background === 'rgba(192, 192, 192, 0.8)'){
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
                                    if(td_you[i + 1].style.background === 'rgba(192, 192, 192, 0.8)'){
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
                                    if(td_you[i + 10].style.background === 'rgba(192, 192, 192, 0.8)'){
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
                                if(td_you[i - 10].style.background === 'rgba(192, 192, 192, 0.8)'){
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
                                if(td_you[i - 1].style.background === 'rgba(192, 192, 192, 0.8)'){
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
                                if(td_you[i + 1].style.background === 'rgba(192, 192, 192, 0.8)'){
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
                                if(td_you[i + 10].style.background === 'rgba(192, 192, 192, 0.8)'){
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
                if(td_you[i].style.background === 'rgba(192, 192, 192, 0.8)'){
                    alert('Error');
                    console.log(td_you[i].style.background);
                }
                else{
                    if(ship_three){
                        ship_three = false;
                        color_ship(i);
                        if( i - 11 > 0 && ((i-11)-9)%10!==0){
                            td_you[i-11].style.background = 'rgba(192, 192, 192, 0.8)';
                        }
                        if( i - 9 > 0 && (i-9)%10 !== 0){
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

                        if(i - 10 >= 0){
                            td_you[i-10].onclick = function(){
                                if(td_you[i - 10].style.background === 'rgba(192, 192, 192, 0.8)'){
                                    alert('Error');
                                }
                                else {
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
                                }
                            };
                        }
                    }
                }
            }
            else{
                alert('ship_3 = 2');
            }
        }
    };
}

let m = [];
start.onclick = function(){
    for(let i = 0; i < td_you.length; i++){
        m[i] = td_you[i].value;
    }
    console.log(m);
};
