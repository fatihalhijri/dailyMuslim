function Menu(e) {
    let list = document.querySelector('ul');
    e.name === 'menu' ? (e.name = "close", list.classList.add('top-[104px]'),
        list.classList.add('opacity-100')) : (e.name = "menu", list.classList.remove('top-[104px]'),
            list.classList.remove('opacity-100'))

}

// let list2 = document.querySelector('ul');
// e.name === 'menu' ? (e.name = "close", list2.classList.add('bg-gray-900')) :
// (e.name = "menu" , list2.classList.remove('bg-gray-900'))

// window.onscroll = function () { xmenu() };

// function xmenu() {
//     console.log("asa");
//     if (document.documentElement.scrollTop > 20) {
//         document.getElementById('header').classList.add('bg-white');
//         documnet.getElementById('header').classList.add('shadow-md');
//     } else {
//         document.getElementById('header').classList.remove('bg-white');
//         documnet.getElementById('header').classList.remove('shadow-md');
//     }
// }

window.onscroll = function () { menu() };
// var xstatus = false;

function bebas() {
    document.getElementById("sds").classList.add("flex")
    document.getElementById("sds").classList.remove("flex")
    document.getElementById("sds").classList.add("flex")
    document.getElementById("sds").classList.remove("flex")
}

function menu() {
    if (document.documentElement.scrollTop > 700) {
        document.getElementById("header").classList.add("bg-white");
        document.getElementById("header").classList.add("shadow-xl");
        document.getElementById("header").classList.add("rounded-br-3xl");
        document.getElementById("header").classList.add("rounded-bl-3xl");
        document.getElementById("menu2").classList.add("bg-transparent");
        document.getElementById("menu2").classList.add("md:shadow-none");
        document.getElementById("menu2").classList.add("shadow-xl");
        document.getElementById("menu2").classList.add("rounded-br-3xl");
        document.getElementById("menu2").classList.add("rounded-bl-3xl");
    } else {
        document.getElementById("header").classList.remove("bg-white");
        document.getElementById("header").classList.remove("md:shadow-none");
        document.getElementById("header").classList.remove("shadow-xl");
        document.getElementById("header").classList.remove("rounded-br-3xl");
        document.getElementById("header").classList.remove("rounded-bl-3xl");
        document.getElementById("menu2").classList.remove("bg-transparent");
        document.getElementById("menu2").classList.remove("shadow-xl");
        document.getElementById("menu2").classList.remove("rounded-br-3xl");
        document.getElementById("menu2").classList.remove("rounded-bl-3xl");
    }
}

currentSlideID = 1;
sliderElement = document.getElementById('slider');
totalSlides = sliderElement.childElementCount;


function next() {
    if (currentSlideID < totalSlides){
        currentSlideID++;
        showSlide()
    }
        
}
function prev() {
    if (currentSlideID > 1){
        currentSlideID--;
        showSlide()
    }
        
}

function showSlide( ){
    slides = document.getElementById('slider').getElementsByTagName('li')
    for (let index = 0; index < totalSlides; index++){
        const element = slides[index];
        if(currentSlideID===index+1){
            
                element.classList.remove('hidden')
            }
            else{
                element.classList.add('hidden')
            }
    }
}




function page1() {
    document.getElementById("page1").classList.add("md:flex")
    document.getElementById("page1").classList.add("md:flex")
    document.getElementById("page1").classList.remove("hidden")
    

    document.getElementById("page2").classList.add("hidden")
    

    document.getElementById("page3").classList.add("hidden")
    
    
}
function page2() {
    document.getElementById("page2").classList.add("md:flex")
    document.getElementById("page2").classList.add("flex")
    document.getElementById("page2").classList.remove("hidden")
    


    document.getElementById("page1").classList.add("hidden")
    
    
    document.getElementById("page3").classList.add("hidden")
    
    
}
function page3() {
    document.getElementById("page3").classList.add("md:flex")
    document.getElementById("page3").classList.add("flex")
    document.getElementById("page3").classList.remove("hidden")
    
    

    document.getElementById("page2").classList.add("hidden")
    
    
    document.getElementById("page1").classList.add("hidden")
    
    
}

// timeee~~~~~~~~~~
function showTime() {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();

    var time = hours + ":" + minutes + ":" + seconds;

    document.getElementById("clock").textContent = time;

    setTimeout(showTime, 1000);
}

showTime();

function showDate() {
    var date = new Date();
    var day = date.getDate();
    var months = date.getMonth() +1;
    var year = date.getFullYear();

    var fullDate = day + "/" + months + "/" + year;
    document.getElementById("date").textContent = fullDate;
}

showDate();

