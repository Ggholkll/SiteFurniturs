const elementsBody = document.querySelector('.menu__body') ; 
const element = document.querySelector('.icon__menu') ; 
element.addEventListener('click' , function () {
  element.classList.toggle('_active') ; 
  elementsBody.classList.toggle('__active') ;
});

const menuParents = document.querySelectorAll('.manu-page__parent') ;
const itemsMenu =  document.querySelectorAll('.manu-page__item') 
 const elementsMenu = document.querySelectorAll('.menu-page__submenu') ;
 const elementPage = document.querySelector('.menu-page')
 const elementLinkNone = document.querySelectorAll('.submenu-page__link_none') ;
 let AttributeData , menuPageLink ,  elementTimeout , elementId ;
for (let i = 0 ; i < menuParents.length ; i++ ) {
  let menuParent = menuParents[i] ;
  menuParent.addEventListener("mouseenter" , function (e) {
      menuParent.classList.add('___active') ;
  })  
   menuParent.addEventListener("mouseleave" , function (e) {
      menuParent.classList.remove('___active') ; 
  })  
  elementLinkNone[i].addEventListener('click' , function (e) { 
    e.preventDefault()
    menuParent.classList.remove('___active') ; 
})
}
const menuParente = document.querySelectorAll('.manu-page__parent>a ') ; 
const elementPages = document .querySelector('.page__side') ; 
const elementSlider = document.querySelector('.main-slider__dotts') 
const elementMenuPage = document.querySelector('.menu__blocks') 
const elementNews = document.querySelector('.news__content_body') ; 
const elementPagesSide = document.querySelector('.page__body')
const elementPageSide = document.querySelector('.page__container') ; 
const elementItemMenu = document.querySelector('.top-header__column') ; 
const elementLogo = document.querySelector('.top-header__logo'); 
const headerContent = document.querySelector('.top-header__content')
window.addEventListener('resize' , function() {
  let Width = Math.max(document.documentElement.offsetWidth , window.innerWidth) ; 
  if (Width <= 1280) {
      for (let i = 0 ; i < menuParente.length ; i++ ) { 
        let menuParent = menuParente[i] ; 
        menuParent.addEventListener("click" , function () { 
          menuParent.parentElement.classList.toggle('_active') ;  
          e.preventDefault() ; 
        })
      }
  }
       Width <= 992 ?  functionehead( elementItemMenu.after(elementLogo)) : 
       
       functionehead(headerContent.prepend(elementLogo))

      
})
function functioneWin (side , a) {
   return side.append(a)
}
function functionehead(sids  ) {
  return sids;
  
}
const elementIncludeBuy = document.querySelector('.include-product__buy_button') ; 
document.addEventListener('click' , function (e) { 
  if (e.target === elementIncludeBuy) {
    let elementImg = document.querySelector('.image-product__body .image-product__image img').src ; 
   localStorage.setItem('img' , elementImg) ; 
   localStorage.removeItem('display') ;
  } 

   
   
}) 
const elemen__burger = document.querySelector('.menu-page__lines') ; 
const menuBody = document.querySelector('.menu-page__body')
const menuPageBleck = document.querySelector('.menu-page__bleck') ;
elemen__burger.addEventListener('click' , function () {
  elemen__burger.classList.toggle('_actives');
  menuBody.classList.toggle('_actives') ;
  menuPageBleck.classList.toggle('__active') ; 
})
document.addEventListener('click' , function(e) {
        if (e.target === elemen__burger ||  e.target.closest(".menu-page__lines span")) {
          document.body.style.overflow = 'hidden' ; 
        } 
        if (!elemen__burger.classList.contains('_actives') ) {
            document.body.style.overflow = 'auto' ;
          
        }
})

