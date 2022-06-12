const ratings = document.querySelectorAll('.rating > .circle')
let VALUE = 0;
ratings.forEach(rating => rating.
    addEventListener('mousedown', (e) => {
        ratings.forEach(element => {
            element.classList.remove('active')
        });
        VALUE = e.target.innerHTML;
        e.target.classList.toggle('active')
        e.target.classList.toggle('hover')
    })
)

ratings.forEach(rating => rating.
    addEventListener('mouseover', (e) => {
        console.log("enter")
        e.target.classList.toggle('hover')
    })
)

ratings.forEach(rating => rating.
    addEventListener('mouseleave', () => {
        ratings.forEach(element => {
            element.classList.remove('hover')
        });
    })
)


const submit = document.querySelector('button');
const ratingForm = document.querySelector('.form');
const thankYouForm = document.querySelector('.finish');
const span = document.querySelector('#value')

submit.addEventListener('click',() => {
    ratingForm.style.display='none';
    thankYouForm.style.display='flex';
    span.innerHTML = VALUE
})