function Menu(e) {
    let list = document.querySelector('ul');
    e.name === 'menu' ? (e.name = "close", list.classList.add('top-[104px]'), 
    list.classList.add('opacity-100')) : (e.name = "menu" , list.classList.remove('top-[104px]'),
    list.classList.remove('opacity-100'))

    // let list2 = document.querySelector('ul');
    // e.name === 'menu' ? (e.name = "close", list2.classList.add('bg-gray-900')) :
    // (e.name = "menu" , list2.classList.remove('bg-gray-900'))

}