let searchSe = document.querySelector(".search-page__title") ;
const catigories = document.querySelector(".categories-search") 
let active , interval , i  , intervalTwo , q  , intervalTwodbl ,  intervaldble , Wid ;
searchSe.addEventListener('click' , function (e) {
  catigories.classList.toggle('_activeTwo'); 
 
   Wid = Math.max(document.documentElement.offsetWidth , window.innerWidth) ;
   if (Wid >= 992) {
    if (parseInt(getComputedStyle(catigories).getPropertyValue('height')) === 0) {
    i = 0 ; 
    interval = setInterval(function () {
      functione(150 ) 
    } , 1) ; 
  }
  if (parseInt(getComputedStyle(catigories).getPropertyValue('height')) === 150) {
      q = 150 ; intervalTwo = setInterval(function() {
      functionese(0) 
    } , 1) ;
    
  }

}
}) 

function functione(a ) {
  if (parseInt(getComputedStyle(catigories).getPropertyValue('height')) === a) {
    catigories.classList.add('_activeTwo'); 
 
     searchSe.classList.add('_active')

    clearInterval(interval) ;
  } else {
    if (Wid <= 992 ) {
      q = 5 ; i+= q;catigories.style.height = i +'px'
    } else {
      q = 3 ; i+= q;catigories.style.height = i +'px'
    }
  }
}

function  functionese(s) {
  if (parseInt(getComputedStyle(catigories).getPropertyValue('height')) === s ) {
    catigories.classList.remove('_activeTwo'); 
 
    searchSe.classList.remove('_active')
    clearInterval(intervalTwo) ;
  } else {
    if (Wid <= 992 ) {
       i = 5 ;q-= i ;catigories.style.height = q +'px'
    } else  {
       i = 3 ; q-= i ; catigories.style.height = q +'px'
    }
  }
}
let checkboxFormsCateogories = document.querySelectorAll('.categories-search__checkbox') ; 
console.log(checkboxFormsCateogories)
for (let i = 0 ; i < checkboxFormsCateogories.length ; i++ ) {
  let checkboxCategory = checkboxFormsCateogories[i] ; 
  checkboxCategory.addEventListener('change' , function() {
    checkboxCategory.classList.toggle('_active') ;
    let checkboxActiveCategory = document.querySelectorAll('.categories-search__checkbox._active') ;
    if (checkboxActiveCategory.length > 0) {
      searchSe.classList.add('_categories') ; 
      let lastChildSpan = searchSe.querySelector('.search-page__quantity')  ;
      lastChildSpan.innerHTML = lastChildSpan.getAttribute('data-text') + ' ' + checkboxActiveCategory.length ;
    } else {
      searchSe.classList.remove('_categories') ;
    }
  }) 
}

let swiperBody =  new Swiper('.mainslider__body' , {
    obseover: true , 
    loop: true ,
    observeParents: true , 
    sliderPerView: 1  , 
    spaceBetween: 0 , 
    autoHeight: true , 
    speed: 800 , 
    autoplay: {
      delay: 2000 , 
      stopOnLastSlide: true , 
      disableOnInteraction: false , 
    } ,
   
})
const productINfoItems = document.querySelectorAll('.info-product__item') ;
const elementBlockText = document.querySelectorAll('._tabs-block') 
productINfoItems.forEach(item => {
  let items = item ; 
   item.addEventListener('click' , function () {
    productINfoItems.forEach(item => {
      item.classList.remove('_active') ; 
    })
    elementBlockText.forEach(item => {
      item.classList.remove('__active')
    })
    item.classList.add('_active') ; 
    let dataIndex = parseInt(item.getAttribute('data-item'))
    elementBlockText[dataIndex].classList.add('__active')
   })
})
const elementQuantityButton = document.querySelectorAll('.quantity__button') ; 
let getValueNumber ,getNUmber  , getNumbers;
for (let i = 0 ; i < elementQuantityButton.length ; i++ ) {
  let elementQuantityButtonClickNUmber = elementQuantityButton[i] ;

    elementQuantityButtonClickNUmber.addEventListener('click' , function () {
    let getValueAttribute = parseInt(elementQuantityButtonClickNUmber.closest('.quantity').querySelector('.quantity__input').innerHTML ) ;
    if (elementQuantityButtonClickNUmber.classList.contains('quantity__button_plus')) {
     getValueAttribute++ ;     
    } else {
     getValueAttribute-- ; 
     if (getValueAttribute < 1 ) { 
        getValueAttribute = 1 ;  
     }
    } 
    elementQuantityButtonClickNUmber.closest('.quantity').querySelector('.quantity__input').innerHTML = getValueAttribute ;
  }) 
 
}
const elementImage = document.querySelectorAll('.mainslider__image') ; 
let elementsNumber = document.querySelectorAll('.swiper-pagination-bullet .swiper-number');
const elementsDottedText = document.querySelectorAll('.mainslider__dotts .swiper-pagination-bullet')


