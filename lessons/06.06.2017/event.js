document.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    console.log(this);
});

var btn = document.querySelector('.btn');
btn.addEventListener('click', function (e) {
    console.log('click1')
});

btn.addEventListener('click', function (e) {
    console.log('click2')
});