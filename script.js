loader();

// document.querySelector('.btn').onclick = loader;


/*====================================
*     LOADER
======================================*/
function loader(success) {
    // const obj = document.querySelector('.preloader'),
    const inner = document.querySelector('.preloader_inner'),
    page = document.querySelector('.page'),
    btn = document.querySelector('.btn');
    btn.classList.add('unshow');
    inner.classList.add('show')
    page.classList.add('show');
    let w = 0,
        t = setInterval(function() {
            w = w + 1;
            inner.textContent = w+'%';
            if (w === 100){
                btn.classList.remove('unshow');
                inner.classList.remove('show');
                inner.classList.add('unshow')
                // obj.classList.add('unshow')
                // page.classList.add('unshow');
                clearInterval(t);
                w = 0;  
            }
        }, 10);
}

document.querySelector('.btn').addEventListener('mouseup', function() {
    const obj = document.querySelector('.preloader'),
    page = document.querySelector('.page');
    page.classList.remove('show');
    console.log(200)
})



// let loader = document.querySelector('.loader');
// window.setTimeout(function() {
//     loader.style.display = 'none';
// }, 10000);


