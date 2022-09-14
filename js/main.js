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
      Width <= 992 ? 
     functionehead( elementItemMenu.after(elementLogo)) : 
      
      functionehead( headerContent.prepend(elementLogo))


      
})
function functioneWin (side , a) {
   return side.append(a)
}
function functionehead(sids  ) {
  return sids;
  
}
const elemen__burger = document.querySelector('.menu-page__lines') ; 
const menuBody = document.querySelector('.menu-page__body')
const menuPageBleck = document.querySelector('.menu-page__bleck') ;
elemen__burger.addEventListener('click' , function () {
  elemen__burger.classList.toggle('_actives');
  menuBody.classList.toggle('_actives') ;
  menuPageBleck.classList.toggle('__active') ; 
})
document.addEventListener('click' , function(e) {
        if (e.target === elemen__burger || e.target.closest(".menu-page__lines span")) {
          document.body.style.overflow = 'hidden' ; 
        } 
        if (!elemen__burger.classList.contains('_actives')) {
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

var slider = document.getElementById('slider'); 
 
noUiSlider.create(slider, { 
    start: [0, 1000],
    connect: true,
    tooltips: [wNumb({ decimals: 0 }) , wNumb({ decimals: 0 }) ]  ,
    range: {
        'min': 0,
        'max': 1000 
    }
});
const elementPriceStart = document.getElementById('price-start') ; 
const elementPriceEnd = document.getElementById('price-end') ; 

elementPriceStart.addEventListener('input', functionWinValues)
elementPriceEnd.addEventListener('input', functionWinValues);
function functionWinValues () {
  let elementPriceValueStart ; 
  let elementPriceValueEnd ; 
  if (elementPriceStart.value != '' ) {
        elementPriceValueStart = elementPriceStart.value ; 
  }

  if (elementPriceEnd.value != '' ) {
      elementPriceValueEnd = elementPriceEnd.value ; 
  }

  slider.noUiSlider.set([elementPriceValueStart, elementPriceValueEnd ])
}
const elementSectionLabel = document.querySelector('._spoller') ; 
const sectionHidden = document.querySelector('.section__body-hidden')
elementSectionLabel.addEventListener('click' , function ()  {
    elementSectionLabel.classList.toggle('_active')
    sectionHidden.classList.toggle('__active')  ; 
    const elementChakbox  = document.querySelectorAll('.section-filter__check') ; 
    if (elementChakbox.length > 5 ) {
        sectionHidden.classList.toggle('__activedbleto')
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
const elementImage = document.querySelectorAll('.mainslider__image') ; 
let elementsNumber = document.querySelectorAll('.swiper-pagination-bullet .swiper-number');
const elementsDottedText = document.querySelectorAll('.mainslider__dotts .swiper-pagination-bullet')



  
for (let i = 0 ; i < elementsDottedText.length ; i++ ) {
  let elementsDottedTextColumn = elementsDottedText[i] ; 
  let elementsInnersHTML = `<span class="swiper-number">` + elementsDottedTextColumn.innerHTML + `</span>` ;
  elementsDottedTextColumn.innerHTML = elementsInnersHTML ; 
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
      el: '.products-slider__info_page' , 
      dynamicBullets:  true ,
      clickable: true ,
      renderBullet: function (index , className ) {
        return '<span class="' + className + '">' + (index + 1 ) + '</span>' 
      } ,
    },
  }) 

const elementProductLastLink = document.querySelector('.products-slider__laste')
let elementLastPaginationsSlider , elementLastPaginationsSlide , createElementPer , elementLastPaginationsSliders; 
document.addEventListener('DOMContentLoaded' , function () { 
 const elementLastPaginations = document.querySelector('.swiper-pagination-bullet:last-child')
 elementLastPaginations.classList.add("__activeLAstBUllet") 
  elementProductLastLink.append(elementLastPaginations)
  elementLastPaginationsSlider = elementProductLastLink.querySelector('.__activeLAstBUllet');
  

})



const elementRemoveCompareFilter = document.querySelectorAll('.compare-filter__remove') ;
const elementRemoveCompareFilterLastChild = document.querySelector('.compare-filter__remove:last-child') ;
for (let i = 0 ; i < elementRemoveCompareFilter.length;  i++) { 
  let elementRemoveCompareFilterNUmber = elementRemoveCompareFilter[i] ;   
    elementRemoveCompareFilterNUmber.addEventListener('click' , function (e) {   
      elementRemoveCompareFilterNUmber.parentElement.style.display = 'none' ;
      console.log(elementRemoveCompareFilter)
       e.preventDefault() ; 
   });

} 
document.addEventListener('click' , function () {
  const elementItemFilter = document.querySelectorAll('.compare-filter__item') 
  for (let i = 0 ; i < elementItemFilter.length ; i++ ) { 
    if (elementItemFilter[i].style.display === 'none') { 
      document.querySelector('.compare-filter').closest('.section-filter__body').style.display = 'none'
    }
    if (elementItemFilter[i].style.display !== 'none') {
      document.querySelector('.compare-filter').closest('.section-filter__body').style.display = 'block'
    }
  }
})
const elementInfoPage = document.querySelector('.products-slider__info_page') ; 
const elementLasteSlider = document.querySelector('.products-slider__laste');
const elementProductControls = document.querySelector('.products-slider__controls')

let elementFirstBullet ,  elementPaaginationsFIrsClone , elementClone  ; 
document.addEventListener("click" , function (e) {
const elementLastPaginationsNext = document.querySelector('.swiper-pagination-bullet:last-child')
const elementPaginationsNextFirst = document.querySelector('.swiper-pagination-bullet:first-child') ;
const elementControlsChildren = document.querySelector('.products-slider__controls').children ;
console.log(elementControlsChildren)
console.log(elementLastPaginationsSlider)
 elementPaaginationsFIrsClone = elementPaginationsNextFirst.cloneNode(true) ;
    if (e.target === elementLastPaginationsNext) {
        elementInfoPage.append(elementLastPaginationsSlider) ;
    }
      if (e.target === elementLastPaginationsSlider) {
       elementInfoPage.append(elementLastPaginationsSlider) ; 
        document.querySelector('.swiper-pagination-bullet:last-child').click() ;
        elementProductControls.prepend(elementLasteSlider) ;
       functionLastSlider()
            elementClone = document.querySelector('.products-slider__laste span')
     functionCLonNone('flex')
    }  else if (e.target === elementLastPaginationsSlider || elementLastPaginationsNext !== elementLastPaginationsSlider && e.target === elementLastPaginationsNext) {
      elementInfoPage.append(elementLastPaginationsSlider) ; 
        document.querySelector('.swiper-pagination-bullet:last-child').previousElementSibling.click() ;
        elementProductControls.prepend(elementLasteSlider) ; 
       functionLastSlider()
            elementClone = document.querySelector('.products-slider__laste span')
     functionCLonNone('flex')
    }
    function functionLastSlider () {
       if (!elementLasteSlider.querySelector('span')) {
          elementLasteSlider.prepend(elementPaaginationsFIrsClone) 
       
        }
    }
    function functionCLonNone (a) {
       elementClone.style.display = a ;

    }


 elementPaaginationsFIrsClone.addEventListener('click' , function () { 
  if (!elementLasteSlider.querySelector('span')) {
      elementLasteSlider.append(elementLastPaginationsNext)  
  
  }
     document.querySelector('.swiper-pagination-bullet:first-child').click() 
    elementProductControls.append(elementLasteSlider)
    if (!elementLasteSlider.querySelector('.__activeLAstBUllet')) {
      let elemetLAstPaginationActive = elementInfoPage.querySelector('.__activeLAstBUllet')
    elementLasteSlider.append(elemetLAstPaginationActive) 
    }
    functionCLonNone('none')
  })
 if (elementLastPaginationsNext !== elementLastPaginationsSlider && e.target === elementLastPaginationsNext) {
       elementProductControls.prepend(elementLasteSlider) ; 
      functionCLonNone('flex')
    }
    if (elementLastPaginationsNext === elementLastPaginationsSlider && e.target === elementLastPaginationsNext.previousElementSibling) {
       elementProductControls.prepend(elementLasteSlider) ; 
       //functionCLonNone() ;
      
    } else if (elementLastPaginationsNext === elementLastPaginationsSlider && e.target === elementLastPaginationsNext.previousElementSibling.previousElementSibling) {
        elementLasteSlider.append(elementLastPaginationsNext) ;
        elementProductControls.append(elementLasteSlider) ; 
       functionCLonNone('none') ;
    } else if (e.target === elementLastPaginationsNext.previousElementSibling.previousElementSibling.previousElementSibling) {
        if (!elementLasteSlider.querySelector('.__activeLAstBUllet')) {
         elementLasteSlider.append(elementLastPaginationsNext) ;
        }
       elementProductControls.append(elementLasteSlider) ; 
       functionCLonNone('none') ;
    }
    
    let windowWidth = Math.max(document.documentElement.offsetWidth , window.innerWidth) ;
  if (windowWidth <= 460) {
    if (elementLasteSlider.querySelector('.__activeLAstBUllet')) {
      elementLasteSlider.style.left = '0' ;
    } else {
      elementLasteSlider.style.left = '40px'
    }
  } else {
    elementLasteSlider.style.left = '40px'
  }

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

