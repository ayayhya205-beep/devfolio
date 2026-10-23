document.querySelector('.dropdown-sub > a').addEventListener('click',function(e){
    e.preventDefault();
    e.stopPropagation();
    this.nextElementSibling.classList.toggle('show');
});
document.querySelector('.navbar .dropdown').addEventListener('hide.bs.dropdown', function () {
    document.querySelector('.dropdown-sub > .dropdown-menu').classList.remove('show');
});
new Typed('#typing', {
    strings: ['Developer', 'Front-End Developer'],
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 1500,
    loop: true
});


window.addEventListener('scroll',function(){
    let backToTop=document.querySelector('.back-to-top');
    if(window.scrollY>100){
        backToTop.classList.add('active');
    }
    else{
        backToTop.classList.remove('active');
    }
})