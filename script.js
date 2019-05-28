
(function(){
	
	 //parseInt преобразует строку в число
	
       var codes = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8], i, j, x, y;   //массив цветов
	
     for(y = codes.length; y;){j = Math.floor(Math.random() * y);x = codes[--y];codes[y] = codes[j];codes[j] = x;}   //мешаем цвета
   
    for(j = 0; j < 16; j++) document.getElementById('pole').innerHTML += '<a color="' + codes[j] + '" class="color' + codes[j] + ' hidden" color=""> </a>';  //рисуем картину
	
	
    //вешаем событие клика
    var check = false, selcolor = 0, sela, steps = 0, open = 0, timer, a = document.getElementsByTagName('a');
    for(var i = 0; i < a.length; i++){
        a[i].addEventListener('click', function(e){
            steps++;
            var el = e.target;
			
			//временно показываем цвет кликнутого блока
            el.className = el.className.replace('hidden', '');
            setTimeout(function(){
                //если кликнули на вторую картинку в паре
                if(check){
                    check = false;
                    //если цвета совпали
                    if(el.getAttribute('color') == selcolor){
                        open++;
                        //если количество совпадений = максимально возможному
                        if(open == 8){
                            alert('Вы победили за ' + steps + ' кликов'); end;
                        }
                    }
                    else{
                        //если цвета не совпали, то прячем блок
                        sela.className += ' hidden'; el.className += ' hidden';
                    }
                }
                else{
                    //если кликнули на первую картинку в паре
                    selcolor = el.getAttribute('color'); sela = el; check = true;
                }
                //таймаут чтобы видеть цвет кликнутого блока
            }, 350);
        });
    }
})();
