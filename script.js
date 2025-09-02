let display = document.querySelector('.input');

document.querySelectorAll('button').forEach((button) =>{
    button.addEventListener('click',() => {
        button.classList.remove('font-bold')
        setTimeout(() => {
            button.classList.add('font-bold')
        }
        ,150)
    })
})

function displayCalculation(number){    
    display.innerHTML+= number;
}

function resetDisplay() {
    display.innerHTML='';
}

function deleteNumber() {
    display.innerHTML = display.innerHTML.slice(0,-1)
}

function calculate(){
    try{
        result =  eval(display.innerText);
        display.innerHTML = ''
    }catch{
        display='error'
    }

    display.innerText = result;
}