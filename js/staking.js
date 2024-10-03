const burgerBtn = $('.burger');
const headerContent = $('.header__content');
const menuItem = $('.menu__item');
const headerLink = $('.header__link')

burgerBtn.on('click',function(){
    let paddingOffset = window.innerWidth - document.body.offsetWidth + 'px'
    headerContent.toggleClass('open');
    $('body').toggleClass('open-menu');
    document.body.style.paddingRight = paddingOffset;

    /*Закрытие при клике на ссылки*/
    menuItem.each(function(item){
        $(this).on('click',function(){
            headerContent.removeClass('open');
            $('body').removeClass('open-menu');
            document.body.style.paddingRight = 0;
        })
    })

    headerLink.on('click',function(){
        headerContent.removeClass('open');
        $('body').removeClass('open-menu');
        document.body.style.paddingRight = 0;
    })

    /*Закрытие при клике вне блока*/
    $(document).on('click',function(e){
        if(!$(e.target).closest('.header__content').length){
            headerContent.removeClass('open');
            $('body').removeClass('open-menu');
            document.body.style.paddingRight = 0;
        }
    })
})

/////////////////////////////////////////////////////////////////

const headerLangActive = $('.header__lang-active');
const headerLangOpen = $('.header__lang-open');
const headerLangContent = $('.header__lang-content');

headerLangContent.each(function(item){
    if($(this).hasClass('active')){
        let currentText = $(this).text()
        headerLangActive.text(currentText)
    }
})

headerLangActive.on('click',function(){
    headerLangOpen.toggleClass('open');
    headerLangContent.each(function(item){
        $(this).on('click',function(){
            let currentText = $(this).text()
            headerLangActive.text(currentText)
            headerLangOpen.removeClass('open');
        })
    })
})

/////////////////////////////////////////////////////////////////

const preSalePayCurrencyActive = $('.preSale-pay__currency-active');
const preSalePayCurrencyOpen = $('.preSale-pay__currency-open');
const preSalePayCurrencyContent = $('.preSale-pay__currency-content');

preSalePayCurrencyContent.each(function(item){
    if($(this).hasClass('active')){
        let currentText = $(this).html()
        preSalePayCurrencyActive.html(currentText)
    }
})

preSalePayCurrencyActive.on('click',function(){
    preSalePayCurrencyOpen.toggleClass('open');
    preSalePayCurrencyContent.each(function(item){
        $(this).on('click',function(){
            let currentText = $(this).html()
            preSalePayCurrencyActive.html(currentText)
            preSalePayCurrencyOpen.removeClass('open');
        })
    })
})

/////////////js////////////////


