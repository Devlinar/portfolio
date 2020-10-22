$(document).ready(function(){
  $('.slider').slick({

       /* arrows : false,
        dots : true,
        appendDots : '.slider-dots',
        dotClass : 'dots'
		*/	
    }); 


const bars = document.querySelectorAll('.progress-bar');
 bars.forEach(function(bar){
     let percentage = bar.dataset.percent;
     let tooltip = bar.children[0];
     tooltip.innerText = percentage + '%';
     bar.style.width = percentage + '%';
     console.log(percentage);
 });

 let hamberger = document.querySelector('.hamberger');
 let times = document.querySelector('.times');
 let mobileNav = document.querySelector('.mobile-nav');
 hamberger.addEventListener('click',function(){
     mobileNav.classList.add('open');

 });
 times.addEventListener('click',function(){
    mobileNav.classList.remove('open');

});
});

