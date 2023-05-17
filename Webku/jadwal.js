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

function Menu(e) {
    let list = document.querySelector('ul');
    e.name === 'menu' ? (e.name = "close", list.classList.add('top-[104px]'),
        list.classList.add('opacity-100')) : (e.name = "menu", list.classList.remove('top-[104px]'),
            list.classList.remove('opacity-100'))

}
window.onscroll = function () { menu() };
// var xstatus = false;



function menu() {
    if (document.documentElement.scrollTop > 20) {
        document.getElementById("header").classList.add("bg-white");
        document.getElementById("header").classList.add("shadow-xl");
        document.getElementById("header").classList.add("rounded-br-3xl");
        document.getElementById("header").classList.add("rounded-bl-3xl");
        document.getElementById("menu2").classList.add("bg-white");
        document.getElementById("menu2").classList.add("md:shadow-none");
        document.getElementById("menu2").classList.add("shadow-xl");
        document.getElementById("menu2").classList.add("rounded-br-3xl");
        document.getElementById("menu2").classList.add("rounded-bl-3xl");
    } else {
        document.getElementById("header").classList.remove("bg-white");
        document.getElementById("menu2").classList.remove("md:shadow-none");
        document.getElementById("header").classList.remove("shadow-xl");
        document.getElementById("header").classList.remove("rounded-br-3xl");
        document.getElementById("header").classList.remove("rounded-bl-3xl");
        document.getElementById("menu2").classList.remove("bg-white");
        document.getElementById("menu2").classList.remove("shadow-xl");
        document.getElementById("menu2").classList.remove("rounded-br-3xl");
        document.getElementById("menu2").classList.remove("rounded-bl-3xl");
    }
}