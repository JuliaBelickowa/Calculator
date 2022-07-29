const calcul = document.querySelector('.calcul');
const result = document.querySelector('#result');

calcul.addEventListener('click', function(event){
    if(!event.target.classList.contains('calcul_btn')) return;
        
    let value = event.target.innerText;

   
    switch(value) {
        case'C':
            result.innerText = '';
            break;

        case 'root()':
            result.innerText += value;
            result = Math.sqrt(eval(value));
            break;

        case '=':
            if(result.innerText.search(/[0-9%+-^/*.|root]/mi) != -1) return;

            result.innerText = eval(result.innerText);
            break;

        default:
            result.innerText += value;
    }

});
