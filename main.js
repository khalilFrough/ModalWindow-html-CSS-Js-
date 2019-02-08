const currentImg= document.querySelector('#current');
const imgs= document.querySelectorAll('.imgs img');
const opacity= 0.4; 
imgs.forEach(img =>img.addEventListener('click',imgClick));

function imgClick(e){
    // reset the opacity 
    imgs.forEach(img=> (img.style.opacity=1));
    // changing current image to differnt images. 
    currentImg.src=e.target.src;
    // fadding in 
    currentImg.classList.add('fade-in');
    // remvoing the fade in class after 0.5 sec
    setTimeout(()=>currentImg.classList.remove('fade-in'),500);

    // change the opacity to 0.4; 
    e.target.style.opacity=opacity;
}