const elementNOneOrder = document.querySelectorAll('.item-order__delete')  ;
for (let i = 0 ; i < elementNOneOrder.length ; i++ ) {
      elementNOneOrder[i].addEventListener('click', function (e) {
        let elementParent = elementNOneOrder[i].closest('.order-checkout__item') ; 
        elementParent.style.display = 'none' ; 
        e.preventDefault()
      })
}
  
for (let i = 0 ; i < elementsDottedText.length ; i++ ) {
  let elementsDottedTextColumn = elementsDottedText[i] ; 
  let elementsInnersHTML = `<span class="swiper-number">` + elementsDottedTextColumn.innerHTML + `</span>` ;
  elementsDottedTextColumn.innerHTML = elementsInnersHTML ; 
}
const elementProductSubslider = document.querySelectorAll('.image-product__subslider')
 let swiperPaginations = new Swiper('.image-product__subslider',  { 
     obseover: true , 
    observeParents: true , 
    slidesPerView: 3.9  , 
    spaceBetween: 0 , 
    speed: 800 ,
    

    
  })
 if (document.querySelector(".image-product__mainslider")) {
  let productsSlider = new Swiper('.image-product__mainslider', {
    observer: true , 
    observeParents: true , 
    slidesPerView: 1 , 
    spaceBetween: 0 , 
    
    loop: true ,
     thumbs: {
      swiper: swiperPaginations 
    },
     speed: 800 , 
  }) 
 

}

let swiperslider =  new Swiper('.products-slider__item' , {
    obseover: true , 
    loop: true ,
    observeParents: true , 
    sliderPerView: 1  , 
    spaceBetween: 0 , 
    autoHeight: true , 
    speed: 800 , 
    pagination: {
      el: '.products-slider__info' , 
      dynamicBullets:  true ,
      clickable: true ,
      renderBullet: function (index , className ) {
        return '<span class="' + className + '">' + (index + 1 ) + '</span>' 
      } ,
    },
  }) 
  
  let swipersliders =  new Swiper('.brands-slider__body' , {
    observer: true , 
    loop: true ,
    observeParents: true , 
    slidesPerView: 5  , 
    spaceBetween: 0 , 
    autoHeight: true , 
    speed: 800 , 
   autoplay: {
    delay: 1020 , 
    stopOnLastSlide: true , 
    disableOnInteraction: false , 
   } , 
     breakpoints: {

      250: {
        slidesPerView: 1 , 
        spaceBetween:  0 , 
        autoHeight: false , 
      } ,
      320: {
        slidesPerView: 1 , 
        spaceBetween:  0 , 
        autoHeight: false , 
      }, 
      768: {
        slidesPerView: 2 , 
        spaceBetween: 0  ,
       
      } , 
      992: {
        slidesPerView: 4 ,
         autoHeight: true , 
      } ,
      1180: {
        slidesPerView: 5 , 
        spaceBetween: 30 ,
      } ,
     } 
  }) 
//const elementTextNumbers = document.createElement('span') ; 
//elementTextNumbers.append(elementsDottedText) 
//elementsDotted.append(elementsDotted)
for (let i = 0 ; i < elementImage.length ; i++ ) {
  let elementImages = elementImage[i].querySelector('img').getAttribute('src') ; 
  elementsDottedText[i].style.backgroundImage = "url('" + elementImages + "')" ;
  
}

