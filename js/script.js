window.addEventListener('DOMContentLoaded' , function(){
  // получаем инфу для работы
  let products = document.querySelectorAll('.product'),
      buttons = document.getElementsByTagName("button"),
      open = document.getElementsByClassName("open")[0];
      shop = document.getElementsByClassName("shop")[0];
// функция для создания корзины
  function createCart() {
  	// создаём элементы для нашей корзины
    let cart = document.createElement("div"),
        field = document.createElement('div'),
        heading = document.createElement('h2'),
        close = document.createElement("button");
     
     // Добавили классы элементам
     cart.classList.add("cart");
     field.classList.add("cart-field");
     close.classList.add("close");
     
     // добавили текст элементам
     close.textContent = "Закрыть";
     heading.textContent = "В нашей корзине:";
     
     // Вставили элементы на стр
     document.body.appendChild(cart);
     cart.appendChild(heading);
     cart.appendChild(field);
     cart.appendChild(close);
  }      

  createCart();
  
  let field = document.querySelector(".cart-field"),
      cart = document.querySelector(".cart"),
      close = document.querySelector(".close");

  for (let i = 0;i < buttons.length-1;i++){
  	
  	// вешаем обработчик события клика на каждую из кнопок
  	buttons[i].addEventListener('click', function(){
  		// создали копию
     let item = products[i].cloneNode(true),
         btn = item.querySelector('button');

     btn.remove();
     let takeout = document.createElement("button");
     takeout.classList.add("takeouting");
     takeout.textContent = "Убрать";
     item.appendChild(takeout);
     field.appendChild(item);
     products[i].remove();
     takeout.addEventListener('click' , function(){
     	item.remove();
     	  let item1 = products[i].cloneNode(true);
     	  shop.appendChild(item1);

     });
  	})
  }

  function openCart() {
  	cart.style.display = "block"
  };
   function closeCart() {
  	cart.style.display = "none"
  };
  

  
  open.addEventListener('click' , openCart);
  close.addEventListener('click' , closeCart);

});