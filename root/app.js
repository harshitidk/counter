const increase = document.getElementById('in')
const decrease = document.getElementById('dec')
const reset = document.getElementById('re')
let show = document.querySelector('.page-box-show')
let count = 0;

reset.addEventListener('click', function(){
    count = 0;
    if(count<0)
    {
        show.style.color = 'red';
    }
    else
    {
        show.style.color = '#00e0af';
    }
    show.textContent = count;
})

increase.addEventListener('click', function(){
    count += 1;
    if(count<0)
    {
        show.style.color = 'red';
    }
    else
    {
        show.style.color = '#00e0af';
    }
    show.textContent = count; 
})

decrease.addEventListener('click', function(){
    count -= 1;
    if(count<0)
    {
        show.style.color = 'red';
    }
    else
    {
        show.style.color = '#00e0af';
    }
    show.textContent = count; 
})