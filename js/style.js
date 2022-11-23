let pg1 = document.getElementById("pg1") ; 
let pg2 = document.getElementById("pg2") ; 
let pg3 = document.getElementById("pg3") ; 
let pg4 = document.getElementById("pg4") ; 
let pg5 = document.getElementById("pg5") ; 
let pg6 = document.getElementById("pg6") ; 

// Page 1 
pg1.addEventListener("click" , function() {
    p2.style.transform = "translateX(200%)" ;
    p3.style.transform = "translateX(200%)" ;
    p4.style.transform = "translateX(200%)" ;
    p5.style.transform = "translateX(200%)" ;
    p6.style.transform = "translateX(200%)" ;
    p2.style.transitionDuration = "8s" ;

})
// Page 2
let p2 = document.getElementById("p2") ;
 pg2.addEventListener("click",function() {
    // p2.style.width = "100%" ;
    // p2.style.height= "100vh" ;
    p2.style.transform = "translateX(-200%)" ;
    p3.style.transform = "translateX(200%)" ;
    p4.style.transform = "translateX(200%)" ;
    p5.style.transform = "translateX(200%)" ;
    p6.style.transform = "translateX(200%)" ;
    p2.style.transitionDuration = "4s" ;
})

// Page 3
let p3 = document.getElementById("p3") ;
 pg3.addEventListener("click",function() {
    // p2.style.width = "100%" ;
    // p2.style.height= "100vh" ;
    p2.style.transform = "translateX(200%)" ;
    p3.style.transform = "translateX(-200%)" ;
    p4.style.transform = "translateX(200%)" ;
    p5.style.transform = "translateX(200%)" ;
    p6.style.transform = "translateX(200%)" ;
    p3.style.transitionDuration = "4s" ;
}) ;

// Page 4
let p4 = document.getElementById("p4") ;
pg4.addEventListener("click",function() {
    p2.style.transform = "translateX(200%)" ;
    p3.style.transform = "translateX(200%)" ;
    p4.style.transform = "translateX(-200%)" ;
    p5.style.transform = "translateX(200%)" ;
    p6.style.transform = "translateX(200%)" ;
    p4.style.transitionDuration = "4s" ;
} ) ;

// Page 5
let p5 = document.getElementById("p5") ;
pg5.addEventListener("click",function() {
    p2.style.transform = "translateX(200%)" ;
    p3.style.transform = "translateX(200%)" ;
    p4.style.transform = "translateX(200%)" ;
    p5.style.transform = "translateX(-200%)" ;
    p6.style.transform = "translateX(200%)" ;
    p5.style.transitionDuration = "4s" ;
} ) ;

// Page 5
let p6 = document.getElementById("p6") ;
pg6.addEventListener("click",function() {
    p2.style.transform = "translateX(200%)" ;
    p3.style.transform = "translateX(200%)" ;
    p4.style.transform = "translateX(200%)" ;
    p5.style.transform = "translateX(200%)" ;
    p6.style.transform = "translateX(-200%)" ;
    p6.style.transitionDuration = "4s" ;
} ) 