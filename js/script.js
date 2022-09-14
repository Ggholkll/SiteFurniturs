window.onload = function () {
  document.addEventListener('click' , documentFunctionClick)
  function documentFunctionClick(e) { 
    const targetElement = e.target ; 
    //if (window.innerWidth > 767) {
      e.preventDefault() ;
    //}
    if (targetElement.closest('.search-form__item')) { 
        document.querySelector('.search-form').classList.toggle('_active') 
    } else if (!targetElement.closest('.search-form') && document.querySelector('.search-form._active')) {
      document.querySelector('.search-form').classList.remove('_active') ; 
    }
  }
  const elementHeader = document.querySelector('.header') ;
  const callback = function (entries , observer) {
    if (entries[0].isIntersecting) {
      elementHeader.classList.remove('___scroll') ; 
    } else {
      elementHeader.classList.add('___scroll') 
    }
  } 
  const headerObserver = new IntersectionObserver(callback) ; 
  headerObserver.observe(elementHeader) ; 

} 
for (let i = 0 ; i < document.querySelectorAll('.menu__link').length && document.querySelectorAll('.menu__arrow').length; i++ ) {
    document.querySelectorAll('.menu__link')[i].onclick = function (e) {
     e.preventDefault() ;
     document.querySelectorAll('.menu__link')[i].closest('.menu__item').classList.add('_active') ; 
      setTimeout(function () {
         document.querySelectorAll('.menu__link')[i].closest('.menu__item').classList.toggle('___active') ; 
     
      } , 1)
     if (document.querySelectorAll('.menu__link')[i].closest('.menu__item').classList.contains('___active')) {
      setTimeout(function () {
         document.querySelectorAll('.menu__link')[i].closest('.menu__item').classList.remove('_active') ; 
      }  , 310)
     }
  } 
  document.querySelectorAll('.menu__arrow')[i].addEventListener('click' , function() {
    document.querySelectorAll('.menu__arrow')[i].closest('.menu__item').classList.toggle('_active')
    setTimeout(function () {
         document.querySelectorAll('.menu__arrow')[i].closest('.menu__item').classList.toggle('___active') ; 
      } , 1)
  })
    }
    const elementMenuBody = document.querySelector('.menu__body')
document.querySelector('.header__menu-burgers').addEventListener('click' , function (e) {
        document.querySelector('.header__menu-burgers').classList.toggle('_active')
        elementMenuBody.classList.toggle('_active')
    })
const elementTitleMenu = document.querySelectorAll('.title-menu') ;
const elmentLIstMenu = document.querySelectorAll('.menu-footer__list') 
    for (let i = 0 ; i < elementTitleMenu.length ; i++ ) {
      elementTitleMenu[i].nextElementSibling.classList.add('__active') ; 
      elementTitleMenu[i].addEventListener('click' , function () {
        elementTitleMenu[i].nextElementSibling.classList.remove('__active') ; 
          elementTitleMenu[i].nextElementSibling.classList.toggle('__activess') ; 
          if (!elementTitleMenu[i].nextElementSibling.classList.contains('__activess')) {
            setTimeout(function () {
              elementTitleMenu[i].nextElementSibling.classList.add('__active') ; 
            } , 310) 
          }
    })
        
        
  } 
document.addEventListener('click' , function (e) {
  if (e.target.classList.contains('products__more')) {
    functionProducts(e.target) ; 
    e.preventDefault() ; 
  }
  if (e.target.classList.contains('actions-product__button')) {
    const elementsProducts = e.target.closest('.item-product').dataset.item ;  
    console.log(elementsProducts)
    funAddCart(e.target , elementsProducts) ; 
    e.preventDefault() ;  
  }
   if (e.target.classList.contains('cart-header__icon') || e.target.closest('.cart-header__icon')) {
        if (document.querySelector('.cart-list').children.length > 0) {
          const elementCartHeader = document.querySelector('.cart-header__body') ; 
          elementCartHeader.classList.toggle('_active') ; 
        }
      
   } else if (!e.target.classList.contains('cart-header__icon') &&  !e.target.closest('.cart-header')) {
      const elementCartHeader = document.querySelector('.cart-header__body') ; 
        elementCartHeader.classList.remove('_active')
   }
   if (e.target.classList.contains('cart-list__delete')) {
    const elementCartItem = e.target.closest('.cart-list__item') ; 
    functionUpdateCart(e.target , elementCartItem , false ) 

   }
})

    
  
