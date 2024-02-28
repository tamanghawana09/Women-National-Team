function startAnimation() {
    var box1 = document.getElementById('box1');
    var box2 = document.getElementById('box2');
    var box3 = document.getElementById('box3');
    var box4 = document.getElementById('box4');
    box1.classList.add('box1-animation');
    box2.classList.add('box2-animation');
    box3.classList.add('box3-animation');
    box4.classList.add('box4-animation');

    box1.addEventListener('animationend', function(){
        box1.style.display = 'none';
        setTimeout(function(){
            window.location.href = 'home.html';
        },1000);
    },{once:true});

    box3.addEventListener('animationend', function(){
        box3.style.display = 'none';
    },{once:true});
}