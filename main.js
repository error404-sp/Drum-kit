
window.addEventListener('keydown',e=>{
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const keys = document.querySelectorAll(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
    keys.forEach(key => {key.classList.add('playing');
    key.addEventListener('transitionend',g=>{
        if(g.propertyName!=='transform')return ;
        g.target.classList.remove('playing');
    })
}
);
    
});

const buttons = document.querySelectorAll(`button`);
buttons.forEach(button =>{
button.addEventListener('click',g=>{
    //console.log(g);
    const audiokey = button.getAttribute('data-key');
    //console.log(audiokey);
    const audio1 = document.querySelector(`audio[data-key="${audiokey}"]`);
    if(!audio1) return;
    audio1.currentTime = 0;
    audio1.play();
    button.classList.add('playing');
    button.addEventListener('transitionend',f=>{
        if(f.propertyName!=='transform')return ;
        f.target.classList.remove('playing');
    })

});
});