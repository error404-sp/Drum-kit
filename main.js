
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

const keys = document.querySelectorAll('.key');
keys.forEach(key=>{
    
    
});