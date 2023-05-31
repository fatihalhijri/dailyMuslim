function Menu(e) {
    let list = document.querySelector('ul');
    e.name === 'menu' ? (e.name = "close", list.classList.add('top-[104px]'),
        list.classList.add('opacity-100')) : (e.name = "menu", list.classList.remove('top-[104px]'),
            list.classList.remove('opacity-100'))

}
window.onscroll = function () { menu() };
// var xstatus = false;



// function menu() {
//     if (document.documentElement.scrollTop > 20) {
//         document.getElementById("header").classList.add("bg-white");
//         document.getElementById("header").classList.add("shadow-xl");
//         document.getElementById("header").classList.add("rounded-br-3xl");
//         document.getElementById("header").classList.add("rounded-bl-3xl");
//         document.getElementById("menu2").classList.add("bg-white");
//         document.getElementById("menu2").classList.add("md:shadow-none");
//         document.getElementById("menu2").classList.add("shadow-xl");
//         document.getElementById("menu2").classList.add("rounded-br-3xl");
//         document.getElementById("menu2").classList.add("rounded-bl-3xl");
//     } else {
//         document.getElementById("header").classList.remove("bg-white");
//         document.getElementById("menu2").classList.remove("md:shadow-none");
//         document.getElementById("header").classList.remove("shadow-xl");
//         document.getElementById("header").classList.remove("rounded-br-3xl");
//         document.getElementById("header").classList.remove("rounded-bl-3xl");
//         document.getElementById("menu2").classList.remove("bg-white");
//         document.getElementById("menu2").classList.remove("shadow-xl");
//         document.getElementById("menu2").classList.remove("rounded-br-3xl");
//         document.getElementById("menu2").classList.remove("rounded-bl-3xl");
//     }
// }

function menu() {
    if (document.documentElement.scrollTop > 20) {
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



// function pertama() {
//     document.getElementById("pertama").classList.add("md:flex")
//     document.getElementById("pertama").classList.add("md:flex")
//     document.getElementById("pertama").classList.remove("hidden")
//     document.getElementById("pertama").classList.remove("hidden")

//     document.getElementById("kedua").classList.add("hidden")
//     document.getElementById("kedua").classList.add("hidden")

//     document.getElementById("ketiga").classList.add("hidden")
//     document.getElementById("ketiga").classList.add("hidden")
    
// }
// function kedua() {
//     document.getElementById("kedua").classList.add("md:flex")
//     document.getElementById("kedua").classList.add("flex")
//     document.getElementById("kedua").classList.remove("md:hidden")
//     document.getElementById("kedua").classList.remove("hidden")


//     document.getElementById("pertama").classList.add("hidden")
//     document.getElementById("pertama").classList.add("hidden")
    
//     document.getElementById("ketiga").classList.add("hidden")
//     document.getElementById("ketiga").classList.add("hidden")
    
// }
// function ketiga() {
//     document.getElementById("ketiga").classList.add("md:flex")
//     document.getElementById("ketiga").classList.add("flex")
//     document.getElementById("ketiga").classList.remove("hidden")
//     document.getElementById("ketiga").classList.remove("hidden")
    

//     document.getElementById("kedua").classList.add("hidden")
//     document.getElementById("kedua").classList.add("hidden")
    
//     document.getElementById("pertama").classList.add("hidden")
    
    
// }
// home~~~~~~~~~~~~~~~

function satu() {
    document.getElementById("satu").classList.add("flex")
    document.getElementById("satu").classList.remove("hidden")
    document.getElementById("dua").classList.add("hidden")
    document.getElementById("tiga").classList.add("hidden")
    
}
function dua() {
    document.getElementById("dua").classList.add("flex")
    document.getElementById("dua").classList.remove("hidden")
    document.getElementById("satu").classList.add("hidden")
    document.getElementById("tiga").classList.add("hidden")
    
}
function tiga() {
    document.getElementById("tiga").classList.add("flex")
    document.getElementById("tiga").classList.remove("hidden")
    document.getElementById("dua").classList.add("hidden")
    document.getElementById("satu").classList.add("hidden")
    // document.getElementById("kesatu").classList.remove("satu")
    
}



function down(){
    document.getElementById("dropdown1").classList.add("flex")
    document.getElementById("dropdown1").classList.remove("hidden")
}



function up(){
    document.getElementById("dropdown1").classList.add("hidden")
    document.getElementById("dropdown1").classList.remove("flex")
}










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


function munculkan1() {
    document.getElementById('tampilan-poup').classList.add('flex')
    document.getElementById('tampilan-poup').classList.remove('hidden')
}

function keluar1() {
    document.getElementById('tampilan-poup').classList.add('hidden')
    document.getElementById('tampilan-poup').classList.remove('flex')
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

function munculkan4() {
    document.getElementById('tampilan-poup4').classList.add('flex')
    document.getElementById('tampilan-poup4').classList.remove('hidden')
}

function keluar4() {
    document.getElementById('tampilan-poup4').classList.add('hidden')
    document.getElementById('tampilan-poup4').classList.remove('flex')
}

function munculkan5() {
    document.getElementById('tampilan-poup5').classList.add('flex')
    document.getElementById('tampilan-poup5').classList.remove('hidden')
}

function keluar5() {
    document.getElementById('tampilan-poup5').classList.add('hidden')
    document.getElementById('tampilan-poup5').classList.remove('flex')
}


function munculkan6() {
    document.getElementById('tampilan-poup6').classList.add('flex')
    document.getElementById('tampilan-poup6').classList.remove('hidden')
}

function keluar6() {
    document.getElementById('tampilan-poup6').classList.add('hidden')
    document.getElementById('tampilan-poup6').classList.remove('flex')
}



function munculkan7() {
    document.getElementById('tampilan-poup7').classList.add('flex')
    document.getElementById('tampilan-poup7').classList.remove('hidden')
}

function keluar7() {
    document.getElementById('tampilan-poup7').classList.add('hidden')
    document.getElementById('tampilan-poup7').classList.remove('flex')
}