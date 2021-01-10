// console.log('hi');
//1)найти кнопку +
let buttonsPlus = document.querySelectorAll('[data-action="plus"]');


//2)отследить клик по кнопке первый аргумент то событие которе должно произойти?второй аргумент что произойдет функция
//чтоб пройтись по всем PLUS => ЦИКЛ
buttonsPlus.forEach(function (item) { //для каждого элемента запусти функцию
item.addEventListener("click", function () {
            
    //3) по клику севершаем действие: увеличиваем счетский на 1
    //3.1 находим счетчик
    //3.1.2 находим весь блок с текущим счетчиком 
    let counterWrapper = this.closest(".counter-wrapper");
      
    //3.1.3 внутри всего блока находим тег который отвечвет за счетчик
    
    let counter = counterWrapper.querySelector('[data-counter]');
     //3.2 увеличиваем  счетсик на 1
    
    counter.innerText = ++counter.innerText;
    });
})


let buttonsMinus = document.querySelectorAll('[data-action="minus"]')
buttonsMinus.forEach(function(item){
item.addEventListener("click", function(){
            
    //3) по клику севершаем действие: уменьшаем  счетский на 1
    //3.1 находим счетчик
    //3.1.2 находим весь блок с текущим счетчиком 
    let counterWrapper = this.closest(".counter-wrapper");//нашли родителя 
  
    
    //3.1.3 внутри всего блока находим тег который отвечвет за счетчик
    
    let counter = counterWrapper.querySelector('[data-counter]');// от родлителя нашли див с  счетчиком
 
    //проверка если счетчик больше 1 тогда уменьшаем , если равен 1 тогда ничего не делаем 
    //parseInt чтоб сравнить строчную как числовую
    if(parseInt(counter.innerText) > 1) {
        //3.2 уменьщаем  счетсик на 1
        counter.innerText = --counter.innerText;
    }
    
    
    });
})