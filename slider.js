const productContainers = [...document.querySelectorAll('.cat-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += 1090;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= 1090;
    })
})