async function functionProducts(button ) {
  if (!button.classList.contains('_Loading')) {
      button.classList.add('_Loading') ; 
      const file = 'products.json/producte.json'  ; 
      let response = await fetch(file)
      try {
        
        let resolt = await response.json() ;  
        functionLoadProducts(resolt , button ) ; 
      } catch {
        alert('Error') ; 
      }
  }
}

function functionLoadProducts(data , button ) {
  setTimeout(function () {
    const elementProductsItems = document.querySelector('.products__items' ) ;
    data.products.forEach(item => {
      const productId = item.id ; 
      const productUrl = item.url  ; 
      const productImage = item.image ; 
      const productTitle = item.title ; 
      const productText = item.text ; 
      console.log(item.priceOld)
      const productPrice = item.price ;  
      const productOldPrice = item.priceOld ;  
      const productShareUrl = item.shareUrl ;  
      const productLikeUrl = item.likeUrl ; 
      const productButton = item.button ; 
     let productTemplateStart = `<article data-item="${productId}" class="products__item item-product">`;
      let productTemplateEnd = `</article>`;

      

      let productTemplateImage = `
    <a href="${productUrl}" class="item-product__image _ibg">
      <img src="${productImage}" alt="${productTitle}">
    </a>
  `;

      let productTemplateBodyStart = `<div class="item-product__body">`;
      let productTemplateBodyEnd = `</div>`;

      let productTemplateContent = `
    <div class="item-product__content">
      <h3 class="item-product__title">${productTitle}</h3>
      <div class="item-product__text">${productText}</div>
    </div>
  `;

      let productTemplatePrices = '';
      let productTemplatePricesStart = `<div class="item-product__prices">`;
      let productTemplatePricesCurrent = `<div class="item-product__price">$ ${productPrice}</div>`;
      let productTemplatePricesOld = `<div class="item-product__price item-product__price_old">$ ${productOldPrice}</div>`;
      let productTemplatePricesEnd = `</div>`;

      productTemplatePrices = productTemplatePricesStart;
      productTemplatePrices += productTemplatePricesCurrent;
      if (productOldPrice) {
        productTemplatePrices += productTemplatePricesOld;
      }
      productTemplatePrices += productTemplatePricesEnd;
  
       let productTemplateButtons = `<div class="item-product__buttons"> <a href=" " class="item-product__button"> ${productButton} </a> </div>`
      let productTemplateActions = `
    <div class="item-product__actions actions-product">
      <div class="actions-product__body">
        <a href="" class="actions-product__button btn_white">Add to cart</a>
        <a href="${productShareUrl}" class="actions-product__link _icon-share">Share</a>
        <a href="${productLikeUrl}" class="actions-product__link _icon-favorite">Like</a>
      </div>
    </div>
  `;

      let productTemplateBody = '';
      productTemplateBody += productTemplateBodyStart;
      productTemplateBody += productTemplateContent;
      productTemplateBody += productTemplatePrices;
      productTemplateBody += productTemplateButtons ;
      productTemplateBody += productTemplateActions;
      productTemplateBody += productTemplateBodyEnd;

      let productTemplate = '';
      productTemplate += productTemplateStart;
      productTemplate += productTemplateImage;
      productTemplate += productTemplateBody;
      productTemplate += productTemplateEnd;
      elementProductsItems.insertAdjacentHTML('beforeend' , productTemplate)
    })
     button.classList.remove('_Loading') ; 
    button.remove() ; 
} , 1000 )
}
function funAddCart(productsButton , productsID) {
  if (!productsButton.classList.contains('_Loading')) {
    productsButton.classList.add('_Loading')
    productsButton.classList.add('_fly') ; 
    const cart = document.querySelector('.cart-header__icon') ; 
    const productss = document.querySelector(`[data-item="${productsID}"]`) ; 
    const productImage = productss.querySelector('.item-product__image img') ; 
    const productsImageFly = productImage.cloneNode(true) ; 

    const productsImageFlyWidth = productImage.offsetWidth  ;
    const productsImageFlyHeight = productImage.offsetHeight ; 
    const productsImageFlyTop = productImage.getBoundingClientRect().top ; 
    const productsImageFlyLetf = productImage.getBoundingClientRect().left ; 
    productsImageFly.setAttribute('class' , '_flyImag _ibg') ; 
    productsImageFly.style.cssText = `height: ${productsImageFlyHeight}px ;
    left: ${productsImageFlyLetf}px ; 
    top: ${productsImageFlyTop}px ; width: ${productsImageFlyWidth}px ` ; 
    document.body.append(productsImageFly)
    const elementTop = cart.getBoundingClientRect().top ; 
    const elememtLeft = cart.getBoundingClientRect().left ; 
    productsImageFly.style.cssText = ` left: ${elememtLeft}px ; 
    top: ${elementTop}px ; 
    width: 0px ; 
    height: 0px ; 
    opacity: 0 ; `
    productsImageFly.addEventListener('transitionend' , function () {
      if (productsButton.classList.contains('_fly')) {
        productsImageFly.remove () ; 
        functionUpdateCart(productsButton , productsID) ; 
        productsButton.classList.remove('_fly') ; 
        productsButton.classList.remove('_Loading') 
    
      }
    })
  } 

}
function functionUpdateCart(productsButton , productsID , productsAdd = true ) {
  const cart = document.querySelector('.cart-header') ; 
  const cartIcons = cart.querySelector('.cart-header__icon') ; 
  const cartQuntitys = cartIcons.querySelector('span') ; 
  const cartProducts = document.querySelector(`[data-carts="${productsID}"]`) ;  

  const cartList = document.querySelector('.cart-list') ;  
  if (productsAdd) {  
    if (cartQuntitys) {  
      cartQuntitys.innerHTML = ++cartQuntitys.innerHTML ;  
    } else {
      cartIcons.insertAdjacentHTML('beforeend' , `<span> 1 </span>`) ;
      const elementCartsBody = document.querySelector('.cart-header__body') ; 
      elementCartsBody.style.display = 'block' ;  
    }
    if (!cartProducts) { 
      const product = document.querySelector(`[data-item="${productsID}"]`) ; 
      const cartProductImage = product.querySelector('.item-product__image').innerHTML ;  
      const cartProductsTitle = product.querySelector('.item-product__title').innerHTML  ;  
      let cartProductContent = `<a href="" class="cart-list__image"> ${cartProductImage}</a>
      <div class="cart-list__body"><a href="" class="cart-list__title">${cartProductsTitle}</a> <div class="cart-list__quantity"> Quantity: <span> 1 </span></div>
      <a href="" class="cart-list__delete"> Delete </a></div>` 
      cartList.insertAdjacentHTML('beforeend' , `<li data-carts="${productsID}" class="cart-list__item"> ${cartProductContent}</li>`)
    } else {
      const cartProductQunatitys = cartProducts.querySelector('.cart-list__quantity span') ;
      cartProductQunatitys.innerHTML = ++cartProductQunatitys.innerHTML ; 

    }
  } else {
    const elementQauntity = productsID.querySelector('.cart-list__quantity span') ; 
    elementQauntity.innerHTML = --elementQauntity.innerHTML ; 
    cartQuntitys.innerHTML = --cartQuntitys.innerHTML  ;
    if (!parseInt(elementQauntity.innerHTML)) {
        productsID.remove() ; 

    }
    if (document.querySelectorAll('.cart-list__quantity span').length === 0) { 
      cartQuntitys.remove() 
      const elementCartsBody = document.querySelector('.cart-header__body') ;
      elementCartsBody.style.display = 'none' ; 
    }
      
  }
}
new Swiper ('.slider-main__body' , {
  observer: true , 
  observeParents: true , 
  slidesPerView: 1.3,
  centeredSlides: true , 
  spaceBetween: 32 , 
  watchOverflow: true , 
  speed: 800 , 
  loop: true  , 
  loopAdditionalSlides: 5 , 
  preloadImages: false , 
  parallax: true , 

  pagination: {
    el: '.controls-slider-main__dotts'  , 
    clickable: true , 
  } , 
  navigation: {
    nextEl: '.slider-arrow_next' , 
    prevEl: '.slider-arrow_prev' 
  } , 
  
})
new Swiper ('.slider-tips__body' , {
  observer: true , 
  observeParents: true , 
  slidesPerView: 1 , 
  //centeredSlides: true , 
  spaceBetween: 32 , 
  watchOverflow: true , 
  speed: 800 , 
  loop: true  , 
  loopAdditionalSlides: 5 , 
  preloadImages: false , 
  parallax: true , 

  pagination: {
    el: '.slider-tips__dotted'  , 
    clickable: true , 
  } , 
  navigation: {
    nextEl: '.slider-tips .slider-tips-arrow_next' , 
    prevEl: '.slider-tips .slider-tips-arrow_prev' 
  } , 
  breakpoints: {
      560: {
          slidesPerView: 2 , 
      } , 
      767: {
        slidesPerView: 2 , 
      }, 

      992: {
        slidesPerView: 2 , 
      } , 
      1180: {
        slidesPerView: 3 ,
      } , 
  }
})

