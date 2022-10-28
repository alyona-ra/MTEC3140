const img = document.querySelectorAll('img');

for (let i = 0; i < img.length; i++) {
    img[i].addEventListener('mouseover', (e) => {
        let newImgSrc = e.target.src.slice(0, -4) + '1.png';
        e.target.src = newImgSrc;
    });
}

for (let i = 0; i < img.length; i++) {
    img[i].addEventListener('mouseout', (e) => {
        let newImgSrc = e.target.src.slice(0, -5) + '.png';
        e.target.src = newImgSrc;
    });
}