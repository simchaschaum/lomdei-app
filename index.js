// Index Page - the counters
const counters = document.querySelectorAll('.counter');
const speed = 50;

counters.forEach(counter => {
    const updateCount = () => {
        const target = parseInt(counter.getAttribute('data-target'));
        const count = parseInt(counter.innerText);
        const increment = Math.trunc(target/speed);
        if(count < target){
            counter.innerText = count + increment;
            setTimeout(() => {
                updateCount()
            }, 10);
        } else {
            counter.innerText = target;
        }
    };
    updateCount();
})


// Videos Page - table of contents
const contents = document.querySelector('#contents');
const contentsDropup = document.querySelector('#contentsDropup')


window.onscroll = () => {
    scrollFunction()
}

function scrollFunction(){
    if(document.body.scrollTop > 400 || document.documentElement.scrollTop > 400){
        contentsDropup.classList.add("showIt");
    } else {
        contentsDropup.classList.remove("showIt");
    }
}