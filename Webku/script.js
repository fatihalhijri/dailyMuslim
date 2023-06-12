function Menu(e) {
    let list = document.querySelector('ul');
    e.name === 'menu' ? (e.name = "close", list.classList.add('top-[104px]'),
        list.classList.add('opacity-100')) : (e.name = "menu", list.classList.remove('top-[104px]'),
            list.classList.remove('opacity-100'))

}


// const hamburger = document.querySelector('#hamburger');
// const navMenu = document.querySelector('#nav-menu')

// hamburger.addEventListener ('click', function() {
//     hamburger.classList.toggle('hamburger-active');
//     navMenu.classList.toggle('hidden');
// });




// window.addEventListener('click', function (e){
//     if(e.target != hamburger && e.target != navMenu) {
//         hamburger.classList.remove('hamburger-active');
//         navMenu.classList.add('hidden');
//     }
// })


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



function menu() {
    if (document.documentElement.scrollTop > 700) {
        document.getElementById("header").classList.add("bg-white");

        document.getElementById("header").classList.add("dark:bg-slate-900");
        document.getElementById("header").classList.add("shadow-xl");
        document.getElementById("menu2").classList.add("md:shadow-none");
        document.getElementById("header").classList.add("md:rounded-br-3xl");
        document.getElementById("header").classList.add("md:rounded-bl-3xl");
        document.getElementById("menu2").classList.add("bg-white");
        document.getElementById("menu2").classList.add("dark:bg-slate-900");
        document.getElementById("menu2").classList.add("md:shadow-none");
        document.getElementById("menu2").classList.add("shadow-xl");
        // document.getElementById("menu2").classList.add("rounded-br-3xl");
        // document.getElementById("menu2").classList.add("rounded-bl-3xl");
    } else {
        document.getElementById("header").classList.remove("bg-white");
        
        document.getElementById("header").classList.remove("dark:bg-slate-900");
        document.getElementById("header").classList.remove("md:shadow-none");
        document.getElementById("header").classList.remove("shadow-xl");
        document.getElementById("header").classList.remove("md:rounded-br-3xl");
        document.getElementById("header").classList.remove("md:rounded-bl-3xl");
        document.getElementById("menu2").classList.remove("bg-white");
        document.getElementById("menu2").classList.remove("dark:bg-slate-900");
        document.getElementById("menu2").classList.remove("shadow-xl");
        // document.getElementById("menu2").classList.remove("rounded-br-3xl");
        // document.getElementById("menu2").classList.remove("rounded-bl-3xl");
    }
}


// slider

// currentSlideID = 1;
// sliderElement = document.getElementById('slider');
// totalSlides = sliderElement.childElementCount;


// function next() {
//     if (currentSlideID < totalSlides){
//         currentSlideID++;
//         showSlide()
//     }
        
// }
// function prev() {
//     if (currentSlideID > 1){
//         currentSlideID--;
//         showSlide()
//     }
        
// }

// function showSlide( ){
//     slides = document.getElementById('slider').getElementsByTagName('li')
//     for (let index = 0; index < totalSlides; index++){
//         const element = slides[index];
//         if(currentSlideID===index+1){
            
//                 element.classList.remove('hidden')
//             }
//             else{
//                 element.classList.add('hidden')
//             }
//     }
// }




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



function down(){
    document.getElementById("dropdown1").classList.add("flex")
    document.getElementById("dropdown1").classList.remove("hidden")
}



function up(){
    document.getElementById("dropdown1").classList.add("hidden")
    document.getElementById("dropdown1").classList.remove("flex")
}

// dark mode sandika
const darkToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');

darkToggle.addEventListener('click', function () {
  if (darkToggle.checked) {
    html.classList.add('dark');
    localStorage.theme = 'dark';
  } else {
    html.classList.remove('dark');
    localStorage.theme = 'light';
  }
});

// if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
//     document.documentElement.classList.add('dark')
//   } else {
//     document.documentElement.classList.remove('dark')
//   }



// dark mode pro

// const sunIcon = document.querySelector(".sun");
// const moonIcon = document.querySelector(".moon");

// const userTheme = localStorage.getItem("theme");
// const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;


// // icon toggling
// const iconToggle = () => {
//     moonIcon.classList.toggle("display-none");
//     sunIcon.classList.toggle("display-none");
// };

// // initial them check
// const themeCheck = () => {
//     if (userTheme === "dark" || (!userTheme && systemTheme)) {
//         document.documentElement.classList.add("dark");
//         moonIcon.classList.add("display-none");
//         return;
//     }
//     sunIcon.classList.add("display-none");
// };

// // manual theme switch
// const themeSwitch = () => {
//     if (document.documentElement.classList.contains("dark")) {
//         document.documentElement.classList.remove("dark");
//         localStorage.setItem("theme", "light");
//         iconToggle();
//         return;
//     }
//     document.documentElement.classList.add("dark");
//     localStorage.setItem("theme", "dark");
//     iconToggle();
// };

// // call theme switch on clicking button
// sunIcon.addEventListener("click", () => {
//     themeSwitch();
// });
// moonIcon.addEventListener("click", () => {
//     themeSwitch();
// });

// // invoke theme check on initial load 
// themeCheck();


function munculkan1() {
    document.getElementById('tampilan-poup1').classList.add('flex')
    document.getElementById('tampilan-poup1').classList.remove('hidden')
}

function keluar1() {
    document.getElementById('tampilan-poup1').classList.add('hidden')
    document.getElementById('tampilan-poup1').classList.remove('flex')
}


function munculkan2() {
    document.getElementById('tampilan-poup2').classList.add('flex')
    document.getElementById('tampilan-poup2').classList.remove('hidden')
}

function keluar2() {
    document.getElementById('tampilan-poup2').classList.add('hidden')
    document.getElementById('tampilan-poup2').classList.remove('flex')
}


function munculkan3() {
    document.getElementById('tampilan-poup3').classList.add('flex')
    document.getElementById('tampilan-poup3').classList.remove('hidden')
}

function keluar3() {
    document.getElementById('tampilan-poup3').classList.add('hidden')
    document.getElementById('tampilan-poup3').classList.remove('flex')
}
