
let album=['./images/MANNY.JPG','./images/noPhone.JPG','./images/normal.JPG','./images/NPCStanding.jpeg','./images/thugging.JPG']
const imageCarousel=()=>{
    let count=0
    let imageArray=[]
    let dots=[]
    // let carousel=document.querySelector('#carousel')
    let balls=document.querySelector('#balls')
    let left=document.querySelector('#left')
    let right=document.querySelector('#right')
    let container=document.querySelector('#images')
    left.addEventListener('click',()=>{
        count-=1;
        count=count<0?imageArray.length-1:count;
        console.log(count)
        display();
    })
    right.addEventListener('click',()=>{
        count+=1;
        count=count>imageArray.length-1?0:count;
        console.log(count)
        display();
    })
    const add=image=>{  
        let pic=document.createElement('img');
        pic.src=image;
        imageArray.push(pic);
        let dot=document.createElement('span')
        dot.setAttribute("class","dot");
        dots.push(dot);
        container.appendChild(pic);
        balls.appendChild(dot);
        if(imageArray.length===1){
            pic.style.display="block"
            dot.setAttribute('style',"background-color:rgb(9, 135, 246)")
        }
        else{
            pic.style.display="none"
        }
        for(let i=0;i<dots.length;i++){
            dots[i].addEventListener('click',()=>display(i));
        }
        pic.setAttribute('class',"frame");
    }
    const display=num=>{
        if(num!==undefined){
            count=num;
        }
        imageArray.forEach(el=>el.style.display="none");
        imageArray[count].style.display="block";
        dots.forEach(el=>el.style.backgroundColor="white");
        dots[count].style.backgroundColor="rgb(9, 135, 246)";
    }
    const rightCallBack=()=>right.click()
    const idle=()=>{
        window.setInterval(rightCallBack,5000)
    }
    return {add,idle}
}
let tiendo=imageCarousel();
album.forEach(el=>tiendo.add(el));
tiendo.idle()

//not using webpack so cant use this...
// import manny from './images/MANNY.JPG'
// import noPhone from './images/noPhone.JPG'
// import normal from './images/normal.JPG'
// import npc from './images/NPCStanding.JPG'
// import thug from './images/thugging.JPG'

//
// const whyNoBootStrap=(adi,text)=>{
//     const name=document.querySelector(`#${adi}`);
//     const supplement=document.createElement('div');
//     supplement.id="suppl"
//     content.appendChild(name);
//     name.textContent=`${text}`;
//     supplement.innerHTML=`<ul class='dropDown'>
//         <li>Something</li>
//         <li>Something</li>
//         <li>Something</li>
//     </ul>`
//     content.appendChild(supplement);
//     name.addEventListener('click',()=>{
//     if(supplement.style.display==="none"){
//         supplement.setAttribute('style',"display:flex;")
//     } 
//     else{
//         supplement.setAttribute('style',"display:none;");
//     }
// }) 
// };
// whyNoBootStrap("rolling","we rolling");
// whyNoBootStrap("notrolling","i button");
