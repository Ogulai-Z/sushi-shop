// console.log('hi');
//1)найти кнопку +
let buttonPlus = document.querySelector('[data-action="plus"]');
//2)отследить клик по кнопке первый аргумент то событие которе должно произойти?второй аргумент что произойдет функция
buttonPlus.addEventListener("click", function(){
            
//3) по клику севершаем действие: увеличиваем счетский на 1
//3.1 находим счетчик
//3.1.2 находим весь блок с текущим счетчиком 
let counterWrapper = buttonPlus.closest(".counter-wrapper");
//console.log(counterWrapper);

//3.1.3 внутри всего блока находим тег который отвечвет за счетчик

let counter = counterWrapper.querySelector('[data-counter]');
//console.log(counter)
//3.2 увеличиваем  счетсик на 1

counter.innerText = ++counter.innerText;
});

let buttonMinus = document.querySelector('[data-action="minus"]')

buttonMinus.addEventListener("click", function(){
            
    //3) по клику севершаем действие: уменьшаем  счетский на 1
    //3.1 находим счетчик
    //3.1.2 находим весь блок с текущим счетчиком 
    let counterWrapper = buttonMinus.closest(".counter-wrapper");//нашли родителя 
    //console.log(counterWrapper);
    
    //3.1.3 внутри всего блока находим тег который отвечвет за счетчик
    
    let counter = counterWrapper.querySelector('[data-counter]');// от родлителя нашли див с  счетчиком
    //console.log(counter)
    //проверка если счетчик больше 1 тогда уменьшаем , если равен 1 тогда ничего не делаем 
    //parseInt чтоб сравнить строчную как числовую
    if(parseInt(counter.innerText) > 1) {
        //3.2 уменьщаем  счетсик на 1
        counter.innerText = --counter.innerText;
    }
    
    
    });