const reusableMenu=(ide,down)=>{
    document.querySelector(`#${ide}`).addEventListener('click',()=>{
        let menu=document.querySelector(`.${down}`);
        console.log(menu)
        menu.matches(`.active`)? menu.classList.remove('active'): menu.classList.add('active');
    });
    
}
reusableMenu("rolling","dropDown")
