function Menu(e) {
    let list = document.querySelector('ul');
    e.name === 'menu' ? (e.name = "close", list.classList.add('top-[104px]'), 
    list.classList.add('opacity-100')) : (e.name = "menu" , list.classList.remove('top-[104px]'),
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

    function menu() {
        if (document.documentElement.scrollTop > 40) {
            document.getElementById("header").classList.add("bg-transparent");
            document.getElementById("header").classList.add("shadow-xl");
            document.getElementById("header").classList.add("rounded-br-3xl");
            document.getElementById("header").classList.add("rounded-bl-3xl");
        } else {
            document.getElementById("header").classList.remove("bg-transparent");
            document.getElementById("header").classList.remove("shadow-xl");
            document.getElementById("header").classList.remove("rounded-br-3xl");
            document.getElementById("header").classList.remove("rounded-bl-3xl");
        }
    }

    // function showHideMenu() {
    //     var menu = document.getElementById("daftarMenu");
    //     if (xstatus) {
    //         menu.classList.add("hidden");
    //         menu.classList.remove("flex");
    //         xstatus = false;
    //     } else {
    //         menu.classList.remove("hidden");
    //         menu.classList.add("flex");
    //         xstatus = true;
    //     }
    //     console.log(xstatus);
    // }


    