const elementBodyFurniture = document.querySelector('.furniture__body') ; 
  let Width = Math.max(document.documentElement.offsetWidth , window.innerWidth) ; 
    if (elementBodyFurniture && Width >= 1180 ) {
      const furnitureItems = document.querySelector('.furniture__items') ; 
      const elementsFurnitureColumn = document.querySelectorAll('.furniture__column') ; 

      const speed = elementBodyFurniture.dataset.speed ; 

      let positionX = 0 ; 
      let coordXprocent = 0 ; 
      function setMouseGalleryStyle () {
        let elementFunrnitureItemsWidth = 0 ; 
        elementsFurnitureColumn.forEach(item => {
          elementFunrnitureItemsWidth += item.offsetWidth ; 
        });  
        let elementfurnitureWidth  = elementFunrnitureItemsWidth - elementBodyFurniture.offsetWidth ; 
        const distMouseX = Math.floor(coordXprocent - positionX ) ; 
        positionX = positionX + (distMouseX * speed ) ; 
        let position = elementfurnitureWidth / 200 * positionX  ; 
        furnitureItems.style.cssText = `transform: translate3d(${-positionX}px , 0 , 0)` ; 
        if (Math.abs(distMouseX) > 0 ) {
          requestAnimationFrame(setMouseGalleryStyle) ; 
        } else {
          elementBodyFurniture.classList.remove('_active') ; 
        }
      }
      elementBodyFurniture.addEventListener('mousemove' , function (e) {
        let furntitureWidth = elementBodyFurniture.offsetWidth ; 
        const coodX = e.pageX - furntitureWidth / 2  ; 
        coordXprocent = coodX / furntitureWidth * 200 ; 
        if (!elementBodyFurniture.classList.contains('_active')) {
          requestAnimationFrame(setMouseGalleryStyle) ; 
          elementBodyFurniture.classList.add('_active') ; 
        }           
      })
    }