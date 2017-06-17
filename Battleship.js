let td_you = document.querySelectorAll('#table_one > tbody > tr > td:not(:nth-child(1))');
let td_pc = document.querySelectorAll('#table_two > tbody > tr > td:not(:nth-child(1))');


/*------------------------table_one---------------------------------*/
for(let i = 0; i < td_you.length; i++){
    td_you[i].onclick = function(){
        if(td_you[i].style.background === 'rgba(192, 192, 192, 0.8)'){
            alert('Error');
            console.log(td_you[i].style.background);
        }
        else{
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
            console.log(i);
            console.log(td_you[i].value);
        }
    }
}